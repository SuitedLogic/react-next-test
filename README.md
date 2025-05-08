## Getting Started

First, run the development server:

```bash
npm i
```

### Host records
```
127.0.0.1    www.mayhem.local
127.0.0.1    api.mayhem.local
```

### Running 

```bash
npm run dev
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Tasks

### 1: "Component Crafter"

Problem: Our HTML implementation of CMS modules needs to be interactive and re-usable.
Implementation: Create react components to cover our existing HTML structure.
Goal: Reusable react components.


### 2: "CMS Master"

Problem: Our page data is JSON driven, we want to be able to update the JSON configuration to drive our CMS pages.
Implementation: Convert the static HTML page to be driven from our JSON configuration. React components should be used
    in conjunction with the JSON data.
Goal: A dynamically driven page with react components matching the structure.


### 3: "Drilling Down"

Problem: 
Implementation:
Goal: 


### 1: "CORS Crusher"

Problem: The API responses can't be consumed by the frontend when running in development mode due to missing CORS headers.
Implementation: End point must use api.mayhem.local
Goal: Resolve CORS issues when using api.mayhem.local.

Roadmap Relationship
- API Security
- Headers

### "Data Sanitizer"

Problem: The API is exposing sensitive user data (secret keys) that shouldn't be accessible from the frontend.
Implementation: 
Goal: Keys should only be accessible NextJS Server Side and not exposed to the browser.

### "Auth Architect"

Problem: The API route has no authentication, allowing any client to access user data.
Implementation: 
Goal: Implement authentication based on JWT tokens.
