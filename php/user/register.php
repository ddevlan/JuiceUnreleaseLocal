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
    <section class="register-form">
        <h2>Register</h2>
        <form action="php/includes/register.inc.php" method="post">
            <input type="text" name="username" placeholder="Username">
            <input type="text" name="email" placeholder="Email">
            <input type="text" name="phone" placeholder="Phone #">
            <input type="password" name="password" placeholder="Password">
            <input type="password" name="passwordConfirm" placeholder="Password confirmation">
            <button type="submit" name="register">Register</button>
        </form>
    </section>

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
</body>
</html>