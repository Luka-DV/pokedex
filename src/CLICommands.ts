
import { CLICommand, State } from "./state.js";


export function commandExit() {
    console.log("Closing the Pokedex... Goodbye!");
    process.exit(0);
}

export function commandHelp(state: State) {
    console.log("\nWelcome to the Pokedex!\n");
    console.log("Usage:\n");

    const {commands} = state;

    for(let command in commands) {
        console.log(`${command}: ${commands[command].description}`)

    }

    console.log("")
}