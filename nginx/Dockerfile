FROM nginx
RUN rm -f /etc/nginx/conf.d/*.conf \
	&& rm -f /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d
COPY nginx.conf /etc/nginx
