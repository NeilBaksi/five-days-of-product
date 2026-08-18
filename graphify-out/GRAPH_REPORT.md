# Graph Report - .  (2026-08-18)

## Corpus Check
- 28 files · ~71,600 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 358 nodes · 336 edges · 81 communities (76 shown, 5 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 13 edges (avg confidence: 0.72)
- Token cost: 50,000 input · 4,000 output

## Community Hubs (Navigation)
- Diagram Component Library
- Lint & Build Tooling
- Course Content Data Layer
- Removed & Excluded Topics Log
- App TypeScript Config
- Runtime Dependencies
- Vite & Node Config
- Pricing Models Page
- App Shell & Deployment
- Design Principles
- GitHub Pages CI Pipeline
- Product Decision Frameworks
- Content-as-Data Pattern
- Typography & Palette
- Audience & Brand
- Root TypeScript Config
- Inline SVG Favicon Module
- Meta Description Module
- Open Graph Meta Tags Module
- Page Title Module

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 17 edges
2. `compilerOptions` - 16 edges
3. `Aesthetic Direction (Editorial / Swiss-modern, light mode only)` - 10 edges
4. `Five Days of Product (Project)` - 9 edges
5. `Day 3 rewrite (2026-08-10)` - 7 edges
6. `build job` - 7 edges
7. `Excluded from source Day 3 material (deliberate, not placeholders)` - 6 edges
8. `Day 1 rewrite (2026-08-07)` - 5 edges
9. `scripts` - 5 edges
10. `Main Script Entry (/src/main.tsx)` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Main Script Entry (/src/main.tsx)` --conceptually_related_to--> `React 19`  [INFERRED]
  index.html → README.md
- `Main Script Entry (/src/main.tsx)` --conceptually_related_to--> `TypeScript (strict)`  [INFERRED]
  index.html → README.md
- `Main Script Entry (/src/main.tsx)` --conceptually_related_to--> `Vite 8`  [INFERRED]
  index.html → README.md
- `Google Fonts Import (Philosopher, Mulish, JetBrains Mono)` --references--> `Design Brief (.impeccable.md)`  [INFERRED]
  index.html → README.md
- `Product Flywheel diagram (Features / Delivery date / Quality)` --semantically_similar_to--> `Product-Level Decisions Venn diagram (Desirability / Viability / Feasibility)`  [INFERRED] [semantically similar]
  src/assets/product-flywheel.png → src/assets/product-level-decisions.png

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Typography System (Philosopher / Mulish / JetBrains Mono)** — _impeccable_typography_display, _impeccable_typography_body, _impeccable_typography_mono [INFERRED 0.85]
- **Seven Design Principles jointly implementing Aesthetic Direction** — _impeccable_accent_is_rare, _impeccable_svg_icons_only, _impeccable_no_ai_tells, _impeccable_motion_is_orchestrated, _impeccable_mobile_is_first_class, _impeccable_content_is_data, _impeccable_placeholder_is_obvious [EXTRACTED 1.00]
- **CI Build Pipeline (checkout -> install -> build -> upload -> deploy)** — _github_workflows_deploy_checkout, _github_workflows_deploy_npm_ci, _github_workflows_deploy_npm_build, _github_workflows_deploy_upload_pages_artifact, _github_workflows_deploy_deploy_pages [EXTRACTED 1.00]
- **Three interdependent product tradeoff levers balanced around a shared flywheel** — src_assets_product_flywheel_features, src_assets_product_flywheel_deliverydate, src_assets_product_flywheel_quality [EXTRACTED 1.00]
- **Three overlapping lenses (customer, business, technology+people) that together define product-level decisions** — src_assets_product_level_decisions_desirability, src_assets_product_level_decisions_viability, src_assets_product_level_decisions_feasibility [EXTRACTED 1.00]

## Communities (81 total, 5 thin omitted)

### Community 0 - "Diagram Component Library"
Cohesion: 0.08
Nodes (25): AbstractConcrete(), AbstractConcreteProps, CompetencyWheel(), CompetencyWheelProps, MOBILE_WASH, FunnelStages(), FunnelStagesProps, WIDTH_CLASSES (+17 more)

### Community 1 - "Lint & Build Tooling"
Cohesion: 0.06
Nodes (31): autoprefixer, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, devDependencies, autoprefixer (+23 more)

### Community 2 - "Course Content Data Layer"
Cohesion: 0.09
Nodes (22): DAYS, FRAMEWORK_COMPARISON, FRAMEWORKS, GLOSSARY, GLOSSARY_CATEGORIES, DAY_COUNT, NAV, CalloutKind (+14 more)

### Community 3 - "Removed & Excluded Topics Log"
Cohesion: 0.09
Nodes (26): Bill-payment worked example, genericised persona, Syndicate assignment logistics, deliverables, grading rubric (course admin, excluded), Day 1 rewrite (2026-08-07), Day 2 rewrite (2026-08-08), Day 3 rewrite (2026-08-10), Day 3 title change: 'From Idea to Launch Plan' -> 'Design & Solution', Days 3-5 scaffold placeholders untouched note, Discovery/Definition/Delivery three-phase framing (+18 more)

### Community 4 - "App TypeScript Config"
Cohesion: 0.08
Nodes (23): DOM, DOM.Iterable, src, vite/client, compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, jsx (+15 more)

### Community 5 - "Runtime Dependencies"
Cohesion: 0.09
Nodes (22): clsx, framer-motion, lucide-react, dependencies, clsx, framer-motion, lucide-react, react (+14 more)

### Community 6 - "Vite & Node Config"
Cohesion: 0.10
Nodes (20): node, vite.config.ts, compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection (+12 more)

### Community 7 - "Pricing Models Page"
Cohesion: 0.21
Nodes (8): PricingModelCard(), PricingModelCardProps, PRICING_MODELS, SAAS_PRICING_MODELS, PricingModels(), ProductSense(), PricingModel, SaasPricingModel

### Community 8 - "App Shell & Deployment"
Cohesion: 0.18
Nodes (13): Main Script Entry (/src/main.tsx), Root Div (#root), deploy.yml (GitHub Actions), framer-motion, GitHub Pages Deployment, Live Site (GitHub Pages), lucide-react, Five Days of Product (Project) (+5 more)

### Community 9 - "Design Principles"
Cohesion: 0.18
Nodes (12): Design Principle: Accent is rare, Accessibility (WCAG 2.1 AA), Aesthetic Direction (Editorial / Swiss-modern, light mode only), Design Principle: Content is data (src/data/*), Design Principle: Mobile is first-class, Design Principle: Motion is orchestrated, Design Principle: No AI tells, Design Principle: Placeholder is obvious (+4 more)

### Community 10 - "GitHub Pages CI Pipeline"
Cohesion: 0.31
Nodes (9): build job, actions/checkout step, deploy job, actions/deploy-pages step (deployment), npm run build step (Build), npm ci step (Install dependencies), actions/setup-node (Node 20) step, actions/upload-pages-artifact step (path: dist) (+1 more)

### Community 11 - "Product Decision Frameworks"
Cohesion: 0.50
Nodes (8): Delivery date - How fast it ships, Product Flywheel diagram (Features / Delivery date / Quality), Features - How much it does, Quality - How good it is, Desirability - Do people actually want this? (customer), Product-Level Decisions Venn diagram (Desirability / Viability / Feasibility), Feasibility - Can we build and support it? (technology + people), Viability - Does it work commercially for us? (business)

### Community 12 - "Content-as-Data Pattern"
Cohesion: 0.40
Nodes (5): Content-as-Data Pattern (src/data), days.ts, frameworks.ts, nav.ts, Placeholder Component

### Community 13 - "Typography & Palette"
Cohesion: 0.50
Nodes (4): Google Fonts Import (Philosopher, Mulish, JetBrains Mono), Design Brief (.impeccable.md), Academic-Corporate OKLCH Palette, WCAG 2.1 AA Baseline

### Community 15 - "Audience & Brand"
Cohesion: 0.67
Nodes (3): Brand Personality (scholarly, clear, confident), Prompt Toolkit (sibling site), Target Users (MBA students, early-career PMs)

## Knowledge Gaps
- **134 isolated node(s):** `Root Div (#root)`, `Inline SVG Favicon`, `Meta Description`, `Open Graph Meta Tags`, `Google Fonts Import (Philosopher, Mulish, JetBrains Mono)` (+129 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Lint & Build Tooling` to `Runtime Dependencies`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **What connects `Root Div (#root)`, `Inline SVG Favicon`, `Meta Description` to the rest of the system?**
  _134 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Diagram Component Library` be split into smaller, more focused modules?**
  _Cohesion score 0.07957957957957958 - nodes in this community are weakly interconnected._
- **Should `Lint & Build Tooling` be split into smaller, more focused modules?**
  _Cohesion score 0.06451612903225806 - nodes in this community are weakly interconnected._
- **Should `Course Content Data Layer` be split into smaller, more focused modules?**
  _Cohesion score 0.0873015873015873 - nodes in this community are weakly interconnected._
- **Should `Removed & Excluded Topics Log` be split into smaller, more focused modules?**
  _Cohesion score 0.08923076923076922 - nodes in this community are weakly interconnected._
- **Should `App TypeScript Config` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._