document.addEventListener("DOMContentLoaded",function(){
	console.log("ready");

	var listSize =0;

	document.getElementById("btn").addEventListener("click",addItem);
	var incompItemList = document.getElementById("incomp");
	var inputTags = incompItemList.getElementsByTagName("input");

	function moveNode(itemNo,whereTo){
		// var item = itemNo;
		// var where = whereTo; 
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
	function move(){
		// console.log("to move from one node to other");

		// for(var i=0;i<inputTags.length;i++){
		// 	if(inputTags[i].checked && inputTags[i].getAttribute("class") != "incomp"){
		// 		getId = inputTags[i].getAttribute("id");
		// 		console.log(getId);
		// 		moveNode(listSize);
		// 		break;		
		// 	}
		// 	else{
		// 		console.log("skip");
		// 	}
		// }
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
