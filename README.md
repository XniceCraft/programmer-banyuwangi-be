# Programmer Banyuwangi Backend

Backend API for the Programmer Banyuwangi community website, built with Strapi v5.

## 🚀 Features

-   **Content Management**: Full CMS for managing community content
-   **Blog System**: Articles and news for the community
-   **Documentation**: Technical documentation and tutorials
-   **Navigation Management**: Dynamic navbar and footer
-   **Home Page**: Customizable landing page components
-   **About Us**: Community information and details
-   **Global Settings**: Site-wide configuration

## 📋 Content Types

-   **Blog**: Community articles and news
-   **Documentation**: Technical docs and tutorials
-   **Documentation Category**: Organized documentation structure
-   **Home Page**: Landing page components (hero, events, etc.)
-   **Navbar**: Site navigation
-   **Footer**: Site footer with additional navigation
-   **About Us**: Community information
-   **Global**: Site-wide settings and configurations

## 🛠️ Tech Stack

-   **Framework**: Strapi v5.33.0
-   **Database**: MySQL
-   **Runtime**: Node.js >=20.0.0
-   **Package Manager**: pnpm
-   **Language**: TypeScript

## 📦 Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/XniceCraft/programmer-banyuwangi-be.git
    cd programmer-banyuwangi-be
    ```

2. **Install dependencies**

    ```bash
    pnpm install
    ```

3. **Set up environment variables**

    ```bash
    cp .env.example .env
    ```

4. **Generate secure keys**

    ```bash
    pnpm run strapi-keys --generate
    ```

5. **Configure your database**

    - Create a MySQL database named `programmer-banyuwangi`
    - Update the database credentials in your `.env` file

6. **Run the development server**
    ```bash
    pnpm dev
    ```
