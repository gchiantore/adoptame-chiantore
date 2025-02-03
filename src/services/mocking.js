import {faker} from "@faker-js/faker"; 
import { createHash } from "../utils/index.js";

class MockingService {
    static async generateMockingUsers(num) {
        const usuarios = []; 
        for (let i = 0; i < num; i++) {
            usuarios.push({
                first_name: faker.person.firstName(),
                last_name: faker.person.lastName(), 
                email: faker.internet.email(), 
                password: await createHash("coder123"), 
                role: faker.helpers.arrayElement(["user", "admin"]),
                pets: []
            })
        }
        return usuarios; 
    }

    static async generateMockingPets(num) {
        const mascotas = []; 
        for (let i = 0; i < num; i++) {
            mascotas.push({
                name: faker.animal.petName(),
                specie: faker.helpers.arrayElement(["dog", "cat", "bird", "fish", "hamster","snake","lizard","turtle","horse"]),
                adopted: false,
                birthDate: faker.date.past(), 
                image: `https://placehold.co/150x150/?text="Hey Adoptame"&font=roboto"`
            })
        }
        return mascotas; 
    }

}

export default MockingService; 