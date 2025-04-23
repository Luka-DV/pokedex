
import { commandExit, commandHelp } from "./CLICommands.js";
import { CLICommand } from "./commandType.js";


export function getCommands(): Record<string, CLICommand>{
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp
        },
        // more commands
    };
}