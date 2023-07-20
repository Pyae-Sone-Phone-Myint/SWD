// for(let i= 1; i <= 5; i++){
//     if(i === 3) continue;
//     console.log(i, "======");

// }


// const letters = ["a", "b", "c", "d","e","f"];

// for(let i = 0; i < letters.length; i++) {
//     console.log("index", i , "---", letters[i])
// }


// const marks = [61,64,90,84,77,84];
// let totalMark = 0;
// for (let mark = 0; mark < marks.length; mark++) {
//     console.log(marks[mark])
//     totalMark += marks[mark];
// }

// console.log("Total : " + totalMark)

// const mgmgInfo = {
//     name : "mg mg",
//     age : 16,
//     marks : [
//         {
//             id : 1,
//             sub : "Myanmar",
//             mark : 61,
//         },
//         {
//             id : 2,
//             sub : "English",
//             mark : 64,
//         },
//         {
//             id : 3,
//             sub : "Math",
//             mark : 90,
//         },
//         {
//             id : 4,
//             sub : "Chem",
//             mark : 84,
//         },
//         {
//             id : 5,
//             sub : "Phys",
//             mark : 77,
//         },
//         {
//             id : 6,
//             sub : "Bio",
//             mark : 84,
//         },
//     ]
// }

// mgmgInfo.totalMark = 0;
// mgmgInfo.result = {};

// for(let i = 0; i < mgmgInfo.marks.length; i++) {
//     console.log(mgmgInfo.marks[i].mark);
//     mgmgInfo.totalMark += mgmgInfo.marks[i].mark;
//     mgmgInfo.result[mgmgInfo.marks[i].sub] = mgmgInfo.marks[i].mark >= 40 ? "Pass" : "Fail"
// }


// console.log(mgmgInfo)

function starGenerator(count, element = "* "){
    let star = "";
    for (let i = 0 ; i < count ; i ++ ){
        star += element;
    }
    return star;
};

for (let i = 1 ; i < 6 ; i++){
    console.log(starGenerator(i))
}

for (let i = 6 ; i > 1 ; i--){
    console.log(starGenerator(i, "= "))
}

// for(let i= 1; i<= 6;i++ ){
//     // console.log(starGenerator(i, i%2 === 0 ? "= " : "* ") )

//     if(i%2 === 0) {
//         console.log(starGenerator(i, "= "))
//     }else {
//         console.log(starGenerator(i, "* "))
//     }
// };


// rating

// for(let i = 1; i <= 5; i++) {
//     let result = "";
//     for(let x = 1; x <= 5; x++) {
//         // if(x <= i){
//         //     result += "* "
//         // }else{
//         //     result += "- "
//         // }
//         result += x<=i ? "* " : "- "
//     }
//     console.log(result,i)
// }

const ratings = [
    {
        id : 1,
        name : "Mg Mg",
        rate : 4,
    },
    {
        id : 2,
        name : "Zaw Zaw",
        rate : 2,
    },
    {
        id : 3,
        name : "Mya Mya",
        rate : 1,
    },
    {
        id : 4,
        name : "Hla Hla",
        rate : 5,
    },
    {
        id : 5,
        name : "Kyaw Kyaw",
        rate : 3,
    },
    {
        id : 6,
        name : "Mg Myo",
        rate : 1,
    },
];

for(let i = 0; i < ratings.length; i++) {
    let result = "";
    for (let x = 1; x <= 5; x++) {
        if(x <= ratings[i].rate){
            result += "* "
        }else {
            result += "- "
        }
    }
    console.log(result, ratings[i].name)
}