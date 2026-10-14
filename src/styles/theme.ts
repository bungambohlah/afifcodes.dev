import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineRecipe,
} from '@chakra-ui/react';

const headingRecipe = defineRecipe({
  variants: {
    variant: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: '20px',
        textUnderlineOffset: '6px',
        textDecorationColor: '#525252',
        textDecorationThickness: '4px',
        marginTop: '3',
        marginBottom: '4',
      },
    },
  },
});

const linkRecipe = defineRecipe({
  base: {
    color: 'app.link',
    textUnderlineOffset: '3px',
  },
});

const config = defineConfig({
  globalCss: {
    body: {
      bg: 'app.background',
    },
  },

  theme: {
    tokens: {
      colors: {
        grassTeal: { value: '#88ccca' },

        github: {
          50: { value: '#f5f5f5' },
          100: { value: '#ebebeb' },
          200: { value: '#cccccc' },
          300: { value: '#adadad' },
          400: { value: '#707070' },
          500: { value: '#333333' },
          600: { value: '#2e2e2e' },
          700: { value: '#262626' },
          800: { value: '#1f1f1f' },
          900: { value: '#191919' },
        },

        polywork: {
          50: { value: '#f5f5f5' },
          100: { value: '#ece9fb' },
          200: { value: '#c5bdf4' },
          300: { value: '#9e92ed' },
          400: { value: '#7766e6' },
          500: { value: '#503adf' },
          600: { value: '#3720c5' },
          700: { value: '#1e126d' },
          800: { value: '#120b42' },
          900: { value: '#060416' },
        },
      },
    },

    semanticTokens: {
      colors: {
        app: {
          background: {
            value: {
              base: '#f9fafb',
              _dark: '#202023',
            },
          },
          link: {
            value: {
              base: '#3d7aed',
              _dark: '#ff63c3',
            },
          },
        },
      },
    },

    recipes: {
      heading: headingRecipe,
      link: linkRecipe,
    },
  },
});

const system = createSystem(defaultConfig, config);

export default system;
