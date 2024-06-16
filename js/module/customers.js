import { connection } from "../../helpers/conexion.js";

// export const getAllLastNameASC = async()=>{
//     const [result] = await connection.query(`SELECT contactLastname, contactFirstname FROM customers ORDER BY contactLastname`);
//     return result;
// }

// export const getAllLastNameDESC = async()=>{
//     const [result] = await connection.query(`SELECT contactLastname, contactFirstname FROM customers ORDER BY contactLastname DESC`);
//     return result;
// }


// 3. **Detalles de un cliente específico (por ejemplo, customerNumber = 101):**

export const getSpecificCustomer = async ({customerNumber} = {customerNumber: 496})=>{
    const [result] = await connection.execute(`select customerNUmber, customerName, contactFirstName, contactLastName, phone from customers where customerNumber = ?`, [customerNumber]);
    return result;
}


// 9. **Listar todos los clientes en una ciudad específica (por ejemplo, 'Madrid'):**
export const getAllCustomerSpecificCity = async({city} = {city:Madrid}) =>{
    const [result] = await connection.execute(`select customerNumber, customerName, contactFirstName, contactLastName, phone, city, state from customers where city= ?;`, [city]);
    return result;
}