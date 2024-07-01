module.exports = {
    apps: [
      {
        name: 'API_WHATSAAP',
        script: './src/app.ts',
        whatch: true,
        max_memory_restart: '1000M',
        exec_mode: "cluster",
        instance:1,
        env: {
          NODE_ENV: 'production',
        },
        env_production: {
          NODE_ENV: 'production',
        },
      },
    ],
  };