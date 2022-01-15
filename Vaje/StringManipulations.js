let find11 = function (arr) {
    let find = [];

    arr.forEach((element) => {
        if(element === 5) {
            find.push(element);
        }
    })
    return find;
};
console.log(find11([1,2,5,11,5,8,7]));