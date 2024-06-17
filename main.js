// import { 
//     getAllLastNameASC, 
//     getAllLastNameDESC
// } from "./js/module/customers.js";

// import { getAll, 
//     getAllLastName, 
//     getAllFullNameJob, 
//     getAllJobTitle 
// } from "./js/module/employees.js";


// console.log(await getAllLastNameDESC());


import { getAllProductsStock, getAllProductsAmountStock, getAllProductsPrice50 } from "./js/module/product.js";
import { getEmployeesSpecificOffice, getAllEmployeesWithBoss, getAllEmployeesWithOffice } from "./js/module/employees.js";
import { getSpecificCustomer, getAllCustomerSpecificCity, getAllClientsWithSalesRepresentative } from "./js/module/customers.js";
import { getAllPaymentsSpecificCustomer } from "./js/module/payments.js";
import { getAllOrdersShipped, getAllOrderSpecificClient } from "./js/module/orders.js";
import { getAllOfficesSpecificCountry } from "./js/module/offices.js";




console.log(await getAllProductsStock());  //Consulta 1
console.log(await getEmployeesSpecificOffice({office:1}));  //Consulta 2
console.log(await getSpecificCustomer({customerNumber: 496}))  //Consulta 3
console.log(await getAllPaymentsSpecificCustomer({payment: 496}));  //Consulta 4
console.log(await getAllOrdersShipped()); //Consulta 5
console.log(await getAllProductsAmountStock());  //Consulta 6
console.log(await getAllEmployeesWithBoss());  //Consulta 7
console.log(await getAllOfficesSpecificCountry());  //Consulta 8
console.log(await getAllCustomerSpecificCity({city: 'Madrid'}));  //Consulta 9
console.log(await getAllProductsPrice50()); //Consulta 10

console.log(await getAllOrderSpecificClient({clientNumber:496}));  //Consulta 11
console.log(await getAllEmployeesWithOffice()); //Consulta 12
console.log(await getAllClientsWithSalesRepresentative()); //Consulta 13

