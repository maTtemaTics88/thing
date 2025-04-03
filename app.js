// app.js
const express = require('express');
const fs = require('fs');
const app = express();

app.set('view engine', 'hbs');

function readData(){
	return JSON.parse(fs.readFileSync('data.json', 'utf8'));
}

app.get('/', (req, res) => {
  const data = readData();
  res.render('home.hbs', { students: data.students });
});

app.post('/result', express.json(), (req, res) => {
    const newData = req.body;
    const data = loadData();
    data.students.push(newData);
    saveData(data);
    res.redirect('/');
})

const port = 3000;
app.listen(port, () => {
	console.log(`server running at http:\\localhost:${port}`)
})