const express = require('express');
const cors = require('cors');
const app = express();

const port = 3000;

const user1 = {
  name: 'Yarik',
  job: 'farmer'
}

const user2 = {
  name: 'Vlad',
  job: 'shepherd'
}

const user3 = {
  name: 'Igor',
  job: 'locksmith'
}

const users = [user1, user2, user3]

app.use('/public', express.static('public')).use(cors()).use(express.json());

app.get('/', (req, res) => res.send('Hello 👻'));
app.get('/users', (req, res) => res.send(users));
app.post('/users', (req, res) => {
  users.send(req.body);
})

app.listen(port, () => 
  console.log('Server  is running on http://localhost:3000')
)