import { connection } from "../../helpers/conexion.js";

// 5. **Obtener todos los pedidos con estado 'Shipped':**

export const getAllOrdersShipped = async() => {
    const [result] = await connection.query(`select orderNumber, orderDate, customerNumber status from orders where status = 'Shipped';`)
    return result;
}