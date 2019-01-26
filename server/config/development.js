module.exports = {
  user: {
    role: 'superAdmin',
    username: 'q',
    password: 'q',
    nickname: 'Qiuleilei',
    email: 'qq22337383@gmail.com',
    motto: 'Never too old to learn',
  },
  jwt: {
    secret: 'essay',
    expiresIn: 1296000,
  },
  mongodb: {
    host: '127.0.0.1',
    database: 'essay-dev',
    port: 27017,
    username: '',
    password: '',
  },
  githubConfig: {
    githubClient: '9588f02db3f89d176f36',
    githubSecret: '3fd3e1c3afe4f817c1cea7b3c292d60f9503709b',
    scope: 'user',
  },
  emailConfig: {
    user: '',
    pass: '',
  },
  app: {
    domain: 'http://127.0.0.1:3000',
    baseApi: '/v1',
  },
}
