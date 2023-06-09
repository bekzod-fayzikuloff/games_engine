import {configDotenv} from "dotenv";

configDotenv()

export const config = {
    CORS_ORIGIN: process.env.CORS_ORIGIN,
    PORT: +process.env.PORT
}
