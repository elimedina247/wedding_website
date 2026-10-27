# Tara & Eli — wedding website

A small static site (plain HTML + CSS, no build step) for our wedding on December 11, 2027 at Matachica Resort, Ambergris Caye, Belize.

| Page | File |
| --- | --- |
| Home (slideshow of us) | `index.html` |
| The Place (Ambergris Caye + Matachica) | `the-place.html` |
| Reserve a Room | `reserve.html` |
| Getting There (Maya Island Air + ferry links) | `getting-there.html` |

Shared styles live in `css/styles.css`; the home page slideshow is `js/slideshow.js`.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Photos

**Us** (home page slideshow): `images/us-1.jpg` – `us-19.jpg` (no `us-17`), portrait (3:4) at 900×1200 with phone metadata (including GPS) stripped. To add a photo, save it as `us-20.jpg` and copy one of the `<img class="slideshow__slide" data-src=...>` lines in `index.html`; the arrows and counter update automatically. The home page background is Matachica's beach (`matachica-3.jpg`).

**Ambergris Caye** (The Place): real photos of the island from Wikimedia Commons, loaded straight from Wikimedia. Their Creative Commons licenses require credit, which is the small "Photos via Wikimedia Commons" line at the bottom of the page. If you swap a photo out, remove its credit too.

**Matachica** (The Place, and the Reserve page): `images/matachica-1.jpg` – `matachica-6.jpg` and `images/matachica-room.jpg`, taken from Matachica's website with permission from the resort's wedding coordinator. Credited as "courtesy of Matachica Resort & Spa".

**Getting There**: `images/maya-island-air.jpg`, `images/ferry-belize-express.jpg` and `images/ferry-caribbean-sprinter.jpg`, taken from each company's website with their permission. Credited as "courtesy of" at the bottom of the page.

Keep each file under ~500 KB so the site loads fast on phones (https://squoosh.app works well for this).

## Turn on the booking link

In `reserve.html`, find the `BOOKING LINK` comment and follow it: swap the disabled "coming soon" button for a real link.

## Publish with GitHub Pages

Push to GitHub, then in the repo go to **Settings → Pages**, set the source to **Deploy from a branch**, and pick `main` / `/ (root)`.
