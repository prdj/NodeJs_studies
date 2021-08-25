const cp = require("child_process");

const questionApp = cp.spawn("node", ["questions2.js"]);

questionApp.stdin.write("Pedro \n")
questionApp.stdin.write("Berlin \n")
questionApp.stdin.write("Become Donald Duck \n")


questionApp.stdout.on("data", data => {
    console.log(`from the question app: ${data}`);
});

questionApp.on("close", () => {
    console.log(`questionApp process exited`);
});

