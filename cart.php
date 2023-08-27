<?php
// require 'conectare.php';
session_start();
if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') {
    $url = "https://";
} else {
    $url = 'http://';
    $url .= $_SERVER['HTTP_HOST'];
    $url .= $_SERVER['REQUEST_URI'];
    $url;
}
$page = $url;
$sec = "";
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="refresh" content="<?php echo $sec; ?>" URL="<?php echo $page; ?>">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cos-cumparaturi</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="stylesheet" href="stilhomepage.css" />
    <link rel="stylesheet" href="stilfooter.css">
    <link rel="stylesheet" href="cart.css">
    <link rel="stylesheet" href="produse.css">

    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=Dosis:wght@200&family=Montserrat:ital@1&display=swap" rel="stylesheet">

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
            <div>
                <h3>Barbati</h3><img src="icon/arrow-right-for-menu.png" alt="">
            </div>
            <div>
                <h3>Femei</h3><img src="icon/arrow-right-for-menu.png" alt="">
            </div>
            <div>
                <h3>Copii</h3><img src="icon/arrow-right-for-menu.png" alt="">
            </div>
            <div>
                <h3>Accesori</h3><img src="icon/arrow-right-for-menu.png" alt="">
            </div>
            <div>
                <h3>Articole army</h3><img src="icon/arrow-right-for-menu.png" alt="">
            </div>

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
                    <!-- <div class="continut-cart">
                            <div class="imagine-produs-cart">
                                <img src="${imagine}" alt="">
                            </div>
                            <div class="descriere-produs-cart">
                                <div class="titlu-produs-cart">
                                    <p>${titlu}</p>
                                </div>
                                <div class="pret-produs-cart">
                                    <p>${pret} lei</p>
                                </div>
                            </div>
                        </div> -->
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
        <section class="section-cart-gol">
            <div class="imagine-section-cart-gol"><img src="icon/empty-cart-svgrepo-com.png" alt=""></div>
            <div class="descriere-section-cart-gol">
                <h2>Cosul tău de cumparaturi este gol</h2>
                <p>Continuă să adaugi produse în coș și să te bucuri de ele după ce comanzi</p>
            </div>
        </section>
        <section class="section-cart-plin">
            <div class="header-section-cart-plin">
                <h2>Produsele din coș</h2>
            </div>
            <div class="main-div-cart-plin">
                <div class="produse-cart-plata">
                    <div class="header-produse-cart">
                        <p>Mai trebuie sa adaugi produse în valoare de
                        <h4 class="mai-adauga-produse"></h4>lei pentru transport gratuit</p>
                    </div>
                    <div class="cosul-tau">
                        <div class="produsele-cosul-tau">
                            <div class="data-livrare">
                            </div>
                            <!-- <div class="produsele-din-cart">
                                <div class="div-left">
                                    <div class="imagine-produs-cart-plata"><img src="produse/Nike Jordan Pantofi.jpg" alt=""></div>
                                    <div class="afisarea-produsului">
                                        <div class="produs-cart-plata">
                                            <div class="titlu-produs-cart-plata">
                                                <h3>Nike</h3>
                                            </div>
                                            <div class="descriere-produs-cart-plata">
                                                <p>Jordan Retro 6</p>
                                            </div>
                                            <div class="marime-produs-cart-plata">
                                                <p>M</p>
                                            </div>
                                            <div class="culoare-produs-cart-plata">
                                                <p>Galben</p>
                                            </div>
                                            <div class="cantitate-produs-cart-plata">x
                                                <p class="sumar-cantitate-produs-cart-plata">1</p>
                                            </div>
                                        </div>
                                        <div class="sterge-produs-cart-plata"><button>Sterge produsul</button></div>
                                    </div>
                                </div>

                                <div class="div-right">
                                    <div class="cantitate-produs-cart-plata"><img class="plus" src="icon/plus-square-svgrepo-com.png" alt="">
                                        <h2 class="cantitatea-dorita"></h2>
                                        <img class="minus" src="icon/minus-square-svgrepo-com.png" alt="">
                                    </div>
                                    <div class="pret-produs-cart-plata">
                                        <div class="pret-produs-per-cantitate">
                                            <p id="pret-produs-per-cantitate"></p>
                                            <p>lei</p>
                                        </div>
                                        <div class="pret-initial-produs">
                                            <p id="pret-initial-produs">42</p>
                                            <p>lei fiecare</p>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
                <div class="finalizeaza-comanda">
                    <div class="subtotal-total">
                        <ul>
                            <li>
                                <div>
                                    <p>Subtotal</p>
                                </div>
                                <div>
                                    <p class="subtotal-toate-produsele"></p>lei
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p>Livrare</p>
                                </div>
                                <div>
                                    <p class="cost-livrare"></p>lei
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h3>În total</h3>
                                </div>
                                <div>
                                    <h3 class="total-cart-subtotal">0,00</h3>
                                    <h3>lei</h3>
                                </div>
                            </li>
                        </ul>
                        <div class="subtotal-total-button"><button>Finalizează comanda</button></div>
                        <div class="logo-modalitati-plata">
                            <img src="icon/apple-pay-svgrepo-com.png" alt="">
                            <img src="icon/google-pay-svgrepo-com.png" alt="">
                            <img src="icon/mastercard-3-svgrepo-com.png" alt="">
                            <img src="icon/visa-svgrepo-com.png" alt="">
                        </div>
                    </div>

                    <div class="vouchere">
                        <img src="icon/voucher-coupon-svgrepo-com.png" alt="">
                        <p>Codurile de voucher pot fi adăugate în ultimul pas al comenzii</p>
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
                    <form action="">
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
                    <p>*Doresc să primesc pe e-mail informații despre vouchere, oferte și ultimele tendințe din modă.
                    </p>
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
                    <p>*Livrare gratuită pentru comenzile de peste 99,90 lei, în caz contrar livrarea costă 9,90 lei.
                    </p>
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
    <script src="scriptfooter.js"></script>
    <script src="produse.js"></script>
    <script src="scriptcart.js"></script>
    <script src="search.js"></script>
</body>

</html>