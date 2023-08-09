SWAPI People
===
This is a sample application to interact with https://swapi.dev/api/, that allows users to retrieve people information and save that people in a local database.

## Features / Use Cases
- Retrieve people from SWAPI through the client application: `GetSwapiPeople`
- Save people on local database: `SavePeople`
- Get people from local database: `GetPeople`

## Architecture

The application follows the `Clean Architecture`to take advantage of layers separation, single responsibility, and design patterns such as dependency injection and the repository interface are used to achieve modularity, flexibility, and ease of testing.

Opting for `TypeScript`, be sure to use types throughout your code to improve security and readability.

swapi-server.
- `api`: Exposes access points for clients to interact with the application.
- `application`: Contains the application logic, including handlers and other service classes.
- `domain`: Contains domain classes and repository interfaces.
- `infrastructure`: Implements the application infrastructure, including repositories and any other data access logic.

swapi-client.
- `components`: Functional react components to build your interfaces. Take advantage of Hooks to manage the life cycle and local state of components.
- `models`: Defines the application data strcured models.

## Design Patterns

- `Dependency Injection`: This pattern allows for inversion of control and separation of object creation and use.
- `Repository`: Implements ports and repository interfaces to interact with data sources. This allows the database implementation to be kept separate from the business logic, making it easier to test and persist changes.
- `Use Case / Interactor`: Within the use case layer, individual use cases can be implemented as independent classes, known as interactors or use cases. Each use case has a single responsibility and encapsulates the related business logic.

## Install & Dependence

#### Docker Containerization
This project is containerized using `Docker` to facilitate the management and execution of services in isolated and reproducible environments. Docker allows you to package all the necessary dependencies and configurations in containers, which simplifies the deployment and scalability process.

Make sure you have `Docker` and `Docker Compose` installed on your system:

- Docker: https://docs.docker.com/engine/install/
- Docker Compose: https://docs.docker.com/compose/install/

#### Structure of `docker-compose.yml`

The `docker-compose.yml` file defines the services needed to run the project. Here is a description of the services included:

- **swapi-database**: This service uses the MongoDB image to provide a database for the application. It runs on port `27017`.

- **swapi-server**: This service is the main part of the application. It is built from the `./swapi-server` directory and is configured using the environment variables defined in the file. Depending on `swapi-database`, it runs on port `8080` and binds to the database service.

- **swapi-client**: This service is the client of the application. It is built from the `./swapi-client` directory and runs on port `3030`.

To run the project using `Docker Compose`follow these steps:

1. Clone this repository: `git clone https://github.com/your-user/your-repo.git`.

2. Navigate to the project directory: `cd your-repo`.

3. Build the containers: `docker-compose build --no-cache`.

4. Run containers services: `docker-compose up`.

5. Open browser and go: ``.
  
#### Important

- Make sure to properly set the environment variables in the `docker-compose.yml` file to match the necessary configuration of the project.

- If you want to stop the services, run: `docker-compose down`.

## License

[MIT](https://opensource.org/license/mit/)