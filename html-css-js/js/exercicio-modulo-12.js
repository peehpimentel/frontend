function calcular(){
    var n1 = document.getElementById('n1')
    var num1 = Number(n1.value)
    var n2 = document.getElementById('n2')
    var num2 = Number(n2.value)
    var n3 = document.getElementById('n3')
    var num3 = Number(n3.value)
    var txt = document.getElementById('txt')
    var media = (num1+num2+num3)/3
    txt.innerText = `A média entre ${num1} + ${num2} + ${num3} = ${media}`
}
