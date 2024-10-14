import { AppBar, Box, Toolbar, Typography, Button, Container, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import BugReportIcon from '@mui/icons-material/BugReport';
import GroupIcon from '@mui/icons-material/Group';
import ChatIcon from '@mui/icons-material/Chat';
import { Link } from 'react-router-dom'; 

const HomePage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* AppBar with Toolbar */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CodeFlow
          </Typography>
          <Button component={Link} to="/login" color="inherit">
            Login
          </Button>
          <Button component={Link} to="/signup" variant="outlined" color="inherit" sx={{ ml: 2 }}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', py: 5 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            CodeFlow.io {'<>'}
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
            The all-in-one platform for software development teams to manage projects, collaborate, and track bugs efficiently.
          </Typography>
          <Button component={Link} to="/login" variant="contained" color="primary" size="large" sx={{ mt: 3 }}>
            Get Started
          </Button>
        </Box>

        <Box sx={{ py: 5 }}>
          <Typography variant="h4" component="h2" gutterBottom align="center">
            Key Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center', p: 3 }}>
                <GitHubIcon color="primary" sx={{ fontSize: 50 }} />
                <Typography variant="h5" component="h3" gutterBottom>
                  Version Control System
                </Typography>
                <Typography>
                  Push, pull, commit, fork, and manage repositories with ease. Stay in sync with your team’s progress.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center', p: 3 }}>
                <BugReportIcon color="secondary" sx={{ fontSize: 50 }} />
                <Typography variant="h5" component="h3" gutterBottom>
                  Bug Tracking
                </Typography>
                <Typography>
                  Log, assign, and resolve bugs on the integrated bug board. Ensure that your team handles issues efficiently.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center', p: 3 }}>
                <GroupIcon color="success" sx={{ fontSize: 50 }} />
                <Typography variant="h5" component="h3" gutterBottom>
                  Team Collaboration
                </Typography>
                <Typography>
                  Add team members to projects and collaborate seamlessly. Manage project settings and user permissions.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center', p: 3 }}>
                <ChatIcon color="info" sx={{ fontSize: 50 }} />
                <Typography variant="h5" component="h3" gutterBottom>
                  Real-time Chat
                </Typography>
                <Typography>
                  Communicate with your team instantly, attach files, and discuss project tasks effectively.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
