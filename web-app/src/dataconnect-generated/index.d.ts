import { ConnectorConfig } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Companies_Key {
  id: UUIDString;
  __typename?: 'Companies_Key';
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

export interface LocationLogs_Key {
  id: UUIDString;
  __typename?: 'LocationLogs_Key';
}

export interface UserCompanies_Key {
  id: UUIDString;
  __typename?: 'UserCompanies_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

