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

1. **Codebase** - each app should have its own codebase, if there's common code shared between multiple apps this MUST BE a library included via a _dependency manager_. Each app has only one codebase but multiple deploys (dev, staging, prod).
2. **Dependencies** - dependencies must be **explicitely declared and isolated**, in Python for example you can use `pip` in order to manage depedencies and `virtualenv` for isolation. It is better to use a dependency manager that creates/uses **lockfiles** (like [Poetry](https://python-poetry.org/)) since they allow repeatable and deterministic installations (you can be sure that dependencies are exactly because of the hashes being saved in the lockfile.)
3. **Config** - **config and code** must be separated, no costants as config. Code MUST NOT contain constant values that are used as configuration depending on the environment.

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

A good way to properly store configurations is to have a `config.ts` file where to collect all the configuration keys.

```ts
const config = {
  username: process.env.USERNAME || "defaultusername",
};
```

4. **Backing service** - a backing services include any service the app consumes over the network as part of its normal operation like _databases, queue, SMTP services, caching systems, ..._. The app should be able to switch from a local instance of the db to a thirdy party service without the need to change the code but only by changing the **configuration**.

5. **Build, release, run** - separate strictly build, release and run operations. Each release should have a unique identifier like a timestamp `2011-04-06-20:32:17` or incrementing number `v0.0.1`

6. **Processes** - app must be executed as a **stateless** process, no essential data must be stored inside memory or filesystem but rather on exetrnal stateful services like _databases_, this because there could be more than one instance of the app and because, even when only one process replica is up, a restart or crash could wipe all the filesystem and memory data.

7. **Port binding** - each app must expose itself in a _self-contained way_ by including a web server that makes it available through a **PORT**, this because each app must be a _backing service_ of another app, addressable via its config with the app's _url and port_.

8. **Concurrency** - in order to be able to make the application scaling we need to separate its workloads into multiple _processes_, for instance we could divide HTTP requests (handled by a web process) and long-running background tasks by a worker process. This way, each process can be scaled indipendently from the others. You should not daemonize your app but rather execute it as a normal process whose execution is managed by the system's process.

9. **Disposability** - The application must be disposable, as its processes can be started or stopped at any moment, leading to easy hot-reload during development and quick deployment in production when changing release or configuration. The _startup time_ should be as low as possible, and every **SIGTERM** signal should be handled to properly close all connections with backing services after completing pending operations. This is particularly useful in modern deployment environments such as Kubernetes, where container shutdown is triggered by sending a SIGTERM signal to the container's main process, and where the application can be replicated horizontally under heavy load conditions: the lower the startup time, the faster new requests can be handled.

10. **Dev/prod parity** - keep all the environments as similar as possible, this way:

    - developers will be faster because they'll spend less time in changing configuration between environments or setting up their development environments. Onboarding of new devs will be easier as well.
    - both devs and ops can handle deployments and their configuration
    - ther are no differences in tech stacks = no unexpected behaviours, no changes in load capabilities.

    Especially in the past, when developing locally, developers used to opt for the lightweight version of a backend service (SQLite instead of PostgreSQL, for example), but nowadays most of the backends can be easily installed using **modern packaging systems** (homebrew, apt, ...) or containerised thanks to **Docker** to have not only a production-like environment, but also an isolated and repeatable one.

11. **Logs** - application logs are the stream of aggregated, time-ordered events collected from the output streams of all running processes and backing services. The application writes logs to `stdout`, this will then collected by using log routers (Fluentd for example) and the delivered to indexing and analysis systems like Splunk, ElasticSearch or cloud-vendor solutions like Google Cloud Logging.

12. **Admin processes** - whenever developers need to run admin processes (database migrations, running a console in order to execute arbitrary code, running one-time scripts) those need to be executed in an identical environment as the regular long-running processes of the app in order to preserve _dependency isolation_. They run against a release, using the same codebase and config as any process run against that release. Admin code must ship with application code to avoid synchronization issues.

### Resources

- [12 factor app](https://12factor.net/)
