# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useCreateUser, useGetAllUsers, useGetUserById, useUpdateUser, useUpdateLastLogin, useDeactivateUser, useDeleteUser, useCreateCompany, useGetAllCompanies, useGetCompanyById } from '@dataconnect/generated-react/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useCreateUser(createUserVars);

const { data, isPending, isSuccess, isError, error } = useGetAllUsers();

const { data, isPending, isSuccess, isError, error } = useGetUserById(getUserByIdVars);

const { data, isPending, isSuccess, isError, error } = useUpdateUser(updateUserVars);

const { data, isPending, isSuccess, isError, error } = useUpdateLastLogin(updateLastLoginVars);

const { data, isPending, isSuccess, isError, error } = useDeactivateUser(deactivateUserVars);

const { data, isPending, isSuccess, isError, error } = useDeleteUser(deleteUserVars);

const { data, isPending, isSuccess, isError, error } = useCreateCompany(createCompanyVars);

const { data, isPending, isSuccess, isError, error } = useGetAllCompanies();

const { data, isPending, isSuccess, isError, error } = useGetCompanyById(getCompanyByIdVars);

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createUser, getAllUsers, getUserById, updateUser, updateLastLogin, deactivateUser, deleteUser, createCompany, getAllCompanies, getCompanyById } from '@dataconnect/generated-react';


// Operation CreateUser:  For variables, look at type CreateUserVars in ../index.d.ts
const { data } = await CreateUser(dataConnect, createUserVars);

// Operation GetAllUsers: 
const { data } = await GetAllUsers(dataConnect);

// Operation GetUserById:  For variables, look at type GetUserByIdVars in ../index.d.ts
const { data } = await GetUserById(dataConnect, getUserByIdVars);

// Operation UpdateUser:  For variables, look at type UpdateUserVars in ../index.d.ts
const { data } = await UpdateUser(dataConnect, updateUserVars);

// Operation UpdateLastLogin:  For variables, look at type UpdateLastLoginVars in ../index.d.ts
const { data } = await UpdateLastLogin(dataConnect, updateLastLoginVars);

// Operation DeactivateUser:  For variables, look at type DeactivateUserVars in ../index.d.ts
const { data } = await DeactivateUser(dataConnect, deactivateUserVars);

// Operation DeleteUser:  For variables, look at type DeleteUserVars in ../index.d.ts
const { data } = await DeleteUser(dataConnect, deleteUserVars);

// Operation CreateCompany:  For variables, look at type CreateCompanyVars in ../index.d.ts
const { data } = await CreateCompany(dataConnect, createCompanyVars);

// Operation GetAllCompanies: 
const { data } = await GetAllCompanies(dataConnect);

// Operation GetCompanyById:  For variables, look at type GetCompanyByIdVars in ../index.d.ts
const { data } = await GetCompanyById(dataConnect, getCompanyByIdVars);


```