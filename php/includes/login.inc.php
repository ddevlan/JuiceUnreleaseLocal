<?php

if (isset($_POST["submit"])) {
    $loginId = $_POST["loginId"];
    $password = $_POST["password"];

    require_once 'dbh.inc.php';
    require_once 'functions.inc.php';

    if (emptyInputLogin($loginId, $password) !== false) {
        header("location: ../login.php?error=invalid_credentials");
        exit();
    }

    loginUser($conn, $loginId, $password);
} else {
    header("location: ../login.php");
    exit();
}