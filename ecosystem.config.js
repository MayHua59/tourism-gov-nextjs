require('dotenv').config();

module.exports = {
  apps: [
    {
      name: process.env.APP_NAME || 'next-app',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      instances: 'max',
      exec_mode: 'cluster', // enables clustering
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: process.env.APP_PORT || 3055,
      },
    }
  ]
}