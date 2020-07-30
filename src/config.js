/*
 * @file: koa2 api server
 * @copyright: NanJing Anshare Tech .Com
 * @author: BoBo
 * @Date: 2019年04月10日 19:47:46
 */
import path from 'path'

// 系统配置
export const System = {
  API_server_type: 'http://', // API服务器协议类型,包含"http://"或"https://"
  API_server_host: 'localhost', // API服务器暴露的域名地址,请勿添加"http://"
  API_server_port: '3000', // API服务器监听的端口号
  HTTP_server_type: 'http://', // HTTP服务器协议类型,包含"http://"或"https://"
  HTTP_server_host: 'www.XXX.com', // HTTP服务器地址,请勿添加"http://" （即前端调用使用的服务器地址，如果是APP请设置为 * ）
  HTTP_server_port: '65534', // HTTP服务器端口号
  System_country: 'zh-cn', // 所在国家的国家代码
  System_plugin_path: path.join(__dirname, './plugins'), // 插件路径
  Session_Key: 'Anshare', // 生产环境务必随机设置一个值
  db_type: 'mysql' // 数据库类型
}

export const DB = {
  host: '116.62.78.229', // 服务器地址
  port: 3306, // 数据库端口号
  username: 'root', // 数据库用户名
  password: 'Anshare.cc', // 数据库密码
  database: 'test', // 数据库名称
  prefix: 'api_' // 默认"api_"
}
