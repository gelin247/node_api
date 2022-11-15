FROM node:18.12.0
WORKDIR /app
COPY ./NODE_API_RODRIGO/package*.json ./
RUN npm install
COPY ./NODE_API_RODRIGO ./
EXPOSE 8087
CMD ["npm", "start"]