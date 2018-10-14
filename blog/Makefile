SHELL=bash

build-dev:
	docker build . -t blog-image:dev

run-dev:
	env $(shell cat config/dev.env | xargs) docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

clean-dev:
	env $(shell cat config/dev.env | xargs) docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v
	
run-bash:
	env $(shell cat config/dev.env | xargs) docker-compose -f docker-compose.yml -f docker-compose.bash.yml run bash

run-test:
	env $(shell cat config/test.env | xargs) docker-compose -f docker-compose.yml -f docker-compose.test.yml up

clean-test:
	env $(shell cat config/test.env | xargs) docker-compose -f docker-compose.yml -f docker-compose.test.yml down -v
