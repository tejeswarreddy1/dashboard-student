import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import { Pie, Line } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

const Dashboard = () => {
  const attendanceData = {
    labels: ['Present', 'Absent'],
    datasets: [
      {
        data: [85, 15],
        backgroundColor: ['#4CAF50', '#f44336'],
      },
    ],
  };

  const performanceData = {
    labels: ['Assignment 1', 'Assignment 2', 'Mid Term', 'Assignment 3', 'Final'],
    datasets: [
      {
        label: 'Performance',
        data: [85, 88, 78, 90, 82],
        borderColor: '#2196f3',
        tension: 0.1,
      },
    ],
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 140,
          }}
        >
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Current CGPA
          </Typography>
          <Typography component="p" variant="h3">
            3.75
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 140,
          }}
        >
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Ongoing Courses
          </Typography>
          <Typography component="p" variant="h3">
            5
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 140,
          }}
        >
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Pending Assignments
          </Typography>
          <Typography component="p" variant="h3">
            3
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 140,
          }}
        >
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Total Credits
          </Typography>
          <Typography component="p" variant="h3">
            72
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Attendance Overview
          </Typography>
          <Box sx={{ height: 300 }}>
            <Pie data={attendanceData} />
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Performance Trend
          </Typography>
          <Box sx={{ height: 300 }}>
            <Line data={performanceData} />
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
