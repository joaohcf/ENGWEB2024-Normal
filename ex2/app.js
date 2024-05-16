import express from 'express';
import contratos from './routes/contratos.js';

const app = express();
const port = 16001;

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.urlencoded({extended: true}));

app.use('/', contratos);

app.listen(port, () => {
    console.log('Server listening - port ' + port)
});