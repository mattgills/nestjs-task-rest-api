# RUN IN THE PROJECT DIRECTORY AS:
# docker build --rm -f Dockerfile -t task-rest-api:v1 .
FROM node:10-alpine
WORKDIR /usr/src/app

COPY . .
RUN npm install


EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]

# ALTERNATIVE TESTED DOCKERFILE
# FROM node:10
# WORKDIR /app
# COPY ./package.json ./
# RUN npm install
# COPY . .
# RUN npm run build
# EXPOSE 3000
# CMD ["npm", "run", "start:prod"]