FROM nginx:latest

COPY default.conf /etc/nginx/conf.d/default.conf
COPY ./front /usr/share/nginx/html

EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]