

var arr = [
    {name: 'A', quatilty: 2, initPrice: 2},
    {name: 'A', quatilty: 1, initPrice: 1},
    {name: 'A', quatilty: 3, initPrice: 2},
    {name: 'A', quatilty: 4, initPrice:1},
]

var sum = arr.reduce( function(a, b){
    return (a) + b.initPrice*b.quatilty;
})
console.log(sum);
