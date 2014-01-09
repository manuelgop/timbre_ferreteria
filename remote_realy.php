<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Remote control</title>
  <script type="text/javascript" src="script.js"></script>
</head>
<body>
        
<form id="relay" action="remote_relay.php" method="GET">
  <H1>Timbre</H1>
  <br>
    <input type="button" id="usuario1" style="border:1px solid #000; font-size:40px;" value="Usuario1" onClick="usuario1()"/>
    <input type="button" id="usuario2" style="border:1px solid #000; font-size:40px;" value="Usuario2" onClick="usuario2()"/>
    <input type="button" id="usuario3" style="border:1px solid #000; font-size:40px;" value="Usuario3" onClick="usuario3()"/>
    <input type="button" id="usuario4" style="border:1px solid #000; font-size:40px;" value="Usuario4" onClick="usuario4()"/>
    <input type="button" id="usuario5" style="border:1px solid #000; font-size:40px;" value="Usuario5" onClick="usuario5()"/>
    <input type="button" id="usuario6" style="border:1px solid #000; font-size:40px;" value="Usuario6" onClick="usuario6()"/>
    <input type="button" id="usuario7" style="border:1px solid #000; font-size:40px;" value="Usuario7" onClick="usuario7()"/>
    <input type="button" id="usuario8" style="border:1px solid #000; font-size:40px;" value="Usuario8" onClick="usuario8()"/>
    <input type="button" id="usuario9" style="border:1px solid #000; font-size:40px;" value="Usuario9" onClick="usuario9()"/>
    <input type="button" id="usuario10" style="border:1px solid #000; font-size:40px;" value="Usuario10" onClick="usuario10()"/>
    <input type="button" id="submitOff" style="border:1px solid #000; font-size:40px;" value="Apagar" onClick="relayOff()"/>
        <input type="hidden" name="total" id="total" value="">
</form>

<?php
        $corto = 500000;
        $largo = 1000000;
        $extralargo = 1500000;
        $espacio = 1000000;
        exec("gpio -g mode 4 out");
        $state = $_GET["total"];
          //Prende con 0 y apaga con 1
        if ($state =="") {
                exec("gpio -g write 4 1");
        }
        if ($state == "usuario1"){//Estado del usuario1
                exec("gpio -g write 4 0");
                usleep(corto);
                exec("gpio -g write 4 1");

        }
        if ($state == "usuario2") {
                exec("gpio -g write 4 0");
                usleep(largo);
                exec("gpio -g write 4 1");
        }
        if ($state == "usuario3") {
                exec("gpio -g write 4 0");
                usleep(extralargo);
                exec("gpio -g write 4 1");
        }
        if ($state == "off"){
                exec("gpio -g write 4 1");
        }
        
?>

</body>