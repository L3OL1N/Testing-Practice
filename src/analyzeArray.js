function analyzeArray(arr=[]){
    const average = arr.reduce((pre,cur)=>pre+cur,0) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;
    let obj = {
        "average": average,
        "min": min,
        "max": max,
        "length": length
    };
    return obj;
}
module.exports = analyzeArray;