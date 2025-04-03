const sum = (...rest)=>{
    const ans = rest.reduce((acc, curr) => acc + curr, 0);
    return ans;
}

module.exports = {
    sum:sum 
}
// module.exports = sum;
// Another method to export sum()
