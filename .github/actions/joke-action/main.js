const core = require('@actions/core');
const getJoke = require("./joke");
const { Octokit } = require("@octokit/rest");

const repoToken = core.getInput("repoToken");
const owner = core.getInput("owner");
const repo = core.getInput("repo");
const issueNumber = core.getInput("issueNumber");

const joke = getJoke();

const octokit = new Octokit({
  auth: repoToken
})

await octokit.request('POST /repos/{owner}/{repo}/issues/{issue_number}/comments', {
  owner: owner,
  repo: repo,
  issue_number: issueNumber,
  body: joke,
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})