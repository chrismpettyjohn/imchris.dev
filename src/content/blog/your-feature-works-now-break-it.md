---
title: Your Feature Works. Now Break It.
description: A working happy path is only one part of a reliable product. Bring the QA mindset, and AI, to the failure cases before you build.
date: 2026-09-01
linkedin: https://www.linkedin.com/pulse/great-product-engineers-dont-just-build-happy-path-pettyjohn-ydzac/
---

The hardest part of using AI for software testing isn't generating test cases.

It's accounting for everything that isn't supposed to happen.

A user submits a form twice. Required data is missing. An API returns an unexpected response. The network slows down halfway through a transaction. Two valid actions happen in the wrong order. A dependency fails during a critical workflow.

These aren't rare exceptions. They're normal conditions in production systems.

AI tends to focus on the happy path unless we give it enough context to look beyond it. Product engineers can fall into the same trap. We build the intended workflow, confirm that it works, and move on to the next feature.

But a working happy path is only one part of a reliable product.

A strong product engineer also asks:

- What happens when this request times out?
- Can this action safely run twice?
- What happens when the data is incomplete or outdated?
- What does the user see when a dependency is unavailable?
- Can the system recover without manual intervention?
- How will we know when this fails in production?

This is often associated with the QA mindset, but it shouldn't belong exclusively to QA.

Product engineers should bring that same skepticism into design and development. Before implementing the success state, we should think about failure states, recovery paths, observability, and how the product behaves under stress.

That doesn't mean predicting every possible failure. It means identifying the problems most likely to occur and deciding how the system should respond before they do.

Sometimes the answer is a retry. Sometimes it's validation, idempotency, a fallback, a clearer error message, an alert, or simply refusing to continue when doing so would be unsafe.

AI can help explore these scenarios. It can generate edge cases, challenge assumptions, model failure conditions, and expand test coverage. But we still need to ask the questions that push it beyond the expected workflow.

The goal isn't just to use AI to test the product we built.

It's to use AI, along with the QA mindset, to pressure-test the product we're about to build.

Great product engineering isn't only about making the happy path feel effortless. It's also about anticipating where fires might start, containing the damage, and giving the system a way to recover.

Build the feature.

Then ask how it breaks.
