$(document).ready(function () {
	
	//get all the elements and store them in arrays
	var hrten = new Array(
		document.getElementById("hrten1").id
		,document.getElementById("hrten2").id
		,document.getElementById("hrten3").id);
	
	var hrone = new Array(
		document.getElementById("hrone1").id
		,document.getElementById("hrone2").id
		,document.getElementById("hrone3").id
		,document.getElementById("hrone4").id
		,document.getElementById("hrone5").id
		,document.getElementById("hrone6").id
		,document.getElementById("hrone7").id
		,document.getElementById("hrone8").id
		,document.getElementById("hrone9").id
	);
	
	var minten = new Array(
		document.getElementById("minten1").id
		,document.getElementById("minten2").id
		,document.getElementById("minten3").id
		,document.getElementById("minten4").id
		,document.getElementById("minten5").id
		,document.getElementById("minten6").id
	);	

	var minone = new Array(
		document.getElementById("minone1").id
		,document.getElementById("minone2").id
		,document.getElementById("minone3").id
		,document.getElementById("minone4").id
		,document.getElementById("minone5").id
		,document.getElementById("minone6").id
		,document.getElementById("minone7").id
		,document.getElementById("minone8").id
		,document.getElementById("minone9").id
	);
	
	//array of the elemenent arrays
	var elems = new Array(hrten,hrone,minten,minone);

	setTime();
	
	function setTime(){
		var d = new Date();
		var h = d.getHours();
		var m = d.getMinutes();
	
		if (h > 12) {
			h -= 12;
		} 
		else if (h === 0)
		{
			h = 12;
		}	
	
		//how many lights will we need to light up for each "digit"
		var hrTenCnt = Math.floor(h / 10);
		var hrOneCnt = h % 10;
		var minTenCnt = Math.floor(m / 10);
		var minOneCnt = m % 10;

		//array of how many need to be turned on per digit
		var countArray = new Array (hrTenCnt, hrOneCnt, minTenCnt, minOneCnt);
		
		//value for each light within its digit
		//which ones will be lit up and which will be off. start with all off (0) and turn on (1) as needed later
		var hrTenVal = new Array (0,0,0);
		var hrOneVal = new Array (0,0,0,0,0,0,0,0,0);
		var minTenVal = new Array (0,0,0,0,0,0);
		var minOneVal = new Array (0,0,0,0,0,0,0,0,0);
		//array of arrays used to turn lights on and off
		var valueArray = new Array (hrTenVal, hrOneVal, minTenVal, minOneVal);

		//loop through each digit.
		for(i = 0; i < valueArray.length; i++)
		{
			//inner loop one
			//clear all lights. since we need to turn them on and off randomly
			for(j = 0; j < valueArray[i].length; j++){
				valueArray[i][j] = 0; //not really needed because the val variables are created at each loop. possible improvemnt by restructuring variable declerations.
				$(document.getElementById(elems[i][j])).css('background-color','#666666'); //turn the light to gray (off)
			}
			
			//inner loop two
			//now that the lights are all off loop through again and turn the correct amount on but place them randomly within the digit.
			for(j = 0; j < countArray[i]; /*++ in loop*/ )
			{
				//randomly turn the lights on. make sure not to turn on a light that is already on. possible room for improvement as it may loop for a long time. haven't seen issues yet. but feels yucky.
				var x = Math.floor(Math.random()* elems[i].length)
				if (valueArray[i][x] === 0){
					valueArray[i][x] = 1;
					$(document.getElementById(elems[i][x])).css('background-color',"red"); //turn the light on.
					j++; //only loop if light status was changed. 
				}
			}
		}
		
		setTimeout(function(){setTime()},5000); //set the timer to call every 5 seconds.
	}
//i have taken teh pickColor function out of the code because i think it looks nicer when all one color.
//this can be put back in later if wanted by updating the hardcoded "red" value above when updating the elems array's css.
	// function pickColor() {
		// switch(Math.floor(Math.random()*6))
		// {
			// case 0: 
			// return "red";
			// case 1:
			// return "orange";
			// case 2: 
			// return "yellow";
			// case 3:
			// return "green";
			// case 4:
			// return "blue";
			// case 5:
			// return "purple";
		// }
	// };
	
	});
