SHELL=bash
ENV_SUBST=env $(shell cat config/internal.env config/secret.env | xargs) envsubst
DOCKER_COMPOSE_DEV=env $(shell cat config/dev.env | xargs) docker-compose -f docker-compose/base.yml -f docker-compose/dev.yml
DOCKER_COMPOSE_E2E=env $(shell cat config/e2e.env | xargs) docker-compose -f docker-compose/base.yml -f docker-compose/e2e.yml
DOCKER_COMPOSE_TEST=docker-compose -f docker-compose/test.yml

dev-build:
	docker build server/. -t blog-image:dev

dev-up:
	$(ENV_SUBST) < prisma/prisma_config.tmpl.yml > prisma/prisma_config.yml
	$(DOCKER_COMPOSE_DEV) up

dev-down:
	$(DOCKER_COMPOSE_DEV) down -v

dev-ps:
	$(DOCKER_COMPOSE_DEV) ps
	
dev-exec:
	$(DOCKER_COMPOSE_DEV) exec build-dev /bin/bash

e2e-up:
	$(DOCKER_COMPOSE_E2E) up

e2e-down:
	$(DOCKER_COMPOSE_E2E) down -v

test-up:
	$(DOCKER_COMPOSE_TEST) up

test-down:
	$(DOCKER_COMPOSE_TEST) down -v
