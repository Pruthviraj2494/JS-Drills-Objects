const testValues = (obj)=>{
    let result = []

    for(let i in obj){
        result.push(obj[i])
    }

    return result;
}

module.exports = testValues;