import MockingService from "../services/mocking.js"; 
import { usersService, petsService } from "../services/index.js"


const getMockingPets = async (req, res) => {
    const mascotas = await MockingService.generateMockingPets(100);
    res.send({status: "success", payload: mascotas});
}

const getMockingUsers = async (req, res) => {
    const usuarios = await MockingService.generateMockingUsers(100); 
    res.send({status:"success", payload: usuarios}); 
}

const generateData = async (req, res) => {
    const data = req.body;
    const usuarios = await MockingService.generateMockingUsers(data.users);
    const mascotas = await MockingService.generateMockingPets(data.pets);
    for (let i = 0; i < usuarios.length; i++) {
        await usersService.create(usuarios[i]);
        console.log(usuarios[i]);
    }
    for (let i = 0; i < mascotas.length; i++) {
        await petsService.create(mascotas[i]);
        console.log(mascotas[i]);
    }
    res.send({status:"success", usuarios: usuarios, mascotas: mascotas});
}


export default {
    getMockingPets,
    getMockingUsers,
    generateData
}