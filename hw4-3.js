sum(1,3,5,7);

function sum(...args){
  return args.length>0 ? args[args.length-1] + sum(...args.slice(0,-1)) : 0;
};
