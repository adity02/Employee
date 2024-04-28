import React from 'react';
import './EmployeeOfTheMonth.css';
import employees from './employeeData';

const EmployeeOfTheMonth = () => {
  const handleViewPastRecipients = (employeeName) => {
    alert(`View past recipients for ${employeeName}`);
    
  };

  return (
    <div className="employee-of-the-month">
      <h2>Employee of the Month</h2>
      {employees.map((employee) => (
        <div key={employee.id} className="employee-card">
          <h3>{employee.name}</h3>
          <p>{employee.position}</p>
          <p>{employee.achievements}</p>
          <button className="view-button" onClick={() => handleViewPastRecipients(employee.name)}>View Past Recipients</button>
        </div>
      ))}
    </div>
  );
};

export default EmployeeOfTheMonth;