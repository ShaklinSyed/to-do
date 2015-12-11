document.addEventListener("DOMContentLoaded",function(){
	console.log("ready");

	var listSize =0;

	document.getElementById("btn").addEventListener("click",addItem);
	var incompItemList = document.getElementById("incomp");
	var inputTags = incompItemList.getElementsByTagName("input");

	function moveNode(itemNo,whereTo){
		var toMoveNode = document.getElementById("div"+itemNo);
		if(whereTo == "comp"){
			toMoveNode.setAttribute("class","compItem");
			var compParent = document.getElementById("comp");
		}
		else if(whereTo == "incomp")
		{
			toMoveNode.setAttribute("class","inCompItem");
			var compParent =document.getElementById("incomp");
		}
		compParent.appendChild(toMoveNode);
	}

//Moves node from one list to another
	function move(){
		for(var i=0;i<listSize;i++){
			var item = document.getElementById(i);
			var dive = document.getElementById("div"+i)
			var diveClass = dive.getAttribute("class");

			console.log(i,item, diveClass);
			if(item.checked){
				if(diveClass == "inCompItem"){
					moveNode(i,"comp");
					console.log("moved",i,"to comp");
				}
			}
			else{
				if(diveClass == "compItem"){
					moveNode(i,"incomp");
					console.log("moved",i,"to In comp");
				}	
			} 
		}
	}

// creates a node and appends incomp node

	function addItem(){		
		var textValue = document.getElementById("inp").value;
		if(textValue !== ""){

			var dive = document.createElement("div");
			dive.setAttribute("class","inCompItem");
			dive.setAttribute("id","div" + listSize);

			var pe = document.createElement("p");
			dive.appendChild(pe);
			
			var inputTag = document.createElement("input");
			inputTag.setAttribute("type","checkbox");
			inputTag.setAttribute("id",listSize)
			inputTag.addEventListener("click",move);
			pe.appendChild(inputTag);

			var text = document.createTextNode(textValue);
			pe.appendChild(text);	
			
			var incomp = document.getElementById("incomp");
			incomp.appendChild(dive);
			listSize++;
		}
	}
});
