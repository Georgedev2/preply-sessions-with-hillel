
const WooCommerce = new WooCommerceRestApi({
    url: process.env.DOMAIN, // Your store URL
    consumerKey: process.env.WOO_COMMERCE_CONSUMER_KEY, // Your consumer key
    consumerSecret: process.env.WOO_COMMERCE_CONSUMER_SECRET, // Your consumer secret
    version: 'wc/v3', // WooCommerce WP REST API version
  });