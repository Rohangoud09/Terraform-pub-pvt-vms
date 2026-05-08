const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {

    res.send(`

<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Terraform Task 6</title>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins',sans-serif;
}

body{
    background:linear-gradient(135deg,#020617,#0f172a,#1e293b);
    min-height:100vh;
    overflow:hidden;
    color:white;
    position:relative;
}

.hero{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    text-align:center;
    padding:20px;
}

h1{
    font-size:70px;
    margin-bottom:20px;
}

span{
    color:#38bdf8;
}

h2{
    font-size:30px;
    margin-bottom:20px;
}

p{
    font-size:18px;
    color:#cbd5e1;
    max-width:800px;
    line-height:1.8;
}

.rocket{
    position:absolute;
    bottom:-200px;
    font-size:120px;
    animation:launch 8s linear infinite;
}

@keyframes launch{

    0%{
        bottom:-200px;
        opacity:0;
        transform:rotate(-10deg);
    }

    10%{
        opacity:1;
    }

    50%{
        transform:rotate(10deg);
    }

    100%{
        bottom:120%;
        opacity:0;
        transform:rotate(-10deg);
    }
}

</style>

</head>

<body>

<div class="hero">

<h1>Hello <span>Rohan 🚀</span></h1>

<h2>Terraform Task 6 is Running Successfully</h2>

<p>
Azure VM + Terraform + GitHub Actions + Node.js deployment completed successfully.
Your cloud infrastructure is live and running perfectly.
</p>

</div>

<div class="rocket">
🚀
</div>

</body>

</html>

`);

});

app.listen(port, () => {

    console.log(`Server running on port ${port}`);

});