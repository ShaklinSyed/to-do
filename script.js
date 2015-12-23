document.addEventListener("DOMContentLoaded",function(){
	console.log("ready");
	
	var inCompList = document.getElementById("incomp");
	var compList = document.getElementById("comp");
	
	//Event
	document.getElementById("btn").addEventListener("click",addItem);
	

	//Adds event to move to compList
	var addEvent = function(element){
		element.addEventListener("click",function(){
			this.removeEventListener("click");
			moveItemTo(this.innerHTML,'c'); //move in storage
			compList.appendChild(this);
			moveBack(this);
		});
	};

	// Adds event to move to inCompList
	var moveBack = function(element){
		element.addEventListener("click",function(){
			this.removeEventListener("click");
			inCompList.appendChild(this);
			moveItemTo(this.innerHTML,'i');
			addEvent(this);
		});
	};

//loads elements if a list already exsist
	if(localStorage.getItem("list")){
		var populate = function(text,ch){
			var div = document.createElement("div");
			var text = document.createTextNode(text);
			div.appendChild(text);

			if(ch == 'i'){
				addEvent(div);
				inCompList.appendChild(div);
			}
			else{
				moveBack(div);
				comp.appendChild(div);
			}
		}
		
		var list = localStorage.getItem("list");
		var obj = JSON.parse(list);
		for(i in obj.incomp){
			populate(obj.incomp[i],'i');
		}
				
		for(i in obj.comp){
			populate(obj.comp[i],'c');
		}	
	}
	
	// creates a node and appends incomp node, adds to local Storage
	function addItem(){		
		var textValue = document.getElementById("inp").value;
		if(textValue !== ""){
			addItemToStorage(textValue);
			var div = document.createElement("div");
			var text = document.createTextNode(textValue);	
			div.appendChild(text);
			addEvent(div);
			inCompList.appendChild(div);
		}
	}

//Storage Methods
var addItemToStorage = function(item){
	if(!(localStorage.getItem("list"))){
		var obj = {"comp" : [],"incomp":[]};
	}
	else{
		var list = localStorage.getItem("list");
		var obj = JSON.parse(list);
	}
	
	obj.incomp.push(item);
	localStorage.setItem("list",JSON.stringify(obj)); 
}

var moveItemTo = function(text,ch){
	var list = localStorage.getItem("list");
	var obj = JSON.parse(list);
	if(ch == 'c'){
		console.log("moving to Completed");	
		obj.comp.push(text);
		for(i in obj.incomp){
			if(text == obj.incomp[i]){
				obj.incomp.splice(i,1);
				break;
			}
		}
	}
	else{
		console.log("moving to Completed");
		obj.incomp.push(text);
		for(i in obj.comp){
			if(text == obj.comp[i]){
				obj.comp.splice(i,1);
				break;
			}
		}
	}
	// console.log(obj);
	localStorage.setItem("list",JSON.stringify(obj));
}
});
