'use strict';

const Handlebars = tars.packages.handlebars;

// TODO: I add handlebars-helpers support
const hb_hepl = require('handlebars-helpers')();

/**
 * You can add your own helpers to handlebarsHelpers Object
 * All helpers from that object will be available in templates
 * @type {Object}
 */
const handlebarsHelpers = {

    /**
     * This is an example of handlebars-helper
     * This helper gets string and returns it
     * @param  {String} str Source string
     * @return {String}     Result string
     */
    exampleHelper: function (str) {
        return str;
    }
};

module.exports = handlebarsHelpers;

// TODO: I add handlebars-helpers support
module.exports = hb_hepl;
