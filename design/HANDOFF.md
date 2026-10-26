# Week 5 — Handoff notes (SIS 2 starter design)
Routes (from the prototype): / (posts-desktop) -> /posts/:id (post-desktop, Read more) -> back; * (404-desktop)
Components → React files: PostCard → src/components/ui/Card.tsx   Button → src/components/ui/Button.tsx   Tag → src/components/ui/Tag.tsx
Button variants → prop: variant = 'primary' | 'secondary'
PostCard layout: direction column  gap 16px  padding 16px  radius 8px
Breakpoint change: phone 1 column(s), desktop 3 columns; header stacked on phone, one row on desktop (min-width: 640px)
Tokens (all ten): color/primary = #1d4ed8, color/on-primary = #ffffff, color/text = #1f2937, color/text-muted = #9ca3af (fixed to #4b5563), color/surface = #ffffff, color/border = #d1d5db, space/2 = 8px, space/4 = 16px, space/6 = 24px, radius/md = 8px
