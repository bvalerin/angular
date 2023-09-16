FROM node:18.10-alpine As builder
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:1.15.8-alpine
COPY --from=builder /usr/src/app/dist/bases/ /usr/share/nginx/html
