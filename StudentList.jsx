import React from 'react';

function StudentList({ students }) {
  return (
    <main style={{ padding: '2rem', minHeight: '60vh' }}>
      <h2>Enrolled Students</h2>
      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {students.map((student) => (
            <li 
              key={student.id} 
              style={{ 
                border: '1px solid #ddd', 
                borderRadius: '8px', 
                padding: '1rem', 
                marginBottom: '0.75rem' 
              }}
            >
              <strong>{student.name}</strong> — Grade: {student.grade} ({student.major})
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default StudentList;