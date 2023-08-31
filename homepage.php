<?php
require 'conectare.php';
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="stylesheet" href="stilhomepage.css" />
  <link rel="stylesheet" href="stilhomepagemain.css">
  <link rel="stylesheet" href="stilfooter.css">
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Dosis:wght@200&family=Montserrat:ital@1&display=swap" rel="stylesheet">

  <title>Clothes For All</title>
</head>

<body>

  <div class="meniupreview">
    <div class="meniutoatesporturile">
      <div><img src="icon/left-arrow.png" alt="">
        <h2><i>Toate sporturile</i></h2>
      </div>
      <div><img src="icon/sports-trophy-on-a-banner-with-olive-branches-svgrepo-com.png" alt="">
        <h3>Cauta brandul pe care dorești să-l achizitionezi iar noi îți vom genera produsele necesare!</h3>
      </div>
      <div class="search-bar-meniu-toate-sporturile">
        <form role="search">
          <!-- <a></a> -->
          <label for="sport"><img src="icon/magnifying-glass-backup-svgrepo-com.png" alt=""></label>
          <input type="search" name="sport" id="" placeholder="Cauta sportul dorit" />

        </form>
      </div>
      <div class="afiseaza-sporturile"></div>
    </div>
    <div class="meniu barbati">
      <div class="titlu"><img src="icon/left-arrow.png" alt="">
        <h2>Barbati</h2>
      </div>
      <?php
      $sqlgender = "SELECT c.categorie_name, c.categorie_id FROM products p
INNER JOIN categorie c ON p.categorie_id = c.categorie_id
WHERE p.gender_id = '1'";
      $querygender = mysqli_query($conectare, $sqlgender);
      $categorii = array();
      while ($rowcategori = mysqli_fetch_array($querygender)) {
        $categorii[] = array(
          "categorie_id" => $rowcategori['categorie_id'],
          "categorie_name" => $rowcategori['categorie_name']
        );
      }
      $categorii_unice = array_unique($categorii, SORT_REGULAR);
      ?>
      
        <?php foreach ($categorii_unice as $categorie) { ?>
          <div data-category-id="<?php echo $categorie['categorie_id'] ?>">
            <p><?php echo $categorie['categorie_name'] ?></p><img src="icon/arrow-right-for-menu.png" alt="">
          </div>
        <?php } ?>
    </div>
      <div class="meniu femei">
        <div class="titlu"><img src="icon/left-arrow.png" alt="">
          <h2>Femei</h2>
        </div>
        <div>
          <p>Imbrăcăminte</p><img src="icon/arrow-right-for-menu.png" alt="">
        </div>
        <div>
          <p>Pantofi</p><img src="icon/arrow-right-for-menu.png" alt="">
        </div>
        <div>
          <p>Accesorii</p><img src="icon/arrow-right-for-menu.png" alt="">
        </div>
        <div>
          <p>Branduri</p><img src="icon/arrow-right-for-menu.png" alt="">
        </div>
      </div>

      <div class="meniuprincipal">
        <div class="toatesporturile">
          <h3>Toate Brandurile</h3><img src="icon/arrow-right-for-menu.png" alt="">

        </div>
        <?php
        $sqlgender = "SELECT * FROM gender";
        $querygender = mysqli_query($conectare, $sqlgender);
        while ($rowgender = mysqli_fetch_array($querygender)) {
        ?>
          <div data-gender-id="<?php echo $rowgender['gender_id'] ?>">
            <h3><?php echo $rowgender['gender_name'] ?></h3><img src="icon/arrow-right-for-menu.png" alt="">
          </div>
        <?php } ?>
      </div>
    </div>

    <header>
      <nav>
        <div>
          <button class="butonmeniu">
            <i class="fa-solid fa-bars meniudeschis"></i>
            <i class="fa-solid fa-x meniuinchis" style="display: none"></i>
            <p>Meniu</p>
          </button>
        </div>
        <div class="logo">
          <a href="homepage.html">
            <img src="logo.png" alt="" width="80px" height="80px" /></a>
        </div>
        <div class="search-bar">
          <form action="" method="post">
            <input type="text" name="search" id="search" placeholder="Cauta produsul dorit" />
            <button type="submit">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          <div class="result-bar">
            <div class="titlu-result-bar">
              <h4>Produse</h4>
            </div>
            <div class="container-afisare-result">
            </div>
          </div>
        </div>
  </div>
  <div class="itemsnavbar">
    <div class="ajutor">
      <i class="fa-solid fa-circle-info"></i>
      <p>Ajutor</p>
    </div>

    <div>
      <i class="fa-solid fa-map-location-dot"></i>
      <p>Locatii</p>
    </div>
    <div class="account">
      <i class="fa-regular fa-user"></i>
      <p>Utilizator</p>
    </div>
    <div class="favorites">
      <p class="count-favs">0</p>
      <i class="fa-regular fa-star favorite"></i>
      <p>Favorite</p>

    </div>
  </div>
  <div class="cart">
    <p class="count-cart">0</p>
    <i class="fa-solid fa-cart-shopping"></i>
  </div>
  <!-- Meniul dropdown pentru iconita info -->
  <div class="dropdownmenu-info">
    <div class="help">
      <h3>Ai nevoie de ajutor?</h3>
    </div>
    <div class="first-div">
      <i class="fa-solid fa-question"></i>
      <div>
        <h4>Gaseste raspunsuri in <a href="#">Intrebari frecvente</a></h4>
      </div>
    </div>
    <div class="first-div">
      <i class="fa-solid fa-mobile-screen"></i>
      <div>
        <h4>Contacteaza-ne aici</h4>
        <p>Luni-Vineri: 09:00 - 20:00</p>
        <p>Sambata - Duminica: 10:00 - 19:00</p>
      </div>
    </div>
    <div class="first-div">
      <i class="fa-solid fa-envelope"></i>
      <div>
        <h4>Trimite-ne un <a href="">Email</a></h4>
      </div>
    </div>
    <div class="first-div">
      <i class="fa-solid fa-location-dot"></i>
      <div>
        <h4>Contacteaza magazinul tau:</h4>
        <a href="#">Cauta cel mai apropiat magazin</a>
      </div>
    </div>
    <div class="first-div">
      <i class="fa-solid fa-exclamation" style="margin-left: .4em;"></i>
      <div>
        <h4>Contacta-ti <a href="#">Serviciul relatii cu clientii</a></h4>
      </div>
    </div>
  </div>
  <!-- dropdown menu fpr favorites-->
  <div class="in-development">
    In development...stay closed :)
  </div>
  <!-- Meniul dropdown pentru iconita account -->
  <div class="dropdownmenu-myaccount">
    <div> <img src="icon/user-circle-svgrepo-com.png" alt="" width="70em"></div>
    <div>
      <h2>Bine ai venit!</h2>
    </div>
    <div>
      <p>Trebuie să te conectezi doar o singură dată pentru a profita de toate serviciile tale preferate.
        Este
        foarte simplu!</p>
    </div>
    <div><img src="logo.png" alt="" width="300px" height="200px"></div>
    <div><a href="#">Conecteaza-te</a></div>
  </div>
  <!-- Meniul dropdown pentru iconita cart -->
  <div class="dropdownmenu-cart">
    <div class="titlu-cart">
      <h3>Cosul meu</h3>
    </div>
    <div class="cart-gol">
      <img src="icon/empty-cart-svgrepo-com.png" alt="" width="200px">
      <p>Cosul tau de cumparaturi este gol</p>
      <p>Continua cumparaturile si adauga produse in cos</p>
    </div>
    <div class="cart-plin">
      <div class="adauga-produs-cart">

      </div>
      <div class="total">

        <div class="total-articole">
          <p>Total articole:</p>
          <p class="count-nr-articole">0</p>
        </div>
        <div class="total-pret">
          <p class="count-total"></p>lei
        </div>

      </div>
      <div class="button-cart"> <a href="#">Cos de cumpărături</a></div>
    </div>
  </div>
  </nav>

  </header>
  <main>
    <section>
      <div id="cover-container">
        <div class="sagetifirstsection left">
          <a>&#8249</a>
        </div>
        <div id="scroll-container">

          <div class="custom-banner active">
            <div class="pictures"><img src="imagini scrolabile/67011b17-b152-4536-965f-5dd8ab0473a5.png" alt=""></div>
            <div class="description"></div>
          </div>
          <div class="custom-banner">
            <div class="pictures"><img src="imagini scrolabile/baner1_1.png" alt=""></div>
            <div class="description"></div>
          </div>
          <div class="custom-banner">
            <div class="pictures"><img src="imagini scrolabile/baner1_3.png" alt=""></div>
            <div class="description"></div>
          </div>
          <div class="custom-banner">
            <div class="pictures"><img src="imagini scrolabile/jordan_ct8529-012_03.png" alt=""></div>
            <div class="description"></div>
          </div>
          <div class="custom-banner">
            <div class="pictures"><img src="imagini scrolabile/Manusi_Box_66b773b3-8b9b-445d-afa4-c87a98c1cf51_1800x.png" alt=""></div>
            <div class="description"></div>
          </div>
          <div class="custom-banner">
            <div class="pictures"><img src="logo.png" alt=""></div>
            <div class="description"></div>
          </div>


        </div>
        <ul>

        </ul>
        <div class="sagetifirstsection right"><a>&#8250</a></div>
      </div>
      <div class="logo-container">
        <div class="logo-slides">
          <a href="#"><img src="logo/98e5a4811e32177795897d60231a016f--jordan--jordan-shoes.png" alt=""></a>
          <a href="#"><img src="logo/adidas.jpg" alt=""></a>
          <a href="#"><img src="logo/American-Alpha-Industries-logo.jpg" alt=""></a>
          <a href="#"><img src="logo/brandit.png" alt=""></a>
          <a href="#"><img src="logo/d83957_03061982f0084d58bff4b5ce15ea31de~mv2.jpg" alt=""></a>
          <a href="#"><img src="logo/new-balance.jpg" alt=""></a>
          <a href="#"><img src="logo/nike-logo-black-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg" alt=""></a>
          <a href="#"><img src="logo/PUMA-logo.png" alt=""></a>
          <a href="#"><img src="logo/reebok.png" alt=""></a>
          <a href="#"><img src="logo/wing-falcon-bird-logo-vector.jpg" alt=""></a>
        </div>

      </div>
    </section>
    <section>
      <div class="diverse">
        <ul>
          <li><img src="diverse/chenar mic barbati4 188x188.png" alt="">
            <h3>Barbati</h3>
          </li>
          <li><img src="diverse/chenar mic copii 188x188.png""><h3>Copii</h3></li>
          <li><img src=" diverse/chenar mic femei3 188x188.png" alt="">
            <h3>Femei</h3>
          </li>
          <li><img src="diverse/chenar mic accesorii 188x188  1.png" alt="">
            <h3>Accesorii</h3>
          </li>
          <li><img src="diverse/sale-free-4-svgrepo-com.png" alt="">
            <h3>Reduceri</h3>
          </li>
        </ul>
      </div>
      <div class="boots">
        <div class="first-image">
          <div class="imagine"><img src="diverse/military-boots.png" alt=""></div>
          <div class="descriere">
            <p>Bocanci militari</p>
            <p>Bocanci militari pentru sporturi extreme</p>
            <p><a href="#">Cumpără acum</a></p>
          </div>
        </div>
        <div class="second-image">
          <div class="imagine"><img src="diverse/maxresdefault.jpg" alt=""></div>
          <div class="descriere">
            <p>Pantofi Nike</p>
            <p>Ești un împătimit al sporturilor de contact? Încearcă ghetele pentru box de la Nike</p>
            <p><a href="">Cumpără acum</a></p>
          </div>
        </div>
      </div>

    </section>

    <footer>
      <div class="retur">
        <div>
          <a href="">
            <div class="icon"><img src="icon/pay-svgrepo-com.png" alt=""></div>
            <div class="descriere">
              <p>Plata cash sau ramburs</p>
            </div>
          </a>
        </div>
        <div>
          <a href="">
            <div class="icon"><img src="icon/calendar-days-svgrepo-com.png" alt=""></div>
            <div class="descriere">
              <p>100 zile drept de retur</p>
            </div>
          </a>
        </div>
        <div>
          <a href="">
            <div class="icon"><img src="icon/delivery-sales-discount-svgrepo-com.png" alt=""></div>
            <div class="descriere">
              <p>Livrare si retur gratuite</p>
            </div>
          </a>
        </div>
      </div>
      <div class="pay-icon">
        <div><img src="icon/visa-svgrepo-com.png" alt=""></div>
        <div><img src="icon/apple-pay-svgrepo-com.png" alt=""></div>
        <div><img src="icon/bt.png" alt=""></div>
        <div><img src="icon/fancurier.png" alt=""></div>
        <div><img src="icon/google-pay-svgrepo-com.png" alt=""></div>
        <div><img src="icon/mastercard-3-svgrepo-com.png" alt=""></div>

      </div>
      <div class="newsletter">
        <div>
          <h2>Nu rata noile oferte și promoții</h2>
          <h4>Abonează-te la newsletter pentru a primii oferte si promoții</h4>
        </div>
        <div>
          <form action="automail.php" method="post">
            <div class="checkbox">
              <div>
                <label for="femeie"><input type="radio" name="gen" id="femeie" value="femeie">
                  Pentru Femei</label>
              </div>
              <div>
                <label for="barbat"><input type="radio" name="gen" id="barbat" value="barbat">
                  Pentru Barbat</label>
              </div>
            </div>
            <div class="email">
              <input type="email" name="email" id="email">
              <label for="email">Adresa ta de e-mail</label>
            </div>
            <div>
              <button type="submit" name="submit" id="submit" class=>Abonează-te</button>
            </div>
          </form>
        </div>
        <div>
          <p>*Doresc să primesc pe e-mail informații despre vouchere, oferte și ultimele tendințe din modă.</p>
          <p>Te poți dezabona oricând vrei, gratuit.</p>
        </div>
      </div>
      <div class="contact-section">
        <div class="contact-section-first-div">
          <div class="footer-main-div">
            <div class="footer-logo"><img src="logo.png" alt="">
            </div>
            <div class="footer-icon">
              <img src="icon/facebook-svgrepo-com.png" alt="">
              <img src="icon/instagram-fill-svgrepo-com.png" alt="">
              <img src="icon/youtube-168-svgrepo-com.png" alt="">
              <img src="icon/twitter-2-svgrepo-com.png" alt="">
            </div>
          </div>
          <div class="relatii-clienti">
            <h3>RELAȚII CU CLIENȚII</h3>

            <p>Zonă de livrare</p>
            <p>Ajutor și contact</p>
            <p>Protecția consumatorului</p>

          </div>
          <div class="relatii-clienti">
            <h3>CUMPĂRĂTURI SIGURE</h3>
            <p>Datele tale sunt în siguranță la noi</p>
          </div>
        </div>
        <div class="note">
          <p>*Livrare gratuită pentru comenzile de peste 99,90 lei, în caz contrar livrarea costă 9,90 lei.</p>
          <p>**Toate prețurile includ TVA.</p>
        </div>
      </div>
      <div class="About">
        <div>
          <p>Despre noi</p>
          <p>Presă</p>
          <p>Joburi</p>
          <p>Relații cu investitorii</p>
          <p>Politica de confidențialiate</p>
          <p>Termeni și condiții</p>
          <p>Date juridice</p>
        </div>
        <div>
          <p>&#169;</p>
          <p>2023 Clothes For All ECommerce coporation</p>
        </div>
      </div>
    </footer>


  </main>
  <script src="scriptnavbar.js"></script>
  <script src="scriptmeniu.js"></script>
  <script src="scriptsectiunea1.js"></script>
  <script src="scriptfooter.js"></script>
  <script src="search.js"></script>
  <script src="scriptMeniuSendToProduse.js"></script>
</body>

</html>