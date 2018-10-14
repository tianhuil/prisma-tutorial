run-dev:
	COMPOSE_PROJECT_NAME=dev docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

clean-dev:
	COMPOSE_PROJECT_NAME=dev docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v
	
run-bash:
	COMPOSE_PROJECT_NAME=dev docker-compose -f docker-compose.yml -f docker-compose.bash.yml run bash

run-test:
	COMPOSE_PROJECT_NAME=test docker-compose -f docker-compose.yml -f docker-compose.test.yml up

clean-test:
	COMPOSE_PROJECT_NAME=test docker-compose -f docker-compose.yml -f docker-compose.test.yml down -v
