let edad_del_usuario = 25;
function comprobar_requisitos_del_usuario(){
    if (edad_del_usuario >= 18){
            return true;
        }else {return false;}
}
console.log(comprobar_requisitos_del_usuario());