function myf(a, b){
    //Data for information
    const dataset1 =[["Tomato Seeds","The tomato (Solanum lycopersicum, synonym: Lycopersicon esculentum) is one of the most popular vegetables. They are easy to grow, cheap and healthy. Moreover, they can be used and processed in many different ways.","Stock: 20" ],
                    ["Carrot Seeds","Carrot Seeds Look like Blades of Grass They sprout from a pair of narrow seed leaves, which are held together by cotyledons.","Stock: 35"],
                    ["Cabbage Seeds","Cabbage seedlings have a thin taproot and cordate (heart-shaped) cotyledons. The first leaves produced are ovate (egg-shaped) with a lobed petiole.","Stock: 25"],
                    ["Eggplant Seeds","Eggplant, Solanum melongena, is a tropical, herbaceous, perennial plant, closely related to tomato, in the family Solanaceae which is grown for its edible fruit.","Stock: 40"]];  
    //Data discplay                
	document.getElementById("text1").innerHTML = dataset1[a][b];
    document.getElementById("text2").innerHTML = dataset1[a][b+1];
    document.getElementById("text3").innerHTML = dataset1[a][b+2];

    //UI visibility
    if (document.getElementById("modal").style.visibility == "hidden")
    {
        document.getElementById("modal").style.visibility = "visible";
        visibility = true;
        
    }



}

//UI visibility
function myC(){
        document.getElementById("modal").style.visibility = "hidden";
        visibility = false;
       
}
