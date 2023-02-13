import { createPool } from 'mysql2/promise';
export const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'megak_ads',
    port: 3306, // bez tego nie działa === BLAD ECONREFUSED
    namedPlaceholders: true,
    decimalNumbers: true
});
