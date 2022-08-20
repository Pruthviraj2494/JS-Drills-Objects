const testKeys = (obj)=>{
    let result = [];

    for(let i in obj){
        result.push(i)
    }
    return result;
}

module.exports = testKeys;