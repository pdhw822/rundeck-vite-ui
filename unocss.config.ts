import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['btn-primary','bg-blue-500 inline-block px-4 py-2 text-white rounded'],
    ['btn-secondary','bg-white border border-black inline-block px-4 py-2 text-black rounded'],
    ['btn-secondary-sm','bg-white border border-black inline-block px-3 py-1 text-black rounded text-sm'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: {
          name: 'DM Sans',
          weights: ['400', '500', '700','900'],
        },
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left i-heroicons-home-20-solid i-heroicons-briefcase-20-solid i-fa-solid-sitemap i-heroicons-command-line-solid i-fa-solid-history i-heroicons-wrench-screwdriver-solid i-heroicons-signal i-heroicons-server-stack-20-solid'.split(' '),
})
