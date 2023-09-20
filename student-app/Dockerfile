FROM node:alpine as BUILD_IMAGE
WORKDIR /app
COPY package.json ./

# install dependencies
RUN npm install --frozen-lockfile
COPY . .

# build
RUN npm run build

# remove dev dependencies
#FROM node:alpine
#WORKDIR /app

#copy from build image
#COPY --from=BUILD_IMAGE /app/package.json ./package.json
#COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
#COPY --from=BUILD_IMAGE /app/build ./build
#COPY --from=BUILD_IMAGE /app/public ./public

EXPOSE 3000
CMD ["npm", "start"]
