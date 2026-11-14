# Importing compliance frameworks

Open **Compliance → Import framework**.

## NIST Cybersecurity Framework 2.0

Built in. Click **Add NIST CSF 2.0** to load 6 functions, 22 categories and 106 subcategories. The same data is in `data/nist-csf-2.0.json`.

## CIS Controls v8.1

The CIS Controls are © Center for Internet Security and licensed under **CC BY-NC-ND 4.0**. They are free for an organisation's own internal use, but they may not be redistributed in modified form or used in a commercial product without a licence from CIS. That is why they are **not** in this repository. Never commit a CIS workbook or export here; `.gitignore` blocks the usual file names.

To import:

1. Download the CIS Controls v8.1 workbook from cisecurity.org (free registration).
2. Upload the `.xlsx`, or a `.csv` saved from it, under **From an Excel or CSV file**.
3. The name ("CIS Controls") and version ("8.1") fill in automatically. Check the preview, then click **Import requirements**.

What is picked up:

| Field | Source |
|---|---|
| Code | CIS Safeguard (e.g. 4.10) |
| Title, description | Safeguard title and description |
| Group | CIS Control number and name (1–18) |
| Function | Security function (Govern, Identify, Protect, Detect, Respond, Recover) |
| Level | Lowest Implementation Group that includes the safeguard (IG1, IG2, IG3) |

A complete import has **153 safeguards in 18 controls**, 56 of them at IG1.

**Excel number problem:** spreadsheets often store safeguard `3.10` as the number `3.1`. The importer restores `x.10` codes from their position in the sequence, so 3.10, 4.10, 8.10, 13.10 and 16.10 come through correctly.

## Other frameworks (ISO 27001, PCI DSS, local regulations, internal policies)

Use one row per requirement. Header names are matched case-insensitively.

| Column | Required | Also recognised as |
|---|---|---|
| `Code` | yes | ID, Ref, Reference, Control ID, Requirement ID, Clause |
| `Title` | yes | Name, Requirement, Control title, Statement |
| `Group` | no | Function, Domain, Family, Control family, Section, Theme |
| `Category` | no | |
| `Description` | no | Guidance, Details |
| `Level` | no | IG1 / IG2 / IG3 columns marked with any value |

See `data/framework-import-template.csv`. If no group is given, the part of the code before the first `.`, `-` or space is used (so `A.5.1` is grouped under `A`).

Rows with the same code are imported once. One framework can hold about 800 requirements; split larger ones into several files.
