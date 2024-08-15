import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { doc, getDoc } from "firebase/firestore"; 
import { db } from './config';

const SearchRecord = () => {
  const [employeeID, setEmployeeID] = useState('');
  const [fullName, setFullName] = useState('');
  const [cnic, setCnic] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [address, setAddress] = useState('');
  const [dailyPay, setDailyPay] = useState('');

  const handleButtonPress = () => {
    // Search Record
    getDoc(doc(db, "employee", employeeID))
      .then((docData) => {
        if (docData.exists()) {
          const data = docData.data();
          setFullName(data.fullName);
          setCnic(data.cnic);
          setJoiningDate(data.joiningDate);
          setMobileNo(data.mobileNo);
          setAddress(data.address);
          setDailyPay(data.dailyPay);
        } else {
          console.log("No such employeeID exists");
          // Reset fields if no record found
          setFullName('');
          setCnic('');
          setJoiningDate('');
          setMobileNo('');
          setAddress('');
          setDailyPay('');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Search Record</Text>
      <TextInput
        style={styles.input}
        placeholder="Employee ID"
        value={employeeID}
        onChangeText={setEmployeeID}              
      />
      <Text style={styles.label}>Full Name: {fullName}</Text>
      <Text style={styles.label}>CNIC: {cnic}</Text>
      <Text style={styles.label}>Joining Date: {joiningDate}</Text>
      <Text style={styles.label}>Mobile No: {mobileNo}</Text>
      <Text style={styles.label}>Address: {address}</Text>
      <Text style={styles.label}>Daily Pay: {dailyPay}</Text>
     
      <Button
        title="Search"
        onPress={handleButtonPress}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D1B2A', // Set background color
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#22b8cf', // Change text color
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff', // Set background color
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#fff', // Change text color
  },
});

export default SearchRecord;
