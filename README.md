# CodeFlow.io

**CodeFlow.io** is an all-in-one software development workflow management platform designed to streamline the collaboration and version control process for development teams. Whether you're working solo or managing large teams, CodeFlow.io offers a project-centric environment that makes handling code, bugs, and team communication effortless.

## Key Features:

### Project Management
- **Create Repositories**: Start new projects with a dedicated repository for organizing software development efforts.
- **Team Collaboration**: Add team members to your project for seamless collaboration.
- **Custom Settings**: Manage project-specific settings to tailor collaboration rules and workflows.

### Version Control System
- **Push and Pull**: Push code changes to a remote repository and pull updates to keep in sync with your team.
- **Branching & Merging**: Branch, commit, fork, and clone repositories to work in parallel and avoid merge conflicts.

### Bug Tracking
- **Bugs Board**: Create, assign, and prioritize bug reports to streamline issue management.
- **Efficient Resolution**: Track progress and update bug statuses as issues are resolved.

### Team Collaboration
- **Real-Time Chat**: Communicate with team members in real-time and attach files to chat messages for better collaboration.
- **Future Voice Calls**: Voice communication (coming soon) to enhance team coordination.

### Future Features
- **In-Browser IDE**: Make quick code edits without leaving the platform (future release).
- **GitHub Copilot Integration**: AI-assisted development with GitHub Copilot (coming soon).
- **Publish to GitHub**: Directly publish projects to GitHub repositories via GitHub API (future release).

---

## Tech Stack

CodeFlow.io is built with modern technologies to ensure performance, scalability, and ease of development. Here is the breakdown of the technologies used:

### Frontend
- **React** (with TypeScript) - For building a responsive and scalable user interface.
- **Vite** - Fast development environment for React applications.
- **Material UI** - React component library for implementing a sleek and consistent design system.
  
### Backend
- **Node.js** (with Express) - Backend framework for handling API requests and managing business logic.
- **simple-git** - Git commands for managing version control in projects.
- **PostgreSQL** - Relational database for storing project, user, and repository information.
- **Firebase Authentication** - For user authentication and authorization.
  
### Version Control & Collaboration
- **simple-git** - For handling Git functionality (push, pull, commit, branch) directly from the web app.
- **AWS EC2** - Hosting the backend services and managing remote repositories.
  
### Hosting & Deployment
- **AWS EC2** - Backend is hosted on an EC2 instance, handling requests and repository management.
- **Vercel** (or **Netlify**) - Frontend hosting for fast, globally distributed static content delivery.
- **PostgreSQL** - Database hosted via AWS RDS or another PostgreSQL provider.

---

## Why CodeFlow.io?

CodeFlow.io simplifies and accelerates the software development process, making it the perfect tool for organizations or individuals looking for intuitive project management and collaboration. With upcoming features like in-browser IDE and AI-assisted development, CodeFlow.io is set to become a powerful hub for software teams.
