<?php

$serverAddress = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "music";

$conn = mysqli_connect($serverAddress, $dbUsername, $dbPassword, $dbName);

if (!$conn) {
    die("");
}
