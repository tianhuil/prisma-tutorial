SHELL=bash

build-dev:
	docker build server/. -t blog-image:dev

run-dev:
	env $(shell cat config/internal.env config/secret.env | xargs) envsubst < prisma/prisma_config.tmpl.yml > prisma/prisma_config.yml
	env $(shell cat config/dev.env | xargs) docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

clean-dev:
	env $(shell cat config/dev.env | xargs) docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v
	
exec-dev:
	env $(shell cat config/dev.env | xargs) docker-compose -f docker-compose.yml -f docker-compose.dev.yml exec build-dev /bin/bash

run-test:
	env $(shell cat config/test.env | xargs) docker-compose -f docker-compose.yml -f docker-compose.test.yml up

clean-test:
	env $(shell cat config/test.env | xargs) docker-compose -f docker-compose.yml -f docker-compose.test.yml down -v
