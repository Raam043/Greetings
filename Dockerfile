FROM nginx
COPY ./afternoon.jpg /usr/share/nginx/html
COPY ./app.js /usr/share/nginx/html
COPY ./bg.jpg /usr/share/nginx/html
COPY ./evening.jpg /usr/share/nginx/html
COPY ./index.html /usr/share/nginx/html
COPY ./morning.jpg /usr/share/nginx/html
COPY ./night.jpg /usr/share/nginx/html
COPY ./noon.jpg /usr/share/nginx/html
COPY ./style.css /usr/share/nginx/html
COPY ./RN.jpg /usr/share/nginx/html
