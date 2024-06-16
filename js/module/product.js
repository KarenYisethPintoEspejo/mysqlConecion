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