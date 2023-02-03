function some(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr) === !0){
            return true;
        }else {
            return false;
        }
    }

}

function every(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr) !== !0){
            return true;
        }else{
            return false;
        }
    }
}


function hasOddNumber(arr){
    return arr.some(function(odd){
        return odd%2 !== 0;
    })
}

function hasAZero(int){
    return int.toString().split('').some(function(zer){
        return zer === '0';
    });
}

function hasOnlyOddNumbers(arr){
    return arr.every(function(odd){
        return odd%2 !== 0;
    })
}

function hasNoDuplicates(arr){
    return arr.every(function(dups){
        return arr.indexOf(dups) === arr.lastIndexOf(dups);
    });}


function hasCertainKey(arr, key){
    return arr.every(function(keyCheck){
        return key in keyCheck;
    })

}

function hasCertainValue(arr, key, searchValue){
    return arr.every(function(val){
        return val[key] === searchValue;
    })
}