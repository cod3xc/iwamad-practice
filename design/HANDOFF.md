# Week 5 — Handoff notes (SIS 2 starter design)
Routes (from the prototype): / (posts-desktop) -> /posts/:id (post-desktop, Read more) -> back; * (404-desktop)
Components -> React files: PostCard -> src/components/ProfileCard.tsx   Button -> src/components/ui/Button.tsx   Tag -> src/components/ui/Tag.tsx
Button variants -> prop: variant = primary | secondary
PostCard layout: direction column  gap 16px  padding 24px  radius 12px
Breakpoint change: phone 1 column(s), desktop 3 columns; header stacked on phone, one row on desktop (min-width: 640px)
Tokens (all ten): color/primary = #1d4ed8, color/muted = #6b7280 (fixed to #4b5563), color/surface = #ffffff, color/text = #111827, color/border = #d1d5db, space/1 = 8px, space/2 = 12px, space/3 = 16px, space/4 = 24px, radius/card = 12px
