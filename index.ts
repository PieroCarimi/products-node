import express, { Request, Response } from 'express';
import fetch from 'isomorphic-fetch';

const app = express();
const port = 3001;

app.get('/api/products', async (req: Request, res: Response) => {
    try {
        const response = await fetch('https://mockend.up.railway.app/api/products');
        const products = await response.json();
        res.json(products);
    }catch (error) {
        res.status(500).json({ error: 'Internal Server Error '});
    }
});

app.listen(port, () => {
    console.log(`Sever running at htpp://localhost:${port}`);
})