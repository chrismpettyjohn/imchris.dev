---
title: "Building high performance MMOs in the browser"
description: Why I'm building a new multiplayer game engine from the ground up with Bun, Rust, Pixi 8 and WebTransport.
date: 2026-10-14
---

## Background

Growing up there were many uncertainties in my life, but one thing remained certain, and that was a little online virtual world I spent countless hours in. For better or worse, it was always there for me in my childhood and it's where I met a lot of my friends, learned to code and gained countless amounts of development experience running my own private servers.

Not a lot of people remember games like it these days, and working on private servers for it is a nostalgic trip down memory lane. These community-run servers exist as a free alternative to the official experience, which can often cost hundreds of dollars to have fun.

All of this in mind, I like to work on private servers from time to time just to learn new stuff and to keep my development skills sharp. Let's face it, most development gigs are not enough to challenge you and so it's important to work on side projects and do work that's both interesting and builds on top of your skillset.

## Today's Problem

Most of the tools that have been developed and released for these private servers were built over a decade ago and have been aging since then, without updates. Despite the lack of updates many people still rely on these aging assets to run their own servers.

I am building a new gaming experience which will introduce a ton of new requirements. In my game, which can be thought of as a hybrid between a social virtual world, Runescape and Foxhole, I intend to add support for NPCs, large interconnected maps, vehicles, weather, physics and so much more. The existing community tools are largely unequipped for this job. The most popular open-source client has powered virtually every private server over the last decade and is excellent at what it does, but it's tied to the rigid and simple structure of the game as it is today and not as it will be tomorrow. It was built on PixiJS and works well at running these games in HTML5, when they had historically run in Adobe Flash Player. The problem is that it is not capable of handling some of the new requirements being introduced.

## The Solution

I have been building a new experience from the ground up, using a combination of new and old tools to build a high-performance and feature-rich gaming engine that can handle all of our new requirements. The underlying core of this is built off of Bun, TS7, and Rust libraries where available. Instead of using WebSockets, I opted for WebTransport which is able to support the larger volume of packets that my game will produce.

The core is built using a combination of rapier2d, Pixi 8 and recast-navigation. With this clever combination of tools I am able to finally achieve the unique balance I need to build a social-sandbox-meets-Foxhole hybrid.
