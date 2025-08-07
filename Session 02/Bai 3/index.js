let checkParaty = (a) => {
    if(isNaN(a)) {
        console.log(`${a} khong phai la so`);
    }else if (a % 2 == 0) {
        console.log(`${a} la so chan`);
        
    }else {
        console.log(`${a} la so le`);
    }
}
checkParaty("a");