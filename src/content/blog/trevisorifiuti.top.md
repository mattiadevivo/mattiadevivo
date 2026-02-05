---
title: "trevisorifiuti.top"
description: "Building trevisorifiuti.top: A Technical Deep Dive into an Open-Source Waste Management Reminder"
pubDate: "2026-01-10"
image: "/blog/trevisorifiuti.top.png"
keywords:
  [
    fullstack development,
    solidjs,
    supabase,
    terraform,
    python,
    telegram,
    waste management,
    open source,
    automation,
  ]
---

_Sometimes the best side projects come from the most mundane problems._

Living in Treviso, a small Italian city where waste is collected door-to-door, I kept forgetting which bins to put out on which days. Each municipality has its own schedule, and while the local waste management company provides a paper calendar and a website, the latter is not exactly user-friendly. Checking it daily became tedious, especially for someone who'd rather automate things than remember them.

So I built [trevisorifiuti.top](https://trevisorifiuti.top), a web app that sends Telegram notifications about upcoming waste collection days. Today it's open-source and available at [github.com/mattiadevivo/trevisorifiuti.top](https://github.com/mattiadevivo/trevisorifiuti.top). Here's how it works under the hood.

## The Problem

The Treviso area has a surprisingly complex waste collection system: different schedules for different municipalities and waste types (organic, paper, plastic, glass, etc.). Residents need to check the official website regularly (or keep the paper calendar handy) to know which bins to prepare. But let's be honest, life is full of distractions and it's easy to miss a collection.

## The Solution Architecture

trevisorifiuti.top is built as a monorepo with four main components.

### 1. Frontend: SolidJS

I chose [SolidJS](https://solidjs.com) for the frontend because of its excellent performance and intuitive reactive model, and honestly because I just wanted to try something other than React for once. The app provides:

- An intuitive calendar view for waste collection schedules
- Municipality selection, so you don't have to scroll through the entire official calendar
- Telegram bot configuration for automated notifications

It's deployed on GitHub Pages and talks to Supabase via REST APIs.

### 2. Scraper: Python

The heart of the system is a Python scraper that fetches waste collection data from the official website. It:

- Runs weekly as a GitHub Workflow to keep data fresh
- Parses and normalizes calendars across different municipalities
- Validates data before writing to Supabase

I went with `requests` + `BeautifulSoup`. Nothing fancy, but it gets the job done reliably. The scheduled execution means I never have to think about manual updates.
Even if it was overkill, I wanted to try the DI `injector` package and, if you're interested in it, a small project like this could probably make you learn it the easy way.

### 3. Backend: Supabase

[Supabase](https://supabase.com) was a natural choice: it gave me a PostgreSQL database, edge functions, and auth without having to manage any infrastructure myself. Here's what it handles:

- **Database:** tables for municipalities, waste types, collection schedules, and user preferences. Normalized schema with efficient indexes on date and municipality fields.
- **Edge Functions:** notification scheduling, Telegram webhook handling, and API endpoints for the frontend.
- **Security:** Row-level security for user data protection, plus database functions that are reused across edge functions and the frontend.

Using Supabase let me focus on the actual product logic instead of setting up servers and databases.

### 4. Infrastructure: Terraform

All infrastructure is defined as code using [Terraform](https://www.terraform.io), making deployments reproducible and version-controlled. It manages the Supabase project configuration. I initially also had the frontend deployed on Render, but later migrated to GitHub Pages to keep things simpler and free.

## The Notification Flow

This is the part I'm most proud of. It's what makes the app actually useful day-to-day:

1. The scraper updates the database with waste collection schedules
2. A Supabase edge function runs daily to check the next day's collections
3. For each municipality with scheduled collections, it queries users who have configured Telegram notifications
4. Personalized messages are sent via the Telegram Bot API
5. Users get a reminder the day before their collection day

No more forgotten bins on the curb.

## Why Open Source

By open-sourcing the project, I hope to:

- Let other municipalities adapt the system for their own needs
- Get contributions and feedback from the community
- Provide a reference for developers building similar civic tech projects

The modular architecture means you can contribute to a single component without understanding the entire system.

## What's Next

Some features I'm considering:

- Multiple notification channels (email, push notifications)
- Statistics and insights on waste collection patterns

## Try It Out

If you're interested in running your own instance or contributing:

1. Clone the repo: `git clone https://github.com/mattiadevivo/trevisorifiuti.top.git`
2. Check the README for setup instructions
3. Each component has its own docs in its directory
4. Issues and pull requests are welcome!

Building trevisorifiuti.top was genuinely fun. There's something rewarding about solving a real problem you face every day, even if it's just remembering to take out the trash. If you live in the Treviso area, give it a try at [trevisorifiuti.top](https://trevisorifiuti.top). And if you're a developer curious about any of the tech involved, the [source code](https://github.com/mattiadevivo/trevisorifiuti.top) is all there.
