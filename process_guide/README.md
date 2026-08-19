# NAR Provisions - Process Guide

Static web version of the NAR Provisions Process Guide.

## File structure

```text
index.html
assets/
  styles.css
  script.js
.github/
  workflows/
    deploy.yml
```

## Deploy with GitHub Pages and GitHub Actions

1. Create a GitHub repository.
2. Upload these files to the repository root.
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, select **GitHub Actions**.
5. Push to the `main` branch.
6. The workflow `.github/workflows/deploy.yml` will publish the site.

## SharePoint iframe test

Once GitHub Pages is published, use this pattern in SharePoint Embed:

```html
<iframe src="YOUR_GITHUB_PAGES_URL" width="100%" height="1200" style="border:0; border-radius:16px; overflow:hidden;" loading="lazy"></iframe>
```
