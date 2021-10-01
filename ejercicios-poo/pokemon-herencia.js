class Pokemon {

    name = ""; 
    type = ""
    evolutions = [];

    constructor(name, type, evolutions) {
        this.name = name;
        this.type = type;
        this.evolutions = evolutions;
    }

    set name(name) {
        this.name = name;
    }

    set type(type) {
        this.type = type;
    }

    set evolutions(evolutions) {
        this.evolutions = evolutions;
    }

    get name() {
        return this.name
    }

    get type() {
        return this.type
    }
    get evolutions() {
        return this.evolutions
    }
        
    attack() {
        return `${this.name}, esta atacando`;
    }

    evolve(evolution = 0) {
        const EVOLVE = this.evolutions[evolution] || "";
        let message = "No puedo evolucionar";

        if (EVOLVE) {
            message = `${this.name} esta evolucionando a ${EVOLVE}`;
            this.name = EVOLVE;
        }

        return message;
    }
}

class TypeFire extends Pokemon {

    constructor(name, evolutions) {
        super(name, "fire", evolutions);
    }
    message() {
        return `Hola soy ${this.name} y soy de tipo fuego`;
    }
}

const CHARMANDER = new TypeFire("charmander", ["Charmeleon", "Charizar"]);
console.log(CHARMANDER.message());

CHARMANDER.name = "CHARMANDER";


console.log(CHARMANDER.message());