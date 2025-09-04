module.exports = {
  apps: [
    {
      name: "fullscope", script: "npm", args: "start", cwd: 
      "/root/fullscopewebsite3.0", // adjust path if 
      project is elsewhere env: {
        NODE_ENV: "production", PORT: 3000
      }
    }
  ]
};
