export NETWORK_NAME=blog-network-test
export PRISMA_CONFIG=`cat build/prisma_config.yml`
docker-compose -f docker-compose.yml -f docker-compose.test.yml up
