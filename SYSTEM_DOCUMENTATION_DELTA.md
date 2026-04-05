# System Documentation Delta (Pre-Implementation Lock)

**Status:** Locked for implementation planning  
**Parent document:** `SYSTEM_DOCUMENTATION.md` (system of record for overview, models, and groups)  
**Supersedes for this release:** Sections of the parent where this delta explicitly conflicts (noted below).

This delta merges the agreed portfolio roadmap with **Universal Frontend MVP Design Identity v12.0** constraints. Implementation should not start until the **Open decisions** at the bottom are resolved or explicitly waived.

---

## 1. Goals of this release

1. Close the gap between **stated engineering standards** and **observable evidence** (case-study depth, methodology page, production-grade contact flow).
2. Improve **above-the-fold clarity** (hero, trust strip, featured flagship teaser) without abandoning config-driven architecture.
3. Bring **navigation, forms, loading, and mobile behavior** in line with v12.0 (horizontal nav pattern, inline validation, submit loading states, 320/375/390 checks).

---

## 2. Information architecture (canonical routes)

| Purpose | Canonical path | Notes |
|--------|-----------------|--------|
| Home | `/` | Sections may be reordered via config where feasible. |
| Flagship catalog | `/flagship` | Keep URL; do not introduce `/case-studies` as a duplicate index without redirect. |
| Case study detail | `/flagship/[id]` | First implementation priority for **deep evidence**: at least **FundsLink Academy** (`id` TBD from existing JSON). |
| Tech stack | `/tech-stack` | Keep URL; interactive filter/grid is **[v2]** unless scoped into v1 as a small enhancement. |
| Contact | `/contact` | **[v1]** adds validated form + existing channel links. |
| Methodology / blueprint | `/methodology` | **[v1]** new route: condensed v12.0 gates, sequential groups, mobile-first mandate (no full spec paste required). |

Optional later: `301` or `302` from `/case-studies` → `/flagship` if external links used that path.

---

## 3. Feature list (tagged)

### 3.1 [v1] — in scope for this implementation cycle

| ID | Feature | Acceptance (summary) |
|----|---------|----------------------|
| V1-H1 | **Hero refresh** | Config-driven headline, subline, two CTAs (e.g. flagship + methodology or stack); v12.0 hero rules (`min-height`, responsive type, brand visible on all breakpoints). |
| V1-T1 | **Trust strip** | One row (mobile: wrap or stack) with 3–4 factual items from config; links where applicable. |
| V1-P1 | **Profile / org polish** | Organization entries include **start/end dates or date range** where truthful; “section 04” narrative fixes as per content audit. |
| V1-F1 | **Featured flagship teaser (home)** | Single prominent card: problem/solution/result summary + link to `/flagship/[id]`; content from config. |
| V1-C1 | **Flagship detail: architecture evidence** | At least **FundsLink**: real **architecture diagram** (SVG, PNG, or Mermaid rendered) plus short narrative; other systems may stay lighter until v2. |
| V1-M1 | **`/methodology` page** | Static or config-driven sections: MVP gate questions (5), sequential group idea, mobile-first + nav principles; link to GitHub repo optional. |
| V1-N1 | **Navigation (v12.0)** | Desktop: horizontal structure; dropdown/mega-menu **over** content (no in-flow accordion). Mobile: **horizontal scroll nav** and/or **bottom sheet**; brand never hidden; touch targets ≥ 44×44px. |
| V1-F2 | **Contact form** | React Hook Form + Zod; inline errors; disabled submit + spinner + label change while pending; success and failure user-visible messages; **API contract below**. |
| V1-S1 | **Skills/capabilities framing (home)** | Grouped capabilities (e.g. Frontend / Systems / Tools) from config; link to `/tech-stack`. |
| V1-A1 | **Accessibility & motion** | Focus states, labels, `prefers-reduced-motion` respected for new interactions. |

### 3.2 [v2] — explicitly deferred

| ID | Feature | Rationale |
|----|---------|-----------|
| V2-MSW | MSW for all API mocks | Nice for parity with v12.0 examples; not required if Route Handlers + mock flag suffice for v1. |
| V2-PWA | Full PWA (SW, offline fallback) | Parent doc mentions basic readiness; full offline story deferred. |
| V2-STACK | Filterable relational tech grid | Plan 3 depth; ship after v1 evidence pages stable. |
| V2-GH | GitHub stats embed / contribution graph | Dependency on third-party widgets and layout; defer. |
| V2-ENG | Separate `/engineering` “living spec” JSON viewer | Merge into `/methodology` for v1; split only if content becomes too large. |
| V2-SHC | wholesale **shadcn/ui** migration | Adopt incrementally if current primitives lack loading/error patterns; not a blocker if existing components extended. |
| V2-BLOG | Blog / timeline / search | Already v2+ in parent doc. |

---

## 4. API contract: `POST /api/contact`

**Purpose:** v12.0-compliant contact submission with server-side validation and stable response shape for UI handling.

### 4.1 Request

- **Method / path:** `POST /api/contact`
- **Content-Type:** `application/json`

**Body (JSON):**

| Field | Type | Rules |
|-------|------|--------|
| `name` | string | Required; trim; min length 2; max 120. |
| `email` | string | Required; valid email format (Zod `email()` or pragmatic regex); max 254. |
| `message` | string | Required; trim; min length 10; max 5000. |

**Example:**

```json
{
  "name": "Ada Lovelace",
  "email": "ada@example.com",
  "message": "I would like to discuss a platform role aligned with your flagship work."
}
```

### 4.2 Success response

- **HTTP:** `200`
- **Body:**

```json
{
  "success": true,
  "message": "Thanks — your message was sent."
}
```

`message` is user-facing copy (configurable string on server if desired).

### 4.3 Error responses

- **Validation failure (client payload):** `400`  
  - Body: `{ "success": false, "message": "Please check the fields below.", "fieldErrors": { "email": ["Invalid email"], "message": ["Too short"] } }`  
  - Field keys align with form field names; arrays allow multiple messages per field.

- **Server / transport failure:** `500` (or `502` if upstream email fails)  
  - Body: `{ "success": false, "message": "Something went wrong. Please try again or email directly." }`  
  - **Never** return stack traces or raw provider errors to the client.

### 4.4 Zod schemas (reference)

Implement in `types/` (or equivalent); names illustrative:

- `ContactRequestSchema` — object with `name`, `email`, `message` as above.
- `ContactResponseSchema` — discriminated union or object with `success: boolean`, `message: string`, optional `fieldErrors`.

### 4.5 MVP delivery behavior

- **v1:** Route Handler validates with Zod, returns success if valid. Persistence/email integration may be:
  - **Option A:** Log + success (placeholder, documented as such), or  
  - **Option B:** Forward via Resend/SendGrid/Formspree/etc. using server env vars (no secrets in client).  
- Document chosen option in `.env.example` and this delta once decided.

---

## 5. User flow delta: contact

**Replaces** parent doc §4.3 “no form submission required in v1” for **this** release.

1. Visitor opens `/contact` or uses home/footer CTA.
2. Visitor may use **mailto / LinkedIn / GitHub / WhatsApp** links as today.
3. Visitor may complete **name, email, message**; client validates with Zod + RHF; submit shows loading state.
4. On success, show inline success message (and optional toast if a toast system exists).
5. On failure, show friendly message; field errors inline for 400.

---

## 6. Data / config additions (v1)

Extend existing JSON or types (exact shape implemented with Zod in code):

- **Trust strip:** array of `{ label, value, href? }` or similar under `theme.json` or dedicated `config/trust.json` (prefer single source; avoid duplication).
- **Featured flagship:** reference `flagshipId` + optional override blurbs on home config.
- **Methodology:** `config/methodology.json` or MDX module — sections array with `title`, `body` (markdown string), optional `anchor`.
- **Profile companies:** add optional `startDate`, `endDate` (ISO strings) or `periodLabel` string for display.

---

## 7. MVP gate questions (re-applied to this delta)

Each **[v1]** row in §3.1 must pass:

1. Validates core hypothesis (“this person builds the way they claim”).  
2. Main goals (skim home, open one case study, contact) achievable without v2 items.  
3. Complexity proportionate (e.g. MSW, PWA, GitHub widgets deferred).  
4. Success observable (qualitative review + form success path).  
5. Simpler alternative rejected (e.g. form replaces “email only” for conversion and v12.0 alignment).

---

## 8. Implementation sequence (recommended)

1. Config + types for trust strip, featured teaser, methodology content; nav item for `/methodology`.  
2. Hero + trust strip + profile date fields (content).  
3. FundsLink detail: architecture diagram + copy.  
4. `POST /api/contact` + contact page form wired to `lib/api`.  
5. Navigation refactor (desktop overlay + mobile sheet or horizontal scroll).  
6. Mobile pass: 320, 375, 390; touch targets; reduced motion.

---

## 9. Open decisions (resolve before coding)

- [ ] **Contact delivery:** Option A (mock success) vs Option B (real email provider) for v1 launch.  
- [ ] **Positioning line:** final hero title (full-stack / platform vs frontend-systems emphasis).  
- [ ] **FundsLink `id` slug** in JSON (must match `[id]` route).  
- [ ] **WhatsApp:** include in form success copy only, or also in `profile.json` links (already may exist).

---

**End of delta.** After implementation, either merge this content back into `SYSTEM_DOCUMENTATION.md` or keep this file as the changelog for the release and update the parent’s conflicting sections.
