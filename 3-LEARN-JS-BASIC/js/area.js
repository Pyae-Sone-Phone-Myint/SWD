const records = [];


function calcArea(width, breadth) {
    let area = width * breadth;
    const recordObj = {
        width: width + " ft",
        breadth: breadth + " ft",
        area : area + " sqft",
    };

    records[records.length] = recordObj;
    return area + " sqft";
};

console.log(calcArea(25, 100));
console.log(calcArea(15, 60));
console.log(calcArea(10, 60));

// show records

console.table(records)