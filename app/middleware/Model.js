class Model {
  constructor (model) {
    this.__store = null
  }

  /**
   * 设置 TableStore 实例
   * @param {TableStore} store TableStore实例
   */
  setStore (store) {
    this.__store = store
  }

  /**
   * 定义模型
   * @param  {[type]} modelName    [description]
   * @param  {[type]} props        [description]
   * @param  {[type]} tableOptions [description]
   * @param  {[type]} store        [description]
   * @return {[type]}              [description]
   */
  static define (modelName, props, tableOptions, store) {
    const ModelClass = class ModelClass extends Model {

    };

    // Model 配置
    ModelClass.name = modelName
    ModelClass.props = props
    ModelClass.store = store
    ModelClass.tableOptions = tableOptions

    // 在 tableStore 实例中添加模型
    tableStore.models[modelName] = ModelClass

    // 定义模型属性
    

    // return
    return ModelClass
  }
}

module.exports = Model