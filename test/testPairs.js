const pairs = (obj)=>{
    let result = []

    for(let i in obj){
        result.push([i,obj[i]])
    }

    return result;
}

module.exports = pairs;