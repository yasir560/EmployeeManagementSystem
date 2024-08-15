import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { doc, setDoc, updateDoc, deleteDoc, getDoc } from "firebase/firestore"; 
import { db } from './config'; // Add your Firebase configuration file
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const [fullName, setFullName] = useState('');
  const [cnic, setCnic] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [address, setAddress] = useState('');
  const [dailyPay, setDailyPay] = useState('');
  const [employeeID, setEmployeeID] = useState('');
  
  const handleAddRecord = () => {
    // Add Record to Firestore
    setDoc(doc(db, "employee", employeeID), {
      fullName: fullName,
      cnic: cnic,
      joiningDate: joiningDate,
      mobileNo: mobileNo,
      address: address,
      dailyPay: dailyPay,
    }).then(() => {
      console.log("Added");
      // Reset form fields after submission
      setFullName('');
      setCnic('');
      setJoiningDate('');
      setMobileNo('');
      setAddress('');
      setDailyPay('');
      setEmployeeID('');
    }).catch((error) => {
      console.log(error);
    });
  };

  const handleUpdateRecord = async () => {
    // Update Record in Firestore
    const employeeDocRef = doc(db, "employee", employeeID);
    const employeeDoc = await getDoc(employeeDocRef);
    if (employeeDoc.exists()) {
      await updateDoc(employeeDocRef, {
        fullName: fullName,
        cnic: cnic,
        joiningDate: joiningDate,
        mobileNo: mobileNo,
        address: address,
        dailyPay: dailyPay,
      });
      console.log("Updated");
    } else {
      console.log("Document does not exist");
    }
  };

  const handleDeleteRecord = async () => {
    // Delete Record from Firestore
    const employeeDocRef = doc(db, "employee", employeeID);
    await deleteDoc(employeeDocRef);
    console.log("Deleted");
    // Reset form fields after deletion
    setFullName('');
    setCnic('');
    setJoiningDate('');
    setMobileNo('');
    setAddress('');
    setDailyPay('');
    setEmployeeID('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Employee Record</Text>
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}              
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="id-card" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="CNIC/Employee Card"
          value={cnic}
          onChangeText={setCnic}              
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="calendar" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Joining Date"
          value={joiningDate}
          onChangeText={setJoiningDate}              
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="phone" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Mobile No"
          value={mobileNo}
          onChangeText={setMobileNo}              
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="address-card" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={setAddress}              
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="dollar" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Daily Pay"
          value={dailyPay}
          onChangeText={setDailyPay}              
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="id-badge" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Employee ID"
          value={employeeID}
          onChangeText={setEmployeeID}              
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Add Record"
          onPress={handleAddRecord}
          color="#22b8cf" // Set button color
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Update Record"
          onPress={handleUpdateRecord}
          color="#22b8cf" // Set button color
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Delete Record"
          onPress={handleDeleteRecord}
          color="#eb4034" // Set button color
        />
      </View>
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc', // Change border color
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff', // Set background color
  },
  icon: {
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Center the buttons horizontally
    width: '100%',
    marginBottom: 10,
  },
});

export default App;
