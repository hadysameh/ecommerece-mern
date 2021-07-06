
export default function Header(){
    return (
    <header id="header">
        
        <div className="header-banner">
        </div>
        <nav className="header-nav">
        <div className="container">
        <div className="hidden-md-down">
        </div>
        </div>
        <div className="container">
        <div className="hidden-lg-up  mobile">
        <div id="_mobile_static"></div>
        <div className="row row-mobile">
        <div className="col-mobile col-md-4 col-xs-4">
        <div className="float-xs-left" id="menu-icon">
        <i className="ion-android-menu"></i>
        </div>
        <div id="mobile_top_menu_wrapper" className="row hidden-lg-up" style={{display:"none"}}>
        <div className="top-header-mobile">
        <div id="_mobile_compare"></div>
        <div id="_mobile_wishtlist"></div>
        </div>
        <div id="_mobile_currency_selector"></div>
        <div id="_mobile_language_selector"></div>
        <div className="menu-close">
        menu <i className="material-icons float-xs-right">arrow_back</i>
        </div>
        <div className="menu-tabs">
        <div className="js-top-menu-bottom">
        <div id="_mobile_megamenu"></div>
        <div id="_mobile_vegamenu"></div>
        </div>
        </div>
        </div>
        </div>
        <div className="col-mobile col-md-4 col-xs-4 mobile-center">
        <div className="top-logo" id="_mobile_logo"></div>
        </div>
        <div className="col-mobile col-md-4 col-xs-4 mobile-right">
        <div id="_mobile_cart_block"></div>
        <div id="_mobile_user_info"></div>
        </div>
        </div>
        <div id="_mobile_search_category"></div>
        </div>
        </div>
        </nav>
        <div className="header-top top_bg hidden-md-down">
        <div className="container">
        <div className="row">
        <div className="col col col-md-2" id="_desktop_logo">
        <a href="http://demo2.posthemes.com/pos_rozer/layout4/">
        <img className="logo img-responsive" src="http://demo2.posthemes.com/pos_rozer/layout4/img/rozer4-logo-15858838744.jpg" alt="Rozer  Responsive Prestashop Theme"/>
        </a>
        </div>
        <div className=" col col-md-10 col-sm-12 position-static">
        <div id="_desktop_cart_block">
        <div className="blockcart cart-preview" data-refresh-url="//demo2.posthemes.com/pos_rozer/layout4/en/module/ps_shoppingcart/ajax" data-cartitems="0">
        <div className="button_cart">
        <a rel="nofollow" href="http://demo2.posthemes.com/pos_rozer/layout4/en/cart?action=show" className="desktop hidden-md-down">
        <span className="item_count">0</span>
        <span className="item_total">$0.00</span>
        </a>
        <a rel="nofollow" href="http://demo2.posthemes.com/pos_rozer/layout4/en/cart?action=show" className="mobile hidden-lg-up">
        <span className="item_count">0</span>
        </a>
        </div>
        <div className="popup_cart">
        <div className="content-cart">
        <div className="mini_cart_arrow"></div>
        <ul>
        </ul>
        <div className="price_content">
        <div className="cart-subtotals">
        <div className="products price_inline">
        <span className="label">Subtotal</span>
        <span className="value">$0.00</span>
        </div>
        <div className=" price_inline">
        <span className="label"></span>
        <span className="value"></span>
        </div>
        <div className="shipping price_inline">
        <span className="label">Shipping</span>
        <span className="value">Free</span>
        </div>
        <div className="tax price_inline">
        <span className="label">Taxes</span>
        <span className="value">$0.00</span>
        </div>
        </div>
        <div className="cart-total price_inline">
        <span className="label">Total</span>
        <span className="value">$0.00</span>
        </div>
        </div>
        <div className="checkout">
        <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/cart?action=show" className="btn btn-primary">Checkout</a>
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
        <div className="wishtlist_top">
        <a className="" href="http://demo2.posthemes.com/pos_rozer/layout4/en/module/blockwishlist/mywishlist">
        <i className="icon-heart"></i>
        <span className="txt_wishlist">Wishlist</span>
        (<span className="cart-wishlist-number">0</span>)
        </a>
        </div>
        </div><div id="_desktop_compare">
        <div className="compare_top">
        <a href="http://demo2.posthemes.com/pos_rozer/layout4/module/poscompare/comparePage">
        <i className="icon-shuffle"></i> <span>Compare (<span id="poscompare-nb"></span>)</span>
        </a>
        </div>
        </div>
        <script type="text/javascript">
            var baseDir ='/'; 
        </script>

        <div id="_desktop_search_category" className="col-md-8 col-xs-12">
            <div id="pos_search_top">
            <form method="get" action="http://demo2.posthemes.com/pos_rozer/layout4/en/search" id="searchbox" className="form-inline form_search show-categories" data-search-controller-url="/pos_rozer/layout4/modules/possearchproducts/SearchProducts.php">
                    
                <label for="pos_query_top"></label>
                <input type="hidden" name="controller" value="search"/>
                <div className="pos_search form-group">
                <select className="bootstrap-select" name="poscats">
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
                <input type="text" name="s" value="" placeholder="Enter your search key ... " id="pos_query_top" className="search_query form-control ac_input"/>
                <button type="submit" className="btn btn-default search_submit">
                <i className="icon-magnifier"></i>
                </button>
            </form>
            </div>
        </div>

        <div id="_desktop_user_info">
        <div className="user-info-block selector-block">
        <div className="currency-selector localiz_block dropdown js-dropdown">
        <button data-target="#" data-toggle="dropdown" className=" btn-unstyle hidden-md-down">
            <i className="icon-user"></i>
        </button>
        <button data-target="#" data-toggle="dropdown" className=" btn-unstyle hidden-lg-up">
            <i className="icon-user"></i>
        </button>

        <ul className="dropdown-menu">
            <li>
                <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/my-account" rel="nofollow" className="dropdown-item">My account</a>
            </li>
            
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/cart?action=show" className="dropdown-item">Checkout</a>
            </li>

            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/my-account" title="Log in to your customer account" rel="nofollow" className="dropdown-item">
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
            <div className="header-bottom  hidden-md-down">
            <div className="container">
            <div className="row">
            <div className="col col-sm-12 col-lg-3 col-xl-2">
            <div id="_desktop_vegamenu">
            <div className="pos-menu-vertical" data-more-less="9">
            <h3 className="title_vertical hidden-md-down">All Cattegories </h3>
            <ul className="menu-content">
            <li className="menu-item menu-item3  hasChild ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/68-electronics">
            <span>Electronics</span>
            <i className="hidden-md-down icon_sub ion-ios-arrow-right"></i> </a>
            <span className="icon-drop-mobile"><i className="material-icons add">add </i><i className="material-icons remove">remove </i></span> <div className="pos-sub-menu menu-dropdown col-xs-12 col-lg-  menu_noanimation">
            <div className="popup_vertical">
            <div className="pos-menu-row row ">
            <div className="pos-menu-col col-xs-12 col-lg-4  ">
            <ul className="ul-column ">
            <li className="submenu-item ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/69-accessories-parts">Accessories &amp; Parts</a>
            <span className="icon-drop-mobile"><i className="material-icons add">add </i><i className="material-icons remove">remove </i></span> <ul className="category-sub-menu">
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
            <li className="submenu-item ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/70-audio-video">Audio &amp; Video</a>
            <span className="icon-drop-mobile"><i className="material-icons add">add </i><i className="material-icons remove">remove </i></span> <ul className="category-sub-menu">
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
            <div className="pos-menu-col col-xs-12 col-lg-4  ">
            <ul className="ul-column ">
            <li className="submenu-item ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/71-camera-photo">Camera &amp; Photo</a>
            <span className="icon-drop-mobile"><i className="material-icons add">add </i><i className="material-icons remove">remove </i></span> <ul className="category-sub-menu">
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
            <li className="submenu-item ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/72-portable-audio-video">Portable Audio &amp; Video</a>
            <span className="icon-drop-mobile"><i className="material-icons add">add </i><i className="material-icons remove">remove </i></span> <ul className="category-sub-menu">
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
            <div className="pos-menu-col col-xs-12 col-lg-4  ">
            <ul className="ul-column ">
            <li className="submenu-item ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/73-smart-electronics">Smart Electronics</a>
            <span className="icon-drop-mobile"><i className="material-icons add">add </i><i className="material-icons remove">remove </i></span> <ul className="category-sub-menu">
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
            <li className="submenu-item ">
            <a href="#"><img src="http://demo2.posthemes.com/pos_rozer/layout4/img/cms/banner-vega.jpg" alt="" /></a>
            </li>
            </ul>
            </div>
            </div>
            </div>
            </div>
            </li>
            <li className="menu-item menu-item4  hasChild ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/74-video-games">
            <span>Video Games</span>
            <i className="hidden-md-down icon_sub ion-ios-arrow-right"></i> </a>
            <span className="icon-drop-mobile"><i className="material-icons add">add</i><i className="material-icons remove">remove </i></span><ul className="menu-dropdown cat-drop-menu menu_noanimation"><li><a href="http://demo2.posthemes.com/pos_rozer/layout4/en/100-handheld-game-players" className=""><span>Handheld Game Players</span></a></li><li><a href="http://demo2.posthemes.com/pos_rozer/layout4/en/101-game-controllers" className=""><span>Game Controllers</span></a></li><li><a href="http://demo2.posthemes.com/pos_rozer/layout4/en/102-joysticks" className=""><span>Joysticks</span></a></li><li><a href="http://demo2.posthemes.com/pos_rozer/layout4/en/103-stickers" className=""><span>Stickers</span></a></li></ul>
            </li>
            <li className="menu-item menu-item5   ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/80-televisions">
            <span>Televisions</span>
            </a>
            </li>
            <li className="menu-item menu-item6   ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/85-digital-cameras">
            <span>Digital Cameras</span>
            </a>
            </li>
            <li className="menu-item menu-item7   ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/90-headphones">
            <span> Headphones</span>
            </a>
            </li>
            <li className="menu-item menu-item8   ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/95-wearable-devices">
            <span> Wearable Devices</span>
            </a>
            </li>
            <li className="menu-item menu-item9   ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/98-smart-watches">
            <span> Smart Watches</span>
            </a>
            </li>
            <li className="menu-item menu-item10   ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/101-game-controllers">
            <span> Game Controllers</span>
            </a>
            </li>
            <li className="menu-item menu-item11   ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/96-smart-home-appliances">
            <span> Smart Home Appliances</span>
            </a>
            </li>
            <li className="menu-item menu-item12   ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/82-projectors">
            <span>Projectors</span>
            </a>
            </li>
            </ul>
            </div>
            </div>
            </div>
            <div className=" col col-sm-12 col-lg-9 col-xl-10">
            <div id="_desktop_megamenu" className="use-sticky ">
            <div className="pos-menu-horizontal">
            <ul className="menu-content">
            <li className="home menu-item menu-item1   ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/">
            <span>Home</span>
            </a>
            </li>
            <li className=" menu-item menu-item3   ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/new-products">
            <span>New products</span>
            <span className="menu-subtitle">New</span> </a>
            </li>
            <li className=" menu-item menu-item4   ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/best-sales">
            <span>Best sales</span>
            </a>
            </li>
            <li className=" menu-item menu-item5   ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/prices-drop">
            <span>Prices drop</span>
            <span className="menu-subtitle">Sale</span> </a>
            </li>
            <li className=" menu-item menu-item6   ">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/contact-us">
            <span>Contact us</span>
            </a>
            </li>
            </ul>
            </div>
            </div><div id="_desktop_language_selector">
            <div className="language-selector-wrapper selector-block hidden-md-down">
            <span id="language-selector-label" className=" selector-label hidden-lg-down">Language :</span>
            <div className="language-selector localiz_block  dropdown js-dropdown">
            <button data-toggle="dropdown" className=" btn-unstyle" aria-haspopup="true" aria-expanded="false" aria-label="Language dropdown">
            <img src="http://demo2.posthemes.com/pos_rozer/layout4/img/l/1.jpg" alt="" width="16" height="11" />
            <span className="expand-more">English</span>
            <i className="material-icons">expand_more</i>
            </button>
            <ul className="dropdown-menu" aria-labelledby="language-selector-label">
            <li className="current">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/login?back=my-account" className="dropdown-item"><img src="http://demo2.posthemes.com/pos_rozer/layout4/img/l/1.jpg" alt="" width="16" height="11" />English</a>
            </li>
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/fr/connexion?back=my-account" className="dropdown-item"><img src="http://demo2.posthemes.com/pos_rozer/layout4/img/l/2.jpg" alt="" width="16" height="11" />Français</a>
            </li>
            </ul>
            </div>
            </div>
            <div className="language-selector-wrapper hidden-lg-up">
            <div className="selector-mobile dropdown js-dropdown">
            <button data-toggle="dropdown" className=" btn-unstyle" aria-haspopup="true" aria-expanded="false" aria-label="Language dropdown">
            <img src="http://demo2.posthemes.com/pos_rozer/layout4/img/l/1.jpg" alt="" width="16" height="11" />
            <span className="expand-more">English</span>
            <i className="material-icons">expand_more</i>
            </button>
            <ul className="dropdown-menu" aria-labelledby="language-selector-label">
            <li className="current">
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/en/login?back=my-account" className="dropdown-item"><img src="http://demo2.posthemes.com/pos_rozer/layout4/img/l/1.jpg" alt="" width="16" height="11" />English</a>
            </li>
            <li>
            <a href="http://demo2.posthemes.com/pos_rozer/layout4/fr/connexion?back=my-account" className="dropdown-item"><img src="http://demo2.posthemes.com/pos_rozer/layout4/img/l/2.jpg" alt="" width="16" height="11" />Français</a>
            </li>
            </ul>
            </div>
            </div>
            </div>
            <div id="_desktop_currency_selector">
            <div className="currency-selector-wrapper selector-block hidden-md-down">
            <span id="currency-selector-label" className=" selector-label hidden-lg-down">Currency :</span>
            <div className="currency-selector localiz_block dropdown js-dropdown">
            <button data-target="#" data-toggle="dropdown" className=" btn-unstyle" aria-haspopup="true" aria-expanded="false" aria-label="Currency dropdown">
            <span className="expand-more _gray-darker">USD $</span>
            <i className="material-icons">expand_more</i>
            </button>
            <ul className="dropdown-menu" aria-labelledby="currency-selector-label">
            <li>
            <a title="Euro" rel="nofollow" href="http://demo2.posthemes.com/pos_rozer/layout4/en/login?back=my-account&amp;SubmitCurrency=1&amp;id_currency=2" className="dropdown-item">EUR €</a>
            </li>
            <li className="current">
            <a title="US Dollar" rel="nofollow" href="http://demo2.posthemes.com/pos_rozer/layout4/en/login?back=my-account&amp;SubmitCurrency=1&amp;id_currency=1" className="dropdown-item">USD $</a>
            </li>
            </ul>
            </div>
            </div>
            <div className="currency-selector-wrapper hidden-lg-up">
            <div className="selector-mobile dropdown js-dropdown">
            <button data-target="#" data-toggle="dropdown" className=" btn-unstyle" aria-haspopup="true" aria-expanded="false" aria-label="Currency dropdown">
            <span className="expand-more _gray-darker">USD $</span>
            <i className="material-icons">expand_more</i>
            </button>
            <ul className="dropdown-menu" aria-labelledby="currency-selector-label">
            <li>
            <a title="Euro" rel="nofollow" href="http://demo2.posthemes.com/pos_rozer/layout4/en/login?back=my-account&amp;SubmitCurrency=1&amp;id_currency=2" className="dropdown-item">EUR €</a>
            </li>
            <li className="current">
            <a title="US Dollar" rel="nofollow" href="http://demo2.posthemes.com/pos_rozer/layout4/en/login?back=my-account&amp;SubmitCurrency=1&amp;id_currency=1" className="dropdown-item">USD $</a>
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


