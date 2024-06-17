import { connection } from "../../helpers/conexion.js";

// 1. **Obtener todos los productos en stock:**
export const getAllProductsStock = async () => {
    const [result] = await connection.query(`select productName, quantityInStock from products;`);
    return result;
}

// 6. **Cantidad total de productos en stock:**
export const getAllProductsAmountStock = async() => {
    const[result] = await connection.query(`select sum(quantityInStock) from products;`);
    return result;
}

// 10. **Productos con precio de compra mayor a 50:**
export const getAllProductsPrice50 = async () =>{
    const[result] = await connection.query(`select productCode, productName, productLine, buyPrice from products where buyPrice > 50;`);
    return result;
}