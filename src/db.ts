import { Sequelize } from "sequelize";
console.log(process.env.POSTGRES_DB)
export const sequilize = new Sequelize(
    process.env.POSTGRES_DB!,
    process.env.POSTGRES_USER!,
    process.env.POSTGRES_PASSWORD!,
    {
        host: 'localhost',
        dialect: 'postgres'
    }
)