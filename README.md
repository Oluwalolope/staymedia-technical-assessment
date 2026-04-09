# TÚTÙ Cocktail Landing Page - Stay Media HQ Assessment

## 📌 Project Overview
This repository contains the frontend implementation for the **TÚTÙ Cocktail** landing page, developed as part of the technical assessment for the Web Developer role at **Stay Media HQ**. The primary objective of this project is to deliver a premium, pixel-perfect, and highly responsive user interface that is fully prepared to be integrated with **WordPress as a Headless CMS**.

## 🏗️ Headless WordPress Architecture & State Management
This application specifically integrates **WordPress as a Headless CMS**. Rather than relying on traditional WordPress theme files, this React frontend fetches data asynchronously from a live WordPress backend using the WP REST API.

- **Centralized Context API**: All dynamic headless content is smartly requested once and managed globally using React's built-in **Context API**. By structuring state management efficiently via `WordPressContext.tsx`, all deeply nested child React components instantly access and hydrate data (such as headers, footer structures, or ACF layouts) without prop-drilling or external library bloat.
- **WP REST API & ACF**: Seamlessly tied into Advanced Custom Fields (ACF) ensuring the client has a user-friendly custom editing experience within WordPress while rendering a lightning-fast React UI.

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Installation
1. Clone this repository to your local machine.
2. Navigate to the project directory:
   ```bash
   cd staymedia-technical-assessment
   ```
3. Install development dependencies:
   ```bash
   npm install
   ```
4. Start the Vite development server:
   ```bash
   npm run dev
   ```

## 🛠️ Tech Stack Used
- Built entirely within **React 19**
- Bootstrapped via **Vite** for incredibly fast HMR and optimized building.
- Fully typed with **TypeScript** for robust code maintainability.
- Styled exclusively with **Vanilla CSS** taking extreme advantage of modern CSS variables (`index.css`), ensuring it perfectly matches the provided brand design guidelines.
