<html>

<head>
    <title>Dr. Jeevagan - Contact</title>
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
    <meta content="utf-8" http-equiv="encoding">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style type="text/css">
        body {
            background-color: #fff;
        }

        body,
        h1,
        p {
            font-family: "Helvetica Neue", "Segoe UI", Segoe, Helvetica, Arial, "Lucida Grande", sans-serif;
            font-weight: normal;
            margin: 0;
            padding: 0;
            text-align: center;
        }

        .container {
            margin-left: auto;
            margin-right: auto;
            margin-top: 177px;
            max-width: 1170px;
            padding-right: 15px;
            padding-left: 15px;
        }

        .row:before,
        .row:after {
            display: table;
            content: " ";
        }

        .col-md-6 {
            width: 50%;
        }

        .col-md-push-3 {
            margin-left: 25%;
        }

        h1 {
            font-size: 48px;
            font-weight: 300;
            margin: 0 0 20px 0;
        }

        .lead {
            font-size: 21px;
            font-weight: 200;
            margin-bottom: 20px;
        }

        p {
            margin: 0 0 10px;
        }

        a {
            color: #3282e6;
            text-decoration: none;
        }
    </style>
</head>

<body>
    <div class="container text-center" id="error">

        <div class="row">
            <div class="col-md-12">
                <div class="main-icon text-warning"><span class="uxicon uxicon-alert"></span></div>
                <h1>Thank you!</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-md-push-3">
                <p class="lead">We will get back to you shortly.</p>
            </div>
        </div>
    </div>
    <div>
        <p>You will be redirected back to the website in <span id="counter">5</span> <span id="counter1">seconds</span> </p>
    </div>
    <script>
        setInterval(function() {
            var div = document.querySelector("#counter");
            var count = div.textContent * 1 - 1;
            div.textContent = count;

            if (count == 1) {
                var div1 = document.querySelector("#counter1");
                div1.innerHTML = "second";
            }

            if (count <= 0) {
                var count = 0;
                window.location.href = "./";
                return;
            }
        }, 1000);
    </script>
</body>

</html>