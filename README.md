# Next Custom Auth

Custom sign in page for Next 13 (App Router) using Next Auth.

- Sign in with Google
- Sign in with Facebook
- Sign in with GitHub
- Sign in with Email

## Get Started

1. Clone repo `git clone https://github.com/ryanhuangio/next-custom-auth.git`
2. Change directory `cd next-custom-auth`
3. Configure environment `mv .env.local.sample .env && vi .env`
4. Install dependencies `npm install`
5. Run `npm run build && npm run start` or `npm run build && npm run dev`

## Notes

- Email Provider requires a database adapter. In this project, I am using Prisma with MySQL. You can remove the Email Provider as a provider in `/app/api/auth/[..nextauth]/route.ts` to avoid requiring a database adapter.
