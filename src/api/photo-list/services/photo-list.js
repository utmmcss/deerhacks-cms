'use strict';

/**
 * photo-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::photo-list.photo-list');
