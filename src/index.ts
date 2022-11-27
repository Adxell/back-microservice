import app from './app'

import { sequilize } from './db'

import { ModelComments } from './models/Comments'

import dotenv from 'dotenv'

dotenv.config()


async function creatingModel(): Promise<void> {
    try {
        await ModelComments.sync()
        console.log('Model Comments created')
    } catch (error) {
        console.log("Error to create the model", error)
    }
}

async function connectDB(): Promise<void> {
    try {
        const response = await sequilize.authenticate()
        console.log("Connection has been sucessfully", response)
        creatingModel()
    } catch (error) {
        console.log("Unable to connect to the databas: ", error)
    }
}
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
    connectDB()
})