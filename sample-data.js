/* RiskLedger sample data for the standalone demo (GitHub Pages / local file).
   Fictional example records only. Loaded on a visitor's first visit; the NIST CSF 2.0 framework itself is built into riskledger.html. */
window.RISKLEDGER_SAMPLE = {
    "risks":  [
                  {
                      "id":  "r1",
                      "category":  "IT \u0026 Cyber",
                      "controlIds":  [
                                         "c1",
                                         "c2"
                                     ],
                      "description":  "Example record. Phishing or unpatched systems let ransomware encrypt core systems, halting production and sales for days.",
                      "example":  true,
                      "inherentI":  5,
                      "inherentL":  4,
                      "owner":  "Head of IT",
                      "ref":  "R-001",
                      "residualI":  4,
                      "residualL":  3,
                      "reviewDate":  "2026-12-15",
                      "status":  "In treatment",
                      "title":  "Ransomware attack disrupts operations",
                      "treatment":  "Mitigate"
                  },
                  {
                      "id":  "r2",
                      "category":  "Operational",
                      "controlIds":  [
                                         "c4"
                                     ],
                      "description":  "Example record. Dependence on a single supplier means its failure stops production lines.",
                      "example":  true,
                      "inherentI":  4,
                      "inherentL":  3,
                      "owner":  "Procurement Lead",
                      "ref":  "R-002",
                      "residualI":  4,
                      "residualL":  3,
                      "reviewDate":  "2026-10-30",
                      "status":  "Open",
                      "title":  "Key raw material supplier fails",
                      "treatment":  "Mitigate"
                  },
                  {
                      "id":  "r3",
                      "category":  "Financial",
                      "controlIds":  [
                                         "c3"
                                     ],
                      "description":  "Example record. Fake invoices or CEO-impersonation emails lead to unauthorised payments.",
                      "example":  true,
                      "inherentI":  4,
                      "inherentL":  3,
                      "owner":  "Finance Controller",
                      "ref":  "R-003",
                      "residualI":  3,
                      "residualL":  2,
                      "reviewDate":  "2027-01-20",
                      "status":  "Monitoring",
                      "title":  "Payment fraud by insider or impersonation",
                      "treatment":  "Mitigate"
                  },
                  {
                      "id":  "r4",
                      "category":  "Compliance",
                      "controlIds":  [
                                         "c5"
                                     ],
                      "description":  "Example record. Late awareness of regulatory changes leads to penalties and reputational damage.",
                      "example":  true,
                      "inherentI":  4,
                      "inherentL":  4,
                      "owner":  "Compliance Officer",
                      "ref":  "R-004",
                      "residualI":  4,
                      "residualL":  4,
                      "reviewDate":  "2026-11-30",
                      "status":  "Open",
                      "title":  "Non-compliance with new tax regulations",
                      "treatment":  "Mitigate"
                  },
                  {
                      "id":  "r5",
                      "category":  "Financial",
                      "controlIds":  [

                                     ],
                      "description":  "Example record. Exchange-rate swings increase the cost of imported inputs and squeeze margins.",
                      "example":  true,
                      "inherentI":  3,
                      "inherentL":  4,
                      "owner":  "CFO",
                      "ref":  "R-005",
                      "residualI":  3,
                      "residualL":  4,
                      "reviewDate":  "2027-02-01",
                      "status":  "Monitoring",
                      "title":  "Currency devaluation raises import costs",
                      "treatment":  "Accept"
                  },
                  {
                      "id":  "r6",
                      "category":  "Health \u0026 Safety",
                      "controlIds":  [

                                     ],
                      "description":  "Example record. Unsafe machinery use causes serious injury, stoppage and legal claims.",
                      "example":  true,
                      "inherentI":  5,
                      "inherentL":  3,
                      "owner":  "HSE Manager",
                      "ref":  "R-006",
                      "residualI":  4,
                      "residualL":  2,
                      "reviewDate":  "2026-12-05",
                      "status":  "In treatment",
                      "title":  "Workplace injury at manufacturing site",
                      "treatment":  "Mitigate"
                  },
                  {
                      "id":  "r7",
                      "category":  "Strategic",
                      "controlIds":  [

                                     ],
                      "description":  "Example record. A major distributor switches to a competitor, cutting regional sales.",
                      "example":  true,
                      "inherentI":  4,
                      "inherentL":  2,
                      "owner":  "Sales Director",
                      "ref":  "R-007",
                      "residualI":  3,
                      "residualL":  2,
                      "reviewDate":  "2027-03-10",
                      "status":  "Open",
                      "title":  "Loss of key brand distributor",
                      "treatment":  "Mitigate"
                  }
              ],
    "controls":  [
                     {
                         "id":  "c1",
                         "description":  "Example record. MFA required for all remote and privileged access.",
                         "example":  true,
                         "frequency":  "Continuous",
                         "lastTested":  "2026-09-20",
                         "name":  "Multi-factor authentication",
                         "nature":  "Automated",
                         "owner":  "Head of IT",
                         "ref":  "C-001",
                         "result":  "Effective",
                         "type":  "Preventive"
                     },
                     {
                         "id":  "c2",
                         "description":  "Example record. Nightly backups replicated offsite, restore test each quarter.",
                         "example":  true,
                         "frequency":  "Daily",
                         "lastTested":  "2026-07-02",
                         "name":  "Daily offsite backups",
                         "nature":  "Automated",
                         "owner":  "Infrastructure Manager",
                         "ref":  "C-002",
                         "result":  "Partially effective",
                         "type":  "Corrective"
                     },
                     {
                         "id":  "c3",
                         "description":  "Example record. Payments above threshold need two authorised signatories.",
                         "example":  true,
                         "frequency":  "Daily",
                         "lastTested":  "2026-10-11",
                         "name":  "Dual approval for payments",
                         "nature":  "IT-dependent manual",
                         "owner":  "Finance Controller",
                         "ref":  "C-003",
                         "result":  "Effective",
                         "type":  "Preventive"
                     },
                     {
                         "id":  "c4",
                         "description":  "Example record. Financial and compliance screening before onboarding key suppliers.",
                         "example":  true,
                         "frequency":  "Ad hoc",
                         "lastTested":  "",
                         "name":  "Supplier due diligence",
                         "nature":  "Manual",
                         "owner":  "Procurement Lead",
                         "ref":  "C-004",
                         "result":  "Not tested",
                         "type":  "Preventive"
                     },
                     {
                         "id":  "c5",
                         "description":  "Example record. Monthly review of new regulations by the compliance team.",
                         "example":  true,
                         "frequency":  "Monthly",
                         "lastTested":  "2026-06-15",
                         "name":  "Regulatory change monitoring",
                         "nature":  "Manual",
                         "owner":  "Compliance Officer",
                         "ref":  "C-005",
                         "result":  "Ineffective",
                         "type":  "Detective"
                     }
                 ],
    "actions":  [
                    {
                        "id":  "a1",
                        "dueDate":  "2026-10-31",
                        "example":  true,
                        "notes":  "Example record. 60% of staff completed.",
                        "owner":  "Head of IT",
                        "ref":  "A-001",
                        "riskId":  "r1",
                        "status":  "In progress",
                        "title":  "Run company-wide phishing awareness training"
                    },
                    {
                        "id":  "a2",
                        "dueDate":  "2026-12-20",
                        "example":  true,
                        "notes":  "Example record.",
                        "owner":  "Procurement Lead",
                        "ref":  "A-002",
                        "riskId":  "r2",
                        "status":  "Not started",
                        "title":  "Qualify a second raw material supplier"
                    },
                    {
                        "id":  "a3",
                        "dueDate":  "2026-11-05",
                        "example":  true,
                        "notes":  "Example record.",
                        "owner":  "Compliance Officer",
                        "ref":  "A-003",
                        "riskId":  "r4",
                        "status":  "Not started",
                        "title":  "Subscribe to regulatory update service"
                    },
                    {
                        "id":  "a4",
                        "dueDate":  "2026-11-28",
                        "example":  true,
                        "notes":  "Example record. Parts ordered.",
                        "owner":  "HSE Manager",
                        "ref":  "A-004",
                        "riskId":  "r6",
                        "status":  "In progress",
                        "title":  "Install machine guarding on line 3"
                    },
                    {
                        "id":  "a5",
                        "dueDate":  "2026-09-30",
                        "example":  true,
                        "notes":  "Example record.",
                        "owner":  "Infrastructure Manager",
                        "ref":  "A-005",
                        "riskId":  "r1",
                        "status":  "Done",
                        "title":  "Quarterly backup restore test"
                    }
                ],
    "exceptions":  [
                       {
                           "id":  "e1",
                           "approvedOn":  "2026-09-25",
                           "approver":  "Board Audit Committee",
                           "conditions":  "Re-assess if the currency moves more than 10% in a quarter.",
                           "controlIds":  [

                                          ],
                           "example":  true,
                           "expiryDate":  "2027-03-31",
                           "justification":  "Example record. Hedging costs currently exceed the expected loss; prices will be reviewed quarterly instead.",
                           "ref":  "E-001",
                           "requestedBy":  "CFO",
                           "riskId":  "r5",
                           "startDate":  "2026-10-01",
                           "status":  "Approved",
                           "title":  "Accept FX exposure on imported inputs without hedging"
                       },
                       {
                           "id":  "e2",
                           "approvedOn":  "2026-06-10",
                           "approver":  "Chief Operating Officer",
                           "conditions":  "Keep 6 weeks of safety stock on hand.",
                           "controlIds":  [
                                              "c4"
                                          ],
                           "example":  true,
                           "expiryDate":  "2026-12-01",
                           "justification":  "Example record. No alternative supplier can meet quality specs until qualification (A-002) is complete.",
                           "ref":  "E-002",
                           "requestedBy":  "Procurement Lead",
                           "riskId":  "r2",
                           "startDate":  "2026-06-15",
                           "status":  "Approved",
                           "title":  "Continue single-sourcing raw material until second supplier qualified"
                       },
                       {
                           "id":  "e3",
                           "approvedOn":  "",
                           "approver":  "CFO",
                           "conditions":  "Manual review of filings by external tax advisor.",
                           "controlIds":  [
                                              "c5"
                                          ],
                           "example":  true,
                           "expiryDate":  "2027-06-30",
                           "justification":  "Example record. Budget for the upgrade is not available this year.",
                           "ref":  "E-003",
                           "requestedBy":  "Compliance Officer",
                           "riskId":  "r4",
                           "startDate":  "2026-12-01",
                           "status":  "Requested",
                           "title":  "Defer tax compliance system upgrade to next financial year"
                       },
                       {
                           "id":  "e4",
                           "approvedOn":  "2026-04-28",
                           "approver":  "CIO",
                           "conditions":  "PCs kept on an isolated network segment with no internet access.",
                           "controlIds":  [
                                              "c2"
                                          ],
                           "example":  true,
                           "expiryDate":  "2026-10-31",
                           "justification":  "Example record. Machine control software only runs on the old OS; vendor upgrade pending.",
                           "ref":  "E-004",
                           "requestedBy":  "Head of IT",
                           "riskId":  "r1",
                           "startDate":  "2026-05-01",
                           "status":  "Approved",
                           "title":  "Unsupported operating system on legacy production PCs"
                       }
                   ],
    "incidents":  [
                      {
                          "id":  "i1",
                          "date":  "2026-08-14",
                          "description":  "Example record. One finance mailbox accessed for two hours; no payments made.",
                          "example":  true,
                          "loss":  0,
                          "ref":  "I-001",
                          "riskId":  "r1",
                          "severity":  "Medium",
                          "status":  "Closed",
                          "title":  "Phishing email led to compromised mailbox"
                      },
                      {
                          "id":  "i2",
                          "date":  "2026-10-22",
                          "description":  "Example record. Two days of lost production.",
                          "example":  true,
                          "loss":  1850000,
                          "ref":  "I-002",
                          "riskId":  "r2",
                          "severity":  "High",
                          "status":  "Investigating",
                          "title":  "Late delivery from main supplier stopped line 2"
                      }
                  ],
    "findings":  [
                     {
                         "id":  "f1",
                         "audit":  "Statutory IT general controls review 2026",
                         "auditor":  "External auditor",
                         "dateRaised":  "2026-09-12",
                         "description":  "Example record. Installed software is not tracked; unlicensed and unsupported software found on 14 PCs.",
                         "dueDate":  "2026-12-31",
                         "example":  true,
                         "owner":  "Infrastructure Manager",
                         "ref":  "F-001",
                         "reqKey":  "nist-csf-2~ID.AM-02",
                         "response":  "Deploy endpoint management tool and complete inventory by year end.",
                         "riskId":  "r1",
                         "severity":  "High",
                         "source":  "External audit",
                         "status":  "In remediation",
                         "title":  "No complete software inventory maintained"
                     },
                     {
                         "id":  "f2",
                         "audit":  "Q3 2026 IT access audit",
                         "auditor":  "Internal Audit Department",
                         "dateRaised":  "2026-08-05",
                         "description":  "Example record. ERP access was last reviewed 11 months ago; 6 leavers still had active accounts.",
                         "dueDate":  "2026-10-31",
                         "example":  true,
                         "owner":  "Head of IT",
                         "ref":  "F-002",
                         "reqKey":  "nist-csf-2~PR.AA-05",
                         "response":  "Introduce quarterly access certification signed by department heads.",
                         "riskId":  "r3",
                         "severity":  "High",
                         "source":  "Internal audit",
                         "status":  "Open",
                         "title":  "User access reviews not performed quarterly"
                     },
                     {
                         "id":  "f3",
                         "audit":  "Q3 2026 IT access audit",
                         "auditor":  "Internal Audit Department",
                         "dateRaised":  "2026-08-05",
                         "description":  "Example record. No evidence of restore testing in the last two quarters.",
                         "dueDate":  "2026-11-30",
                         "example":  true,
                         "owner":  "Infrastructure Manager",
                         "ref":  "F-003",
                         "reqKey":  "nist-csf-2~PR.DS-11",
                         "response":  "Quarterly restore test with sign-off added to IT calendar.",
                         "riskId":  "r1",
                         "severity":  "Medium",
                         "source":  "Internal audit",
                         "status":  "Ready for verification",
                         "title":  "Backup restore tests not documented"
                     },
                     {
                         "id":  "f4",
                         "audit":  "ISO 9001 surveillance audit",
                         "auditor":  "Certification body",
                         "dateRaised":  "2026-06-18",
                         "description":  "Example record. 3 of 5 critical suppliers had no due diligence on file.",
                         "dueDate":  "2026-09-30",
                         "example":  true,
                         "owner":  "Procurement Lead",
                         "ref":  "F-004",
                         "reqKey":  "nist-csf-2~GV.SC-04",
                         "response":  "Supplier criticality ranking and annual assessment process.",
                         "riskId":  "r2",
                         "severity":  "Medium",
                         "source":  "Certification body",
                         "status":  "Open",
                         "title":  "Supplier risk assessments missing for critical vendors"
                     },
                     {
                         "id":  "f5",
                         "audit":  "NIST CSF self-assessment 2026",
                         "auditor":  "Risk Management team",
                         "dateRaised":  "2026-09-30",
                         "description":  "Example record. Draft policy in use since 2025 without management approval.",
                         "dueDate":  "2026-11-15",
                         "example":  true,
                         "owner":  "Head of IT",
                         "ref":  "F-005",
                         "reqKey":  "nist-csf-2~GV.PO-01",
                         "response":  "Policy approved by management committee on 10 Nov 2026.",
                         "riskId":  "",
                         "severity":  "Low",
                         "source":  "Self-assessment",
                         "status":  "Closed",
                         "title":  "Cybersecurity policy not formally approved"
                     }
                 ],
    "assessments":  [
                        {
                            "id":  "nist-csf-2~DE.CM-01",
                            "controlIds":  [

                                           ],
                            "evidence":  "Example record. Firewall alerts reviewed weekly, not continuously.",
                            "example":  true,
                            "lastAssessed":  "2026-10-02",
                            "owner":  "Head of IT",
                            "status":  "Partially compliant"
                        },
                        {
                            "id":  "nist-csf-2~DE.CM-02",
                            "controlIds":  [

                                           ],
                            "evidence":  "Example record. Covered by group physical security programme.",
                            "example":  true,
                            "lastAssessed":  "2026-10-02",
                            "owner":  "Facilities Manager",
                            "status":  "Not applicable"
                        },
                        {
                            "id":  "nist-csf-2~GV.PO-01",
                            "controlIds":  [

                                           ],
                            "evidence":  "Example record. Policy exists but not yet approved by management.",
                            "example":  true,
                            "lastAssessed":  "2026-09-30",
                            "owner":  "Head of IT",
                            "status":  "Partially compliant"
                        },
                        {
                            "id":  "nist-csf-2~GV.RM-02",
                            "controlIds":  [

                                           ],
                            "evidence":  "Example record. Board-approved risk appetite statement, 2026.",
                            "example":  true,
                            "lastAssessed":  "2026-10-15",
                            "owner":  "Chief Risk Officer",
                            "status":  "Compliant"
                        },
                        {
                            "id":  "nist-csf-2~GV.RM-03",
                            "controlIds":  [

                                           ],
                            "evidence":  "Example record. Cyber risks are in the enterprise risk register.",
                            "example":  true,
                            "lastAssessed":  "2026-10-15",
                            "owner":  "Chief Risk Officer",
                            "status":  "Compliant"
                        },
                        {
                            "id":  "nist-csf-2~GV.SC-04",
                            "controlIds":  [
                                               "c4"
                                           ],
                            "evidence":  "Example record. No supplier criticality ranking.",
                            "example":  true,
                            "lastAssessed":  "2026-09-30",
                            "owner":  "Procurement Lead",
                            "status":  "Non-compliant"
                        },
                        {
                            "id":  "nist-csf-2~ID.AM-01",
                            "controlIds":  [

                                           ],
                            "evidence":  "Example record. Hardware inventory covers head office only.",
                            "example":  true,
                            "lastAssessed":  "2026-10-02",
                            "owner":  "Infrastructure Manager",
                            "status":  "Partially compliant"
                        },
                        {
                            "id":  "nist-csf-2~ID.AM-02",
                            "controlIds":  [

                                           ],
                            "evidence":  "Example record. No software inventory.",
                            "example":  true,
                            "lastAssessed":  "2026-10-02",
                            "owner":  "Infrastructure Manager",
                            "status":  "Non-compliant"
                        },
                        {
                            "id":  "nist-csf-2~ID.RA-01",
                            "controlIds":  [

                                           ],
                            "evidence":  "Example record. Quarterly vulnerability scans, not all sites.",
                            "example":  true,
                            "lastAssessed":  "2026-10-02",
                            "owner":  "Head of IT",
                            "status":  "Partially compliant"
                        },
                        {
                            "id":  "nist-csf-2~PR.AA-01",
                            "controlIds":  [

                                           ],
                            "evidence":  "Example record. Joiner/mover/leaver process in Active Directory.",
                            "example":  true,
                            "lastAssessed":  "2026-10-10",
                            "owner":  "Head of IT",
                            "status":  "Compliant"
                        },
                        {
                            "id":  "nist-csf-2~PR.AA-03",
                            "controlIds":  [
                                               "c1"
                                           ],
                            "evidence":  "Example record. MFA enforced for remote and admin access.",
                            "example":  true,
                            "lastAssessed":  "2026-10-10",
                            "owner":  "Head of IT",
                            "status":  "Compliant"
                        },
                        {
                            "id":  "nist-csf-2~PR.AA-05",
                            "controlIds":  [
                                               "c1"
                                           ],
                            "evidence":  "Example record. Access reviews done annually, not quarterly.",
                            "example":  true,
                            "lastAssessed":  "2026-10-10",
                            "owner":  "Head of IT",
                            "status":  "Partially compliant"
                        },
                        {
                            "id":  "nist-csf-2~PR.AT-01",
                            "controlIds":  [

                                           ],
                            "evidence":  "Example record. 60% completion of awareness training.",
                            "example":  true,
                            "lastAssessed":  "2026-10-20",
                            "owner":  "HR Manager",
                            "status":  "Partially compliant"
                        },
                        {
                            "id":  "nist-csf-2~PR.DS-11",
                            "controlIds":  [
                                               "c2"
                                           ],
                            "evidence":  "Example record. Backups run daily; restore tests irregular.",
                            "example":  true,
                            "lastAssessed":  "2026-07-02",
                            "owner":  "Infrastructure Manager",
                            "status":  "Partially compliant"
                        },
                        {
                            "id":  "nist-csf-2~PR.PS-02",
                            "controlIds":  [

                                           ],
                            "evidence":  "Example record. Legacy unsupported OS on production PCs (see exception E-004).",
                            "example":  true,
                            "lastAssessed":  "2026-10-02",
                            "owner":  "Head of IT",
                            "status":  "Non-compliant"
                        },
                        {
                            "id":  "nist-csf-2~PR.PS-04",
                            "controlIds":  [

                                           ],
                            "evidence":  "Example record. Central log collection in place.",
                            "example":  true,
                            "lastAssessed":  "2026-10-02",
                            "owner":  "Head of IT",
                            "status":  "Compliant"
                        },
                        {
                            "id":  "nist-csf-2~RC.RP-03",
                            "controlIds":  [
                                               "c2"
                                           ],
                            "evidence":  "Example record. Backup integrity not verified before restore.",
                            "example":  true,
                            "lastAssessed":  "2026-07-02",
                            "owner":  "Infrastructure Manager",
                            "status":  "Non-compliant"
                        },
                        {
                            "id":  "nist-csf-2~RS.MA-01",
                            "controlIds":  [

                                           ],
                            "evidence":  "Example record. Incident response plan tested in August.",
                            "example":  true,
                            "lastAssessed":  "2026-08-20",
                            "owner":  "Head of IT",
                            "status":  "Compliant"
                        }
                    ]
};
