<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Boot website. PostHog is initialized client-side via `instrumentation-client.ts` (the recommended approach for Next.js 15.3+), with a reverse proxy configured in `next.config.ts` to route analytics requests through `/ingest` — improving reliability and ad-blocker resistance. A server-side PostHog client is available in `lib/posthog-server.ts` for future server-side tracking needs. Environment variables are stored in `.env.local`.

| Event | Description | File |
|---|---|---|
| `hero_get_started_clicked` | User submits their email on the hero section to get started (redirects to dashboard login) | `components/sections/hero.tsx` |
| `browse_guides_clicked` | User clicks the "Browse Guides" button on the hero section | `components/sections/hero.tsx` |
| `dashboard_button_clicked` | User clicks the "Dashboard" button in the navbar | `components/buttons/join.tsx` |
| `guide_feedback_submitted` | User submits guide feedback (good or bad opinion with optional message) | `components/feedback/client.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard**: [Analytics basics](https://us.posthog.com/project/387343/dashboard/1538122)
- **Insight**: [Get Started funnel: Email submit → Dashboard](https://us.posthog.com/project/387343/insights/r5SAVnzd)
- **Insight**: [Hero CTA clicks over time](https://us.posthog.com/project/387343/insights/d55WeY5C)
- **Insight**: [Guide feedback: Good vs Bad](https://us.posthog.com/project/387343/insights/NEtwqTlJ)
- **Insight**: [Dashboard button clicks over time](https://us.posthog.com/project/387343/insights/vLFmRJxB)
- **Insight**: [Guide feedback volume over time](https://us.posthog.com/project/387343/insights/4eTOsl7B)

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
