const invert = (obj)=>{
    let result = {}

    for(let i in obj){
        result[obj[i]]=i
    }

    return result;
}

module.exports = invert;