# prisma-tutorial
Prisma tutorial

## Getting Started: Dev Environment:
Build and run everything using
```
make build-dev
make run-dev
```

You may then:

- Access the raw prisma server at [http://localhost:4466/](http://localhost:4466/).
- Access the custom prisma server at [http://localhost:4000/](http://localhost:4000/).

## Docker Container Architecture:
The dev environment uses several docker containers.

`docker-compose/base.yml`:

- `postgres`: Postgres database at the (default postgress) port `5432`
- `prisma`: Auto-generated prisma server at port `4466`, configured by `prisma_config.yml` talking to `5432`
- A network whose name is based on `${COMPOSE_PROJECT_NAME}` (which allows for simultaneous `dev` and `test` environments).


`docker-compose/dev.yml`:

- `build-dev`: the environment builds the gulp environment and runs the following:
	- Mounts the `server/src` folder.
	- It deploys, the prisma server, gets the prisma schema, codegens, and seeds the database, preparing it for deploy and parallelizing where it can.
	- The database is seeded with data from `seed.graphql` via the script `seed.ts`.
	- It uses `dockerize` to auto-restart on errors and wait for the primsa server on `4466`.
- `dev`: which uses `nodemon` on `ts-node` to run `index.ts`.
	- Also mounts the `server/src` folder.

## Environment Variables:
The `docker-compose/*.yml` files define docker container and orchestration.  They accept environment variables in two ways:

- Set `env_file` environment variable in the `docker-compose/*.yml` files to pass in `config/*.env` files supplying environment variables that are set inside the docker containers but which are not directly visible to the outside system.
- Use `cat` to supply `config/*.env`environment variables while invoking `docker-compose` to supply variables that change based on environment.  Currently there are two environments: `dev` and `test`.
