/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { NodeSSH } = require("node-ssh");
require("dotenv").config();

const ssh = new NodeSSH();

const publish = async () => {
  try {
    await ssh.connect({
      host: process.env.SSH_HOST,
      username: process.env.SSH_USER,
      privateKey: process.env.SSH_PRIVATE_KEY
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
