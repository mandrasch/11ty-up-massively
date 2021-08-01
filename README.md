# 11ty-massively
Simple fork of html5up massively theme for static site generator [eleventy/11ty](https://www.google.com/search?q=eleventy+dev&oq=eleventy+dev&aqs=chrome..69i57j69i65j69i60l3.2229j0j1&sourceid=chrome&ie=UTF-8) (Open Source).

This was originally a tiny prototype for the "Domain of One's Own" concept (https://domain-of-ones-own.de/). Empower students / teachers to publish their own tiny html websites with simple page navigation on Github Pages. See german blog post for more background information: https://matthias-andrasch.eu/blog/2021/web-ides-fuer-kleine-domain-of-ones-own-experimente/.

## Play with it

[![Open in Gitpod](open-in-gitpod.svg)](https://gitpod.io/#https://github.com/mandrasch/11ty-up-massively)

If you forked this, change the link to your own repo:
`https://gitpod.io/#https://github.com/mandrasch/11ty-up-massively`

Online-Preview: https://mandrasch.github.io/11ty-up-massively/

## How to edit content

Page content can be found in `src/`-directory, see e.g. elements.html

**Add a new page:**

Just add a new .html or .md page and paste the the following at the top of the file:

```
---
title: My site title
layout: layouts/base.njk
---
```

**Link to a page:**

Eleventy uses a "url filter" to convert links. It is simple to use and makes sure that links are working when this site is published to a subdirectory for GitHub Pages. 

Instead of normal links use the following `{{'' | url}}` syntax. It will automagically link to `src/my-new-page.html`:

```
<a href={{'/my-new-page/' | url}}>My new page</a>
```

**Edit / update navigation**

The navigation is in in [src_includes/partials/nav.njk](https://github.com/mandrasch/11ty-up-massively/blob/main/src/_includes/partials/nav.njk). Just edit the links.


**Including images:**

Images can be added to `src/images`. Reference them like this, without src/:

```
<img src="{{'/images/my-new-image.jpg' | url}}">
```

## Commands for terminal

- Development preview server `npm start`
- Build project in _site-folder: `npm build`


## License

Theme Massively by @ajlkn/html5up.net<br>
https://html5up.net/massively <br>
https://html5up.net/license <br>
https://creativecommons.org/licenses/by/3.0/ - html5up.net <br>

My own small additions are shared under public domain, no attribution needed.