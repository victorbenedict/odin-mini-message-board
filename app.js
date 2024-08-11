import path from 'path';
import url from 'url';
import express from 'express';
import newRouter from './routes/newRouter.js';

const PORT = process.env.PORT || 3000;
const app = express();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

export const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    createdAt: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    createdAt: new Date(),
  },
];

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/new', newRouter);

app.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

app.listen(PORT, () => {
  console.log(`Mini Message Board App - listening on port ${PORT}`);
});
