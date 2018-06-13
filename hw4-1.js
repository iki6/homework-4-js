function largest(...args){
  return Math.max(...args);
}

largest(1,2,3,4);

//another approach:

function smallest(...args){
  let result = args.reduce(function(tmpRes, current){
	   return Math.min(tmpRes, current);
   });
  return result
}

smallest(0.2,7,1,2,3,4);
