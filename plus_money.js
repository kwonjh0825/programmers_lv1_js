function solution(price, money, count) {
    let sum = 0
    for (let i = 1; i < count + 1; i++) {
        sum += price * i
    }
    if (money >= sum) {
        return (0)
    }
    return (sum - money)
}

console.log(solution(3, 20, 4))