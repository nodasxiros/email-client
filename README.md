## Description
A [Dockerized](https://www.docker.com/) email client full stack application with bulk email delivery using queues design pattern. Backend was built with [Nest](https://github.com/nestjs/nest)framework TypeScript starter repository frontend was built [React](https://github.com/facebook/react/) library. For the queue implementtion [Redis](https://redis.io/) database and [Postgres](https://www.postgresql.org/) for the main RDBMS


## Installation
### Clone repository
```bash
$ git clone https://github.com/nodasxiros/email-client
```
### Copy .env
```bash
# change directory into the newly created repo
$ cd email-client
# copy contents of .env.example to .env file
# and set up your own variables where needed
$ cp .env.example .env
```
### Run the App
```bash
$ docker compose up --build
```
### Run db migrations and seeders
```bash
# Run migrations
$ cd api/
$ npx sequelize-cli db:migrate
# Run seeders
$ npx sequelize-cli db:seed:all
```
## License

The present web app is [MIT licensed](LICENSE).
