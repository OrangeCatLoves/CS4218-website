# Course content images

Put photographs and other content images in this folder.

Recommended filenames use lowercase letters and hyphens:

- `instructor-name.jpg`
- `lecture-venue.jpg`
- `welcome-banner.jpg`
- `piazza-guide.png`

Then reference an image from a Markdown page with:

```html
<img
  class="content-image content-image-landscape"
  src="{{ baseUrl }}/images/content/welcome-banner.jpg"
  alt="Students collaborating during a software testing class"
/>
```

Use `content-image-portrait` for a portrait. Write useful alternative text for
informative images. Use `alt=""` only when an image is purely decorative.
