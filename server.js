const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pipeline CI</title>
        <style>
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                background: linear-gradient(135deg, #0c1f77 0%, #5466ca 100%);
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            .container {
                text-align: center;
                background: white;
                padding: 50px;
                border-radius: 10px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            }
            .dot {
                display: inline-block;
                width: 20px;
                height: 20px;
                background-color: #00ff00;
                border-radius: 50%;
                margin-right: 10px;
                animation: blink 1s infinite;
            }
            @keyframes blink {
                0%, 50%, 100% { opacity: 1; }
                25%, 75% { opacity: 0.3; }
            }
            h1 {
                margin: 0;
                color: #333;
                font-size: 24px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1><span class="dot"></span>Todo está funcionando correctamente</h1>
        </div>
    </body>
    </html>
    `;
    res.send(html);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`\n✓ Servidor funcionando en http://localhost:${PORT}\n`);
});