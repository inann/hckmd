function(context, args){ // target:#s.user.script, lock_level:"ez_num"
	var caller=context.caller;
	var l=#fs.scripts.lib();
	var c=["open", "unlock", "release"];
	var ll=["EZ_21", "EZ_35"];
	var sc=false;
	var res="";
	var res2="";
	var cmd=args.lock_level

	for(var i=0; i<c.length; i++){
		res=args.target.call({cmd:c[i]});
		if(cmd==="EZ_21"){
			if(res.includes("LOCK_UNLOCKED")){
				sc = true;
				break;
			}
		} else {
			if(res.includes("digit")){
				for(var j=0;j<10;j++){
					res2=args.target.call({cmd:choices[i],digit:j});
				}
				if(res2.includes("LOCK_UNLOCKED")){
					sc=true;
					break;
				}
			}
		}
	}
	return { ok:sc, msg:res + res2};
}
