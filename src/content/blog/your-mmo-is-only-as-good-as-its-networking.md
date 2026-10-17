---
title: "Your MMO is only as good as its networking"
description: Why I picked WebTransport over WebSockets for my new engine, and why you might want to as well, without giving up on browser compatibility.
date: 2026-10-17
---

## Background

In [my last post](/blog/reimagining-a-classic-building-a-new-game-client/) I talked about why I'm building a new multiplayer game engine from the ground up with Bun, Rust, Pixi 8 and WebTransport. I glossed over that last one pretty quickly, and a few people reached out asking why I'd bother. WebSockets work. Every private server I've ever touched has run on them. So why rock the boat?

The short answer is that you can have the prettiest renderer and the smartest pathfinding in the world, but if your packets show up late, your game feels broken. Players don't blame the network. They blame your game. After years of running private servers, I've lost count of how many times "the server is lagging" really meant "the transport layer is choking on its own rules."

So let's talk about it.

## Today's Problem

The classic virtual worlds I grew up on were pretty forgiving on the network side. You clicked a tile, your avatar walked there, someone said hello in chat. A handful of messages per second per player, and nobody noticed if one showed up a few hundred milliseconds late.

That's not the game I'm building anymore. Once you add NPCs, vehicles, physics, weather and big interconnected maps, the volume of state flying between the client and server goes way up. Positions, velocities, collisions, projectiles, world events. Some of that data matters forever (you bought an item, you joined a squad), and some of it is stale the moment the next update arrives (where a truck was 50 milliseconds ago).

WebSockets treat all of it the same, and that's the core of the issue.

## The Case for WebSockets

I want to be fair here, because WebSockets have earned their place. They've powered virtually every browser game I've worked on, and for a lot of projects they're still the right call.

### Pros

- **They work everywhere.** Every browser, every device, every network. If someone can load your page, they can almost certainly open a WebSocket.
- **They're simple.** One connection, ordered messages, a tiny API. You can have a working prototype in an afternoon.
- **They get through almost anything.** They ride on plain TCP over the same ports as regular web traffic, so corporate firewalls, school networks and hotel Wi-Fi rarely get in the way.
- **The ecosystem is mature.** Bun ships a fast WebSocket server out of the box, and there are battle-tested libraries, load balancers and debugging tools for every stack.
- **Ordered and reliable by default.** For chat, trades, inventory and anything else that has to arrive exactly once and in order, that's exactly what you want.

### Cons

- **Head-of-line blocking.** This is the big one. Because everything goes through a single ordered TCP stream, one lost packet holds up everything behind it until it's resent. A dropped position update can stall your chat messages, your combat events and the next ten position updates that are already sitting there.
- **Everything is reliable, even when it shouldn't be.** There's no way to say "this update is disposable, don't bother resending it." You end up waiting on data you'd happily throw away.
- **One lane for all traffic.** If you want to separate chat from movement from bulk asset downloads, you either open multiple sockets or build your own multiplexing on top.
- **Rough on bad connections.** Mobile players switching between Wi-Fi and cellular lose the connection entirely and have to reconnect from scratch.

For a social world where most of the action is chat and click-to-walk, these cons barely register. For a Foxhole-style sandbox with vehicles and physics, they're the difference between smooth and stuttery.

## The Case for WebTransport

WebTransport runs on top of HTTP/3, which runs on QUIC instead of TCP. Without getting too deep in the weeds, that gives you a few tools WebSockets simply don't have.

### Pros

- **Multiple independent streams.** You can open as many streams as you want over one connection, and a lost packet on one doesn't block the others. Chat can keep flowing while a movement stream recovers.
- **Unreliable datagrams.** This is what sold me. You can fire off messages that are allowed to get lost. For position and physics snapshots, where the next update makes the last one irrelevant, that's exactly the behavior you want. No waiting, no resending stale data.
- **Pick reliability per message type.** Inventory changes go on a reliable stream, world snapshots go out as datagrams. You design the networking around the game instead of around the transport.
- **Faster connections and better recovery.** QUIC sets up connections with fewer round trips, and it's designed to survive things like a player's network changing underneath them.
- **Encrypted by default.** TLS is baked in, so there's no unencrypted mode to accidentally ship.

### Cons

- **More moving parts on the server.** You need an HTTP/3 server and a valid TLS certificate, even in development. It's not as plug-and-play as WebSockets, and Bun doesn't hand it to you out of the box the way it does WebSockets. This is one of the places I lean on Rust.
- **UDP can get blocked.** QUIC runs over UDP, and some corporate and school networks still block or throttle it. You can't assume every player can reach you.
- **The tooling is younger.** Fewer libraries, fewer examples, fewer Stack Overflow answers when something goes sideways at 2 a.m.
- **Datagrams are small.** They have to fit in a single packet, so you're working with roughly a kilobyte at a time. That's plenty for a snapshot if you're disciplined about your packet format, but it forces you to be.
- **Browser behavior is still a little uneven.** Support is there, but the edges aren't identical everywhere yet (more on that below).

## "But does it work in every browser?"

For a long time, this was the deal breaker. Chrome, Edge and Firefox have supported WebTransport for a while, but Safari was the holdout, and you can't build a browser MMO that ignores every iPhone and iPad.

That changed this year. Safari 26.4 shipped WebTransport in March 2026, which made it Baseline across all the major browsers. For the first time, I can actually recommend it for a game that needs to run anywhere.

A couple of caveats from my own testing and reading:

- On Apple devices, support is tied to the operating system version, not just the browser, so players on older iOS or macOS releases won't have it.
- In some situations Safari can quietly fall back to HTTP/2 over TCP. Your streams keep working, but your datagrams don't, so your code needs to handle that gracefully.
- The spec is still settling, and browsers don't all behave exactly the same at the edges. Test on real devices.

The convenient part is that none of this forces you to pick one or the other. My client tries WebTransport first and falls back to a WebSocket if it can't connect. Both paths feed into the same message layer, so the rest of the game doesn't care which one it got. Players on a locked-down network or an old device still get in. Everyone else gets the good stuff.

## How I'm using it

In my engine, traffic is split by what it actually needs:

- **Datagrams for world snapshots:** entity positions, vehicle state and physics updates coming off rapier2d. If one gets lost, the next one is already on its way.
- **A reliable stream for gameplay events that have to land:** inventory, trades, combat results, joining and leaving areas.
- **A separate reliable stream for chat and social features,** so a busy battlefield never makes your messages lag.
- **Short-lived streams for loading map chunks** as players move between areas, without blocking anything else.

On a WebSocket, all four of those would be fighting for the same lane. On WebTransport, they just stay out of each other's way.

## Wrapping up

If you're building a chat-heavy social world with modest update rates, WebSockets are still a great choice, and honestly the easier one. There's no shame in shipping the simple thing.

But if your game has real-time movement, physics, vehicles or lots of players in the same space, the transport layer stops being a detail and starts being a feature. WebTransport lets you decide what's worth waiting for and what isn't, and now that every major browser supports it, keeping a WebSocket fallback around is all it takes to stay compatible.

Your MMO is only as good as its networking. Pick the tool that lets your game feel the way you imagined it.
