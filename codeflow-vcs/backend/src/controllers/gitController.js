const path = require('path');
const simpleGit = require('simple-git');


const commitChanges = async (req, res) => {
  const { projectId, message } = req.body;
  const projectPath = path.resolve(__dirname, `../../repositories/${projectId}`);

  try {
    const git = simpleGit(projectPath);
    await git.add('./*'); 
    await git.commit(message);
    res.status(200).json({ message: `Changes committed with message: '${message}'` });
  } catch (error) {
    res.status(500).json({ error: `Error committing changes: ${error.message}` });
  }
};


const pushChanges = async (req, res) => {
  const { projectId, remote, branch } = req.body;
  const projectPath = path.resolve(__dirname, `../../repositories/${projectId}`);

  try {
    const git = simpleGit(projectPath);
    await git.push(remote, branch);  
    res.status(200).json({ message: `Changes pushed to '${remote}' on branch '${branch}' for project '${projectId}'.` });
  } catch (error) {
    res.status(500).json({ error: `Error pushing changes: ${error.message}` });
  }
};


const pullChanges = async (req, res) => {
  const { projectId, remote, branch } = req.body;
  const projectPath = path.resolve(__dirname, `../../repositories/${projectId}`);

  try {
    const git = simpleGit(projectPath);
    await git.pull(remote, branch);  
    res.status(200).json({ message: `Changes pulled from '${remote}' on branch '${branch}' for project '${projectId}'.` });
  } catch (error) {
    res.status(500).json({ error: `Error pulling changes: ${error.message}` });
  }
};


const createBranch = async (req, res) => {
  const { projectId, branchName } = req.body;
  const projectPath = path.resolve(__dirname, `../../repositories/${projectId}`);

  try {
    const git = simpleGit(projectPath);
    await git.checkoutLocalBranch(branchName);  
    res.status(200).json({ message: `Branch '${branchName}' created for project '${projectId}'.` });
  } catch (error) {
    res.status(500).json({ error: `Error creating branch: ${error.message}` });
  }
};


module.exports = {
  commitChanges,
  pushChanges,
  pullChanges,
  createBranch,
};

