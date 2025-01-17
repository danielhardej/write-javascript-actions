const getJoke = require("./leaveIssueComment");
const core = require("@actions/core");

async function run() {
  // const joke = await getJoke();
  // console.log(joke);
  core.setOutput("joke-output", leaveIssueComment);
}

run();