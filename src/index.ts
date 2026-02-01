import type Express  from 'express';
import express = require('express');

const app =express();
app.use (express.json());
app.post('/', (req: Express.Request, res: Express.Response) => {
    console.log(req.body);
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});