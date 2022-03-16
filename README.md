# Ecommerce

An ecommerce shopping application built with Spring Boot, [Angular](https://angular.io/guide/file-structure) 
and MySQL. Styles created with [Bootstrap](https://getbootstrap.com/).

### Run with Docker
```
$ ./gradlew clean assemble
$ docker-compose up
```

Visit http://localhost:4200

The application currently doesn't have any data.

Login to the mysql container and create sample data using 
`src/main/resources/mysql/refresh-database-with-100-products.sql` and
`src/main/resources/mysql/countries-and-states.sql`

```shell
$ docker exec -t -i springboot-ecommerce-mysql /bin/bash
```
Use the credentials in the docker-compose file.
```shell
root@2fbfb39dd83b:/# mysql -u <useranme> -p
```
The `data-volume` directory will appear `mysql-data-volume:/var/lib/mysql` and can be shown with 
the `docker volume ls` command

### To run locally
The `spring.datasource.url` in the `application.properties` file needs to be updated to use the local datasource.
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/full-stack-ecommerce?useSSL=...
```
To run the Spring Boot back end:
```
$ cd spring-boot-ecommerce
$ ./gradlew clean assemble
$ ./gradlew bootRun
```
visit: http://localhost:8080/api/products

To run the Angular front end:
```
$ cd spring-boot-ecommerce/src/main/resources/webapp/angular-ecommerce
$ ng serve
```
visit: http://localhost:4200

### Clean up
Remove all containers wrapped in compose.
```
$ docker-compose down
```
Remove a specific image.
```
$ docker rmi <image-id>
```
Remove all images.
```
$ docker rmi $(docker images -aq)
```
Volumes exists:
```
$ docker volume ls
```
[Prune](https://docs.docker.com/config/pruning/) resources if you like.
```
$ docker volume prune
```