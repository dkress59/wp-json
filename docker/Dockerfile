FROM wordpress:php8.0

RUN apt-get -y update \
    && apt-get -y upgrade \
    && apt-get -y install default-mysql-client unzip wget \
    && wget -O composer-setup.php https://getcomposer.org/installer \
    && php composer-setup.php --install-dir=/usr/local/bin --filename=composer
RUN curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar \
    && chmod +x wp-cli.phar \
    && mv ./wp-cli.phar /usr/local/bin/wp

WORKDIR /usr/src/wordpress

RUN composer init \
      --stability 'dev' \
      --name 'wp-ts/types-base'
#RUN composer config repositories.wpackagist '{"type":"composer","url":"https://wpackagist.org","only":["wpackagist-plugin/*","wpackagist-theme/*"]}'
#RUN composer require "wpackagist-plugin/document-generator-for-openapi"
#RUN composer require "wpackagist-plugin/wp-api-swaggerui"
#RUN composer require "wpackagist-plugin/wordpress-seo"

WORKDIR /var/www/html