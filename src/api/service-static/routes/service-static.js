'use strict';

/**
 * service-static router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::service-static.service-static');
