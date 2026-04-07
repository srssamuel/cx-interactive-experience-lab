# Autonomous Build Fix Loop

Automatically detect and fix all TypeScript/build errors in a tight loop until the project compiles cleanly.

## Instructions

1. **Run the build**: `npm run build 2>&1`

2. **If build succeeds** (exit code 0): Report "Build clean" and stop.

3. **If build fails**, parse every error:
   - Extract file path, line number, and error message
   - Group errors by file

4. **For each failing file**:
   - **Read the file** to understand context
   - **Read the component interface/types** referenced in the error (e.g., if prop mismatch, read the component's type definition FIRST)
   - **Fix the root cause** — not just the symptom:
     - Wrong prop name → check actual interface and use correct prop
     - Missing import → add the import
     - Type mismatch → check expected types and adjust
     - Ref type error → use correct generic (e.g., `useRef<HTMLDivElement>(null)`)
   - **Never suppress errors** with `any`, `@ts-ignore`, or type assertions unless absolutely necessary

5. **Re-run `npm run build`** after fixes

6. **Repeat steps 2-5** until build exits with code 0 (max 10 iterations)

7. **Run `npx tsc --noEmit`** as a second gate to catch type-only errors

8. **Report summary**:
   - Number of iterations needed
   - Each error found and how it was fixed
   - Final build status

## Rules
- ALWAYS read component type definitions before fixing prop errors
- NEVER guess prop names — verify from source
- NEVER add `// @ts-ignore` or `as any` to suppress real errors
- If stuck after 10 iterations, stop and report remaining errors for manual review
