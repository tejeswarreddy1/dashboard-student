import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

interface CourseData {
  id: string;
  name: string;
  credits: number;
  grade: string;
  gradePoints: number;
}

const courseData: CourseData[] = [
  { id: 'CS101', name: 'Introduction to Programming', credits: 3, grade: 'A', gradePoints: 4.0 },
  { id: 'CS102', name: 'Data Structures', credits: 4, grade: 'A-', gradePoints: 3.7 },
  { id: 'MATH201', name: 'Linear Algebra', credits: 3, grade: 'B+', gradePoints: 3.3 },
  { id: 'CS103', name: 'Object Oriented Programming', credits: 4, grade: 'A', gradePoints: 4.0 },
  { id: 'ENG101', name: 'Technical Writing', credits: 2, grade: 'B', gradePoints: 3.0 },
];

const Courses = () => {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Typography variant="h5" component="h2" sx={{ p: 2 }}>
        Course Records
      </Typography>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Course ID</TableCell>
              <TableCell>Course Name</TableCell>
              <TableCell align="right">Credits</TableCell>
              <TableCell>Grade</TableCell>
              <TableCell align="right">Grade Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courseData.map((row) => (
              <TableRow hover key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.credits}</TableCell>
                <TableCell>{row.grade}</TableCell>
                <TableCell align="right">{row.gradePoints}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Courses;
