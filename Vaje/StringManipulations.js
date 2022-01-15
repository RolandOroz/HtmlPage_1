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
//random number for node creation
function randNum(num) {
    return Math.ceil(Math.random() * num);
}

//random id number
function randomIdNumber(divider) {
    return Math.ceil((Math.random()) * Date.now() / divider);
}

//******************************************* CLASS NODE ****************************************************
class Node {
    constructor(nodeName, idValueNode) {
        //values
        this.nodeName = nodeName;
        //random id value
        this.idValueNode = idValueNode;//randomIdNumber(1000_000);
        //random date value
        this.dateValueNode = randomDay(2021, 0, 3);
        //child
        this.children = [];
        //this.depth_Node = depth_Node;
    }

    get getAllNodeNames() {
        return this.nodeName;
    };

    get getAllNodeDates() {
        return this.dateValueNode;
    };

    get getNodeDatesGetTime() {
        return this.dateValueNode.getTime();
    };

    get getAllNodeIds() {
        return this.idValueNode;
    };
}

//random date generator
function randomDay(year, month, randomDayInterval) {
    const date = new Date();
    date.setFullYear(year);
    date.setMonth(month);
    date.setDate(Math.ceil(Math.random() * randomDayInterval));
    date.setHours(0, 0, 0, 0);  //sets T all to 0
    return date;
}

function setupDate(year, month, day) {
    const date = new Date();
    date.setFullYear(year);
    date.setMonth(month);
    date.setDate(day);
    date.setHours(0, 0, 0, 0);  //sets T all to 0
    return date;
}

// build tree with random nodes
function build(n, lvl) {
    lvl += 1;
    if (lvl > 4) return [];
    let output = [];

    for (let i = 0; i < n; i++) {
        let node = new Node("N" + lvl + "_" + i,
            randNum(3),
            //randomIdNumber(1000_000),
            randomDay(2021, 0, 31));

        node.children = build(randNum(3), lvl);
        output.push(node);
    }
    return output;
}

let output = build(randNum(1), -1);


let str = [];
console.log(str)
//display tree nodes visually
function displayNodeNames(arrValue, arr, lvl) {
    for (let i = 0; i < arr.length; i++) {
        let node = arr[i];
        let tempArr = arrValue;
        let spaces = " ";

        for (let j = 0; j < lvl; j++) {
            spaces += "-";
        }
        //console.log(spaces + node.nodeName);   //displays nodes using console.log
        tempArr.push(spaces + node.nodeName);       //displays nodes using return

        displayNodeNames(tempArr, node.children, lvl + 1);
    }
}
displayNodeNames(str, output, 0);

function itemLoop(arr) {
    let txt = "";
    arr.forEach((item) => {
        txt += "\n" + item;
    })
    return txt;
}
console.log(itemLoop(str))












