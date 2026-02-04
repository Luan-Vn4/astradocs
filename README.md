# AstraDocs 🚀

**AstraDocs** is a language-agnostic Command Line Interface (CLI) tool designed to automate technical documentation by bridging the gap between source code and business rules stored in knowledge bases (**RAG**).

The name originates from the technical foundation of the project: **AST** (*Abstract Syntax Tree*) + **R** (*Retrieval-Augmented Generation*) + **A** (*Agnostic*).

## 💡 The Proposal

Unlike traditional documentation generators that only read comments or function signatures, **AstraDocs** leverages deep syntax analysis to understand software structure and enriches explanations with the organization's business context.

- **Agnostic Analysis:** Uses the [Tree-sitter](https://tree-sitter.github.io) engine to interpret multiple programming languages (Java, TypeScript, Python, etc.) natively via WebAssembly.
- **Business Context (RAG):** Integrates with knowledge bases to retrieve the business rules that justify the implementation of each function or module.
- **Living Documentation:** Built for CI/CD pipelines, ensuring the technical manual is always in sync with the repository's current state.
- **Privacy & Performance:** Built on the [Bun](https://bun.sh) runtime for ultra-fast execution, supporting local AI models to ensure source code sovereignty and security.

## 🏗️ Architecture

The project is structured as a modular monorepo to ensure separation of concerns:

- `@astradocs/core`: The main engine responsible for syntactic parsing, semantic search, and LLM orchestration.
- `@astradocs/cli`: Command-line interface for developer interaction and automation.

## 🛠️ Tech Stack

- **Runtime:** Bun
- **Language:** TypeScript (Strict Mode)
- **Parser:** Tree-sitter (WASM)
- **AI Orchestration:** LangChain.js
- **Linter/Formatter:** Biome (Rust-based)

---
*This project is in its early stages of development.*