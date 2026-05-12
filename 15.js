function timesTable(n){
    console.log(`-------${n}--------------------`);
    for (let i=1; i<=10; i++){
        //console.log(n + " x " + i + " = " + (n*i));
        console.log(`${n} x ${i} = ${n*i}`);
    }
    console.log(`--------------------------`);
}

timesTable(4);

// function timesTableGrid(size){
//     for (let i=1; i<=size; i++){
//         let row = "";
//         for (let j=1; j<=size; j++){
//             row= row + `${i*j}\t`;
//         }       console.log(row);               
//     }

// }


function multiplyGrid(n){
    for(let i=1; i<=n; i++){
        timesTable(i);
    }
}

multiplyGrid(6);

