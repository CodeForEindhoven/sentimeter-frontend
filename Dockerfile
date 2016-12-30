FROM node:6

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install
COPY . /app
RUN npm install .

EXPOSE 8080
CMD ["npm", "start"]
