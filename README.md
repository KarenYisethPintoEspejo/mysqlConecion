1. **Obtener todos los productos en stock:**

   ```sql
   select productName, quantityInStock from products;
   ```

2. **Lista de empleados que trabajan en una oficina específica (por ejemplo, '1'):**

   ```sql
   select firstName, lastName from employees where officeCode = 1;
   ```

3. **Detalles de un cliente específico (por ejemplo, customerNumber = 101):**

   ```sql
   select customerNUmber, customerName, contactFirstName, contactLastName, phone from customers where customerNumber = 496;
   ```

4. **Listar todos los pagos realizados por un cliente específico (por ejemplo, customerNumber = 101):**

   ```sql
   select customerNumber, checkNumber, paymentDate, amount from payments where customerNumber = 496;
   ```

5. **Obtener todos los pedidos con estado 'Shipped':**

   ```sql
   select orderNumber, orderDate, customerNumber status from orders where status = 'Shipped';
   ```

6. **Cantidad total de productos en stock:**

   ```sql
   select sum(quantityInStock) from products;
   ```

7. **Lista de todos los empleados con su jefe (si tienen):**

   ```sql
   select distinct e.employeeNumber as numeroEmpleado, e.lastName as apellidoEmpleado, e.firstName as nombreEmpleado, e.reportsTo as numeroJefe, j.firstName as nombreJefe, j.lastName as apellidoJefe, j.jobTitle as puestoDelJefe from employees e inner join employees j on e.reportsTO = j.employeeNumber;
   ```

8. **Detalles de oficinas en un país específico (por ejemplo, 'USA'):**

   ```sql
   select officeCode, city, phone, state, addressLine1, country from offices where country = 'USA';
   ```

9. **Listar todos los clientes en una ciudad específica (por ejemplo, 'Madrid'):**

   ```sql
   select customerNumber, customerName, contactFirstName, contactLastName, phone, city, state from customers where city= 'Madrid';
   ```

10. **Productos con precio de compra mayor a 50:**

    ```sql
    select productCode, productName, productLine, buyPrice from products where buyPrice > 50;
    ```

### Consultas Multitabla

1. **Obtener todos los pedidos realizados por un cliente específico (por ejemplo, customerNumber = 101) con detalles del producto:**

   ```sql
   select o.orderNumber, o.orderDate, o.status, d.quantityOrdered, d.productCode, p.productName, p.buyPrice from orders o inner join orderdetails d on o.orderNumber = d.orderNumber inner join products p on p.productCode = d.productCode where customerNumber = 103;
   ```

2. **Listar todos los empleados junto con la oficina en la que trabajan:**

   ```sql
   select e.employeeNumber, e.firstName, e.lastName, e.officeCode, o.city, o.phone, o.country from employees e inner join offices o on o.officeCode = e.officeCode; 
   ```

3. **Listar todos los clientes junto con su representante de ventas:**

   ```sql
   select c.customerNumber, c.customerName, c.contactFirstName, c.contactLastName, c.salesRepEmployeeNumber, r.firstName, r.lastName from customers c inner join employees r on c.salesRepEmployeeNumber = r.employeeNumber;
   ```

4. **Obtener el nombre y la cantidad total ordenada de cada producto:**

   ```sql
   select p.productName, sum(o.quantityOrdered) cantidadTotalOrdenada from products p inner join orderdetails o on p.productCode = o.productCode group by productName;
   ```

5. **Listar todas las oficinas y el número de empleados en cada una:**

   ```sql
   select o.officeCode, o.city, o.phone, o.country, count(e.employeeNumber) numeroEmpleados from offices o inner join employees e on e.officeCode = o.officeCode group by officeCode;
   ```