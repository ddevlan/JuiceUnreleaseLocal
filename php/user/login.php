<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign in</title>
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
    <section class="login-form">
        <h2>Login</h2>
        <form action="php/includes/login.inc.php" method="post">
            <input type="text" name="loginId" placeholder="Username/email/phone">
            <input type="password" name="password" placeholder="Password">
            <button type="submit" name="login">Login</button>
        </form>
        <?php 
        if (isset($_GET["error"])) {
            if ($_GET["error"] == "invalid_input") {
                echo "<p>Invalid inputs. Try again.</p>";
            } else if ($_GET["error"] == "invalid_username") {
                echo "<p>Invalid username.</p>";
            } else if ($_GET["error"] == "invalid_email") {
                echo "<p>Invalid email.</p>";
            } else if ($_GET["error"] == "invalid_phone") {
                echo "<p>Invalid phone.</p>";
            } else if ($_GET["error"] == "password_mismatch") {
                echo "<p>Password mismatch.</p>";
            } else if ($_GET["error"] == "username_taken") {
                echo "<p>Username already taken.</p>";
            } else if ($_GET["error"] == "database_error") {
                echo "<p>Database error.</p>";
            } else if ($_GET["error"] == "register_error") {
                echo "<p>Registration error.</p>";
            } else if ($_GET["error"] == "none") {
                echo "<p>You have been registered! Redirecting...</p>";
            }
        }
    ?>
    </section>
</body>
</html>