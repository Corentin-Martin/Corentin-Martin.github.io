<legend><h1>Warm Up</h1></legend>
<form action="warmup.php" method="post">
<input type="checkbox" name="warmup1" value="essence" />Plein d'essence ?<br/>
<input type="checkbox" name="warmup2" value="serrages"/>Contrôle des serrages ?<br/>
<input type="submit" value="Ok">
</form>
<?php 
$warmup1 = $_POST['warmup1'];
$warmup2 = $_POST['warmup2'];

    if ($warmup1 === "essence" AND $warmup2 === "serrages") {
        echo "LET'S GO, PRET A ROULER";
    } else if ($warmup1 === "essence") {
        echo "Attention il faut reste encore les serrages à contrôler !";
    } else if ($warmup2 === "serrages") {
        echo "Attention il faut encore faire le plein d'essence !";
    } else {
        echo "Attention, vous n'êtes pas du tout prêt";
    }
?>

<!-- <input type="checkbox" name="warmup2" value="serrages" />Vérification des serrages ?<br />
<input type="checkbox" name="warmup2" value="pneus" />Pression des pneus ?<br />
<input type="checkbox" name="warmup4" value="rolloff" />Roll-off disponible ?<br />
<input type="submit" value="Ok">

</form>
 -->