/* eslint-disable */
module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
    [
      '@fullhuman/postcss-purgecss',
      {
        content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: [
          'html',
          'body',
          'fa',
          'fa-envelope',
          'is-active',
          'is-outlined',
          'enhanced',
          'lazy-background',
          'aos-init',
          'aos-animate',
          'is-info',
          'is-primary',
          'cookie-banner',
          'cookie-banner__content',
          'cookie-banner__text',
          'cookie-banner__buttons',
          'cookie-banner__accept-button',
          'cookie-banner__info-button',
          'hero',
          'hero-body',
        ],
      },
    ],
  ],
};