const Contorller = require('egg').Controller

class HomeContorller extends Contorller {
  async index () {
    this.ctx.body = 'Hi, fansi'
  }
}

module.exports = HomeContorller