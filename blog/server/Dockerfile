FROM node:8.12-alpine

# Setup
RUN mkdir -p /home/workdir
WORKDIR /home/workdir

# Some basic dependencies
RUN apk update && \
	apk upgrade && \
	apk add --no-cache bash git openssh
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Install ts depedencies
COPY package.json .
RUN yarn install

# Copy more files
RUN mkdir -p /home/workdir/prisma
COPY prisma/* /home/workdir/prisma/
COPY .graphqlconfig.yml .
COPY tsconfig.json .
COPY .babelrc .
COPY gulpfile.babel.js .

# Command
ENTRYPOINT ["yarn"]
