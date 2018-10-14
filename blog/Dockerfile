FROM node:8.12-alpine

# Setup
RUN mkdir -p /home/workdir
WORKDIR /home/workdir

# Install ts depedencies
COPY package.json .
RUN yarn install

# Install dockerize
RUN apk add --no-cache openssl
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Copy more files
RUN mkdir -p /home/workdir/prisma
COPY prisma/* /home/workdir/prisma/
COPY .graphqlconfig.yml .
COPY tsconfig.json .

# Command
ENTRYPOINT ["yarn", "start"]
