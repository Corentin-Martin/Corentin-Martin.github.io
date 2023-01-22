<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <section>
<form action="index.php" method="post">
    <select name="categorie">
<option value="Maxi Sprint" <?php if(isset($_POST['categorie']) && $_POST['categorie'] == "Maxi Sprint") echo 'selected="selected"';?>>Maxi Sprint</option>
<option value="Tourisme Cup" <?php if(isset($_POST['categorie']) && $_POST['categorie'] == "Tourisme Cup") echo 'selected="selected"';?>>Tourisme Cup</option>
<option value="Sprint Girls" <?php if(isset($_POST['categorie']) && $_POST['categorie'] == "Sprint Girls") echo 'selected="selected"';?>>Sprint Girls</option>
<option value="Buggy Cup" <?php if(isset($_POST['categorie']) && $_POST['categorie'] == "Buggy Cup") echo 'selected="selected"';?>>Buggy Cup</option>
<option value="Junior Sprint" <?php if(isset($_POST['categorie']) && $_POST['categorie'] == "Junior Sprint") echo 'selected="selected"';?>>Junior Sprint</option>
<option value="Maxi Tourisme" <?php if(isset($_POST['categorie']) && $_POST['categorie'] == "Maxi Tourisme") echo 'selected="selected"';?>>Maxi Tourisme</option>
<option value="Buggy 1600" <?php if(isset($_POST['categorie']) && $_POST['categorie'] == "Buggy 1600") echo 'selected="selected"';?>>Buggy 1600</option>
<option value="Super Sprint" <?php if(isset($_POST['categorie']) && $_POST['categorie'] == "Super Sprint") echo 'selected="selected"';?>>Super Sprint</option>
<option value="Super Buggy" <?php if(isset($_POST['categorie']) && $_POST['categorie'] == "Super Buggy") echo 'selected="selected"';?>>Super Buggy</option>
<input type="submit" value="Ok">
    </select>
</form>
<hr>
<?php if (isset($_POST['categorie'])) {
    $categorie = $_POST['categorie'];
    if ($categorie === "Maxi Sprint") {
        echo "Vous roulez en " . $categorie . " : Votre contrôle admnistratif est à 7h";
        include "warmup.php";
    } else if ($categorie === "Tourisme Cup") {
        echo "Vous roulez en " . $categorie . " : Votre contrôle admnistratif est à 7h15";
        include "warmup.php";
    } else if ($categorie === "Sprint Girls") {
        echo "Vous roulez en " . $categorie . " : Votre contrôle admnistratif est à 7h30";
        include "warmup.php";
    } else if ($categorie === "Buggy Cup") {
        echo "Vous roulez en " . $categorie . " : Votre contrôle admnistratif est à 7h45";
        include "warmup.php";
    } else if ($categorie === "Junior Sprint") {
        echo "Vous roulez en " . $categorie . " : Votre contrôle admnistratif est à 8h";
        include "warmup.php";
    } else if ($categorie === "Maxi Tourisme") {
        echo "Vous roulez en " . $categorie . " : Votre contrôle admnistratif est à 8h15";
        include "warmup.php";
    } else if ($categorie === "Buggy 1600") {
        echo "Vous roulez en " . $categorie . " : Votre contrôle admnistratif est à 8h30";
        include "warmup.php";
    } else if ($categorie === "Super Sprint") {
        echo "Vous roulez en " . $categorie . " : Votre contrôle admnistratif est à 8h45";
        include "warmup.php";
    } else {
        echo "Vous roulez en " . $categorie . " : Votre contrôle admnistratif est à 9h";
        include "warmup.php";
    }
} ?>
    </section>
</body>
</html>