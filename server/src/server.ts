import fastify from "fastify";
import cors from "@fastify/cors"

const app =  fastify()
app.register(cors)

app.listen({
    port: 5555,
}).then(()=> {
    console.log("server running in http://localhost:5555")
}) 