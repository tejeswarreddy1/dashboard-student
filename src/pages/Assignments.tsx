import React, { useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TextField,
  Box,
  Tabs,
  Tab,
  Grid,
} from '@mui/material';

interface Assignment {
  id: string;
  courseId: string;
  title: string;
  dueDate: string;
  status: 'completed' | 'ongoing';
  grade?: number;
}

const sampleAssignments: Assignment[] = [
  {
    id: 'ASG001',
    courseId: 'CS101',
    title: 'Programming Basics',
    dueDate: '2025-08-15',
    status: 'ongoing'
  },
  {
    id: 'ASG002',
    courseId: 'CS102',
    title: 'Data Structures Implementation',
    dueDate: '2025-08-01',
    status: 'completed',
    grade: 92
  },
  {
    id: 'ASG003',
    courseId: 'MATH201',
    title: 'Linear Algebra Quiz',
    dueDate: '2025-08-20',
    status: 'ongoing'
  },
];

const Assignments = () => {
  const [tab, setTab] = useState(0);
  const [courseIdFilter, setCourseIdFilter] = useState('');
  const [assignmentIdFilter, setAssignmentIdFilter] = useState('');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const filterAssignments = (assignments: Assignment[]) => {
    return assignments.filter(assignment =>
      (courseIdFilter === '' || assignment.courseId.toLowerCase().includes(courseIdFilter.toLowerCase())) &&
      (assignmentIdFilter === '' || assignment.id.toLowerCase().includes(assignmentIdFilter.toLowerCase())) &&
      (tab === 0 ? assignment.status === 'ongoing' : assignment.status === 'completed')
    );
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Assignments
        </Typography>

        <Tabs value={tab} onChange={handleTabChange} sx={{ mb: 2 }}>
          <Tab label="Ongoing" />
          <Tab label="Completed" />
        </Tabs>

        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Filter by Course ID"
              value={courseIdFilter}
              onChange={(e) => setCourseIdFilter(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Filter by Assignment ID"
              value={assignmentIdFilter}
              onChange={(e) => setAssignmentIdFilter(e.target.value)}
            />
          </Grid>
        </Grid>

        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Assignment ID</TableCell>
                <TableCell>Course ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Due Date</TableCell>
                {tab === 1 && <TableCell align="right">Grade</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {filterAssignments(sampleAssignments).map((assignment) => (
                <TableRow hover key={assignment.id}>
                  <TableCell>{assignment.id}</TableCell>
                  <TableCell>{assignment.courseId}</TableCell>
                  <TableCell>{assignment.title}</TableCell>
                  <TableCell>{assignment.dueDate}</TableCell>
                  {tab === 1 && (
                    <TableCell align="right">{assignment.grade}</TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Paper>
  );
};

export default Assignments;
