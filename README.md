# E-commerce Microservices

This project is an **E-commerce platform** built using a microservices architecture. Each service is responsible for a specific business domain, such as user management, product catalog, payments, analytics, and more. The services communicate using Kafka as an event streaming platform.

## Features

- Modular microservices for scalability and maintainability
- Real-time event-driven communication with Kafka
- Modern frontend using Next.js
- Dockerized for easy local development

## Services

- **User Service**: Handles user registration, authentication, and profiles
- **Product Service**: Manages product catalog and inventory
- **Order Service**: Processes customer orders
- **Payment Service**: Handles payment processing
- **Analytics Service**: Consumes events for business analytics
- **Email Service**: Sends notifications and order confirmations

## Tech Stack

- **Backend**: Node.js, Express, KafkaJS
- **Frontend**: Next.js, React
- **Messaging**: Apache Kafka
- **Containerization**: Docker, Docker Compose

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/e-commerce-microservices.git
   ```
2. Install dependencies for each service:
   ```
   cd services/<service-name>
   npm install
   ```
3. Start the services using Docker Compose:
   ```
   docker-compose up
   ```
4. Start the frontend:
   ```
   cd services/client
   npm install
   npm run dev
   ```

## License

This project is licensed under the MIT License.
