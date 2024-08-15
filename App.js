import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import RegisterScreen from './RegisterScreen'; // Assuming these components are defined elsewhere
import EmployeeRecordForm from './EmployeeRecordForm';
import EmployeeList from './EmployeeList';
import SalarySlip from './Salaryslip';
import AttendanceMark from './AttendanceMark';
import SearchRecord from './SearchRecord';

const Drawer = createDrawerNavigator();

const renderScreen = (ScreenComponent) => {
  return <ScreenComponent />; // Render the passed screen component
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Employee Management App!</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterScreen')}>
          <Icon name="user-plus" size={20} color="white" />
          <Text style={styles.buttonText}>Register Employee</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EmployeeRecordForm')}>
          <Icon name="address-book" size={20} color="white" />
          <Text style={styles.buttonText}>Employee Record Form</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SearchRecord')}>
          <Icon name="Search" size={20} color="white" />
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AttendanceMark')}>
          <Icon name="calendar-check-o" size={20} color="white" />
          <Text style={styles.buttonText}>Mark Attendance</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SalarySlip')}>
        <Icon name="money" size={20} color="white" />
        <Text style={styles.buttonText}>Salary Slip</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EmployeeList')}>
        <Icon name="list" size={20} color="white" />
        <Text style={styles.buttonText}>Employee List</Text>
      </TouchableOpacity>
    </View>
  );
}; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10, // decrease padding vertically
    paddingHorizontal: 15, // decrease padding horizontally
    borderRadius: 5,
    marginBottom: 10,
    marginRight: 10,
    width: 120, // decrease width of the button
  },
  buttonText: {
    color: 'white',
    fontSize: 14, // decrease font size
    marginLeft: 5, // decrease margin
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="RegisterScreen" component={RegisterScreen} />
        <Drawer.Screen name="EmployeeRecordForm" component={EmployeeRecordForm} />
        <Drawer.Screen name="EmployeeList" component={EmployeeList} />
        <Drawer.Screen name="SalarySlip" component={SalarySlip} />
        <Drawer.Screen name="AttendanceMark" component={AttendanceMark} />
        <Drawer.Screen name="SearchRecord" component={SearchRecord} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;