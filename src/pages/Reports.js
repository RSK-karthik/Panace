import React from 'react';
import Navbar from '../components/Navbar';
import './Reports.css'
function Reports() {
  const data = [
    { name: 'Calories', value: 40 },
    { name: 'Fats', value: 30 },
    { name: 'Proteins', value: 30 },
    { name: 'Salts', value: 20 },
  ];
  return (
    <div>
    <Navbar/>
    <div className='reports'>
      
    </div>
    </div>
  );
}

export default Reports;
