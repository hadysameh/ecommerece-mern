
export default function Header(){
    return (
    <header id="header">
        
        <div class="header-banner">
        </div>
        <nav class="header-nav">
        <div class="container">
        <div class="hidden-md-down">
        </div>
        </div>
        <div class="container">
        <div class="hidden-lg-up  mobile">
        <div id="_mobile_static"></div>
        <div class="row row-mobile">
        <div class="col-mobile col-md-4 col-xs-4">
        <div class="float-xs-left" id="menu-icon">
        <i class="ion-android-menu"></i>
        </div>
        <div id="mobile_top_menu_wrapper" class="row hidden-lg-up" style={{display:"none"}}>
        <div class="top-header-mobile">
        <div id="_mobile_compare"></div>
        <div id="_mobile_wishtlist"></div>
        </div>
        <div id="_mobile_currency_selector"></div>
        <div id="_mobile_language_selector"></div>
        <div class="menu-close">
        menu <i class="material-icons float-xs-right">arrow_back</i>
        </div>
        <div class="menu-tabs">
        <div class="js-top-menu-bottom">
        <div id="_mobile_megamenu"></div>
        <div id="_mobile_vegamenu"></div>
        </div>
        </div>
        </div>
        </div>
        <div class="col-mobile col-md-4 col-xs-4 mobile-center">
        <div class="top-logo" id="_mobile_logo"></div>
        </div>
        <div class="col-mobile col-md-4 col-xs-4 mobile-right">
        <div id="_mobile_cart_block"></div>
        <div id="_mobile_user_info"></div>
        </div>
        </div>
        <div id="_mobile_search_category"></div>
        </div>
        </div>
        </nav>
        <div class="header-top top_bg hidden-md-down">
        <div class="container">
        <div class="row">
        <div class="col col col-md-2" id="_desktop_logo">
        <a href="http://demo2.posthemes.com/pos_rozer/layout4/">
        <img class="logo img-responsive" src="http://demo2.posthemes.com/pos_rozer/layout4/img/rozer4-logo-15858838744.jpg" alt="Rozer  Responsive Prestashop Theme"/>
        </a>
        </div>
        <div class=" col col-md-10 col-sm-12 position-static">
        <div id="_desktop_cart_block">
        <div class="blockcart cart-preview" data-refresh-url="//demo2.posthemes.com/pos_rozer/layout4/en/module/ps_shoppingcart/ajax" data-cartitems="0">
        <div class="button_cart">
        <a rel="nofollow" href="http://demo2.posthemes.com/pos_rozer/layout4/en/cart?action=show" class="desktop hidden-md-down">
        <span class="item_count">0</span>
        <span class="item_total">$0.00</span>
        </a>
        <a rel="nofollow" href="http://demo2.posthemes.com/pos_rozer/layout4/en/cart?action=show" class="mobile hidden-lg-up">
        <span class="item_count">0</span>
        </a>
        </div>
        <div class="popup_cart">
        <div class="content-cart">
        <div class="mini_cart_arrow"></div>
        <ul>
        </ul>
        <div class="price_content">
        <div class="cart-subtotals">
        <div class="products price_inline">
        <span class="label">Subtotal</span>
        <span class="value">$0.00</span>
        </div>
        <div class=" price_inline">
        <span class="label"></span>
        <span class="value"></span>
        </div>
        <div class="shipping price_inline">
        <span class="label">Shipping</span>
        <span class="value">Free</span>
        </div>
        <div class="tax price_inline">
        <span class="label">Taxes</span>
        <span class="value">$0.00</span>
        </div>
        </div>
        <div class="cart-total price_inline">
        <span class="label">Total</span>
        <span class="value">$0.00</span>
        </div>
        </div>
        <div class="checkout">
        <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/cart?action=show" class="btn btn-primary">Checkout</a>
        </div>
        </div>
        </div>
        </div>
        </div>
        <script type="text/javascript">
            var wishlistProductsIds='';
            var baseDir ='http://demo2.posthemes.com/pos_rozer/layout4/';
            var static_token='36ae6c08c97db2ca33bcd9e4bacc5420';
            var isLogged ='0';
            var loggin_required='You must be logged in to manage your wishlist.';
            var added_to_wishlist ='The product was successfully added to your wishlist.';
            var mywishlist_url='http://demo2.posthemes.com/pos_rozer/layout4/en/module/blockwishlist/mywishlist';
            var isLoggedWishlist=false;
        </script>
        <div id="_desktop_wishtlist">
        <div class="wishtlist_top">
        <a class="" href="http://demo2.posthemes.com/pos_rozer/layout4/en/module/blockwishlist/mywishlist">
        <i class="icon-heart"></i>
        <span class="txt_wishlist">Wishlist</span>
        (<span class="cart-wishlist-number">0</span>)
        </a>
        </div>
        </div><div id="_desktop_compare">
        <div class="compare_top">
        <a href="http://demo2.posthemes.com/pos_rozer/layout4/module/poscompare/comparePage">
        <i class="icon-shuffle"></i> <span>Compare (<span id="poscompare-nb"></span>)</span>
        </a>
        </div>
        </div>
        <script type="text/javascript">
            var baseDir ='/'; 
        </script>

        <div id="_desktop_search_category" class="col-md-8 col-xs-12">
            <div id="pos_search_top">
            <form method="get" action="http://demo2.posthemes.com/pos_rozer/layout4/en/search" id="searchbox" class="form-inline form_search show-categories" data-search-controller-url="/pos_rozer/layout4/modules/possearchproducts/SearchProducts.php">
                    
                <label for="pos_query_top"></label>
                <input type="hidden" name="controller" value="search"/>
                <div class="pos_search form-group">
                <select class="bootstrap-select" name="poscats">
                <option value="0">All categories</option>
                <option value="68">
                Electronics
                </option>
                <option value="69">
                - - Accessories &amp; Parts
                </option>
                <option value="75">
                - - - - Cables &amp; Adapters
                </option>
                <option value="76">
                - - - - Batteries
                </option>
                <option value="77">
                - - - - Chargers
                </option>
                <option value="78">
                - - - - Bags &amp; Cases
                </option>
                <option value="79">
                - - - - Electronic Cigarettes
                </option>
                <option value="70">
                - - Audio &amp; Video
                </option>
                <option value="80">
                - - - - Televisions
                </option>
                <option value="81">
                - - - - TV Receivers
                </option>
                <option value="82">
                - - - - Projectors
                </option>
                <option value="83">
                - - - - Audio Amplifier Boards
                </option>
                <option value="84">
                - - - - TV Sticks
                </option>
                <option value="71">
                - - Camera &amp; Photo
                </option>
                <option value="85">
                - - - - Digital Cameras
                </option>
                <option value="86">
                - - - - Camcorders
                </option>
                <option value="87">
                - - - - Camera Drones
                </option>
                <option value="88">
                - - - - Action Cameras
                </option>
                <option value="89">
                - - - - Photo Studio Supplies
                </option>
                <option value="72">
                - - Portable Audio &amp; Video
                </option>
                <option value="90">
                - - - - Headphones
                </option>
                <option value="91">
                - - - - Speakers
                </option>
                <option value="92">
                - - - - MP3 Players
                </option>
                <option value="93">
                - - - - VR/AR Devices
                </option>
                <option value="94">
                - - - - Microphones
                </option>
                <option value="73">
                - - Smart Electronics
                </option>
                <option value="95">
                - - - - Wearable Devices
                </option>
                <option value="96">
                - - - - Smart Home Appliances
                </option>
                <option value="97">
                - - - - Smart Remote Controls
                </option>
                <option value="98">
                - - - - Smart Watches
                </option>
                <option value="99">
                - - - - Smart Wristbands
                </option>
                <option value="74">
                - - Video Games
                </option>
                <option value="100">
                - - - - Handheld Game Players
                </option>
                <option value="101">
                - - - - Game Controllers
                </option>
                <option value="102">
                - - - - Joysticks
                </option>
                <option value="103">
                - - - - Stickers
                </option>
                </select>
                </div>
                <input type="text" name="s" value="" placeholder="Enter your search key ... " id="pos_query_top" class="search_query form-control ac_input"/>
                <button type="submit" class="btn btn-default search_submit">
                <i class="icon-magnifier"></i>
                </button>
            </form>
            </div>
        </div>

        <div id="_desktop_user_info">
        <div class="user-info-block selector-block">
        <div class="currency-selector localiz_block dropdown js-dropdown">
        <button data-target="#" data-toggle="dropdown" class=" btn-unstyle hidden-md-down">
            <i class="icon-user"></i>
        </button>
        <button data-target="#" data-toggle="dropdown" class=" btn-unstyle hidden-lg-up">
            <i class="icon-user"></i>
        </button>

        <ul class="dropdown-menu">
            <li>
                <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/my-account" rel="nofollow" class="dropdown-item">My account</a>
            </li>
            
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/cart?action=show" class="dropdown-item">Checkout</a>
            </li>

            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/my-account" title="Log in to your customer account" rel="nofollow" class="dropdown-item">
            <span>Sign in</span>
            </a>
            </li>
        </ul>
        </div>
        
        
        
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
            <div class="header-bottom  hidden-md-down">
            <div class="container">
            <div class="row">
            <div class="col col-sm-12 col-lg-3 col-xl-2">
            <div id="_desktop_vegamenu">
            <div class="pos-menu-vertical" data-more-less="9">
            <h3 class="title_vertical hidden-md-down">All Cattegories </h3>
            <ul class="menu-content">
            <li class="menu-item menu-item3  hasChild ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/68-electronics">
            <span>Electronics</span>
            <i class="hidden-md-down icon_sub ion-ios-arrow-right"></i> </a>
            <span class="icon-drop-mobile"><i class="material-icons add">add </i><i class="material-icons remove">remove </i></span> <div class="pos-sub-menu menu-dropdown col-xs-12 col-lg-  menu_noanimation">
            <div class="popup_vertical">
            <div class="pos-menu-row row ">
            <div class="pos-menu-col col-xs-12 col-lg-4  ">
            <ul class="ul-column ">
            <li class="submenu-item ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/69-accessories-parts">Accessories &amp; Parts</a>
            <span class="icon-drop-mobile"><i class="material-icons add">add </i><i class="material-icons remove">remove </i></span> <ul class="category-sub-menu">
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/75-cables-adapters">Cables &amp; Adapters</a>
            </li>
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/76-batteries">Batteries</a>
            </li>
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/77-chargers">Chargers</a>
            </li>
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/78-bags-cases">Bags &amp; Cases</a>
            </li>
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/79-electronic-cigarettes">Electronic Cigarettes</a>
            </li>
            </ul>
            </li>
            <li class="submenu-item ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/70-audio-video">Audio &amp; Video</a>
            <span class="icon-drop-mobile"><i class="material-icons add">add </i><i class="material-icons remove">remove </i></span> <ul class="category-sub-menu">
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/80-televisions">Televisions</a>
            </li>
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/81-tv-receivers">TV Receivers</a>
            </li>
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/82-projectors">Projectors</a>
            </li>
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/83-audio-amplifier-boards">Audio Amplifier Boards</a>
            </li>
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/84-tv-sticks">TV Sticks</a>
            </li>
            </ul>
            </li>
            </ul>
            </div>
            <div class="pos-menu-col col-xs-12 col-lg-4  ">
            <ul class="ul-column ">
            <li class="submenu-item ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/71-camera-photo">Camera &amp; Photo</a>
            <span class="icon-drop-mobile"><i class="material-icons add">add </i><i class="material-icons remove">remove </i></span> <ul class="category-sub-menu">
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/85-digital-cameras">Digital Cameras</a>
            </li>
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/86-camcorders">Camcorders</a>
            </li>
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/87-camera-drones">Camera Drones</a>
            </li>
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/88-action-cameras">Action Cameras</a>
            </li>
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/89-photo-studio-supplies">Photo Studio Supplies</a>
            </li>
            </ul>
            </li>
            <li class="submenu-item ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/72-portable-audio-video">Portable Audio &amp; Video</a>
            <span class="icon-drop-mobile"><i class="material-icons add">add </i><i class="material-icons remove">remove </i></span> <ul class="category-sub-menu">
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/90-headphones">Headphones</a>
            </li>
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/91-speakers">Speakers</a>
            </li>
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/92-mp3-players">MP3 Players</a>
            </li>
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/93-vrar-devices">VR/AR Devices</a>
            </li>
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/94-microphones">Microphones</a>
            </li>
            </ul>
            </li>
            </ul>
            </div>
            <div class="pos-menu-col col-xs-12 col-lg-4  ">
            <ul class="ul-column ">
            <li class="submenu-item ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/73-smart-electronics">Smart Electronics</a>
            <span class="icon-drop-mobile"><i class="material-icons add">add </i><i class="material-icons remove">remove </i></span> <ul class="category-sub-menu">
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/95-wearable-devices">Wearable Devices</a>
            </li>
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/96-smart-home-appliances">Smart Home Appliances</a>
            </li>
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/97-smart-remote-controls">Smart Remote Controls</a>
            </li>
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/98-smart-watches">Smart Watches</a>
            </li>
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/99-smart-wristbands">Smart Wristbands</a>
            </li>
            </ul>
            </li>
            <li class="submenu-item ">
            <a href="#"><img src="http://demo2.posthemes.com/pos_rozer/layout4/img/cms/banner-vega.jpg" alt="" /></a>
            </li>
            </ul>
            </div>
            </div>
            </div>
            </div>
            </li>
            <li class="menu-item menu-item4  hasChild ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/74-video-games">
            <span>Video Games</span>
            <i class="hidden-md-down icon_sub ion-ios-arrow-right"></i> </a>
            <span class="icon-drop-mobile"><i class="material-icons add">add</i><i class="material-icons remove">remove </i></span><ul class="menu-dropdown cat-drop-menu menu_noanimation"><li><a href="http://demo2.posthemes.com/pos_rozer/layout4/en/100-handheld-game-players" class=""><span>Handheld Game Players</span></a></li><li><a href="http://demo2.posthemes.com/pos_rozer/layout4/en/101-game-controllers" class=""><span>Game Controllers</span></a></li><li><a href="http://demo2.posthemes.com/pos_rozer/layout4/en/102-joysticks" class=""><span>Joysticks</span></a></li><li><a href="http://demo2.posthemes.com/pos_rozer/layout4/en/103-stickers" class=""><span>Stickers</span></a></li></ul>
            </li>
            <li class="menu-item menu-item5   ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/80-televisions">
            <span>Televisions</span>
            </a>
            </li>
            <li class="menu-item menu-item6   ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/85-digital-cameras">
            <span>Digital Cameras</span>
            </a>
            </li>
            <li class="menu-item menu-item7   ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/90-headphones">
            <span> Headphones</span>
            </a>
            </li>
            <li class="menu-item menu-item8   ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/95-wearable-devices">
            <span> Wearable Devices</span>
            </a>
            </li>
            <li class="menu-item menu-item9   ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/98-smart-watches">
            <span> Smart Watches</span>
            </a>
            </li>
            <li class="menu-item menu-item10   ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/101-game-controllers">
            <span> Game Controllers</span>
            </a>
            </li>
            <li class="menu-item menu-item11   ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/96-smart-home-appliances">
            <span> Smart Home Appliances</span>
            </a>
            </li>
            <li class="menu-item menu-item12   ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/82-projectors">
            <span>Projectors</span>
            </a>
            </li>
            </ul>
            </div>
            </div>
            </div>
            <div class=" col col-sm-12 col-lg-9 col-xl-10">
            <div id="_desktop_megamenu" class="use-sticky ">
            <div class="pos-menu-horizontal">
            <ul class="menu-content">
            <li class="home menu-item menu-item1   ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/">
            <span>Home</span>
            </a>
            </li>
            <li class=" menu-item menu-item3   ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/new-products">
            <span>New products</span>
            <span class="menu-subtitle">New</span> </a>
            </li>
            <li class=" menu-item menu-item4   ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/best-sales">
            <span>Best sales</span>
            </a>
            </li>
            <li class=" menu-item menu-item5   ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/prices-drop">
            <span>Prices drop</span>
            <span class="menu-subtitle">Sale</span> </a>
            </li>
            <li class=" menu-item menu-item6   ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/contact-us">
            <span>Contact us</span>
            </a>
            </li>
            </ul>
            </div>
            </div><div id="_desktop_language_selector">
            <div class="language-selector-wrapper selector-block hidden-md-down">
            <span id="language-selector-label" class=" selector-label hidden-lg-down">Language :</span>
            <div class="language-selector localiz_block  dropdown js-dropdown">
            <button data-toggle="dropdown" class=" btn-unstyle" aria-haspopup="true" aria-expanded="false" aria-label="Language dropdown">
            <img src="http://demo2.posthemes.com/pos_rozer/layout4/img/l/1.jpg" alt="" width="16" height="11" />
            <span class="expand-more">English</span>
            <i class="material-icons">expand_more</i>
            </button>
            <ul class="dropdown-menu" aria-labelledby="language-selector-label">
            <li class="current">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/login?back=my-account" class="dropdown-item"><img src="http://demo2.posthemes.com/pos_rozer/layout4/img/l/1.jpg" alt="" width="16" height="11" />English</a>
            </li>
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/fr/connexion?back=my-account" class="dropdown-item"><img src="http://demo2.posthemes.com/pos_rozer/layout4/img/l/2.jpg" alt="" width="16" height="11" />Français</a>
            </li>
            </ul>
            </div>
            </div>
            <div class="language-selector-wrapper hidden-lg-up">
            <div class="selector-mobile dropdown js-dropdown">
            <button data-toggle="dropdown" class=" btn-unstyle" aria-haspopup="true" aria-expanded="false" aria-label="Language dropdown">
            <img src="http://demo2.posthemes.com/pos_rozer/layout4/img/l/1.jpg" alt="" width="16" height="11" />
            <span class="expand-more">English</span>
            <i class="material-icons">expand_more</i>
            </button>
            <ul class="dropdown-menu" aria-labelledby="language-selector-label">
            <li class="current">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/login?back=my-account" class="dropdown-item"><img src="http://demo2.posthemes.com/pos_rozer/layout4/img/l/1.jpg" alt="" width="16" height="11" />English</a>
            </li>
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/fr/connexion?back=my-account" class="dropdown-item"><img src="http://demo2.posthemes.com/pos_rozer/layout4/img/l/2.jpg" alt="" width="16" height="11" />Français</a>
            </li>
            </ul>
            </div>
            </div>
            </div>
            <div id="_desktop_currency_selector">
            <div class="currency-selector-wrapper selector-block hidden-md-down">
            <span id="currency-selector-label" class=" selector-label hidden-lg-down">Currency :</span>
            <div class="currency-selector localiz_block dropdown js-dropdown">
            <button data-target="#" data-toggle="dropdown" class=" btn-unstyle" aria-haspopup="true" aria-expanded="false" aria-label="Currency dropdown">
            <span class="expand-more _gray-darker">USD $</span>
            <i class="material-icons">expand_more</i>
            </button>
            <ul class="dropdown-menu" aria-labelledby="currency-selector-label">
            <li>
            <a title="Euro" rel="nofollow" href="http://demo2.posthemes.com/pos_rozer/layout4/en/login?back=my-account&amp;SubmitCurrency=1&amp;id_currency=2" class="dropdown-item">EUR €</a>
            </li>
            <li class="current">
            <a title="US Dollar" rel="nofollow" href="http://demo2.posthemes.com/pos_rozer/layout4/en/login?back=my-account&amp;SubmitCurrency=1&amp;id_currency=1" class="dropdown-item">USD $</a>
            </li>
            </ul>
            </div>
            </div>
            <div class="currency-selector-wrapper hidden-lg-up">
            <div class="selector-mobile dropdown js-dropdown">
            <button data-target="#" data-toggle="dropdown" class=" btn-unstyle" aria-haspopup="true" aria-expanded="false" aria-label="Currency dropdown">
            <span class="expand-more _gray-darker">USD $</span>
            <i class="material-icons">expand_more</i>
            </button>
            <ul class="dropdown-menu" aria-labelledby="currency-selector-label">
            <li>
            <a title="Euro" rel="nofollow" href="http://demo2.posthemes.com/pos_rozer/layout4/en/login?back=my-account&amp;SubmitCurrency=1&amp;id_currency=2" class="dropdown-item">EUR €</a>
            </li>
            <li class="current">
            <a title="US Dollar" rel="nofollow" href="http://demo2.posthemes.com/pos_rozer/layout4/en/login?back=my-account&amp;SubmitCurrency=1&amp;id_currency=1" class="dropdown-item">USD $</a>
            </li>
            </ul>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    
    </header>
    )
}


