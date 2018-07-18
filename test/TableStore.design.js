import TableStore from './TableStore';

var db = new TableStore(app.config.tableStore);

var table = db.defineTable('task', {
  primaryKeys: [{
    name: 'userId',
    type: TableStore.dataTypes.String
  }, {
    name: 'taskId',
    type: TableStore.dataTypes.String
  }],
  timeToLive: -1,
  maxVersions: 1,
  reservedRead: 0,
  reservedWrite: 0,
  streamEnable: false,
  streamExpirationTime: 0
})

db.createTable(table)

db.tables.task.insert()

var Task = db.defineModel('Task', {
  userId: {
    field: 'user_id',
    type: String,
    default: '',
    primaryKey: true,
    partitionKey: true
  },

  taskId: {
    field: 'task_id',
    type: String,
    default: '',
    primaryKey: true
  },

  title: {
    field: 'title',
    type: String,
    default: ''
  }
})

// sync
db.sync().then(({models, tables}) => {
  models.Task.create({ id: 'xx' }).then(())
  tables.task.insert({ id: 'xx' }).then(())
})

// build
let task = Task.build({
  title: 'xxx'
})

task.save().then(task => {
  console.info(task)
})

// insert
db.create('task', {
  user_id: 'xxx',
  task_id: 'xxx',
  title: 'xxx'
}).then(task => {
  console.log(task);
});

Task.create({
  userId: 'xxx',
  taskId: 'xxx',
  title: 'xxx'
}).then(task => {
  console.log(task);
});

// delete
db.destroy('task', {
  where: { userId: 'xxx', taskId: 'xxx' }
}).then(isDeleted => {
  console.log(isDeleted);
});

Task.destroy({
  where: { userId: 'xxx', taskId: 'xxx' }
}).then(isDeleted => {
  console.log(isDeleted);
});

task.destroy().then(isDeleted => {
  console.log(isDeleted);
});

// update
db.update('task', {
  title: 'xxx'
}, {
  where: {
    userId: 'xxx',
    taskId: 'xxx'
  }
}).then(task => {
  console.log(result.count);
});

Task.update({
  title: 'xxx'
}, {
  where: {
    userId: 'xxx',
    taskId: 'xxx'
  }
}).then(task => {
  console.log(result.count);
});

task.update({
  title: 'xxx'
}).then(result => {
  console.log(result);
});

// select
db.findOne('task', {
  attributes: ['userId', 'taskId', 'title'],
  where: { user_id: 'xxx', task_id: 'xxx' }
}).then(task => {
  console.log(task);
});

Task.findOne({
  attributes: ['userId', 'taskId', 'title'],
  where: { userId: 'xxx', taskId: 'xxx' }
}).then(task => {
  console.log(task);
});

Task.findAll({
  attributes: ['userId', 'taskId', 'title'],
  where: { userId: 'xxx' }
}).then(rows => {
  console.log(rows);
});

Task.findAndCountAll({
  attributes: ['userId', 'taskId', 'title'],
  where: { userId: 'xxx', offset: 10, limit: 2 },
  defaults: {}
}).then(result => {
  console.log(result.count, result.rows);
});

// count
db.count('task', {
  where: { userId: 'xxx' }
}).then(count => {
  console.log(count);
});

Task.count({
  where: { userId: 'xxx' }
}).then(count => {
  console.log(count);
});
