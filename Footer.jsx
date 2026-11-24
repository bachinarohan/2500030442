import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#f1f1f1', textAlign: 'center', padding: '1rem', marginTop: 'auto' }}>
      <p>&copy; {new Date().getFullYear()} Student Portal. All rights reserved.</p>
    </footer>
  );
}

export default Footer;