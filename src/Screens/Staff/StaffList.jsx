import React, { useState } from 'react';
import styles from './StaffList.module.css';

const StaffList = () => {
  const [staffList, setStaffList] = useState(JSON.parse(localStorage.getItem('staffList')) || []);

  const handleDelete = (index) => {
    const newStaffList = staffList.filter((staff, i) => i !== index);
    setStaffList(newStaffList);
    localStorage.setItem('staffList', JSON.stringify(newStaffList));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Staff List</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Designation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {staffList.map((staff, index) => (
            <tr key={index}>
              <td>{staff.name}</td>
              <td>{staff.email}</td>
              <td>{staff.phone}</td>
              <td>{staff.designation}</td>
              <td>
                <button className={styles.deleteBtn} onClick={() => handleDelete(index)}>
                  <i className="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffList;