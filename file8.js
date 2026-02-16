var a = 10
function f1() {
    var a = 20
    if(3>1) {
        let a = 30
        a = 40
        console.log(a)
    }
    console.log(a)
}

f1()
console.log(a)

//Employee employee = new 