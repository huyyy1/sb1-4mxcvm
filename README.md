# Next.js Blog with Builder.io, TypeScript, and Supabase

## Overview
This project is a full-stack blog application built with Next.js, Builder.io, Tailwind CSS, and TypeScript. It demonstrates modern web development practices and leverages the power of server-side rendering and static site generation. The project incorporates Builder.io as a visual builder and CMS for managing the homepage, navigation, and blog posts about cleaning tips.

## Features
- Next.js for server-side rendering and static site generation
- Builder.io for visual content management
- Tailwind CSS for styling
- TypeScript for type safety
- Dynamic homepage using Builder.io's Homepage blueprint
- Navigation using Builder.io's Navigation Links blueprint
- Cleaning tips blog with dynamic routing

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env.local` file in the root directory with the following content:
   ```
   NEXT_PUBLIC_BUILDER_API_KEY=your_builder_api_key
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. Set up Builder.io:
   - Create a new space in Builder.io
   - Import the Homepage blueprint
   - Import the Navigation Links blueprint
   - Create a new model called 'cleaning-tips' with the following fields:
     - Title (text)
     - URL (text)
     - Content (long text or rich text)
     - Description (long text)
   - In your Builder.io space, create content for:
     - Homepage (using the Homepage blueprint)
     - Navigation (using the Navigation Links blueprint)
     - A few cleaning tips posts

5. Run the development server:
   ```
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) to see your Builder.io-powered website

## Customization
- Modify the Builder.io content models to add more fields or change the structure
- Adjust the layout and styling of the components in the Next.js files
- Add more pages or sections as needed

## Deployment
Deploy your Next.js app to platforms like Vercel or Netlify for seamless hosting and automatic deployments.

## Learn More
To learn more about the technologies used in this project, check out the following resources:
- [Next.js Documentation](https://nextjs.org/docs)
- [Builder.io Documentation](https://www.builder.io/c/docs/intro)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Supabase Documentation](https://supabase.io/docs)