---
title: Agentic RAGs
layout: page
permalink: /project/llms/
---

- Extracted specific date, jurisdiction, party and date information from large corpus of unstructured NDA documents and 10-K statements using meta-llama-70b and Openai’s Gpt-4o LLMs with structured one-shot prompting.
- Developed a RAG pipeline to provide context to the LLM to answer specific questions regarding the 10-K statements.
- Implemented a ReAct chain (Reasoning + Action) using task specific agentic functions, enabling the LLM to perform advanced tasks such as complex calculations and web scraping.