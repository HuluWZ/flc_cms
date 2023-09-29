'use strict';

/**
 * service-static service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-static.service-static');
