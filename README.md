# Agent Butler Client

> An AI-powered personal productivity and schedule management app for **macOS**. Turn natural-language ideas into actionable plans—and automate selected writing tasks with **Butler Claw**.

**AI Conversation · Task Planning · Calendar · Butler Claw Automation · Reminders · Progress Tracking**

[![Platform](https://img.shields.io/badge/platform-macOS-blue.svg)]()
[![Swift](https://img.shields.io/badge/Swift-SwiftUI-orange.svg)]()

---

## ✨ Overview

**Agent Butler Client** is the Mac companion to the Agent Butler productivity experience. It helps you:

- Describe goals in natural language and get structured schedules
- Chat flexibly with **Agent Butler**, your personal AI assistant
- Delegate repeatable **text and document work** to **Butler Claw**, an automated task executor that runs on your calendar
- Manage tasks, reminders, and daily progress in one workspace

The app connects to **third-party LLM providers** using API credentials you supply, or runs **local models** on your Mac.

### V1 focus

- 🤖 AI-powered schedule planning & Q&A
- 🦞 **Butler Claw** — automated writing / document tasks
- 📅 Calendar & task list management
- 🌐 Optional **web search** for up-to-date answers
- 🔔 Reminders & daily briefings
- 🧠 Local preference learning (*Butler Experience*)
- ☁️ **iCloud** sync across signed-in devices (Sign in with Apple)
- 🖥️ **Local models** via llama.cpp (actively improving)
- 📊 Task completion tracking & celebrations

> **Plan with AI. Act with clarity. Make progress every day.**

---

## 🚀 Getting Started

### Requirements

- macOS (Apple Silicon or Intel)
- An API key from a supported provider **or** a local GGUF model for on-device inference
- Optional: iCloud account for sync (Sign in with Apple)

### Step 1 — Configure Your AI Provider

Open **Settings** and choose an **API Provider**:

| Provider | Notes |
| -------- | ----- |
| **OpenAI** | GPT-4.1, GPT-4o, GPT-5.x, etc. |
| **Groq** | Fast inference |
| **Moonshot** | Kimi models |
| **Together AI** | Open models |
| **OpenRouter** | Multi-model gateway |
| **Qwen (DashScope)** | Alibaba Cloud |
| **Custom** | Ollama, LM Studio, any OpenAI-compatible endpoint |
| **Local Model** | Download & run GGUF via integrated llama.cpp server |

### API configuration

1. Open **Settings**
2. Select your **API Provider**
3. Follow the in-app configuration example
4. Enter your **API Key** (stored in **macOS Keychain** on this device)
5. Test the connection and start chatting

> **Security:** API keys are sensitive. Never commit them to Git or share them publicly.

### Step 2 — Sign in (optional, recommended)

Use **Sign in with Apple** to sync calendar, chat history, profile data, and Butler Claw jobs across your Macs via your **private iCloud database**.

API keys **remain on-device** in Keychain and are **not uploaded** to our servers.

---

## 🤖 Three AI Interaction Modes

Agent Butler Client offers three modes for different workflows.

### 1. Schedule Planning

Structured planning for dates, deadlines, and time slots.

Describe what you want in natural language—for example:

> *"I need to prepare for a trip tomorrow. Help me block time for packing, tickets, and errands."*

Agent Butler analyzes context (current time, weather, location, existing calendar tasks, your saved preferences) and proposes a concrete schedule for you to **review and confirm** before it is added to your calendar.

Best for:

- Daily / weekly planning
- Trip & event preparation
- Time-based errands
- Single-task scheduling with conflict awareness

---

### 2. Q&A & Planning

Flexible conversation with attachments, goal discussion, and **batch task generation**.

Use cases:

- 💬 Open-ended Q&A
- 💡 Brainstorming & goal refinement
- 📎 Images & files in chat (with multimodal models)
- 📋 Paste detailed day plans → **Generate Goal Tasks** → add many timed tasks at once
- 🌐 **Web search** — the assistant can search the web and read page content when enabled

Locally stored **Butler Experience** insights (preferences, habits, constraints) help personalize future planning—stored on your device and included in your iCloud sync scope when signed in.

---

### 3. Butler Claw — Automated Text Task Execution

**Butler Claw** combines your personal AI with scheduled agent workflows for work your Mac can do in the background.

Typical flow:

```text
Upload files / images + describe the work & deadline
        ↓
Review the proposed multi-step plan
        ↓
Confirm → tasks are written to your calendar
        ↓
Butler Claw runs each task on schedule (~15 min before start)
        ↓
Deliverables (summaries, revised text, PDF/DOCX, etc.) appear in Completed Items
```

Butler Claw acts as an **active task executor**—not just a chatbot—helping you finish writing and document tasks while **you stay in control** of what gets scheduled and approved.

Features:

- Multi-day / multi-file job planning
- Calendar-driven execution queue
- PDF & Word delivery via local compositors
- **Butler Claw Experience** — reusable instruction presets for recurring job types

---

## 🌐 Web Search

When enabled, the assistant can search the web and use fetched page content in its replies—useful for research, news, and decisions that need fresh information.

The app applies safety rules to reduce sending sensitive local paths, credentials, or disallowed content in search queries.

---

## 📅 From Ideas to Execution

Agent Butler connects conversation, planning, and action:

```text
You share intent
        ↓
Agent Butler structures tasks
        ↓
Calendar & task list
        ↓
Reminders & daily briefing
        ↓
You complete work (or Butler Claw delivers output)
        ↓
Progress tracking & celebrations
```

### Schedule views

- **Calendar** — traditional day / week view
- **Task list** — scan upcoming and overdue items
- **Reschedule** — AI-assisted day replanning when plans change

---

## 🖥️ Local Models (macOS)

Prefer privacy or offline use? Switch to **Local Model** in Settings:

- One-click download of curated GGUF models
- Runs via **llama.cpp** (`llama-server`) on your Mac
- Optional multimodal support depending on model (VL / vision models + mmproj)

Local inference is under active development; capabilities vary by model and hardware.

---

## 🧠 Local Personalization

During conversations, durable traits and preferences may be saved as **Butler Experience** entries to improve future scheduling and advice.

- Stored locally and synced via **iCloud** when signed in
- Not used to train third-party models by this app
- You can review and manage experiences in Settings

> **Third-party LLMs:** When you use OpenAI, Groq, Moonshot, etc., your prompts are sent to that provider under **their** privacy policies.

---

## 🔐 Privacy & Data

| Data | Storage |
| ---- | ------- |
| API keys | macOS **Keychain** (this device only) |
| Calendar, chat, profile, Butler Claw jobs | Local database + optional **iCloud CloudKit** private DB |
| Butler Experience | Local + iCloud sync |
| LLM requests | Transmitted to **your chosen provider** |

We do not operate a proprietary cloud backend for chat content. Sync uses **Apple iCloud** under your Apple ID.

---

## 🔒 Export Compliance

This application is a personal productivity and scheduling tool. It does **not** implement proprietary or non-standard encryption.

- Network traffic uses standard **HTTPS/TLS** via system frameworks
- No dedicated cryptographic product features
- API keys are credentials for third-party services, not an custom encryption system

For App Store review, the app declares standard exempt encryption (`ITSAppUsesNonExemptEncryption` as appropriate).

---

## 🛠️ Feature Summary

| Feature | Description |
| ------- | ----------- |
| 📆 Schedule Planning | Natural-language → confirmed calendar slots |
| 💬 Q&A & Planning | Flexible chat, attachments, batch task extraction |
| 🦞 Butler Claw | Scheduled automated writing / document tasks |
| 🌐 Web Search | Optional online research with page reading |
| 📅 Calendar & Tasks | Unified schedule management |
| 🔔 Reminders | Notifications & daily briefing window |
| 🧠 Butler Experience | Local preference learning |
| ☁️ iCloud Sync | Sign in with Apple + CloudKit |
| 🔌 LLM Providers | OpenAI, Groq, Moonshot, Together, OpenRouter, Qwen, Custom |
| 🖥️ Local Models | GGUF via llama.cpp on Mac |
| 🎉 Progress | Completion tracking & celebrations |

---

## 🔄 Typical Workflow

```text
┌───────────────────────────────┐
│   Configure API or Local AI   │
└───────────────┬───────────────┘
                ↓
┌───────────────────────────────┐
│  Schedule / Q&A / Butler Claw │
└───────────────┬───────────────┘
                ↓
┌───────────────────────────────┐
│   Plan → Review → Confirm     │
└───────────────┬───────────────┘
                ↓
┌───────────────────────────────┐
│   Calendar · Reminders        │
└───────────────┬───────────────┘
                ↓
┌───────────────────────────────┐
│  Complete · or Butler Claw    │
│       delivers output         │
└───────────────┬───────────────┘
                ↓
┌───────────────────────────────┐
│      Track progress           │
└───────────────────────────────┘
```

---

## 🌱 Roadmap

V1 establishes the Mac productivity core. Planned improvements include:

- Richer Butler Claw automation & deliverable types
- Smarter scheduling & calendar intelligence
- Stronger local model & multimodal support
- Deeper personalization & habit insights
- UI polish (including compact / floating composer)

---

## ⚠️ Important Notes

### API keys

Obtain and manage your own credentials. **Never** commit keys to this repository.

### Third-party AI

Availability, pricing, rate limits, and data policies are controlled by each provider independently.

### AI-generated plans

Review AI suggestions before relying on them for critical appointments or deadlines.

---

## 📄 License

Add your project's license information here.

---

## 🙌 About

**Agent Butler Client** brings the Agent Butler experience to Mac—combining conversational AI, structured planning, calendar management, and **Butler Claw** task automation in one native app.

> **Talk to Agent Butler. Plan your schedule. Let Butler Claw handle the text work. Track your progress.**

---

### Related

- **Agent Butler (iOS)** — the original AI Personal Manager experience on iPhone / iPad *(link your iOS repo here)*
