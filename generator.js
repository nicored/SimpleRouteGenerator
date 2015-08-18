import Router from 'Router.js';

let router = new Router();
console.log(router.generate('GET', 'group_activities', {'group_id': 123}));
