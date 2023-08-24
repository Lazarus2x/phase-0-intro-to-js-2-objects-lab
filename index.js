const employee = {
  name: 'value1',
  streetAddress: 'value2'
}
function updateEmployeeWithKeyAndValue(obj, key, value) {
  let copyOfObj = {...obj}
  copyOfObj[key] = value
  return copyOfObj
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}
function deleteFromEmployeeByKey(obj, key) {
  let copyOfObj = {...obj} 
  delete copyOfObj[key]
  return {obj}
}
function destructivelyDeleteFromEmployeeByKey(obj, key) {
  delete obj[key]
  return obj
}