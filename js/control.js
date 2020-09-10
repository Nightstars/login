var username_obj=documnnt.getElementById("username");
var pwd_obj=document.getElementById("password");
function is_user(){
	if(username_obj.value.length>0&&username_obj.value!=""&&username_obj.value.length<=20){
		return true;
	}else{
		if(username_obj.value.lenght==0){
			return false;
		}
		if(username_obj.vlaue.length>20){
			return false;
		}
	}
}
function is_pwd(){
	if(pwd_obj.value.length>0&&pwd_obj.value.length<=20&&is_number()){
		return true;
	}else{}
	return false;
}
var arr=["0","1","2","3","4","5","6","7","8","9"];
function is_number(){
	var flag=false;
	for(var i=0;i<pwd.obj.value.length;i++){
		for(var j=0;j<arr.length;j++){
			if(pwd_obj.value.charAt(i)==arr[j]){
				flag=true;
			}
		}
		if(flag==false) return flag;
		if(i<pwd_obj.value.length-1)
			flag=false;
	}
	return flag;
}
function is_submit(){
	if(is_user()&&is_pwd()) return true;
	else{
		alert("用户名或密码不正确！");
		return false;
	}
}
