<?php 
$get_login=$_POST['login'];
$get_password=$_POST['password'];
if($get_login=="admin" && $get_password=="Despina1234"){
    setcookie("admin",sha1($get_password),time()*2);
    header("Location:".$_SERVER['REQUEST_URI']);
}
if($_COOKIE['admin']!=sha1("Despina1234")){
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel</title>
    <style>
        *{
            box-sizing:border-box;
        }
        body{
            margin:0px;
            background:#00000094;
        }
        #admin{
            width:300px;
            padding:15px;
            margin:125px auto;
            border-radius:8px;
            background:white;
        }
        #admin form{
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
        }
        input{
            width:220px;
            margin-bottom:10px;
            padding:10px;
            border-radius:8px;
            height:20px;
            outline:none;
            border:2px solid grey;
        }
        input[type="submit"]{
            width:75px;
            margin:0px;
            height:auto;
            padding:5px;
            background:#00000094;
            color:white;
        }
    </style>
</head>
<body>
    <div id="admin">
    <form method="POST">
    <input type="text" name="login"/>
    <input type="password" name="password"/>
    <input type="submit" value="Send"/>
    </form>
    </div>
</body>
</html>    
<?php
    }
    else include("index.html");
    ?>
    
