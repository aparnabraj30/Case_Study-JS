const list = [5,3,2,7,2,3,1,9,9,7,2,8,3,5,2 ];
let count = {}, compare = 0, mostFreqItem;
function element(){
    for(let i = 0, len = list.length; i < len; i++){
        var item = list[i];
        if(count[item] === undefined) {
            count[item] = 1;
        }
        else{
            count[item]++;
        }
        if(count[item] > compare){
            compare = count[item];
            mostFreqItem = list[i];
        }
    }
    console.log("The most frequent item in the array is "+mostFreqItem);
}

element(list)