window._ = require("lodash");

try {
    window.$ = window.jQuery = require('../../node_modules/jquery/dist/jquery.slim.min')
    require('../../node_modules/bootstrap/dist/js/bootstrap.bundle.min')
    window.Vue = require('../../node_modules/vue/dist/vue.min')
    require('../../public/backEnd/assets/dist/js/adminlte.min')
    require('../../public/backEnd/assets/dist/js/demo')
} catch (error) {}

window.axios = require("axios");

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });
