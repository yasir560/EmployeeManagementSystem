// EmployeeListScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { db } from './config'; // Import your Firebase configuration

const EmployeeListScreen = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const querySnapshot = await db.collection('employee').get();
        const employees = querySnapshot.docs.map(doc => doc.data());
        setEmployeeData(employees);
      } catch (error) {
        console.error('Error fetching employee data:', error);
        setError('Error fetching employee data. Please try again later.');
      }
    };

    fetchEmployeeData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employee List</Text>
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={employeeData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.employeeContainer}>
              <Text style={styles.name}>{item.fullName}</Text>
              <Text style={styles.detail}>CNIC: {item.cnic}</Text>
              <Text style={styles.detail}>Joining Date: {item.joiningDate}</Text>
              <Text style={styles.detail}>Mobile No: {item.mobileNo}</Text>
              <Text style={styles.detail}>Address: {item.address}</Text>
              <Text style={styles.detail}>Daily Pay: {item.dailyPay}</Text>
              <Text style={styles.detail}>Employee ID: {item.employeeID}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  employeeContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detail: {
    fontSize: 16,
  },
  error: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});

export default EmployeeListScreen;
