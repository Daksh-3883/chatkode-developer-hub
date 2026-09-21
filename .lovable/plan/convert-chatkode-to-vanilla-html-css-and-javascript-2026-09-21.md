# Convert ChatKode to Vanilla HTML, CSS, and JavaScript

## Goal
Replace the React-rendered ChatKode page with a framework-free page implementation while preserving the approved appearance, content, section order, interactions, motion, responsiveness, accessibility, and metadata.

The TanStack route remains only as the required preview/routing shell. The rendered page itself will be authored as semantic HTML, plain CSS, and browser JavaScript with no React state or component behavior.

## Implementation

1. **Create the vanilla page markup**
   - Reproduce the current navigation, hero, capability strip, all numbered sections, Human-First philosophy section, final invitation, and footer.
   - Preserve the exact copy, logo, code examples, diagrams, labels, anchors, semantic heading order, and accessibility labels.
   - Keep repeated visual patterns as small HTML-producing helpers so the source remains maintainable.

2. **Rebuild the visual system in plain CSS**
   - Translate the current logo-derived navy, blue, cyan, green, gold, and light text tokens into plain CSS custom properties.
   - Match the existing typography, spacing, grids, panels, borders, glows, code syntax, diagrams, responsive breakpoints, focus styles, and reduced-motion behavior.
   - Remove the page’s dependency on Tailwind utility classes while leaving shared framework error pages unaffected.

3. **Rebuild interactions in plain JavaScript**
   - Mobile navigation with focus-safe open/close behavior and body scroll locking.
   - Hero choreography, progressive code reveal, restrained scroll parallax, and section/reveal observers.
   - Language tabs, copy controls with status feedback, algorithm node focus/hover states, pipeline/math/human-system activation, and current-year footer text.
   - Clean up timers, observers, media listeners, and event listeners when the route unmounts.

4. **Integrate with the live route**
   - Replace the current home route composition with one thin mount point that injects the semantic vanilla markup and initializes the JavaScript.
   - Preserve unique page metadata and the required app shell.
   - Stop importing the old React page sections; leave unrelated framework error handling and routing unchanged.

5. **Verify parity**
   - Compare the converted page at desktop, tablet, mobile, and narrow-mobile sizes.
   - Test initial choreography, scrolling both directions, mobile menu, tabs, copy controls, algorithm interactions, links, keyboard focus, reduced motion, overflow, and console errors.
   - Fix any visible or behavioral differences before completion.
