import { homedir } from 'node:os';
import { App } from './app.js';
import greeting from '../helper/greeting.js';

greeting();

const app = new App(homedir());
await app.start();
