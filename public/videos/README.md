# Hero Background Video

Drop your hero footage here. The Hero component looks for, in order:

1. `/public/videos/hero.webm` — preferred for size + quality (VP9/AV1)
2. `/public/videos/hero.mp4` — H.264 fallback for max browser compatibility

If neither file exists, the Hero gracefully falls back to the photo poster
(no broken state — the `<video>` element simply shows the poster image).

## What to put here

- **Length:** 8–15 seconds (it loops; longer files just bloat the bundle)
- **Resolution:** 1920×1080 minimum, 2560×1440 ideal
- **Audio:** None / muted (browsers won't autoplay with sound anyway)
- **Subject:** Slow drone or dolly across an architectural facade,
  ACM cladding closeup, panel install in progress — anything that says
  "premium, precise, modern exterior."
- **Bitrate target:** Keep MP4 under ~6 MB and WebM under ~3 MB.
  Compress with ffmpeg or a tool like Handbrake.

## Example ffmpeg compression command

```bash
# H.264 MP4 (broad compatibility)
ffmpeg -i source.mov \
  -vf "scale=2560:-2" -c:v libx264 -preset slow -crf 23 \
  -an -movflags +faststart hero.mp4

# WebM (smaller, modern browsers)
ffmpeg -i source.mov \
  -vf "scale=2560:-2" -c:v libvpx-vp9 -b:v 0 -crf 32 \
  -an hero.webm
```

## Sourcing free architectural footage

If you don't have your own footage yet, these sites carry CC0 / royalty-free
drone shots of modern facades, cladding installs and architectural exteriors:

- pexels.com/videos
- coverr.co
- mixkit.co/free-stock-video
- videvo.net

Search terms that work well: "modern architecture", "facade", "metal panels",
"drone building", "skyscraper exterior".
