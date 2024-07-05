export function shouldBeBooks() {
    const { exec } = require('child_process');
    let list = [];
    
    exec('ls ./учебники/', (error, stdout, stderr) => {
    if (error) {
    console.error(`exec error: ${error}`);
    return;
    };
    console.log(stdout.split("\n"))
    
    });
}