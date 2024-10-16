const express = require('express');
const projectRoutes = require('./routes/projectRoutes');  
const gitRoutes = require('./routes/gitRoutes');  

const app = express();
app.use(express.json());


app.use('/api/projects', projectRoutes);


app.use('/api/git', gitRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

