FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=root

COPY ./test_db.sql /docker-entrypoint-initdb.d

EXPOSE 3306

