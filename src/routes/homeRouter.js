import express from 'express';
import homeControler from '../app/controller/HomeController.js';
const route = express.Router();

route.get('/', homeControler.getHome);

export default route;