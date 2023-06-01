FROM node:18.16.0 as build
WORKDIR /usr/app
COPY . /usr/app
RUN npm ci
RUN npm run build
FROM nginx:stable
EXPOSE 80/tcp
COPY ./docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/app/Ark-Portfolio /usr/share/nginx/html/Ark-Portfolio
