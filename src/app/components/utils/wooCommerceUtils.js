import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

export const wooCommerce = new WooCommerceRestApi({
  url: process.env.DOMAIN, // Your store URL
  consumerKey: process.env.WOO_COMMERCE_CONSUMER_KEY, // Your consumer key
  consumerSecret: process.env.WOO_COMMERCE_CONSUMER_SECRET, // Your consumer secret
  version: 'wc/v3', // WooCommerce WP REST API version
});

export default wooCommerce;
