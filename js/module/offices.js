import { connection } from "../../helpers/conexion.js";


// 8. **Detalles de oficinas en un país específico (por ejemplo, 'USA'):**

export const getAllOfficesSpecificCountry = async()=> {
    const[result] = await connection.query(`select officeCode, city, phone, state, addressLine1, country from offices where country = 'USA';`);
    return result;
}


// 2. 5. **Listar todas las oficinas y el número de empleados en cada una:**

export const getAllOfficesAndEmployeesAmount = async() =>{
    const [result] = await connection.query(`select o.officeCode, o.city, o.phone, o.country, count(e.employeeNumber) numeroEmpleados from offices o inner join employees e on e.officeCode = o.officeCode group by officeCode;`);
    return result;
}