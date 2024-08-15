import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { doc, getDoc } from "firebase/firestore"; 
import { db } from './config'; // Add your Firebase configuration file

const SalarySlip = () => {
  const [employeeID, setEmployeeID] = useState('');
  const [employeeData, setEmployeeData] = useState(null);

  const fetchEmployeeData = async () => {
    try {
      const employeeDocRef = doc(db, "employee", employeeID);
      const docSnap = await getDoc(employeeDocRef);
      if (docSnap.exists()) {
        setEmployeeData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };

  const handleSearch = () => {
    fetchEmployeeData();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Search for Employee Salary Slip</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Employee ID"
        value={employeeID}
        onChangeText={setEmployeeID}
      />
      <Button
        title="Search"
        onPress={handleSearch}
      />
      {employeeData && (
        <View style={styles.salaryReport}>
          <Text style={styles.employeeID}>Employee ID: {employeeID}</Text>
          <Text style={styles.reportHeading}>Salary Report</Text>
          <Text style={styles.salaryItem}>
            Total Monthly Salary: {parseFloat(employeeData.dailyPay) * 30}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  salaryReport: {
    marginTop: 20,
    alignItems: 'center',
  },
  employeeID: {
    fontSize: 18,
    marginBottom: 10,
  },
  reportHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  salaryItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default SalarySlip;
