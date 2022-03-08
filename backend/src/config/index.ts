import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const databaseMocked = process.env.REACT_APP_DATABASE_MODE === 'MOCKED'

export const { NODE_ENV, PORT, LOG_FORMAT, LOG_DIR, ORIGIN } = process.env;

console.log("dbMock", databaseMocked);