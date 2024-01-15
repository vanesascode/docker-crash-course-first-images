# Docker Crash Course:

With this course I learned to:

- Write a Dockerfile
- Build a Docker image
- Run Docker containers

![1_E8IgOSkMTpBRs0w0-Zsx2g](https://github.com/vanesascode/fils/assets/131259155/869cabc6-9a1f-4178-8e50-dc58ffa84731)

---

---

## 🐳 CLI COMMANDS TO COMMUNICATE WITH DOCKER:

👉 1st - Install Docker Desktop

🔹 `docker images` (to see your images)

🔹 `docker ps` (to see your active containers)

🔹 `docker pull nginx:1.24` (to get the image from docker hub, with a specific version) – but not necessary, you can run it directly.

🔹 `docker run nginx:1.24` (to run the image)

🔹 `docker run -d nginx:1.24` (to run the image without blocking the terminal)

But you may want to see the logs at some point, so: `docker logs 518ab4464c24` (id of container)

🔹 `docker stop 1a5b45664d2d` (to stop a container)

🔹 `docker run -d -p 9000:80 nginx:1.24` (To bind a container port 80 on a local host port 9000. Then you go to http://localhost:9000/)

🔹 `docker ps -a` (to show all the containers, started or stopped)

🔹 The run command always creates a new container, so, to start a container that already exists:` docker start b8b2e4f65382` You can also use the name instead of the ID: `docker stop gracious_chaplygin`

🔹 To add your own name: `docker run --name nameofmyapp -d -p 9000:80 nginx:1.23`

🔹 `docker build -t welcome-to-docker . `(To build an image. The -t flag tags your image with a name. (welcome-to-docker in this case). And the `.` lets Docker know where it can find the Dockerfile, in this case in the root of the folder)

## 🐳 DOCKERFILE

A Dockerfile is a text file that contains a set of instructions used to build a Docker image. It defines the environment and configuration of a containerized application.

### Base image

In Docker, the base image refers to the starting point for creating Docker images. It is the foundation upon which your application or service will be built.

The base image contains the `operating system and any additional software or dependencies required by your application`.

👉 It forms the bottom layer of the Docker image and subsequent layers are built on top of it.

The choice of base image depends on your specific requirements. Docker provides a wide range of official base images for different operating systems and programming languages. Some popular base images include:

- ubuntu: A lightweight base image based on the Ubuntu operating system.
- node: An official Node.js base image that includes Node.js and npm.
- python: An official Python base image that includes Python and pip.
- alpine: A minimal base image based on Alpine Linux, known for its small size and security.
- golang: An official Go base image that includes the Go language tools.

When creating a Dockerfile, you typically specify the base image using the FROM instruction. For example:

```
FROM node:14
```

### Instructions:

The Dockerfile consists of various instructions that define the steps to build the image. Some commonly used instructions include `RUN` to execute commands during the build process, `COPY` to copy files from the local filesystem into the image, `WORKDIR` to set the working directory within the image, and `EXPOSE` to specify which ports should be exposed.

### Env

`Environment Variables`: You can set environment variables in the Dockerfile using the ENV instruction. These variables can be used to configure the application running inside the container.

### ENTRYPOINT & CMD

The ENTRYPOINT instruction specifies the command that will be executed when a container is started from the image. The CMD instruction defines the default command to be executed, which can be overridden when running the container.

Here's an example Dockerfile that demonstrates the usage of the FROM, RUN, COPY, WORKDIR, ENV, EXPOSE, ENTRYPOINT, and CMD instructions:

```
# Use a base image
FROM ubuntu:latest

# Set environment variables
ENV APP_HOME=/app \
    PORT=8080

# Set the working directory
WORKDIR $APP_HOME

# Copy application files into the image
COPY . .

# Install dependencies
RUN apt-get update && \
    apt-get install -y python3 && \
    apt-get clean

# Expose a port
EXPOSE $PORT

# Define the entrypoint
ENTRYPOINT ["python3", "app.py"]

# Set the default command
CMD ["--config", "default.conf"]
```

In this example:

- We start with the base image ubuntu:latest.

- The ENV instruction sets the environment variables APP_HOME and PORT.

- The WORKDIR instruction sets the working directory to /app.

- The COPY instruction copies the local files into the image at the current working directory.

- The RUN instruction installs the python3 package using apt-get.

- The EXPOSE instruction exposes the port defined by the PORT environment variable.

- The ENTRYPOINT instruction specifies the command to run when the container starts.

- The CMD instruction provides default command-line arguments to the entrypoint command.

---

## 🐳 Repositories

A repository is a collection of related images with the same name but different versions.

`DockerHub` is a public and a private registry. By default, the one that works with Docker.

`AWS ECR` is a private registry, in which you can have your own repositories to store your image

`Sonatype Nexus` is a popular repository manager for managing and hosting software artifacts: it can be used as a private Docker registry to store and distribute Docker images within an organization.
