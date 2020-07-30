/*
 * @file: token filter
 * @copyright: NanJing Anshare Tech .Com
 * @author: BoBo
 * @Date: 2019年05月15 09:30:32
 */
import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'

const publicKey = fs.readFileSync(path.join(__dirname, '../../publicKey.pub'))

// 用户登录的时候返回token
// const token = jwt.sign({
//   userInfo: {} // 你要保存到token的数据
// }, publicKey, { expiresIn: '7d' })

/**
 * 检查授权是否合法
 */
const CheckAuth = async (ctx, next) => {
  const token = ctx.request.header.authorization
  try {
    const decoded = jwt.verify(token.substr(7), publicKey)
    if (decoded.userInfo) {
      return {
        status: 200,
        result: decoded.userInfo
      }
    } else {
      return {
        status: 403,
        result: {
          errInfo: '没有授权'
        }
      }
    }
  } catch (err) {
    return {
      status: 503,
      result: {
        errInfo: '解密错误'
      }
    }
  }
}

export const Post = (ctx, next) => {
  // 此处先走CheckAuth判断token是否合法,
  // 合法则走then => next
  switch (ctx.params.action) {
    case 'check':
      return CheckAuth(ctx).then(result => { ctx.body = result; next() })
    default:
      return CheckAuth(ctx).then(result => { ctx.body = result; next() })
  }
}
