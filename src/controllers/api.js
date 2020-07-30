import person from '../models'

export const Get = (ctx, next) => {
  ctx.body = {
    result: 'get',
    name: ctx.params.name,
    para: ctx.query
  }

  next()
}

export const Post = async (ctx, next) => {
  // name: ctx.params.name,
  // para: ctx.request.body,
  const list = await person.findAndCountAll({
    offset: 10,
    limit: 2
  })
  ctx.body = {
    code: 200,
    data: list,
    message: '查询成功'
  }

  next()
}
