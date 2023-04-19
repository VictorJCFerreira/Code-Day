import {FastifyInstance} from "fastify"
import { prisma } from "../../PrismaClient/prismaclient";
import { userServices } from "../userServices";

export async function userRoutes(app:FastifyInstance) {
    app.post("/newUser", async (request, response)=>{
        
        
    })
}