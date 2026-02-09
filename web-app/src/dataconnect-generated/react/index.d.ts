import { CreateUserData, CreateUserVariables, GetAllUsersData, GetUserByIdData, GetUserByIdVariables, UpdateUserData, UpdateUserVariables, UpdateLastLoginData, UpdateLastLoginVariables, DeactivateUserData, DeactivateUserVariables, DeleteUserData, DeleteUserVariables, CreateCompanyData, CreateCompanyVariables, GetAllCompaniesData, GetCompanyByIdData, GetCompanyByIdVariables, LinkUserToCompanyData, LinkUserToCompanyVariables, GetAllUserCompaniesData, UserLeftCompanyData, UserLeftCompanyVariables, AddEmergencyContactData, AddEmergencyContactVariables, GetAllEmergencyContactsData, UpdateEmergencyContactData, UpdateEmergencyContactVariables, DeleteEmergencyContactData, DeleteEmergencyContactVariables, CreateEventData, CreateEventVariables, GetAllEventsData, GetEventByIdData, GetEventByIdVariables, UpdateEventStatusData, UpdateEventStatusVariables, MarkEventAsFalseAlarmData, MarkEventAsFalseAlarmVariables, IncrementResponseCountData, IncrementResponseCountVariables, DeleteEventData, DeleteEventVariables, AddEventResponderData, AddEventResponderVariables, GetAllEventRespondersData, UpdateResponderStatusData, UpdateResponderStatusVariables, ResponderLeftEventData, ResponderLeftEventVariables, DeleteEventResponderData, DeleteEventResponderVariables, LogLocationData, LogLocationVariables, GetAllLocationLogsData, DeleteLocationLogData, DeleteLocationLogVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;

export function useGetAllUsers(options?: useDataConnectQueryOptions<GetAllUsersData>): UseDataConnectQueryResult<GetAllUsersData, undefined>;
export function useGetAllUsers(dc: DataConnect, options?: useDataConnectQueryOptions<GetAllUsersData>): UseDataConnectQueryResult<GetAllUsersData, undefined>;

export function useGetUserById(vars: GetUserByIdVariables, options?: useDataConnectQueryOptions<GetUserByIdData>): UseDataConnectQueryResult<GetUserByIdData, GetUserByIdVariables>;
export function useGetUserById(dc: DataConnect, vars: GetUserByIdVariables, options?: useDataConnectQueryOptions<GetUserByIdData>): UseDataConnectQueryResult<GetUserByIdData, GetUserByIdVariables>;

export function useUpdateUser(options?: useDataConnectMutationOptions<UpdateUserData, FirebaseError, UpdateUserVariables>): UseDataConnectMutationResult<UpdateUserData, UpdateUserVariables>;
export function useUpdateUser(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateUserData, FirebaseError, UpdateUserVariables>): UseDataConnectMutationResult<UpdateUserData, UpdateUserVariables>;

export function useUpdateLastLogin(options?: useDataConnectMutationOptions<UpdateLastLoginData, FirebaseError, UpdateLastLoginVariables>): UseDataConnectMutationResult<UpdateLastLoginData, UpdateLastLoginVariables>;
export function useUpdateLastLogin(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateLastLoginData, FirebaseError, UpdateLastLoginVariables>): UseDataConnectMutationResult<UpdateLastLoginData, UpdateLastLoginVariables>;

export function useDeactivateUser(options?: useDataConnectMutationOptions<DeactivateUserData, FirebaseError, DeactivateUserVariables>): UseDataConnectMutationResult<DeactivateUserData, DeactivateUserVariables>;
export function useDeactivateUser(dc: DataConnect, options?: useDataConnectMutationOptions<DeactivateUserData, FirebaseError, DeactivateUserVariables>): UseDataConnectMutationResult<DeactivateUserData, DeactivateUserVariables>;

export function useDeleteUser(options?: useDataConnectMutationOptions<DeleteUserData, FirebaseError, DeleteUserVariables>): UseDataConnectMutationResult<DeleteUserData, DeleteUserVariables>;
export function useDeleteUser(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteUserData, FirebaseError, DeleteUserVariables>): UseDataConnectMutationResult<DeleteUserData, DeleteUserVariables>;

export function useCreateCompany(options?: useDataConnectMutationOptions<CreateCompanyData, FirebaseError, CreateCompanyVariables>): UseDataConnectMutationResult<CreateCompanyData, CreateCompanyVariables>;
export function useCreateCompany(dc: DataConnect, options?: useDataConnectMutationOptions<CreateCompanyData, FirebaseError, CreateCompanyVariables>): UseDataConnectMutationResult<CreateCompanyData, CreateCompanyVariables>;

export function useGetAllCompanies(options?: useDataConnectQueryOptions<GetAllCompaniesData>): UseDataConnectQueryResult<GetAllCompaniesData, undefined>;
export function useGetAllCompanies(dc: DataConnect, options?: useDataConnectQueryOptions<GetAllCompaniesData>): UseDataConnectQueryResult<GetAllCompaniesData, undefined>;

export function useGetCompanyById(vars: GetCompanyByIdVariables, options?: useDataConnectQueryOptions<GetCompanyByIdData>): UseDataConnectQueryResult<GetCompanyByIdData, GetCompanyByIdVariables>;
export function useGetCompanyById(dc: DataConnect, vars: GetCompanyByIdVariables, options?: useDataConnectQueryOptions<GetCompanyByIdData>): UseDataConnectQueryResult<GetCompanyByIdData, GetCompanyByIdVariables>;

export function useLinkUserToCompany(options?: useDataConnectMutationOptions<LinkUserToCompanyData, FirebaseError, LinkUserToCompanyVariables>): UseDataConnectMutationResult<LinkUserToCompanyData, LinkUserToCompanyVariables>;
export function useLinkUserToCompany(dc: DataConnect, options?: useDataConnectMutationOptions<LinkUserToCompanyData, FirebaseError, LinkUserToCompanyVariables>): UseDataConnectMutationResult<LinkUserToCompanyData, LinkUserToCompanyVariables>;

export function useGetAllUserCompanies(options?: useDataConnectQueryOptions<GetAllUserCompaniesData>): UseDataConnectQueryResult<GetAllUserCompaniesData, undefined>;
export function useGetAllUserCompanies(dc: DataConnect, options?: useDataConnectQueryOptions<GetAllUserCompaniesData>): UseDataConnectQueryResult<GetAllUserCompaniesData, undefined>;

export function useUserLeftCompany(options?: useDataConnectMutationOptions<UserLeftCompanyData, FirebaseError, UserLeftCompanyVariables>): UseDataConnectMutationResult<UserLeftCompanyData, UserLeftCompanyVariables>;
export function useUserLeftCompany(dc: DataConnect, options?: useDataConnectMutationOptions<UserLeftCompanyData, FirebaseError, UserLeftCompanyVariables>): UseDataConnectMutationResult<UserLeftCompanyData, UserLeftCompanyVariables>;

export function useAddEmergencyContact(options?: useDataConnectMutationOptions<AddEmergencyContactData, FirebaseError, AddEmergencyContactVariables>): UseDataConnectMutationResult<AddEmergencyContactData, AddEmergencyContactVariables>;
export function useAddEmergencyContact(dc: DataConnect, options?: useDataConnectMutationOptions<AddEmergencyContactData, FirebaseError, AddEmergencyContactVariables>): UseDataConnectMutationResult<AddEmergencyContactData, AddEmergencyContactVariables>;

export function useGetAllEmergencyContacts(options?: useDataConnectQueryOptions<GetAllEmergencyContactsData>): UseDataConnectQueryResult<GetAllEmergencyContactsData, undefined>;
export function useGetAllEmergencyContacts(dc: DataConnect, options?: useDataConnectQueryOptions<GetAllEmergencyContactsData>): UseDataConnectQueryResult<GetAllEmergencyContactsData, undefined>;

export function useUpdateEmergencyContact(options?: useDataConnectMutationOptions<UpdateEmergencyContactData, FirebaseError, UpdateEmergencyContactVariables>): UseDataConnectMutationResult<UpdateEmergencyContactData, UpdateEmergencyContactVariables>;
export function useUpdateEmergencyContact(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateEmergencyContactData, FirebaseError, UpdateEmergencyContactVariables>): UseDataConnectMutationResult<UpdateEmergencyContactData, UpdateEmergencyContactVariables>;

export function useDeleteEmergencyContact(options?: useDataConnectMutationOptions<DeleteEmergencyContactData, FirebaseError, DeleteEmergencyContactVariables>): UseDataConnectMutationResult<DeleteEmergencyContactData, DeleteEmergencyContactVariables>;
export function useDeleteEmergencyContact(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteEmergencyContactData, FirebaseError, DeleteEmergencyContactVariables>): UseDataConnectMutationResult<DeleteEmergencyContactData, DeleteEmergencyContactVariables>;

export function useCreateEvent(options?: useDataConnectMutationOptions<CreateEventData, FirebaseError, CreateEventVariables>): UseDataConnectMutationResult<CreateEventData, CreateEventVariables>;
export function useCreateEvent(dc: DataConnect, options?: useDataConnectMutationOptions<CreateEventData, FirebaseError, CreateEventVariables>): UseDataConnectMutationResult<CreateEventData, CreateEventVariables>;

export function useGetAllEvents(options?: useDataConnectQueryOptions<GetAllEventsData>): UseDataConnectQueryResult<GetAllEventsData, undefined>;
export function useGetAllEvents(dc: DataConnect, options?: useDataConnectQueryOptions<GetAllEventsData>): UseDataConnectQueryResult<GetAllEventsData, undefined>;

export function useGetEventById(vars: GetEventByIdVariables, options?: useDataConnectQueryOptions<GetEventByIdData>): UseDataConnectQueryResult<GetEventByIdData, GetEventByIdVariables>;
export function useGetEventById(dc: DataConnect, vars: GetEventByIdVariables, options?: useDataConnectQueryOptions<GetEventByIdData>): UseDataConnectQueryResult<GetEventByIdData, GetEventByIdVariables>;

export function useUpdateEventStatus(options?: useDataConnectMutationOptions<UpdateEventStatusData, FirebaseError, UpdateEventStatusVariables>): UseDataConnectMutationResult<UpdateEventStatusData, UpdateEventStatusVariables>;
export function useUpdateEventStatus(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateEventStatusData, FirebaseError, UpdateEventStatusVariables>): UseDataConnectMutationResult<UpdateEventStatusData, UpdateEventStatusVariables>;

export function useMarkEventAsFalseAlarm(options?: useDataConnectMutationOptions<MarkEventAsFalseAlarmData, FirebaseError, MarkEventAsFalseAlarmVariables>): UseDataConnectMutationResult<MarkEventAsFalseAlarmData, MarkEventAsFalseAlarmVariables>;
export function useMarkEventAsFalseAlarm(dc: DataConnect, options?: useDataConnectMutationOptions<MarkEventAsFalseAlarmData, FirebaseError, MarkEventAsFalseAlarmVariables>): UseDataConnectMutationResult<MarkEventAsFalseAlarmData, MarkEventAsFalseAlarmVariables>;

export function useIncrementResponseCount(options?: useDataConnectMutationOptions<IncrementResponseCountData, FirebaseError, IncrementResponseCountVariables>): UseDataConnectMutationResult<IncrementResponseCountData, IncrementResponseCountVariables>;
export function useIncrementResponseCount(dc: DataConnect, options?: useDataConnectMutationOptions<IncrementResponseCountData, FirebaseError, IncrementResponseCountVariables>): UseDataConnectMutationResult<IncrementResponseCountData, IncrementResponseCountVariables>;

export function useDeleteEvent(options?: useDataConnectMutationOptions<DeleteEventData, FirebaseError, DeleteEventVariables>): UseDataConnectMutationResult<DeleteEventData, DeleteEventVariables>;
export function useDeleteEvent(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteEventData, FirebaseError, DeleteEventVariables>): UseDataConnectMutationResult<DeleteEventData, DeleteEventVariables>;

export function useAddEventResponder(options?: useDataConnectMutationOptions<AddEventResponderData, FirebaseError, AddEventResponderVariables>): UseDataConnectMutationResult<AddEventResponderData, AddEventResponderVariables>;
export function useAddEventResponder(dc: DataConnect, options?: useDataConnectMutationOptions<AddEventResponderData, FirebaseError, AddEventResponderVariables>): UseDataConnectMutationResult<AddEventResponderData, AddEventResponderVariables>;

export function useGetAllEventResponders(options?: useDataConnectQueryOptions<GetAllEventRespondersData>): UseDataConnectQueryResult<GetAllEventRespondersData, undefined>;
export function useGetAllEventResponders(dc: DataConnect, options?: useDataConnectQueryOptions<GetAllEventRespondersData>): UseDataConnectQueryResult<GetAllEventRespondersData, undefined>;

export function useUpdateResponderStatus(options?: useDataConnectMutationOptions<UpdateResponderStatusData, FirebaseError, UpdateResponderStatusVariables>): UseDataConnectMutationResult<UpdateResponderStatusData, UpdateResponderStatusVariables>;
export function useUpdateResponderStatus(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateResponderStatusData, FirebaseError, UpdateResponderStatusVariables>): UseDataConnectMutationResult<UpdateResponderStatusData, UpdateResponderStatusVariables>;

export function useResponderLeftEvent(options?: useDataConnectMutationOptions<ResponderLeftEventData, FirebaseError, ResponderLeftEventVariables>): UseDataConnectMutationResult<ResponderLeftEventData, ResponderLeftEventVariables>;
export function useResponderLeftEvent(dc: DataConnect, options?: useDataConnectMutationOptions<ResponderLeftEventData, FirebaseError, ResponderLeftEventVariables>): UseDataConnectMutationResult<ResponderLeftEventData, ResponderLeftEventVariables>;

export function useDeleteEventResponder(options?: useDataConnectMutationOptions<DeleteEventResponderData, FirebaseError, DeleteEventResponderVariables>): UseDataConnectMutationResult<DeleteEventResponderData, DeleteEventResponderVariables>;
export function useDeleteEventResponder(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteEventResponderData, FirebaseError, DeleteEventResponderVariables>): UseDataConnectMutationResult<DeleteEventResponderData, DeleteEventResponderVariables>;

export function useLogLocation(options?: useDataConnectMutationOptions<LogLocationData, FirebaseError, LogLocationVariables>): UseDataConnectMutationResult<LogLocationData, LogLocationVariables>;
export function useLogLocation(dc: DataConnect, options?: useDataConnectMutationOptions<LogLocationData, FirebaseError, LogLocationVariables>): UseDataConnectMutationResult<LogLocationData, LogLocationVariables>;

export function useGetAllLocationLogs(options?: useDataConnectQueryOptions<GetAllLocationLogsData>): UseDataConnectQueryResult<GetAllLocationLogsData, undefined>;
export function useGetAllLocationLogs(dc: DataConnect, options?: useDataConnectQueryOptions<GetAllLocationLogsData>): UseDataConnectQueryResult<GetAllLocationLogsData, undefined>;

export function useDeleteLocationLog(options?: useDataConnectMutationOptions<DeleteLocationLogData, FirebaseError, DeleteLocationLogVariables>): UseDataConnectMutationResult<DeleteLocationLogData, DeleteLocationLogVariables>;
export function useDeleteLocationLog(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteLocationLogData, FirebaseError, DeleteLocationLogVariables>): UseDataConnectMutationResult<DeleteLocationLogData, DeleteLocationLogVariables>;
