FROM node:8.12-alpine

# Copy Files
RUN mkdir -p /home/workdir
WORKDIR /home/workdir
COPY package.json .

# Install
RUN yarn install

# Copy more files
RUN mkdir -p /home/workdir/prisma
COPY prisma/* /home/workdir/prisma/
COPY .graphqlconfig.yml .

# Command
CMD ["yarn", "start"]
