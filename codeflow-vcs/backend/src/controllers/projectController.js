const path = require('path');
const fs = require('fs');


const listProjects = (req, res) => {
  const repoPath = path.resolve(__dirname, '../../repositories');

  try {
    const projects = fs.readdirSync(repoPath).filter(file => fs.statSync(path.join(repoPath, file)).isDirectory());
    res.status(200).json({ projects });
  } catch (error) {
    res.status(500).json({ error: `Error listing projects: ${error.message}` });
  }
};


const createProject = async (req, res) => {
  const { projectId, projectName } = req.body;
  const projectPath = path.resolve(__dirname, `../../repositories/${projectId}`);

  try {
    if (!fs.existsSync(projectPath)) {
      fs.mkdirSync(projectPath, { recursive: true });
      const git = simpleGit(projectPath);
      await git.init();
      res.status(200).json({ message: `Project '${projectName}' created and Git repository initialized.` });
    } else {
      res.status(400).json({ message: `Project '${projectId}' already exists.` });
    }
  } catch (error) {
    res.status(500).json({ error: `Error creating project: ${error.message}` });
  }
};


const deleteProject = (req, res) => {
  const { projectId } = req.body;
  const projectPath = path.resolve(__dirname, `../../repositories/${projectId}`);

  try {
    if (fs.existsSync(projectPath)) {
      fs.rmdirSync(projectPath, { recursive: true });
      res.status(200).json({ message: `Project '${projectId}' deleted.` });
    } else {
      res.status(404).json({ message: `Project '${projectId}' not found.` });
    }
  } catch (error) {
    res.status(500).json({ error: `Error deleting project: ${error.message}` });
  }
};

module.exports = {
  listProjects,
  createProject,
  deleteProject,
};

