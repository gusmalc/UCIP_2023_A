<?php
include "enviar_email.php";

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <link href='https://res.webserver.ar/img/dn_ico.png' rel='shortcut icon' type='image/png'>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">

    <title>Document</title>
</head>

<body>

    <div class="container">
        <h1>CONTACTO</h1>

        <?php 
        if($GLOBALS['enviado'] == "si"){       
        
        ?>
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            Muchas gracias !
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

        <?php 
            }
        ?>



        <div class="row">
            <div class="col-12 col-md-6">
                <form action="#" method="post">

                    <div class="mb-3">
                        <label for="nombre" class="form-label">*Nombre</label>
                        <input type="text" class="form-control" id="nombre" name="nombre" required>
                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label">*E-mail</label>
                        <input type="email" class="form-control" id="email" name="email" required>
                    </div>

                    <div class="mb-3">
                        <label for="telefono" class="form-label">Telefono</label>
                        <input type="text" class="form-control" id="telefono" name="telefono">
                    </div>




                    <div class="mb-3">
                        <label for="consulta" class="form-label">*Consulta</label>
                        <textarea class="form-control" id="consulta" rows="3" name="consulta" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
            </div>
            <div class="col-12 col-md-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.6295657229557!2d-57.63585262484528!3d-38.00910004522589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d8ae11598521%3A0xa0d5005f0bb789b!2sLA%20CONDESA%20DE%20LOS%20NARANJOS!5e0!3m2!1ses-419!2sar!4v1691188136697!5m2!1ses-419!2sar" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    </div>







    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>

</body>

</html>