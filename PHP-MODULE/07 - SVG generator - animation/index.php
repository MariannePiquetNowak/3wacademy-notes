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
            width:98%;
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
                    <div class="field">
                        <div id="menuShape" class="dropdown">
                          <div class="dropdown-trigger">
                            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                              <span>Nouvelle Forme</span>
                              <span class="icon is-small">
                                <i class="fas fa-angle-down" aria-hidden="true"></i>
                              </span>
                            </button>
                          </div>
                          <div class="dropdown-menu" id="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                                <?php
                                /*
                                lire les dossiers contenu dans classes/Shape
                                */
                                if ($handle = opendir('./classes/Shape')) {
                                    while (false !== ($entry = readdir($handle))) {
                                        if ($entry != "." && $entry != ".." && !strpos($entry, ".")) {
                                ?>
                                <a href="#" data-shape="<?= $entry; ?>" class="dropdown-item">
                                <?= $entry; ?>
                              </a>
                                <?php
                                       }
                                    }
                                    closedir($handle);
                                }
                                ?>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="shapeMarkup">
                
            </div>
 
            
            <div class="field">
                  <p class="control has-text-centered">
                    <button type="submit" class="button is-success">
                      Validation
                    </button>
                  </p>
                </div>
        </form>
    </div>
    
    <script type="module" src="js/main.js"></script>
</body>

</html>
