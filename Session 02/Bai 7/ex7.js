function array(...num) {
    return num.map((element) => element.reduce((accumulative, value) => accumulative + value, 0));
}
let result = array([1, 2], [6, 7, 8], [12, 8])
console.log(result)