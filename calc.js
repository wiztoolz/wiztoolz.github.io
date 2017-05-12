function Struct(){
	var as_per;
	var mainWeight;
	var subWeight;
	//result
	var mainDmg;
	var subDmg;
}

function Calc(){
	var color = new Array(5);
	
	color["red"] = new Struct();	// red
	color["blue"] = new Struct();	// blue
	color["yellow"] = new Struct();	// yellow
	color["white"] = new Struct();	// white
	color["black"] = new Struct();	// black

	rand=document.getElementById("rand").value;
	chain=document.getElementById("chain").value;
	atk_up=document.getElementById("atk_up").value;
	char_type1=document.getElementById("char_type1").value;
	char_type2=document.getElementById("char_type2").value;
	pannel_type=document.getElementById("pannel_type").value;
	char_atk=document.getElementById("char_atk").value;

	rand=Number(rand);
	chain=Number(chain);
	atk_up=Number(atk_up);
	char_type1=Number(char_type1);
	char_type2=Number(char_type2);
	pannel_type=Number(pannel_type);
	char_atk=Number(char_atk);

	color["red"].mainWeight = 1;
	color["blue"].mainWeight = 1;
	color["yellow"].mainWeight = 1;
	color["white"].mainWeight = 1;
	color["black"].mainWeight = 1;
	
	if ( char_type2 > 0 )
	{
		color["red"].subWeight = 1;
		color["blue"].subWeight = 1;
		color["yellow"].subWeight = 1;
		color["white"].subWeight = 1;
		color["black"].subWeight = 1;
	}
	
	 switch(char_type1) 
	 { 
	 case 1: 
		 color["blue"].mainWeight=0.5; 
		 color["yellow"].mainWeight=1.5; 
		 break; 
	 case 2: 
	 	 color["red"].mainWeight=1.5; 
		 color["yellow"].mainWeight=0.5; 
		 break; 
	 case 3: 
 		 color["red"].mainWeight=0.5; 
		 color["blue"].mainWeight=1.5; 
		 break; 
	 case 4: 
		 color["black"].mainWeight=1.5;
		break; 
	 case 5: 
		 color["white"].mainWeight=1.5; 
		 break; 
	 } 
	 switch(char_type2) 
	 { 
	 case 1: 
		 color["blue"].subWeight=0.5; 
		 color["yellow"].subWeight=1.5; 
		 break; 
	 case 2: 
	 	 color["red"].subWeight=1.5; 
		 color["yellow"].subWeight=0.5; 
		 break; 
	 case 3: 
 		 color["red"].subWeight=0.5; 
		 color["blue"].subWeight=1.5; 
		 break; 
	 case 4: 
		 color["black"].subWeight=1.5;
		break; 
	 case 5: 
		 color["white"].subWeight=1.5; 
		 break; 
	 } 
	
	for ( var index in color ){
		var str = index+"_as_per";
		color[index].as_per=document.getElementById(str).value;
		color[index].as_per=Number(color[index].as_per);		
		
		if ( pannel_type==2 )
		{
			color[index].mainDmg=Math.floor(rand*char_atk*0.5*((atk_up+color[index].as_per)/100)*color[index].mainWeight*(1+chain/100)*0.5);
		}
		else
		{
			color[index].mainDmg=Math.floor(rand*char_atk*0.5*((atk_up+color[index].as_per)/100)*color[index].mainWeight*(1+chain/100));
		}
		
		if ( pannel_type==1 )
		{
			color[index].subDmg=Math.floor(rand*char_atk*0.5*((atk_up+color[index].as_per)/100)*color[index].subWeight*(1+chain/100)*0.5);
		}
		else
		{
			color[index].subDmg=Math.floor(rand*char_atk*0.5*((atk_up+color[index].as_per)/100)*color[index].subWeight*(1+chain/100));
		}
		
		if ( isNaN(color[index].subDmg) )
		{
			color[index].subDmg = 0;
		}
		
		document.getElementById(index+"_mainDmg").value=color[index].mainDmg;
		document.getElementById(index+"_subDmg").value=color[index].subDmg;
	}
}
