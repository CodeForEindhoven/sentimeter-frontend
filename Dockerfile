FROM node:6

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Variables
ENV API_ENDPOINT http://sentimeter.ideeenvijver.nl/api

#Image configuration
ADD copy.sh /copy.sh
RUN chmod 755 /*.sh
RUN copy.sh

# Install
COPY . /app
COPY config-docker.js /app/src/js/config.js
RUN npm install .

EXPOSE 8080
CMD ["npm", "start"]
