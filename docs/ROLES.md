# Roles and access

| Role | Can add and change |
|---|---|
| **Admin** | Everything, including users and roles |
| **Risk manager** | Risks, controls, actions, exceptions, compliance assessments, frameworks, audit findings, incidents |
| **Risk owner** | Risks, treatment actions, exception requests, incidents |
| **Control owner** | Controls, compliance assessments, actions |
| **Auditor** | Audit findings |
| **Viewer** | Nothing (read-only, for executives and the board) |

Every role can view every module.

## How access works in the claude.ai version

1. **Share the workspace** from the artifact's Share menu:
   - *Contributor* lets someone work in RiskLedger.
   - *Viewer* keeps them read-only whatever their role.
   - *Editor* is required for an Admin who manages users.
2. **Assign a role** on the **Users & roles** page. Search the organisation by name, or pick from "Recently opened RiskLedger".
3. The artifact **owner is always Admin**.
4. **Setup mode:** until the first role is assigned, everyone who can edit has full access. After that, people who aren't listed are read-only.
5. **Deactivate** leavers instead of removing them, so "last changed by" keeps a name.

The `members` collection is protected by a database rule: only Editors and the owner can change roles. Other permissions are enforced in the interface.

## Standalone version (local file or GitHub Pages)

There is no sign-in, and the person using the browser is Admin. Use the claude.ai version, or the full product, for multi-user access.
