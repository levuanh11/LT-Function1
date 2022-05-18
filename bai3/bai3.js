function aBc(a, b) {
    if (a > b) {
        alert ("a>b")
    } else {
        let sum = a + b
        return sum
    }
    alert(sum)
}

let numa = +prompt("nhap numa")
let numb = +prompt("nhap numb")
let D = aBc(numa, numb)
alert(D)