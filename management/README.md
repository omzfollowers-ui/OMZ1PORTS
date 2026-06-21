# Deals, Sponsors & Enquiries Management (GitHub)

This repo contains lightweight, GitHub-native tooling to track deals, sponsors and enquiries using Issues.

How to use
- Create a new Issue using one of the templates (Deal / Sponsor / Enquiry).
- Tag, assign and update the issue's `Stage` field in the body as the opportunity progresses.
- Use labels: `deal`, `sponsor`, `enquiry`, `triage`, `won`, `lost`, `follow-up`.

Importing data
- Use `management/template.csv` to bulk import contacts into issues or a sheet outside GitHub.

Automation
- A scheduled workflow creates weekly reminders on open items (see .github/workflows/deals-reminder.yml).

Privacy & Access
- Issues are visible to repository collaborators. For private contact data, consider a private CRM or an encrypted storage outside this repo.

Owner
- Assign an owner in the issue's assignees or include `Suggested Owner` in the issue body.
