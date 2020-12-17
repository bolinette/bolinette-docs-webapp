/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { NodeSSH } = require("node-ssh");

const ssh = new NodeSSH();

const publish = async () => {
  try {
    await ssh.connect({
      host: "pierrechat.com",
      username: process.env.SSH_USERNAME,
      password: process.env.SSH_PASSWORD
    });
    await ssh.putDirectory(
      path.join(__dirname, "..", "dist"),
      "www/bolinette.org/docs",
      {
        recursive: true,
        concurrency: 3
      }
    );
    console.log("Successfully copied files");
  } catch (err) {
    console.error("Unable to copy files", err);
  }
};

publish();
