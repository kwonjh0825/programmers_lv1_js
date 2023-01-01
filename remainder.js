function solution(arr, divisor) {
    let ans = arr.filter(t => t % divisor === 0)
    if (ans.length < 1) {
        ans.push(-1)
    }
    ans.sort(function (a, b) {
        return a - b;
    })
    return ans
}

console.log(solution([5,9,7,10],5))