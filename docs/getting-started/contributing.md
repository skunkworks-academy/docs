---
title: Contributing documentation
sidebar_position: 2
---

# Contributing documentation

Documentation changes follow the same controlled workflow as application code.

## Workflow

1. Create a focused branch from `main`.
2. Add or update Markdown in `docs/`.
3. Run `npm install` and `npm run build` locally.
4. Confirm links, headings, code samples, mobile layout, and search results.
5. Open a pull request with the audience, purpose, affected modules, and validation evidence.
6. Obtain content-owner and technical review where applicable.
7. Merge only after the build check passes.

## Authoring standard

- Start each page with a clear outcome or purpose.
- Use sentence-case headings and short sections.
- Use fenced code blocks with the correct language identifier.
- Define acronyms on first use.
- Link to vendor documentation for volatile product behaviour.
- Add dates only where operationally relevant; avoid ambiguous terms such as “today” in durable procedures.

## Prohibited content

Do not commit passwords, API keys, access tokens, private learner records, customer data, confidential agreements, or production configuration secrets.
