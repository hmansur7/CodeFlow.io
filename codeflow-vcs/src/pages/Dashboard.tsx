import { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../App'; 
import { Box, Button, Typography, Container } from '@mui/material';

const DashboardPage = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser); 
      } else {
        navigate('/login'); 
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login'); 
  };

  return (
    <Container>
      {user ? (
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Welcome to the Dashboard, {user.email}!
          </Typography>
          <Typography variant="body1" gutterBottom>
            You are logged in and can now access your projects, manage tasks, and collaborate with your team.
          </Typography>
          <Button variant="contained" color="primary" onClick={handleLogout} sx={{ mt: 3 }}>
            Logout
          </Button>
        </Box>
      ) : (
        <Typography variant="h5" sx={{ mt: 8, textAlign: 'center' }}>
          Loading...
        </Typography>
      )}
    </Container>
  );
};

export default DashboardPage;
