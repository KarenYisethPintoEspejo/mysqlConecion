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


import { getAllProductsStock } from "./js/module/product.js";

import { getEmployeesSpecificOffice } from "./js/module/employees.js";




console.log(await getAllProductsStock());  //Consulta 1
console.log(await getEmployeesSpecificOffice({office:1}));  //Consulta 2
