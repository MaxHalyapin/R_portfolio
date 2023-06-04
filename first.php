
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/skills.css">
    <link rel="stylesheet" href="css/works.css">
    <link rel="stylesheet" href="app/assets/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
          integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
          crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Портфолио</title>
    <script type="text/javascript" src="jquery-3.1.0.min.js"></script>
</head>

<body class="content">
<div class="content-block">
    <?php include 'application/blocks/header.php';?>
    <div id="page-content"></div>

    <?php include 'application/blocks/dopolnitelno.php'?>
    <?php include 'application/blocks/footer.php'; ?>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="js/scripts.js"></script>
    <script src="app/js/primary.js"></script>
    <script src="app/js/contacts.js"></script>
    <script src="app/js/skills.js"></script>
    <script src="app/js/experience.js"></script>
    <script src="app/js/works.js"></script>
    <?php include 'application/blocks/modal.php'; ?>
    <script src="js/scripts.js"></script>
    <script src="js/simple-adaptive-slider.js"></script>


</div>




</body>
<script>
    $(function () {
        'use strict';
        $('#form').on('submit', function (e) {
            e.preventDefault();
            var fd = new FormData(this);
            $.ajax({
                url: 'send.php',
                type: 'POST',
                contentType: false,
                processData: false,
                data: fd,
                success: function (msg) {
                    // alert(msg);
                    if (msg === 'ok') {
                        alert('Отправлено')
                    } else {
                        alert('Ошибка')
                    }
                }
            });
        });
    });
</script>

</html>