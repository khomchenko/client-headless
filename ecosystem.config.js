module.exports = {
  apps: [
    {
      name: "NuxtAppName",
      exec_mode: "cluster",
      instances: "max",
      script: "npm",
      args: "start",
    },
  ],
};
