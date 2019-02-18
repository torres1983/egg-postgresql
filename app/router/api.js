/*            _
       __  __(_)___  ____ _____ ____
      / / / / / __ \/ __ `/ __ `/ _ \
     / /_/ / / /_/ / /_/ / /_/ /  __/
     \__, /_/ .___/\__,_/\__, /\___/
    /____/ /_/          /____/

*/
'use strict';

module.exports = app => {
  const apiV2Router = app.router.namespace('/api/v2');
  const { controller } = app;
  const { data } = controller.api;

  apiV2Router.get('/data/transaction_overview', data.transaction_overview);// 交易

};
