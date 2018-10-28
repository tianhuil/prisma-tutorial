SHELL=bash
ENV_SUBST=env $(shell cat config/internal.env config/secret.env | xargs) envsubst
DOCKER_COMPOSE_DEV=env $(shell cat config/dev.env | xargs) docker-compose -f docker-compose/base.yml -f docker-compose/dev.yml
DOCKER_COMPOSE_TEST=env $(shell cat config/test.env | xargs) docker-compose -f docker-compose/base.yml -f docker-compose/test.yml

build-dev:
	docker build server/. -t blog-image:dev

run-dev:
	$(ENV_SUBST) < prisma/prisma_config.tmpl.yml > prisma/prisma_config.yml
	$(DOCKER_COMPOSE_DEV) up

clean-dev:
	$(DOCKER_COMPOSE_DEV) down -v
	
exec-dev:
	$(DOCKER_COMPOSE_DEV) exec build-dev /bin/bash

run-test:
	$(DOCKER_COMPOSE_TEST) up

clean-test:
	$(DOCKER_COMPOSE_TEST) down -v
