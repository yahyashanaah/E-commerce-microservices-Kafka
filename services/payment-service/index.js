import express from 'express';
import cors from 'cors';
import { Kafka } from 'kafkajs';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(express.json());

const kafka = new Kafka({
    clientId: 'payment-service',
    brokers: ['localhost:9094']
});

const producer = kafka.producer();

const connectToKafka = async () => {
    try {
        await producer.connect();
        console.log('Connected to Kafka');
    } catch (error) {
        console.error('Error connecting to Kafka:', error);
    }
};

app.post('/payment-service', async (req, res) => {
    const {cart} = req.body

    const userId = "1234";

    await producer.send({
        topic: "payment-successful",
        messages:[{ value: JSON.stringify({ userId, cart }) }]
    });

    setTimeout(() => {
        res.status(200).json({ message: 'Payment processed successfully' });
    }, 3000);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(8000, () => {
    connectToKafka();
    console.log('Payment service is running on port 4000');
});