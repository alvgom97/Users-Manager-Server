## Requirements

- Install [nodejs](https://nodejs.org/es/download) (You may need to restart afterwards)

- Install migrate-mongoose
```
npm i -g migrate-mongoose
```
- [User Management Client](https://github.com/alvgom97/Users-Manager-Client)

## Initialize

- Set the database connection URI in the .env file
```
MIGRATE_dbConnectionUri = mongodb+srv://admin:admin69@mycluster.qylyg.gcp.mongodb.net/UsersManager?retryWrites=true&w=majority
```
- Install the project
```
npm i 
```
- Initialize the test data (Skip this step if you used the connection above)
```
migrate up init
```
- Start project
```
npm start 
```