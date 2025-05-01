
import { createInterface } from 'node:readline';
import { stdin, stdout } from 'node:process';
import { getCommands } from './registryOfCommands.js';

import { State } from './state.js';


export function cleanInput(input: string): string[] {
    return input
        .trim()
        .toLowerCase()
        .split(" ")
        .filter(word => word !== "")
        
}

export function startREPL(state: State) {

    const {commands, rl} = state;

    rl.prompt()

    rl.on('line', (line) => {
        const input = cleanInput(line);
        if(input.length === 0) {
            rl.prompt();
            return
        }
        //console.log(`Your command was: ${input[0]}`);

        const commandName = input[0];

        try {
            if(commandName in commands) {
                commands[commandName].callback(state)
            } else {
                console.log(`Unknown command: "${commandName}". Type "help" for a list of commands.`);
            }        
        } catch (error) {
            console.log(`An error occured: ${error}`)
        }

        rl.prompt();
    });
}