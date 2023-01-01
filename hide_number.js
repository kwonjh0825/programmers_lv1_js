function solution(phone_number) {
    let l = phone_number.length - 4
    return '*'.repeat(l) + phone_number.slice(-4)
}

console.log(solution("01033334444"))