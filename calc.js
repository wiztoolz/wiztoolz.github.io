function Calc(){
	var rand;
	var chain;
	var atk_up;
	var char_type1;
	var char_type2;
	var pannel_type;
	var char_atk;
	var char_red_as_per;
	var char_blue_as_per;
	var char_yellow_as_per;
	var char_white_as_per;
	var char_black_as_per;
	var char_red1_damage;
	var char_red2_damage;
	var char_red_total;
	var char_blue1_damage;
	var char_blue2_damage;
	var char_blue_total;
	var char_yellow1_damage;
	var char_yellow2_damage;
	var char_yellow_total;
	var char_white1_damage;
	var char_white2_damage;
	var char_white_total;
	var char_black1_damage;
	var char_black2_damage;
	var char_black_total;
	var char_red1_weight;
	var char_red2_weight;
	var char_blue1_weight;
	var char_blue2_weight;
	var char_yellow1_weight;
	var char_yellow2_weight;
	var char_white1_weight;
	var char_white2_weight;
	var char_black1_weight;
	var char_black2_weight;
	rand=document.getElementById("rand").value;
	chain=document.getElementById("chain").value;
	atk_up=document.getElementById("atk_up").value;
	char_type1=document.getElementById("char_type1").value;
	char_type2=document.getElementById("char_type2").value;
	pannel_type=document.getElementById("pannel_type").value;
	char_atk=document.getElementById("char_atk").value;
	char_red_as_per=document.getElementById("char_red_as_per").value;
	char_blue_as_per=document.getElementById("char_blue_as_per").value;
	char_yellow_as_per=document.getElementById("char_yellow_as_per").value;
	char_white_as_per=document.getElementById("char_white_as_per").value;
	char_black_as_per=document.getElementById("char_black_as_per").value;
	rand=Number(rand);
	chain=Number(chain);
	atk_up=Number(atk_up);
	char_type1=Number(char_type1);
	char_type2=Number(char_type2);
	pannel_type=Number(pannel_type);
	char_atk=Number(char_atk);
	char_red_as_per=Number(char_red_as_per);
	char_blue_as_per=Number(char_blue_as_per);
	char_yellow_as_per=Number(char_yellow_as_per);
	char_white_as_per=Number(char_white_as_per);
	char_black_as_per=Number(char_black_as_per);
	switch(char_type1)
	{
	case 1:
		char_red1_weight=1;
		char_blue1_weight=0.5;
		char_yellow1_weight=1.5;
		char_white1_weight=1;
		char_black1_weight=1;        
		break;
	case 2:
		char_red1_weight=1.5;
		char_blue1_weight=1;
		char_yellow1_weight=0.5;
		char_white1_weight=1;
		char_black1_weight=1;        
		break;
	case 3:
		char_red1_weight=0.5;
		char_blue1_weight=1.5;
		char_yellow1_weight=1;
		char_white1_weight=1;
		char_black1_weight=1;        
		break;
	case 4:
		char_red1_weight=1;
		char_blue1_weight=1;
		char_yellow1_weight=1;
		char_white1_weight=1;
		char_black1_weight=1.5;        
		break;
	case 5:
		char_red1_weight=11;
		char_blue1_weight=1;
		char_yellow1_weight=1;
		char_white1_weight=1.5;
		char_black1_weight=1;        
		break;
	}
	switch(char_type2)
	{
	case 1:
		char_red2_weight=1;
		char_blue2_weight=0.5;
		char_yellow2_weight=1.5;
		char_white2_weight=1;
		char_black2_weight=1;        
		break;
	case 2:
		char_red2_weight=1.5;
		char_blue2_weight=1;
		char_yellow2_weight=0.5;
		char_white2_weight=1;
		char_black2_weight=1;        
		break;
	case 3:
		char_red2_weight=0.5;
		char_blue2_weight=1.5;
		char_yellow2_weight=1;
		char_white2_weight=1;
		char_black2_weight=1;        
		break;
	case 4:
		char_red2_weight=1;
		char_blue2_weight=1;
		char_yellow2_weight=1;
		char_white2_weight=1;
		char_black2_weight=1.5;        
		break;
	case 5:
		char_red2_weight=11;
		char_blue2_weight=1;
		char_yellow2_weight=1;
		char_white2_weight=1.5;
		char_black2_weight=1;        
		break;
	}
	if ( pannel_type==2 )
	{
		char_red1_damage=Math.floor(rand*char_atk*0.5*((atk_up+char_red_as_per)/100)*char_red1_weight*(1+chain/100)*0.5);
	}
	else
	{
		char_red1_damage=Math.floor(rand*char_atk*0.5*((atk_up+char_red_as_per)/100)*char_red1_weight*(1+chain/100));
	}
	if ( pannel_type==1 )
	{
		char_red2_damage=Math.floor(rand*char_atk*0.5*((atk_up+char_red_as_per)/100)*char_red2_weight*(1+chain/100)*0.5);
	}
	else
	{
		char_red2_damage=Math.floor(rand*char_atk*0.5*((atk_up+char_red_as_per)/100)*char_red2_weight*(1+chain/100));
	}
	
	if ( pannel_type==2 )
	{
		char_blue1_damage=Math.floor(rand*char_atk*0.5*((atk_up+char_blue_as_per)/100)*char_blue1_weight*(1+chain/100)*0.5);
	}
	else
	{
		char_blue1_damage=Math.floor(rand*char_atk*0.5*((atk_up+char_blue_as_per)/100)*char_blue1_weight*(1+chain/100));
	}
	if ( pannel_type==1 )
	{
		char_blue2_damage=Math.floor(rand*char_atk*0.5*((atk_up+char_blue_as_per)/100)*char_blue2_weight*(1+chain/100)*0.5);
	}
	else
	{
		char_blue2_damage=Math.floor(rand*char_atk*0.5*((atk_up+char_blue_as_per)/100)*char_blue2_weight*(1+chain/100));
	}
	
	if ( pannel_type==2 )
	{
		char_yellow1_damage=Math.floor(rand*char_atk*0.5*((atk_up+char_yellow_as_per)/100)*char_yellow1_weight*(1+chain/100)*0.5);
	}
	else
	{
		char_yellow1_damage=Math.floor(rand*char_atk*0.5*((atk_up+char_yellow_as_per)/100)*char_yellow1_weight*(1+chain/100));
	}
	if ( pannel_type==1 )
	{
		char_yellow2_damage=Math.floor(rand*char_atk*0.5*((atk_up+char_yellow_as_per)/100)*char_yellow2_weight*(1+chain/100)*0.5);
	}
	else
	{
		char_yellow2_damage=Math.floor(rand*char_atk*0.5*((atk_up+char_yellow_as_per)/100)*char_yellow2_weight*(1+chain/100));
	}	
	if ( pannel_type==2 )
	{
		char_white1_damage=Math.floor(rand*char_atk*0.5*((atk_up+char_white_as_per)/100)*char_white1_weight*(1+chain/100)*0.5);
	}
	else
	{
		char_white1_damage=Math.floor(rand*char_atk*0.5*((atk_up+char_white_as_per)/100)*char_white1_weight*(1+chain/100));
	}
	if ( pannel_type==1 )
	{
		char_white2_damage=Math.floor(rand*char_atk*0.5*((atk_up+char_white_as_per)/100)*char_white2_weight*(1+chain/100)*0.5);
	}
	else
	{
		char_white2_damage=Math.floor(rand*char_atk*0.5*((atk_up+char_white_as_per)/100)*char_white2_weight*(1+chain/100));
	}
	if ( pannel_type==2 )
	{
		char_black1_damage=Math.floor(rand*char_atk*0.5*((atk_up+char_black_as_per)/100)*char_black1_weight*(1+chain/100)*0.5);
	}
	else
	{
		char_black1_damage=Math.floor(rand*char_atk*0.5*((atk_up+char_black_as_per)/100)*char_black1_weight*(1+chain/100));
	}
	if ( pannel_type==1 )
	{
		char_black2_damage=Math.floor(rand*char_atk*0.5*((atk_up+char_black_as_per)/100)*char_black2_weight*(1+chain/100)*0.5);
	}
	else
	{
		char_black2_damage=Math.floor(rand*char_atk*0.5*((atk_up+char_black_as_per)/100)*char_black2_weight*(1+chain/100));
	}
	
	if ( isNaN(char_red2_damage) )
	{
		char_red2_damage = 0;
	}
	if ( isNaN(char_blue2_damage) )
	{
		char_blue2_damage = 0;
	}
	if ( isNaN(char_yellow2_damage) )
	{
		char_yellow2_damage = 0;
	}
	if ( isNaN(char_white2_damage) )
	{
		char_white2_damage = 0;
	}
	if ( isNaN(char_black2_damage) )
	{
		char_black2_damage = 0;
	}
	
	char_red_total=char_red1_damage+char_red2_damage;
	char_blue_total=char_blue1_damage+char_blue2_damage;
	char_yellow_total=char_yellow1_damage+char_yellow2_damage;
	char_white_total=char_white1_damage+char_white2_damage;	
	char_black_total=char_black1_damage+char_black2_damage;
	document.getElementById("char_red1_damage").value=char_red1_damage;
	document.getElementById("char_red2_damage").value=char_red2_damage;
	document.getElementById("char_red_total").value=char_red_total;
	document.getElementById("char_blue1_damage").value=char_blue1_damage;
	document.getElementById("char_blue2_damage").value=char_blue2_damage;
	document.getElementById("char_blue_total").value=char_blue_total;
	document.getElementById("char_yellow1_damage").value=char_yellow1_damage;
	document.getElementById("char_yellow2_damage").value=char_yellow2_damage;
	document.getElementById("char_yellow_total").value=char_yellow_total;
	document.getElementById("char_white1_damage").value=char_white1_damage;
	document.getElementById("char_white2_damage").value=char_white2_damage;
	document.getElementById("char_white_total").value=char_white_total;
	document.getElementById("char_black1_damage").value=char_black1_damage;
	document.getElementById("char_black2_damage").value=char_black2_damage;
	document.getElementById("char_black_total").value=char_black_total;
}
