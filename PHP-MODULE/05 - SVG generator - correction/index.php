<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>formulaire</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <style>
        form {
            padding-top:100px;
            margin:0 auto;
            width:90%;
        }
    </style>
</head>

<body>
    <div class="container">
        <div id="preview" class="has-text-centered">
            
        </div>
        <form id="svgForm" action="svg.php" method="POST">
            <!-- svg -->
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Svg</label>
                </div>
                <div class="field-body">
                    <div class="field  has-addons">
                     <p class="control">
                        <input class="input" name="svgWidth" type="number" placeholder="Width" value="800">
                      </p>
                      <p class="control">
                        <a class="button is-static">
                          px
                        </a>
                      </p>
                    </div>
                    <div class="field  has-addons">
                     <p class="control">
                        <input class="input" name="svgHeight" type="number" placeholder="Height" value="400">
                      </p>
                      <p class="control">
                        <a class="button is-static">
                          px
                        </a>
                      </p>
                    </div>
                    <div class="field">
                     <p class="control">
                        <input class="input" name="svgColor" type="color" placeholder="Color"  value="#000000">
                      </p>
                    </div>
                </div>
            </div>
            <!-- rectangle -->
            <input type="hidden" name="shape[]" value="Rectangle" />
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Rectangle</label>
                </div>
                <div class="field-body">
                    <div class="field  has-addons">
                     <p class="control">
                        <input class="input" name="shape0X" type="number" placeholder="X" value="10">
                      </p>
                      <p class="control">
                        <a class="button is-static">
                          px
                        </a>
                      </p>
                    </div>
                    <div class="field  has-addons">
                     <p class="control">
                        <input class="input" name="shape0Y" type="number" placeholder="Y"  value="20">
                      </p>
                      <p class="control">
                        <a class="button is-static">
                          px
                        </a>
                      </p>
                    </div>
                    <div class="field  has-addons">
                     <p class="control">
                        <input class="input" name="shape0Width" type="number" placeholder="Width"  value="100">
                      </p>
                      <p class="control">
                        <a class="button is-static">
                          px
                        </a>
                      </p>
                    </div>
                    <div class="field  has-addons">
                     <p class="control">
                        <input class="input" name="shape0Height" type="number" placeholder="Height"  value="500">
                      </p>
                      <p class="control">
                        <a class="button is-static">
                          px
                        </a>
                      </p>
                    </div>
                    <div class="field">
                     <p class="control">
                        <input class="input" name="shape0FillColor" type="color" placeholder="Color" value="#FFDDCC">
                      </p>
                    </div>
                    <div class="field  has-addons">
                     <p class="control">
                        <input class="input" name="shape0StrockeWidth" type="number" placeholder="StrockeWidth" value="1">
                      </p>
                      <p class="control">
                        <a class="button is-static">
                          px
                        </a>
                      </p>
                    </div>
                    <div class="field">
                     <p class="control">
                        <input class="input" name="shape0StrokeColor" type="color" placeholder="Color" value="#FF0000">
                      </p>
                    </div>
                    <div class="field">
                     <p class="control">
                        <input class="input" name="shape0Opacity" type="number" placeholder="Opacity" value="1">
                      </p>
                    </div>
                </div>
            </div>
            <!-- carré -->
            <input type="hidden" name="shape[]" value="Square" />
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Carré</label>
                </div>
                <div class="field-body">
                    <div class="field  has-addons">
                     <p class="control">
                        <input class="input" name="shape1X" type="number" placeholder="X" value="10">
                      </p>
                      <p class="control">
                        <a class="button is-static">
                          px
                        </a>
                      </p>
                    </div>
                    <div class="field  has-addons">
                     <p class="control">
                        <input class="input" name="shape1Y" type="number" placeholder="Y" value="300">
                      </p>
                      <p class="control">
                        <a class="button is-static">
                          px
                        </a>
                      </p>
                    </div>
                    <div class="field  has-addons">
                     <p class="control">
                        <input class="input" name="shape1Width" type="number" placeholder="Width" value="40">
                      </p>
                      <p class="control">
                        <a class="button is-static">
                          px
                        </a>
                      </p>
                    </div>
                    <div class="field">
                     <p class="control">
                        <input class="input" name="shape1FillColor" type="color" placeholder="Color" value="#00FF00">
                      </p>
                    </div>
                    <div class="field  has-addons">
                     <p class="control">
                        <input class="input" name="shape1StrockeWidth" type="number" placeholder="StrockeWidth" value="1">
                      </p>
                      <p class="control">
                        <a class="button is-static">
                          px
                        </a>
                      </p>
                    </div>
                    <div class="field">
                     <p class="control">
                        <input class="input" name="shape1StrokeColor" type="color" placeholder="Color" value="#FFFFFF">
                      </p>
                    </div>
                    <div class="field">
                     <p class="control">
                        <input class="input" name="shape1Opacity" type="number" placeholder="Opacity" value="1">
                      </p>
                    </div>
                </div>
            </div>
            <!-- ellipse -->
            <input type="hidden" name="shape[]" value="Ellipse" />
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Ellipse</label>
                </div>
                <div class="field-body">
                    <div class="field  has-addons">
                     <p class="control">
                        <input class="input" name="shape2X" type="number" placeholder="X" value="400">
                      </p>
                      <p class="control">
                        <a class="button is-static">
                          px
                        </a>
                      </p>
                    </div>
                    <div class="field  has-addons">
                     <p class="control">
                        <input class="input" name="shape2Y" type="number" placeholder="Y" value="200">
                      </p>
                      <p class="control">
                        <a class="button is-static">
                          px
                        </a>
                      </p>
                    </div>
                    <div class="field  has-addons">
                     <p class="control">
                        <input class="input" name="shape2Rx" type="number" placeholder="Rx" value="100">
                      </p>
                      <p class="control">
                        <a class="button is-static">
                          px
                        </a>
                      </p>
                    </div>
                    <div class="field  has-addons">
                     <p class="control">
                        <input class="input" name="shape2Ry" type="number" placeholder="Ry" value="40">
                      </p>
                      <p class="control">
                        <a class="button is-static">
                          px
                        </a>
                      </p>
                    </div>
                    <div class="field">
                     <p class="control">
                        <input class="input" name="shape2FillColor" type="color" placeholder="Color" value="#EEEEEE">
                      </p>
                    </div>
                    <div class="field  has-addons">
                     <p class="control">
                        <input class="input" name="shape2StrockeWidth" type="number" placeholder="StrockeWidth" value="1">
                      </p>
                      <p class="control">
                        <a class="button is-static">
                          px
                        </a>
                      </p>
                    </div>
                    <div class="field">
                     <p class="control">
                        <input class="input" name="shape2StrokeColor" type="color" placeholder="Color" value="#FFFFFF">
                      </p>
                    </div>
                    <div class="field">
                     <p class="control">
                        <input class="input" name="shape2Opacity" type="number" placeholder="Opacity" value="1">
                      </p>
                    </div>
                </div>
            </div>
            <!-- cercle -->
            <input type="hidden" name="shape[]" value="Circle" />
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Circle</label>
                </div>
                <div class="field-body">
                    <div class="field  has-addons">
                     <p class="control">
                        <input class="input" name="shape3X" type="number" placeholder="X" value="700">
                      </p>
                      <p class="control">
                        <a class="button is-static">
                          px
                        </a>
                      </p>
                    </div>
                    <div class="field  has-addons">
                     <p class="control">
                        <input class="input" name="shape3Y" type="number" placeholder="Y" value="300">
                      </p>
                      <p class="control">
                        <a class="button is-static">
                          px
                        </a>
                      </p>
                    </div>
                    <div class="field  has-addons">
                     <p class="control">
                        <input class="input" name="shape3R" type="number" placeholder="Rayon" value="40">
                      </p>
                      <p class="control">
                        <a class="button is-static">
                          px
                        </a>
                      </p>
                    </div>
                    <div class="field">
                     <p class="control">
                        <input class="input" name="shape3FillColor" type="color" placeholder="Color" value="#FFEE00">
                      </p>
                    </div>
                    <div class="field  has-addons">
                     <p class="control">
                        <input class="input" name="shape3StrockeWidth" type="number" placeholder="StrockeWidth" value="1">
                      </p>
                      <p class="control">
                        <a class="button is-static">
                          px
                        </a>
                      </p>
                    </div>
                    <div class="field">
                     <p class="control">
                        <input class="input" name="shape3StrokeColor" type="color" placeholder="Color" value="#FFFFFF">
                      </p>
                    </div>
                    <div class="field">
                     <p class="control">
                        <input class="input" name="shape3Opacity" type="number" placeholder="Opacity" value="1">
                      </p>
                    </div>
                </div>
            </div>
            <!-- cercle -->
            <input type="hidden" name="shape[]" value="Circle" />
            <div class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Circle</label>
                </div>
                <div class="field-body">
                    <div class="field  has-addons">
                     <p class="control">
                        <input class="input" name="shape4X" type="number" placeholder="X" value="300">
                      </p>
                      <p class="control">
                        <a class="button is-static">
                          px
                        </a>
                      </p>
                    </div>
                    <div class="field  has-addons">
                     <p class="control">
                        <input class="input" name="shape4Y" type="number" placeholder="Y" value="300">
                      </p>
                      <p class="control">
                        <a class="button is-static">
                          px
                        </a>
                      </p>
                    </div>
                    <div class="field  has-addons">
                     <p class="control">
                        <input class="input" name="shape4R" type="number" placeholder="Rayon" value="40">
                      </p>
                      <p class="control">
                        <a class="button is-static">
                          px
                        </a>
                      </p>
                    </div>
                    <div class="field">
                     <p class="control">
                        <input class="input" name="shape4FillColor" type="color" placeholder="Color" value="#FFEE00">
                      </p>
                    </div>
                    <div class="field  has-addons">
                     <p class="control">
                        <input class="input" name="shape4StrockeWidth" type="number" placeholder="StrockeWidth" value="1">
                      </p>
                      <p class="control">
                        <a class="button is-static">
                          px
                        </a>
                      </p>
                    </div>
                    <div class="field">
                     <p class="control">
                        <input class="input" name="shape4StrokeColor" type="color" placeholder="Color" value="#FFFFFF">
                      </p>
                    </div>
                    <div class="field">
                     <p class="control">
                        <input class="input" name="shape4Opacity" type="number" placeholder="Opacity" value="1">
                      </p>
                    </div>
                </div>
            </div>
            <div class="field">
                  <p class="control has-text-centered">
                    <button id="button" type="submit" class="button is-success">
                      Validation
                    </button>
                  </p>
                </div>
        </form>
    </div>

    <script type="module" src="js/main.js"></script>
</body>

</html>
