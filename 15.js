function timesTable(n){
    for (let i=1; i<=10; i++){
        //console.log(n + " x " + i + " = " + (n*i));
        console.log(`${n} x ${i} = ${n*i}`);
    }
}

timesTable(4);

function timesTableGrid(size){
    for (let i=1; i<=size; i++){
        let row = "";
        for (let j=1; j<=size; j++){
            row= row + `${i*j}\t`;
        }       console.log(row);               
    }

}

timesTableGrid(12);

