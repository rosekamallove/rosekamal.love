---
title: "Java and MySQL"
date: "2022-05-01"
description: "I have been learning Java and SQL at University, I thought to myself why not combine both of them, 
which can then help build the base for a future project maybe. P.S stay tuned for a Notes App using Spring Boot and Vaadin Fusion"
---

### Java DataBase Connectivity (JDBC)

#### What is JDBC ?

[Java Database Connectivity](https://www.javatpoint.com/java-jdbc) is tool or an application programming interface
(API) that establishes a connection between a standard Database (_say MYSQL_) and a Java Application that intends
to use that database.

![JDBC Flow Chart](https://static.javatpoint.com/images/core/jdbc.png)

#### Need for JDBC ?

Before JDBC, ODBC API was the database API to connect and execute the query with the database. But, ODBC API uses ODBC driver which is written in C language (i.e. platform dependent and unsecured). That is why Java has defined its own API (JDBC API) that uses JDBC drivers (written in Java language)

We can use JDBC API to handle database using Java program and can perform the following activities:

1. **Connect to the DataBase**
2. **Execute Queries and update statements to the database**
3. **Retrieve the result receive from the database**

So, we can make an analogy of JDBC as the API which will allow us to create our own MySQL workbench of sorts, or more realistically allow us to create the controller for the database in our application. (_if we are building a [MVC application](https://towardsdatascience.com/everything-you-need-to-know-about-mvc-architecture-3c827930b4c1)_)

#### Wait wait, what the hell is an API anyway ?

API (Application programming interface) is a document that contains a description of all the features of a product or software. It represents classes and interfaces that software programs can follow to communicate with each other. An API can be created for applications, libraries, operating systems, etc.

Let's perform a thought experiment, we went to restaurant and ordered some **food** the **food** here is the data that we want in programming terms now we ask the **waiter** to take our order and deliver a message to the **kitchen** the **backend** of an application. Tha **backend** does it's magic and get back out **food** or the **data**.

Here, the **waiter** is the **API**.

---

Now that we have a basic understand of what **JDBC** is let's move forward but before we can start coding there a few things that we need to know.

#### Data Types in JDBC

| **SQL**   | **Java**             |
| --------- | -------------------- |
| VARCHAR   | java.lang.String     |
| CHAR      | java.sql.String      |
| BIT       | boolean              |
| NUMERIC   | java.math.BigDecimal |
| INTEGER   | int                  |
| REAL      | float                |
| FLOAT     | float                |
| DOUBLE    | double               |
| BINARY    | byte[]               |
| DATE      | java.sql.Date        |
| TIMESTAMP | java.sql.Timestamp   |
| ARRAY     | java.sql.Array       |
| REF       | java.sql.Ref         |
| STRUCT    | java.sql.Struct      |
| BIGINT    | long                 |
| CLOB      | java.sql.Clob        |
| BLOB      | java.sql.Blob        |

#### JDBC Architecture

![JDBC Architecture](https://static.javatpoint.com/core/images/design-of-jdbc.png)

#### Setting up the Dev Environment

**Setting up Java Environment**

1. Download the [Latest SDK](https://www.oracle.com/java/technologies/downloads/)
2. Set `Java_Home`
3. Set `Java Path`

**Setting up MySQL Environment**

1. Download the Latest [MySQL Workbench](https://www.mysql.com/downloads/)
2. Extract the file
3. Run the setup file

> **Note:**
> You can use whichever Database application that you like as long as it is a **SQL database**

#### Steps to Connect JDBC

1. **Importing Packages**
   This procedure is followed to make sure the relevant packages are readily available for the API
2. **Load and Register Drivers**
   The imported drivers need to be loaded and registered for establishing a connection between application and database
3. **Connecting Database**
   After the first two steps, the next stage is to connect the data base. This can be done by **getConnection()**
4. **Writing the Queries**
   Here, we write in the SQL Command or Query that we need to execute
5. **Executing the Queries**
   Now the query from the API is executed using **executeQuery()**
6. **Processing Request**
   After the above five request, the system basically does two things:
   - Process Output Value
   - Retrieve Values
7. **Closing Statement**
   The resultSet and statement need to be closed explicitly.
8. **Closing Connections**
   The last stage is to ourselves or the API from the Database

### Let's Start Coding then 😃

#### Getting our Database Ready

- First we need to [launch MySQL](https://www.hivelocity.net/kb/how-to-start-stop-and-restart-mysql-server/), which we can do by launching the **MySQL** workbench or through the **terminal** for the sake of simplicity of this tutorial we are gonna be using the **terminal**
- Now that MySQL is running, we can create a database named `university` by typing in the command `CREATE DATABASE university;`, and then to check whether the database is running or not we can execute `SHOW DATABASES;` this is my output, notice the `university` database.

            mysql> show databases;
            +--------------------+
            | Database |
            +--------------------+
            | information_schema |
            | University |
            | customerdb |
            | mysql |
            | openmrs |
            | performance_schema |
            | sys |
            +--------------------+
            7 rows in set (0.02 sec)
            mysql>

- Next we will create a table named `engineeringStudents` with **{id, department, first_name, last_name, passout_year, uni_rank}** by executing the following command:

            CREATE TABLE `customerdb`.`EngineeringStudents` (
            `student_id` INT NOT NULL,
            `department` VARCHAR(45) NOT NULL,
            `first_name` VARCHAR(45) NOT NULL,
            `last_name` VARCHAR(45) NOT NULL,
            `passout_year` INT NOT NULL,
            `university_rank` INT NOT NULL,
            PRIMARY KEY (`student_id`),
            UNIQUE INDEX `student_id_UNIQUE` (`student_id` ASC));

- Now the last step to make our Database ready is to insert some data into it, which we will be doing by the following commands

            insert into engineeringstudents
              value(10201, 'CSE', 'Kiran', 'Acharya', 2018, 1272);
            insert into engineeringstudents
              value(10202, 'ME', 'Jayson', 'Robert', 2020, 1249);
            insert into engineeringstudents
              value(10203, 'CSE', 'Praveen', 'Kumar', 2017, 1238);
            insert into engineeringstudents
              value(10204, 'ECE', 'Rajesh', 'Kumar', 2019, 1243);
            insert into engineeringstudents
              value(10205, 'CSE', 'Trevor', 'Krugar', 2018, 1000);
            insert into engineeringstudents
              value(10206, 'CSE', 'Jogn', 'Denver', 2018, 1);
            insert into engineeringstudents
              value(10207, 'ECE', 'Jennifer', 'Charles', 2019, 13232);

#### The Java Module 🥲
