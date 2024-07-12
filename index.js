// Write your solution in this file!
// Initialize employee object
let employee = {
    name: 'Sam',
    streetAddress: '123 Main St'
  };
  
  // Function to update employee non-destructively
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Create a new object with spread operator
    return {
      ...employee,
      [key]: value
    };
  }
  
  // Function to update employee destructively
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update the original object and return it
    employee[key] = value;
    return employee;
  }
  
  // Function to delete property from employee non-destructively
  function deleteFromEmployeeByKey(employee, key) {
    // Create a new object with spread operator and delete key
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete property from employee destructively
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete key from original object and return it
    delete employee[key];
    return employee;
  }
  
  module.exports = {
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey
  };
  