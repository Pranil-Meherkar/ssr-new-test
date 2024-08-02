import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../shared/App';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "dist" directory
app.use(express.static(path.join(__dirname, '../dist')));

app.use((req, res, next) => {
    console.log(`Received request for ${req.url}`);
    next();
});

// Handle all GET requests to render the React application
app.get('*', (req, res) => {
    console.log(`Received request for ${req.url}`);
    const context = {};
    const html = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );

    fs.readFile(path.resolve(__dirname, '../dist/index.html'), (err, data) => {
        if (err) {
            console.log('err', err)
            return res.status(500).send('Some error happeneddd');
        }
        return res.send(
            data.toString().replace('<div id="root"></div>', `<div id="root">${html}</div>`)
        );
    });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
