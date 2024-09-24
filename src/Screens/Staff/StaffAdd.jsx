import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './StaffAdd.module.css';

const StaffAdd = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [designation, setDesignation] = useState('');
  const [staffList, setStaffList] = useState(JSON.parse(localStorage.getItem('staffList')) || []);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStaff = {
      name,
      email,
      phone,
      designation,
    };
    setStaffList([...staffList, newStaff]);
    localStorage.setItem('staffList', JSON.stringify([...staffList, newStaff]));
    setName('');
    setEmail('');
    setPhone('');
    setDesignation('');
    navigate('/staffList');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Add Staff Member</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
            placeholder="Enter staff name"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            placeholder="Enter staff email"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={styles.input}
            placeholder="Enter staff phone number"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Designation:</label>
          <input
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            className={styles.input}
            placeholder="Enter staff designation"
          />
        </div>
        <button type="submit" className={styles.button}>
          Add Staff
        </button>
      </form>
    </div>
  );
};

export default StaffAdd;