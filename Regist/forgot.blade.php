<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forgot</title>
    <link rel="stylesheet" href="style.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>
<body>
 <div class="wrapper">
    <form action="">
        <h1>Forgot</h1>
        <div class="input-box">
            <input type="text" placeholder="Username" required>
            <i class='bx bxs-user'></i>
        </div>
        <div class="input-box">
            <input type="email" placeholder="Email" required>
            <i class='bx bxs-envelope'></i>
        </div>
        <button type="submit" class="btn">Confirm</button>
        <div class="login-link">
            <p>
                Already have an account? 
                <a href="{{ route('login') }}" style="text-decoration: none; color: rgb(250, 250, 250);">Login</a>
             </p>             
        </div>
    </form>
 </div>
</body>
</html>
