<h2 align="center">parcel-sass-bootstrap-boilerplate</h2>

<p align="center">
  <a href="https://www.npmjs.com/package/parcel">
    <img alt="gulp" src="https://img.shields.io/badge/parcel-v1.11.0-blue.svg"></a>
  <a href="http://getbootstrap.com/">
    <img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-v4.2.1-563d7c.svg"></a>
  <a href="https://www.npmjs.com/package/gulp-sass">
    <img alt="node-sass" src="https://img.shields.io/badge/node--sass-v4.11.0-ff69b4.svg"></a>
  <a href="https://jquery.com/">
    <img alt="jQuery" src="https://img.shields.io/badge/jquery-v3.3.1-ffa200.svg"></a>
  <a href="#">
    <img alt="livereload" src="https://img.shields.io/badge/dev--server-live--reloading-red.svg"></a>
</p>

<p align="center">
  <em>
  SASS
  · Babel
  · Bootstrap
  · Parcel.JS
  · JQuery
  · Popper.JS
  </em>
</p>
<h3 align="center">🙋‍♂️ Made by <a href="https://twitter.com/_abhijithv">@abhijithvijayan</a></h3>
<p align="center">
  Donate:
  <a href="https://www.paypal.me/iamabhijithvijayan" target='_blank'><i><b>PayPal</b></i></a>,
  <a href="https://www.patreon.com/abhijithvijayan" target='_blank'><i><b>Patreon</b></i></a>
</p>
<p align="center">
  <a href='https://www.buymeacoffee.com/abhijithvijayan' target='_blank'>
    <img height='36' style='border:0px;height:36px;' src='https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/orange_img.png' border='0' alt='Buy Me a Coffee' />
  </a>
</p>

<hr />

<p align="center"><a href="https://parceljs.org/" title="parcel"><img src="https://i.imgur.com/58zAjXl.png" alt="logo" width="400" /></a></p>

This Parcel-Sass-bootstrap starter contains the features and scripts you need to get started quickly with Parcel bundler.

It contains the following features:

- ParcelJs
- Babel ES6 Compiler
- Bootstrap v4
- JQuery v3.3.1
- PopperJS
- Concatenate and minify JavaScript.
- Compile, minify, autoprefix SASS.
- Hot-Reloading
- Optimize and Cache Images

## Getting Started

### Dependencies

Make sure these are installed first.

- [Node.js](http://nodejs.org)
- [Parcel Bundler](https://parceljs.org/)

  `npm install -g parcel-bundler`

### Quick Start

1. Clone the repo :

   `git clone https://github.com/abhijithvijayan/parcel-sass-bootstrap-boilerplate.git`

2. In bash/terminal/command line, `cd parcel-sass-bootstrap-boilerplate` into project directory.
3. Run `npm install` to install required files and dependencies.
4. Launch the `development environment` with :

   `npm run dev`

Note: **For Production, Use:**

```
npm run build
```

This will build files and assets to `dist/` directory.

<hr />

## Documentation

### Workflow structure

`src` - > source directory

```
.
├── src
│   ├── assets
│   │   └── trollHuntersArcadia.png
│   ├── sass
│   │   ├── _fonts.scss
│   │   ├── _reset.scss
│   │   ├── _variables.scss
│   │   └── main.scss
│   ├── index.js
│   └── index.html
.
```

### Instructions

- Add your HTML files by inserting or including them in the `src` directory (By default `index.html` is added to the directory, feel free to edit it with the changes seen live.)

  - For the new `HTML` file(s), link the `index.js` (in body tag) file in the `HTML` files as they are created.

    ```
    <head>
        :
        <link href="sass/main.scss" rel="stylesheet" />

    </head>
    <body>
        :
        <script src="index.js"></script>
    </body>
    ```

- Add `sass`(SCSS) files to `src/sass` folder.

  - Make sure you import the scss file in `main.scss`
    ```
    @import "filename";
    ```

- Add `images` to `src/assets` folder.

## Licence

Code released under the [MIT License](LICENSE)
