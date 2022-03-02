<?php

function emptyRegisterInput($username, $email, $phone, $password, $passwordConfirm) {
    $result = null;

    if (empty($username) || empty($email) || empty($phone) || empty($password) || empty($passwordConfirm)) {
        $result = true;
    } else {
        $result = false;
    }

    return $result;
}

function invalidUsername($username) {
    $result = null;

    if (!preg_match('/^[a-zA-Z0-9]*$/', $username)) {
        $result = true;
    } else {
        $result = false;
    }

    return $result;
}

function invalidEmail($email) {
    $result = null;

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $result = true;
    } else {
        $result = false;
    }

    return $result;
}

function invalidPhone($phone) {
    $result = null;

    if (!filter_var($phone, FILTER_VALIDATE_INT)) {
        $result = true;
    } else {
        $result = false;
    }

    return $result;
}

function passwordMatch($password, $passwordConfirm) {
    $result = null;

    if ($password !== $passwordConfirm) {
        $result = true;
    } else {
        $result = false;
    }

    return $result;
}

function loginExists($conn, $username, $email, $phone) {
    $sql = "SELECT * FROM users WHERE usersUsername = ? OR usersEmail = ? OR usersPhone = ?;";
    $stmt = mysqli_stmt_init($conn);

    if (!mysqli_stmt_prepare($stmt, $sql)) {
        header("location: ../register?error=database_error");
        exit();
    }

    mysqli_stmt_bind_param($stmt, "sss", $username, $email, $phone);
    mysqli_stmt_execute($stmt);

    $resultData = mysqli_stmt_get_result($stmt);

    if ($row = mysqli_fetch_assoc($resultData)) {
        return $row;
    } else {
        $result = false;
        return $result;
    }
    mysqli_stmt_close($stmt);
}

function createUser($conn, $username, $email, $phone, $password) {
    $sql = "INSERT INTO users (usersUsername, usersEmail, usersPhone, usersPassword) VALUES (?, ?, ?, ?);";
    $stmt = mysqli_stmt_init($conn);

    if (!mysqli_stmt_prepare($stmt, $sql)) {
        header("location: ../register?error=register_error");
        exit();
    }

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    mysqli_stmt_bind_param($stmt, "ssss", $username, $email, $phone, $hashedPassword);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);

    header("location: ../register?error=none");
    exit();
}

function emptyInputLogin($loginId, $password) {
    $result = null;

    if (empty($loginId) || empty($password)) {
        $result = true;
    } else {
        $result = false;
    }

    return $result;
}

function loginUser($conn, $loginId, $password) {
    $userExists = loginExists($conn, $loginId, $loginId, $loginId);

    if ($userExists === false) {
        header("location: ../login.php?error=null_user");
        exit();
    }

    $hashedPassword = $userExists["usersPassword"];
    $passwordConfirmed = password_verify($password, $hashedPassword);

    if ($passwordConfirmed === false) {
        header("location: ../login.php?error=invalid_login");
        exit();
    } else if ($passwordConfirmed === false) {
        session_start();

        $_SESSION["userId"] = $userExists["usersId"];
        $_SESSION["userId"] = $userExists["usersId"];
        header("location: ../index.php");
        exit();
    }
}

?>