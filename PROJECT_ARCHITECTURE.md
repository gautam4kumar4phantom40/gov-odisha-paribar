# Gov Odisha Paribar Portal

## Project Overview

Gov Odisha Paribar is a large-scale Government Portal being developed using Angular 21 Standalone Architecture.

This application is designed as an enterprise-grade, scalable platform that will support:

- Public Portal
- Citizen Portal
- Admin Portal
- Future Officer Portal
- Multi-language support (English / Odia)
- Responsive design across Desktop, Laptop, Tablet, iPad, iPhone and Android devices
- Future CMS integration
- Future SSR support
- Future authentication and authorization modules
- Future dashboard and workflow modules

The architecture has been designed for long-term scalability and maintainability.

---

# Technology Stack

## Frontend

- Angular 21
- TypeScript
- SCSS
- Bootstrap 5
- Font Awesome
- Swiper JS
- Lucide Angular
- AOS Animations

## Architecture

- Standalone Components
- Lazy Loading
- Feature-Based Architecture
- Shared Design System
- Responsive Design System
- Enterprise Folder Structure

---

# Application Vision

The platform is expected to grow significantly in future.

Current Scope:

- Public Website
- Information Portal
- News
- Gallery
- Heritage
- Contact

Future Scope:

- Citizen Login
- Citizen Dashboard
- Document Management
- Application Tracking
- Grievance Management

Admin Scope:

- Content Management
- News Management
- Gallery Management
- Heritage Management
- Banner Management
- User Management

Future Scope:

- Officer Login
- Approval Workflows
- Reporting
- Analytics
- Audit Logs

Therefore all architecture decisions must support future expansion.

---

# Project Architecture

```text
src/

├── app/
│
├── core/
├── layouts/
├── shared/
├── features/
├── state/
│
├── assets/
├── styles/
├── environments/
│
├── main.ts
└── index.html
```

---

# Core Layer

Contains application-wide singleton logic.

```text
core/

services/
guards/
interceptors/
constants/
enums/
config/
tokens/
```

Examples:

- Auth Service
- API Service
- Route Constants
- Language Service
- Storage Service

---

# Layout Layer

Layouts define the page shell.

```text
layouts/

public-layout/
auth-layout/
citizen-layout/
admin-layout/
officer-layout/
```

Examples:

Public Layout:

Header
Router Outlet
Footer

Admin Layout:

Sidebar
Header
Router Outlet

---

# Shared Layer

Contains reusable components.

```text
shared/

components/
directives/
pipes/
validators/
utils/
types/
```

Reusable Components:

- Header
- Footer
- Button
- Modal
- Loader
- Carousel
- Breadcrumb
- Page Banner
- Section Heading
- Language Switcher
- Pagination
- Data Table

No business logic should be placed here.

---

# Feature Layer

Business modules are organized by domain.

```text
features/

public/
auth/
citizen/
admin/
officer/
```

---

# Public Module

```text
public/

home/
about/
news/
heritage/
gallery/
contact/
faq/
privacy-policy/
terms/
```

---

# Home Architecture

```text
home/

pages/
sections/
models/
services/
store/
```

Home sections:

- Hero
- Notification Ticker
- About Us
- Chief Minister
- Global Presence
- Social News
- Heritage Grid
- Government Partners
- Gallery
- Newsletter

The Home component should only compose sections.

Business logic should remain inside section components or services.

---

# Authentication Architecture

Future module.

```text
auth/

login/
register/
forgot-password/
reset-password/
otp-verification/
```

Supports future:

- Citizen Login
- Admin Login
- Officer Login

---

# Dashboard Architecture

Citizen Dashboard

```text
citizen/

dashboard/
profile/
applications/
documents/
grievance/
notifications/
settings/
```

Admin Dashboard

```text
admin/

dashboard/
users/
roles/
permissions/
content-management/
banner-management/
news-management/
gallery-management/
heritage-management/
notification-management/
partner-management/
audit-logs/
settings/
```

Future Officer Dashboard

```text
officer/

dashboard/
approvals/
reports/
applications/
settings/
```

---

# State Management

Global State

```text
state/

auth/
user/
language/
theme/
app/
```

Feature-specific state remains inside the feature.

Example:

```text
features/news/store
features/admin/users/store
```

---

# SCSS Architecture

```text
styles/

tokens/
mixins/
base/
layout/
utilities/
```

---

# Design Tokens

## Colors

Primary

```scss
#965038
```

Secondary

```scss
#DE592E
```

Background

```scss
#F6E5D5
```

Text Primary

```scss
#4A3428
```

Text Secondary

```scss
#6B5B50
```

White

```scss
#FFFFFF
```

Black

```scss
#000000
```

---

# Breakpoints

```scss
$mobile-sm: 375px;
$mobile: 576px;
$tablet: 768px;
$laptop: 1024px;
$desktop: 1440px;
$wide: 1920px;
```

---

# Container Standard

```scss
.container-custom {
  width: 100%;
  max-width: 1440px;
  margin-inline: auto;
  padding-inline: 24px;
}
```

This container should be used throughout the application.

---

# Angular Guidelines

## Standalone Components Only

Always generate components using:

```bash
ng g c path/to/component --standalone
```

Do not introduce Angular Modules unless absolutely necessary.

---

## Feature First Architecture

Organize by business domain.

Good:

```text
features/news
features/gallery
features/admin
```

Bad:

```text
components/
services/
pages/
```

at application root.

---

## Reusable First

Before creating new UI:

Check Shared Components first.

If reusable, place in:

```text
shared/components
```

---

## Routing

Use route constants.

Avoid hardcoded route strings.

Good:

```ts
APP_ROUTES.ABOUT;
```

Bad:

```ts
'about';
```

---

# Current Project Status

Completed:

- Angular 21 Project Setup
- Standalone Architecture
- Enterprise Folder Structure
- Public Layout
- Header Component
- Footer Component
- Home Page Component
- Home Sections Components
- SCSS Architecture
- Bootstrap Integration
- Font Awesome Integration
- Routing Setup
- Responsive Foundation

Next Development Phase:

1. Design System Components
2. Header
3. Footer
4. Hero Section
5. Notification Ticker
6. About Us Section
7. Remaining Home Sections

---

# Team Rules

- Follow existing architecture.
- Do not introduce random folders.
- Do not place feature logic in shared components.
- Do not hardcode colors.
- Use design tokens.
- Use standalone components.
- Follow responsive-first development.
- Keep code scalable for future dashboards and CMS modules.

This document is the source of truth for the Gov Odisha Paribar Portal.
