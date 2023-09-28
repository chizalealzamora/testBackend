import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

import { loadApiEndpoints } from './controllers/api';

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config();

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT ?? 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public'), { maxAge: 31557600000 }));

loadApiEndpoints(app);

export default app;
