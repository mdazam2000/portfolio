* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

body {
    background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
    color: white;
}

/* NAVBAR */

nav {
    position: fixed;
    width: 100%;
    background: rgba(0,0,0,0.6);
    padding: 15px;
    text-align: center;
    backdrop-filter: blur(10px);
    z-index: 1000;
}

nav a {
    color: white;
    text-decoration: none;
    margin: 0 20px;
    font-weight: bold;
    transition: 0.3s;
}

nav a:hover {
    color: #00e6e6;
}

/* SECTIONS */

section {
    min-height: 100vh;
    padding: 120px 80px;
}

h1 {
    font-size: 60px;
    margin-bottom: 20px;
}

h2 {
    font-size: 40px;
    margin-bottom: 20px;
    color: #00e6e6;
}

h3 {
    margin-bottom: 15px;
}

p {
    line-height: 1.6;
    max-width: 700px;
}

/* SKILLS */

ul {
    margin-top: 20px;
}

li {
    margin: 10px 0;
    padding: 10px;
    background: rgba(255,255,255,0.1);
    width: fit-content;
    border-radius: 8px;
    transition: 0.3s;
}

li:hover {
    background: #00e6e6;
    color: black;
}

/* LINKS */

a {
    color: #00e6e6;
}

/* BUTTON STYLE */

#resume a {
    display: inline-block;
    padding: 12px 25px;
    background: #00e6e6;
    color: black;
    text-decoration: none;
    border-radius: 8px;
    margin-top: 20px;
    transition: 0.3s;
}

#resume a:hover {
    transform: scale(1.1);
}

/* RESPONSIVE */

@media(max-width: 768px){
    section{
        padding: 120px 30px;
    }

    h1{
        font-size: 40px;
    }

    h2{
        font-size: 30px;
    }

    nav a{
        margin: 0 10px;
        font-size: 14px;
    }
}