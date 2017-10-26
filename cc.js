function(context, args)
{
	var caller = context.caller;
	var l = #fs.scripts.lib();
	var c = ["red", "orange", "yellow", "green", "lime", "blue", "cyan", "purple"];
	var success = false;
	var ret = "";
	var ret2 = "";

	for (var i=0;i<c.length;i++){
		ret = args.target.call({c001:c[i]});
		if(ret.includes("c002_complement is missing")){
			for (var j=0;j<10;j++){
				ret2 = args.target.call({c001:c[i],c002_complement:c[j]});
				if(ret2.includes("LOCK_UNLOCKED")){
					success = true;
					break;
				}
			}
		}
	}

	return { ok:success, msg:ret2 };
}
