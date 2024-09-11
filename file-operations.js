const fs = require('fs');

// Create a file named "welcome.txt" and write "Hello Node" into it
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('File created and written successfully!');

    // Read data from "hello.txt"
    fs.readFile('hello.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File content:', data);
    });
});
