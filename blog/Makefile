run-dev:
	ENV=dev docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

clean-dev:
	ENV=dev docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v
	
run-bash:
	ENV=dev docker-compose -f docker-compose.yml -f docker-compose.bash.yml run bash

run-test:
	ENV=test docker-compose -f docker-compose.yml -f docker-compose.test.yml up

clean-test:
	ENV=test docker-compose -f docker-compose.yml -f docker-compose.test.yml down -v
