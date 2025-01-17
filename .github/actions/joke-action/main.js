const { repoToken, owner, repo, issueNumber } = getInputs();
const request = require("request-promise");
const getJoke = require("./joke");
const { Octokit } = require("@octokit/rest");

async function run() {
  const octokit = new Octokit({
    auth: repoToken,
  });

  const joke = await getJoke();

  await octokit.request('POST /repos/{owner}/{repo}/issues/{issue_number}/comments', {
    owner: owner,
    repo: repo,
    issue_number: issueNumber,
    body: joke,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });
}

run().catch(error => {
  console.error(error);
  process.exit(1);
});