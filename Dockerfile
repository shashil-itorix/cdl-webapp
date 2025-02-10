FROM node:20.14.0-alpine3.20 AS build_stage
RUN mkdir /var/movable/ && mkdir /var/movable/app
WORKDIR /var/movable/app
COPY . .
RUN apk add git
RUN npm ci && \
    npm run build 

FROM nginx:alpine3.19
COPY --from=build_stage /var/movable/app/dist /opt/build
COPY ./apiwiz.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /etc/nginx/nginx.conf
COPY ./nginx.conf /etc/nginx/nginx.conf
RUN apk upgrade && apk update lib* busy*
RUN cp -rf /opt/build/* /usr/share/nginx/html/
RUN chown -R nginx:nginx /usr/share/nginx/html/ && chmod -R 755 /usr/share/nginx/html/ && \
    chmod -Rc 777 /var/cache/nginx && \
    chmod -R 777 /var/cache/nginx && \
    chmod -Rc 777 /var/log/nginx && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -Rc nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d
RUN touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid

USER nginx
CMD ["nginx", "-g", "daemon off;"]