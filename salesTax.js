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
    var currentCompany = salesData[i];
    var currentCompanyName = currentCompany.name;
    if(!companies[currentCompanyName]){
      var s = (currentCompany.sales).reduce(reducer);
      var totalTax = taxRates[currentCompany.province] * s;
      companies[currentCompanyName] = {totalSales: s, totalTax: totalTax};
    } else {
      var s2 = (currentCompany.sales).reduce(reducer);
      var totalTax2 = taxRates[currentCompany.province] * s2;
      companies[currentCompanyName].totalSales += s2;
      companies[currentCompanyName].totalTax += totalTax2;
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
