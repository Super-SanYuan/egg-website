const Contorller = require('egg').Controller

class HomeContorller extends Contorller {
  async index () {
    await this.ctx.render('index.html')
  }
}

module.exports = HomeContorller