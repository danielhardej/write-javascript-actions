import { getInput } from '@actions/core';
import getJoke from "./joke";
import { Octokit } from "@octokit/rest";

const repoToken = getInput("repoToken");
const owner = getInput("owner");
const repo = getInput("repo");
const issueNumber = getInput("issueNumber");

const joke = await getJoke();

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