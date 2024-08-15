import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { RadioButton } from 'react-native-paper'; // Assuming you have 'react-native-paper' installed

const AttendanceMark = ({ markAttendance }) => {
  const [employeeID, setEmployeeID] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [attendanceOption, setAttendanceOption] = useState('Present');
  const [message, setMessage] = useState('');

  const handleAttendanceMark = () => {
    markAttendance(employeeID, attendanceOption);
    setMessage('Attendance marked: ' + attendanceOption);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Mark Attendance</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Employee ID"
          value={employeeID}
          onChangeText={setEmployeeID}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Employee Name"
          value={employeeName}
          onChangeText={setEmployeeName}
        />
      </View>
      <View style={styles.radioContainer}>
        <RadioButton.Group onValueChange={newValue => setAttendanceOption(newValue)} value={attendanceOption}>
          <View style={styles.radioButton}>
            <RadioButton value="Present" />
            <Text style={styles.radioText}>Present</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="Absent" />
            <Text style={styles.radioText}>Absent</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="Half Day" />
            <Text style={styles.radioText}>Half Day</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="Double" />
            <Text style={styles.radioText}>Double</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="Overtime" />
            <Text style={styles.radioText}>Overtime</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton value="Paid Leave" />
            <Text style={styles.radioText}>Paid Leave</Text>
          </View>
        </RadioButton.Group>
      </View>
      <TouchableOpacity onPress={handleAttendanceMark} style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  radioContainer: {
    marginBottom: 10,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioText: {
    fontSize: 14,
    color: '#333',
  },
  button: {
    backgroundColor: '#22b8cf',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  message: {
    color: 'green',
    marginTop: 10,
  },
});

export default AttendanceMark;
