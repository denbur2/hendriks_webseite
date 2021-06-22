<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>gaestebuch</title>
    <h1>Gästebuch</h1>

    <style>
    body{
        background-color: slategray;
    }
    .eingabe{
        margin: 5px;
        border: none;
        background-color: lightslategray;
        font-size: 30px;
        width: 50%;
        height: 40px;
    }
    .btn{
        
        margin: 5px;
        background-color: #4CAF50; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 150%;
        width: 40%;
    }
    .btn:hover:before{
        left: 7px;
    }
    h1{
        color: DarkSlateGray;
        /* font-family:; */
        font-size: 250%;
    }
    p{
        font-size: 150%;
        color: DarkSlateGray;
    }
    .kommentar{
        background-color: lightslategray;
        /* border: 1px solid black; */
        
        margin: 5px;
        padding: 2px;
    }
    </style>

</head>
<body>
    <form method="post">
        <table>
            <tr><p>Name:</p></tr>
            <tr><input type="text" name="namee" class="eingabe"></tr>
            <br>
            <br>
            <tr><p>Kommentar:</p></tr>
            <tr><input type="text" name="kommentar" class="eingabe"></tr>
            <br>
            <br>
            <tr><input type="submit" value="Kommentieren" class="btn"></tr>
        </table>

        <?php
            try{
                $pdo = new PDO('mysql:host=localhost;dbname=hendriks_webseite','root','');   
            }
            catch (Exception $e){
                echo $e->getMessage();
                $pdo = new PDO('mysql:host=91.5.242.59:3306;dbname=hendriks_webseite','root','');
                exit();
            }
            if (isset($_POST['namee'])){
                $query = $pdo->prepare("INSERT INTO t_kommentare (namee, kommentar) VALUES (:namee, :kommentar)");
                $query->execute(array('namee' => $_POST['namee'], 'kommentar' => $_POST['kommentar']));
                
                if($query->errorInfo()[1]){
                    echo $query->errorInfo()[2];
                }    
            else{
                echo "<p>daten erfolgreich eingetragen</p>";
            }}

        ?>
    </form>
    <?php
        $sql = "SELECT * FROM t_kommentare WHERE namee is not null ORDER BY p_id DESC";
        foreach ($pdo->query($sql) as $row) {
        echo "<table class='kommentar'>
                    <tr>
                        <th> <p>".$row['namee']."</p></th>
                        <td> <p>".$row['kommentar']."</p></td> 
                    </tr>
             </table>
                ";}   
?>
</body>
</html>