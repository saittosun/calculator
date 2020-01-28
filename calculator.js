//jshint esversion: 6
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));//whenever you're trying to grab the information that gets posted to your server from an HMO form you're going to be using your cell encoded. by setting that extended option to true that basically just allows us to post nested objects.
// by using body-parser we're able to pass the HTTP request that we get. And by using urlencoded we can get access to the form data and we can then tap into each of these as if they were just properties of the object body.

const port = 3000;

// app.get('/', (req, res) => res.send('Hello World!'))

app.get('/', (req, res) => {
  console.log(__dirname);//this is the entire file path that it took to get to this current file.
  res.sendFile(__dirname + "/index.html");//if we want to send an entire web page such as our index.html. res.sendFile transfers the file over to the browser. When they make a get request.
});

app.post("/", (req, res) => {
  console.log(req.body.num1);//buradaki num1 index.html den geliyor.
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send('thanks for posting that' + ' ' + result);
});

app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator', (req, res) => {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = weight / (height * height);

  res.send("your BMI is " + bmi);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// app.get('/contact', (req, res) => res.send('contact me'))
