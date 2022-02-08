# https://spring.io/guides/gs/spring-boot-docker/
FROM openjdk:17-jdk-slim-buster

EXPOSE 8080
EXPOSE 8081

ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} ecommerce-docker.jar
ENTRYPOINT ["java","-jar","/ecommerce-docker.jar"]
