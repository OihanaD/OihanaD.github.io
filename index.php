
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div id="pres">
        <h1>Foxy</h1>
        <button id="start" class="center buttons">Start</button>
        <button id="instructions" class="center buttons">Instructions</button>
    </div>

   
    
    <div id="end" hidden>
        <form id ="form1" hidden method="post" action="">
            <p> Nom : <input type="text" name="nom>"/> </p><br>
            <p id="scoreEndlose"></p>
            <input type="submit" value="Envoyer"/>

        </form>
        <button id="retour" class="center buttons">Retour</button>
        <div class="score" id="score"> </div>
        <div id="endScore"></div>
        <div id="endScreen" hidden>
            <h2 id="lose" hidden>Tu as perdu, <br>
                Retentes ta chance</h2>
            <button id="restart" class="back buttons" hidden> Re Start</button>
        </div>
    </div>
    <div id="win" hidden>
        <form method="post" action="">
            <p> Nom : <input type="text" name="nom>"/> </p><br>
            <p id="scoreEndWin"></p>
            <input type="submit" value="Envoyer"/>

        </form>
        <div id="endScore"></div>
        <div id="endScreenWin">
            <h2 id="youWin">Tu as Gagné!</h2>
            <!-- <button id="restartWin" class="back buttons" > Re Start</button> -->
        </div>
    </div>
    <button id="retourInstruc" class="back buttons" hidden> Retour</button>
    <div hidden id="instruc">
        <h2>Instructions</h2>
        <p>Foxy est aventurier et il aime explorer le monde entier. Récemment, il a pu se rendre dans l'espace. Mais ce
            n'est pas sans danger. Aide Foxy à ne pas tomber des plateforms et à combattre les ennemis!
            <br>
            Pour aider à déplacer Foxy tu pourras t'aider des touches de ton clavier.
            <img src="img/touche.png" width="80px" alt="touches"> <br>
            Z: Pour sauter <br>
            Q: Pour aller à gauche <br>
            D: Pour aller à droite
        </p>
        <p>
            Tu pourras gagner des points en récupérants les fleurs et les coeurs. <br>
            <img src="img/coeur.png" width="50px" alt="coeur"> Les coeur valent 2 points, <br>
            <img src="img/feuille.png" width="50px" alt="feuille"> Les feuilles valent 1 pont. <br>
            ATTENTION : <br>
            <img src="img/pierre.png" width="50px" alt="pierre"> Les pierres t'enlèvent 1 point!
        </p>
    </div>

    <canvas id="canva" hidden></canvas>
    <script src="index.js"></script>
</body>

</html>