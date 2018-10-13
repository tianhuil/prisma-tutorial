export NETWORK_NAME=blog-network-dev
export PRISMA_CONFIG=`cat build/prisma_config.yml`
docker-compose -f docker-compose.yml -f docker-compose.bash.yml run bash
