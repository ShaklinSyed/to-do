document.addEventListener("DOMContentLoaded",function(){
	console.log("ready");

	document.getElementById("btn").addEventListener("click",addItem);
	var inCompList = document.getElementById("incomp");
	var compList = document.getElementById("comp");

// creates a node and appends incomp node
	function addItem(){		
		console.log("inside additem");
		var textValue = document.getElementById("inp").value;
		if(textValue !== ""){
			var div = document.createElement("div");
			var text = document.createTextNode(textValue);	
			div.appendChild(text);
			addEvent(div);
			inCompList.appendChild(div);
		}
	}

//Adds event to move to compList
	var addEvent = function(element){
		element.addEventListener("click",function(){
			this.removeEventListener("click");
			compList.appendChild(this);
			moveBack(this);
		});
	};

// Adds event to move to inCompList
	var moveBack = function(element){
		element.addEventListener("click",function(){
			this.removeEventListener("click");
			inCompList.appendChild(this);
			addEvent(this);
		});
	};
});
