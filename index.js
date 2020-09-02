const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('pages/index'));
app.get('/g/', (req, res) => {
          const getStr = "Hello Get.";
          const getJson = {method: getStr};
          res.json(getJson);
       ); // 追加
app.post('/p/', (req, res) => res.json({method: "こんにちは、postさん"})); // 追加
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
