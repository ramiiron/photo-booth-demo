# Pose & Post — Photo Booth App (Public Demo)

The guest-facing photo booth software for **Pose & Post**, a digital photo booth business in Utah. This repository is the public demo: the same experience guests get at an event, running on your own phone or computer camera so clients can try it before booking.

**Try the demo:** https://ramiiron.github.io/photo-booth-demo/

![Event design picker](screenshot.webp)

## The guest experience

1. **Pick a design** for the occasion — party, wedding, baby shower, birthday, Halloween, or graduation.
2. **Tap start** and pose: a countdown runs and the booth takes 3 photos, composed into a photo strip with the event's name.
3. **Scan the QR code** shown at the end: it opens the guest's personal gallery — no app install, no printing.
4. From the gallery, guests **download the strip or individual photos**, apply share frames, and save a **Boomerang** clip if they recorded one. Everything carries the Pose & Post watermark.

## Built for real events

- **Personalized per event:** the event name and template are set at booking time and travel with the session, so every strip and gallery matches the party's look.
- **Boomerang mode:** a short burst becomes a looping back-and-forth clip, playable and downloadable from the QR gallery.
- **Cloud delivery:** photos upload to Cloudinary and are automatically deleted after 24 hours.
- **Runs on an iPad** at events as an installable PWA — the production version lives in a private repository; this demo mirrors it with the visitor's own camera.

A companion booking page and a private lead CRM (inquiries → event → delivered photos → review requests) complete the tools I built for this business.

## Tech

- Vanilla JavaScript, HTML, and CSS — no framework
- Browser camera APIs (getUserMedia) and Canvas for strip composition
- Cloudinary for photo storage and delivery
- Progressive Web App, hosted on GitHub Pages

## Run locally

```bash
git clone https://github.com/ramiiron/photo-booth-demo.git
cd photo-booth-demo
python3 -m http.server 8000
# Open http://localhost:8000 (camera needs localhost or HTTPS)
```

---

Built and maintained by [Ramiro Bugueño](https://github.com/ramiiron) for Pose & Post.
