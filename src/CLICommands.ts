import { CLICommand } from "./commandType";

export function commandExit() {
    console.log("Closing the Pokedex... Goodbye!");
    process.exit(0);
}

export function commandHelp(commands: Record<string, CLICommand>) {
    console.log("\nWelcome to the Pokedex!\n");
    console.log("Usage:\n");


    for(let command in commands) {
        console.log(`${command}: ${commands[command].description}`)

    }

    console.log("")
}