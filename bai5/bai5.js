let array1 = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"]
let array2 = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"]

function checkStar(star) {
    let result = "k tim thay"
    let flag = false
    for (let i = 0; i < array1.length; i++) {
        if (star == array1[i]) {
            if(i < array2.length)
                result = array2[i]
                flag = true
        }
    }
    return result
}

let star = prompt("Nhap ten star")
let cung = checkStar(star)
document.write(cung)