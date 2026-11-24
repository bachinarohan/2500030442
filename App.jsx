import React from 'react';
import Header from './components/Header';
import StudentList from './components/StudentList';
import Footer from './components/Footer';

function App() {
  const students = [
    { id: 1, name: 'Aarav Sharma', grade: 'A', major: 'Computer Science' },
    { id: 2, name: 'Priya Patel', grade: 'A+', major: 'Electronics' },
    { id: 3, name: 'Rohan Verma', grade: 'B+', major: 'Mechanical Engineering' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <Header />
      <StudentList students={students} />
      <Footer />
    </div>
  );
}

export default App;