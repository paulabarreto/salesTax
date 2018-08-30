var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function calculateSalesTax(salesData, taxRates) {
  var sales = [];
  var companies = {};
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  for(var i = 0; i < salesData.length; i++){
    if(!companies[salesData[i].name]){
      var s = (salesData[i].sales).reduce(reducer);
      companies[salesData[i].name] = {totalSales: s, totalTaxes: 2};
    } else {
      var s2 = (salesData[i].sales).reduce(reducer);
      companies[salesData[i].name].totalSales += s2;
    }
  }

  return companies;
  //var result = salesData.sales.reduce((a,b) => a + b);
  //return result;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results);

// Expected Results:
// {
//   Telus: {
//     totalSales: 1300
//     totalTaxes: 144
//   },
//   Bombardier: {
//     totalSales: 800,
//     totalTaxes: 40
//   }
// }
