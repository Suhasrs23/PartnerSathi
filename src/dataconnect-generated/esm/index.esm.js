import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'partnersathi',
  location: 'us-east4'
};

export const createUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser', inputVars);
}
createUserRef.operationName = 'CreateUser';

export function createUser(dcOrVars, vars) {
  return executeMutation(createUserRef(dcOrVars, vars));
}

export const getAllUsersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAllUsers');
}
getAllUsersRef.operationName = 'GetAllUsers';

export function getAllUsers(dc) {
  return executeQuery(getAllUsersRef(dc));
}

export const getUserByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserById', inputVars);
}
getUserByIdRef.operationName = 'GetUserById';

export function getUserById(dcOrVars, vars) {
  return executeQuery(getUserByIdRef(dcOrVars, vars));
}

export const updateUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateUser', inputVars);
}
updateUserRef.operationName = 'UpdateUser';

export function updateUser(dcOrVars, vars) {
  return executeMutation(updateUserRef(dcOrVars, vars));
}

export const updateLastLoginRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateLastLogin', inputVars);
}
updateLastLoginRef.operationName = 'UpdateLastLogin';

export function updateLastLogin(dcOrVars, vars) {
  return executeMutation(updateLastLoginRef(dcOrVars, vars));
}

export const deactivateUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeactivateUser', inputVars);
}
deactivateUserRef.operationName = 'DeactivateUser';

export function deactivateUser(dcOrVars, vars) {
  return executeMutation(deactivateUserRef(dcOrVars, vars));
}

export const deleteUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteUser', inputVars);
}
deleteUserRef.operationName = 'DeleteUser';

export function deleteUser(dcOrVars, vars) {
  return executeMutation(deleteUserRef(dcOrVars, vars));
}

export const createCompanyRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateCompany', inputVars);
}
createCompanyRef.operationName = 'CreateCompany';

export function createCompany(dcOrVars, vars) {
  return executeMutation(createCompanyRef(dcOrVars, vars));
}

export const getAllCompaniesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAllCompanies');
}
getAllCompaniesRef.operationName = 'GetAllCompanies';

export function getAllCompanies(dc) {
  return executeQuery(getAllCompaniesRef(dc));
}

export const getCompanyByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCompanyById', inputVars);
}
getCompanyByIdRef.operationName = 'GetCompanyById';

export function getCompanyById(dcOrVars, vars) {
  return executeQuery(getCompanyByIdRef(dcOrVars, vars));
}

export const linkUserToCompanyRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'LinkUserToCompany', inputVars);
}
linkUserToCompanyRef.operationName = 'LinkUserToCompany';

export function linkUserToCompany(dcOrVars, vars) {
  return executeMutation(linkUserToCompanyRef(dcOrVars, vars));
}

export const getAllUserCompaniesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAllUserCompanies');
}
getAllUserCompaniesRef.operationName = 'GetAllUserCompanies';

export function getAllUserCompanies(dc) {
  return executeQuery(getAllUserCompaniesRef(dc));
}

export const userLeftCompanyRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UserLeftCompany', inputVars);
}
userLeftCompanyRef.operationName = 'UserLeftCompany';

export function userLeftCompany(dcOrVars, vars) {
  return executeMutation(userLeftCompanyRef(dcOrVars, vars));
}

export const addEmergencyContactRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddEmergencyContact', inputVars);
}
addEmergencyContactRef.operationName = 'AddEmergencyContact';

export function addEmergencyContact(dcOrVars, vars) {
  return executeMutation(addEmergencyContactRef(dcOrVars, vars));
}

export const getAllEmergencyContactsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAllEmergencyContacts');
}
getAllEmergencyContactsRef.operationName = 'GetAllEmergencyContacts';

export function getAllEmergencyContacts(dc) {
  return executeQuery(getAllEmergencyContactsRef(dc));
}

export const updateEmergencyContactRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateEmergencyContact', inputVars);
}
updateEmergencyContactRef.operationName = 'UpdateEmergencyContact';

export function updateEmergencyContact(dcOrVars, vars) {
  return executeMutation(updateEmergencyContactRef(dcOrVars, vars));
}

export const deleteEmergencyContactRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteEmergencyContact', inputVars);
}
deleteEmergencyContactRef.operationName = 'DeleteEmergencyContact';

export function deleteEmergencyContact(dcOrVars, vars) {
  return executeMutation(deleteEmergencyContactRef(dcOrVars, vars));
}

export const createEventRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateEvent', inputVars);
}
createEventRef.operationName = 'CreateEvent';

export function createEvent(dcOrVars, vars) {
  return executeMutation(createEventRef(dcOrVars, vars));
}

export const getAllEventsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAllEvents');
}
getAllEventsRef.operationName = 'GetAllEvents';

export function getAllEvents(dc) {
  return executeQuery(getAllEventsRef(dc));
}

export const getEventByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetEventById', inputVars);
}
getEventByIdRef.operationName = 'GetEventById';

export function getEventById(dcOrVars, vars) {
  return executeQuery(getEventByIdRef(dcOrVars, vars));
}

export const updateEventStatusRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateEventStatus', inputVars);
}
updateEventStatusRef.operationName = 'UpdateEventStatus';

export function updateEventStatus(dcOrVars, vars) {
  return executeMutation(updateEventStatusRef(dcOrVars, vars));
}

export const markEventAsFalseAlarmRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'MarkEventAsFalseAlarm', inputVars);
}
markEventAsFalseAlarmRef.operationName = 'MarkEventAsFalseAlarm';

export function markEventAsFalseAlarm(dcOrVars, vars) {
  return executeMutation(markEventAsFalseAlarmRef(dcOrVars, vars));
}

export const incrementResponseCountRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'IncrementResponseCount', inputVars);
}
incrementResponseCountRef.operationName = 'IncrementResponseCount';

export function incrementResponseCount(dcOrVars, vars) {
  return executeMutation(incrementResponseCountRef(dcOrVars, vars));
}

export const deleteEventRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteEvent', inputVars);
}
deleteEventRef.operationName = 'DeleteEvent';

export function deleteEvent(dcOrVars, vars) {
  return executeMutation(deleteEventRef(dcOrVars, vars));
}

export const addEventResponderRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddEventResponder', inputVars);
}
addEventResponderRef.operationName = 'AddEventResponder';

export function addEventResponder(dcOrVars, vars) {
  return executeMutation(addEventResponderRef(dcOrVars, vars));
}

export const getAllEventRespondersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAllEventResponders');
}
getAllEventRespondersRef.operationName = 'GetAllEventResponders';

export function getAllEventResponders(dc) {
  return executeQuery(getAllEventRespondersRef(dc));
}

export const updateResponderStatusRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateResponderStatus', inputVars);
}
updateResponderStatusRef.operationName = 'UpdateResponderStatus';

export function updateResponderStatus(dcOrVars, vars) {
  return executeMutation(updateResponderStatusRef(dcOrVars, vars));
}

export const responderLeftEventRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'ResponderLeftEvent', inputVars);
}
responderLeftEventRef.operationName = 'ResponderLeftEvent';

export function responderLeftEvent(dcOrVars, vars) {
  return executeMutation(responderLeftEventRef(dcOrVars, vars));
}

export const deleteEventResponderRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteEventResponder', inputVars);
}
deleteEventResponderRef.operationName = 'DeleteEventResponder';

export function deleteEventResponder(dcOrVars, vars) {
  return executeMutation(deleteEventResponderRef(dcOrVars, vars));
}

export const logLocationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'LogLocation', inputVars);
}
logLocationRef.operationName = 'LogLocation';

export function logLocation(dcOrVars, vars) {
  return executeMutation(logLocationRef(dcOrVars, vars));
}

export const getAllLocationLogsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAllLocationLogs');
}
getAllLocationLogsRef.operationName = 'GetAllLocationLogs';

export function getAllLocationLogs(dc) {
  return executeQuery(getAllLocationLogsRef(dc));
}

export const deleteLocationLogRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteLocationLog', inputVars);
}
deleteLocationLogRef.operationName = 'DeleteLocationLog';

export function deleteLocationLog(dcOrVars, vars) {
  return executeMutation(deleteLocationLogRef(dcOrVars, vars));
}

