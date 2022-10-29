var loginF = document.getElementById('form-group');
btnlogin.onclick = function(){
    if(loginF.email.value == '' || loginF.password.value=='' || loginF.phone.value=='' || loginF.name.value=='' ){
        alert("Vui lòng nhập đủ thông tin cần thiết")
        return false;
    }else{
        alert("Đăng nhập thành công")
        
    }
}