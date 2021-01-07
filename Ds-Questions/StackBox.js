function getRootList(valueList, callbackfn){
    // takes a list of numbers, calculates root using predefined "getRoot", calls the callbackfn with the result list.
    
    const output = []
    const lengthOfArray = valueList.length
   
    for( let i = 0 ; i < lengthOfArray; i++ ){
      
      output.push( new Promise(( res,rej ) => {

        getRoot( valueList[i] , res ) 

      }))
    }

    Promise.all( output )
           .then(( res ) => callbackfn( res ))
           .catch(( err ) => callbackfn( err ))
}