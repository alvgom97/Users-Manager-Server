ipdate## Requirements

- install [nodejs](https://nodejs.org/es/download) (you may need to restart afterwards)

- install migrate-mongoose
```
npm i -g migrate-mongoose
```


## Initialize

- Set the database connection URI in the .env file
```
MIGRATE_dbConnectionUri = mongodb+srv://admin:admin69@mycluster.qylyg.gcp.mongodb.net/UsersManager?retryWrites=true&w=majority
```
- Initialize the test data 
```
migrate up init
```
- install the project
```
npm i 
```