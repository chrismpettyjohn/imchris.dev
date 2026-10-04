---
title: Code Was Never the Job
description: Implementation got cheap. Knowing what to build is the part of engineering that was never automated.
date: 2026-08-19
linkedin: https://www.linkedin.com/pulse/code-never-job-christopher-pettyjohn-pm9ec/
---

One of my first jobs was at a marketing startup that sold to small businesses. Restaurants, salons, gyms. Every deal was one location, one owner, one long sales cycle, and no matter how well the quarter went, the math never changed. When your customer is a single storefront, your ceiling is a single storefront.

I started sitting in on sales calls. Nobody asked me to, and as the engineer in the room I had no official reason to be there. But after enough calls a pattern showed up in the rejections. Franchise operators kept walking away for the same three reasons: they couldn't control the brand centrally, they couldn't roll reporting up to corporate, and they couldn't launch a campaign across locations without logging into each one. None of that was on our roadmap. It wasn't even written down anywhere. It was just the shape of the word no.

So I built it. Central brand control, rolled-up reporting, one-click deployment across a franchise.

The company went from closing one location at a time to closing two thousand at a time. Same team, same tools, same number of weeks in a quarter. Nothing about our engineering got better. Our aim did.

For years I told that story as a bit of early-career scrappiness. I've stopped telling it that way, because in 2026 it reads less like an anecdote and more like a job description. It might be the only engineering job description left that's fully priced.

## The constraint moved

I've spent fifteen years in this industry, some of them as a senior engineer on Apple's Special Projects Group, and for nearly all of that time one fact governed everything: turning intent into working software was slow and expensive. Every structure we take for granted in an engineering org is downstream of that fact. Product managers exist to compress intent into specs because implementation couldn't afford ambiguity. Estimation rituals exist because implementation time was the number worth forecasting. Velocity, story points, sprint capacity, the whole measurement apparatus, all of it was built to manage a genuine scarcity.

That scarcity has mostly evaporated. Not uniformly, and not for every kind of system, but enough that implementation is no longer the thing standing between a team and a shipped product. An engineer working with current tools can produce more tested, documented, working software in a week than a small team managed in a quarter a few years ago.

What that buys you depends entirely on where you're pointed. A team aimed at the right problem now gets there in a fraction of the time. A team aimed at the wrong problem also gets there in a fraction of the time, and arrives with full test coverage and a clean migration path, having burned far less runway learning nothing. When building was slow, being wrong was expensive but gradual; you found out over two quarters and had room to turn. Now you can be completely wrong by Thursday.

So the constraint didn't disappear. It moved. It moved from "can we build this" to "should this exist," and most organizations have decades of instrumentation for the first question and almost none for the second.

## What taste actually is

The word people reach for here is taste, which is unfortunate, because it sounds like something you either have or don't, a vibe rather than a skill. It's a skill. It can be observed, evaluated, and developed, and when I try to describe what I'm actually looking for in someone who has it, it comes down to a few specific judgments.

The first is recognizing the real problem under the stated one. The franchise work was never "build a bulk campaign tool." The problem was that our unit of sale was too small to build a company on, and that problem happened to have a software-shaped solution. Someone who takes tickets at face value would have built exactly what was asked and missed the entire opportunity.

The second is knowing what to leave out, which is harder than it sounds and is the judgment AI is worst at. Ask a model to build something and it will build it, thoroughly, with enthusiasm. It has no feel for the feature that shouldn't exist. Restraint doesn't emerge from capability; if anything the two are opposed.

The third is calibration: knowing when good enough is truly good enough, and when it's a quiet liability that will surface at 2 a.m. eighteen months from now. That sense comes from having carried the pager for your own past decisions, and from nowhere else.

The last one is the bridge to architecture. Every consequential architectural choice is a bet about the product's future. Where you draw a service boundary is a claim about what will change and what will hold still. You can't place good bets on the future of a product you don't understand, which is why I've come to think architecture and product judgment aren't neighboring skills at all. They're one skill that presents differently depending on which meeting you're in.

Notice what AI covers on that list: the middle. Implementation, refactoring, coverage, the migration nobody wanted to do. It's excellent there. It has nothing to offer at the edges, because it wasn't on the call in March when a customer said the offhand thing, and it won't be around to regret the boundary you drew in the wrong place.

## The fair objection

There's an obvious problem with this argument, which is that it's comfortable for people like me and rough on everyone earlier in their career. If well-specified implementation is what AI does best, and well-specified implementation is what junior engineers were hired to do, where does the next generation of judgment come from?

I won't pretend the industry has an answer yet. But the premise smuggles in an assumption worth examining: that juniors were ever learning judgment from ticket work. They weren't. Nobody develops taste by implementing someone else's decisions. Taste comes from being in the room when a decision gets made and then living with how it turns out, with your name on it. Tickets were what we handed people while they waited for a seat in that room. The room was always the education, and who gets into it has always been a choice leaders make. It still is.

## What I'd ask leaders to reconsider

I'm not going to hand you a new interview loop or a reorg plan, because the change that matters comes before any of that. It's a change in what you believe an engineering organization is for.

Engineering was never a code-production function. It looked like one because code was the expensive part, the way a restaurant might look like a dishwashing operation if dishes took a week to clean. Engineering is a judgment function that happens to express its output in code, and once you actually believe that, the downstream conclusions arrive on their own. Measuring engineers by volume means grading them on the input that just became cheap. Interviewing for production means selecting for the thing you can now buy. And the largest hidden cost in your org isn't headcount, it's a strong team executing cleanly on something that shouldn't exist.

It also follows that context, not compute, is your scarce resource now. Customer calls, churn interviews, the support queue, the objection a prospect raised on the way out the door. That's the ore judgment gets smelted from, and every layer of translation you keep between your engineers and your customers is a tax paid in the one currency you can't generate.

The franchise feature took about three weeks. I've written far harder code since, and better code, and code I'm prouder of as engineering. None of it changed a company's trajectory the way those three weeks did, because the value was never in the building. It was in knowing what to build.

That's the part that was never automated, because it was never the code. Fifteen years in, I'm convinced it was always the job.
