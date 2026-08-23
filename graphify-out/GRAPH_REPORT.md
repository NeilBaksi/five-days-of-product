# Graph Report - .  (2026-08-23)

## Corpus Check
- 20 files · ~89,509 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 394 nodes · 433 edges · 70 communities (68 shown, 2 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.77)
- Token cost: 45,000 input · 3,000 output

## Community Hubs (Navigation)
- Diagram Component Library
- Frameworks Data + FrameworkCard
- Lint & Build Tooling
- Removed & Excluded Topics Log
- Course Content & Landing Data
- App TypeScript Config
- Runtime Dependencies
- Vite & Node Config
- Toolkit Data (Templates + Product Sense)
- App Shell & Pricing Models
- Design Principles
- Project Meta & Design Brief
- GitHub Pages CI Pipeline
- Prompt Library
- Audience & Brand
- Root TypeScript Config
- Product Flywheel Diagram (Features / Delivery Date / Quality triad) Module

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 17 edges
2. `compilerOptions` - 16 edges
3. `Five Days of Product (README)` - 11 edges
4. `Aesthetic Direction (Editorial / Swiss-modern, light mode only)` - 10 edges
5. `Day 3 rewrite (2026-08-10)` - 7 edges
6. `build job` - 7 edges
7. `Excluded from source Day 3 material (deliberate, not placeholders)` - 6 edges
8. `Day 1 rewrite (2026-08-07)` - 5 edges
9. `scripts` - 5 edges
10. `lib` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Five Days of Product (README)` --conceptually_related_to--> `index.html (Vite entry HTML)`  [INFERRED]
  README.md → index.html
- `index.html (Vite entry HTML)` --conceptually_related_to--> `React 19`  [INFERRED]
  index.html → README.md
- `index.html (Vite entry HTML)` --conceptually_related_to--> `Vite 8`  [INFERRED]
  index.html → README.md
- `index.html (Vite entry HTML)` --references--> `Academic-corporate design brief`  [EXTRACTED]
  index.html → README.md
- `Product Flywheel Diagram (Features / Delivery Date / Quality triad)` --semantically_similar_to--> `Product-Level Decisions Venn Diagram (Desirability / Viability / Feasibility)`  [INFERRED] [semantically similar]
  src/assets/product-flywheel.png → src/assets/product-level-decisions.png

## Import Cycles
- 3-file cycle: `src/components/ui/FrameworkCard.tsx -> src/pages/blocks.tsx -> src/components/ui/index.ts -> src/components/ui/FrameworkCard.tsx`

## Hyperedges (group relationships)
- **Five Days of Product frontend stack** — readme_react, readme_vite, readme_typescript, readme_tailwind_css, readme_react_router_dom, readme_framer_motion, readme_lucide_react [EXTRACTED 1.00]
- **Content-as-data SPA architecture** — readme_five_days_of_product, index_index_html, readme_content_as_data, readme_react [INFERRED 0.75]
- **CI Build Pipeline (checkout -> install -> build -> upload -> deploy)** — _github_workflows_deploy_checkout, _github_workflows_deploy_npm_ci, _github_workflows_deploy_npm_build, _github_workflows_deploy_upload_pages_artifact, _github_workflows_deploy_deploy_pages [EXTRACTED 1.00]
- **Seven Design Principles jointly implementing Aesthetic Direction** — _impeccable_accent_is_rare, _impeccable_svg_icons_only, _impeccable_no_ai_tells, _impeccable_motion_is_orchestrated, _impeccable_mobile_is_first_class, _impeccable_content_is_data, _impeccable_placeholder_is_obvious [EXTRACTED 1.00]
- **Typography System (Philosopher / Mulish / JetBrains Mono)** — _impeccable_typography_display, _impeccable_typography_body, _impeccable_typography_mono [INFERRED 0.85]

## Communities (70 total, 2 thin omitted)

### Community 0 - "Diagram Component Library"
Cohesion: 0.08
Nodes (26): AbstractConcrete(), AbstractConcreteProps, CompetencyWheel(), CompetencyWheelProps, MOBILE_WASH, FrameworkCard(), FunnelStages(), FunnelStagesProps (+18 more)

### Community 1 - "Frameworks Data + FrameworkCard"
Cohesion: 0.08
Nodes (29): FrameworkCardProps, FRAMEWORK_COMPARISON, FRAMEWORK_SOURCES, FRAMEWORKS, GLOSSARY, GLOSSARY_CATEGORIES, GLOSSARY_SOURCES, DAY_COUNT (+21 more)

### Community 2 - "Lint & Build Tooling"
Cohesion: 0.06
Nodes (31): autoprefixer, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, devDependencies, autoprefixer (+23 more)

### Community 3 - "Removed & Excluded Topics Log"
Cohesion: 0.09
Nodes (26): Bill-payment worked example, genericised persona, Syndicate assignment logistics, deliverables, grading rubric (course admin, excluded), Day 1 rewrite (2026-08-07), Day 2 rewrite (2026-08-08), Day 3 rewrite (2026-08-10), Day 3 title change: 'From Idea to Launch Plan' -> 'Design & Solution', Days 3-5 scaffold placeholders untouched note, Discovery/Definition/Delivery three-phase framing (+18 more)

### Community 4 - "Course Content & Landing Data"
Cohesion: 0.11
Nodes (21): DAYS, ATTRIBUTION_SOURCES, AttributionSource, COMPANY_FIT, COMPETENCIES, DEBATE, DebateContent, DebateSide (+13 more)

### Community 5 - "App TypeScript Config"
Cohesion: 0.08
Nodes (23): DOM, DOM.Iterable, src, vite/client, compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, jsx (+15 more)

### Community 6 - "Runtime Dependencies"
Cohesion: 0.09
Nodes (22): clsx, framer-motion, lucide-react, dependencies, clsx, framer-motion, lucide-react, react (+14 more)

### Community 7 - "Vite & Node Config"
Cohesion: 0.10
Nodes (20): node, vite.config.ts, compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection (+12 more)

### Community 8 - "Toolkit Data (Templates + Product Sense)"
Cohesion: 0.16
Nodes (13): DEFINITION_OF_DONE_ITEMS, GOAL_INITIATIVES_EXAMPLE, GOAL_RISKS_EXAMPLE, PRODUCT_SENSE_CALIBRATION, PRODUCT_SENSE_DIAGRAM, PRODUCT_SENSE_EXERCISES, PRODUCT_SENSE_SOURCES, PROJECT_ONE_PAGER_FIELDS (+5 more)

### Community 9 - "App Shell & Pricing Models"
Cohesion: 0.17
Nodes (11): PricingModelCard(), PricingModelCardProps, CONVERSION_DRIVERS, ConversionDriver, PRICING_MODELS, PRICING_SOURCES, SAAS_PRICING_MODELS, PricingModels() (+3 more)

### Community 10 - "Design Principles"
Cohesion: 0.18
Nodes (12): Design Principle: Accent is rare, Accessibility (WCAG 2.1 AA), Aesthetic Direction (Editorial / Swiss-modern, light mode only), Design Principle: Content is data (src/data/*), Design Principle: Mobile is first-class, Design Principle: Motion is orchestrated, Design Principle: No AI tells, Design Principle: Placeholder is obvious (+4 more)

### Community 11 - "Project Meta & Design Brief"
Cohesion: 0.21
Nodes (12): index.html (Vite entry HTML), Academic-corporate design brief, Content-as-data pattern, Five Days of Product (README), framer-motion (orchestrated motion), GitHub Pages deploy via Actions, lucide-react (icons), React 19 (+4 more)

### Community 12 - "GitHub Pages CI Pipeline"
Cohesion: 0.31
Nodes (9): build job, actions/checkout step, deploy job, actions/deploy-pages step (deployment), npm run build step (Build), npm ci step (Install dependencies), actions/setup-node (Node 20) step, actions/upload-pages-artifact step (path: dist) (+1 more)

### Community 13 - "Prompt Library"
Cohesion: 0.39
Nodes (5): PROMPT_SOURCES, PROMPTS, highlight(), PromptCard(), PromptEntry

### Community 15 - "Audience & Brand"
Cohesion: 0.67
Nodes (3): Brand Personality (scholarly, clear, confident), Prompt Toolkit (sibling site), Target Users (MBA students, early-career PMs)

## Knowledge Gaps
- **132 isolated node(s):** `AbstractConcreteProps`, `CompetencyWheelProps`, `FunnelStagesProps`, `HorizonBoardProps`, `LensDiamondProps` (+127 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Lint & Build Tooling` to `Runtime Dependencies`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **What connects `AbstractConcreteProps`, `CompetencyWheelProps`, `FunnelStagesProps` to the rest of the system?**
  _132 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Diagram Component Library` be split into smaller, more focused modules?**
  _Cohesion score 0.08108108108108109 - nodes in this community are weakly interconnected._
- **Should `Frameworks Data + FrameworkCard` be split into smaller, more focused modules?**
  _Cohesion score 0.08253968253968254 - nodes in this community are weakly interconnected._
- **Should `Lint & Build Tooling` be split into smaller, more focused modules?**
  _Cohesion score 0.06451612903225806 - nodes in this community are weakly interconnected._
- **Should `Removed & Excluded Topics Log` be split into smaller, more focused modules?**
  _Cohesion score 0.08923076923076922 - nodes in this community are weakly interconnected._
- **Should `Course Content & Landing Data` be split into smaller, more focused modules?**
  _Cohesion score 0.1076923076923077 - nodes in this community are weakly interconnected._