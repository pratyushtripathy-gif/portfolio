## Goal
Replace the wrongly-uploaded resume file with the actual CV and refresh the thumbnail used in the Education section card.

## Steps

1. **Replace the PDF**
   - Overwrite `public/Pratyush_Tripathy_Resume.pdf` with the newly uploaded `Pratyush_Tripathy_Full_Resume.pdf`.

2. **Regenerate the thumbnail**
   - Re-render the first page to `src/assets/resume-thumb.jpg` via `pdftoppm` (same 110 DPI as before) so the Education card preview and the Hero "Resume" download both reflect the real CV.

3. **No code changes**
   - `Education.tsx` and `Hero.tsx` already point at `/Pratyush_Tripathy_Resume.pdf` and `resume-thumb.jpg`, so swapping the binaries is enough.

## Out of scope
No layout, copy, or component changes.