
import { createInterface } from 'node:readline';
import { stdin, stdout } from 'node:process';


export function cleanInput(input: string): string[] {
    return input
        .trim()
        .toLowerCase()
        .split(" ")
        .filter(word => word !== "")
        
}

export function startREPL() {

    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: "Pokedex > "
    });

    rl.prompt()

    rl.on('line', (line) => {
        const input = cleanInput(line);
        if(input.length === 0) {
            rl.prompt();
            return
        }
        //console.log(`Your command was: ${input[0]}`);
        rl.prompt();
    });
}