Function.prototype.myBind = function (context,...args) {
  let f = this;
  return function(){
	   return f.apply(context, args.concat([].slice.call(arguments)));
  }
}
