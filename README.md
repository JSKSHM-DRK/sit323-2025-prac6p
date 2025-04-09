# Kubernetes Deployment of a Containerized Node.js Application

This repository contains the files and instructions for deploying a containerized Node.js application to a Kubernetes cluster.

## Overview

This task involves containerizing a Node.js application using Docker and deploying it to a Kubernetes cluster. Kubernetes is used to orchestrate the containerized application. 

## Prerequisites

Ensure you have the following tools installed:

* Git
* Visual Studio Code
* Node.js
* Docker
* Kubernetes (Minikube, Docker Desktop, or a cloud provider)
* kubectl (Kubernetes CLI)
* Docker CLI 

Basic knowledge of Kubernetes and Docker is required. 

## Repository Contents

* `Dockerfile`:  The Dockerfile for building the Node.js application image.
* `deployment.yaml`:  The Kubernetes Deployment configuration.
* `service.yaml`:  The Kubernetes Service configuration.
* `app/` (or your application directory):  The Node.js application code.
* `README.md`:  This file with instructions and documentation. 

## Setup and Deployment Instructions

1.  **Set up the Kubernetes Cluster**

    * Choose a Kubernetes environment (Minikube, Docker Desktop, or cloud provider).
    * Install and configure `kubectl`.
    * Verify the cluster setup using `kubectl version` and `kubectl cluster-info`.

2.  **Create the Docker Image**

    * Prepare your Node.js application.
    * Create a `Dockerfile` to define the image.
    * Build the Docker image:

        ```bash
        docker build -t your-dockerhub-username/your-app-name:v1 .
        ```

    * Test the image locally:

        ```bash
        docker run -p 3000:3000 your-dockerhub-username/your-app-name:v1
        ```

    * Push the image to Docker Hub:

        ```bash
        docker login
        docker push your-dockerhub-username/your-app-name:v1
        ```

3.  **Create the Kubernetes Deployment**

    * Create a `deployment.yaml` file to define the Deployment.
    * Apply the Deployment:

        ```bash
        kubectl apply -f deployment.yaml
        ```

    * Check the Deployment status:

        ```bash
        kubectl get deployments
        kubectl get pods
        ```

4.  **Create the Kubernetes Service**

    * Create a `service.yaml` file to define the Service.
    * Apply the Service:

        ```bash
        kubectl apply -f service.yaml
        ```

    * Check the Service status:

        ```bash
        kubectl get services
        ```

## Accessing the Application

* **LoadBalancer:** Use the external IP from `kubectl get services`.
* **NodePort:** Use a Node's IP and the NodePort from `kubectl get services`.
* **Minikube:** Use `minikube service <service-name> --url`.
