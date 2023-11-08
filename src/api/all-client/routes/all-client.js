'use strict';

/**
 * all-client router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::all-client.all-client');
