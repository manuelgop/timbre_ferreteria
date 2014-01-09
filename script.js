window.onload = function(){
        botonUsuario1 = document.getElementById('usuario1');
        buttonOn.onClick = usuario1;
        
        botonUsuario2 = document.getElementById('usuario2');
        buttonOn.onClick = usuario2;

        botonUsuario3 = document.getElementById('usuario3');
        buttonOn.onClick = usuario3;

        botonUsuario4 = document.getElementById('usuario4');
        buttonOn.onClick = usuario4;

        botonUsuario5 = document.getElementById('usuario5');
        buttonOn.onClick = usuario5;

        botonUsuario6 = document.getElementById('usuario6');
        buttonOn.onClick = usuario6;

        botonUsuario7 = document.getElementById('usuario7');
        buttonOn.onClick = usuario7;

        botonUsuario1 = document.getElementById('usuario1');
        buttonOn.onClick = usuario1;

        botonUsuario8 = document.getElementById('usuario8');
        buttonOn.onClick = usuario8;

        botonUsuario9 = document.getElementById('usuario9');
        buttonOn.onClick = usuario9;

        botonUsuario10 = document.getElementById('usuario10');
        buttonOn.onClick = usuario10;

        buttonOff = document.getElementById('submitOff');
        buttonOff.onClick = relayOff;
}

function usuario1(){
        
        hidden = document.getElementById("total");
        hidden.value = "usuario1";
        
        form = document.getElementById("relay");
        form.method = "GET";
        form.action = "remote_relay.php";
        form.submit();
}
function usuario2(){
        
        hidden = document.getElementById("total");
        hidden.value = "usuario2";
        
        form = document.getElementById("relay");
        form.method = "GET";
        form.action = "remote_relay.php";
        form.submit();
}
function usuario3(){
        
        hidden = document.getElementById("total");
        hidden.value = "usuario3";
        
        form = document.getElementById("relay");
        form.method = "GET";
        form.action = "remote_relay.php";
        form.submit();
}
function usuario4(){
        
        hidden = document.getElementById("total");
        hidden.value = "usuario4()";
        
        form = document.getElementById("relay");
        form.method = "GET";
        form.action = "remote_relay.php";
        form.submit();
}
function usuario5(){
        
        hidden = document.getElementById("total");
        hidden.value = "usuario5";
        
        form = document.getElementById("relay");
        form.method = "GET";
        form.action = "remote_relay.php";
        form.submit();
}
function usuario6(){
        
        hidden = document.getElementById("total");
        hidden.value = "usuario6";
        
        form = document.getElementById("relay");
        form.method = "GET";
        form.action = "remote_relay.php";
        form.submit();
}
function usuario7(){
        
        hidden = document.getElementById("total");
        hidden.value = "usuario7";
        
        form = document.getElementById("relay");
        form.method = "GET";
        form.action = "remote_relay.php";
        form.submit();
}
function usuario8(){
        
        hidden = document.getElementById("total");
        hidden.value = "usuario8";
        
        form = document.getElementById("relay");
        form.method = "GET";
        form.action = "remote_relay.php";
        form.submit();
}
function usuario9(){
        
        hidden = document.getElementById("total");
        hidden.value = "usuario9";
        
        form = document.getElementById("relay");
        form.method = "GET";
        form.action = "remote_relay.php";
        form.submit();
}
function usuario10(){
        
        hidden = document.getElementById("total");
        hidden.value = "usuario10";
        
        form = document.getElementById("relay");
        form.method = "GET";
        form.action = "remote_relay.php";
        form.submit();
}


function relayOff(){
        
        hidden = document.getElementById("total");
        hidden.value = "off";
        
        form = document.getElementById("relay");
        form.method = "GET";
        form.action = "remote_relay.php";
        form.submit();
}