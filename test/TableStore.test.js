const Store = require('tablestore')
const TableStore = require('./TableStore')

function now () {
  return new Date().toLocaleString()
}

var db = new TableStore({
  accessKeyId: 'I7ayHEPGyTF7ioXy',
  accessKeySecret: 'CcRNx9g6Rt6hSpZV8QpOwpQZZHfQUp',
  endpoint: 'https://AntTodo.cn-shenzhen.ots.aliyuncs.com',
  instancename: 'AntTodo',
  maxRetries: 20
})

db.defineTable('test', {
  primaryKeys: [{
    name: 'gid',
    type: TableStore.dataTypes.String
  }, {
    name: 'userId',
    type: TableStore.dataTypes.String
  }]
})

var method = process.argv.pop()

console.info('method: ', method)

console.time(method);

var rows = [{
  gid: 'gid_kdfasdkfasdfasdfasdf',
  userId: 'userId_asdfsdfdfkefaksqq',
  completed: false,
  date: now(),
  desc: '顺序',
  title: '同时更新的哦！'
}, {
  gid: 'gid_kdfasdkfasdfasdfasdf',
  userId: 'userId_asdfsdfdfkefaksdk',
  completed: false,
  date: now(),
  desc: '顺序',
  title: '同时更新的哦！'
}]

switch (method) {
  case 'put':
    db.tables.test.put(rows[0]).then((data) => {
      console.info('data: ', data)
      console.timeEnd(method);
    }).catch((err) => {
      console.info('err: ', err)
    })
  break;
  case 'batchPut':
    db.tables.test.batchPut(rows).then((data) => {
      console.info('data: ', data)
      console.timeEnd(method);
    }).catch((err) => {
      console.info('err: ', err)
    })
  break;

  case 'insert':
    db.tables.test.insert(rows[0]).then((data) => {
      console.info('data: ', data)
      console.timeEnd(method);
    }).catch((err) => {
      console.info('err: ', err)
    })
  break;

  case 'batchInsert':
    db.tables.test.batchInsert(rows).then((data) => {
      console.info('data: ', data)
      console.timeEnd(method);
    }).catch((err) => {
      console.info('err: ', err)
    })
  break;

  case 'update':
    db.tables.test.update(rows[0]).then((data) => {
      console.info('data: ', data)
      console.timeEnd(method);
    }).catch((err) => {
      console.info('err: ', err)
    })
  break;

  case 'batchUpdate':
    db.tables.test.batchUpdate(rows).then((data) => {
      console.info('data2: ', data)
      console.timeEnd(method);
    }).catch((err) => {
      console.info('err: ', err)
    })
  break;

  case 'delete':
    db.tables.test.delete(rows[0]).then((data) => {
      console.info('data: ', data)
      console.timeEnd(method);
    }).catch((err) => {
      console.info('err: ', err)
    })
  break;

  case 'batchDelete':
    db.tables.test.batchDelete(rows).then((data) => {
      console.info('data: ', data)
      console.timeEnd(method);
    }).catch((err) => {
      console.info('err: ', err)
    })
  break;

  case 'get':
    db.tables.test.get(rows[0]).then((data) => {
      console.info('data: ', data)
      console.timeEnd(method);
    }).catch((err) => {
      console.info('err: ', err)
    })
  break;

  case 'batchGet':
    db.tables.test.batchGet(rows).then((data) => {
      console.info('data: ', data)
      console.timeEnd(method);
    }).catch((err) => {
      console.info('err: ', err)
    })
  break;

  case 'getRange':
    db.tables.test.getRange({gid: 'gid_kdfasdkfasdfasdfasdf'}).then((data) => {
      console.info('data: ', data)
      console.timeEnd(method);
    }).catch((err) => {
      console.info('err: ', err)
    })
  break;

  case 'select':
    var where = {
      gid: 'gid_kdfasdkfasdfasdfasdf'
    }
    db.tables.test.select({
      where: where,
      limit: 3,
      page: -1
    }).then((data) => {
      console.info('data: ', data)
      console.timeEnd(method);
    }).catch((err) => {
      console.info('err: ', err)
    })
  break;
}
