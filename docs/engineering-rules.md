# ARGUS Engineering Rules

## Architecture principles

- Use **feature-based modules** under `src/features/<context>` to keep personal and professional concerns isolated.
- Place cross-cutting application wiring in `src/app`.
- Keep shared integrations/utilities in `src/lib`.

## Context isolation

- Personal and professional UI/data flows must live in separate feature directories.
- Route entrypoints should map one-to-one to context boundaries (`/personal`, `/professional`).
- Shared dependencies should be imported from `src/lib` and should avoid embedding context-specific logic.

## Data layer standards

- Supabase access is centralized in `src/lib/supabaseClient.ts`.
- TanStack Query defaults are centralized in `src/lib/queryClient.ts`.
- New async feature code should use Query hooks rather than direct side effects in components.

## UI standards

- TailwindCSS is the default styling system.
- Use shadcn/ui-compatible primitives and utility conventions (`cn` from `src/lib/utils.ts`).
- Keep route-level pages presentational and compose business logic from feature-specific hooks/services.
