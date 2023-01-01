function solution(a, b) {
    const M = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const Date = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED']
    let d = b
    for (let i=0; i<a-1;i++) {
        d += M[i]
    }
    return Date[d%7]
}

console.log(solution(5, 24))

