import {kafka} from './kafkajs';

const kafka = new Kafka({
    clientId: 'admin-service',
    brokers: ['localhost:9092']
});

const admin = kafka.admin();

const run = async () => {
    await admin.connect();
    await admin.createTopics({
        topics: [{ topic: 'payment-successful' }, { topic: 'order-successful' }]
    });
};

run();