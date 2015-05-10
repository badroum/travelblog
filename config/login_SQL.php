<?php
    require('config.php');
    try
    {
    	$connection = new PDO('mysql:host='.$PARAM_hote.';dbname='.$PARAM_nom_bd, $PARAM_utilisateur, $PARAM_mot_passe);
      //$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //  echo "connection init";
    }
    catch (PDOException $e)
    {
		echo 'Erreur : '.$e->getMessage().'<br />';
		echo 'N° : '.$e->getCode();
		die('Erreur : ' . $e->getMessage());
    }
    catch(Exception $e) {
        exit('Impossible de se connecter à la base de données.');
    }
?>
