class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.attackType = this.list_of_attacks(type);
    }

    list_of_attacks(type) {
        if (type === "wizard" ) {
            return "magic";
        } else if (type === "ninja" ) {
            return "shuriken";
        } else if (type === "warrior" ) {
            return "sword";
        } else if (type === "monk" ) {
            return "martial arts";
        } else {
            console.log("Unknown character.");
            return "unknown"
        } 
    }

    attack() {
        return `The ${this.type} attacked using ${this.attackType}`;
    }
}

let heroes = [
    ["Vinicius", 21, "ninja"],
    ["Helena", 16, "wizard"],
    ["José", 48, "warrior"],
    ["Ana Carolina", 46, "monk"],
]; 

for (let hero of heroes) {
    let [name, age, type] = hero
    const heroIsntance = new Hero(name, age, type);
    console.log(heroIsntance.attack());
}