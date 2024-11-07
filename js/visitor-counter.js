function visitorCounter() {
    fetch("https://ybhm7un6f1.execute-api.us-east-1.amazonaws.com/dev/visitorCounter")
        .then(response => response.text())
        .then((body) => {
            document.getElementById("visitor-counter").innerHTML = body;
        }); 
}