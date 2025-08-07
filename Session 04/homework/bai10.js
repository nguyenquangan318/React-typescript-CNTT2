var myString = "hello world apple banana orange pumpkin cucumber";
function checkSubString(string) {
    //B1: Tao ra 1 mang cac tu trong chuoi truyen vao
    //["hello", "world", ...]
    var words = string.split(" ");
    var result = "";
    //Duyet tung tu trong mang cac tu con
    words.forEach(function (word) {
        //B2: Tao ra cac Set tu cac tu con
        var charSet = new Set(word);
        //Kiem tra tu co ky tu trung nhau khong
        if (charSet.size === word.length) {
            //B3: So sanh do dai Set voi do dai result
            if (charSet.size >= result.length) {
                //B3.1: Neu lon hon thi gan lai result moi
                result = word;
            }
        }
    });
    return result;
}

console.log(checkSubString(myString));
