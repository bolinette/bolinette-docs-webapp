/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { NodeSSH } = require("node-ssh");

const ssh = new NodeSSH();

const publish = async () => {
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
      concurrency: 1,
      tick: (localPath, remotePath, error) => {
        if (error) {
          console.error(`Error copying ${localPath}: ${error}`);
        } else {
          console.log(`Successfully copied ${localPath}`);
        }
      }
    }
  );
  console.log("Successfully copied files");
  ssh.dispose();
};

publish();
