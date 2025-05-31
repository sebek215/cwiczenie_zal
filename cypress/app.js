const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(
    <html>
        <head>
            <title>Welcome to my app</title>
        </head>
        <body>
            <h1>Hello World</h1>
        </body>
    </html>
  );    
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    } );