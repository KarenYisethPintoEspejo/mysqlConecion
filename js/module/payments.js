import { connection } from "../../helpers/conexion.js";


// 4. **Listar todos los pagos realizados por un cliente específico (por ejemplo, customerNumber = 101):**

export const getAllPaymentsSpecificCustomer = async({payment} = {payment: 496}) =>{
    const [result] = await connection.execute(`select customerNumber, checkNumber, paymentDate, amount from payments where customerNumber = ?;`, [payment]);
    return result;
}
