const TableStore = require('../app/middleware/TableStore')

module.exports = app => {
  app.addSingleton('tablestore', createOneClient);
};

function createOneClient(config, app) {
  app.coreLogger.info('[egg-tablestore-orm] connecting %s@%s:%s/%s', config.user, config.host, config.port, config.database);

  const client = new TableStore(config);

  app.beforeStart(function () {
    return client.sync();
  });

  return client;
}
