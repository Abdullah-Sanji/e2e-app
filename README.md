# Summary

e2e app is a simple CRUD operation using Angular as FE and Nodejs as API/BE and mysql as DB

# Running the app

You can run the app by excecuting the following commands:
- docker network create employees
- docker run --network employees --name employees -v ${PWD}/sql:/docker-entrypoint-initdb.d -p 3306:3306 -e MYSQL_USER=sanji -e MYSQL_PASSWORD=sanji -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=employees -d mysql:latest --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
- docker-compose up

the app will be running on http://localhost:8080
