PRISMA_CONFIG=$'
port: 4466
databases:
  default:
    connector: postgres
    host: postgres
    port: 5432
    user: prisma
    password: prisma
    migrations: true
'

NETWORK_NAME=blog-network-dev PRISMA_CONFIG=${PRISMA_CONFIG} docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
