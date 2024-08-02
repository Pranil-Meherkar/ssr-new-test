import path from 'path';
import fs from 'fs';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../shared/App';

const PORT = 3000;
const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
    const context = {};

    const appString = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );

    const indexFile = path.resolve(__dirname, '../client/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }

        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${appString}</div>`)
        );
    });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
