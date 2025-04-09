
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Default route handler
app.get('/', (req, res) => {
  res.send('Welcome to the KUBERNETES CLUSTERS!');
});

// Endpoint for addition
app.get('/add', (req, res) => {
  const { num1, num2 } = req.query;
  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('Invalid input. Please provide valid numbers.');
    return;
  }
  const result = parseFloat(num1) + parseFloat(num2);
  res.send(`Result: ${result}`);
});

// Endpoint for subtraction
app.get('/subtract', (req, res) => {
  const { num1, num2 } = req.query;
  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('Invalid input. Please provide valid numbers.');
    return;
  }
  const result = parseFloat(num1) - parseFloat(num2);
  res.send(`Result: ${result}`);
});

// Endpoint for multiplication
app.get('/multiply', (req, res) => {
  const { num1, num2 } = req.query;
  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('Invalid input. Please provide valid numbers.');
    return;
  }
  const result = parseFloat(num1) * parseFloat(num2);
  res.send(`Result: ${result}`);
});

// Endpoint for division
app.get('/divide', (req, res) => {
  const { num1, num2 } = req.query;
  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('Invalid input. Please provide valid numbers.');
    return;
  }
  const divisor = parseFloat(num2);
  if (divisor === 0) {
    res.status(400).send('Division by zero error.');
    return;
  }
  const result = parseFloat(num1) / divisor;
  res.send(`Result: ${result}`);
});

// Error handler for unmatched routes
app.use((req, res, next) => {
  res.status(404).send('Route not found.');
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

