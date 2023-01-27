---
title: 'Setting up LibreHealth Toolkit and Radiology'
date: '2022-05-31'
description: "Getting to know the community and familiarizing myself with LibreHealht's codebase and their working style."
og_description: "Getting to know the community and familiarizing myself with LibreHealht's codebase and their working style."
cover_image: 'https://user-images.githubusercontent.com/69139607/170450651-bfe6ef15-5634-473d-908f-d95dab890113.png'
tags: 'gsoc, librehealth, open-source'
devUrl: ''
published: false
---

## LibreHealht Toolkit

LibreHealth Toolkit is a software API and user interface components that can be used to create electronic health record systems.
Read more about the project & find documentation at: http://radiology.librehealth.io/lh-toolkit

_(Username: admin, Password: Admin123)_

To set it up we have two options, one is to **compile it from source** and run it using `jetty` and the other one is to use
the **docker image**

### Compiling it from source

To compile it from source, you'll need to have the following dependencies installed:

- [Java 8](https://www.oracle.com/in/java/technologies/javase/javase8-archive-downloads.html)
- [MySQL 5.7](https://dev.mysql.com/downloads/mysql/5.7.html)
- [Maven 3.8](https://www.baeldung.com/install-maven-on-windows-linux-mac)

**Step 1: Clone**

To compile it from source we will first need to get the source code in our local system, for that you can use `git` and
run the following command to clone it locally:

```txt
git clone git@gitlab.com:librehealth/toolkit/lh-toolkit.git
```

If you don't have `SSH` setup, you can also use the http link:

```txt
git clone https://gitlab.com/librehealth/toolkit/lh-toolkit.git
```

**Step 2: Build**

Now that the project has been cloned to your local machine, you `cd` into that project and build the packages by running
the following `maven` command, to check if the you're in the right place run `pwd` you should be in the root of
`lh-toolkit`

```txt
$ pwd
$ /home/user/lh-toolkit
$
$ mvn clean package
```

If you face a _Test Failure_ then you can skip tests by using the following command instead:

```txt
$ mvn clean package -DskipTests=true
```

**Step 3: Run**

To run `lh-toolkit` we need to run the `webapp` package inside of it, so we can just `cd` into the `webapp` folder in
the `lh-toolkit` root folder

```txt
$ pwd
$ /home/user/lh-toolkit
$ cd webapp
$ pwd
$ /home/user/lh-toolkit/webapp
```

Next, we're gonna be using `jetty` to build our `war` and to do this we'll need to run the following command:

```txt
$ mvn jetty:deploy-war
```

Now that the `war` has been built, we can move forward and run it. For that we'll run the following command

```txt
$ mvn jetty:run
```

### Running using the Docker Image

One of the maintainer of the project _Saptarshi Purkayastha_ have a repo containing the docker image of lh-toolkit, and
it makes the running of the project very simple

To use this docker image make sure you have the following installed:

- [Docker](https://docs.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)

**Step 1: Clone**

To clone the docker image to your local machine, you can use the following command:

```txt
git clone git@gitlab.com:sunbiz/lh-toolkit-docker.git
```

If you don't have `SSH` setup:

```txt
git clone https://gitlab.com/sunbiz/lh-toolkit-docker.git
```

**Step 2: Build & Run**

Check if you're in the right directory

```txt
$ pwd
$ /home/user/lh-toolkit-docker
```

Run the Docker Image

```txt
$ docker compose up
```

The sever will be started on `port:8080` and you can access the `lh-toolkit` installation screen by going to
http://localhost:8080/openmrs

**This is what it should look like:**

![lh-toolkit-installation-screen](https://gitlab.com/librehealth/toolkit/lh-toolkit-docs-devguide/-/raw/master/13.JPG)
