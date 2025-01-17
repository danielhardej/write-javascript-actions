const { repoToken, owner, repo, issueNumber } = getInputs();

const octokit = new Octokit({
    auth: repoToken,
  })


const getJoke = require("./joke");
const joke = await getJoke();

await octokit.request('POST /repos/{owner}/{repo}/issues/{issue_number}/comments', {
    owner: owner,
    repo: repo,
    issue_number: issueNumber,
    body: joke,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })