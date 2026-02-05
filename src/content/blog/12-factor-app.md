---
title: "12 factor app"
description: "You should keep in mind those pillars before developing your application."
pubDate: "2024-07-26"
image: "/blog/12-factor-app.png"
keywords:
  [
    software development,
    12 factor app,
    software architecture,
    software development lifecycle,
  ]
---

_If your app doesn't follow these principles, you're probably making your future self's life harder._

Early in my career, I kept running into the same problems: "works on my machine" bugs, painful deployments, config values scattered across the codebase. Then I discovered the [12-factor app methodology](https://12factor.net/) and suddenly a lot of those headaches had well-known solutions. These twelve principles aren't new, but I still see teams ignoring them, so here's my take on each one.

## 1. Codebase

Each app should have its own codebase. If there's common code shared between multiple apps, that code should be a library included via a dependency manager. One codebase, many deploys (dev, staging, prod).

## 2. Dependencies

Dependencies must be **explicitly declared and isolated**. In Python for example you can use `pip` for dependency management and `virtualenv` for isolation. I'd recommend using a tool that creates **lockfiles** (like [Poetry](https://python-poetry.org/)). They guarantee repeatable, deterministic installations thanks to the hashes saved in the lockfile.

## 3. Config

This is one I see violated constantly. **Config and code must be separated**, no constants as config. Your code should never contain hardcoded values that change between environments.

```ts
// DO NOT DO THIS
let username: string;
switch (process.env.NODE_ENV) {
  case "production":
    username = "produser";
    break;
  case "staging":
    username = "staginguser";
    break;
  default:
    throw new Error("Unknown environment", { cause: process.env.NODE_ENV });
}
// DO THIS
const username = process.env.USERNAME;
```

A good pattern is to collect all configuration keys in a single `config.ts` file:

```ts
const config = {
  username: process.env.USERNAME || "defaultusername",
};
```

## 4. Backing Services

Any service your app consumes over the network (databases, queues, SMTP, caches) should be treated as an attached resource. You should be able to swap a local database for a managed cloud one by changing **configuration only**, not code.

## 5. Build, Release, Run

Strictly separate build, release, and run stages. Each release should have a unique identifier like a timestamp (`2011-04-06-20:32:17`) or a version number (`v0.0.1`). This makes rollbacks straightforward and auditing easy.

## 6. Processes

Your app should run as **stateless processes**. Don't store essential data in memory or the filesystem, use external stateful services like databases instead. This matters because you might have multiple instances running, and even with a single process, a restart or crash wipes everything in memory and on the local filesystem.

## 7. Port Binding

Each app should expose itself in a self-contained way by binding to a **port**. This makes every app a potential backing service for another app, addressable via URL and port in the config.

## 8. Concurrency

To scale your application, separate its workloads into multiple process types. For instance, HTTP requests can be handled by a web process while long-running background tasks go to a worker process. Each process type can then scale independently. Don't daemonize, let the OS process manager handle execution.

## 9. Disposability

This one became much more relevant to me when I started working with Kubernetes. Your processes should start fast and shut down gracefully. Handle **SIGTERM** signals to close connections after completing pending work. The lower the startup time, the faster new replicas can absorb traffic during horizontal scaling.

## 10. Dev/Prod Parity

Keep all environments as similar as possible. This means:

- Developers spend less time fighting environment-specific bugs and onboarding is smoother
- Both devs and ops can handle deployments confidently
- No surprises from different tech stacks between environments

In the past, developers used lightweight alternatives locally (SQLite instead of PostgreSQL). Nowadays, **Docker** makes it trivial to run production-like services locally: not just similar, but identical and isolated.

## 11. Logs

Treat logs as a stream of time-ordered events. Your app should write to `stdout`, nothing more. Let log routers (like Fluentd) collect and forward them to analysis systems like Splunk, Elasticsearch, or cloud-vendor solutions like Google Cloud Logging.

## 12. Admin Processes

Database migrations, one-time scripts, console sessions: all admin processes should run in the **same environment** as the regular app processes. Same codebase, same config, same dependencies. Admin code must ship with the application to avoid synchronization issues.

## Final Thoughts

These twelve principles might seem obvious once you know them, but I've seen plenty of production systems that violate half of them. If you're starting a new project or inheriting an existing one, running through this checklist is one of the highest-leverage things you can do.

The full methodology is at [12factor.net](https://12factor.net/), it's a short read and well worth your time.
