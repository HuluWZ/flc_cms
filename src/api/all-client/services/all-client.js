'use strict';

/**
 * all-client service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::all-client.all-client');
