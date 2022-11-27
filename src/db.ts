import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config()

export const sequilize = new Sequelize(
    process.env.POSTGRES_DB!,
    process.env.POSTGRES_USER!,
    process.env.POSTGRES_PASSWORD!,
    {
        host: 'containers-us-west-117.railway.app',
        dialect: 'postgres',
        port: 6992
    }
)