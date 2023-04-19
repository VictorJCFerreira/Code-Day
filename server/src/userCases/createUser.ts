import { prisma } from "../../PrismaClient/prismaclient";
import { userServices } from "../userServices";
import  { User } from ".prisma/client"
import bcrypt from "bcryptjs"

export class createUser{
    async execute({email,password,name}:userServices): Promise<User>{
        const hashPassword = await bcrypt.hash(password, 12)

        const users = await prisma.user.create({
            data:{
                email: email,
                name: name,
                password: hashPassword
            }
        })

        return users
    }
}