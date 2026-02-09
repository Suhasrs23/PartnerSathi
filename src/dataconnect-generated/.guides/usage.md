# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createUser, getAllUsers, getUserById, updateUser, updateLastLogin, deactivateUser, deleteUser, createCompany, getAllCompanies, getCompanyById } from '@dataconnect/generated-core';


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