declare global {
    namespace NodeJS {
        interface ProcessEnv {
            POSTGRES_DB: string
            POSTGRES_USER: string
            POSTGRES_PASSWORD: string
            DB_HOST: string
            DB_PORT: number
        }
    }
}
export { };