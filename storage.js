var checkSupport = function(){
	if(typeof(Storage) !== "undefined"){
		return true;
	}
	else{
		return false;
	}
}

// var populate = function(text,ch){
// 	var div = document.createElement("div");
// 	var text = document.createTextNode(text);
// 	div.appendChild(text);

// 	if(ch == 'i'){
// 		addEvent(div);
// 		inCompList.appendChild(div);
// 	}
// 	else{
// 		moveBack(div);
// 		comp.appendChild(div);
// 	}
// }

// var addItemToStorage = function(item){
// 	if(!(localStorage.getItem("list"))){
// 		var obj = {"comp" : [],"incomp":[]};
// 	}
// 	else{
// 		var list = localStorage.getItem("list");
// 		var obj = JSON.parse(list);
// 		for(i in obj.incomp){
// 			populate(obj.incomp[i]);
// 		}
// 		for(i in obj.comp){
// 			populate(obj.comp[i]);
// 		}

// 	}
	
// 	obj.incomp.push(item);
// 	localStorage.setItem("list",JSON.stringify(obj)); 
// }

// var moveItemTo = function(text,ch){
// 	var list = localStorage.getItem("list");
// 	var obj = JSON.parse(list);
// 	if(ch == 'c'){
// 		console.log("moving to Completed");	
// 		obj.comp.push(text);
// 		console.log
// 		for(i in obj.incomp){
// 			if(text == obj.incomp[i]){
// 				obj.incomp.splice(i,1);
// 				break;
// 			}
// 		}
// 	}
// 	else{
// 		console.log("moving to Completed");
// 		obj.incomp.push(text);
// 		for(i in obj.comp){
// 			if(text == obj.comp[i]){
// 				obj.comp.splice(i,1);
// 				break;
// 			}
// 		}
// 	}
// 	console.log(obj);
// 	localStorage.setItem("list",JSON.stringify(obj));
// }

