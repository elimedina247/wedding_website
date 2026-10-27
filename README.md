# Tara & Eli — wedding website

A small static site (plain HTML + CSS, no build step) for our wedding on December 11, 2027 at Matachica Resort, Ambergris Caye, Belize.

| Page | File |
| --- | --- |
| Home (big photo of us) | `index.html` |
| The Place (Ambergris Caye + Matachica) | `the-place.html` |
| Reserve a Room | `reserve.html` |
| Getting There (Maya Island Air + ferry links) | `getting-there.html` |

Shared styles live in `css/styles.css`.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Photos

**Ambergris Caye** (The Place): real photos of the island from Wikimedia Commons, loaded straight from Wikimedia. Their Creative Commons licenses require credit, which is the small "Photos via Wikimedia Commons" line at the bottom of the page. If you swap a photo out, remove its credit too.

**Matachica** (The Place, and the Reserve page): `images/matachica-1.jpg` – `matachica-6.jpg` and `images/matachica-room.jpg`, taken from Matachica's website with permission from the resort's wedding coordinator. Credited as "courtesy of Matachica Resort & Spa".

**Still needed** — `images/hero.jpg`, the full-screen photo of the two of us on the home page (landscape, ~2400px wide). Until it exists, the hero shows a placeholder.

Keep each file under ~500 KB so the site loads fast on phones (https://squoosh.app works well for this).

## Turn on the booking link

In `reserve.html`, find the `BOOKING LINK` comment and follow it: swap the disabled "coming soon" button for a real link.

## Publish with GitHub Pages

Push to GitHub, then in the repo go to **Settings → Pages**, set the source to **Deploy from a branch**, and pick `main` / `/ (root)`.
