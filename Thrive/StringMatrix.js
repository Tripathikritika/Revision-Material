function runProgram(input) {
	input = input.trim().split('\n');
	let testCases = Number(input[0])
	let line = 1

	for( let i = 0 ; i< testCases ; i++){
		let [n,m] = input[line++].trim().split(" ").map(Number)
		let mat = []
		for( let j = 0 ; j < n ; j++){
			mat.push(input[line++].trim().split(""))
		}
		let str = input[line++].split("")
		let res = callStringMatrix(mat , str)
		console.log(res)
	}

	function callStringMatrix(mat , str){
		let i = 0
		let j = 0 
		let len = str.length
		while( j < len){
			if(mat[i].indexOf(str[j]) === -1){
				return "No"
			}
			else{
				let index = mat[i].indexOf(str[j])
				mat[i].splice(index,1)
				i++
				j++
				if(mat.length === i){
					i = 0
				}
			}
		}
		return "Yes"
	}
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
	read = read.replace(/\n$/,"")
	read = read.replace(/\n$/,"")
   runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});

runProgram(`1
3 3
aba
xyz
bdr
axbbydazr`)