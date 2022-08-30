FROM node:alpine
WORKDIR /opt/node-chat-app
COPY . .
RUN npm install
CMD ["npm","run", "start"]