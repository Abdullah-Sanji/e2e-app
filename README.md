# Running the app

run the following commands in order:
- docker network create employees
- docker run --network employees --name employees -v ${PWD}/sql:/docker-entrypoint-initdb.d -p 3306:3306 -e MYSQL_USER=sanji -e MYSQL_PASSWORD=sanji -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=employees -d mysql:latest --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
- docker-compose up

the app will be running on http://localhost:8080
