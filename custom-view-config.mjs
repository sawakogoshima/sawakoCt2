/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomView}
 */
const config = {
  name: 'My New Custom View Project',
  cloudIdentifier: 'gcp-eu',
  env: {
    development: {
      initialProjectKey: 'sawako-pim',
    },
    production: {
      customViewId: 'TODO',
      url: 'https://my-custom-view.com',
    },
  },
  oAuthScopes: {
    view: ['view_products'],
    manage: ['manage_products'],
  },
  type: 'CustomPanel',
  typeSettings: {
    size: 'LARGE',
  },
  locators: ['products.product_details.general'],
};

export default config;
