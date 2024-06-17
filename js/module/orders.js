import { connection } from "../../helpers/conexion.js";

// 5. **Obtener todos los pedidos con estado 'Shipped':**

export const getAllOrdersShipped = async() => {
    const [result] = await connection.query(`select orderNumber, orderDate, customerNumber status from orders where status = 'Shipped';`)
    return result;
}


// 2. 1. **Obtener todos los pedidos realizados por un cliente específico (por ejemplo, customerNumber = 101) con detalles del producto:** 

export const getAllOrderSpecificClient = async({clientNumber} = {clientNumber : 496})=>{
    const [result] = await connection.execute(`select o.orderNumber, o.orderDate, o.status, d.quantityOrdered, d.productCode, p.productName, p.buyPrice from orders o inner join orderdetails d on o.orderNumber = d.orderNumber inner join products p on p.productCode = d.productCode where customerNumber = ?;`, [clientNumber]);
    return result;
}