# Hyperframes Composition Brief: Five Days of Product

## Objective
Create a short, quiet-premium launch-style brag video for Five Days of Product, a Digital Product Management course microsite.

## Output
- Composition directory: `brag-output/composition/`
- Rendered video: `brag-output/brag.mp4`
- Format: landscape — 1920x1080
- Duration: 19 seconds

## Source Material
- Project root: `/Users/neilsupratikbaksi/Documents/Website/five-days-of-product`
- Primary files read: `package.json`, `README.md`, `tailwind.config.ts`, `src/data/nav.ts`, `src/data/landing.ts`
- Product name: Five Days of Product
- Tagline / strongest claim: "Digital Product Management, one day at a time."
- Key UI or visual moment to recreate: the Value Quadrant card grid (Valuable / Usable / Feasible / Viable) and the two-sided debate blockquote (Horowitz vs. Eriksson)
- Copy that must appear verbatim:
  - "Five Days of Product"
  - "Everything a PM actually does. In five days."
  - "Valuable" / "Usable" / "Feasible" / "Viable"
  - "A good product manager is the CEO of the product." — Ben Horowitz, a16z
  - "PMs are not the CEO of product…" — Martin Eriksson
  - "Influence without authority is the job."

## Creative Direction
- Tone preset: polished
- Creative direction: quiet premium course microsite
- Interpretation: fewer, longer-held scenes; restrained typography-led motion; confidence through stillness and precise type, not speed or jokes.
- Angle: This isn't a startup demo — it's a syllabus treated with real design-system confidence. Editorial, academic-corporate, not hype.
- Hook: "Five Days of Product" slams in on paper background in Philosopher serif, royal blue, then subtitle settles beneath it.
- Outro / punchline: "Influence without authority is the job." → wordmark + URL.
- Avoid:
  - Generic SaaS language
  - Abstract filler visuals
  - Unrelated visual redesign
  - Chaotic transitions, whooshes, beat-flash text

## Visual Identity
- Background: `oklch(0.985 0.004 262)` (paper, ≈ #f8f9fb)
- Text: `oklch(0.30 0.02 262)` (ink, ≈ #2b2f36)
- Accent: `oklch(0.37 0.128 262)` (brand royal blue, ≈ #0a3d7a); secondary accent `oklch(0.43 0.19 5)` (berry, ≈ #9e0b45)
- Display font: Philosopher (serif) — use Google Fonts or closest system serif fallback
- Body font: Mulish — use Google Fonts or closest system sans fallback
- Visual references from the project: bordered card grid style, blue-wash/berry-wash tinted panels, hairline rule borders, fluid display type scale

## Storyboard
Use the storyboard in `brag-output/brag-plan.md` as the creative contract.

Scene summary:
1. Hook — 4s — "Five Days of Product" + subtitle "Everything a PM actually does. In five days."
2. Value Quadrant — 5s — 4 cards arrive one by one: Valuable, Usable, Feasible, Viable, each with one-line description
3. Toolkit nav — 4s — simulated sidebar, 4 nav labels highlight in sequence: Glossary, Templates, Prompt Library, Pricing Models
4. The debate — 4.5s — Horowitz quote (berry-wash panel) vs. Eriksson quote (blue-wash panel), then resolution line replaces both: "Influence without authority is the job."
5. Outro — 1.5s — wordmark + URL

## Audio
- Audio role: warm restrained bed, low volume throughout, one gentle swell into the resolution line, fade on outro
- Audio arc: quiet under hook → steady through quadrant/nav scenes → brief lift into debate resolution → fade under outro
- Music: `assets/music/happy-beats-business-moves-vol-12-by-ende-dot-app.mp3`, played at low volume (0.12–0.18) per this track's documented quiet-bed use
- Music treatment: start at 0s under Scene 1, hold low and steady through Scenes 2-3, subtle volume lift into Scene 4 resolution line, fade out during Scene 5
- Music cue guidance: preset available at `assets/music/cues/happy-beats-business-moves-vol-12-by-ende-dot-app.music-cues.json` (also `.md`). Tempo ≈109.96 BPM. Strong cues in window include 8.74s, 9.29s, 10.93s, 13.11s (0.97-0.99 strength) — consider locking the debate-resolution reveal (~13s mark, start of Scene 4's second half) to the 13.11s strong cue within ±0.15s if it doesn't hurt readability. Use beat grid (0.56s spacing, ~109.96 BPM) for the 4 quadrant-card stagger in Scene 2 if natural stagger timing lands close to beats.
- Audio-reactive treatment: subtle; card panels or quote panels may gently breathe presence on bass — no waveform/equalizer visuals
- Audio-coupled moments:
  - Scene 2 — quadrant cards arriving one by one — soft card-arrival tick per card
  - Scene 3 — nav labels highlighting in sequence — subtle click sound per nav highlight
  - Scene 4 — resolution line arrival — let music swell carry it, minimal/no SFX to preserve the quiet-premium feel
- SFX selection guidance: sparse, professional restraint throughout. Copied `assets/sfx/interface/drop_001.ogg` for card/label arrivals and `assets/sfx/interface/click_001.ogg` for nav highlight ticks — use these or substitute equivalently restrained interface sounds already in the skill's SFX library if a better match exists after the animation is built.
- SFX analysis guidance: prefer lower high-frequency-risk sounds since moments repeat (4 cards, 4 nav items) — see the skill's `sfx-analysis.md`/`.json` if present.
- Exact SFX choice: Hyperframes should choose exact filenames, timestamps, density, and volume based on the implemented animation.
- Audio files: music and SFX already copied into `brag-output/composition/assets/music/` and `brag-output/composition/assets/sfx/interface/`.

## Hyperframes Instructions
Build this composition using current Hyperframes workflow and conventions (hyperframes-core, hyperframes-animation, hyperframes-creative, hyperframes-keyframes). Do not treat this brief as fixed HTML/CSS — implement using Hyperframes' own best practices for structure, timing, and audio wiring.

Requirements:
- Show at least one real UI, copy, or visual element from the source project (the Value Quadrant grid and/or the debate blockquote layout, using the exact palette and fonts above).
- Keep all text readable in the final render — respect reading-time floors (short label ~0.8s settled, full sentence ~0.3s/word).
- Keep the video within 15–25 seconds (target 19s).
- Include the planned music/SFX layer — not disabled by the user.
- Treat audio notes as guidance, not a fixed cue sheet. Choose exact SFX after the visual animation exists.
- Treat music cue metadata as optional timing hints — ignore cues that hurt readability, scene pacing, or the product story. Use only 1-3 strong cue locks total.
- Use SFX to support motion: soft drop/click sounds for card and nav reveals, restraint everywhere else — this is a polished/quiet tone, not app-store dense.
- Honor the fade-in/fade-out music treatment and the volume lift into Scene 4.
- Use local assets already copied into `composition/assets/` for audio.
- Run `npx hyperframes check` before render — it is brag's single gate.
