FROM nginx

RUN apt-get update
RUN apt-get -y install curl make g++
RUN curl -sL https://deb.nodesource.com/setup | bash -
RUN apt-get -y install -y nodejs

ADD . /www/
RUN cd /www/ && npm install && npm run build

RUN rm -rf /etc/nginx/conf.d/*
ADD www.conf /etc/nginx/conf.d/
