# ecommerce

An ecommerce shopping application build with Spring Boot and [Angular](https://angular.io/guide/file-structure). 
Styles created with [bootstrap](https://getbootstrap.com/).

[Lombok and JPA use](https://dzone.com/articles/lombok-and-jpa-what-may-go-wrong) issues.

### To run
To run the Spring Boot back end:
```
$ cd spring-boot-ecommerce
$ ./gradlew bootRun
```
visit: http://localhost:8080/api/products

To run the Angular front end:
```
$ cd spring-boot-ecommerce/src/main/resources/webapp/angular-ecommerce
$ ng serve
```
visit: http://localhost:4200

### Docker
The `spring.datasource.url` in the `application.properties` file needs to be updated to use the data source in
the mysql container.
```properties
spring.datasource.url=jdbc:mysql://springboot-ecommerce-mysql:3306/full-stack-ecommerce?useSSL=false&useUnicode=yes&characterEncoding=UTF-8&allowPublicKeyRetrieval=true&serverTimezone=UTC
```
Docker currently only runs the spring boot backend and mysql database.
```shell
$ docker-compose up
```
Login to the mysql container and create sample data using `/mysql/02-create-products.sql`
```shell
$ docker exec -t -i springboot-ecommerce-mysql /bin/bash
```
Use the credentials in the docker-compose file.
```shell
root@2fbfb39dd83b:/# mysql -u <useranme> -p
```
The `data-volume` directory will appear `mysql-data-volume:/var/lib/mysql` and can be shown with 
the `docker volume ls` command

#### Clean up
Remove all containers wrapped in compose.
```
$ docker-compose down
```
Remove all images.
```
$ docker rmi $(docker images -a)
```
Remove a specific image.
```
$ docker rmi <image-id>
```
Volumes exists:
```
$ docker volume ls
```
[Prune](https://docs.docker.com/config/pruning/) resources if you like.
```
$ docker volume prune
```