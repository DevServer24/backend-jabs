import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export const getUser = async(req,res) =>{
    try {
        const dataUser = await prisma.userdata.findMany()
        if(dataUser){
            

            return res.status(201).json(dataUser)
        }
    } catch (error) {
        return res.status(500).json({error:'Error'})
    }






}




