# RiskLedger

RiskLedger is an enterprise risk management (ERM) and compliance tool for mid-sized organisations. This repository holds the **working prototype**: a single-page web app with no build step and no server.

> **Status:** prototype for demos and pilots. The production architecture is described in [docs/PRODUCT_PLAN.md](docs/PRODUCT_PLAN.md).

## Modules

| Module | What it does |
|---|---|
| **Dashboard** | Open, high/critical and above-appetite risks, overdue actions, control effectiveness, exceptions, audit findings, incidents, a 5×5 heat map (inherent or residual), and compliance % by framework |
| **Risk register** | Risks with category, owner, inherent and residual likelihood × impact, treatment, status, review date and linked controls |
| **Controls** | Control library with type, nature, frequency, last test date and result |
| **Actions** | Treatment actions linked to risks, with due dates and overdue flags |
| **Risk exceptions** | Time-limited, approved acceptance of risks above appetite, with expiry tracking and compensating controls |
| **Compliance** | Frameworks (NIST CSF 2.0 built in; CIS Controls v8.1, ISO 27001 and others by Excel/CSV import), assessments per requirement, mapped controls, compliance % by framework and group |
| **Audit findings** | Internal and external findings linked to requirements and risks, with management response, owner and due date |
| **Incidents** | Loss events with severity, financial loss and related risk |
| **Users & roles** | Admin, Risk manager, Risk owner, Control owner, Auditor and Viewer roles, with a permissions matrix and deactivation |

### Scoring

- Risk score = likelihood (1–5) × impact (1–5)
- Bands: Low 1–4, Medium 5–9, High 10–15, Critical 16–25
- Risk appetite: residual score ≤ 9 (constant `APPETITE` in `riskledger.html`)
- Compliance % = (compliant + ½ × partially compliant) ÷ (requirements − not applicable)

## Running it

**Option 1: open the file.** Double-click `index.html` (or `riskledger.html`). Records are saved in that browser's local storage, on that device only.

**Option 2: GitHub Pages.** In the repository, go to *Settings → Pages*, choose *Deploy from a branch*, branch `main`, folder `/ (root)`. The app is then served at `https://<your-account>.github.io/<repo>/`. Records are still saved per browser.

**Option 3: claude.ai artifact (shared team workspace).** When published as a Claude artifact, the app uses the artifact's shared database and claude.ai sign-in, so a team sees the same records and roles. This is how the live prototype runs.

| Where it runs | Where records are kept | Sign-in |
|---|---|---|
| Local file / GitHub Pages | This browser only (`localStorage`) | None (you are Admin) |
| claude.ai artifact | Shared artifact database | claude.ai account; roles from the Users page |

## Importing frameworks

- **NIST CSF 2.0** is built in: *Compliance → Import framework → Add NIST CSF 2.0*. A copy of the 106 subcategories is in [data/nist-csf-2.0.json](data/nist-csf-2.0.json).
- **CIS Controls v8.1** is **not** included because of its licence. Download it from the Center for Internet Security and import it in the app. Both the official workbook and a header-less CSV export are recognised.
- **Any other framework**: use [data/framework-import-template.csv](data/framework-import-template.csv).

See [docs/IMPORTING_FRAMEWORKS.md](docs/IMPORTING_FRAMEWORKS.md) for details.

## Project layout

```
riskledger.html                    The whole app: HTML, CSS and JavaScript
index.html                         Redirects to riskledger.html (for GitHub Pages)
data/nist-csf-2.0.json             NIST CSF 2.0 core (public domain)
data/framework-import-template.csv Column layout for importing other frameworks
docs/PRODUCT_PLAN.md               Roadmap and target architecture for the full product
docs/IMPORTING_FRAMEWORKS.md       How to import CIS, ISO and custom frameworks
docs/ROLES.md                      Roles, permissions and how access works
```

## Technology

- Plain HTML, CSS and JavaScript; no framework and no build step
- [SheetJS](https://sheetjs.com/) (from cdnjs) to read Excel files during import
- IBM Plex fonts from Google Fonts

## Known limits of the prototype

- Outside claude.ai, data stays in one browser. There is no server, backup or multi-user sync.
- Role permissions are enforced in the user interface. In the claude.ai version only the role list is protected by the database. The full product must enforce every permission on the server.
- No change-history log beyond "last changed by / when" on each record.

## Licence

[MIT License](LICENSE). NIST CSF content is public domain. CIS Controls are not included and keep their own licence.
