<?php if (isset($_POST['categorie'])) {
    $categorie = $_POST['categorie'];
    if ($categorie === "Maxi Sprint") {
        echo "Vous roulez en " . $categorie . " : Votre contrôle admnistratif est à 7h";
    } else if ($categorie === "Tourisme Cup") {
        echo "Vous roulez en " . $categorie . " : Votre contrôle admnistratif est à 7h15";
    } else if ($categorie === "Sprint Girls") {
        echo "Vous roulez en " . $categorie . " : Votre contrôle admnistratif est à 7h30";
    } else if ($categorie === "Buggy Cup") {
        echo "Vous roulez en " . $categorie . " : Votre contrôle admnistratif est à 7h45";
    } else if ($categorie === "Junior Sprint") {
        echo "Vous roulez en " . $categorie . " : Votre contrôle admnistratif est à 8h";
    } else if ($categorie === "Maxi Tourisme") {
        echo "Vous roulez en " . $categorie . " : Votre contrôle admnistratif est à 8h15";
    } else if ($categorie === "Buggy 1600") {
        echo "Vous roulez en " . $categorie . " : Votre contrôle admnistratif est à 8h30";
    } else if ($categorie === "Super Sprint") {
        echo "Vous roulez en " . $categorie . " : Votre contrôle admnistratif est à 8h45";
    } else {
        echo "Vous roulez en " . $categorie . " : Votre contrôle admnistratif est à 9h";
    }
} ?>