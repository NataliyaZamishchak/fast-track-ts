import readline from "readline";

export function readConsole() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Enter first integer (a): ", (inputA) => {
      const a = parseInt(inputA, 10);

      rl.question("Enter second integer (b): ", (inputB) => {
        const b = parseInt(inputB, 10);
        rl.close();
        resolve({ a, b });
      });
    });
  });
}
