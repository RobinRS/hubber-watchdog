const os = require('os')

module.exports = {

  data: {},

  onInit: function () {
    this.getLogger().info('onInit: ' + this.self())
    this.registerActivity(this.self(), this.onActivity, 5000)
    this.getPluginManager().setPluginActivity(this.self(), true)
    this.getPluginManager().registerWebRouter(this.self(), require('./router/default'))
  },

  onUnload: function () {
    this.getLogger().info('onUnload: ' + this.self())
  },

  onActivity: function () {
    this.data = {
      cpu: os.cpus(),
      totalmem: os.totalmem(),
      freemem: os.freemem()
    }
    this.getLogger().verbose('onActivity: ' + this.self())
  },

  onDataRequest: function (req, res) {
    return res.json(this.data)
  }

}
