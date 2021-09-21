module.exports = {
    server: {
      port: 3001,
    },

    db: {
        client: 'mysql',
        connection: {
          host: 'test.ceryx5ob9x7b.us-east-2.rds.amazonaws.com',
          port: 3306,
          user: 'admin',
          password: 'yoddoy1234',
          database: 'helpdesk',
          supportBigNumber: true,
          timezone: '+7:00',
          charset: 'utf8_unicode_520_ci',
        },
      },
    
  }
  