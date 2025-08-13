import React, { useState, useEffect } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  TextField,
  MenuItem,
  Button,
  Grid,
} from '@mui/material';

interface Course {
  id: string;
  name: string;
  credits: number;
  grade: string;
}

const gradePoints: { [key: string]: number } = {
  'A': 4.0,
  'A-': 3.7,
  'B+': 3.3,
  'B': 3.0,
  'B-': 2.7,
  'C+': 2.3,
  'C': 2.0,
  'C-': 1.7,
  'D': 1.0,
  'F': 0.0,
};

const CGPACalculator = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [newCourse, setNewCourse] = useState<Course>({
    id: '',
    name: '',
    credits: 0,
    grade: 'A',
  });
  const [cgpa, setCGPA] = useState<number>(0);

  const calculateCGPA = () => {
    if (courses.length === 0) return 0;

    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach(course => {
      totalPoints += course.credits * gradePoints[course.grade];
      totalCredits += course.credits;
    });

    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
  };

  useEffect(() => {
    const calculated = calculateCGPA();
    setCGPA(Number(calculated));
  }, [courses]);

  const handleAddCourse = () => {
    if (newCourse.id && newCourse.name && newCourse.credits) {
      setCourses([...courses, newCourse]);
      setNewCourse({
        id: '',
        name: '',
        credits: 0,
        grade: 'A',
      });
    }
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        CGPA Calculator
      </Typography>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            label="Course ID"
            value={newCourse.id}
            onChange={(e) => setNewCourse({ ...newCourse, id: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Course Name"
            value={newCourse.name}
            onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField
            fullWidth
            type="number"
            label="Credits"
            value={newCourse.credits}
            onChange={(e) => setNewCourse({ ...newCourse, credits: Number(e.target.value) })}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <TextField
            fullWidth
            select
            label="Grade"
            value={newCourse.grade}
            onChange={(e) => setNewCourse({ ...newCourse, grade: e.target.value })}
          >
            {Object.keys(gradePoints).map((grade) => (
              <MenuItem key={grade} value={grade}>
                {grade}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={1}>
          <Button
            variant="contained"
            onClick={handleAddCourse}
            sx={{ height: '100%' }}
            fullWidth
          >
            Add
          </Button>
        </Grid>
      </Grid>

      <TableContainer>
        <Table>
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
            {courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell>{course.id}</TableCell>
                <TableCell>{course.name}</TableCell>
                <TableCell align="right">{course.credits}</TableCell>
                <TableCell>{course.grade}</TableCell>
                <TableCell align="right">{gradePoints[course.grade]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ mt: 3, textAlign: 'right' }}>
        <Typography variant="h6">
          Current CGPA: {cgpa}
        </Typography>
      </Box>
    </Paper>
  );
};

export default CGPACalculator;
