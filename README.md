## Requirements 🛠️

- Install [nodejs](https://nodejs.org/es/download) (You may need to restart afterwards)

- Install migrate-mongoose
```
npm i -g migrate-mongoose
```
- [Users Manager Server](https://github.com/alvgom97/Users-Manager-Server)

## Documentation :book:

- Check the API [here](https://users-manager.herokuapp.com/api/)

## Deployment 🚀

#### It is currently deployed in Heroku [here](https://users-manager.herokuapp.com/)

#### For deploying it locally:

- Set the database connection URI in the .env file
```
MIGRATE_dbConnectionUri = mongodb+srv://admin:admin69@mycluster.qylyg.gcp.mongodb.net/UsersManager?retryWrites=true&w=majority
```
- Initialize the test data (Skip if you are using the database connection URI from above)
  - Install migrate-mongoose
  - Run the migration
```
npm i -g migrate-mongoose
```

```
migrate up init
```
- Install the project
```
npm i 
```


