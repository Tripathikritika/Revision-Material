// // https://codesandbox.io/s/busy-euclid-qcxvc?file=/src/Component/DataList.jsx:2403-2416


function flatten(arr) {
    // Return flatten array
    return arr.reduce((a,b)=>{
      return a.concat(Array.isArray(b) ? flatten(b) : b)
    },[])
  }
  console.log(flatten([9, 3, [2, 5, 8, [1, 1], [2, 3]], [1], [1]]));

  // [9,3,2,5,8,1,1,2,3,1,1]

const obj = 
	{
		 a: {
			 b: {
			   c: {
			     d: "test"
			   }
			 }
		 }
	}
	
getValue(obj , 'a.b.c.d')

function getValue(obj , str){
   str = str.split(".")
  let z = obj
  let i = 0 
  while(true){
    if(typeof(z[str[i]]) === 'object'){
      z = z[str[i]]
      i++
    }
    else{
      console.log(z[str[i]])
      return 
    }
  } 
}
    
