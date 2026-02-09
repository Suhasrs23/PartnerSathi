import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AddEmergencyContactData {
  emergencyContacts_insert: EmergencyContacts_Key;
}

export interface AddEmergencyContactVariables {
  userId: UUIDString;
  ecName: string;
  phoneNumber: string;
  relation?: string | null;
}

export interface AddEventResponderData {
  eventResponders_insert: EventResponders_Key;
}

export interface AddEventResponderVariables {
  eventId: UUIDString;
  responderUserId: UUIDString;
  responseStatus: string;
}

export interface Companies_Key {
  id: UUIDString;
  __typename?: 'Companies_Key';
}

export interface CreateCompanyData {
  companies_insert: Companies_Key;
}

export interface CreateCompanyVariables {
  companyName: string;
}

export interface CreateEventData {
  events_insert: Events_Key;
}

export interface CreateEventVariables {
  userId: UUIDString;
  eventType: string;
  severityLevel?: string | null;
  latitude: number;
  longitude: number;
  locationAccuracy?: number | null;
  triggeredBy: string;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface CreateUserVariables {
  name: string;
  phoneNumber: string;
  isPhoneVerified: boolean;
  email?: string | null;
  vehicleType?: string | null;
  pushToken?: string | null;
}

export interface DeactivateUserData {
  user_update?: User_Key | null;
}

export interface DeactivateUserVariables {
  uuid: UUIDString;
}

export interface DeleteEmergencyContactData {
  emergencyContacts_delete?: EmergencyContacts_Key | null;
}

export interface DeleteEmergencyContactVariables {
  ecid: UUIDString;
}

export interface DeleteEventData {
  events_delete?: Events_Key | null;
}

export interface DeleteEventResponderData {
  eventResponders_delete?: EventResponders_Key | null;
}

export interface DeleteEventResponderVariables {
  erid: UUIDString;
}

export interface DeleteEventVariables {
  euid: UUIDString;
}

export interface DeleteLocationLogData {
  locationLogs_delete?: LocationLogs_Key | null;
}

export interface DeleteLocationLogVariables {
  luid: UUIDString;
}

export interface DeleteUserData {
  user_delete?: User_Key | null;
}

export interface DeleteUserVariables {
  uuid: UUIDString;
}

export interface EmergencyContacts_Key {
  id: UUIDString;
  __typename?: 'EmergencyContacts_Key';
}

export interface EventResponders_Key {
  id: UUIDString;
  __typename?: 'EventResponders_Key';
}

export interface Events_Key {
  id: UUIDString;
  __typename?: 'Events_Key';
}

export interface GetAllCompaniesData {
  companies?: {
    cuid: UUIDString;
    companyName: string;
    addedAt?: TimestampString | null;
  };
}

export interface GetAllEmergencyContactsData {
  emergencyContacts?: {
    ecid: UUIDString;
    userId: UUIDString;
    ecName?: string | null;
    phoneNumber: string;
    relation?: string | null;
    createdAt?: TimestampString | null;
  };
}

export interface GetAllEventRespondersData {
  eventResponders?: {
    erid: UUIDString;
    eventId: UUIDString;
    responderUserId: UUIDString;
    responseStatus?: string | null;
    joinedAt?: TimestampString | null;
    leftAt?: TimestampString | null;
  };
}

export interface GetAllEventsData {
  events?: {
    euid: UUIDString;
    userId: UUIDString;
    eventType: string;
    severityLevel?: string | null;
    status?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    triggeredBy: string;
    responseCount?: number | null;
    isFalseAlarm?: boolean | null;
    startTime?: TimestampString | null;
    endTime?: TimestampString | null;
    createdAt?: TimestampString | null;
  };
}

export interface GetAllLocationLogsData {
  locationLogs?: {
    luid: UUIDString;
    userId: UUIDString;
    latitude?: number | null;
    longitude?: number | null;
    recordedAt?: TimestampString | null;
  };
}

export interface GetAllUserCompaniesData {
  userCompanies?: {
    ucid: UUIDString;
    userId: UUIDString;
    companyId: UUIDString;
    joinedAt?: TimestampString | null;
    leftAt?: TimestampString | null;
  };
}

export interface GetAllUsersData {
  users: ({
    uuid: UUIDString;
    name: string;
    phoneNumber: string;
    email?: string | null;
    vehicleType?: string | null;
    rating?: number | null;
    helpScore?: number | null;
    isActive?: boolean | null;
    createdAt?: TimestampString | null;
  })[];
}

export interface GetCompanyByIdData {
  companies?: {
    cuid: UUIDString;
    companyName: string;
    addedAt?: TimestampString | null;
  };
}

export interface GetCompanyByIdVariables {
  id: UUIDString;
}

export interface GetEventByIdData {
  events?: {
    euid: UUIDString;
    userId: UUIDString;
    eventType: string;
    severityLevel?: string | null;
    status?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    locationAccuracy?: number | null;
    triggeredBy: string;
    responseCount?: number | null;
    isFalseAlarm?: boolean | null;
    startTime?: TimestampString | null;
    endTime?: TimestampString | null;
    createdAt?: TimestampString | null;
    updatedAt?: TimestampString | null;
  };
}

export interface GetEventByIdVariables {
  id: UUIDString;
}

export interface GetUserByIdData {
  user?: {
    uuid: UUIDString;
    name: string;
    photoUrl?: string | null;
    phoneNumber: string;
    isPhoneVerified: boolean;
    email?: string | null;
    dob?: DateString | null;
    gender?: string | null;
    bloodGroup?: string | null;
    rating?: number | null;
    helpScore?: number | null;
    vehicleType?: string | null;
    isActive?: boolean | null;
    deviceType?: string | null;
    pushToken?: string | null;
    lastLogin?: TimestampString | null;
    createdAt?: TimestampString | null;
    updatedAt?: TimestampString | null;
  };
}

export interface GetUserByIdVariables {
  id: UUIDString;
}

export interface IncrementResponseCountData {
  events_update?: Events_Key | null;
}

export interface IncrementResponseCountVariables {
  euid: UUIDString;
  count: number;
}

export interface LinkUserToCompanyData {
  userCompanies_insert: UserCompanies_Key;
}

export interface LinkUserToCompanyVariables {
  userId: UUIDString;
  companyId: UUIDString;
}

export interface LocationLogs_Key {
  id: UUIDString;
  __typename?: 'LocationLogs_Key';
}

export interface LogLocationData {
  locationLogs_insert: LocationLogs_Key;
}

export interface LogLocationVariables {
  userId: UUIDString;
  latitude: number;
  longitude: number;
}

export interface MarkEventAsFalseAlarmData {
  events_update?: Events_Key | null;
}

export interface MarkEventAsFalseAlarmVariables {
  euid: UUIDString;
}

export interface ResponderLeftEventData {
  eventResponders_update?: EventResponders_Key | null;
}

export interface ResponderLeftEventVariables {
  erid: UUIDString;
  leftAt: TimestampString;
}

export interface UpdateEmergencyContactData {
  emergencyContacts_update?: EmergencyContacts_Key | null;
}

export interface UpdateEmergencyContactVariables {
  ecid: UUIDString;
  ecName?: string | null;
  phoneNumber?: string | null;
  relation?: string | null;
}

export interface UpdateEventStatusData {
  events_update?: Events_Key | null;
}

export interface UpdateEventStatusVariables {
  euid: UUIDString;
  status: string;
}

export interface UpdateLastLoginData {
  user_update?: User_Key | null;
}

export interface UpdateLastLoginVariables {
  uuid: UUIDString;
  lastLogin: TimestampString;
}

export interface UpdateResponderStatusData {
  eventResponders_update?: EventResponders_Key | null;
}

export interface UpdateResponderStatusVariables {
  erid: UUIDString;
  responseStatus: string;
}

export interface UpdateUserData {
  user_update?: User_Key | null;
}

export interface UpdateUserVariables {
  uuid: UUIDString;
  name?: string | null;
  email?: string | null;
  photoUrl?: string | null;
  dob?: DateString | null;
  gender?: string | null;
  bloodGroup?: string | null;
  vehicleType?: string | null;
}

export interface UserCompanies_Key {
  id: UUIDString;
  __typename?: 'UserCompanies_Key';
}

export interface UserLeftCompanyData {
  userCompanies_update?: UserCompanies_Key | null;
}

export interface UserLeftCompanyVariables {
  ucid: UUIDString;
  leftAt: TimestampString;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;
export function createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface GetAllUsersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllUsersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetAllUsersData, undefined>;
  operationName: string;
}
export const getAllUsersRef: GetAllUsersRef;

export function getAllUsers(): QueryPromise<GetAllUsersData, undefined>;
export function getAllUsers(dc: DataConnect): QueryPromise<GetAllUsersData, undefined>;

interface GetUserByIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserByIdVariables): QueryRef<GetUserByIdData, GetUserByIdVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetUserByIdVariables): QueryRef<GetUserByIdData, GetUserByIdVariables>;
  operationName: string;
}
export const getUserByIdRef: GetUserByIdRef;

export function getUserById(vars: GetUserByIdVariables): QueryPromise<GetUserByIdData, GetUserByIdVariables>;
export function getUserById(dc: DataConnect, vars: GetUserByIdVariables): QueryPromise<GetUserByIdData, GetUserByIdVariables>;

interface UpdateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
  operationName: string;
}
export const updateUserRef: UpdateUserRef;

export function updateUser(vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;
export function updateUser(dc: DataConnect, vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

interface UpdateLastLoginRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateLastLoginVariables): MutationRef<UpdateLastLoginData, UpdateLastLoginVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateLastLoginVariables): MutationRef<UpdateLastLoginData, UpdateLastLoginVariables>;
  operationName: string;
}
export const updateLastLoginRef: UpdateLastLoginRef;

export function updateLastLogin(vars: UpdateLastLoginVariables): MutationPromise<UpdateLastLoginData, UpdateLastLoginVariables>;
export function updateLastLogin(dc: DataConnect, vars: UpdateLastLoginVariables): MutationPromise<UpdateLastLoginData, UpdateLastLoginVariables>;

interface DeactivateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeactivateUserVariables): MutationRef<DeactivateUserData, DeactivateUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeactivateUserVariables): MutationRef<DeactivateUserData, DeactivateUserVariables>;
  operationName: string;
}
export const deactivateUserRef: DeactivateUserRef;

export function deactivateUser(vars: DeactivateUserVariables): MutationPromise<DeactivateUserData, DeactivateUserVariables>;
export function deactivateUser(dc: DataConnect, vars: DeactivateUserVariables): MutationPromise<DeactivateUserData, DeactivateUserVariables>;

interface DeleteUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteUserVariables): MutationRef<DeleteUserData, DeleteUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteUserVariables): MutationRef<DeleteUserData, DeleteUserVariables>;
  operationName: string;
}
export const deleteUserRef: DeleteUserRef;

export function deleteUser(vars: DeleteUserVariables): MutationPromise<DeleteUserData, DeleteUserVariables>;
export function deleteUser(dc: DataConnect, vars: DeleteUserVariables): MutationPromise<DeleteUserData, DeleteUserVariables>;

interface CreateCompanyRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateCompanyVariables): MutationRef<CreateCompanyData, CreateCompanyVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateCompanyVariables): MutationRef<CreateCompanyData, CreateCompanyVariables>;
  operationName: string;
}
export const createCompanyRef: CreateCompanyRef;

export function createCompany(vars: CreateCompanyVariables): MutationPromise<CreateCompanyData, CreateCompanyVariables>;
export function createCompany(dc: DataConnect, vars: CreateCompanyVariables): MutationPromise<CreateCompanyData, CreateCompanyVariables>;

interface GetAllCompaniesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllCompaniesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetAllCompaniesData, undefined>;
  operationName: string;
}
export const getAllCompaniesRef: GetAllCompaniesRef;

export function getAllCompanies(): QueryPromise<GetAllCompaniesData, undefined>;
export function getAllCompanies(dc: DataConnect): QueryPromise<GetAllCompaniesData, undefined>;

interface GetCompanyByIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCompanyByIdVariables): QueryRef<GetCompanyByIdData, GetCompanyByIdVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetCompanyByIdVariables): QueryRef<GetCompanyByIdData, GetCompanyByIdVariables>;
  operationName: string;
}
export const getCompanyByIdRef: GetCompanyByIdRef;

export function getCompanyById(vars: GetCompanyByIdVariables): QueryPromise<GetCompanyByIdData, GetCompanyByIdVariables>;
export function getCompanyById(dc: DataConnect, vars: GetCompanyByIdVariables): QueryPromise<GetCompanyByIdData, GetCompanyByIdVariables>;

interface LinkUserToCompanyRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: LinkUserToCompanyVariables): MutationRef<LinkUserToCompanyData, LinkUserToCompanyVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: LinkUserToCompanyVariables): MutationRef<LinkUserToCompanyData, LinkUserToCompanyVariables>;
  operationName: string;
}
export const linkUserToCompanyRef: LinkUserToCompanyRef;

export function linkUserToCompany(vars: LinkUserToCompanyVariables): MutationPromise<LinkUserToCompanyData, LinkUserToCompanyVariables>;
export function linkUserToCompany(dc: DataConnect, vars: LinkUserToCompanyVariables): MutationPromise<LinkUserToCompanyData, LinkUserToCompanyVariables>;

interface GetAllUserCompaniesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllUserCompaniesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetAllUserCompaniesData, undefined>;
  operationName: string;
}
export const getAllUserCompaniesRef: GetAllUserCompaniesRef;

export function getAllUserCompanies(): QueryPromise<GetAllUserCompaniesData, undefined>;
export function getAllUserCompanies(dc: DataConnect): QueryPromise<GetAllUserCompaniesData, undefined>;

interface UserLeftCompanyRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UserLeftCompanyVariables): MutationRef<UserLeftCompanyData, UserLeftCompanyVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UserLeftCompanyVariables): MutationRef<UserLeftCompanyData, UserLeftCompanyVariables>;
  operationName: string;
}
export const userLeftCompanyRef: UserLeftCompanyRef;

export function userLeftCompany(vars: UserLeftCompanyVariables): MutationPromise<UserLeftCompanyData, UserLeftCompanyVariables>;
export function userLeftCompany(dc: DataConnect, vars: UserLeftCompanyVariables): MutationPromise<UserLeftCompanyData, UserLeftCompanyVariables>;

interface AddEmergencyContactRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddEmergencyContactVariables): MutationRef<AddEmergencyContactData, AddEmergencyContactVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddEmergencyContactVariables): MutationRef<AddEmergencyContactData, AddEmergencyContactVariables>;
  operationName: string;
}
export const addEmergencyContactRef: AddEmergencyContactRef;

export function addEmergencyContact(vars: AddEmergencyContactVariables): MutationPromise<AddEmergencyContactData, AddEmergencyContactVariables>;
export function addEmergencyContact(dc: DataConnect, vars: AddEmergencyContactVariables): MutationPromise<AddEmergencyContactData, AddEmergencyContactVariables>;

interface GetAllEmergencyContactsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllEmergencyContactsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetAllEmergencyContactsData, undefined>;
  operationName: string;
}
export const getAllEmergencyContactsRef: GetAllEmergencyContactsRef;

export function getAllEmergencyContacts(): QueryPromise<GetAllEmergencyContactsData, undefined>;
export function getAllEmergencyContacts(dc: DataConnect): QueryPromise<GetAllEmergencyContactsData, undefined>;

interface UpdateEmergencyContactRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateEmergencyContactVariables): MutationRef<UpdateEmergencyContactData, UpdateEmergencyContactVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateEmergencyContactVariables): MutationRef<UpdateEmergencyContactData, UpdateEmergencyContactVariables>;
  operationName: string;
}
export const updateEmergencyContactRef: UpdateEmergencyContactRef;

export function updateEmergencyContact(vars: UpdateEmergencyContactVariables): MutationPromise<UpdateEmergencyContactData, UpdateEmergencyContactVariables>;
export function updateEmergencyContact(dc: DataConnect, vars: UpdateEmergencyContactVariables): MutationPromise<UpdateEmergencyContactData, UpdateEmergencyContactVariables>;

interface DeleteEmergencyContactRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteEmergencyContactVariables): MutationRef<DeleteEmergencyContactData, DeleteEmergencyContactVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteEmergencyContactVariables): MutationRef<DeleteEmergencyContactData, DeleteEmergencyContactVariables>;
  operationName: string;
}
export const deleteEmergencyContactRef: DeleteEmergencyContactRef;

export function deleteEmergencyContact(vars: DeleteEmergencyContactVariables): MutationPromise<DeleteEmergencyContactData, DeleteEmergencyContactVariables>;
export function deleteEmergencyContact(dc: DataConnect, vars: DeleteEmergencyContactVariables): MutationPromise<DeleteEmergencyContactData, DeleteEmergencyContactVariables>;

interface CreateEventRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateEventVariables): MutationRef<CreateEventData, CreateEventVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateEventVariables): MutationRef<CreateEventData, CreateEventVariables>;
  operationName: string;
}
export const createEventRef: CreateEventRef;

export function createEvent(vars: CreateEventVariables): MutationPromise<CreateEventData, CreateEventVariables>;
export function createEvent(dc: DataConnect, vars: CreateEventVariables): MutationPromise<CreateEventData, CreateEventVariables>;

interface GetAllEventsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllEventsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetAllEventsData, undefined>;
  operationName: string;
}
export const getAllEventsRef: GetAllEventsRef;

export function getAllEvents(): QueryPromise<GetAllEventsData, undefined>;
export function getAllEvents(dc: DataConnect): QueryPromise<GetAllEventsData, undefined>;

interface GetEventByIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetEventByIdVariables): QueryRef<GetEventByIdData, GetEventByIdVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetEventByIdVariables): QueryRef<GetEventByIdData, GetEventByIdVariables>;
  operationName: string;
}
export const getEventByIdRef: GetEventByIdRef;

export function getEventById(vars: GetEventByIdVariables): QueryPromise<GetEventByIdData, GetEventByIdVariables>;
export function getEventById(dc: DataConnect, vars: GetEventByIdVariables): QueryPromise<GetEventByIdData, GetEventByIdVariables>;

interface UpdateEventStatusRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateEventStatusVariables): MutationRef<UpdateEventStatusData, UpdateEventStatusVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateEventStatusVariables): MutationRef<UpdateEventStatusData, UpdateEventStatusVariables>;
  operationName: string;
}
export const updateEventStatusRef: UpdateEventStatusRef;

export function updateEventStatus(vars: UpdateEventStatusVariables): MutationPromise<UpdateEventStatusData, UpdateEventStatusVariables>;
export function updateEventStatus(dc: DataConnect, vars: UpdateEventStatusVariables): MutationPromise<UpdateEventStatusData, UpdateEventStatusVariables>;

interface MarkEventAsFalseAlarmRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: MarkEventAsFalseAlarmVariables): MutationRef<MarkEventAsFalseAlarmData, MarkEventAsFalseAlarmVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: MarkEventAsFalseAlarmVariables): MutationRef<MarkEventAsFalseAlarmData, MarkEventAsFalseAlarmVariables>;
  operationName: string;
}
export const markEventAsFalseAlarmRef: MarkEventAsFalseAlarmRef;

export function markEventAsFalseAlarm(vars: MarkEventAsFalseAlarmVariables): MutationPromise<MarkEventAsFalseAlarmData, MarkEventAsFalseAlarmVariables>;
export function markEventAsFalseAlarm(dc: DataConnect, vars: MarkEventAsFalseAlarmVariables): MutationPromise<MarkEventAsFalseAlarmData, MarkEventAsFalseAlarmVariables>;

interface IncrementResponseCountRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: IncrementResponseCountVariables): MutationRef<IncrementResponseCountData, IncrementResponseCountVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: IncrementResponseCountVariables): MutationRef<IncrementResponseCountData, IncrementResponseCountVariables>;
  operationName: string;
}
export const incrementResponseCountRef: IncrementResponseCountRef;

export function incrementResponseCount(vars: IncrementResponseCountVariables): MutationPromise<IncrementResponseCountData, IncrementResponseCountVariables>;
export function incrementResponseCount(dc: DataConnect, vars: IncrementResponseCountVariables): MutationPromise<IncrementResponseCountData, IncrementResponseCountVariables>;

interface DeleteEventRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteEventVariables): MutationRef<DeleteEventData, DeleteEventVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteEventVariables): MutationRef<DeleteEventData, DeleteEventVariables>;
  operationName: string;
}
export const deleteEventRef: DeleteEventRef;

export function deleteEvent(vars: DeleteEventVariables): MutationPromise<DeleteEventData, DeleteEventVariables>;
export function deleteEvent(dc: DataConnect, vars: DeleteEventVariables): MutationPromise<DeleteEventData, DeleteEventVariables>;

interface AddEventResponderRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddEventResponderVariables): MutationRef<AddEventResponderData, AddEventResponderVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddEventResponderVariables): MutationRef<AddEventResponderData, AddEventResponderVariables>;
  operationName: string;
}
export const addEventResponderRef: AddEventResponderRef;

export function addEventResponder(vars: AddEventResponderVariables): MutationPromise<AddEventResponderData, AddEventResponderVariables>;
export function addEventResponder(dc: DataConnect, vars: AddEventResponderVariables): MutationPromise<AddEventResponderData, AddEventResponderVariables>;

interface GetAllEventRespondersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllEventRespondersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetAllEventRespondersData, undefined>;
  operationName: string;
}
export const getAllEventRespondersRef: GetAllEventRespondersRef;

export function getAllEventResponders(): QueryPromise<GetAllEventRespondersData, undefined>;
export function getAllEventResponders(dc: DataConnect): QueryPromise<GetAllEventRespondersData, undefined>;

interface UpdateResponderStatusRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateResponderStatusVariables): MutationRef<UpdateResponderStatusData, UpdateResponderStatusVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateResponderStatusVariables): MutationRef<UpdateResponderStatusData, UpdateResponderStatusVariables>;
  operationName: string;
}
export const updateResponderStatusRef: UpdateResponderStatusRef;

export function updateResponderStatus(vars: UpdateResponderStatusVariables): MutationPromise<UpdateResponderStatusData, UpdateResponderStatusVariables>;
export function updateResponderStatus(dc: DataConnect, vars: UpdateResponderStatusVariables): MutationPromise<UpdateResponderStatusData, UpdateResponderStatusVariables>;

interface ResponderLeftEventRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ResponderLeftEventVariables): MutationRef<ResponderLeftEventData, ResponderLeftEventVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ResponderLeftEventVariables): MutationRef<ResponderLeftEventData, ResponderLeftEventVariables>;
  operationName: string;
}
export const responderLeftEventRef: ResponderLeftEventRef;

export function responderLeftEvent(vars: ResponderLeftEventVariables): MutationPromise<ResponderLeftEventData, ResponderLeftEventVariables>;
export function responderLeftEvent(dc: DataConnect, vars: ResponderLeftEventVariables): MutationPromise<ResponderLeftEventData, ResponderLeftEventVariables>;

interface DeleteEventResponderRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteEventResponderVariables): MutationRef<DeleteEventResponderData, DeleteEventResponderVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteEventResponderVariables): MutationRef<DeleteEventResponderData, DeleteEventResponderVariables>;
  operationName: string;
}
export const deleteEventResponderRef: DeleteEventResponderRef;

export function deleteEventResponder(vars: DeleteEventResponderVariables): MutationPromise<DeleteEventResponderData, DeleteEventResponderVariables>;
export function deleteEventResponder(dc: DataConnect, vars: DeleteEventResponderVariables): MutationPromise<DeleteEventResponderData, DeleteEventResponderVariables>;

interface LogLocationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: LogLocationVariables): MutationRef<LogLocationData, LogLocationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: LogLocationVariables): MutationRef<LogLocationData, LogLocationVariables>;
  operationName: string;
}
export const logLocationRef: LogLocationRef;

export function logLocation(vars: LogLocationVariables): MutationPromise<LogLocationData, LogLocationVariables>;
export function logLocation(dc: DataConnect, vars: LogLocationVariables): MutationPromise<LogLocationData, LogLocationVariables>;

interface GetAllLocationLogsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllLocationLogsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetAllLocationLogsData, undefined>;
  operationName: string;
}
export const getAllLocationLogsRef: GetAllLocationLogsRef;

export function getAllLocationLogs(): QueryPromise<GetAllLocationLogsData, undefined>;
export function getAllLocationLogs(dc: DataConnect): QueryPromise<GetAllLocationLogsData, undefined>;

interface DeleteLocationLogRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteLocationLogVariables): MutationRef<DeleteLocationLogData, DeleteLocationLogVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteLocationLogVariables): MutationRef<DeleteLocationLogData, DeleteLocationLogVariables>;
  operationName: string;
}
export const deleteLocationLogRef: DeleteLocationLogRef;

export function deleteLocationLog(vars: DeleteLocationLogVariables): MutationPromise<DeleteLocationLogData, DeleteLocationLogVariables>;
export function deleteLocationLog(dc: DataConnect, vars: DeleteLocationLogVariables): MutationPromise<DeleteLocationLogData, DeleteLocationLogVariables>;

