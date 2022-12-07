/**
 * 
 *  Document     : controller.js
 *  Created on   : 29 Nov, 2015, 4:45:25 PM
 *  Author       : pkjana
 *  Organization : IIT Khatagpur
 *  
 */

function sliderChange() {
    var sliderVal = document.getElementById("slider1").value;
    CrankRotator12(sliderVal);
	SimulatorSetup.scene.remove(CrankRotator12.couplerPt);
}

function left_button() {
	var i,t;
	for (i=0;i<=1440;i++) 
	{
		t=setTimeout(dCrankRotator12,1,720/1440);
	}
	clearTimeout(t); 
	SimulatorSetup.scene.remove(dCrankRotator12.couplerPt);
}

function right_button() {
	var i,t;
	for (i=0;i<=1440;i++) 
	{
		t=setTimeout(dCrankRotator12,1,-720/1440);
	}
	clearTimeout(t); 
	SimulatorSetup.scene.remove(dCrankRotator12.couplerPt);
}