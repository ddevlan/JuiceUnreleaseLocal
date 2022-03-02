<?php

if (isset($_POST["register"])) {

    $username = $_POST["username"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $password = $_POST["password"];
    $passwordConfirm = $_POST["passwordConfirm"];

    require_once 'dbh.inc.php';
    require_once 'functions.inc.php';

    if (emptyRegisterInput($username, $email, $phone, $password, $passwordConfirm) !== false) {
        header("location: ../register.php?error=invalid_input");
        exit();
    }

    if (invalidUsername($username) !== false) {
        header("location: ../register.php?error=invalid_username");
        exit();
    }

    if (invalidEmail($email) !== false) {
        header("location: ../register.php?error=invalid_email");
        exit();
    }

    if (invalidPhone($phone) !== false) {
        header("location: ../register.php?error=invalid_phone");
        exit();
    }

    if (passwordMatch($password, $passwordConfirm) !== false) {
        header("location: ../register.php?error=password_mismatch");
        exit();
    }

    if (loginExists($conn, $username, $email, $phone) !== false) {
        header("location: ../register.php?error=username_taken");
        exit();
    }

    createUser($conn, $name, $email, $phone, $password);

} else {
    header("location: ../register.php");
    exit();
}