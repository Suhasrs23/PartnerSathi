const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'partnersathi',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser', inputVars);
}
createUserRef.operationName = 'CreateUser';
exports.createUserRef = createUserRef;

exports.createUser = function createUser(dcOrVars, vars) {
  return executeMutation(createUserRef(dcOrVars, vars));
};

const getAllUsersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAllUsers');
}
getAllUsersRef.operationName = 'GetAllUsers';
exports.getAllUsersRef = getAllUsersRef;

exports.getAllUsers = function getAllUsers(dc) {
  return executeQuery(getAllUsersRef(dc));
};

const getUserByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserById', inputVars);
}
getUserByIdRef.operationName = 'GetUserById';
exports.getUserByIdRef = getUserByIdRef;

exports.getUserById = function getUserById(dcOrVars, vars) {
  return executeQuery(getUserByIdRef(dcOrVars, vars));
};

const updateUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateUser', inputVars);
}
updateUserRef.operationName = 'UpdateUser';
exports.updateUserRef = updateUserRef;

exports.updateUser = function updateUser(dcOrVars, vars) {
  return executeMutation(updateUserRef(dcOrVars, vars));
};

const updateLastLoginRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateLastLogin', inputVars);
}
updateLastLoginRef.operationName = 'UpdateLastLogin';
exports.updateLastLoginRef = updateLastLoginRef;

exports.updateLastLogin = function updateLastLogin(dcOrVars, vars) {
  return executeMutation(updateLastLoginRef(dcOrVars, vars));
};

const deactivateUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeactivateUser', inputVars);
}
deactivateUserRef.operationName = 'DeactivateUser';
exports.deactivateUserRef = deactivateUserRef;

exports.deactivateUser = function deactivateUser(dcOrVars, vars) {
  return executeMutation(deactivateUserRef(dcOrVars, vars));
};

const deleteUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteUser', inputVars);
}
deleteUserRef.operationName = 'DeleteUser';
exports.deleteUserRef = deleteUserRef;

exports.deleteUser = function deleteUser(dcOrVars, vars) {
  return executeMutation(deleteUserRef(dcOrVars, vars));
};

const createCompanyRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateCompany', inputVars);
}
createCompanyRef.operationName = 'CreateCompany';
exports.createCompanyRef = createCompanyRef;

exports.createCompany = function createCompany(dcOrVars, vars) {
  return executeMutation(createCompanyRef(dcOrVars, vars));
};

const getAllCompaniesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAllCompanies');
}
getAllCompaniesRef.operationName = 'GetAllCompanies';
exports.getAllCompaniesRef = getAllCompaniesRef;

exports.getAllCompanies = function getAllCompanies(dc) {
  return executeQuery(getAllCompaniesRef(dc));
};

const getCompanyByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCompanyById', inputVars);
}
getCompanyByIdRef.operationName = 'GetCompanyById';
exports.getCompanyByIdRef = getCompanyByIdRef;

exports.getCompanyById = function getCompanyById(dcOrVars, vars) {
  return executeQuery(getCompanyByIdRef(dcOrVars, vars));
};

const linkUserToCompanyRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'LinkUserToCompany', inputVars);
}
linkUserToCompanyRef.operationName = 'LinkUserToCompany';
exports.linkUserToCompanyRef = linkUserToCompanyRef;

exports.linkUserToCompany = function linkUserToCompany(dcOrVars, vars) {
  return executeMutation(linkUserToCompanyRef(dcOrVars, vars));
};

const getAllUserCompaniesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAllUserCompanies');
}
getAllUserCompaniesRef.operationName = 'GetAllUserCompanies';
exports.getAllUserCompaniesRef = getAllUserCompaniesRef;

exports.getAllUserCompanies = function getAllUserCompanies(dc) {
  return executeQuery(getAllUserCompaniesRef(dc));
};

const userLeftCompanyRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UserLeftCompany', inputVars);
}
userLeftCompanyRef.operationName = 'UserLeftCompany';
exports.userLeftCompanyRef = userLeftCompanyRef;

exports.userLeftCompany = function userLeftCompany(dcOrVars, vars) {
  return executeMutation(userLeftCompanyRef(dcOrVars, vars));
};

const addEmergencyContactRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddEmergencyContact', inputVars);
}
addEmergencyContactRef.operationName = 'AddEmergencyContact';
exports.addEmergencyContactRef = addEmergencyContactRef;

exports.addEmergencyContact = function addEmergencyContact(dcOrVars, vars) {
  return executeMutation(addEmergencyContactRef(dcOrVars, vars));
};

const getAllEmergencyContactsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAllEmergencyContacts');
}
getAllEmergencyContactsRef.operationName = 'GetAllEmergencyContacts';
exports.getAllEmergencyContactsRef = getAllEmergencyContactsRef;

exports.getAllEmergencyContacts = function getAllEmergencyContacts(dc) {
  return executeQuery(getAllEmergencyContactsRef(dc));
};

const updateEmergencyContactRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateEmergencyContact', inputVars);
}
updateEmergencyContactRef.operationName = 'UpdateEmergencyContact';
exports.updateEmergencyContactRef = updateEmergencyContactRef;

exports.updateEmergencyContact = function updateEmergencyContact(dcOrVars, vars) {
  return executeMutation(updateEmergencyContactRef(dcOrVars, vars));
};

const deleteEmergencyContactRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteEmergencyContact', inputVars);
}
deleteEmergencyContactRef.operationName = 'DeleteEmergencyContact';
exports.deleteEmergencyContactRef = deleteEmergencyContactRef;

exports.deleteEmergencyContact = function deleteEmergencyContact(dcOrVars, vars) {
  return executeMutation(deleteEmergencyContactRef(dcOrVars, vars));
};

const createEventRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateEvent', inputVars);
}
createEventRef.operationName = 'CreateEvent';
exports.createEventRef = createEventRef;

exports.createEvent = function createEvent(dcOrVars, vars) {
  return executeMutation(createEventRef(dcOrVars, vars));
};

const getAllEventsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAllEvents');
}
getAllEventsRef.operationName = 'GetAllEvents';
exports.getAllEventsRef = getAllEventsRef;

exports.getAllEvents = function getAllEvents(dc) {
  return executeQuery(getAllEventsRef(dc));
};

const getEventByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetEventById', inputVars);
}
getEventByIdRef.operationName = 'GetEventById';
exports.getEventByIdRef = getEventByIdRef;

exports.getEventById = function getEventById(dcOrVars, vars) {
  return executeQuery(getEventByIdRef(dcOrVars, vars));
};

const updateEventStatusRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateEventStatus', inputVars);
}
updateEventStatusRef.operationName = 'UpdateEventStatus';
exports.updateEventStatusRef = updateEventStatusRef;

exports.updateEventStatus = function updateEventStatus(dcOrVars, vars) {
  return executeMutation(updateEventStatusRef(dcOrVars, vars));
};

const markEventAsFalseAlarmRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'MarkEventAsFalseAlarm', inputVars);
}
markEventAsFalseAlarmRef.operationName = 'MarkEventAsFalseAlarm';
exports.markEventAsFalseAlarmRef = markEventAsFalseAlarmRef;

exports.markEventAsFalseAlarm = function markEventAsFalseAlarm(dcOrVars, vars) {
  return executeMutation(markEventAsFalseAlarmRef(dcOrVars, vars));
};

const incrementResponseCountRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'IncrementResponseCount', inputVars);
}
incrementResponseCountRef.operationName = 'IncrementResponseCount';
exports.incrementResponseCountRef = incrementResponseCountRef;

exports.incrementResponseCount = function incrementResponseCount(dcOrVars, vars) {
  return executeMutation(incrementResponseCountRef(dcOrVars, vars));
};

const deleteEventRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteEvent', inputVars);
}
deleteEventRef.operationName = 'DeleteEvent';
exports.deleteEventRef = deleteEventRef;

exports.deleteEvent = function deleteEvent(dcOrVars, vars) {
  return executeMutation(deleteEventRef(dcOrVars, vars));
};

const addEventResponderRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddEventResponder', inputVars);
}
addEventResponderRef.operationName = 'AddEventResponder';
exports.addEventResponderRef = addEventResponderRef;

exports.addEventResponder = function addEventResponder(dcOrVars, vars) {
  return executeMutation(addEventResponderRef(dcOrVars, vars));
};

const getAllEventRespondersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAllEventResponders');
}
getAllEventRespondersRef.operationName = 'GetAllEventResponders';
exports.getAllEventRespondersRef = getAllEventRespondersRef;

exports.getAllEventResponders = function getAllEventResponders(dc) {
  return executeQuery(getAllEventRespondersRef(dc));
};

const updateResponderStatusRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateResponderStatus', inputVars);
}
updateResponderStatusRef.operationName = 'UpdateResponderStatus';
exports.updateResponderStatusRef = updateResponderStatusRef;

exports.updateResponderStatus = function updateResponderStatus(dcOrVars, vars) {
  return executeMutation(updateResponderStatusRef(dcOrVars, vars));
};

const responderLeftEventRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'ResponderLeftEvent', inputVars);
}
responderLeftEventRef.operationName = 'ResponderLeftEvent';
exports.responderLeftEventRef = responderLeftEventRef;

exports.responderLeftEvent = function responderLeftEvent(dcOrVars, vars) {
  return executeMutation(responderLeftEventRef(dcOrVars, vars));
};

const deleteEventResponderRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteEventResponder', inputVars);
}
deleteEventResponderRef.operationName = 'DeleteEventResponder';
exports.deleteEventResponderRef = deleteEventResponderRef;

exports.deleteEventResponder = function deleteEventResponder(dcOrVars, vars) {
  return executeMutation(deleteEventResponderRef(dcOrVars, vars));
};

const logLocationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'LogLocation', inputVars);
}
logLocationRef.operationName = 'LogLocation';
exports.logLocationRef = logLocationRef;

exports.logLocation = function logLocation(dcOrVars, vars) {
  return executeMutation(logLocationRef(dcOrVars, vars));
};

const getAllLocationLogsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAllLocationLogs');
}
getAllLocationLogsRef.operationName = 'GetAllLocationLogs';
exports.getAllLocationLogsRef = getAllLocationLogsRef;

exports.getAllLocationLogs = function getAllLocationLogs(dc) {
  return executeQuery(getAllLocationLogsRef(dc));
};

const deleteLocationLogRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteLocationLog', inputVars);
}
deleteLocationLogRef.operationName = 'DeleteLocationLog';
exports.deleteLocationLogRef = deleteLocationLogRef;

exports.deleteLocationLog = function deleteLocationLog(dcOrVars, vars) {
  return executeMutation(deleteLocationLogRef(dcOrVars, vars));
};
