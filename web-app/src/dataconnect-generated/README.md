# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetAllUsers*](#getallusers)
  - [*GetUserById*](#getuserbyid)
  - [*GetAllCompanies*](#getallcompanies)
  - [*GetCompanyById*](#getcompanybyid)
  - [*GetAllUserCompanies*](#getallusercompanies)
  - [*GetAllEmergencyContacts*](#getallemergencycontacts)
  - [*GetAllEvents*](#getallevents)
  - [*GetEventById*](#geteventbyid)
  - [*GetAllEventResponders*](#getalleventresponders)
  - [*GetAllLocationLogs*](#getalllocationlogs)
- [**Mutations**](#mutations)
  - [*CreateUser*](#createuser)
  - [*UpdateUser*](#updateuser)
  - [*UpdateLastLogin*](#updatelastlogin)
  - [*DeactivateUser*](#deactivateuser)
  - [*DeleteUser*](#deleteuser)
  - [*CreateCompany*](#createcompany)
  - [*LinkUserToCompany*](#linkusertocompany)
  - [*UserLeftCompany*](#userleftcompany)
  - [*AddEmergencyContact*](#addemergencycontact)
  - [*UpdateEmergencyContact*](#updateemergencycontact)
  - [*DeleteEmergencyContact*](#deleteemergencycontact)
  - [*CreateEvent*](#createevent)
  - [*UpdateEventStatus*](#updateeventstatus)
  - [*MarkEventAsFalseAlarm*](#markeventasfalsealarm)
  - [*IncrementResponseCount*](#incrementresponsecount)
  - [*DeleteEvent*](#deleteevent)
  - [*AddEventResponder*](#addeventresponder)
  - [*UpdateResponderStatus*](#updateresponderstatus)
  - [*ResponderLeftEvent*](#responderleftevent)
  - [*DeleteEventResponder*](#deleteeventresponder)
  - [*LogLocation*](#loglocation)
  - [*DeleteLocationLog*](#deletelocationlog)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated-react` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated-react';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated-react';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetAllUsers
You can execute the `GetAllUsers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getAllUsers(): QueryPromise<GetAllUsersData, undefined>;

interface GetAllUsersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllUsersData, undefined>;
}
export const getAllUsersRef: GetAllUsersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAllUsers(dc: DataConnect): QueryPromise<GetAllUsersData, undefined>;

interface GetAllUsersRef {
  ...
  (dc: DataConnect): QueryRef<GetAllUsersData, undefined>;
}
export const getAllUsersRef: GetAllUsersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAllUsersRef:
```typescript
const name = getAllUsersRef.operationName;
console.log(name);
```

### Variables
The `GetAllUsers` query has no variables.
### Return Type
Recall that executing the `GetAllUsers` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAllUsersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetAllUsers`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAllUsers } from '@dataconnect/generated-react';


// Call the `getAllUsers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAllUsers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAllUsers(dataConnect);

console.log(data.users);

// Or, you can use the `Promise` API.
getAllUsers().then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

### Using `GetAllUsers`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAllUsersRef } from '@dataconnect/generated-react';


// Call the `getAllUsersRef()` function to get a reference to the query.
const ref = getAllUsersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAllUsersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.users);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

## GetUserById
You can execute the `GetUserById` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUserById(vars: GetUserByIdVariables): QueryPromise<GetUserByIdData, GetUserByIdVariables>;

interface GetUserByIdRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserByIdVariables): QueryRef<GetUserByIdData, GetUserByIdVariables>;
}
export const getUserByIdRef: GetUserByIdRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUserById(dc: DataConnect, vars: GetUserByIdVariables): QueryPromise<GetUserByIdData, GetUserByIdVariables>;

interface GetUserByIdRef {
  ...
  (dc: DataConnect, vars: GetUserByIdVariables): QueryRef<GetUserByIdData, GetUserByIdVariables>;
}
export const getUserByIdRef: GetUserByIdRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserByIdRef:
```typescript
const name = getUserByIdRef.operationName;
console.log(name);
```

### Variables
The `GetUserById` query requires an argument of type `GetUserByIdVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetUserByIdVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetUserById` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserByIdData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetUserById`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUserById, GetUserByIdVariables } from '@dataconnect/generated-react';

// The `GetUserById` query requires an argument of type `GetUserByIdVariables`:
const getUserByIdVars: GetUserByIdVariables = {
  id: ..., 
};

// Call the `getUserById()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUserById(getUserByIdVars);
// Variables can be defined inline as well.
const { data } = await getUserById({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUserById(dataConnect, getUserByIdVars);

console.log(data.user);

// Or, you can use the `Promise` API.
getUserById(getUserByIdVars).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetUserById`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserByIdRef, GetUserByIdVariables } from '@dataconnect/generated-react';

// The `GetUserById` query requires an argument of type `GetUserByIdVariables`:
const getUserByIdVars: GetUserByIdVariables = {
  id: ..., 
};

// Call the `getUserByIdRef()` function to get a reference to the query.
const ref = getUserByIdRef(getUserByIdVars);
// Variables can be defined inline as well.
const ref = getUserByIdRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserByIdRef(dataConnect, getUserByIdVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

## GetAllCompanies
You can execute the `GetAllCompanies` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getAllCompanies(): QueryPromise<GetAllCompaniesData, undefined>;

interface GetAllCompaniesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllCompaniesData, undefined>;
}
export const getAllCompaniesRef: GetAllCompaniesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAllCompanies(dc: DataConnect): QueryPromise<GetAllCompaniesData, undefined>;

interface GetAllCompaniesRef {
  ...
  (dc: DataConnect): QueryRef<GetAllCompaniesData, undefined>;
}
export const getAllCompaniesRef: GetAllCompaniesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAllCompaniesRef:
```typescript
const name = getAllCompaniesRef.operationName;
console.log(name);
```

### Variables
The `GetAllCompanies` query has no variables.
### Return Type
Recall that executing the `GetAllCompanies` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAllCompaniesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetAllCompaniesData {
  companies?: {
    cuid: UUIDString;
    companyName: string;
    addedAt?: TimestampString | null;
  };
}
```
### Using `GetAllCompanies`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAllCompanies } from '@dataconnect/generated-react';


// Call the `getAllCompanies()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAllCompanies();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAllCompanies(dataConnect);

console.log(data.companies);

// Or, you can use the `Promise` API.
getAllCompanies().then((response) => {
  const data = response.data;
  console.log(data.companies);
});
```

### Using `GetAllCompanies`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAllCompaniesRef } from '@dataconnect/generated-react';


// Call the `getAllCompaniesRef()` function to get a reference to the query.
const ref = getAllCompaniesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAllCompaniesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.companies);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.companies);
});
```

## GetCompanyById
You can execute the `GetCompanyById` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getCompanyById(vars: GetCompanyByIdVariables): QueryPromise<GetCompanyByIdData, GetCompanyByIdVariables>;

interface GetCompanyByIdRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCompanyByIdVariables): QueryRef<GetCompanyByIdData, GetCompanyByIdVariables>;
}
export const getCompanyByIdRef: GetCompanyByIdRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getCompanyById(dc: DataConnect, vars: GetCompanyByIdVariables): QueryPromise<GetCompanyByIdData, GetCompanyByIdVariables>;

interface GetCompanyByIdRef {
  ...
  (dc: DataConnect, vars: GetCompanyByIdVariables): QueryRef<GetCompanyByIdData, GetCompanyByIdVariables>;
}
export const getCompanyByIdRef: GetCompanyByIdRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getCompanyByIdRef:
```typescript
const name = getCompanyByIdRef.operationName;
console.log(name);
```

### Variables
The `GetCompanyById` query requires an argument of type `GetCompanyByIdVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetCompanyByIdVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetCompanyById` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetCompanyByIdData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetCompanyByIdData {
  companies?: {
    cuid: UUIDString;
    companyName: string;
    addedAt?: TimestampString | null;
  };
}
```
### Using `GetCompanyById`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getCompanyById, GetCompanyByIdVariables } from '@dataconnect/generated-react';

// The `GetCompanyById` query requires an argument of type `GetCompanyByIdVariables`:
const getCompanyByIdVars: GetCompanyByIdVariables = {
  id: ..., 
};

// Call the `getCompanyById()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getCompanyById(getCompanyByIdVars);
// Variables can be defined inline as well.
const { data } = await getCompanyById({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getCompanyById(dataConnect, getCompanyByIdVars);

console.log(data.companies);

// Or, you can use the `Promise` API.
getCompanyById(getCompanyByIdVars).then((response) => {
  const data = response.data;
  console.log(data.companies);
});
```

### Using `GetCompanyById`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getCompanyByIdRef, GetCompanyByIdVariables } from '@dataconnect/generated-react';

// The `GetCompanyById` query requires an argument of type `GetCompanyByIdVariables`:
const getCompanyByIdVars: GetCompanyByIdVariables = {
  id: ..., 
};

// Call the `getCompanyByIdRef()` function to get a reference to the query.
const ref = getCompanyByIdRef(getCompanyByIdVars);
// Variables can be defined inline as well.
const ref = getCompanyByIdRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getCompanyByIdRef(dataConnect, getCompanyByIdVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.companies);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.companies);
});
```

## GetAllUserCompanies
You can execute the `GetAllUserCompanies` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getAllUserCompanies(): QueryPromise<GetAllUserCompaniesData, undefined>;

interface GetAllUserCompaniesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllUserCompaniesData, undefined>;
}
export const getAllUserCompaniesRef: GetAllUserCompaniesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAllUserCompanies(dc: DataConnect): QueryPromise<GetAllUserCompaniesData, undefined>;

interface GetAllUserCompaniesRef {
  ...
  (dc: DataConnect): QueryRef<GetAllUserCompaniesData, undefined>;
}
export const getAllUserCompaniesRef: GetAllUserCompaniesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAllUserCompaniesRef:
```typescript
const name = getAllUserCompaniesRef.operationName;
console.log(name);
```

### Variables
The `GetAllUserCompanies` query has no variables.
### Return Type
Recall that executing the `GetAllUserCompanies` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAllUserCompaniesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetAllUserCompaniesData {
  userCompanies?: {
    ucid: UUIDString;
    userId: UUIDString;
    companyId: UUIDString;
    joinedAt?: TimestampString | null;
    leftAt?: TimestampString | null;
  };
}
```
### Using `GetAllUserCompanies`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAllUserCompanies } from '@dataconnect/generated-react';


// Call the `getAllUserCompanies()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAllUserCompanies();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAllUserCompanies(dataConnect);

console.log(data.userCompanies);

// Or, you can use the `Promise` API.
getAllUserCompanies().then((response) => {
  const data = response.data;
  console.log(data.userCompanies);
});
```

### Using `GetAllUserCompanies`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAllUserCompaniesRef } from '@dataconnect/generated-react';


// Call the `getAllUserCompaniesRef()` function to get a reference to the query.
const ref = getAllUserCompaniesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAllUserCompaniesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.userCompanies);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.userCompanies);
});
```

## GetAllEmergencyContacts
You can execute the `GetAllEmergencyContacts` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getAllEmergencyContacts(): QueryPromise<GetAllEmergencyContactsData, undefined>;

interface GetAllEmergencyContactsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllEmergencyContactsData, undefined>;
}
export const getAllEmergencyContactsRef: GetAllEmergencyContactsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAllEmergencyContacts(dc: DataConnect): QueryPromise<GetAllEmergencyContactsData, undefined>;

interface GetAllEmergencyContactsRef {
  ...
  (dc: DataConnect): QueryRef<GetAllEmergencyContactsData, undefined>;
}
export const getAllEmergencyContactsRef: GetAllEmergencyContactsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAllEmergencyContactsRef:
```typescript
const name = getAllEmergencyContactsRef.operationName;
console.log(name);
```

### Variables
The `GetAllEmergencyContacts` query has no variables.
### Return Type
Recall that executing the `GetAllEmergencyContacts` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAllEmergencyContactsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetAllEmergencyContacts`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAllEmergencyContacts } from '@dataconnect/generated-react';


// Call the `getAllEmergencyContacts()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAllEmergencyContacts();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAllEmergencyContacts(dataConnect);

console.log(data.emergencyContacts);

// Or, you can use the `Promise` API.
getAllEmergencyContacts().then((response) => {
  const data = response.data;
  console.log(data.emergencyContacts);
});
```

### Using `GetAllEmergencyContacts`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAllEmergencyContactsRef } from '@dataconnect/generated-react';


// Call the `getAllEmergencyContactsRef()` function to get a reference to the query.
const ref = getAllEmergencyContactsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAllEmergencyContactsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.emergencyContacts);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.emergencyContacts);
});
```

## GetAllEvents
You can execute the `GetAllEvents` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getAllEvents(): QueryPromise<GetAllEventsData, undefined>;

interface GetAllEventsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllEventsData, undefined>;
}
export const getAllEventsRef: GetAllEventsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAllEvents(dc: DataConnect): QueryPromise<GetAllEventsData, undefined>;

interface GetAllEventsRef {
  ...
  (dc: DataConnect): QueryRef<GetAllEventsData, undefined>;
}
export const getAllEventsRef: GetAllEventsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAllEventsRef:
```typescript
const name = getAllEventsRef.operationName;
console.log(name);
```

### Variables
The `GetAllEvents` query has no variables.
### Return Type
Recall that executing the `GetAllEvents` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAllEventsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetAllEvents`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAllEvents } from '@dataconnect/generated-react';


// Call the `getAllEvents()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAllEvents();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAllEvents(dataConnect);

console.log(data.events);

// Or, you can use the `Promise` API.
getAllEvents().then((response) => {
  const data = response.data;
  console.log(data.events);
});
```

### Using `GetAllEvents`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAllEventsRef } from '@dataconnect/generated-react';


// Call the `getAllEventsRef()` function to get a reference to the query.
const ref = getAllEventsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAllEventsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.events);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.events);
});
```

## GetEventById
You can execute the `GetEventById` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getEventById(vars: GetEventByIdVariables): QueryPromise<GetEventByIdData, GetEventByIdVariables>;

interface GetEventByIdRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetEventByIdVariables): QueryRef<GetEventByIdData, GetEventByIdVariables>;
}
export const getEventByIdRef: GetEventByIdRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getEventById(dc: DataConnect, vars: GetEventByIdVariables): QueryPromise<GetEventByIdData, GetEventByIdVariables>;

interface GetEventByIdRef {
  ...
  (dc: DataConnect, vars: GetEventByIdVariables): QueryRef<GetEventByIdData, GetEventByIdVariables>;
}
export const getEventByIdRef: GetEventByIdRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getEventByIdRef:
```typescript
const name = getEventByIdRef.operationName;
console.log(name);
```

### Variables
The `GetEventById` query requires an argument of type `GetEventByIdVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetEventByIdVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetEventById` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetEventByIdData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetEventById`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getEventById, GetEventByIdVariables } from '@dataconnect/generated-react';

// The `GetEventById` query requires an argument of type `GetEventByIdVariables`:
const getEventByIdVars: GetEventByIdVariables = {
  id: ..., 
};

// Call the `getEventById()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getEventById(getEventByIdVars);
// Variables can be defined inline as well.
const { data } = await getEventById({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getEventById(dataConnect, getEventByIdVars);

console.log(data.events);

// Or, you can use the `Promise` API.
getEventById(getEventByIdVars).then((response) => {
  const data = response.data;
  console.log(data.events);
});
```

### Using `GetEventById`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getEventByIdRef, GetEventByIdVariables } from '@dataconnect/generated-react';

// The `GetEventById` query requires an argument of type `GetEventByIdVariables`:
const getEventByIdVars: GetEventByIdVariables = {
  id: ..., 
};

// Call the `getEventByIdRef()` function to get a reference to the query.
const ref = getEventByIdRef(getEventByIdVars);
// Variables can be defined inline as well.
const ref = getEventByIdRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getEventByIdRef(dataConnect, getEventByIdVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.events);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.events);
});
```

## GetAllEventResponders
You can execute the `GetAllEventResponders` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getAllEventResponders(): QueryPromise<GetAllEventRespondersData, undefined>;

interface GetAllEventRespondersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllEventRespondersData, undefined>;
}
export const getAllEventRespondersRef: GetAllEventRespondersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAllEventResponders(dc: DataConnect): QueryPromise<GetAllEventRespondersData, undefined>;

interface GetAllEventRespondersRef {
  ...
  (dc: DataConnect): QueryRef<GetAllEventRespondersData, undefined>;
}
export const getAllEventRespondersRef: GetAllEventRespondersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAllEventRespondersRef:
```typescript
const name = getAllEventRespondersRef.operationName;
console.log(name);
```

### Variables
The `GetAllEventResponders` query has no variables.
### Return Type
Recall that executing the `GetAllEventResponders` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAllEventRespondersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetAllEventResponders`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAllEventResponders } from '@dataconnect/generated-react';


// Call the `getAllEventResponders()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAllEventResponders();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAllEventResponders(dataConnect);

console.log(data.eventResponders);

// Or, you can use the `Promise` API.
getAllEventResponders().then((response) => {
  const data = response.data;
  console.log(data.eventResponders);
});
```

### Using `GetAllEventResponders`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAllEventRespondersRef } from '@dataconnect/generated-react';


// Call the `getAllEventRespondersRef()` function to get a reference to the query.
const ref = getAllEventRespondersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAllEventRespondersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.eventResponders);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.eventResponders);
});
```

## GetAllLocationLogs
You can execute the `GetAllLocationLogs` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getAllLocationLogs(): QueryPromise<GetAllLocationLogsData, undefined>;

interface GetAllLocationLogsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllLocationLogsData, undefined>;
}
export const getAllLocationLogsRef: GetAllLocationLogsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAllLocationLogs(dc: DataConnect): QueryPromise<GetAllLocationLogsData, undefined>;

interface GetAllLocationLogsRef {
  ...
  (dc: DataConnect): QueryRef<GetAllLocationLogsData, undefined>;
}
export const getAllLocationLogsRef: GetAllLocationLogsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAllLocationLogsRef:
```typescript
const name = getAllLocationLogsRef.operationName;
console.log(name);
```

### Variables
The `GetAllLocationLogs` query has no variables.
### Return Type
Recall that executing the `GetAllLocationLogs` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAllLocationLogsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetAllLocationLogsData {
  locationLogs?: {
    luid: UUIDString;
    userId: UUIDString;
    latitude?: number | null;
    longitude?: number | null;
    recordedAt?: TimestampString | null;
  };
}
```
### Using `GetAllLocationLogs`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAllLocationLogs } from '@dataconnect/generated-react';


// Call the `getAllLocationLogs()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAllLocationLogs();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAllLocationLogs(dataConnect);

console.log(data.locationLogs);

// Or, you can use the `Promise` API.
getAllLocationLogs().then((response) => {
  const data = response.data;
  console.log(data.locationLogs);
});
```

### Using `GetAllLocationLogs`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAllLocationLogsRef } from '@dataconnect/generated-react';


// Call the `getAllLocationLogsRef()` function to get a reference to the query.
const ref = getAllLocationLogsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAllLocationLogsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.locationLogs);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.locationLogs);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateUser
You can execute the `CreateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

interface CreateUserRef {
  ...
  (dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
}
export const createUserRef: CreateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserRef:
```typescript
const name = createUserRef.operationName;
console.log(name);
```

### Variables
The `CreateUser` mutation requires an argument of type `CreateUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateUserVariables {
  name: string;
  phoneNumber: string;
  isPhoneVerified: boolean;
  email?: string | null;
  vehicleType?: string | null;
  pushToken?: string | null;
}
```
### Return Type
Recall that executing the `CreateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUserData {
  user_insert: User_Key;
}
```
### Using `CreateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUser, CreateUserVariables } from '@dataconnect/generated-react';

// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  name: ..., 
  phoneNumber: ..., 
  isPhoneVerified: ..., 
  email: ..., // optional
  vehicleType: ..., // optional
  pushToken: ..., // optional
};

// Call the `createUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUser(createUserVars);
// Variables can be defined inline as well.
const { data } = await createUser({ name: ..., phoneNumber: ..., isPhoneVerified: ..., email: ..., vehicleType: ..., pushToken: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUser(dataConnect, createUserVars);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createUser(createUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserRef, CreateUserVariables } from '@dataconnect/generated-react';

// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  name: ..., 
  phoneNumber: ..., 
  isPhoneVerified: ..., 
  email: ..., // optional
  vehicleType: ..., // optional
  pushToken: ..., // optional
};

// Call the `createUserRef()` function to get a reference to the mutation.
const ref = createUserRef(createUserVars);
// Variables can be defined inline as well.
const ref = createUserRef({ name: ..., phoneNumber: ..., isPhoneVerified: ..., email: ..., vehicleType: ..., pushToken: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserRef(dataConnect, createUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## UpdateUser
You can execute the `UpdateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateUser(vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

interface UpdateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
}
export const updateUserRef: UpdateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateUser(dc: DataConnect, vars: UpdateUserVariables): MutationPromise<UpdateUserData, UpdateUserVariables>;

interface UpdateUserRef {
  ...
  (dc: DataConnect, vars: UpdateUserVariables): MutationRef<UpdateUserData, UpdateUserVariables>;
}
export const updateUserRef: UpdateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateUserRef:
```typescript
const name = updateUserRef.operationName;
console.log(name);
```

### Variables
The `UpdateUser` mutation requires an argument of type `UpdateUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
```
### Return Type
Recall that executing the `UpdateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateUserData {
  user_update?: User_Key | null;
}
```
### Using `UpdateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateUser, UpdateUserVariables } from '@dataconnect/generated-react';

// The `UpdateUser` mutation requires an argument of type `UpdateUserVariables`:
const updateUserVars: UpdateUserVariables = {
  uuid: ..., 
  name: ..., // optional
  email: ..., // optional
  photoUrl: ..., // optional
  dob: ..., // optional
  gender: ..., // optional
  bloodGroup: ..., // optional
  vehicleType: ..., // optional
};

// Call the `updateUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateUser(updateUserVars);
// Variables can be defined inline as well.
const { data } = await updateUser({ uuid: ..., name: ..., email: ..., photoUrl: ..., dob: ..., gender: ..., bloodGroup: ..., vehicleType: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateUser(dataConnect, updateUserVars);

console.log(data.user_update);

// Or, you can use the `Promise` API.
updateUser(updateUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `UpdateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateUserRef, UpdateUserVariables } from '@dataconnect/generated-react';

// The `UpdateUser` mutation requires an argument of type `UpdateUserVariables`:
const updateUserVars: UpdateUserVariables = {
  uuid: ..., 
  name: ..., // optional
  email: ..., // optional
  photoUrl: ..., // optional
  dob: ..., // optional
  gender: ..., // optional
  bloodGroup: ..., // optional
  vehicleType: ..., // optional
};

// Call the `updateUserRef()` function to get a reference to the mutation.
const ref = updateUserRef(updateUserVars);
// Variables can be defined inline as well.
const ref = updateUserRef({ uuid: ..., name: ..., email: ..., photoUrl: ..., dob: ..., gender: ..., bloodGroup: ..., vehicleType: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateUserRef(dataConnect, updateUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

## UpdateLastLogin
You can execute the `UpdateLastLogin` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateLastLogin(vars: UpdateLastLoginVariables): MutationPromise<UpdateLastLoginData, UpdateLastLoginVariables>;

interface UpdateLastLoginRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateLastLoginVariables): MutationRef<UpdateLastLoginData, UpdateLastLoginVariables>;
}
export const updateLastLoginRef: UpdateLastLoginRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateLastLogin(dc: DataConnect, vars: UpdateLastLoginVariables): MutationPromise<UpdateLastLoginData, UpdateLastLoginVariables>;

interface UpdateLastLoginRef {
  ...
  (dc: DataConnect, vars: UpdateLastLoginVariables): MutationRef<UpdateLastLoginData, UpdateLastLoginVariables>;
}
export const updateLastLoginRef: UpdateLastLoginRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateLastLoginRef:
```typescript
const name = updateLastLoginRef.operationName;
console.log(name);
```

### Variables
The `UpdateLastLogin` mutation requires an argument of type `UpdateLastLoginVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateLastLoginVariables {
  uuid: UUIDString;
  lastLogin: TimestampString;
}
```
### Return Type
Recall that executing the `UpdateLastLogin` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateLastLoginData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateLastLoginData {
  user_update?: User_Key | null;
}
```
### Using `UpdateLastLogin`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateLastLogin, UpdateLastLoginVariables } from '@dataconnect/generated-react';

// The `UpdateLastLogin` mutation requires an argument of type `UpdateLastLoginVariables`:
const updateLastLoginVars: UpdateLastLoginVariables = {
  uuid: ..., 
  lastLogin: ..., 
};

// Call the `updateLastLogin()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateLastLogin(updateLastLoginVars);
// Variables can be defined inline as well.
const { data } = await updateLastLogin({ uuid: ..., lastLogin: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateLastLogin(dataConnect, updateLastLoginVars);

console.log(data.user_update);

// Or, you can use the `Promise` API.
updateLastLogin(updateLastLoginVars).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `UpdateLastLogin`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateLastLoginRef, UpdateLastLoginVariables } from '@dataconnect/generated-react';

// The `UpdateLastLogin` mutation requires an argument of type `UpdateLastLoginVariables`:
const updateLastLoginVars: UpdateLastLoginVariables = {
  uuid: ..., 
  lastLogin: ..., 
};

// Call the `updateLastLoginRef()` function to get a reference to the mutation.
const ref = updateLastLoginRef(updateLastLoginVars);
// Variables can be defined inline as well.
const ref = updateLastLoginRef({ uuid: ..., lastLogin: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateLastLoginRef(dataConnect, updateLastLoginVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

## DeactivateUser
You can execute the `DeactivateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deactivateUser(vars: DeactivateUserVariables): MutationPromise<DeactivateUserData, DeactivateUserVariables>;

interface DeactivateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeactivateUserVariables): MutationRef<DeactivateUserData, DeactivateUserVariables>;
}
export const deactivateUserRef: DeactivateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deactivateUser(dc: DataConnect, vars: DeactivateUserVariables): MutationPromise<DeactivateUserData, DeactivateUserVariables>;

interface DeactivateUserRef {
  ...
  (dc: DataConnect, vars: DeactivateUserVariables): MutationRef<DeactivateUserData, DeactivateUserVariables>;
}
export const deactivateUserRef: DeactivateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deactivateUserRef:
```typescript
const name = deactivateUserRef.operationName;
console.log(name);
```

### Variables
The `DeactivateUser` mutation requires an argument of type `DeactivateUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeactivateUserVariables {
  uuid: UUIDString;
}
```
### Return Type
Recall that executing the `DeactivateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeactivateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeactivateUserData {
  user_update?: User_Key | null;
}
```
### Using `DeactivateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deactivateUser, DeactivateUserVariables } from '@dataconnect/generated-react';

// The `DeactivateUser` mutation requires an argument of type `DeactivateUserVariables`:
const deactivateUserVars: DeactivateUserVariables = {
  uuid: ..., 
};

// Call the `deactivateUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deactivateUser(deactivateUserVars);
// Variables can be defined inline as well.
const { data } = await deactivateUser({ uuid: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deactivateUser(dataConnect, deactivateUserVars);

console.log(data.user_update);

// Or, you can use the `Promise` API.
deactivateUser(deactivateUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `DeactivateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deactivateUserRef, DeactivateUserVariables } from '@dataconnect/generated-react';

// The `DeactivateUser` mutation requires an argument of type `DeactivateUserVariables`:
const deactivateUserVars: DeactivateUserVariables = {
  uuid: ..., 
};

// Call the `deactivateUserRef()` function to get a reference to the mutation.
const ref = deactivateUserRef(deactivateUserVars);
// Variables can be defined inline as well.
const ref = deactivateUserRef({ uuid: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deactivateUserRef(dataConnect, deactivateUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

## DeleteUser
You can execute the `DeleteUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteUser(vars: DeleteUserVariables): MutationPromise<DeleteUserData, DeleteUserVariables>;

interface DeleteUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteUserVariables): MutationRef<DeleteUserData, DeleteUserVariables>;
}
export const deleteUserRef: DeleteUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteUser(dc: DataConnect, vars: DeleteUserVariables): MutationPromise<DeleteUserData, DeleteUserVariables>;

interface DeleteUserRef {
  ...
  (dc: DataConnect, vars: DeleteUserVariables): MutationRef<DeleteUserData, DeleteUserVariables>;
}
export const deleteUserRef: DeleteUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteUserRef:
```typescript
const name = deleteUserRef.operationName;
console.log(name);
```

### Variables
The `DeleteUser` mutation requires an argument of type `DeleteUserVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteUserVariables {
  uuid: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteUserData {
  user_delete?: User_Key | null;
}
```
### Using `DeleteUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteUser, DeleteUserVariables } from '@dataconnect/generated-react';

// The `DeleteUser` mutation requires an argument of type `DeleteUserVariables`:
const deleteUserVars: DeleteUserVariables = {
  uuid: ..., 
};

// Call the `deleteUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteUser(deleteUserVars);
// Variables can be defined inline as well.
const { data } = await deleteUser({ uuid: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteUser(dataConnect, deleteUserVars);

console.log(data.user_delete);

// Or, you can use the `Promise` API.
deleteUser(deleteUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_delete);
});
```

### Using `DeleteUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteUserRef, DeleteUserVariables } from '@dataconnect/generated-react';

// The `DeleteUser` mutation requires an argument of type `DeleteUserVariables`:
const deleteUserVars: DeleteUserVariables = {
  uuid: ..., 
};

// Call the `deleteUserRef()` function to get a reference to the mutation.
const ref = deleteUserRef(deleteUserVars);
// Variables can be defined inline as well.
const ref = deleteUserRef({ uuid: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteUserRef(dataConnect, deleteUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_delete);
});
```

## CreateCompany
You can execute the `CreateCompany` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createCompany(vars: CreateCompanyVariables): MutationPromise<CreateCompanyData, CreateCompanyVariables>;

interface CreateCompanyRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateCompanyVariables): MutationRef<CreateCompanyData, CreateCompanyVariables>;
}
export const createCompanyRef: CreateCompanyRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createCompany(dc: DataConnect, vars: CreateCompanyVariables): MutationPromise<CreateCompanyData, CreateCompanyVariables>;

interface CreateCompanyRef {
  ...
  (dc: DataConnect, vars: CreateCompanyVariables): MutationRef<CreateCompanyData, CreateCompanyVariables>;
}
export const createCompanyRef: CreateCompanyRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createCompanyRef:
```typescript
const name = createCompanyRef.operationName;
console.log(name);
```

### Variables
The `CreateCompany` mutation requires an argument of type `CreateCompanyVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateCompanyVariables {
  companyName: string;
}
```
### Return Type
Recall that executing the `CreateCompany` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateCompanyData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateCompanyData {
  companies_insert: Companies_Key;
}
```
### Using `CreateCompany`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createCompany, CreateCompanyVariables } from '@dataconnect/generated-react';

// The `CreateCompany` mutation requires an argument of type `CreateCompanyVariables`:
const createCompanyVars: CreateCompanyVariables = {
  companyName: ..., 
};

// Call the `createCompany()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createCompany(createCompanyVars);
// Variables can be defined inline as well.
const { data } = await createCompany({ companyName: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createCompany(dataConnect, createCompanyVars);

console.log(data.companies_insert);

// Or, you can use the `Promise` API.
createCompany(createCompanyVars).then((response) => {
  const data = response.data;
  console.log(data.companies_insert);
});
```

### Using `CreateCompany`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createCompanyRef, CreateCompanyVariables } from '@dataconnect/generated-react';

// The `CreateCompany` mutation requires an argument of type `CreateCompanyVariables`:
const createCompanyVars: CreateCompanyVariables = {
  companyName: ..., 
};

// Call the `createCompanyRef()` function to get a reference to the mutation.
const ref = createCompanyRef(createCompanyVars);
// Variables can be defined inline as well.
const ref = createCompanyRef({ companyName: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createCompanyRef(dataConnect, createCompanyVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.companies_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.companies_insert);
});
```

## LinkUserToCompany
You can execute the `LinkUserToCompany` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
linkUserToCompany(vars: LinkUserToCompanyVariables): MutationPromise<LinkUserToCompanyData, LinkUserToCompanyVariables>;

interface LinkUserToCompanyRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: LinkUserToCompanyVariables): MutationRef<LinkUserToCompanyData, LinkUserToCompanyVariables>;
}
export const linkUserToCompanyRef: LinkUserToCompanyRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
linkUserToCompany(dc: DataConnect, vars: LinkUserToCompanyVariables): MutationPromise<LinkUserToCompanyData, LinkUserToCompanyVariables>;

interface LinkUserToCompanyRef {
  ...
  (dc: DataConnect, vars: LinkUserToCompanyVariables): MutationRef<LinkUserToCompanyData, LinkUserToCompanyVariables>;
}
export const linkUserToCompanyRef: LinkUserToCompanyRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the linkUserToCompanyRef:
```typescript
const name = linkUserToCompanyRef.operationName;
console.log(name);
```

### Variables
The `LinkUserToCompany` mutation requires an argument of type `LinkUserToCompanyVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface LinkUserToCompanyVariables {
  userId: UUIDString;
  companyId: UUIDString;
}
```
### Return Type
Recall that executing the `LinkUserToCompany` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `LinkUserToCompanyData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface LinkUserToCompanyData {
  userCompanies_insert: UserCompanies_Key;
}
```
### Using `LinkUserToCompany`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, linkUserToCompany, LinkUserToCompanyVariables } from '@dataconnect/generated-react';

// The `LinkUserToCompany` mutation requires an argument of type `LinkUserToCompanyVariables`:
const linkUserToCompanyVars: LinkUserToCompanyVariables = {
  userId: ..., 
  companyId: ..., 
};

// Call the `linkUserToCompany()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await linkUserToCompany(linkUserToCompanyVars);
// Variables can be defined inline as well.
const { data } = await linkUserToCompany({ userId: ..., companyId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await linkUserToCompany(dataConnect, linkUserToCompanyVars);

console.log(data.userCompanies_insert);

// Or, you can use the `Promise` API.
linkUserToCompany(linkUserToCompanyVars).then((response) => {
  const data = response.data;
  console.log(data.userCompanies_insert);
});
```

### Using `LinkUserToCompany`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, linkUserToCompanyRef, LinkUserToCompanyVariables } from '@dataconnect/generated-react';

// The `LinkUserToCompany` mutation requires an argument of type `LinkUserToCompanyVariables`:
const linkUserToCompanyVars: LinkUserToCompanyVariables = {
  userId: ..., 
  companyId: ..., 
};

// Call the `linkUserToCompanyRef()` function to get a reference to the mutation.
const ref = linkUserToCompanyRef(linkUserToCompanyVars);
// Variables can be defined inline as well.
const ref = linkUserToCompanyRef({ userId: ..., companyId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = linkUserToCompanyRef(dataConnect, linkUserToCompanyVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.userCompanies_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.userCompanies_insert);
});
```

## UserLeftCompany
You can execute the `UserLeftCompany` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
userLeftCompany(vars: UserLeftCompanyVariables): MutationPromise<UserLeftCompanyData, UserLeftCompanyVariables>;

interface UserLeftCompanyRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UserLeftCompanyVariables): MutationRef<UserLeftCompanyData, UserLeftCompanyVariables>;
}
export const userLeftCompanyRef: UserLeftCompanyRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
userLeftCompany(dc: DataConnect, vars: UserLeftCompanyVariables): MutationPromise<UserLeftCompanyData, UserLeftCompanyVariables>;

interface UserLeftCompanyRef {
  ...
  (dc: DataConnect, vars: UserLeftCompanyVariables): MutationRef<UserLeftCompanyData, UserLeftCompanyVariables>;
}
export const userLeftCompanyRef: UserLeftCompanyRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the userLeftCompanyRef:
```typescript
const name = userLeftCompanyRef.operationName;
console.log(name);
```

### Variables
The `UserLeftCompany` mutation requires an argument of type `UserLeftCompanyVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UserLeftCompanyVariables {
  ucid: UUIDString;
  leftAt: TimestampString;
}
```
### Return Type
Recall that executing the `UserLeftCompany` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UserLeftCompanyData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UserLeftCompanyData {
  userCompanies_update?: UserCompanies_Key | null;
}
```
### Using `UserLeftCompany`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, userLeftCompany, UserLeftCompanyVariables } from '@dataconnect/generated-react';

// The `UserLeftCompany` mutation requires an argument of type `UserLeftCompanyVariables`:
const userLeftCompanyVars: UserLeftCompanyVariables = {
  ucid: ..., 
  leftAt: ..., 
};

// Call the `userLeftCompany()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await userLeftCompany(userLeftCompanyVars);
// Variables can be defined inline as well.
const { data } = await userLeftCompany({ ucid: ..., leftAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await userLeftCompany(dataConnect, userLeftCompanyVars);

console.log(data.userCompanies_update);

// Or, you can use the `Promise` API.
userLeftCompany(userLeftCompanyVars).then((response) => {
  const data = response.data;
  console.log(data.userCompanies_update);
});
```

### Using `UserLeftCompany`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, userLeftCompanyRef, UserLeftCompanyVariables } from '@dataconnect/generated-react';

// The `UserLeftCompany` mutation requires an argument of type `UserLeftCompanyVariables`:
const userLeftCompanyVars: UserLeftCompanyVariables = {
  ucid: ..., 
  leftAt: ..., 
};

// Call the `userLeftCompanyRef()` function to get a reference to the mutation.
const ref = userLeftCompanyRef(userLeftCompanyVars);
// Variables can be defined inline as well.
const ref = userLeftCompanyRef({ ucid: ..., leftAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = userLeftCompanyRef(dataConnect, userLeftCompanyVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.userCompanies_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.userCompanies_update);
});
```

## AddEmergencyContact
You can execute the `AddEmergencyContact` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addEmergencyContact(vars: AddEmergencyContactVariables): MutationPromise<AddEmergencyContactData, AddEmergencyContactVariables>;

interface AddEmergencyContactRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddEmergencyContactVariables): MutationRef<AddEmergencyContactData, AddEmergencyContactVariables>;
}
export const addEmergencyContactRef: AddEmergencyContactRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addEmergencyContact(dc: DataConnect, vars: AddEmergencyContactVariables): MutationPromise<AddEmergencyContactData, AddEmergencyContactVariables>;

interface AddEmergencyContactRef {
  ...
  (dc: DataConnect, vars: AddEmergencyContactVariables): MutationRef<AddEmergencyContactData, AddEmergencyContactVariables>;
}
export const addEmergencyContactRef: AddEmergencyContactRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addEmergencyContactRef:
```typescript
const name = addEmergencyContactRef.operationName;
console.log(name);
```

### Variables
The `AddEmergencyContact` mutation requires an argument of type `AddEmergencyContactVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddEmergencyContactVariables {
  userId: UUIDString;
  ecName: string;
  phoneNumber: string;
  relation?: string | null;
}
```
### Return Type
Recall that executing the `AddEmergencyContact` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddEmergencyContactData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddEmergencyContactData {
  emergencyContacts_insert: EmergencyContacts_Key;
}
```
### Using `AddEmergencyContact`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addEmergencyContact, AddEmergencyContactVariables } from '@dataconnect/generated-react';

// The `AddEmergencyContact` mutation requires an argument of type `AddEmergencyContactVariables`:
const addEmergencyContactVars: AddEmergencyContactVariables = {
  userId: ..., 
  ecName: ..., 
  phoneNumber: ..., 
  relation: ..., // optional
};

// Call the `addEmergencyContact()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addEmergencyContact(addEmergencyContactVars);
// Variables can be defined inline as well.
const { data } = await addEmergencyContact({ userId: ..., ecName: ..., phoneNumber: ..., relation: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addEmergencyContact(dataConnect, addEmergencyContactVars);

console.log(data.emergencyContacts_insert);

// Or, you can use the `Promise` API.
addEmergencyContact(addEmergencyContactVars).then((response) => {
  const data = response.data;
  console.log(data.emergencyContacts_insert);
});
```

### Using `AddEmergencyContact`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addEmergencyContactRef, AddEmergencyContactVariables } from '@dataconnect/generated-react';

// The `AddEmergencyContact` mutation requires an argument of type `AddEmergencyContactVariables`:
const addEmergencyContactVars: AddEmergencyContactVariables = {
  userId: ..., 
  ecName: ..., 
  phoneNumber: ..., 
  relation: ..., // optional
};

// Call the `addEmergencyContactRef()` function to get a reference to the mutation.
const ref = addEmergencyContactRef(addEmergencyContactVars);
// Variables can be defined inline as well.
const ref = addEmergencyContactRef({ userId: ..., ecName: ..., phoneNumber: ..., relation: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addEmergencyContactRef(dataConnect, addEmergencyContactVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.emergencyContacts_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.emergencyContacts_insert);
});
```

## UpdateEmergencyContact
You can execute the `UpdateEmergencyContact` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateEmergencyContact(vars: UpdateEmergencyContactVariables): MutationPromise<UpdateEmergencyContactData, UpdateEmergencyContactVariables>;

interface UpdateEmergencyContactRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateEmergencyContactVariables): MutationRef<UpdateEmergencyContactData, UpdateEmergencyContactVariables>;
}
export const updateEmergencyContactRef: UpdateEmergencyContactRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateEmergencyContact(dc: DataConnect, vars: UpdateEmergencyContactVariables): MutationPromise<UpdateEmergencyContactData, UpdateEmergencyContactVariables>;

interface UpdateEmergencyContactRef {
  ...
  (dc: DataConnect, vars: UpdateEmergencyContactVariables): MutationRef<UpdateEmergencyContactData, UpdateEmergencyContactVariables>;
}
export const updateEmergencyContactRef: UpdateEmergencyContactRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateEmergencyContactRef:
```typescript
const name = updateEmergencyContactRef.operationName;
console.log(name);
```

### Variables
The `UpdateEmergencyContact` mutation requires an argument of type `UpdateEmergencyContactVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateEmergencyContactVariables {
  ecid: UUIDString;
  ecName?: string | null;
  phoneNumber?: string | null;
  relation?: string | null;
}
```
### Return Type
Recall that executing the `UpdateEmergencyContact` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateEmergencyContactData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateEmergencyContactData {
  emergencyContacts_update?: EmergencyContacts_Key | null;
}
```
### Using `UpdateEmergencyContact`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateEmergencyContact, UpdateEmergencyContactVariables } from '@dataconnect/generated-react';

// The `UpdateEmergencyContact` mutation requires an argument of type `UpdateEmergencyContactVariables`:
const updateEmergencyContactVars: UpdateEmergencyContactVariables = {
  ecid: ..., 
  ecName: ..., // optional
  phoneNumber: ..., // optional
  relation: ..., // optional
};

// Call the `updateEmergencyContact()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateEmergencyContact(updateEmergencyContactVars);
// Variables can be defined inline as well.
const { data } = await updateEmergencyContact({ ecid: ..., ecName: ..., phoneNumber: ..., relation: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateEmergencyContact(dataConnect, updateEmergencyContactVars);

console.log(data.emergencyContacts_update);

// Or, you can use the `Promise` API.
updateEmergencyContact(updateEmergencyContactVars).then((response) => {
  const data = response.data;
  console.log(data.emergencyContacts_update);
});
```

### Using `UpdateEmergencyContact`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateEmergencyContactRef, UpdateEmergencyContactVariables } from '@dataconnect/generated-react';

// The `UpdateEmergencyContact` mutation requires an argument of type `UpdateEmergencyContactVariables`:
const updateEmergencyContactVars: UpdateEmergencyContactVariables = {
  ecid: ..., 
  ecName: ..., // optional
  phoneNumber: ..., // optional
  relation: ..., // optional
};

// Call the `updateEmergencyContactRef()` function to get a reference to the mutation.
const ref = updateEmergencyContactRef(updateEmergencyContactVars);
// Variables can be defined inline as well.
const ref = updateEmergencyContactRef({ ecid: ..., ecName: ..., phoneNumber: ..., relation: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateEmergencyContactRef(dataConnect, updateEmergencyContactVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.emergencyContacts_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.emergencyContacts_update);
});
```

## DeleteEmergencyContact
You can execute the `DeleteEmergencyContact` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteEmergencyContact(vars: DeleteEmergencyContactVariables): MutationPromise<DeleteEmergencyContactData, DeleteEmergencyContactVariables>;

interface DeleteEmergencyContactRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteEmergencyContactVariables): MutationRef<DeleteEmergencyContactData, DeleteEmergencyContactVariables>;
}
export const deleteEmergencyContactRef: DeleteEmergencyContactRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteEmergencyContact(dc: DataConnect, vars: DeleteEmergencyContactVariables): MutationPromise<DeleteEmergencyContactData, DeleteEmergencyContactVariables>;

interface DeleteEmergencyContactRef {
  ...
  (dc: DataConnect, vars: DeleteEmergencyContactVariables): MutationRef<DeleteEmergencyContactData, DeleteEmergencyContactVariables>;
}
export const deleteEmergencyContactRef: DeleteEmergencyContactRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteEmergencyContactRef:
```typescript
const name = deleteEmergencyContactRef.operationName;
console.log(name);
```

### Variables
The `DeleteEmergencyContact` mutation requires an argument of type `DeleteEmergencyContactVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteEmergencyContactVariables {
  ecid: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteEmergencyContact` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteEmergencyContactData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteEmergencyContactData {
  emergencyContacts_delete?: EmergencyContacts_Key | null;
}
```
### Using `DeleteEmergencyContact`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteEmergencyContact, DeleteEmergencyContactVariables } from '@dataconnect/generated-react';

// The `DeleteEmergencyContact` mutation requires an argument of type `DeleteEmergencyContactVariables`:
const deleteEmergencyContactVars: DeleteEmergencyContactVariables = {
  ecid: ..., 
};

// Call the `deleteEmergencyContact()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteEmergencyContact(deleteEmergencyContactVars);
// Variables can be defined inline as well.
const { data } = await deleteEmergencyContact({ ecid: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteEmergencyContact(dataConnect, deleteEmergencyContactVars);

console.log(data.emergencyContacts_delete);

// Or, you can use the `Promise` API.
deleteEmergencyContact(deleteEmergencyContactVars).then((response) => {
  const data = response.data;
  console.log(data.emergencyContacts_delete);
});
```

### Using `DeleteEmergencyContact`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteEmergencyContactRef, DeleteEmergencyContactVariables } from '@dataconnect/generated-react';

// The `DeleteEmergencyContact` mutation requires an argument of type `DeleteEmergencyContactVariables`:
const deleteEmergencyContactVars: DeleteEmergencyContactVariables = {
  ecid: ..., 
};

// Call the `deleteEmergencyContactRef()` function to get a reference to the mutation.
const ref = deleteEmergencyContactRef(deleteEmergencyContactVars);
// Variables can be defined inline as well.
const ref = deleteEmergencyContactRef({ ecid: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteEmergencyContactRef(dataConnect, deleteEmergencyContactVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.emergencyContacts_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.emergencyContacts_delete);
});
```

## CreateEvent
You can execute the `CreateEvent` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createEvent(vars: CreateEventVariables): MutationPromise<CreateEventData, CreateEventVariables>;

interface CreateEventRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateEventVariables): MutationRef<CreateEventData, CreateEventVariables>;
}
export const createEventRef: CreateEventRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createEvent(dc: DataConnect, vars: CreateEventVariables): MutationPromise<CreateEventData, CreateEventVariables>;

interface CreateEventRef {
  ...
  (dc: DataConnect, vars: CreateEventVariables): MutationRef<CreateEventData, CreateEventVariables>;
}
export const createEventRef: CreateEventRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createEventRef:
```typescript
const name = createEventRef.operationName;
console.log(name);
```

### Variables
The `CreateEvent` mutation requires an argument of type `CreateEventVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateEventVariables {
  userId: UUIDString;
  eventType: string;
  severityLevel?: string | null;
  latitude: number;
  longitude: number;
  locationAccuracy?: number | null;
  triggeredBy: string;
}
```
### Return Type
Recall that executing the `CreateEvent` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateEventData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateEventData {
  events_insert: Events_Key;
}
```
### Using `CreateEvent`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createEvent, CreateEventVariables } from '@dataconnect/generated-react';

// The `CreateEvent` mutation requires an argument of type `CreateEventVariables`:
const createEventVars: CreateEventVariables = {
  userId: ..., 
  eventType: ..., 
  severityLevel: ..., // optional
  latitude: ..., 
  longitude: ..., 
  locationAccuracy: ..., // optional
  triggeredBy: ..., 
};

// Call the `createEvent()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createEvent(createEventVars);
// Variables can be defined inline as well.
const { data } = await createEvent({ userId: ..., eventType: ..., severityLevel: ..., latitude: ..., longitude: ..., locationAccuracy: ..., triggeredBy: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createEvent(dataConnect, createEventVars);

console.log(data.events_insert);

// Or, you can use the `Promise` API.
createEvent(createEventVars).then((response) => {
  const data = response.data;
  console.log(data.events_insert);
});
```

### Using `CreateEvent`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createEventRef, CreateEventVariables } from '@dataconnect/generated-react';

// The `CreateEvent` mutation requires an argument of type `CreateEventVariables`:
const createEventVars: CreateEventVariables = {
  userId: ..., 
  eventType: ..., 
  severityLevel: ..., // optional
  latitude: ..., 
  longitude: ..., 
  locationAccuracy: ..., // optional
  triggeredBy: ..., 
};

// Call the `createEventRef()` function to get a reference to the mutation.
const ref = createEventRef(createEventVars);
// Variables can be defined inline as well.
const ref = createEventRef({ userId: ..., eventType: ..., severityLevel: ..., latitude: ..., longitude: ..., locationAccuracy: ..., triggeredBy: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createEventRef(dataConnect, createEventVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.events_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.events_insert);
});
```

## UpdateEventStatus
You can execute the `UpdateEventStatus` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateEventStatus(vars: UpdateEventStatusVariables): MutationPromise<UpdateEventStatusData, UpdateEventStatusVariables>;

interface UpdateEventStatusRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateEventStatusVariables): MutationRef<UpdateEventStatusData, UpdateEventStatusVariables>;
}
export const updateEventStatusRef: UpdateEventStatusRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateEventStatus(dc: DataConnect, vars: UpdateEventStatusVariables): MutationPromise<UpdateEventStatusData, UpdateEventStatusVariables>;

interface UpdateEventStatusRef {
  ...
  (dc: DataConnect, vars: UpdateEventStatusVariables): MutationRef<UpdateEventStatusData, UpdateEventStatusVariables>;
}
export const updateEventStatusRef: UpdateEventStatusRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateEventStatusRef:
```typescript
const name = updateEventStatusRef.operationName;
console.log(name);
```

### Variables
The `UpdateEventStatus` mutation requires an argument of type `UpdateEventStatusVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateEventStatusVariables {
  euid: UUIDString;
  status: string;
}
```
### Return Type
Recall that executing the `UpdateEventStatus` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateEventStatusData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateEventStatusData {
  events_update?: Events_Key | null;
}
```
### Using `UpdateEventStatus`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateEventStatus, UpdateEventStatusVariables } from '@dataconnect/generated-react';

// The `UpdateEventStatus` mutation requires an argument of type `UpdateEventStatusVariables`:
const updateEventStatusVars: UpdateEventStatusVariables = {
  euid: ..., 
  status: ..., 
};

// Call the `updateEventStatus()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateEventStatus(updateEventStatusVars);
// Variables can be defined inline as well.
const { data } = await updateEventStatus({ euid: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateEventStatus(dataConnect, updateEventStatusVars);

console.log(data.events_update);

// Or, you can use the `Promise` API.
updateEventStatus(updateEventStatusVars).then((response) => {
  const data = response.data;
  console.log(data.events_update);
});
```

### Using `UpdateEventStatus`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateEventStatusRef, UpdateEventStatusVariables } from '@dataconnect/generated-react';

// The `UpdateEventStatus` mutation requires an argument of type `UpdateEventStatusVariables`:
const updateEventStatusVars: UpdateEventStatusVariables = {
  euid: ..., 
  status: ..., 
};

// Call the `updateEventStatusRef()` function to get a reference to the mutation.
const ref = updateEventStatusRef(updateEventStatusVars);
// Variables can be defined inline as well.
const ref = updateEventStatusRef({ euid: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateEventStatusRef(dataConnect, updateEventStatusVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.events_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.events_update);
});
```

## MarkEventAsFalseAlarm
You can execute the `MarkEventAsFalseAlarm` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
markEventAsFalseAlarm(vars: MarkEventAsFalseAlarmVariables): MutationPromise<MarkEventAsFalseAlarmData, MarkEventAsFalseAlarmVariables>;

interface MarkEventAsFalseAlarmRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: MarkEventAsFalseAlarmVariables): MutationRef<MarkEventAsFalseAlarmData, MarkEventAsFalseAlarmVariables>;
}
export const markEventAsFalseAlarmRef: MarkEventAsFalseAlarmRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
markEventAsFalseAlarm(dc: DataConnect, vars: MarkEventAsFalseAlarmVariables): MutationPromise<MarkEventAsFalseAlarmData, MarkEventAsFalseAlarmVariables>;

interface MarkEventAsFalseAlarmRef {
  ...
  (dc: DataConnect, vars: MarkEventAsFalseAlarmVariables): MutationRef<MarkEventAsFalseAlarmData, MarkEventAsFalseAlarmVariables>;
}
export const markEventAsFalseAlarmRef: MarkEventAsFalseAlarmRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the markEventAsFalseAlarmRef:
```typescript
const name = markEventAsFalseAlarmRef.operationName;
console.log(name);
```

### Variables
The `MarkEventAsFalseAlarm` mutation requires an argument of type `MarkEventAsFalseAlarmVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface MarkEventAsFalseAlarmVariables {
  euid: UUIDString;
}
```
### Return Type
Recall that executing the `MarkEventAsFalseAlarm` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `MarkEventAsFalseAlarmData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface MarkEventAsFalseAlarmData {
  events_update?: Events_Key | null;
}
```
### Using `MarkEventAsFalseAlarm`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, markEventAsFalseAlarm, MarkEventAsFalseAlarmVariables } from '@dataconnect/generated-react';

// The `MarkEventAsFalseAlarm` mutation requires an argument of type `MarkEventAsFalseAlarmVariables`:
const markEventAsFalseAlarmVars: MarkEventAsFalseAlarmVariables = {
  euid: ..., 
};

// Call the `markEventAsFalseAlarm()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await markEventAsFalseAlarm(markEventAsFalseAlarmVars);
// Variables can be defined inline as well.
const { data } = await markEventAsFalseAlarm({ euid: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await markEventAsFalseAlarm(dataConnect, markEventAsFalseAlarmVars);

console.log(data.events_update);

// Or, you can use the `Promise` API.
markEventAsFalseAlarm(markEventAsFalseAlarmVars).then((response) => {
  const data = response.data;
  console.log(data.events_update);
});
```

### Using `MarkEventAsFalseAlarm`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, markEventAsFalseAlarmRef, MarkEventAsFalseAlarmVariables } from '@dataconnect/generated-react';

// The `MarkEventAsFalseAlarm` mutation requires an argument of type `MarkEventAsFalseAlarmVariables`:
const markEventAsFalseAlarmVars: MarkEventAsFalseAlarmVariables = {
  euid: ..., 
};

// Call the `markEventAsFalseAlarmRef()` function to get a reference to the mutation.
const ref = markEventAsFalseAlarmRef(markEventAsFalseAlarmVars);
// Variables can be defined inline as well.
const ref = markEventAsFalseAlarmRef({ euid: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = markEventAsFalseAlarmRef(dataConnect, markEventAsFalseAlarmVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.events_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.events_update);
});
```

## IncrementResponseCount
You can execute the `IncrementResponseCount` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
incrementResponseCount(vars: IncrementResponseCountVariables): MutationPromise<IncrementResponseCountData, IncrementResponseCountVariables>;

interface IncrementResponseCountRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: IncrementResponseCountVariables): MutationRef<IncrementResponseCountData, IncrementResponseCountVariables>;
}
export const incrementResponseCountRef: IncrementResponseCountRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
incrementResponseCount(dc: DataConnect, vars: IncrementResponseCountVariables): MutationPromise<IncrementResponseCountData, IncrementResponseCountVariables>;

interface IncrementResponseCountRef {
  ...
  (dc: DataConnect, vars: IncrementResponseCountVariables): MutationRef<IncrementResponseCountData, IncrementResponseCountVariables>;
}
export const incrementResponseCountRef: IncrementResponseCountRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the incrementResponseCountRef:
```typescript
const name = incrementResponseCountRef.operationName;
console.log(name);
```

### Variables
The `IncrementResponseCount` mutation requires an argument of type `IncrementResponseCountVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface IncrementResponseCountVariables {
  euid: UUIDString;
  count: number;
}
```
### Return Type
Recall that executing the `IncrementResponseCount` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `IncrementResponseCountData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface IncrementResponseCountData {
  events_update?: Events_Key | null;
}
```
### Using `IncrementResponseCount`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, incrementResponseCount, IncrementResponseCountVariables } from '@dataconnect/generated-react';

// The `IncrementResponseCount` mutation requires an argument of type `IncrementResponseCountVariables`:
const incrementResponseCountVars: IncrementResponseCountVariables = {
  euid: ..., 
  count: ..., 
};

// Call the `incrementResponseCount()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await incrementResponseCount(incrementResponseCountVars);
// Variables can be defined inline as well.
const { data } = await incrementResponseCount({ euid: ..., count: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await incrementResponseCount(dataConnect, incrementResponseCountVars);

console.log(data.events_update);

// Or, you can use the `Promise` API.
incrementResponseCount(incrementResponseCountVars).then((response) => {
  const data = response.data;
  console.log(data.events_update);
});
```

### Using `IncrementResponseCount`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, incrementResponseCountRef, IncrementResponseCountVariables } from '@dataconnect/generated-react';

// The `IncrementResponseCount` mutation requires an argument of type `IncrementResponseCountVariables`:
const incrementResponseCountVars: IncrementResponseCountVariables = {
  euid: ..., 
  count: ..., 
};

// Call the `incrementResponseCountRef()` function to get a reference to the mutation.
const ref = incrementResponseCountRef(incrementResponseCountVars);
// Variables can be defined inline as well.
const ref = incrementResponseCountRef({ euid: ..., count: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = incrementResponseCountRef(dataConnect, incrementResponseCountVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.events_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.events_update);
});
```

## DeleteEvent
You can execute the `DeleteEvent` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteEvent(vars: DeleteEventVariables): MutationPromise<DeleteEventData, DeleteEventVariables>;

interface DeleteEventRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteEventVariables): MutationRef<DeleteEventData, DeleteEventVariables>;
}
export const deleteEventRef: DeleteEventRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteEvent(dc: DataConnect, vars: DeleteEventVariables): MutationPromise<DeleteEventData, DeleteEventVariables>;

interface DeleteEventRef {
  ...
  (dc: DataConnect, vars: DeleteEventVariables): MutationRef<DeleteEventData, DeleteEventVariables>;
}
export const deleteEventRef: DeleteEventRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteEventRef:
```typescript
const name = deleteEventRef.operationName;
console.log(name);
```

### Variables
The `DeleteEvent` mutation requires an argument of type `DeleteEventVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteEventVariables {
  euid: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteEvent` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteEventData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteEventData {
  events_delete?: Events_Key | null;
}
```
### Using `DeleteEvent`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteEvent, DeleteEventVariables } from '@dataconnect/generated-react';

// The `DeleteEvent` mutation requires an argument of type `DeleteEventVariables`:
const deleteEventVars: DeleteEventVariables = {
  euid: ..., 
};

// Call the `deleteEvent()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteEvent(deleteEventVars);
// Variables can be defined inline as well.
const { data } = await deleteEvent({ euid: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteEvent(dataConnect, deleteEventVars);

console.log(data.events_delete);

// Or, you can use the `Promise` API.
deleteEvent(deleteEventVars).then((response) => {
  const data = response.data;
  console.log(data.events_delete);
});
```

### Using `DeleteEvent`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteEventRef, DeleteEventVariables } from '@dataconnect/generated-react';

// The `DeleteEvent` mutation requires an argument of type `DeleteEventVariables`:
const deleteEventVars: DeleteEventVariables = {
  euid: ..., 
};

// Call the `deleteEventRef()` function to get a reference to the mutation.
const ref = deleteEventRef(deleteEventVars);
// Variables can be defined inline as well.
const ref = deleteEventRef({ euid: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteEventRef(dataConnect, deleteEventVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.events_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.events_delete);
});
```

## AddEventResponder
You can execute the `AddEventResponder` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addEventResponder(vars: AddEventResponderVariables): MutationPromise<AddEventResponderData, AddEventResponderVariables>;

interface AddEventResponderRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddEventResponderVariables): MutationRef<AddEventResponderData, AddEventResponderVariables>;
}
export const addEventResponderRef: AddEventResponderRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addEventResponder(dc: DataConnect, vars: AddEventResponderVariables): MutationPromise<AddEventResponderData, AddEventResponderVariables>;

interface AddEventResponderRef {
  ...
  (dc: DataConnect, vars: AddEventResponderVariables): MutationRef<AddEventResponderData, AddEventResponderVariables>;
}
export const addEventResponderRef: AddEventResponderRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addEventResponderRef:
```typescript
const name = addEventResponderRef.operationName;
console.log(name);
```

### Variables
The `AddEventResponder` mutation requires an argument of type `AddEventResponderVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddEventResponderVariables {
  eventId: UUIDString;
  responderUserId: UUIDString;
  responseStatus: string;
}
```
### Return Type
Recall that executing the `AddEventResponder` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddEventResponderData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddEventResponderData {
  eventResponders_insert: EventResponders_Key;
}
```
### Using `AddEventResponder`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addEventResponder, AddEventResponderVariables } from '@dataconnect/generated-react';

// The `AddEventResponder` mutation requires an argument of type `AddEventResponderVariables`:
const addEventResponderVars: AddEventResponderVariables = {
  eventId: ..., 
  responderUserId: ..., 
  responseStatus: ..., 
};

// Call the `addEventResponder()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addEventResponder(addEventResponderVars);
// Variables can be defined inline as well.
const { data } = await addEventResponder({ eventId: ..., responderUserId: ..., responseStatus: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addEventResponder(dataConnect, addEventResponderVars);

console.log(data.eventResponders_insert);

// Or, you can use the `Promise` API.
addEventResponder(addEventResponderVars).then((response) => {
  const data = response.data;
  console.log(data.eventResponders_insert);
});
```

### Using `AddEventResponder`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addEventResponderRef, AddEventResponderVariables } from '@dataconnect/generated-react';

// The `AddEventResponder` mutation requires an argument of type `AddEventResponderVariables`:
const addEventResponderVars: AddEventResponderVariables = {
  eventId: ..., 
  responderUserId: ..., 
  responseStatus: ..., 
};

// Call the `addEventResponderRef()` function to get a reference to the mutation.
const ref = addEventResponderRef(addEventResponderVars);
// Variables can be defined inline as well.
const ref = addEventResponderRef({ eventId: ..., responderUserId: ..., responseStatus: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addEventResponderRef(dataConnect, addEventResponderVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.eventResponders_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.eventResponders_insert);
});
```

## UpdateResponderStatus
You can execute the `UpdateResponderStatus` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateResponderStatus(vars: UpdateResponderStatusVariables): MutationPromise<UpdateResponderStatusData, UpdateResponderStatusVariables>;

interface UpdateResponderStatusRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateResponderStatusVariables): MutationRef<UpdateResponderStatusData, UpdateResponderStatusVariables>;
}
export const updateResponderStatusRef: UpdateResponderStatusRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateResponderStatus(dc: DataConnect, vars: UpdateResponderStatusVariables): MutationPromise<UpdateResponderStatusData, UpdateResponderStatusVariables>;

interface UpdateResponderStatusRef {
  ...
  (dc: DataConnect, vars: UpdateResponderStatusVariables): MutationRef<UpdateResponderStatusData, UpdateResponderStatusVariables>;
}
export const updateResponderStatusRef: UpdateResponderStatusRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateResponderStatusRef:
```typescript
const name = updateResponderStatusRef.operationName;
console.log(name);
```

### Variables
The `UpdateResponderStatus` mutation requires an argument of type `UpdateResponderStatusVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateResponderStatusVariables {
  erid: UUIDString;
  responseStatus: string;
}
```
### Return Type
Recall that executing the `UpdateResponderStatus` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateResponderStatusData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateResponderStatusData {
  eventResponders_update?: EventResponders_Key | null;
}
```
### Using `UpdateResponderStatus`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateResponderStatus, UpdateResponderStatusVariables } from '@dataconnect/generated-react';

// The `UpdateResponderStatus` mutation requires an argument of type `UpdateResponderStatusVariables`:
const updateResponderStatusVars: UpdateResponderStatusVariables = {
  erid: ..., 
  responseStatus: ..., 
};

// Call the `updateResponderStatus()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateResponderStatus(updateResponderStatusVars);
// Variables can be defined inline as well.
const { data } = await updateResponderStatus({ erid: ..., responseStatus: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateResponderStatus(dataConnect, updateResponderStatusVars);

console.log(data.eventResponders_update);

// Or, you can use the `Promise` API.
updateResponderStatus(updateResponderStatusVars).then((response) => {
  const data = response.data;
  console.log(data.eventResponders_update);
});
```

### Using `UpdateResponderStatus`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateResponderStatusRef, UpdateResponderStatusVariables } from '@dataconnect/generated-react';

// The `UpdateResponderStatus` mutation requires an argument of type `UpdateResponderStatusVariables`:
const updateResponderStatusVars: UpdateResponderStatusVariables = {
  erid: ..., 
  responseStatus: ..., 
};

// Call the `updateResponderStatusRef()` function to get a reference to the mutation.
const ref = updateResponderStatusRef(updateResponderStatusVars);
// Variables can be defined inline as well.
const ref = updateResponderStatusRef({ erid: ..., responseStatus: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateResponderStatusRef(dataConnect, updateResponderStatusVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.eventResponders_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.eventResponders_update);
});
```

## ResponderLeftEvent
You can execute the `ResponderLeftEvent` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
responderLeftEvent(vars: ResponderLeftEventVariables): MutationPromise<ResponderLeftEventData, ResponderLeftEventVariables>;

interface ResponderLeftEventRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ResponderLeftEventVariables): MutationRef<ResponderLeftEventData, ResponderLeftEventVariables>;
}
export const responderLeftEventRef: ResponderLeftEventRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
responderLeftEvent(dc: DataConnect, vars: ResponderLeftEventVariables): MutationPromise<ResponderLeftEventData, ResponderLeftEventVariables>;

interface ResponderLeftEventRef {
  ...
  (dc: DataConnect, vars: ResponderLeftEventVariables): MutationRef<ResponderLeftEventData, ResponderLeftEventVariables>;
}
export const responderLeftEventRef: ResponderLeftEventRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the responderLeftEventRef:
```typescript
const name = responderLeftEventRef.operationName;
console.log(name);
```

### Variables
The `ResponderLeftEvent` mutation requires an argument of type `ResponderLeftEventVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ResponderLeftEventVariables {
  erid: UUIDString;
  leftAt: TimestampString;
}
```
### Return Type
Recall that executing the `ResponderLeftEvent` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ResponderLeftEventData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ResponderLeftEventData {
  eventResponders_update?: EventResponders_Key | null;
}
```
### Using `ResponderLeftEvent`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, responderLeftEvent, ResponderLeftEventVariables } from '@dataconnect/generated-react';

// The `ResponderLeftEvent` mutation requires an argument of type `ResponderLeftEventVariables`:
const responderLeftEventVars: ResponderLeftEventVariables = {
  erid: ..., 
  leftAt: ..., 
};

// Call the `responderLeftEvent()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await responderLeftEvent(responderLeftEventVars);
// Variables can be defined inline as well.
const { data } = await responderLeftEvent({ erid: ..., leftAt: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await responderLeftEvent(dataConnect, responderLeftEventVars);

console.log(data.eventResponders_update);

// Or, you can use the `Promise` API.
responderLeftEvent(responderLeftEventVars).then((response) => {
  const data = response.data;
  console.log(data.eventResponders_update);
});
```

### Using `ResponderLeftEvent`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, responderLeftEventRef, ResponderLeftEventVariables } from '@dataconnect/generated-react';

// The `ResponderLeftEvent` mutation requires an argument of type `ResponderLeftEventVariables`:
const responderLeftEventVars: ResponderLeftEventVariables = {
  erid: ..., 
  leftAt: ..., 
};

// Call the `responderLeftEventRef()` function to get a reference to the mutation.
const ref = responderLeftEventRef(responderLeftEventVars);
// Variables can be defined inline as well.
const ref = responderLeftEventRef({ erid: ..., leftAt: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = responderLeftEventRef(dataConnect, responderLeftEventVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.eventResponders_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.eventResponders_update);
});
```

## DeleteEventResponder
You can execute the `DeleteEventResponder` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteEventResponder(vars: DeleteEventResponderVariables): MutationPromise<DeleteEventResponderData, DeleteEventResponderVariables>;

interface DeleteEventResponderRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteEventResponderVariables): MutationRef<DeleteEventResponderData, DeleteEventResponderVariables>;
}
export const deleteEventResponderRef: DeleteEventResponderRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteEventResponder(dc: DataConnect, vars: DeleteEventResponderVariables): MutationPromise<DeleteEventResponderData, DeleteEventResponderVariables>;

interface DeleteEventResponderRef {
  ...
  (dc: DataConnect, vars: DeleteEventResponderVariables): MutationRef<DeleteEventResponderData, DeleteEventResponderVariables>;
}
export const deleteEventResponderRef: DeleteEventResponderRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteEventResponderRef:
```typescript
const name = deleteEventResponderRef.operationName;
console.log(name);
```

### Variables
The `DeleteEventResponder` mutation requires an argument of type `DeleteEventResponderVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteEventResponderVariables {
  erid: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteEventResponder` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteEventResponderData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteEventResponderData {
  eventResponders_delete?: EventResponders_Key | null;
}
```
### Using `DeleteEventResponder`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteEventResponder, DeleteEventResponderVariables } from '@dataconnect/generated-react';

// The `DeleteEventResponder` mutation requires an argument of type `DeleteEventResponderVariables`:
const deleteEventResponderVars: DeleteEventResponderVariables = {
  erid: ..., 
};

// Call the `deleteEventResponder()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteEventResponder(deleteEventResponderVars);
// Variables can be defined inline as well.
const { data } = await deleteEventResponder({ erid: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteEventResponder(dataConnect, deleteEventResponderVars);

console.log(data.eventResponders_delete);

// Or, you can use the `Promise` API.
deleteEventResponder(deleteEventResponderVars).then((response) => {
  const data = response.data;
  console.log(data.eventResponders_delete);
});
```

### Using `DeleteEventResponder`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteEventResponderRef, DeleteEventResponderVariables } from '@dataconnect/generated-react';

// The `DeleteEventResponder` mutation requires an argument of type `DeleteEventResponderVariables`:
const deleteEventResponderVars: DeleteEventResponderVariables = {
  erid: ..., 
};

// Call the `deleteEventResponderRef()` function to get a reference to the mutation.
const ref = deleteEventResponderRef(deleteEventResponderVars);
// Variables can be defined inline as well.
const ref = deleteEventResponderRef({ erid: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteEventResponderRef(dataConnect, deleteEventResponderVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.eventResponders_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.eventResponders_delete);
});
```

## LogLocation
You can execute the `LogLocation` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
logLocation(vars: LogLocationVariables): MutationPromise<LogLocationData, LogLocationVariables>;

interface LogLocationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: LogLocationVariables): MutationRef<LogLocationData, LogLocationVariables>;
}
export const logLocationRef: LogLocationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
logLocation(dc: DataConnect, vars: LogLocationVariables): MutationPromise<LogLocationData, LogLocationVariables>;

interface LogLocationRef {
  ...
  (dc: DataConnect, vars: LogLocationVariables): MutationRef<LogLocationData, LogLocationVariables>;
}
export const logLocationRef: LogLocationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the logLocationRef:
```typescript
const name = logLocationRef.operationName;
console.log(name);
```

### Variables
The `LogLocation` mutation requires an argument of type `LogLocationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface LogLocationVariables {
  userId: UUIDString;
  latitude: number;
  longitude: number;
}
```
### Return Type
Recall that executing the `LogLocation` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `LogLocationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface LogLocationData {
  locationLogs_insert: LocationLogs_Key;
}
```
### Using `LogLocation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, logLocation, LogLocationVariables } from '@dataconnect/generated-react';

// The `LogLocation` mutation requires an argument of type `LogLocationVariables`:
const logLocationVars: LogLocationVariables = {
  userId: ..., 
  latitude: ..., 
  longitude: ..., 
};

// Call the `logLocation()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await logLocation(logLocationVars);
// Variables can be defined inline as well.
const { data } = await logLocation({ userId: ..., latitude: ..., longitude: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await logLocation(dataConnect, logLocationVars);

console.log(data.locationLogs_insert);

// Or, you can use the `Promise` API.
logLocation(logLocationVars).then((response) => {
  const data = response.data;
  console.log(data.locationLogs_insert);
});
```

### Using `LogLocation`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, logLocationRef, LogLocationVariables } from '@dataconnect/generated-react';

// The `LogLocation` mutation requires an argument of type `LogLocationVariables`:
const logLocationVars: LogLocationVariables = {
  userId: ..., 
  latitude: ..., 
  longitude: ..., 
};

// Call the `logLocationRef()` function to get a reference to the mutation.
const ref = logLocationRef(logLocationVars);
// Variables can be defined inline as well.
const ref = logLocationRef({ userId: ..., latitude: ..., longitude: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = logLocationRef(dataConnect, logLocationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.locationLogs_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.locationLogs_insert);
});
```

## DeleteLocationLog
You can execute the `DeleteLocationLog` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteLocationLog(vars: DeleteLocationLogVariables): MutationPromise<DeleteLocationLogData, DeleteLocationLogVariables>;

interface DeleteLocationLogRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteLocationLogVariables): MutationRef<DeleteLocationLogData, DeleteLocationLogVariables>;
}
export const deleteLocationLogRef: DeleteLocationLogRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteLocationLog(dc: DataConnect, vars: DeleteLocationLogVariables): MutationPromise<DeleteLocationLogData, DeleteLocationLogVariables>;

interface DeleteLocationLogRef {
  ...
  (dc: DataConnect, vars: DeleteLocationLogVariables): MutationRef<DeleteLocationLogData, DeleteLocationLogVariables>;
}
export const deleteLocationLogRef: DeleteLocationLogRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteLocationLogRef:
```typescript
const name = deleteLocationLogRef.operationName;
console.log(name);
```

### Variables
The `DeleteLocationLog` mutation requires an argument of type `DeleteLocationLogVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteLocationLogVariables {
  luid: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteLocationLog` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteLocationLogData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteLocationLogData {
  locationLogs_delete?: LocationLogs_Key | null;
}
```
### Using `DeleteLocationLog`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteLocationLog, DeleteLocationLogVariables } from '@dataconnect/generated-react';

// The `DeleteLocationLog` mutation requires an argument of type `DeleteLocationLogVariables`:
const deleteLocationLogVars: DeleteLocationLogVariables = {
  luid: ..., 
};

// Call the `deleteLocationLog()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteLocationLog(deleteLocationLogVars);
// Variables can be defined inline as well.
const { data } = await deleteLocationLog({ luid: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteLocationLog(dataConnect, deleteLocationLogVars);

console.log(data.locationLogs_delete);

// Or, you can use the `Promise` API.
deleteLocationLog(deleteLocationLogVars).then((response) => {
  const data = response.data;
  console.log(data.locationLogs_delete);
});
```

### Using `DeleteLocationLog`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteLocationLogRef, DeleteLocationLogVariables } from '@dataconnect/generated-react';

// The `DeleteLocationLog` mutation requires an argument of type `DeleteLocationLogVariables`:
const deleteLocationLogVars: DeleteLocationLogVariables = {
  luid: ..., 
};

// Call the `deleteLocationLogRef()` function to get a reference to the mutation.
const ref = deleteLocationLogRef(deleteLocationLogVars);
// Variables can be defined inline as well.
const ref = deleteLocationLogRef({ luid: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteLocationLogRef(dataConnect, deleteLocationLogVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.locationLogs_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.locationLogs_delete);
});
```

