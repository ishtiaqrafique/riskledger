# RiskLedger: product plan

## 1. Product

A simple, affordable ERM and compliance platform for mid-sized organisations (about 200–5,000 employees). Large GRC suites are too expensive and complex for them, and many still manage risk in Excel.

Selling points:
- Running in days, with ready-made risk libraries, frameworks and templates
- Aligned with ISO 31000 and COSO ERM
- Board-ready reporting
- Priced for the mid-market
- Optional AI assistance: suggested risks, executive summaries, trend spotting

Feature ideas come from studying the market, Eramba included. No third-party code or screens are copied, and copyleft (AGPL) dependencies are avoided.

## 2. Modules

| Module | v1 (MVP) | Later |
|---|---|---|
| Risk register | Risks, categories, owners, inherent/residual scoring, treatment, reviews | Custom matrices (3×3, 4×4, 5×5), quantitative impact ranges |
| Controls | Library, risk links, test results | Test plans, evidence uploads, test reminders |
| Actions | Treatment actions, owners, due dates, overdue alerts | Approval workflows, escalation rules |
| Risk exceptions | Approved, time-limited acceptance with expiry | Approval workflow, renewal reminders |
| Compliance | Framework import (NIST CSF 2.0, CIS v8.1, custom), assessments, control mapping, compliance % | Cross-framework mapping, evidence library, regulator packs |
| Audit findings | Internal/external findings, responses, due dates | Audit planning, follow-up verification workflow |
| Incidents | Incident log, losses, linked risks | Root cause analysis, near misses |
| KRIs | — | Indicators with thresholds, trends, breach alerts |
| Risk appetite | One global appetite | Appetite by category, board approval |
| Reports | Dashboard, heat maps, PDF/Excel export | Board pack builder, scheduled email reports |
| Admin | Users, roles, departments, picklists | SSO, custom fields, branding per customer |
| AI assistant | — | Risk suggestions, register summaries, draft actions |

## 3. Roles

Admin, Risk manager, Risk owner, Control owner, Auditor, Executive/Viewer. In the full product, access is also limited by department or business unit. See [ROLES.md](ROLES.md).

## 4. Target architecture

| Layer | Choice |
|---|---|
| Frontend | React + TypeScript |
| Backend API | ASP.NET Core (.NET 8) or Python FastAPI |
| Database | PostgreSQL (or SQL Server) |
| Authentication | Microsoft Entra ID / Google SSO, plus email login with MFA |
| Hosting | Azure (or AWS), or on-premise on request |
| Files | Object storage for evidence and attachments |
| Background jobs | Reminders, scheduled reports, escalations |
| AI | Claude API |

Key decisions:
1. **Multi-tenant SaaS** with a tenant ID on every row and database row-level security, so customers can never see each other's data.
2. **Full audit trail**: who changed what, when, with old and new values.
3. **Configurable**: scoring matrices, categories, appetite and labels set per customer.
4. **API-first**, for Power BI, Jira, ServiceNow and HR integrations.
5. **On-premise option** designed for, but built only when a customer pays for it.
6. **Server-side permission checks** on every request; the interface only hides what a role can't do.

## 5. Security and trust

- Encryption in transit and at rest; daily backups with tested restores
- Role-based access, SSO, MFA, session timeouts
- Penetration test before launch and yearly after
- Privacy policy and data processing agreement
- ISO 27001 or SOC 2 in year two

## 6. Roadmap

| Phase | Duration | Outcome |
|---|---|---|
| 0. Discovery | 2–3 weeks | Interviews with 3–5 risk managers, final MVP scope, designs, data model |
| 1. MVP build | 3–4 months | Core modules, audit trail, roles, exports, multi-tenancy |
| 2. Pilot | 2 months | Internal pilot plus 1–2 friendly companies |
| 3. Commercial v1 | 3 months | SSO, KRIs, appetite by category, board packs, reminders, billing |
| 4. Growth | Ongoing | Cross-framework mapping, AI assistant, integrations, on-premise edition |

About 9–12 months to a version that can be sold.

## 7. Team

Product owner / business analyst (risk or audit background), 2 full-stack developers, QA (part-time early on), UI/UX designer (part-time), and a risk management advisor.

## 8. Business model (to validate)

- Annual subscription per organisation in tiers (Starter, Professional, Enterprise)
- One-time onboarding fee for importing existing registers and training
- Start in our own industry and region

## 9. Licensing notes

- NIST CSF is public domain and can ship with the product.
- CIS Controls (CC BY-NC-ND 4.0) need a commercial licence from CIS (e.g. SecureSuite) to be bundled; otherwise customers import their own copy.
- ISO standards are copyrighted; ship only clause numbers and short titles, or have customers import their licensed text.

## 10. Project risks

| Risk | Response |
|---|---|
| Building too much before real use | Small v1, early internal pilot |
| Data leaking between customers | Row-level security from day one, automated cross-tenant tests |
| Certification demands from large customers | Budget for pen tests now, ISO 27001 in year two |
| Competing with large GRC vendors | Win on simplicity, price, setup speed and local support |
