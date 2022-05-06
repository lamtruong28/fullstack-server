import homeRouter from './homeRouter.js';
import postRouter from './postRouter.js';
function route(app) {
    app.use('/', homeRouter);
    app.use('/posts', postRouter);
}
export default route;

