import inquirer from "inquirer"
import { differenceInSeconds } from "date-fns"

let time = await inquirer.prompt({
    type: "input",
    name: "timeT",
    message: "Enter your amount of time!:"

})
let input: number = time.timeT;
function countdownTimer(durationInSeconds: number): void {
    const endTime = new Date(Date.now() + durationInSeconds * 1000);
    const interval = setInterval(() => {
        const currentTime = new Date();
        const timeDifference = endTime.getTime() - currentTime.getTime();
        if (timeDifference <= 0) {
            clearInterval(interval);
            console.log("Time's up!");
        } else {
            const minutes = Math.floor(timeDifference / (1000 * 60));
            const seconds = Math.floor((timeDifference / 1000) % 60 + 1);
            console.log(`${minutes} minutes and ${seconds} seconds remaining`);
        }
    }, 1000);
}
countdownTimer(input)

