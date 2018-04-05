// arithmetric progression
// and geometric progression
inputValue = (startVal, endVal) => {
    let AP = [];
    let GP = [];
    let d = 2;
    let i = 0;
    while (i < endVal){
    	let AP_formular = startVal + d*i;
    	let GP_formular = startVal*Math.pow(d, i);

    	if (AP_formular < endVal || GP_formular < endVal){
    		AP.push(AP_formular);
    		GP.push(GP_formular);
    	}
    	i++;
    }
    console.log(AP, GP);
}
inputValue(3, 13);