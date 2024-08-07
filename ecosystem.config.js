module.exports = {
  apps : [{
    name: "API_WHATSAAP",
    script: "./src/app.ts",
    watch:  true,
    max_memory_restart: '1000M',
    exec_mode: "cluster",
    instances: 1,
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }
]
}