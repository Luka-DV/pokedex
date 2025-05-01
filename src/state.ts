
import { createInterface, type Interface } from "readline";

import { getCommands } from "./registryOfCommands.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => void;
};


export type State = {
    //callback: (commands: Record<string, CLICommand>) => void;
    commands: Record<string, CLICommand>;
    rl: Interface;
}

export function initState() {
    
    const commands = getCommands();

    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    });

    const state: State = {
        commands,
        rl
    }

    return state
}