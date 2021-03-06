
### Build an image
docker build -t <image-name> <location-of-Dockerfile>

### run an image or run a container directly from a specific image
docker run -it -d -p<host-port>:<container-port> --name <container-name> <image-name>:tag

-i (interactive)

-t (TTY)

-d (Detached) : Run it in detached mode or else the life time of the container will be only as long as you 
run the terminal.

-P : Docker assigned default ports which will access the required port in the container (meaning the host 
machine can get assigned 32769 : pointing to default port of the image)

--name : represents a default name, if it is not specified the docker daemon will allocate a unique name
image-name : specifies the image to download from the repostory

tag : defaults to latest, a version for the given image can be specified.


### Allows you to view the logs in the container
docker logs <container-id>

### Allow you to tail logs
docker logs -ft <container-id>

### List all containers running and stopped
docker ps -a

### List all containers running
docker ps

### List all images available
docker images

### Stop a specified container
docker stop <container-id>

### Stop all containers
docker stop $(docker ps -a -q)

### Remove image (note: no containers for this image should be running)
docker rmi <image-id>

### Remove all images
docker rmi $(docker images -a)

### Remove a specific container
docker rm <container-id>

### Remove all containers
docker rm $(docker ps -a -q)

### Log in to the shell of the container. Typically entry-point refers to /bin/bash
docker exec -it <container-name> <entry-point>

docker login

docker tag <currentimage>:<tag> <repository-name>/<image-name>:<tag>

docker commit <container-id> <repository-name>/<image-name>:<tag>

docker push <repository-name>/<image-name>:<tag>

docker inspect <container-name>

docker inspect <image-name>

### Container volume is the logs directory for example or war directory
docker run -itd -P -v <host-volume-absolute-path>:<container-volume-path>  <container-name>

### Docker-machine commands
docker-machine version

### Version of docker-machine
docker-machine ls

### Create a docker-machine
docker-machine create --driver virtualbox --virtualbox-disk-size "20000" <machine-name>

docker-machine create --driver hyperv  <machine-name>

docker-machine create -d hyperv --hyperv-virtual-switch "<NameOfVirtualSwitch>" <nameOfNode>

### Docker-machine ip default provides the ip of the name of machine "default"
docker-machine ip default

### Telling docker to talk to the new machine
docker-machine env default

### Stop docker-machine
docker-machine stop default

### Start docker-machine
docker-machine start default

### Removing a docker machine
docker-machine rm <machine-name>

### Remove all docker machines
docker-machine rm -f $(docker-machine ls -q);

### Runs the container
docker-compose up

### Runs in detached mode
docker-compose up -d

### Builds the image
docker-compose build

### Stops the container
docker-compose stop <service-name>

### Starts the container
docker-compose start <service-name>

### Equivalent to docker exec
docker-compose run <service-name> /bin/bash

### Build a specific image.
docker-compose up --build

### View logs
docker-compose logs <service-name>

### Tail logs
docker-compose  logs -ft <service-name>

### Update specific container
docker-compose up -d --no-deps <service-name>

### Stop all containers
docker-compose down

### Remove errored out images
docker rmi $(docker images | grep "^<none>" | awk "{print $3}")


### Shut down containers, remove all images and rebuild images with docker-compose
docker-compose down

docker-compose rm -f

docker-compose pull

docker-compose up --build -d

### How to find the disk space used by docker
docker system df

du -sch /var/lib/docker/containers

du -c /var/lib/docker/ | head -15 | sort -rn

### Cleaning up old containers and images from docker and release resources
docker rm $(docker ps -qa --no-trunc --filter "status=exited")

docker rmi $(docker images --filter "dangling=true" -q --no-trunc)

docker rmi $(docker images | grep "none" | awk '/ / { print $3 }')

docker volume rm $(docker volume ls -qf dangling=true)

docker volume ls -qf dangling=true | xargs -r docker volume rm

docker network rm $(docker network ls | grep "bridge" | awk '/ / { print $1 }')

docker network prune

docker system prune

docker system prune -af