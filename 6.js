function drawStars(n){
    let stars="";
    for(let i=0; i<n; i++){
        stars = stars + "*";
    }
    return  stars;
}

console.log(drawStars(10));