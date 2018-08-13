var objFile=null;
var ajaxObj=null;
if (window.ActiveXObject) {  
	ajaxObj= new ActiveXObject("Microsoft.XMLHTTP")
}
else ajaxObj=new XMLHttpRequest();
ajaxObj.open("GET","loadgbabios");
ajaxObj.send()
ajaxObj.onreadystatechange= function () {
	if(ajaxObj.readyState===4&&ajaxObj.status){
		//console.log(ajaxObj.response);
		objFile = JSON.parse(ajaxObj.response)['data'];
		//console.log(new Uint8Array(objFile));
		IodineGUI.Iodine.attachBIOS(new Uint8Array(objFile));		
	}
}