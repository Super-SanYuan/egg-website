const Controller = require('egg').Controller

class AboutController extends Controller {
  async index () {
    await this.ctx.render('about.html')
  }
}

module.exports = AboutController