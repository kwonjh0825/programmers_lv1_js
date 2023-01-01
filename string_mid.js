function solution(str) {
    if (str.length % 2 === 0) {
        return str.substr((str.length-1)/2, 2)
    }
    return str.substr((str.length-1)/2, 1)
}

console.log(solution('abce'))