---
title: A Job Search Microservice using openAI
description: A novel approach to automate searching for jobs on LinkedIn and applying for them with openAI.
date: '2024-09-16'
categories:
  - AI
  - job hunting
published: true
---
# A Job Search Microservice using openAI

### From the github readme page:

> LinkedIn_AIHawk is a cutting-edge, automated tool designed to revolutionize the job search and application process on LinkedIn. In today's fiercely competitive job market, where opportunities can vanish in the blink of an eye, this program offers job seekers a significant advantage. By leveraging the power of automation and artificial intelligence, LinkedIn_AIHawk enables users to apply to a vast number of relevant positions efficiently and in a personalized manner, maximizing their chances of landing their dream job.

Enter your personal job search assistant.

### Let's Containerize a Python Microservice with Docker

[Docker](https://kinsta.com/knowledgebase/what-is-docker/) is a platform that packages applications and their dependencies in an isolated development environment. Packaging microservices in containers streamlines their deployment and management processes in servers as each service runs and executes independently in its container.

To containerize the microservice, you create a Docker image from a [Dockerfile](https://kinsta.com/docs/application-hosting/build-deploy/dockerfiles) that specifies the dependencies required to run the application in a container. Let's create a **Dockerfile** in the root directory of your project with these instructions:

```bash
FROM python:3.12-alpine 
WORKDIR /app 
COPY requirements.txt ./ 
RUN pip install -r requirements.txt 
COPY . . 
EXPOSE 5000 
CMD ["python", "./main.py"]
```

Before building the image, review these commands:

- `FROM` — Instructs Docker which base image to use. A base image is a pre-built instance containing the software and dependencies to run the Flask application in a container. Here we are using Alpine, a Unix variant, that is quite compact.
- `WORKDIR` — Sets the specified directory within the container as the working directory.
- `COPY requirements.txt ./` — Copies the dependencies in the **requirements.txt** file into the container’s **requirements.txt** file.
- `RUN` — Runs the specified command to install the dependencies the image requires.
- `COPY . .` — Copies all the files from the project’s root directory to the working directory inside the container.
- `EXPOSE` — Specifies the port where the container will listen for requests. However, Docker doesn’t publish the port to the host machine.
- `CMD` — Specifies the default command to execute when the container starts.

Next, add a **.dockerignore** file in the root directory of your project to specify the files that the Docker image should exclude. Limiting the image contents will reduce its final size and build time.

```bash
/venv
/services/__pycache__/
.gitignore
```

Now, build the Docker image (don't forget the period at the end [current directory]):

```bash
docker build -t get-a-job-bot .
```

Now launch/run the microservice in a Docker container:

```bash
docker run -p 5000:5000 get-a-job-bot
```

This command will start a Docker container running the microservice and expose port 5000 on the container to port 5000 on the host machine, allowing you to make HTTP requests from your web browser or Postman using the URL `http://localhost:5000`.
