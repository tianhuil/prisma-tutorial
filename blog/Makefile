SHELL=bash

build-dev:
	env $(shell cat config/dev.env | xargs) docker-compose -f docker-compose.yml -f docker-compose.dev.yml -f docker-compose.bash.yml build

run-dev:
	env $(shell cat config/dev.env | xargs) docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

clean-dev:
	env $(shell cat config/dev.env | xargs) docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v
	
run-bash:
	env $(shell cat config/dev.env | xargs) docker-compose -f docker-compose.yml -f docker-compose.bash.yml run bash

build-test:
	env $(shell cat config/test.env | xargs) docker-compose -f docker-compose.yml -f docker-compose.test.yml build

run-test:
	env $(shell cat config/test.env | xargs) docker-compose -f docker-compose.yml -f docker-compose.test.yml up

clean-test:
	env $(shell cat config/test.env | xargs) docker-compose -f docker-compose.yml -f docker-compose.test.yml down -v
