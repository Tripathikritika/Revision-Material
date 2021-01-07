var a = 20
function closuresOuter() {
    var a = 30
    function clousresInner(){
        console.log({a})
    }   
    return clousresInner
}
closuresOuter()()
