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

# Building trevisorifiuti.top: A Technical Deep Dive into an Open-Source Waste Management Reminder

Living in Treviso, a small Italian city where waste is collected door-to-door and each municipality has its own waste collection schedule, I often forgot which bins to put out on which days. Although the local waste management company provides a paper calendar and a website calendar, I found the latter not very user-friendly. Checking it daily became tedious, especially for a busy software developer like myself. That's when I decided to create trevisorifiuti.top, a web application that automatically notifies residents via Telegram about upcoming waste collection days.

Today, I'm excited to share that the project is now open-source and available at [github.com/mattiadevivo/trevisorifiuti.top](https://github.com/mattiadevivo/trevisorifiuti.top). In this post, I'll walk through the technical architecture and design decisions behind the project.

## The Problem

The Treviso area has a complex waste collection system with different schedules for different municipalities and waste types (organic, paper, plastic, glass, etc.). Residents need to check the official website regularly (or the paper calendar) to know which bins to prepare but we all know, our life is full of distractions and it's easy to miss collections.

## The Solution Architecture

trevisorifiuti.top is built as a monorepo containing four main components:

### 1. Frontend: A Responsive SolidJS Application

I chose [SolidJS](https://solidjs.com) for the frontend because it promises excellent performance and because it has a reactive model that is easy to use and understand, and honestly because I just wanted to try it out instead of choosing React by default. The application provides:

- An intuitive interface to view the waste collection calendar
- Municipality selection so you no longer have to scroll through the entire calendar in the official website if you live in a different municipality
- Telegram bot configuration for automated notifications

The frontend is deployed on GitHub Pages and communicates with the Supabase backend via REST APIs.

### 2. Scraper: Automated Data Collection with Python

The heart of the system is the Python scraper that automatically fetches waste collection data from the official website of the local waste management company. This component:

- Runs on a scheduled basis (once a week) as a GitHub Workflow to keep data fresh
- Parses the official waste collection calendars
- Normalizes data across different municipalities
- Updates the Supabase database.

**Implementation Details:**

- Python with requests and BeautifulSoup for web scraping
- Scheduled execution to ensure up-to-date data and avoid manual updates
- Error handling and logging for reliable operation
- Data validation to ensure accuracy before database updates

### 3. Supabase: Backend and Database Infrastructure

[Supabase](https://supabase.com) serves as the backend platform, providing:

**Database Schema:**

- Tables for municipalities, waste types, and collection schedules
- User preferences and Telegram chat configurations
- Efficient indexing for fast calendar queries

**Edge Functions:**

- Notification scheduling logic
- Telegram bot webhook handling
- API endpoints for the frontend

Using Supabase allowed me to focus on business logic rather than backend infrastructure management. The PostgreSQL database provides powerful querying capabilities, while edge functions handle the notification workflow.

**Database Design Highlights:**

- Normalized schema to avoid data duplication
- Efficient indexes on date and municipality fields
- Row-level security for user data protection
- Database functions to reuse common queries between edge functions and frontend

### 4. Infrastructure: Terraform for Repeatable Deployments

All infrastructure is defined as code using [Terraform](https://www.terraform.io), making deployments reproducible and version-controlled. The infrastructure project manages:

- Supabase project configuration
- <strike>Render project configuration for frontend deployment </strike> no more since now frontend is deployed on GitHub Pages

This approach ensures that the all the infrastructure is defined as code and can be easily replicated.

## The Notification Flow

Here's how the notification system works:

1. The scraper updates the database with waste collection schedules
2. A Supabase edge function runs daily to check the next day's collections
3. For each municipality with scheduled collections, the function queries users who have configured Telegram notifications
4. The function sends personalized messages via the Telegram Bot API
5. Users receive notifications the day before their collection day

This architecture ensures timely notifications without requiring users to actively check the calendar.

## Technical Challenges and Solutions

### Challenge 1: Data Consistency

Different municipalities present their data in varying formats. The scraper needed to normalize this information into a consistent schema.

**Solution:** I implemented a flexible parsing layer that adapts to different source formats while validating the output against a strict schema before database insertion.

### Challenge 2: Reliable Notifications

Ensuring users receive notifications even if there are temporary failures in the system.

**Solution:** The notification edge function includes retry logic and logs all delivery attempts. If the Telegram API is temporarily unavailable, the system retries with exponential backoff.

### Challenge 3: User Privacy

Handling user data, particularly Telegram chat IDs, required careful consideration of privacy.

**Solution:** Supabase's row-level security ensures users can only access their own notification preferences. Telegram chat IDs are stored securely and never exposed through public APIs.

## Open Source and Community

By making trevisorifiuti.top open-source, I hope to:

- Allow other municipalities to adapt the system for their needs
- Receive contributions from the community
- Provide a learning resource for developers interested in building similar civic tech projects

The modular architecture means developers can contribute to individual components without needing to understand the entire system.

## Future Roadmap

Some features I'm considering for future development:

- Multiple notification channels (email, push notifications)
- Statistics and insights on waste collection patterns

## Getting Started

If you're interested in running your own instance or contributing to the project:

1. Clone the repository: `git clone https://github.com/mattiadevivo/trevisorifiuti.top.git`
2. Check the README for setup instructions
3. Each component has its own documentation in its respective directory
4. Issues and pull requests are welcome!

## Conclusion

Building trevisorifiuti.top was fun, building a project that is actually useful and improve people's life (or at least mine) it's rewarding.

The project demonstrates how modern web technologies like SolidJS, Supabase, and Terraform can be combined to create practical, user-focused applications. By open-sourcing the code, I hope others can learn from this approach or adapt it for their own communities.

If you live in the Treviso area, try trevisorifiuti.top at [trevisorifiuti.top](https://trevisorifiuti.top). If you're a developer interested in any of the technologies used, check out the [GitHub repository](https://github.com/mattiadevivo/trevisorifiuti.top) and consider contributing!

---

_Have questions or suggestions? Feel free to open an issue on GitHub or reach out directly. Let's make waste management a little easier, one notification at a time._
