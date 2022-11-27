import { Sequelize } from "sequelize";
console.log(process.env.POSTGRES_PASSWORD)
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