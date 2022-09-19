# Rundeck Vite UI

Rundeck UI built using Vite in its own repo!

## Dev Instructions to use with Rundeck

Compile this project into your distribution folder. The top level dir should be called `ui-trellis-vite`
In your dev Rundeck go to the dir `rundeckapp/rundeck-runtime/user-assets` the create a symbolic link
to the `ui-trellis-vite` folder you built earlier `ln -s /full/path/to/ui-trellis-vite ui-trellis-vite`


## Features

* ⚡️ [Vite](https://github.com/vitejs/vite), [Vue 2](https://github.com/vuejs/vue) - lightning fast
* 🔥 [Composition-API](https://github.com/vuejs/composition-api) with [\<script setup\>](https://github.com/antfu/unplugin-vue2-script-setup) syntax support
* 📦 [Components auto importing](https://github.com/antfu/unplugin-vue-components)
* 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly
* 🚦 [Vue-Router](https://github.com/vuejs/vue-router)
* 🎨 [Windi CSS](https://github.com/windicss/vite-plugin-windicss) - next generation utility-first CSS framework
* 😃 [Use icons from any icon sets, with no compromise](https://github.com/antfu/unplugin-icons)
* 🧰 [VueUse](https://github.com/vueuse/vueuse) - Collection of essential Vue Composition Utilities
* 🦾 Typescript, of corse

## Vite plugins

* [`vite-plugin-vue2`](https://github.com/underfin/vite-plugin-vue2) -
  Vue 2 support for Vite
* [`unplugin-vue2-script-setup`](https://github.com/antfu/unplugin-vue2-script-setup) -
  syntax support for `<script setup>`
* [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) -
  importing Vue components on-demand
* [`unplugin-unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) -
  importing APIs like CompositionAPI on-demand
* [`vite-plugin-windicss`](https://github.com/windicss/vite-plugin-windicss) - 
  easy WindiCSS integration
* [`unplugin-icons`](https://github.com/antfu/unplugin-icons) -
  importing icons as Vue components on-demand


## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/lstoeferle/vite-vue2-windicss-starter/generate)

### Clone 

If you prefer to do it manually with a cleaner git history

```bash
npx degit lstoeferle/vite-vue2-windicss-starter my-vite-vue2-app
cd my-vite-vue2-app
yarn install
```

## Usage

### Development

Just run and visit [http://localhost:3333](http://localhost:3333)

```bash
yarn dev
```

### Build

To build the App, run

```bash
yarn build
```

And you will see the generated files in `dist`, which are ready to be served.

## Why

Vue 3 is awesome, but we should not forget about supporting Vue 2 ♥️

### Credits

This project is inspired by [Vitesse](https://github.com/antfu/vitesse), an opinionated Vite starter template for Vue 3.

Big thanks to [Anthony Fu](https://github.com/antfu) for the inspiration and all the amazing tools you create.
