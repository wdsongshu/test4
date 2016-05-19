
function collect_same_elements(collection_a, object_b) {
        var printArray=[];

     collection_a.forEach(function(element){
            if(isExist(element,object_b)){
                printArray.push(element.key);
            }
        });

    return printArray;

    function isExist(element,object_b) {
        for (var j = 0; j < object_b.value.length; j++) {
            if (element.key === object_b.value[j]) {
                return true;
            }
        }
    }
}

module.exports = collect_same_elements;
