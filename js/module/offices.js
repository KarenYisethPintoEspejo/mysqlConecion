import { connection } from "../../helpers/conexion.js";


// 8. **Detalles de oficinas en un país específico (por ejemplo, 'USA'):**

export const getAllOfficesSpecificCountry = async()=> {
    const[result] = await connection.query(`select officeCode, city, phone, state, addressLine1, country from offices where country = 'USA';`);
    return result;
}