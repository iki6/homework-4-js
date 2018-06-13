
function transform(array){
    let result = array.map(function(curr){
    let returnFunc = function(){return curr};
    return returnFunc
  })
return result
}
