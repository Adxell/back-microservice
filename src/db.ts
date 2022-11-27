import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config()

export const sequilize = new Sequelize(
    process.env.POSTGRES_DB!,
    process.env.POSTGRES_USER!,
    process.env.POSTGRES_PASSWORD!,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        port: +process.env.DB_PORT
    }
)