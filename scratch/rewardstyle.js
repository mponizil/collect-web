var host = "www";

function loadXDM() {
    $j = jQuery.noConflict();
    try {
        var d = document.createElement("script");
        d.type = "text/javascript";
        d.id = "easyxdm";
        d.src = "dev" == host || "local" == host ? "http://" + host + ".rewardstyle.com/js/easyXDM-2.4.15.118/easyXDM.debug.js?v=1" : "http://" + host + ".rewardstyle.com/js/easyXDM-2.4.15.118/easyXDM.min.js?v=1";
        d.onreadystatechange = function () {
            ("complete" === this.readyState || "loaded" === this.readyState) && loadProducts()
        };
        d.onload = loadProducts;
        h.appendChild(d)
    } catch (e) {
        ("dev" == host || "local" == host) && alert(e)
    }
}

function show_link_ninja() {
    $j("body").append('<style type="text/css">#rewardStyleBase {display: block; border: 0px; left: 0; top: 0; position: fixed; z-index: 999995; width: 100%; height: 100%;}#rewardStyleDim {display: block; border: 0px; background: url(\'https://s3.amazonaws.com/rewardstyle/pin/dimpattern.png\') repeat; -moz-opacity: 0.5; opacity:.50; margin: 0; padding: 0; top: 0; -ms-filter:\'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\'; filter: alpha(opacity=50); vertical-align: baseline; position: fixed; width: 100%; height: 100%; z-index: 999996;}#rewardStyle {display: none; width: 100%; height: 200%; z-index: 999999; position: absolute;}#rewardStyle_image_picker {display: none; width: 100%; height: 200%; z-index: 999999; position: absolute;}#rewardStylePreloaderAnchor {width: 100%; height: 100%; top: 0; left: 0;margin: 0; padding: 0; z-index: 999997; position: fixed;}#rewardStylePreloader {margin: 50px auto; background-color: #fff; box-shadow: 0 0 10px rgba(0,0,0,0.5); -webkit-box-shadow: 0 0 10px rgba(0,0,0,0.5); width: 130px; height: 130px; -moz-border-radius: 3px; border-radius: 3px; z-index: 999998;border: solid 2px #fff;}#rewardStylePreloader > div {display: block; border: 0px; margin: 20px 0 0 20px; width: 90px; height: 90px; background: url(https://s3.amazonaws.com/rewardstyle/loading.gif) no-repeat center;}div.rs__font {color: #444; font-family: Arial; font-size: 14px; text-align: left;}.rs__font {color: #444; font-family: Arial; font-size: 14px; text-align: left;}.rs__font tr {padding:0 25px;}h2.rs__font  {font: 1.6em "Gotham A", "Gotham B", sans-serif;}h3.rs__font  {font-size: 16px;font-weight:bold;}.rs__font td {color: #444; font-family: Arial; font-size: 12px; text-align: center;padding:0 4px;letter-spacing:0px;}.map { cursor:pointer;}.rs__image {margin:10px;max-height:150px;max-width:75px;display:inline;}.rs__image_selected {margin:10px;max-height:150px;max-width:150px;display:inline;}.rs__image:hover {cursor:pointer;border:2px solid black; margin:8px;}#rewardStyle_not_found {-moz-border-radius: 3px; border-radius: 3px; margin: 50px auto; width: 600px;}#rewardStyle_not_found > div {position: relative; background-color: #fff; width: 100%; height: auto; -moz-border-radius: 3px; border-radius: 3px; float: left; box-shadow: 0 0 10px rgba(0,0,0,0.5); -webkit-box-shadow: 0 0 10px rgba(0,0,0,0.5); padding-top: 15px;}.close {position: absolute; top:10px; right: 10px; left: auto !important; bottom: auto !important;}#patent-pending {position:relative; top: 0px; text-align: right; padding-right: 10px; color: #777; padding-top: 8px; /*padding-bottom: 4px;*/ float:right;font-size:8px;/*right:0px;bottom:0px;*/ height: 26px; -moz-border-radius: 0 0 3px 3px; border-radius: 0 0 3px 3px; /*z-index: 1;*/ background: -webkit-linear-gradient(top, rgb(242, 242, 242) 0%, rgb(255, 255, 255) 30%); }#patent-pending > span {font-size: 12px;}#rewardStyle > iframe { display: block!important; width: 100%; height: 100%; background-color: transparent !important; overflow: hidden; }#rewardStyleBase .footer { min-width: 0; }</style><div id="rewardStyleBase">    <div id="rewardStyleDim"></div>   <div id="rewardStyle"></div>   <div id="rewardStyle_image_picker"></div></div>')
}

function show_preloader() {
    $j("#rewardStyleBase").prepend('   <div id="rewardStylePreloaderAnchor" classmy="loading">       <div id="rewardStylePreloader">           <div></div>       </div>   </div>')
}

function remove_preloader() {
    jQuery.isFunction($j) ? $j("#rewardStylePreloaderAnchor").remove() : $("#rewardStylePreloaderAnchor").remove()
}

function check_user_logged_in() {
    $j.ajax({
        dataType: "jsonp",
        data: postData,
        jsonp: "jsonp_callback",
        url: "http://" + host + ".rewardstyle.com/api/userloggedin",
        success: function () {}
    })
}

function loadProducts() {
    var d = null,
        e = null,
        b = null,
        a = null,
        z = !1,
        c = 0,
        f = location.hostname,
        m = [],
        x, u, n = "",
        j, s = "",
        l, k, g, o, p = "",
        t = "en";
    if (-1 != f.indexOf("shopbop")) try {
        o = $j("#selectedCurrency").text().trim(), "EUR" == o ? (g = k = "\u20ac", c = 881, a = 0 < $j("#productPrices .salePrice").length ? $j("#product-information #productPrices .salePrice").first().text().replace(/[^0-9\.\,]/g, "").trim() : $j("#product-information #productPrices .priceBlock").text().replace(",", "").split("|")[0].split("\u20ac")[1].trim(), b = $j("#product-information h1").text().trim(),
            e = $j("#product-information .product-title").text().trim()) : "USD" == o || "\u7f8e\u5143" == o ? (g = k = "$", c = 881, a = 0 < $j("#productPrices .salePrice").length ? "\u7f8e\u5143" == o ? $j("#productPrices .salePrice").text().split(o)[0].replace(",", "").replace("\u6e05\u4ed3\u7279\u60e0*", "").trim() : $j("#productPrices .salePrice").text().split(k)[1].replace(",", "").replace("FINAL SALE - Cannot be returned", "").trim() : "\u7f8e\u5143" == o ? $j("#product-information #productPrices .priceBlock").text().replace(",", "").split(o)[0].trim() :
            $j("#product-information #productPrices .priceBlock").text().replace(",", "").split(k)[1].trim(), b = $j("#product-information h1").text().trim(), e = $j("#product-information .product-title").text().trim()) : "AUD" == o ? (g = "$", l = 8, c = 881, a = 0 < $j("#productPrices .salePrice").length ? $j("#product-information #productPrices .salePrice").first().text().replace(/[^0-9\.\,]/g, "").trim() : $j("#product-information #productPrices .priceBlock").text().replace(",", "").split("|")[0].split("AU$")[1].trim(), b = $j("#product-information h1").text().trim(),
            e = $j("#product-information .product-title").text().trim()) : "CAD" == o ? (k = "CA$", g = "CAD", c = 881, a = 0 < $j("#productPrices .salePrice").length ? $j("#productPrices .salePrice").text().split("$")[1].replace(",", "").replace("FINAL SALE - Cannot be returned", "").trim() : $j("#product-information #productPrices .priceBlock").text().replace(",", "").split("|")[0].replace("CA$", "").trim(), b = $j("#product-information h1").text().trim(), e = $j("#product-information .product-title").text().trim()) : "HKD" == o ? (k = "HK$", g = "HKD",
            c = 881, a = 0 < $j("#productPrices .salePrice").length ? -1 != $j("#productPrices .salePrice").text().indexOf("\u6e2f\u5e01") ? $j("#productPrices .salePrice").text().replace(",", "").split("\u6e2f\u5e01")[0].trim() : $j("#productPrices .salePrice").text().split(k)[1].replace(",", "").replace("FINAL SALE - Cannot be returned", "").trim() : -1 != $j("#product-information #productPrices .priceBlock").text().indexOf("\u6e2f\u5e01") ? $j("#product-information #productPrices .priceBlock").text().replace(",", "").split("\u6e2f\u5e01")[0].trim() :
            $j("#product-information #productPrices .priceBlock").text().replace(",", "").split(k)[1].trim(), b = $j("#product-information h1").text().trim(), e = $j("#product-information .product-title").text().trim()) : "GBP" == o ? (g = k = "\u00a3", c = 881, a = 0 < $j("#productPrices .salePrice").length ? $j("#productPrices .salePrice").text().split(k)[1].replace(",", "").replace("FINAL SALE - Cannot be returned", "").trim() : $j("#product-information #productPrices .priceBlock").text().replace(",", "").split(k)[1].trim(), b = $j("#product-information h1").text().trim(),
            e = $j("#product-information .product-title").text().trim()) : "NZD" == o && (g = k = "NZ$", c = 881, a = 0 < $j("#productPrices .salePrice").length ? $j("#productPrices .salePrice").text().split(k)[1].replace(",", "").replace("FINAL SALE - Cannot be returned", "").trim() : $j("#product-information #productPrices .priceBlock").text().replace(",", "").replace("NZ$", "").split("|")[0].trim(), b = $j("#product-information h1").text().trim(), e = $j("#product-information .product-title").text().trim()), t = $j("#selectedLanguage").text().trim(),
            "ru" == t && (a = a.replace(/[^0-9\.\,]/g, ""), a /= 100), d = e
    } catch (N) {
        c = 881, b = d = 0, e = "", a = 0
    } else if (-1 != f.indexOf("eastdane")) try {
        o = $j("#selectedCurrency").text().trim(), "EUR" == o ? g = k = "\u20ac" : "USD" == o || "\u7f8e\u5143" == o ? g = k = "$" : "AUD" == o ? (k = "AU$", g = "AUD") : "CAD" == o ? (k = "CA$", g = "CAD") : "HKD" == o ? (k = "HK$", g = "HKD") : "GBP" == o && (g = k = "\u00a3"), c = 881, a = $j("#productPrices ##productPrices .salePrice").length ? $j("#product-information #productPrices .salePrice").first().text().replace(/[^0-9\.\,]/g, "").trim() : $j("#product-information #productPrices .priceBlock").text().replace(",",
            "").split("|")[0].split(k)[1].trim(), b = $j("#product-information h1").text().trim(), d = e = $j("#product-information .product-title").text().trim()
    } catch (O) {
        c = 881, b = d = 0, e = "", a = 0
    } else if (-1 != f.indexOf("amazonXXX.com")) try {
        d = e = $j("#btAsinTitle").text().trim(), b = $j(".brandLink").length ? $j(".brandLink").text().trim() : "Amazon", a = $j(".priceLarge").length ? $j(".priceLarge:first") : $j(".a-color-price.a-size-large") ? $j(".a-color-price.a-size-large") : $j(".product .price:first"), a = a.text().replace("$", "").replace(",",
            "").split(/-.*$/)[0].trim()
    } catch (P) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("oscardelarenta.com")) try {
        c = 6056, d = $j("div.product_container").data("product-id"), e = $j("h1.product-title").text(), b = "Oscar de la Renta", a = $j("span.price").text().replace("$", "").trim()
    } catch (Q) {
        c = 6056, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.net-a-porter.com")) try {
        j = $j(".country_select").first().text().trim(), "United States" == j ? (c = 2492, g = "$", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",", "") :
            $j("#product-details #price").text().trim().split("$")[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "United Kingdom" == j ? (c = 4631, g = "\u00a3", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",", "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Royaume-Uni" == j ? (c = 4631, g = "\u00a3", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",",
            "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "\u82f1\u56fd" == j ? (c = 4631, g = "\u00a3", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",", "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "\u4e2d\u56fd" == j ? (c = 4631, g = "$", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",",
            "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Sweden" == j ? (c = 4631, g = "\u20ac", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",", "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Mexico" == j ? (c = 4631, g = "$", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",",
            "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Argentina" == j ? (c = 4631, g = "$", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",", "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Brazil" == j ? (c = 4631, g = "$", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",",
            "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Australia" == j ? (c = 4631, g = "$", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",", "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Italy" == j ? (c = 4631, g = "\u20ac", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",",
            "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Germany" == j ? (c = 4631, g = "\u20ac", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",", "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Deutschland" == j ? (c = 4631, g = "\u20ac", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",",
            "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "France" == j ? (c = 4631, g = "\u20ac", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",", "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Spain" == j ? (c = 4631, g = "\u20ac", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",",
            "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Netherlands" == j ? (c = 4631, g = "\u20ac", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",", "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Finland" == j ? (c = 4631, g = "\u20ac", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",",
            "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Italy" == j ? (c = 4631, g = "\u20ac", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",", "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Greece" == j ? (c = 4631, g = "\u20ac", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",",
            "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Japan" == j ? (c = 4631, g = "$", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",", "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Russia" == j ? (c = 4631, g = "\u00a3", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",",
            "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Philippines" == j ? (c = 4631, g = "$", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",", "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Canada" == j ? (c = 4631, g = "$", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",",
            "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Denmark" == j ? (c = 4631, g = "\u20ac", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",", "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Austria" == j ? (c = 4631, g = "\u20ac", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",",
            "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Belgium" == j ? (c = 4631, g = "\u20ac", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",", "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Switzerland" == j ? (c = 4631, g = "\u20ac", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",",
            "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Ireland" == j ? (c = 4631, g = "\u20ac", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",", "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Norway" == j ? (c = 4631, g = "\u20ac", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",",
            "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Poland" == j ? (c = 4631, g = "\u20ac", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",", "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Hungary" == j ? (c = 4631, g = "\u20ac", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",",
            "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Portugal" == j ? (c = 4631, g = "\u20ac", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",", "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Hong Kong" == j ? (c = 4631, g = "HKD$", a = $j("#price span").length ? $j("#price span").text().trim().split("$")[1].replace(",",
            "") : $j("#price").clone().children().remove().end().text().trim().split("$")[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "India" == j ? (c = 4631, g = "$", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",", "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Columbia" == j ? (c = 4631, g = "$", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",",
            "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Honduras" == j ? (c = 4631, g = "$", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",", "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Mongolia" == j ? (c = 4631, g = "$", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",",
            "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "Singapore" == j ? (c = 4631, g = "$", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",", "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim()) : "\u65b0\u52a0\u5761" == j && (c = 4631, g = "$", a = $j("#price span").length ? $j("#price span").text().trim().split(g)[1].replace(",",
            "") : $j("#price").clone().children().remove().end().text().trim().split(g)[1].replace(",", ""), b = "NET A PORTER", d = e = $j("#product-details h2").text().trim())
    } catch (R) {
        b = d = a = 0, e = ""
    } else if (-1 != f.indexOf("asos")) try {
        var r = $j(".currency-locale-link .flag").attr("alt");
        0 < $j("#ctl00_ContentHeader_ctlTitleBar_ctlLocalisationMenu_showCurrencyList span:first").length && (r = $j("#ctl00_ContentHeader_ctlTitleBar_ctlLocalisationMenu_showCurrencyList span").first().attr("class"), "menu-arrow-shadow" === r && (r = $j(".current-country").first().text().trim()));
        p = $("#localisationMenu .selected-currency").text().trim();
        "\u00a3 GBP" === p ? (g = "\u00a3", l = 10) : "$ USD" === p ? (g = "$", l = 1) : "C$ CAD" === p ? (g = "$", l = 16) : "kr SEK" === p ? (g = "kr", l = 15) : "kr NOK" === p ? (g = "kr", l = 21) : "kr DKK" === p ? (g = "kr", l = 18) : "\u20a3 CHF" === p ? (g = "chf", l = 20) : "\u20ac EUR" === p ? (g = "\u20ac", l = 11) : "$ AUD" === p ? (g = "$", l = 8) : -1 != location.href.indexOf("cn") ? (g = "\u00a5", l = 2) : "$ HKD" === p ? (g = "HK$", l = 31) : "$ NZD" === p ? (g = "$", l = 35) : "$ SGD" === p ? (g = "S$", l = 17) : "NT$ TWD" === p ? (g = "NT$", l = 4) : "\u0440\u0443\u0431. RUB" === p &&
            (g = "\u0440\u0443\u0431", l = 13);
        "United States" == r || "flag en-US" == r ? (c = 1951, a = Product.ProductPriceInNetworkCurrency, b = "Asos", d = e = $j(".product_title").text().trim()) : "Deutschland" == r || "flag de-DE" == r ? (c = 5844, a = Product.ProductPrice, b = "Asos", d = e = $j(".product_title").text().trim()) : "United Kingdom" == r || "flag en-GB" == r ? (c = 4851, a = Product.ProductPrice, b = "Asos", d = e = $j(".product_title").text().trim()) : "France" == r || "flag fr-FR" == r ? (c = 4644, a = Product.ProductPrice, b = "Asos", d = e = $j(".product_title").text().trim()) :
            "flag es-ES" == r || "Espa\u00f1a" == r ? (c = 5850, a = Product.ProductPrice, b = "Asos", d = e = $j(".product_title").text().trim()) : "flag it-IT" == r || "Italia" == r ? (c = 4645, a = Product.ProductPrice, b = "Asos", d = e = $j(".product_title").text().trim()) : "Australia" == r || "flag en-AU" == r ? (c = 4643, a = Product.ProductPrice, b = "Asos", d = e = $j(".product_title").text().trim()) : "flag ru-RU" == r || "\u0420\u043e\u0441\u0441\u0438\u044f" == r ? (c = 4646, a = Product.ProductPrice, b = "Asos", d = e = $j(".product_title").text().trim()) : -1 != p.indexOf("kr SEK") ? (c =
                4648, a = Product.ProductPrice, b = "Asos", d = e = $j(".product_title").text().trim()) : -1 != p.indexOf("kr NOK") ? (c = 5854, a = Product.ProductPrice, b = "Asos", d = e = $j(".product_title").text().trim()) : -1 != location.href.indexOf("cn") && (c = 5846, a = $j(".big-price").text().trim().substr(1), b = "Asos", e = $j(".prod h1").text().trim(), d = location.href.substr(16, 40))
    } catch (S) {
        b = d = 0, e = "", a = 0
    } else if (-1 != f.indexOf("zappos")) try {
        c = 581, m = $j("#prForm #priceSlot .salePrice"), a = 0 < m.length ? $j("#prForm #priceSlot .salePrice").html().split("$")[1].trim() :
            $j("#prForm #priceSlot .price").html().split("$")[1].trim(), b = $j("#productStage #prdImage .title.item .brand").text().trim(), b = $j("#productStage #prdImage .title.item .fn").text().trim(), d = $j("input[name='productId']").val()
    } catch (T) {
        c = 581, b = d = 0, e = "", a = 0
    } else if (-1 != f.indexOf("modcloth")) try {
        c = 46525, a = $j("#transactional-box-container #product-price span").text().split("$")[1].trim(), b = "Modcloth", d = e = $j("#product-name").html().trim()
    } catch (U) {
        c = 46525, d = 0, e = "", a = 0
    } else if (-1 != f.indexOf("revolveclothing")) try {
        c =
            1051, k = $j(".currency_select.parent .dd").text().split(" ")[1].trim(), "CNY" == k ? (c = 1051, g = "\uffe5") : "USD" == k ? g = "$" : "GBP" == k ? g = "\u00a3" : "EUR" == k && (g = "\u20ac"), a = $j(".pdp_right_area .price_box .price").text().split(g)[1].trim(), b = "REVOLVE clothing", d = e = $j(".product_name h1").text().trim()
    } catch (V) {
        b = d = 0, e = "", a = 0
    } else if (-1 != f.indexOf("ssense")) try {
        c = 961, a = $j("#desc").find(".price_new").html().trim().split("$")[1].split(" ")[0], e = $j("#desc").find(".name").html().trim(), b = $j("#desc").find(".pp_m_brand").find("span").html().trim(),
        d = e, console.log(a)
    } catch (W) {
        c = 961, d = 0, e = "", a = b = 0
    } else if (-1 != f.indexOf("topshop")) try {
        j = $j("#region_select .rs_link").text().trim(), "United Kingdom" == j ? (c = 4889, g = "\u00a3") : "GermanyDeutsch" == j ? (c = 5957, g = "\u20ac") : "DeutschlandDeutsch" == j ? (c = 5957, g = "\u20ac") : "FranceFran\u00e7ais" == j ? (c = 5958, g = "\u20ac") : "Australia" == j ? (c = 6128, g = "\u00a3") : (c = 2552, g = "$"), a = productData.prices.now.split(";").pop().replace(g, "").replace(",", "."), b = "TOPSHOP", d = e = productData.name
    } catch (X) {
        d = 0, e = "", a = b = 0
    } else if (-1 != f.indexOf("theoutnet.com")) try {
        c =
            1861, j = $j("#header-country").text().trim(), "United Kingdom" === j ? (c = 3292, g = k = "\u00a3") : "France" === j ? (c = 3292, g = k = "\u20ac") : "Hong Kong" === j ? (c = 3292, g = "HK$", k = "\u00a3") : "China" === j ? (c = 3292, g = "\u00a5", k = "\u00a3") : "United States" === j && (c = 1861, g = k = "$"), a = 0 < $j(".price-outnet").length ? $j(".price-outnet").text().split(k)[1].replace(",", "").trim() : $j(".price-now").text().split(k)[1].replace(",", "").trim(), e = $j("#product-heading h1 span").text().trim(), b = $j("#product-heading h1 a").text().trim(), d = e
    } catch (Y) {
        d =
            0, e = "", a = b = 0
    } else if (-1 != f.indexOf("www.neimanmarcus.com")) try {
        c = 2682, a = 0 !== $j(".adornmentPriceElement .price.pos1override").text().length ? $j(".adornmentPriceElement .price.pos1override").text().split("$")[1].replace(",", "").trim() : 0 !== (a == $j(".lineItemInfo span:first").text().length) ? $j(".lineItemInfo span:first").text().split("$")[1].replace(",", "").trim() : $j(".lineItemInfo .price.pos1").text().split("$")[1].trim(), b = $j("h1 .designer").text().trim(), d = e = $j("tr td h1").text().split(b)[1].trim()
    } catch (Z) {
        c =
            2682, b = d = 0, e = "", a = 0
    } else if (-1 != f.indexOf("farfetch")) try {
        t = $j("#footer-third a").text().split("/")[0].trim(), "GB" == t ? (c = 1931, g = "\u00a3", a = 0 < $j(".productPrice .saleprice").length ? $j(".productPrice .saleprice").text().split(g)[1].replace(",", "").trim() : $j("#ContentPlaceBody_TemplateBody_lbPrice").text().split(g)[1].replace(",", "").trim()) : "FI" == t ? (c = 1931, g = "\u20ac", a = 0 < $j(".productPrice .saleprice").length ? $j(".productPrice .saleprice").text().split(g)[1].trim() : $j("#ContentPlaceBody_TemplateBody_lbPrice").text().split(g)[1].trim()) :
            "SE" == t ? (c = 1931, g = "\u20ac", a = 0 < $j(".productPrice .saleprice").length ? $j(".productPrice .saleprice").text().split(g)[1].trim() : $j("#ContentPlaceBody_TemplateBody_lbPrice").text().split(g)[1].trim()) : "NL" == t ? (c = 1931, g = "\u20ac", a = 0 < $j(".productPrice .saleprice").length ? $j(".productPrice .saleprice").text().split(g)[1].trim() : $j("#ContentPlaceBody_TemplateBody_lbPrice").text().split(g)[1].trim()) : "US" == t ? (c = 4663, g = "$", a = 0 < $j(".productPrice .saleprice").length ? $j(".productPrice .saleprice").text().split(g)[1].replace(",",
                "").trim() : $j("#ContentPlaceBody_TemplateBody_lbPrice").text().split(g)[1].replace(",", "").trim()) : "CN" == t ? (c = 1931, g = "$", a = 0 < $j(".productPrice .saleprice").length ? $j(".productPrice .saleprice").text().split(g)[1].trim() : $j("#ContentPlaceBody_TemplateBody_lbPrice").text().split(g)[1].trim()) : "AU" == t ? (c = 44561, g = "$", a = 0 < $j(".productPrice .saleprice").length ? $j(".productPrice .saleprice").text().split(g)[1].replace(",", "").trim() : $j("#ContentPlaceBody_TemplateBody_lbPrice").text().split(g)[1].replace(",",
                "").trim()) : "DE" == t ? (c = 1931, g = "\u20ac", a = 0 < $j(".productPrice .saleprice").length ? $j(".productPrice .saleprice").text().split(g)[1].trim() : $j("#ContentPlaceBody_TemplateBody_lbPrice").text().split(g)[1].trim()) : "HK" == t ? (c = 1931, g = "$", a = 0 < $j(".productPrice .saleprice").length ? $j(".productPrice .saleprice").text().split(g)[1].trim() : $j("#ContentPlaceBody_TemplateBody_lbPrice").text().split(g)[1].trim()) : "RU" == t ? (c = 1931, g = "\u20ac", a = 0 < $j(".productPrice .saleprice").length ? $j(".productPrice .saleprice").text().split(g)[1].trim() :
                $j("#ContentPlaceBody_TemplateBody_lbPrice").text().split(g)[1].trim()) : "UA" == t && (c = 1931, g = "\u20ac", a = 0 < $j(".productPrice .saleprice").length ? $j(".productPrice .saleprice").text().split(g)[1].trim() : $j("#ContentPlaceBody_TemplateBody_lbPrice").text().split(g)[1].trim()), e = $j("#productItemDesc .productFriendly").text().trim(), b = $j("#ContentPlaceBody_TemplateBody_hItemTitle").text().trim(), d = e
    } catch (aa) {
        a = d = 0, e = "", b = 0
    } else if (-1 != f.indexOf("saksfifthavenue")) try {
        if ("US" == countryCode ? (c = 3222, g = "$") :
            "GB" == countryCode ? (c = 4722, g = "\u00a3") : "CA" == countryCode ? (c = 5814, g = "$") : "CN" == countryCode ? (c = 3222, g = "HKD $") : "AU" == countryCode && (c = 49634, g = "AUD $"), 0 < $j("div.pdp-item-container").length) a = 0 < $j("span.product-sale-price").length ? $j("span.product-sale-price").text().split(g)[1].trim() : $j("span.product-price").text().split(g)[1].trim(), b = "saks fifth avenue", d = e = $j("h2.description").first().text().trim()
    } catch (ba) {
        b = a = d = 0, e = ""
    } else if (-1 != f.indexOf("piperlime")) try {
        c = 871, a = 0 < $j("#swatchContent #colorSwatchContent strike").length ?
            $j("#swatchContent #colorSwatchContent .salePrice").text().split("$")[1].trim() : $j("#priceText").text().split("$")[1], e = $j(".productName").text().trim(), b = $j("#prodBrandLink").text().trim(), d = e
    } catch (ca) {
        c = 871, d = 0, e = "", a = b = 0
    } else if (-1 != f.indexOf("www.freepeople.com")) try {
        k = $j(".txt").first().text().split(" ")[1].trim(), "USD" == k ? (c = 45634, g = "$", a = $j("div.prices").find(".dollars").html() + $j("div.prices").find(".cents").html().replace(",", "")) : "CNY" == k ? (c = 45634, g = "\u00a5", a = $j("div.prices").find(".dollars").html() +
            $j("div.prices").find(".cents").html().replace(",", "")) : "CAD" == k ? (c = 45634, g = "C$", a = $j("div.prices").find(".dollars").html() + $j("div.prices").find(".cents").html().replace(",", "")) : "EUR" == k ? (c = 45634, g = "\u20ac", a = $j("div.prices").find(".dollars").html() + $j("div.prices").find(".cents").html().replace(",", "")) : "RUB" == k && (c = 45634, g = "\u0440\u0443\u0431", a = $j("div.prices").find(".dollars").html().replace(",", "") + $j("div.prices").find(".cents").html()), b = "FREE PEOPLE", e = $j(".metadata h1").text().trim(), d =
            $j(".product-contents").attr("id").split("-info-")[1]
    } catch (da) {
        d = 0, e = "", a = 0
    } else if (-1 != f.indexOf("www.freepeople.co.uk")) try {
        g = "\u00a3", c = 45634, a = $j("div.prices").find(".dollars").html() + $j("div.prices").find(".cents").html(), b = "FREE PEOPLE", d = e = $j(".title-band.clearfix .metadata h1").text().trim()
    } catch (ea) {
        c = 45634, d = 0, e = "", a = 0
    } else if (-1 != f.indexOf("madewell")) try {
        c = 2702, a = 0 < $j("#description0 .price-soldout").length ? $j("#description0 .selected-color-price").text().split("$")[1].trim() : $j("#description0 .full-price span").text().split("$")[1].trim(),
        b = "Madewell", d = e = $j("#description0 header h1").text().trim()
    } catch (fa) {
        c = 2702, d = 0, e = "", a = 0
    } else if (-1 != f.indexOf("yoox.com")) try {
        j = $j("#countryCont").clone().children().remove().end().text().trim().split("-")[0].trim(), "ITALY" == j ? (c = 5964, g = "\u20ac") : "SPAIN" == j ? (c = 5940, g = "\u20ac") : "UNITED KINGDOM" == j ? (c = 4701, g = "\u00a3") : "U.S.A." == j ? (c = 3372, g = "$") : "UNITED STATES" == j ? (c = 3372, g = "$") : "BELGIUM" == j ? (c = 6060, g = "\u20ac") : "NETHERLANDS" == j && (c = 6060, g = "\u20ac"), b = $j("#itemTitle h2 a").text().trim(), d = e = $j("#itemTitle h1 span").text().trim(),
        a = 0 < $j("#itemHeader #itemPrice .oldprice").length ? $j("#itemHeader #itemPrice .newprice span").text().trim() : $j("#itemHeader #itemPrice .fullprice span").text(), 0 <= a.toLowerCase().indexOf("eur") && (a = a.replace("EUR", "").split(",")[0].trim()), 0 <= a.toLowerCase().indexOf("$") && (a = a.replace("$", "").replace("US", "").split(".")[0].replace(",", "").trim()), 0 <= a.toLowerCase().indexOf("\u00a3") && (a = a.replace("\u00a3", "").split(".")[0].trim()), 0 <= a.toLowerCase().indexOf("\u0440\u0443\u0431") && (a = a.replace("\u0440\u0443\u0431",
            "").replace(" ", "").trim())
    } catch (ga) {
        b = d = 0, e = "", a = 0
    } else if (-1 != f.indexOf("www.barneys.com")) try {
        c = 47792, a = $j(".colmask.leftmenu #detail-column .standardprice").text().split("$")[1].replace(",", "").trim().split("S")[0], e = $j("#detail-column h2").text().trim(), b = "BARNEYS NEW YORK", d = e
    } catch (ha) {
        c = 47792, a = b = d = 0, e = ""
    } else if (-1 != f.indexOf("www.forever21.com")) try {
        -1 != window.location.pathname.indexOf("/UK/") ? (c = 4634, g = "\u00a3") : -1 != window.location.pathname.indexOf("/EU/") ? (c = 46300, g = "\u20ac") : (c = 49457,
            g = "$", a = 0 < $j("#PriceMargin span .was-now-price").length ? $j("#PriceMargin span .was-now-price").text().split("Now:" + g)[1].trim() : $j("#PriceMargin .product-price").text().split(g)[1].trim()), "$" != g && (a = 0 < $j(".ProdMargin b").length ? $j(".ProdMargin b").text().replace("Now:", "") : $j(".ProdMargin .items_price").text(), a = a.replace(g, "").trim(), a = a.replace(",", ".")), b = "FOREVER 21", d = e = $j("#ProdMargin .product-title").text().trim()
    } catch (ia) {
        d = 0, e = "", a = 0
    } else if (-1 != f.indexOf("target")) try {
        c = 49436, a = $j(".contentLeft .price span").eq(1).text().split("$")[1].trim(),
        b = "Target", d = e = $j("h2.product-name").find("span").text().trim()
    } catch (ja) {
        c = 49436, a = d = 0, e = ""
    } else if (-1 != f.indexOf("www.mrporter.com")) try {
        j = $j("#country_select").text().trim();
        if ("United States" == j) c = 3482, g = "$", a = $j(".price .price-value").text().split(g)[1].trim().replace(",", "");
        else if ("United Kingdom" == j || "Australia" == j || "Russia" == j) c = 4629, g = "\u00a3", a = $j(".price .price-value").text().split(g)[1].trim().replace(",", "");
        else if ("France" == j || "Germany" == j || "Italy" == j || "Denmark" == j || "Norway" == j ||
            "Sweden" == j || "Finland" == j || "Iceland" == j || "Spain" == j) c = 4629, g = "\u20ac", a = $j(".price .price-value").text().split(g)[1].trim().replace(",", "");
        b = $j("h1").find("a").html().trim();
        d = e = $j("#product-details").find("h4").html().trim()
    } catch (ka) {
        b = d = 0, e = "", a = 0
    } else if (-1 != f.indexOf("sephora.com")) try {
        c = 3032;
        g = "$";
        a = $j(".sale-price").is(":visible") ? $j(".sale-price").children(".price").html().replace(",", "") : $j(".list-price").children(".price").html().replace(",", "");
        e = $j(".product-description h1").first().text().trim();
        if (null === e) throw "multiple products";
        b = "Sephora";
        d = e
    } catch (la) {
        c = 3032, a = d = 0, e = ""
    } else if (-1 != f.indexOf("sephora.fr")) try {
        c = 6206, a = $j(".gras:first").text().split("\u20ac")[0].replace(",", ".").trim(), b = "Sephora France", d = e = $j(".titre").text().trim()
    } catch (ma) {
        c = 6206, a = d = 0, e = ""
    } else if (-1 != f.indexOf("sephora.it")) try {
        c = 6282, a = $j(".gras:first").text().split("\u20ac")[1].replace(",", ".").trim(), b = "Sephora Italy", d = e = $j(".titre").text().trim()
    } catch (na) {
        c = 6282, a = d = 0, e = ""
    } else if (-1 != f.indexOf("www.sephora.cn")) try {
        c =
            51421, g = "\u00a5", a = $j("#productDetail_up .proPrice span").text().trim(), b = "SEPHORA", d = e = $("#productNa").attr("value").trim()
    } catch (oa) {
        c = 51421, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.sephora.com.br")) try {
        c = 51697, g = "R$", a = $j("#productDetail_up .proPrice span").text().trim(), b = "SEPHORA", d = e = $("#productNa").attr("value").trim()
    } catch (pa) {
        c = 51697, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("ulta")) try {
        c = 1021, b = $j(".product-detail-content h5").find("a").text().replace(/<\!--(.*?)--\>/g, "").trim(), e = $j(".product-detail-content h3").text(),
        d = $j("#itemNumber").text().replace("Item #:", "").trim(), a = $j("#skuInfoPrice").text().split("$")[1], -1 != $j(".pro-new-price").text().toLowerCase().indexOf("$") && (a = $j(".pro-new-price").text().split("$")[1])
    } catch (qa) {
        c = 1021, b = d = 0, e = "", a = 0
    } else if (-1 != f.indexOf("baublebar")) try {
        c = 3362, a = $j("span.price").text().split("$")[1].trim(), b = "BAUBLEBAR", d = e = $j(".wrapper-product-name h1").first().text().trim()
    } catch (ra) {
        c = 3362, b = d = 0, e = "", a = 0
    } else if (-1 != f.indexOf("nordstrom")) try {
        "Change Selections" !== $j(".intl-shopping span").text().trim() &&
            (c = 4463, a = $j(".rightcol .itemNumberPriceRow.sale.clearfix.first").length ? $j(".rightcol .itemNumberPriceRow.sale.clearfix.first span").eq(1).text().split("$")[1].replace(",", "").replace("-", "").trim() : $j(".rightcol .itemNumberPriceRow.clearfix.first span").eq(0).text().split("$")[1].replace("Now:", "").replace(",", "").replace("-", "").trim(), b = "NORDSTROM", d = e = $j(".rightcol h1").text().replace("|", "").trim())
    } catch (sa) {
        c = 4463, b = a = 0, e = "", d = 0
    } else if (-1 != f.indexOf("bergdorfgoodman")) try {
        c = 3232, a = $j(".lineItemInfo .adornmentPriceElement .price.pos1override").length ?
            $j(".lineItemInfo .adornmentPriceElement .price.pos1override").first().text().split("$")[1].replace(",", "").trim() : $j(".lineItemInfo span").first().text().split("$")[1].replace(",", "").trim(), b = $j(".lineItemInfo h2").first().text().trim(), d = e = $j(".lineItemInfo h2").eq(1).text().trim()
    } catch (ta) {
        c = 3232, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("bananarepublic.gap.com")) try {
        k = $j("#shippingToCountryFlag").attr("title"), "France" == k ? (c = 3642, g = "\u20ac", k = "EUR") : "United Kingdom" == k ? (c = 3642, g = "\u00a3", k = "GBP") :
            "United States" == k && (c = 771, k = g = "$"), m = $j("#priceText .salePrice").length, a = 0 < m ? $j("#priceText .salePrice").text().split(k)[1].trim() : $j("#priceText").text().split(k)[1].trim(), b = "Banana Republic", d = e = document.getElementsByClassName("productName")[0].innerHTML.trim()
    } catch (ua) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("bananarepublic.gap.eu")) try {
        c = 3642, m = $j("#priceText .salePrice").length, a = 0 < m ? $j("#priceText .salePrice").text().split("\u20ac")[1].replace(",", ".").trim() : $j("#priceText").text().split("\u20ac")[1].replace(",",
            ".").trim(), g = "\u20ac", b = "Banana Republic", e = document.getElementsByClassName("productName")[0].innerHTML.trim(), d = $j("#productNumber").text().trim().replace("prices may vary", "").replace("#", "").trim()
    } catch (va) {
        c = 3642, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.us.allsaints.com")) try {
        c = 3532, g = "$", a = "color: red;" === $j(".product-description .price").attr("style") ? $j(".product-description .price").text().split(g)[1].replace(",", "").replace("Was", "").trim() : $j(".product-description .price").text().split(g)[1].trim(),
        b = "All Saints", d = e = $j('h1[itemprop="name"]').html().trim()
    } catch (wa) {
        c = 3532, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.allsaints.com")) try {
        c = 4702, g = "\u00a3", a = "color: red;" === $j(".product-description .price").attr("style") ? $j(".product-description .price").first().text().split(g)[1].replace(",", "").replace("Was", "").trim() : $j(".product-description .price").text().split(g)[1].trim(), b = "All Saints", d = e = $j('h1[itemprop="name"]').html().trim()
    } catch (xa) {
        c = 4702, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("fr.allsaints.com")) try {
        c =
            5862, a = "color: red;" === $j(".product-description .price").attr("style") ? $j(".product-description .price").text().split(g)[1].replace(",", "").trim() : $j('span[itemprop="price"]').html().split("\u00a3")[1].trim(), b = "All Saints", d = e = $j('h1[itemprop="name"]').html().trim()
    } catch (ya) {
        c = 5862, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("anthropologie.com")) try {
        c = 45758, a = $j(".prodprice.font3a span").first().text().split("$")[1].trim(), b = "Anthropologie", e = $j("h1").text().trim(), d = $j("#styleno").text().trim()
    } catch (za) {
        c =
            45758, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("needsupply")) try {
        c = 45751, a = $j('.details span[class="price"]').html().split("$")[1].trim(), b = $j(".details > h2 a").text().trim(), d = e = $j(".details > h1").text().trim()
    } catch (Aa) {
        c = 45751, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.nastygal.com")) try {
        j = $j(".dropdown .dropdown-toggle.disabled span").eq(4).text().trim(), "$" == j && (c = 46145, a = $j(".product-details .product-price .current-price").text().split("$")[1].trim(), b = "NastyGal", d = e = $j(".product-details").find("h1").text().trim())
    } catch (Ba) {
        c =
            46145, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("wl.nastygal.com")) try {
        j = $j(".dropdown.dropdown-hover #localeSelection span").text().trim(), "US" == j && (c = 46145, a = 0 < $j(".col.col-1 .v-product-detailinfo .prices.clearfix .price.price-sale b").length ? $j(".col.col-1 .prices.clearfix .price.price-sale span").text().split("$")[1].trim() : $j(".col.col-1 .prices.clearfix .price span").text().split("$")[1].trim(), b = "NastyGal", d = e = $j(".col.col-1 .product-info .v-product-detailinfo h1").text().trim())
    } catch (Ca) {
        c = 46145,
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("gap.com")) try {
        c = 761, k = $j("#shippingToCountryFlag").attr("title"), "France" == k ? (c = 4576, g = "\u20ac", k = "EUR") : "United Kingdom" == k ? (c = 4576, g = "\u00a3", k = "GBP") : "United States" == k && (k = g = "$"), m = $j("#priceText .salePrice").length, a = 0 < m ? $j("#priceText .salePrice").text().split(k)[1].trim() : $j("#priceText").text().split(k)[1].trim(), b = "Gap", e = document.getElementsByClassName("productName")[0].innerHTML.trim(), d = $j("#productNumber").text().trim().replace("prices may vary", "").replace("#",
            "").trim()
    } catch (Da) {
        c = 761, "France" == k ? c = 4576 : "United Kingdom" == k && (c = 4576), d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.gap.eu")) try {
        c = 3702, a = 0 < $j("#priceText .salePrice").length ? $j("#priceText .salePrice").text().split("\u20ac")[1].trim() : $j(".clearfix #selectionContent #priceText").text().split("\u20ac")[1].trim(), b = "Gap", e = $j("#mainContent .mainContentWrapper #productContentRight #productNameText .productName").text().trim(), d = $j("#productNumber").text().trim().replace("prices may vary", "").replace("#",
            "").trim()
    } catch (Ea) {
        c = 3702, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("mytheresa")) try {
        j = $j(".links .last a").first().text().trim(), "United Kingdom" == j ? (c = 52714, g = "\u00a3", $j("body").hasClass("catalog-product-view") && (a = $j('span[id*="product-price-"]').text().split(g)[1].replace(",", ""), b = $j(".product-shop .designer-name .designer-link").text().trim(), e = $j(".product-shop .product-name h1").text().trim())) : "Great Britain" == j ? (c = 52714, g = "\u00a3", $j("body").hasClass("catalog-product-view") && (a = $j('span[id*="product-price-"]').text().split(g)[1].replace(",",
            ""), b = $j(".product-shop .designer-name .designer-link").text().trim(), e = $j(".product-shop .product-name h1").text().trim())) : "United States of America" == j ? (c = 52594, g = "$", $j("body").hasClass("catalog-product-view") && (a = $j('span[id*="product-price-"]').text().split(g)[1].replace(",", ""), b = $j(".product-shop .designer-name .designer-link").text().trim(), e = $j(".product-shop .product-name h1").text().trim())) : "America" == j ? (c = 52594, g = "$", $j("body").hasClass("catalog-product-view") && (a = $j('span[id*="product-price-"]').text().split(g)[1].replace(",",
            ""), b = $j(".product-shop .designer-name .designer-link").text().trim(), e = $j(".product-shop .product-name h1").text().trim())) : "Deutschland" == j ? (c = 52714, g = "\u20ac", $j("body").hasClass("catalog-product-view") && (a = $j('span[id*="product-price-"]').text().split(g)[1].replace(".", "").replace(",", ".").trim(), b = $j(".product-shop .designer-name .designer-link").text().trim(), e = $j(".product-shop .product-name h1").text().trim())) : "Germany" == j ? (c = 52714, g = "\u20ac", $j("body").hasClass("catalog-product-view") &&
            (a = $j('span[id*="product-price-"]').text().split(g)[1].replace(".", "").replace(",", ".").trim(), b = $j(".designer-name a").text().trim(), e = $j(".product-name h1").first().text().trim())) : "France" == j ? (c = 6350, g = "\u20ac", $j("body").hasClass("catalog-product-view") && (a = $j('span[id*="product-price-"]').text().split(g)[1].replace(".", "").replace(",", ".").trim(), b = $j(".designer-name a").text().trim(), e = $j(".product-name h1").first().text().trim())) : "Italy" == j && (c = 6349, g = "\u20ac", $j("body").hasClass("catalog-product-view") &&
            (a = $j('span[id*="product-price-"]').text().split(g)[1].replace(",", "").trim(), b = $j(".designer-name a").text().trim(), e = $j(".product-name h1").first().text().trim())), d = e
    } catch (Fa) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("maxandchloe")) try {
        c = 941, a = 0 < $j("#salePrice").length ? $j(".prod_detail #salePrice").html().match("\\$(\\d+\\.*\\d*)")[1].trim() : $j(".prod_detail #price").html().match("\\$(\\d+\\.*\\d*)")[1].trim(), b = "Max and Chloe", d = e = $j(".prod_detail h1").text().trim()
    } catch (Ga) {
        c = 941, d = b = e = "", a = 0
    } else if (-1 !=
        f.indexOf("stevemadden")) try {
        c = 4853, a = ItemGroupJSON.CurrentItem.Price, b = "Steve Madden", e = ItemGroupJSON.Name, d = ItemGroupJSON.CurrentItem.SubItems[0].SKU
    } catch (Ha) {
        c = 4853, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("oldnavy")) try {
        c = 781, a = document.getElementById("colorSwatchContent").innerHTML.match("\\$(\\d+\\.*\\d*)")[1], b = "Old Navy", e = document.getElementsByClassName("productName")[0].innerText, d = document.getElementById("productNumber").innerText.split("#")[1].match("\\d+")
    } catch (Ia) {
        c = 781, d = b = e = "", a = 0
    } else if (-1 !=
        f.indexOf("luisaviaroma")) try {
        c = 1161, k = $j("#user_data strong").text().trim(), "UNITED STATES" == k ? g = "$" : "CANADA" == k ? g = "cad" : "FRANCE" == k ? g = "\u20ac" : "UNITED KINGDOM" == k ? g = "\u00a3" : "ITALY" == k ? g = "\u20ac" : "GERMANY" == k ? g = "\u20ac" : "SPAIN" == k ? g = "\u20ac" : "RUSSIAN FEDERAT..." == k ? g = "\u0440\u0443\u0431" : "HONG KONG" == k && (g = "HKD"), a = $j("#scPrice #sp_link_price span").text().split(g)[1].trim(), b = $j(".description h2").text().trim(), d = e = $j(".descr a").text().trim()
    } catch (Ja) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("macys")) try {
        j =
            $j("#footerFlag").attr("alt");
        "US" == j ? (c = 1751, k = g = "$") : "GB" == j ? (c = 4597, g = "\u00a3", k = "GBP") : "CA" == j && (c = 4598, k = g = "CAD");
        m = $j(".standardProdPricingGroup .priceSale").length;
        a = 0 < m ? $j(".priceSale:first").text().split(k)[1].trim() : $j(".standardProdPricingGroup span").text().split(k)[1].trim();
        if ("$" == k || "CAD" == k) a = a.replace(",", "");
        0 < $j("#brandLogo").length ? (b = $j("#brandLogo img").attr("alt").trim(), e = $j("#productTitle").html().trim()) : (b = "Macy's", e = $j("#productTitle").text().split(",")[0].trim());
        d = $j(".productID").text().split(":")[1].trim()
    } catch (Ka) {
        "US" ==
            j ? c = 1751 : "GB" == j ? c = 4597 : "CA" == j && (c = 4598), d = b = e = "", a = 0
    } else if (-1 != f.indexOf("anntaylor")) try {
        c = 44228, a = document.getElementsByClassName("sale")[0].innerHTML.match(".+<\\/sup>(\\d+).+")[1].trim(), b = "Ann Taylor", e = document.getElementsByClassName("hd-info")[0].innerHTML.match("<h1>(.+)<\\/h1>")[1].trim(), d = $j("input[name='skuId']").val()
    } catch (La) {
        c = 44228, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.victoriassecret.com")) try {
        c = 4577, a = 0 < $j(".description .price p em").length ? $j(".description .price p em").clone().children().remove().end().first().text().split("-")[0].replace(/[^0-9\.\,]/g,
            "").trim() : $j(".description .price p").clone().children().remove().end().first().text().replace(/[^0-9\.\,]/g, "").trim(), b = "Victoria's Secret", d = e = $j('[itemprop="name"] h1').text().trim()
    } catch (Ma) {
        c = 4577, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("loft")) try {
        c = 44227, 0 < $j("#main-bd-inner .Oprice span").length && (a = $j(".hd-info .Oprice span").first().clone().children().remove().end().text().trim() + "." + $j(".Oprice .cents").text().replace(".", "").trim(), b = "LOFT", d = e = $j("#main-bd-inner .hd-info h1").text().trim())
    } catch (Na) {
        c =
            44227, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("michaelkors")) try {
        c = 4462, a = document.getElementsByClassName("Black10V")[2].innerHTML.split("$")[1].trim(), b = "Michael Kors", d = e = document.getElementsByClassName("Black12VB")[0].innerHTML.replace(" Michael Kors", "").match("<h1>\\w+\\s+(.+)<\\/h1>")[1].trim()
    } catch (Oa) {
        c = 4462, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("toryburch.com")) try {
        c = 4482, a = $(".salesprice").html().split("$")[1].trim(), b = "Tory Burch", d = e = omnProductNames
    } catch (Pa) {
        c = 4482, d = b = e = "", a = 0
    } else if (-1 !=
        f.indexOf("drugstore")) try {
        c = 1721, a = document.getElementById("productprice").innerHTML.match("\\$(\\d+\\.\\d*)")[1], b = "Drugstore", d = e = document.getElementById("divCaption").getElementsByClassName("captionText")[0].innerHTML.match("(.+)&nbsp")[1]
    } catch (Qa) {
        c = 1721, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("loefflerrandall")) try {
        c = 3042, a = document.getElementsByClassName("pt_14")[0].innerHTML.match("\\$(\\d+\\.*\\d*)")[1], b = "Loeffler Randall", e = document.getElementsByClassName("product_title")[0].innerHTML.trim(),
        d = ""
    } catch (Ra) {
        c = 3042, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("singer22")) try {
        c = 1291, a = document.getElementsByClassName("lorange")[0].innerHTML.match("\\$(\\d+\\.*\\d*)")[1], b = "Singer22", e = document.getElementsByClassName("pdet")[0].innerHTML.match("<h1>(.+)<\\/h1>")[1], d = strProductId
    } catch (Sa) {
        c = 1291, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.cusp.com")) try {
        c = 2692, a = $j(".lineItemData .lineItemInfo .adorn.label.pos1").length ? $j(".lineItemData .lineItemInfo .price.pos1override").text().split("$")[1].trim() :
            $j(".lineItemData .lineItemInfo span").first().text().split("$")[1].trim(), b = $j(".lineItemInfo h2:first-child").text().trim(), d = e = $j(".lineItemInfo h2:nth-child(2)").text().trim()
    } catch (Ta) {
        c = 2692, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("nyandcompany")) try {
        c = 4530, m = $j("#main_information_wrapper_pdp #nycoPrice .original_price_num_pdp").length, a = 0 < m ? $j("#main_information_wrapper_pdp #nycoPrice .original_price .sale_price").html().split("$")[1].trim() : $j("#main_information_wrapper_pdp #nycoPrice .item_detail_pricing_pdp").html().split("$")[1].trim(),
        b = "New York & Company", e = document.getElementsByClassName("item_detail_pdp")[0].innerHTML.trim(), d = $j(".itemstyle_pdp").clone().children().remove().end().text().replace(/style/i, "").replace(".", "").trim()
    } catch (Ua) {
        c = 4530, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("ninewest")) try {
        c = 2972, a = 0 < $j(".salePrice").text().length ? $j(".salePrice").text().trim().replace(/[^0-9.]/g, "") : $j(".notSale").eq(0).text().trim().replace(/[^0-9.]/g, ""), b = "Nine West", e = $j("#nameHolder").text().trim(), d = sku
    } catch (Va) {
        c = 2972, d = b =
            e = "", a = 0
    } else if (-1 != f.indexOf("missguidedau")) try {
        c = 51573, g = "AUD", a = $j("#product-info .special-price span.price").length ? $j("#product-info .special-price span").html().replace("AU$", "").replace(",", "").trim() : $j("#product-info .regular-price span").html().replace("AU$", "").replace(",", "").trim(), b = "Missguided", d = e = document.getElementById("product-info").innerHTML.match("<h1>(.+)<\\/h1>")[1]
    } catch (Wa) {
        c = 51573, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("missguided.co.uk")) try {
        c = 4561, g = "\u00a3", a = $j("#product-info .special-price span.price").length ?
            $j("#product-info .special-price span").html().replace("\u00a3", "").replace(",", "").trim() : $j("#product-info .regular-price span").html().replace("\u00a3", "").replace(",", "").trim(), b = "Missguided", d = e = document.getElementById("product-info").innerHTML.match("<h1>(.+)<\\/h1>")[1]
    } catch (Xa) {
        c = 4561, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("ralphlauren")) try {
        c = 43966, a = $j(".prodourprice").html().split("$")[1].replace(",", "").trim(), b = "Ralph Lauren", e = document.getElementsByClassName("prodtitleLG")[0].innerHTML.match("<h1>(.+)<\\/h1>")[1],
        d = document.getElementsByClassName("productStyle")[0].innerHTML.split("#")[1]
    } catch (Ya) {
        c = 43966, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("XXXtobi")) try {
        c = 951, m = document.getElementsByClassName("price-wrapper")[0].getElementsByClassName("sale-price").length, a = 0 < m ? document.getElementsByClassName("price-wrapper")[0].getElementsByClassName("sale-price")[0].innerHTML.split("$")[1].replace(",", "").trim() : document.getElementsByClassName("price-wrapper")[0].getElementsByClassName("retail-price")[0].innerHTML.split("$")[1].replace(",",
            "").trim(), b = $j(".product-detail-header h1 a").text(), e = $j(".product-detail-header h1").clone().children().remove().end().text(), d = document.getElementsByClassName("product-code")[0].innerHTML
    } catch (Za) {
        c = 951, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("XXXoverstock")) {
        if ("-291px -63px" == $j(".hd-intl-flag a i").css("background-position")) try {
            c = 1211, m = document.getElementsByClassName("main-price-red-strike").length, a = 0 < m ? document.getElementsByClassName("main-price-red-strike")[0].innerHTML.split("$")[1].replace(",",
                "").trim() : document.getElementsByClassName("Ovalue")[0].innerHTML.split("$")[1].replace(",", "").trim(), b = "Overstock", e = $j("#prod_mainCenter h1").html(), d = document.getElementById("itmNum").innerHTML.split(":")[1].trim()
        } catch ($a) {
            c = 1211, d = b = e = "", a = 0
        }
    } else if (-1 != f.indexOf("www.swell.com")) try {
        c = 49570, m = document.getElementsByClassName("adjSalePrice").length, a = 0 < m ? document.getElementsByClassName("adjSalePrice")[0].getElementsByClassName("bright")[0].innerHTML.split("$")[1].replace(",", "").trim() : document.getElementsByClassName("adjPrice")[0].innerHTML.split("$")[1].replace(",",
            "").trim(), b = "Swell", e = document.getElementsByClassName("prod-Name")[0].innerHTML.trim(), d = document.getElementsByClassName("prod-ProdCode")[0].innerHTML.split("#")[1].trim()
    } catch (ab) {
        c = 49570, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("intermixonline")) try {
        c = 52459, m = jQuery(".detailprice .pricewas").length, a = 0 < m ? document.getElementsByClassName("pricesale")[0].innerHTML.split("$")[1].replace(",", "").replace("</span>", "").trim() : document.getElementsByClassName("detailprice")[0].innerHTML.split("$")[1].replace(",",
            "").replace("</span>", "").trim(), b = "INTERMIX", d = e = $j(".productName").text().trim()
    } catch (bb) {
        c = 52459, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("clubmonaco.com")) try {
        c = 43965, m = document.getElementsByClassName("sale-price").length, a = 0 < m && "" !== $j("#product-information .sale-price").html() ? document.getElementsByClassName("sale-price")[0].innerHTML.split("$")[1].replace(",", "").trim() : $j(".money span").html().split("$")[1].replace(",", "").trim(), b = "Club Monaco", e = document.getElementsByClassName("product-title")[0].innerHTML.trim(),
        d = $j(".product-number .style").html().split(":")[1].trim()
    } catch (cb) {
        c = 43965, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("clubmonaco.ca")) try {
        c = 43968, m = document.getElementsByClassName("sale-price").length, a = 0 < m && "" !== $j("#product-information .sale-price").html() ? document.getElementsByClassName("sale-price")[0].innerHTML.split("$")[1].replace(",", "").trim() : $j(".money span").html().split("$")[1].replace(",", "").trim(), b = "Club Monaco", e = document.getElementsByClassName("product-title")[0].innerHTML.trim(), d =
            $j(".product-number .style").html().split(":")[1].trim()
    } catch (db) {
        c = 43968, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("matchesfashion")) try {
        g = $j(".currencies a.active").text().split("   ")[1].trim();
        var c = "UNITED KINGDOM" === $j(".shipping a").html() ? 1961 : 4720,
            F = $j("#content"),
            m = F.find(".col-2").find(".details").find(".info").find(".price");
        x = m.find(".sale");
        a = 0 < x.length ? x.text().split(g)[1].replace(",", "").trim() : m.text().split(g)[1].replace(",", "").trim();
        b = F.find("h2.designer").first().text().trim();
        d = e =
            F.find("h3.description").first().text().split("(")[0].trim()
    } catch (eb) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.landsend.com")) try {
        j = $j(".change-localize-flag.fn-change-localize-flag.ship-to-icon").attr("src").split("/")[5].trim(), "GB.gif" == j ? (c = 6310, g = "\u00a3", k = "GBP") : "US.gif" == j && (c = 49733, k = g = "$"), m = document.getElementsByClassName("pp-summary-price")[0].getElementsByClassName("pp-was-price"), a = 0 < m.length ? document.getElementsByClassName("pp-summary-price")[0].getElementsByTagName("span")[1].innerHTML.split(k)[1].replace(",",
            "").trim() : document.getElementsByClassName("pp-summary-price")[0].innerHTML.split(k)[1].replace(",", "").trim(), b = "Land's End", e = document.getElementsByClassName("pp-product-name")[0].innerHTML.trim(), d = document.getElementsByClassName("pp-product-number")[0].getElementsByTagName("span")[0].innerHTML
    } catch (fb) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("swildens.fr")) try {
        g = "\u20ac", c = 46621, a = optionsPrice.productPrice, b = "SWILDENS", d = e = $j("h1.borde").first().text().trim()
    } catch (gb) {
        c = 46621, d = b = e = "", a = 0
    } else if (-1 !=
        f.indexOf("boticca")) try {
        k = $(".currencies button.active").text(), "$" == k ? g = "$" : "\u00a3" == k ? g = "\u00a3" : "\u20ac" == k && (g = "\u20ac"), c = 4721, a = document.getElementsByClassName("price")[0].innerHTML.split(k)[1].replace(",", "").trim(), b = document.getElementsByClassName("small-designer-panel")[0].getElementsByTagName("h2")[0].innerHTML, d = e = document.getElementsByClassName("title")[0].getElementsByTagName("h1")[0].innerHTML
    } catch (hb) {
        c = 4721, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("axparis")) try {
        c = 4742, "\u00a3" == $j(".ProductPrice").text().charAt(0) &&
            (g = "\u00a3", m = document.getElementsByClassName("ProductPrice")[0].getElementsByClassName("SalePrice"), a = 0 < m.length ? m[0].innerHTML.split("\u00a3")[1].replace(",", "").trim() : document.getElementsByClassName("ProductPrice")[0].innerHTML.split("\u00a3")[1].replace(",", "").trim(), b = "AX Paris", e = document.getElementsByClassName("productName")[0].getElementsByTagName("h1")[0].innerHTML.trim(), d = document.getElementsByClassName("ProductDescriptionContainer")[0].getElementsByTagName("div")[0].innerHTML.split(":")[1].trim())
    } catch (ib) {
        c =
            4742, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("ln-cc")) try {
        c = 4559, g = "\u00a3", a = $j("#price").html().split("\u00a3")[1].replace(",", "").trim(), b = "LN-CC", e = document.getElementsByClassName("fn")[0].innerHTML.trim(), d = document.getElementsByName("buy")[0].value
    } catch (jb) {
        c = 4559, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("boohoo.com")) try {
        c = 4572, "GBP" == $j("#CRTY").html() ? k = g = "\u00a3" : "USD" == $j("#CRTY").html() ? (k = g = "$", c = 49382) : "EUR" == $j("#CRTY").html() ? k = g = "\u20ac" : "CAD" == $j("#CRTY").html() && (g = "CAD", k = "$"), a = $j(".atrPrice").text().split(k)[1].trim(),
        b = "Boohoo.com", e = $j(".productdetailcontent h1").first().text().trim(), d = document.getElementById("prodSKU").innerHTML.trim()
    } catch (kb) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("oxygenboutique")) try {
        c = 4615, a = document.getElementsByClassName("price")[0].innerHTML.split("\u00a3")[1].replace(",", "").trim(), b = "Oxygen Boutique", e = document.getElementById("productpage_name").innerHTML.trim(), d = document.getElementById("ProductID").value
    } catch (lb) {
        c = 4615, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("solestruck")) try {
        c = 49454,
        m = $("#saleprice_div").html().trim(), a = "" !== m ? $j("#saleprice_div b").html().split("$")[1].replace(",", "").trim() : $j("#pricediv").html().split("$")[1].replace(",", "").trim(), e = $j("#vendorname").val().trim(), b = $j("#productName").val().trim(), d = $j("#productid").val().trim()
    } catch (mb) {
        c = 49454, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("alexanderwang")) try {
        c = 3152, m = $j("#detail_sku .product-price-showmarkdown"), a = 0 < m.length ? $j("#detail_sku .product-price-markdown").clone().children().remove().end().html().split("$")[1].replace(",",
            "").trim() : $j("#detail_sku cite.product-price").html().split("$")[1].replace(",", "").trim(), b = "Alexander Wang", e = document.getElementsByClassName("product-name")[0].innerHTML.trim(), d = $j(".product-id").clone().children().remove().end().html().trim()
    } catch (nb) {
        c = 3152, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("6pm")) try {
        c = 4536, a = $j("#priceSlot .price").first().text().split("$")[1].replace(",", "").trim(), b = $j(".title .brand").text().trim(), e = $j(".title .link.fn").text().trim(), d = $j(".sku.id").text().split("#")[1].trim()
    } catch (ob) {
        c =
            4536, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("luluguinness")) try {
        c = 0 < $j(".prodprice:contains($)").length ? 2061 : 2041, a = $j(".prodprice").html().split(/\$|\u00a3/i)[1].replace(",", "").trim(), b = "Lulu Guinness", e = $j(".productmaindetails h2").html().trim(), d = location.search.split("productId=")[1].trim()
    } catch (pb) {
        c = 2041, 0 < $j(".prodprice:contains($)").length && (c = 2061), d = b = e = "", a = 0
    } else if (-1 != f.indexOf("selfridges")) try {
        c = 4658, a = $j("#productInformation .price").text().split("\u00a3")[1].replace(",", "").trim(),
        b = $j("#productInformation .brand").text(), e = $j("#productInformation h1 .descriptionName").text(), d = $j("input[name=productId]").val()
    } catch (qb) {
        c = 4658, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("canada.forever21.com")) try {
        c = 50648, a = 0 < $j(".ProdMargin b").length ? $j(".ProdMargin b").text().split("$")[1].replace(",", "").trim() : $j("tr td .items_price").text().split("$")[1].replace(",", "").trim(), b = "Forever21", e = $j(".ProdMargin #ItemName").text().trim(), d = "01938"
    } catch (rb) {
        c = 50648, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("modaoperandi")) try {
        c =
            5881, a = $j(".product-price .price").text().split("$")[1].replace(",", "").trim(), b = "MODA OPERANDI", d = e = $j(".product-designer").first().text().trim()
    } catch (sb) {
        c = 5881, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("sunglasshut")) try {
        c = 2842, m = $("#offerPrice").length, a = 0 < m ? $j("#offerPrice").html().split("$")[1].replace(",", "").trim() : $j("#price").html().split("$")[1].replace(",", "").trim(), b = $j("#bv-container .brandName").html().trim(), e = $j("#bv-container .productName").html().trim(), d = $j(".product-upc .upc").html().trim()
    } catch (tb) {
        c =
            2842, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("bloomingdales")) try {
        k = $j("#iShip_flag img").attr("src").split("/")[9];
        "GB.jpg" == k ? (curs = "GBP", g = "\u00a3", c = 4600) : "CA.jpg" == k ? (g = curs = "CAD", c = 4232) : (g = curs = "$", c = 3742);
        a = 0 < $j(".singleTierPrice .priceSale").length ? $j(".singleTierPrice .priceSale").text().split(curs)[1].trim() : $j(".priceBig").text().split(curs)[1].trim();
        if ("$" == g || "CAD" == g) a = a.replace(",", "");
        b = "Bloomingdales";
        e = $j("div.pdp_descriptionAndPrice > h1").html().replace(" -", "").trim();
        d = $j("#cmio_productId").val().trim()
    } catch (ub) {
        d =
            b = e = "", a = 0
    } else if (-1 != f.indexOf("shopruche")) try {
        c = 4892, b = "ShopRuche.com", a = $j("span.price").text().split("$")[1].trim(), e = $j("div.product-name > h1").text().trim().replace(/\w\S*/g, function (a) {
            return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase()
        }), d = $j("p.product-ids").text().split("Model:")[1].trim()
    } catch (vb) {
        c = 4892, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("alexandalexa")) try {
        0 < $j("span.price:contains($)").length ? (u = "$", c = 3732) : (u = "\u00a3", c = 3692), a = 0 < $j(".price-prop.mb.clearfix .price-box .special-price .price").length ?
            $j(".price-prop.mb.clearfix .price-box .special-price .price").text().split(u)[1].replace(",", "").trim() : $j(".price-prop.mb.clearfix .price-box .regular-price .price").text().split(u)[1].replace(",", "").trim(), b = "alexandalexa", d = e = $j(".pheading h1 span").last().text().trim()
    } catch (wb) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("shopthetrendboutique")) try {
        c = 4508, e = $j(".iteminfo h1:first").text().trim(), "" !== e && (b = "The Trend Boutique", a = $j(".sale-price-bold"), a = 0 < a.length ? a.text().split("$")[1].replace(",",
            "").trim() : $j(".price-bold").text().split("$")[1].trim(), d = $j(".code b").text().trim())
    } catch (xb) {
        c = 4508, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("kohls")) try {
        c = 49541, a = 0 < $j(".column_content.productdet .price-holder .multiple-price .sale").length ? $j(".column_content.productdet .price-holder .multiple-price .sale").text().split("$")[1].replace(",", "").trim() : $j(".column_content.productdet .price-holder .multiple-price .original").text().split("$")[1].replace(",", "").trim(), b = "Kohls", d = e = $j(".title").clone().children().remove().end().text().trim()
    } catch (yb) {
        c =
            49541, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("charmandchain")) try {
        c = 5912, 0 < $j("h4.collections > a").length && (b = $j("h4.collections > a").text().trim(), a = 0 < $j(".special-price").length ? $j(".special-price .price").text().split("$")[1].replace(",", "").trim() : $j(".regular-price").text().split("$")[1].replace(",", "").trim(), d = e = $j(".product-name > h1").text().trim())
    } catch (zb) {
        c = 5912, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("kirnazabete")) try {
        c = 4581, a = $j(".price-box .regular-price .price").last().text().split("$")[1].replace(",",
            "").trim(), b = $j(".head > h4 > span > a").text().trim(), d = e = $j(".short-description").text().trim()
    } catch (Ab) {
        c = 4581, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("wallisfashion") || -1 != f.indexOf("wallis")) try {
        n = $j("#region_select .rs_link").text().trim(), k = "", "United States" == n ? (c = 3762, k = "$", a = productData.prices.now.replace(/[^0-9\.\,]/g, "").replace(",", "").trim()) : "United Kingdom" == n ? (c = 4599, k = "\u00a3", a = productData.prices.now.replace(/[^0-9\.\,]/g, "").replace(",", "").trim()) : "GermanyDeutsch" == n ? (c = 5926, k = "\u20ac",
            a = productData.prices.now.replace(",", ".").replace(/[^0-9\.\,]/g, "").trim()) : "France" == n && (c = 5927, k = "\u20ac", a = productData.prices.now.text().replace(",", ".").replace(/[^0-9\.\,]/g, "").trim()), b = "Wallis", d = e = productData.name
    } catch (Bb) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("XXXportero")) try {
        c = 3982, b = $j(".product-name h2").text().trim(), a = $j(".product-name .price").text().split("$")[1].replace(",", "").trim(), d = e = $j(".product-name h3").text().trim()
    } catch (Cb) {
        c = 3982, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("threadsence")) try {
        c =
            3112, b = "ThreadSence", m = $j("#productPrices .productSpecialPrice"), a = 0 < m.length ? m.text().split("$")[1].replace(",", "").trim() : $j("#productPrices").text().split("$")[1].replace(",", "").trim(), e = $j("#productName").text().trim(), d = $j("#tsModelNumber span").text().split(":")[1].trim()
    } catch (Db) {
        c = 3112, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("beautybar")) try {
        c = 3112, b = "Beauty Bar", a = $j(".productInformationOutLine .singlePrice").text().split("$")[1].replace(",", "").trim(), e = $j(".quickproductShowName").text().trim(),
        d = $j("#DefaultSkuHidden").val()
    } catch (Eb) {
        c = 3112, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("nelly")) try {
        if (s = window.location.pathname.split("/")[1], "uk" == s) c = 4710, g = "\u00a3", a = $j('span[itemprop="price"]').text().split("\u00a3")[1].trim(), b = $j('span[itemprop="brand"]').text().trim(), d = e = $j('span[itemprop="name"]').text().trim();
        else if ("nl" == s) c = 4544, g = "\u20ac", a = $j('span[itemprop="price"]').text().split("\u20ac")[1].replace(",", ".").trim(), b = $j('span[itemprop="brand"]').text().trim(), d = e = $j('span[itemprop="name"]').text().trim();
        else if ("se" == s) c = 6146, g = "kr", l = 15, a = $j('span[itemprop="price"]').text().split("kr")[0].replace(".", "").trim(), b = $j('span[itemprop="brand"]').text().trim(), d = e = $j('span[itemprop="name"]').text().trim();
        else if ("no" == s) c = 6145, g = "kr", l = 21, a = $j('span[itemprop="price"]').text().split("kr")[0].replace(/[^0-9]/g, "").trim(), b = $j('span[itemprop="brand"]').text().trim(), d = e = $j('span[itemprop="name"]').text().trim();
        else if ("dk" == s) c = 6170, g = "kr", l = 18, a = $j('span[itemprop="price"]').text().split("kr")[0].replace(".",
            "").trim(), b = $j('span[itemprop="brand"]').text().trim(), d = e = $j('span[itemprop="name"]').text().trim();
        else if ("eu" == s || -1 != f.indexOf("nelly.de")) c = 5983, g = "\u20ac", a = $j('span[itemprop="price"]').text().replace(g, "").replace(",", ".").trim(), b = $j('span[itemprop="brand"]').text().trim(), d = e = $j('span[itemprop="name"]').text().trim()
    } catch (Fb) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("us.dorothyperkins.com")) try {
        j = $j(".rs_link").first().text().trim(), "United States" == j && (c = 5843, a = $j(".product_summary .product_price span").text().split("$")[1].trim(),
            b = "Dorothy Perkins", d = e = $j("#product_tab_1 h1").text().trim())
    } catch (Gb) {
        c = 5843, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.dorothyperkins.com")) try {
        j = $j(".rs_link").first().text().trim(), "United Kingdom" == j ? c = 4719 : "Australia" == j && (c = 5999), a = $j(".product_summary .product_price span").text().split("\u00a3")[1].trim(), b = "Dorothy Perkins", d = e = $j("#product_tab_1 h1").text().trim()
    } catch (Hb) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.dorothyperkins.fr")) try {
        j = $j(".rs_link").first().text().trim(), "France" == j &&
            (c = 4605, a = $j(".product_summary .product_price span").text().split("\u20ac")[1].trim(), b = "Dorothy Perkins", d = e = $j("#product_tab_1 h1").text().trim())
    } catch (Ib) {
        c = 4605, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("de.dorothyperkins.com")) try {
        j = $j(".rs_link").first().text().trim(), "Germany" == j && (c = 4578, a = $j(".product_summary .product_price span").text().split("\u20ac")[1].replace(",", ".").trim(), b = "Dorothy Perkins", d = e = $j("#product_tab_1 h1").text().trim())
    } catch (Jb) {
        c = 4578, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("metroparkusa")) try {
        c =
            4546, m = $j("#price .originalprice").length, a = 0 < m ? $j("#price").children().remove().end().text().split("$")[1].replace(",", "").trim() : $j("#price").text().split("$")[1].replace(",", "").trim(), b = $j(".productcontent h3 a").text().trim(), e = $j(".productcontent h2").text().trim(), d = $j(".productcontent h4").text().split(":")[1].trim()
    } catch (Kb) {
        c = 4546, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("oasis-stores")) try {
        j = $j(".country_nav_menu img").attr("alt"), "United Kingdom" == j && (c = 4619, a = $j(".product_price span").text().split("\u00a3")[1].replace(",",
            "").trim(), b = "Oasis", e = $j("#product_title").text().trim(), d = UNIQUE_PRODUCT)
    } catch (Lb) {
        c = 4619, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("newlook")) try {
        c = 4564, j = $j("#countrylist .currency").first().text().trim(), "GBP \u00a3" == j ? (c = 4564, g = "\u00a3", a = $j(".promovalue").text().split("\u00a3")[1].replace(",", "").trim()) : "EUR \u20ac" == j && (c = 44593, g = "\u20ac", a = $j(".promovalue").text().split("\u20ac")[0].replace(",", ".").trim()), b = "New Look", d = e = $j(".title_container  h1").text().trim()
    } catch (Mb) {
        c = 4564, d = b = e = "", a =
            0
    } else if (-1 != f.indexOf("reiss.com")) try {
        if (n = "", n = $j("#region_select > option:selected").text().trim(), "UK" == n ? (c = 4545, g = "\u00a3") : "US" == n && (c = 2211, g = "$"), 0 < $(".product_details").length) m = $j(".now_price").length, a = 0 < m ? $j(".now_price").text().split(" ")[1].split(g)[1].replace(",", "").trim() : $j(".product_price").text().split(g)[1].replace(",", "").trim(), b = "Reiss", d = e = $j(".product_title").text().trim() + " " + $j(".product_short_desc").text().trim()
    } catch (Nb) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("ylang23")) try {
        c =
            4527, m = $j(".prodPrice strike").length, a = 0 < m ? $j(".prodPrice").clone().children().remove().end().text().split("$")[1].split("(")[0].replace(",", "").trim() : $j(".prodPrice").text().split("$")[1].replace(",", "").trim(), b = $j(".designerName").text().trim(), e = $j(".prodName").text().trim(), d = $j(".prodNum").text().split("#")[1].trim()
    } catch (Ob) {
        c = 4527, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("jcrew")) try {
        j = $j("#top_nav_country").text().trim(), "United Kingdom" == j ? (c = 6098, g = "\u00a3", a = 0 < $j("#productDetailsContainer0 #description0 .full-price .price-soldout").length ?
            $j("#productDetailsContainer0 .product-detail-price.sale-price.first-item").text().split("\u00a3")[1].replace(",", "").trim() : $j("#productDetailsContainer0 .full-price").text().split("\u00a3")[1].replace(",", "").trim()) : "United States" == j && (c = 2662, g = "$", a = 0 < $j("#productDetailsContainer0 #description0 .full-price .price-soldout").length ? $j("#productDetailsContainer0 .product-detail-price.sale-price.first-item").text().split("$")[1].replace(",", "").trim() : 0 < $j("#productDetailsContainer0 #description0 .full-price span").length ?
            $j("#productDetailsContainer0 #description0 .full-price span").text().split("$")[1].replace(",", "").trim() : $j("#productDetailsContainer0 #description0 .full-price").text().split("$")[1].replace(",", "").trim()), b = "J.Crew", d = e = $j("h1").first().text().trim()
    } catch (Pb) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("stellamccartney")) try {
        j = $j(".js_opencountryselector").clone().children().remove().end().text().trim(), "UK" == j && (c = 6042, a = $j(".js_price").text().trim().split("\u00a3")[1].replace(",", ""), b = "Stella McCartney Limited",
            d = e = $j(".js_name").text().trim())
    } catch (Qb) {
        c = 6042, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("bbdakota")) try {
        c = 46480, a = $j("#UnitCostSpan").text().trim().split("$")[1].replace(",", ""), b = "BB Dakota", d = e = $j("#ContentPlaceHolder1_ModelName").text().trim()
    } catch (Rb) {
        c = 46480, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("shopplanetblue")) try {
        c = 47717, (a = $j(".regular-price .price").text().trim().split("$")[1].replace(",", "")) || (a = $j(".special-price .price").text().trim().split("$")[1].replace(",", "")), b = "Planet Blue", d = e =
            $j(".product-name h1").text().trim()
    } catch (Sb) {
        c = 47717, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("eluxe.ca")) try {
        c = 3792, a = $j(".product-shop .special-price .price"), a = a.length ? $j(".product-shop .special-price .price").text().trim().split("$")[1].replace(",", "") : $j(".product-shop .regular-price .price").text().trim().split("$")[1].replace(",", ""), b = "eLUXE", d = e = $j(".product-shop .product-name h1 a").text().trim()
    } catch (Tb) {
        c = 3792, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("azaleasf")) try {
        c = 4954, a = $j("#detailsViewPrice .salePrice"),
        a = 0 < a.length ? $j("#detailsViewPrice .salePrice").text().trim().split("$")[1].replace(",", "") : $j("#detailsViewPrice").text().trim().split("$")[1].replace(",", ""), b = $j(".text-info .row:first-child h1:first-child").text().trim(), e = $j(".text-info .row:first-child h1:nth-child(2)").text().trim(), d = $j(".text-info .row:first-child span:eq(0)").text().trim()
    } catch (Ub) {
        c = 4954, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("myhabit")) try {
        c = 6064, a = $j("#ourPrice").text().trim().split("$")[1].replace(",", ""), b = "MYHABIT", d =
            e = $j("#pdHeader").text().trim()
    } catch (Vb) {
        c = 6064, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("katespade")) try {
        c = 4664, (a = $j(".product-col-2 #product-content .product-price  .price-sales").text().trim().split("$")[1].replace(",", "")) || (a = $j(".product-col-2 .price-standard").text().trim().split("$")[1].split("s")[0].trim().replace(",", "")), b = "Kate Spade", d = e = $j(".product-col-2 #product-content .product-name").text().trim()
    } catch (Wb) {
        c = 4664, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("theory.com")) try {
        c = 4491, a = $j(".salesprice").text().trim().split("$")[1].replace(",",
            ""), b = "theory", e = $j(".productname").text().trim(), d = $j(".itemNo").text().split(":")[1].trim()
    } catch (Xb) {
        c = 4491, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("schuh.co.uk")) try {
        c = 4623, a = $j(".itempage-price").text().trim().split("\u00a3")[1].replace(",", ""), b = $j("Schuh"), e = $j("meta[name=keywords]").attr("content"), d = $j("#productCode").text().trim()
    } catch (Yb) {
        c = 4623, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("warehouse.co.uk")) try {
        c = 4624, a = (a = $j(".nowPrice cufon:eq(1) cufontext").html()) ? $j(".nowPrice cufon:eq(1) cufontext").html().trim().split("\u00a3")[1].replace(",",
            "") : $j(".onePrice cufontext").html().trim().split("\u00a3")[1].replace(",", ""), b = $j("Warehouse Fashions Limited"), e = $j("#productExtraInfo2 p:first-child").text().trim(), d = $j("#productExtraInfo2 p:eq(1)").text().trim().split(":")[1].trim()
    } catch (Zb) {
        c = 4624, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("stylebop")) try {
        n = $j("#country a").first().text(), u = "", "United States" == n ? (c = 2021, g = "$", a = 0 < $j("span.old_price").length ? $j("span.sale_price").text().replace(/[^0-9\.\,]/g, "").replace(",", "").trim() : $j("#product_price").text().replace(/[^0-9\.\,]/g,
            "").replace(",", "").trim()) : "France" == n ? (c = 45839, g = "\u20ac", a = 0 < $j("span.old_price").length ? $j("span.sale_price").text().replace(/[^0-9\.\,]/g, "").trim() : $j("#product_price").text().replace(/[^0-9\.\,]/g, "").trim()) : "United Kingdom" == n ? (c = 3302, g = "\u00a3", a = 0 < $j("span.old_price").length ? $j("span.sale_price").text().replace(/[^0-9\.\,]/g, "").trim() : $j("#product_price").text().replace(/[^0-9\.\,]/g, "").trim()) : "Germany" == n && (c = 3302, g = "\u20ac", a = 0 < $j("span.old_price").length ? $j("span.sale_price").text().replace(/[^0-9\.\,]/g,
            "").trim() : $j("#product_price").text().replace(/[^0-9\.\,]/g, "").trim()), b = "Stylebop", d = e = $("#productInfo td span").first().text().trim()
    } catch ($b) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.gucci.com")) try {
        n = $j("#current-site a").text(), u = "", "United States" == n ? (c = 5815, g = "$", a = $j("#price").text().split(g)[1].trim()) : "Canada" == n ? (c = 43997, g = "$", a = $j("#price").text().split(g)[1].trim()) : "United Kingdom" == n ? (c = 44348, g = "\u00a3", a = $j("#price").text().split(g)[1].trim()) : "France" == n ? (c = 47449, u = "\u20ac", a = $j("#price").text().split(g)[0].replace("\u20ac",
            "").trim()) : "Deutschland" == n ? (c = 50862, g = "\u20ac", a = $j("#price").text().split(g)[1].trim()) : "Espa\u00f1a" == n ? (c = 45307, g = "\u20ac", a = $j("#price").text().split(g)[1].trim()) : "Italia" == n && (c = 45184, g = "\u20ac", a = $j("#price").text().split(g)[1].trim()), b = "Gucci", e = GUCCI.GoogleAnalytics.pageName, d = $j("#stylenum").text().trim().replace(/\s/g, "")
    } catch (ac) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("canada.frenchconnection.com")) try {
        c = 51736, a = 0 < $j("#product_price .sale_price .product_price").length ? $j("#product_price .sale_price .product_price").text().split("$")[1].replace(",",
            "").trim() : $j("#product_price").text().split("$")[1].replace(",", "").trim(), b = "French Connection", d = e = $j("#product_title").text().trim()
    } catch (bc) {
        c = 51736, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("frenchconnection")) try {
        n = $j("#country-select").text().trim(), "Country" == n ? (c = 1871, g = "$") : "UK - English" == n && (c = 3412, g = "\u00a3"), a = $j("#product_price").text().split(g)[1].replace(",", "").trim(), b = "French Connection", d = e = $j("#product_title").text().trim()
    } catch (cc) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("missselfridge")) try {
        n =
            $j(".rs_link").text(), u = "", "United States" == n ? (c = 2011, u = "$") : "United Kingdom" == n ? (c = 4589, u = "\u00a3") : "FranceFran\u00e7ais" == n ? (c = 5901, u = "\u20ac") : "GermanyDeutsch" == n ? (c = 4604, u = "\u20ac") : "Australia" == n && (c = 5870, u = "\u00a3"), a = productData.prices.now.replace(/\&pound;|&euro;|&nbsp;|$|\u00a3|\u20ac/i, "").replace("&nbsp;", "").replace(u, ""), "United States" == n && a.replace(",", ""), b = "Miss Selfridge", e = productData.name, d = productData.code
    } catch (dc) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("forwardforward") || -1 != f.indexOf("forwardbyelysewalker")) try {
        c =
            6190, a = $j(".prod_price").clone().children().remove().end().text().split("$")[1].replace(",", "").trim(), b = $j(".txt_designer a").text().trim(), d = e = $j(".txt_descr").text().trim()
    } catch (ec) {
        c = 6190, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("proenzaschouler")) try {
        c = 47776, a = 0 < $j(".special-price .price").length ? $j(".special-price .price").text().split("$")[1].replace(",", "").trim() : $j(".price").text().split("$")[1].replace(",", "").trim(), b = "Proenza Schouler", d = e = $j(".product-name").text().trim()
    } catch (fc) {
        c = 47776,
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("motelrocks")) try {
        s = $(".custom.dropdown .current").first().text().split(":")[0].trim(), "UK" == s && (c = 4562, g = "\u00a3", a = $j(".ProductPrice").text().split(g)[1].replace(",", "").trim(), b = "Motel Rocks", d = e = $j(".ProductMain h1").text().trim())
    } catch (gc) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("topman")) try {
        k = $j(".rs_link").eq(0).text().trim(), "United States" == k ? (c = 3632, g = "$") : "United Kingdom" == k ? (c = 4588, g = "\u00a3") : "France" == k ? (c = 5875, g = "\u20ac") : "Australia" == k ? (c = 43970, g = "\u00a3") :
            "Germany" == k && (c = 6369, g = "\u20ac"), a = 0 < $j(".now_price span").length ? $j(".now_price span").text().replace("\u00a3", "").replace("\u20ac", "").replace("$", "").trim() : $j(".product_price span").text().replace("\u00a3", "").replace("\u20ac", "").replace("$", "").trim(), "United States" == k && a.replace(",", ""), b = "Topman", d = e = $j("#product_tab_1 h1").text().trim()
    } catch (hc) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("dvf.com")) try {
        c = 4888, a = $j('[itemprop="price"]').text().split("$")[1].replace(",", "").trim(), b = "Diane von Furstenberg",
        d = e = $j('[itemprop="name"]').text().trim()
    } catch (ic) {
        c = 4888, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("plukka")) try {
        c = 4867, a = $j(".product_price_header strong").text().replace("US$", "").replace(",", "").trim(), b = "Plukka Designs", d = e = $j(".product_headerL h1").text().trim()
    } catch (jc) {
        c = 4867, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("feelunique.com")) try {
        c = 4948, g = $j("#select_currency").text().split(/\s/)[0].trim(), p = $j("#select_currency").text().split(/\s/)[2].trim(), a = 0 < $j(".product-detail-selection .current-price.sale").length ?
            $j(".product-detail-selection .current-price.sale").text().replace(p, "").trim() : $j(".product-detail-selection .current-price ").text().replace(p, "").trim(), b = "feelunique.com", e = $j("meta[itemprop=name]").attr("content").trim(), d = $j("input[name=p]").val()
    } catch (kc) {
        c = 4948, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.express.com")) try {
        c = 48842, a = $j('#cat-pro-con span[itemprop="price"]').text().trim(), b = "Express", d = e = btPageData.items[0].name
    } catch (lc) {
        c = 48842, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("soludos.com")) try {
        c =
            5886, a = $j("div.page-right-col div.price-box span.regular-price span.price").text().replace("$", "").trim(), b = "Soludos", d = e = $j("div.page-right-col div.product-name.clearfix h1").text().trim()
    } catch (mc) {
        c = 5886, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("lilyandlionel.com")) try {
        c = 6045, a = $j("div.price-box").text().replace(/\&pound;|&euro;|&nbsp;|$|\u00a3|\u20ac/i, "").trim(), b = "Lily and Lionel", e = $j("div.product-name").text().trim(), d = $j("div.skunumber").text().replace("Style number: ", "").trim()
    } catch (nc) {
        c = 6045,
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("shirtcity.co.uk")) try {
        c = 4845, g = "\u00a3", a = 0 < $j("div.s_price").length ? $j("div.s_price").text().replace(/\&pound;|&euro;|&nbsp;|$|\u00a3|\u20ac/i, "").trim() : $j("#product_price").text().replace(/\&pound;|&euro;|&nbsp;|$|\u00a3|\u20ac/i, "").trim(), b = "Shirtcity.co.uk", e = $j(".content h1").text().trim(), d = "undefined" != typeof product_id ? product_id : e
    } catch (oc) {
        c = 4845, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("shirtcity.dk")) try {
        c = 6184, g = "DKK", a = 0 < $j("div.s_price").length ? $j("div.s_price").text().replace(/\&pound;|&euro;|&nbsp;|$|\u00a3|\u20ac|DKK/i,
            "").trim() : $j("#product_price").text().replace(/\&pound;|&euro;|&nbsp;|$|\u00a3|\u20ac|DKK/i, "").trim(), b = "Shirtcity.dk", e = $j(".content h1").text().trim(), d = "undefined" != typeof product_id ? product_id : e
    } catch (pc) {
        c = 6184, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("modnique.com")) try {
        c = 1471, a = $j("p.priceTag span.price").text().replace("$", "").trim(), b = $j("div.line.mbm div.unit.size1of1 h2.lfloat.mrm").text().trim(), e = $j("h4.pbs").text().trim(), d = "undefined" != typeof saleId ? saleId : e
    } catch (qc) {
        c = 1471, d = b = e = "", a =
            0
    } else if (-1 != f.indexOf("www.jackrogersusa.com")) try {
        c = 43949, a = $j(".price").text().split("$")[1].trim(), b = "Jack Rogers", d = e = $j(".name").first().text().trim()
    } catch (rc) {
        c = 43949, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("maidenform.com")) try {
        c = 5811, a = 0 < $j("div.product-price p.sale-price").text().length ? $j("div.product-price p.sale-price span").text().replace("$", "").trim() : 0 < $j("div.product-price p.your-price").text().length ? $j("div.product-price p.your-price span").text().replace("$", "").trim() : $j("div.product-price p.retail-price span").text().replace("$",
            "").trim(), b = "Maidenform", e = productDetailJSON.productInfo.name, d = productDetailJSON.productInfo.partNumber
    } catch (sc) {
        c = 5811, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.lastcall.com")) try {
        c = 3752, a = 0 < $j("#lineItemsForm .lineItem .lineItemInfo .price.pos1").text().length ? $j("#lineItemsForm .lineItem .lineItemInfo .price.pos1").text().split("$")[1].replace(",", "").trim() : $j(".lineItem .lineItemData .lineItemInfo .price.pos1override").text().split("$")[1].replace(",", "").trim(), b = $j("div#cmDesignerName").text().trim(),
        d = e = $j("div#displayName").text().trim()
    } catch (tc) {
        c = 3752, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("muradcanada.com")) try {
        c = 4627, a = $("#productSpecs strong").text().replace("$", "").trim(), b = "Murad", e = $j("#slugNav a").text().trim(), d = $j("#productNoSize").html().split("<")[0].split(":")[1].trim()
    } catch (uc) {
        c = 4627, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("geneticdenim.com")) try {
        c = 52654, a = $j("span.productPrice").text().replace(/[^0-9.]/g, "").trim(), b = "Genetic Denim", e = $j("div#vmMainPage table tr:nth-child(1) td:nth-child(2) h1").text().trim(),
        d = $j("input[name=product_id]").val()
    } catch (vc) {
        c = 52654, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("chargrilled.co.uk")) try {
        c = 4751, a = $j("div.prodPrice span.price").text().replace(/[^0-9.]/g, "").trim(), b = "Chargrilled", e = $j("div#contentWrapper div.contentPadding h2").text().trim(), d = $j("input[name=id]").val()
    } catch (wc) {
        c = 4751, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.ahalife.com")) try {
        c = 6085, a = $j("div.product-price").text().replace(/[^0-9.]/g, "").trim(), b = "AHAlife Holdings Inc.", d = e = $j("h1.heading1").text().trim()
    } catch (xc) {
        c =
            6085, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("rugby.com")) try {
        c = 43964, a = 0 < $j("div.itemLevelPrice span.sale").text().length ? $j("div.itemLevelPrice span.sale").text().replace(/[^0-9.]/g, "").trim() : $j("div.itemLevelPrice span:first").text().replace(/[^0-9.]/g, "").trim(), b = "Ralph Lauren", e = rugbyItem.name, d = rugbyItem.productId
    } catch (yc) {
        c = 43964, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("asoya.com")) try {
        var A = $j("div#short_description_content div:nth-child(5)").clone().children().remove().end().text().trim(),
            H = A.substr(A.indexOf(",")),
            A = A.replace(H, ""),
            c = 4524;
        k = $j("#setCurrency li.selected").text().trim().toLowerCase();
        "usd" == k ? (l = "1", n = g = "$") : "rm" == k && (l = "2", g = "\u00a5", n = "RM");
        a = $j("span#our_price_display").text().replace(/[^0-9.]/g, "").replace(n, "").trim();
        b = A;
        e = $j("a.cart_block_product_name").text().trim();
        d = id_product
    } catch (zc) {
        c = 4524, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.coach.com")) try {
        c = 6193, a = $j(".prod_desc_container .pdTabProductPrice:first").text().replace("$", "").trim(), b = "Coach", d = e = $j(".pdTabProductTitle:first").text().trim()
    } catch (Ac) {
        c =
            6193, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("westelm.com")) try {
        c = 48947, k = $j('meta[itemprop="currency"]').attr("content"), "USD" == k ? (l = "1", cur_sy = g = "$") : "GBP" == k ? (l = "10", g = "\u00a3", cur_sy = "GBP") : "CAD" == k ? (l = "16", g = "$", cur_sy = "CAD") : "DKK" == k ? (l = "18", g = "kr", cur_sy = "DKK") : "EUR" == k ? (l = "11", g = "\u20ac", cur_sy = "EUR") : "HKD" == k && (l = "31", cur_sy = g = "HK$"), a = digitalData.product.price.selling.min, b = "west elm", d = e = $j(".pip-summary h1").first().text().trim()
    } catch (Bc) {
        c = 48947, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.davidyurman.com")) try {
        g =
            "$", c = 6222, b = CI_ItemMfr, e = CI_ItemName, a = CI_ItemPrice.replace(/[^0-9.]/g, ""), d = x.eVar15
    } catch (Cc) {
        c = 6222, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("andotherbrands.com")) try {
        j = $j("#change_country a img").attr("src").split("/")[5].trim(), "US.png" == j ? (g = "$", c = 49415, a = $j(".product_price").text().split(":")[1].replace(g, "").trim()) : "AU.png" == j ? (g = "$", c = 49415, a = $j(".product_price").text().split(":")[1].replace(g, "").trim()) : "SE.png" == j ? (g = "kr", c = 49415, a = $j(".product_price").text().split(":")[1].replace(g, "").trim()) :
            "FR.png" == j ? (g = "\u20ac", c = 49415, a = $j(".product_price").text().split("\u20ac")[0].replace(",", ".").trim()) : "DE.png" == j ? (g = "\u20ac", c = 49415, a = $j(".product_price").text().split("\u20ac")[0].replace(",", ".").trim()) : "NL.png" == j ? (g = "\u20ac", c = 49415, a = $j(".product_price").text().split(":")[1].replace(",", ".").replace(g, "").trim()) : "ES.png" == j && (g = "\u20ac", c = 49415, a = $j(".product_price").text().split(":")[1].replace(",", ".").replace(g, "").trim()), b = $j("meta[name=copyright]").attr("content").replace(/\d/g,
                "").trim(), d = e = $j("#product_title").text().trim()
    } catch (Dc) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("andotherbrands.co.uk")) try {
        g = "\u00a3", c = 49415, a = $j(".product_price").text().replace(/[^\d.]/g, "").trim(), b = $j("meta[name=copyright]").attr("content").replace(/\d/g, "").trim(), d = e = $j("#product_title").text().trim()
    } catch (Ec) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.lanebryant.com")) try {
        c = 49322, a = $j(".salePrice").length ? $j(".salePrice").text().replace("Now", "").replace("$", "") : $j(".price").text().trim().replace("$",
            ""), e = $j(".description-container h1").text().trim(), b = "Lane Bryant", d = e
    } catch (Fc) {
        c = 49322, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("plndr.com")) try {
        c = 49381, a = $j(".priceText #ctl00_MainPageContentPlaceholder_Product_Main_lblCheckoutPrice").length ? $j(".priceText #ctl00_MainPageContentPlaceholder_Product_Main_lblCheckoutPrice").text().trim().replace(",", "").replace("$", "") : $j(".priceText").text().trim().replace("$", ""), d = $j("input[name=ProductID]").val(), b = $j("#ctl00_MainPageContentPlaceholder_Product_Main_lblVendorName").text(),
        e = $j("input[name=Title]").val()
    } catch (Gc) {
        c = 49381, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("marrakechclothing.com")) try {
        g = "$", c = 6314, d = $j("div#content h3").text().split(":")[1].trim(), b = "Marrakech Clothing", e = $j('meta[property="og:title"]').attr("content"), a = $j("div.price").text().replace(/[^\d.]/g, "").trim()
    } catch (Hc) {
        c = 6314, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("shophenryandbelle.com")) try {
        if (g = "$", c = 6313, d = $j("span#stylenumber").text().trim(), b = "Henry and Belle", e = $j('meta[property="og:title"]').attr("content"),
            0 < $j("span.originalprice").length) {
            var I = $j("div.price > span").text().trim();
            $j("div.price > span").empty();
            a = $j("div.price").text().replace(/[^\d.]/g, "").trim();
            $j("div.price > span").text(I)
        } else a = $j("div.price").text().replace(/[^\d.]/g, "").trim()
    } catch (Ic) {
        c = 6313, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("aliceandolivia.com")) try {
        c = 6325, a = $j(".info .entry .price").text().split("$")[1].trim(), b = "Alice and Olivia", d = e = $j(".info .entry h3").clone().children().remove().end().text().trim()
    } catch (Jc) {
        c =
            6325, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.alexandani.com")) try {
        c = 6322, a = $j(".price-box .regular-price .price").text().split("$")[1].trim(), b = "Alex and Ani", d = e = $j(".product-shop .product-name").text().trim()
    } catch (Kc) {
        c = 6322, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.ravendenim.com")) try {
        c = 6316, a = 0 < $j(".price").length ? $j(".price").clone().children().remove().end().text().trim().replace("$", "") : $j("#content .price").text().trim().replace("$", ""), e = $j("#content h2").text().trim(), b = "Raven Denim", d =
            $j("#stylenumber").text().trim()
    } catch (Lc) {
        c = 6316, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("meringueclothing.com")) try {
        g = "$", c = 6316, d = smdColorswatch.ColorSwatchConfig.config.sku.trim(), b = $j("div.product-shop div.product-manufacturer").text().trim(), e = smdColorswatch.ColorSwatchConfig.config.name.trim(), a = Number(smdColorswatch.ColorSwatchConfig.config.final_price.trim()).toFixed(2)
    } catch (Mc) {
        c = 6316, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("samanthawills.com.au")) try {
        c = 6359, a = $j("#productDetailPrice").text().split("$")[1].replace(",",
            "").trim(), b = "Samantha Wills", d = e = $j("#productDetailHeading h3").text().trim()
    } catch (Nc) {
        c = 6359, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.samanthawills.com")) try {
        c = 6359, a = $j("#productDetailPrice").text().split("$")[1].replace(",", "").trim(), b = "Samantha Wills", d = e = $j("#productDetailHeading h3").text().trim()
    } catch (Oc) {
        c = 6359, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("bjornborg")) try {
        j = mof_base_url.split("/")[3], "se" == j ? (g = "kr", c = 5867, a = $j(".product-essential .price-box .price").first().text().split("kr")[0].replace("/[^0-9]/g",
            "").trim()) : "nl" == j ? (g = "\u20ac", c = 5980, a = $j(".product-essential .price-box .price").first().text().split("\u20ac")[1].replace(",", ".").trim()) : "us" == j && (g = "$", c = 1701, a = $j(".product-essential .price-box .price").first().text().split("$")[1].replace(",", "").trim()), b = "Bj\u00f6rn Borg", d = e = $j(".product-essential .product-shop h1").text().trim()
    } catch (Pc) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("kellywearstler.com")) try {
        c = 6317, a = $j(".salesprice").text().split("$")[1].replace(",", "").trim(), b = "Kelly Wearstler",
        d = e = $j(".productname").text().trim()
    } catch (Qc) {
        c = 6317, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("narscosmetics.com")) try {
        c = 49367, a = $j("#price").text().split("$")[1].replace(",", "").trim(), b = "NARS Cosmetics", d = e = $j("#title").text().trim()
    } catch (Rc) {
        c = 49367, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("petit-bateau.us")) try {
        c = 4526, a = $j("#UnitCostSpan").text().split("$")[1].replace(",", "").trim(), b = "Petit Bateau", e = $j(".about-box > h1").text().trim(), d = $j("#ContentPlaceHolder1_MFGSKUL").text().trim()
    } catch (Sc) {
        c = 4526,
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.cwonder.com")) try {
        c = 6083, a = $j(".prices span").last().text().split("$")[1].replace(",", "").trim(), b = "C. Wonder", d = e = $j(".product-details h2").text().trim()
    } catch (Tc) {
        c = 6083, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("whitehouseblackmarket")) try {
        c = 49391, m = $j(".sale-price"), a = 0 < m.length ? $j(".sale-price").html().trim().split("$")[1] : $j(".regular-price").html().trim().split("$")[1], b = "White House Black Market", d = e = $j("#product-name > h1").text().trim()
    } catch (Uc) {
        c = 49391,
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("austique.co.uk")) try {
        c = 3572, g = "\u00a3", m = $j(".sale-price"), a = 0 < m.length ? $j(".sale-price > .price").html().trim().split(g)[1].trim() : $j(".regular-price > .price").html().trim().split(g)[1].trim(), b = "Austique", d = e = document.getElementById("product-right").getElementsByTagName("h1")[0].innerText
    } catch (Vc) {
        c = 3572, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("avon")) try {
        c = 5903, m = $j("#divPriceDetails > #pgSalePrice"), a = 0 < m.length ? $j("#divPriceDetails > #pgSalePrice").html().trim().split("$")[1].trim() :
            $j("#divPriceDetails > #pgPrice").html().trim().split("$")[1].trim(), b = "Avon", d = e = $j("p#pgName").text().trim()
    } catch (Wc) {
        c = 5903, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.beauty.com")) try {
        c = 1731, a = $j(".prodprice.saleprice > p").text().split("$")[1].trim(), b = $j(".prodInfo > .prod > h1").first().text().trim(), d = e = $j(".prodInfo > .prod > h1").last().text().trim()
    } catch (Xc) {
        c = 1731, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("benefitcosmetics")) try {
        c = 1811, m = $j(".heroFramePrice > .heroFrameSalePriceAmt > #heroFramePriceAmt"),
        a = 0 < m.length ? $j(".heroFramePrice > .heroFrameSalePriceAmt > #heroFramePriceAmt").html().trim().split("$")[1] : $j(".heroFramePrice > #heroFramePriceAmt").html().trim().split("$")[1], b = "Benefit Cosmetics", d = e = $j("div.info > h2.heroFrame").text().trim()
    } catch (Yc) {
        c = 1811, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("astleyclarke")) try {
        n = $j("p.storeswitcher.revealhiddenstorelink > span").text(), "US & Canada Store" == n ? (g = "$", c = 6295) : (g = "\u00a3", c = 5967), m = $j(".special-price > .price"), a = 0 < m.length ? $j(".special-price > .price").html().trim().split(g)[1] :
            $j(".regular-price > .price").html().trim().split(g)[1], b = $j(".designer-name > a").attr("id"), e = $j("[itemprop=name]").text().trim(), d = $j("[itemprop=sku]").text().trim()
    } catch (Zc) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("clarks.co.uk")) try {
        g = "\u00a3", c = 4712, e = $j("#product-header .name").html().trim(), a = $j(".price").html().trim().split(g)[1], b = "Clarks", d = e
    } catch ($c) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("worldmarket")) try {
        c = 51952, a = 0 < $j(".pricesale:last").length ? $j(".pricesale:last").text().trim().split("$")[1] :
            $j(".singlePrice").text().split("$")[1].replace(",", "").trim(), b = "World Market", d = e = $j(".pdpProductInfoSection > .detailheader").text().trim()
    } catch (ad) {
        c = 51952, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("bhcosmetics")) try {
        c = 2261, a = 0 < $("div.Price").length ? $j("div.Price").clone().children(":not(span)").remove().end().text().split("$")[1] : $j("div.price").clone().children(":not(span)").remove().end().text().split("$")[1], e = $j("div.level4").text().trim(), b = "BH Cosmetics", d = e
    } catch (bd) {
        c = 2261, d = b = e = "", a = 0
    } else if (-1 !=
        f.indexOf("blissworld")) try {
        c = 1821, a = 0 < $j("#p-price-custom > span.SalePriceNow").length ? $j("#p-price-custom > .SalePriceNow").clone().children(":not(b)").remove().end().text().split("$")[1].trim() : $j("label.add-to-bag").text().split("$")[1].trim(), b = "Bliss", e = $j(".product-detail-right > .product-head-blue").text().trim(), d = $j(".product-detail-right > .product-head-small").clone().children().remove().end().text().split(":")[1].trim()
    } catch (cd) {
        c = 1821, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("bluefly")) try {
        c =
            2502, a = $j("[itemprop=price]:first").text().trim().split(" ")[0].split("$")[1].trim(), b = $j("img.current-product-image").attr("alt").split(":")[0].trim(), e = $j("img.current-product-image").attr("alt").split(":")[1].trim(), d = $j("section#main-product-detail").attr("data-product-id")
    } catch (dd) {
        c = 2502, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("bobbibrowncosmetics")) try {
        c = 5842, a = $j("meta[property='eb:price']").attr("content").split("$")[1].trim(), b = "Bobbi Brown Cosmetics", d = e = $j("meta[property='og:title']").attr("content").trim()
    } catch (ed) {
        c =
            5842, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("delias")) try {
        c = 3552, a = 0 < $j(".pricesale").length ? $j(".pricesale").text().split("$")[1].trim() : $j(".detailPrice").text().split("$")[1].trim(), b = "dELiA's", e = $j('meta[property="og:title"]').attr("content").trim(), d = $j("#ProductCode").text().trim()
    } catch (fd) {
        c = 3552, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("charlotterusse")) try {
        c = 2642, a = $j(".catalog-display-price-text.nobr").text().split("$")[1].trim(), b = "Charlotte Russe", d = e = $j(".productDetails > .item-name").text().trim()
    } catch (gd) {
        c =
            2642, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("clinique")) try {
        c = 3622, -1 != f.indexOf("com.au") ? (c = 44525, e = $j(".product-title").text().trim()) : (c = 3622, e = $j('meta[property="og:title"]').attr("content").trim()), a = $j(".attributes #price-span").text().split("$")[1].trim(), b = "Clinique", d = e
    } catch (hd) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.conair.com")) try {
        c = 1121, a = $j(".price").text().split("$")[1].trim(), b = "Conair", d = e = $j("img[src='images/buy_now.jpg']").attr("alt").trim()
    } catch (id) {
        c = 1121, d = b = e = "", a = 0
    } else if (-1 !=
        f.indexOf("www.conair-store.com")) try {
        c = 1121, a = $j(".price").text().split("$")[1].trim(), b = "Conair", d = e = $j("#itemDescText").text().trim()
    } catch (jd) {
        c = 1121, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("cosme-de")) try {
        o = $j('[name="fld_refcur"] > option:selected').attr("value"), "EUR" == o ? g = "\u20ac" : "USD" == o ? g = "$" : "AUD" == o ? g = "AU$" : "CAD" == o ? g = "CA$" : "CNY" == o ? g = "\u00a5" : "GBP" == o && (g = "\u00a3"), c = 1091, a = $j(".price_txt>:first-child").text().split(o)[1].trim(), t = window.location.pathname.split("/")[1], "en" == t ? (b = $j("#bpid > option:selected").text().trim(),
            d = $j('[class="product_name"]:contains(SKU)').text().split(":")[1].trim()) : (b = $j("#bpid > option:selected").text().trim(), d = $("td.product_name:contains(\u8d27\u53f7)").text().split(":")[1].trim()), e = $j('[itemprop="name"]').text().trim()
    } catch (kd) {
        c = 1091, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("cosmeticmall")) try {
        c = 601, a = $j('[itemprop="price"]:first').text().trim(), b = $j('[itemprop="brand"]').text().trim(), d = e = $j('[itemprop="name"]').text().trim()
    } catch (ld) {
        c = 601, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("crabtree-evelyn")) try {
        c =
            2952, a = $j("#ourPrice").text().split("$")[1].trim(), b = $j("#rightSideProduct > h3").text().trim(), e = $j("#rightSideProduct > h1").text().trim(), d = $j(".fixedDetails .valueText:first").text().trim()
    } catch (md) {
        c = 2952, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("serenaandlily")) try {
        c = 6077, a = 0 < $j(".displayPrices .sale_price").length ? $j(".displayPrices .sale_price span").text().split("$")[1].trim().replace(",", "").replace("-", "").replace("(", "").trim() : 0 < $j("#base_price").length ? $j("#base_price").text().split("$")[1].trim().replace(",",
            "").replace("-", "").replace("(", "").trim() : 0 < $j("#online_retail_price").length ? $j("#online_retail_price").text().split("$")[1].replace(",", "").replace("-", "").replace("(", "").trim() : $j(".addtoCart #itemprice").text().split("$")[1].replace("(", "").trim(), b = "Serena & Lily", d = e = $j("title").text().split("|")[0].trim()
    } catch (nd) {
        c = 6077, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("dillards")) try {
        c = 6215, a = $j("#price").text().split("-")[0].split("$")[1].trim(), b = $j('.prodShopAllBrand > [itemprop="brand"]').text().split(" ")[0].trim(),
        d = e = $j('meta[property="og:title"]').attr("content").split("|")[0].trim()
    } catch (od) {
        c = 6215, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("eyeslipsface")) try {
        c = 1081, a = $j(".product-right .info .price").text().split("$")[1].trim(), b = "e.l.f. Cosmetics", d = e = $j('[property="og:title"]').attr("content").trim()
    } catch (pd) {
        c = 1081, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("folica")) try {
        g = "$", c = 5906, a = $j('div[itemprop="price"]').text().split("$")[1].trim(), b = $j('a[itemprop="brand"]').text().trim(), e = $j('h1[itemprop="name"]').text().trim(),
        d = $j('spam[itemprop="productID"]').text().trim()
    } catch (qd) {
        c = 5906, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("glossybox.com")) try {
        c = 43921, a = $j(".product-price").text().split("$")[0].trim(), b = $j(".brand-name").text().trim(), d = e = $j(".product-name").text().trim()
    } catch (rd) {
        c = 43921, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("henribendel")) try {
        c = 6086, a = $(".salesprice").text().split("$")[1].trim(), b = "Henri Bendel", e = $j("h1.productname").text().trim(), d = pr_page_id
    } catch (sd) {
        c = 6086, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("kiehls")) try {
        c =
            4473, a = $j(".emptyswatch.selected .salesprice").text().split("$")[1].trim(), b = "Kiehl's", e = cmProductName, d = cmProductID
    } catch (td) {
        c = 4473, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("lancome")) try {
        c = 4474, a = $j(".salesprice:first").text().split("$")[1].trim(), b = "Lancome", e = cmProductName, d = cmProductID
    } catch (ud) {
        c = 4474, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("usa.loccitane.com")) try {
        c = 3282, a = $j('[itemprop="price"]').text().split("$")[1].trim(), b = "L'Occitane", e = $j('[itemprop="name"]').text().trim(), d = $j('[itemprop="productID"]').text().trim()
    } catch (vd) {
        c =
            3282, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("de.loccitane.com")) try {
        c = 47692, a = $j('[itemprop="price"]').text().split("\u20ac")[0].replace(",", ".").trim(), b = "L'Occitane", d = e = $j('[itemprop="name"]').text().trim()
    } catch (wd) {
        c = 47692, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("meetmark")) try {
        c = 5879, a = 0 < $j("#pgSalePrice").length ? $j("#pgSalePrice").text().split("$")[1].trim() : $j("#pgPrice").text().split("$")[1].trim(), b = "mark.", d = e = $j("#pgName").text().trim()
    } catch (xd) {
        c = 5879, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("murad")) try {
        c =
            4537, a = $j(".price:first").text().split("$")[1].trim(), b = "Murad", e = $j('[itemprop="name"]').text().trim(), d = $j(".product-ids").text().split("#")[1].trim()
    } catch (yd) {
        c = 4537, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("ojon")) try {
        c = 4442, a = $j(".sku_price:first").text().split("$")[1].trim(), b = "Ojon", d = e = $j("h1").text().trim()
    } catch (zd) {
        c = 4442, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("origins")) try {
        c = 3442, a = $j(".spp-cost").text().split("$")[1].trim(), b = "Origins", d = e = $j(".spp-title > a").text().trim()
    } catch (Ad) {
        c = 3442,
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("perfumania")) try {
        c = 5911, a = 0 < $j(".sale-price").length ? $j(".sale-price > span:not(.label):first").text().split("$")[1].trim() : $j(".price > span:not(.label)").text().split("$")[1].trim(), b = $("#summary-tab > p:contains(Designer)").clone().children().remove().end().text().trim(), d = e = $j("h1.product-detail").text().trim()
    } catch (Bd) {
        c = 5911, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("philosophy")) try {
        c = 1561, 0 < $j(".salesprice:first:contains($)").length ? (g = "$", a = $j(".salesprice:first").text().split("$")[1].trim()) :
            (g = "\u00a3", a = $j(".salesprice:first").text().split("\u00a3")[1].trim()), b = "philosophy", e = $j("h1.productname").text().trim(), d = pid.value
    } catch (Cd) {
        c = 1561, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("prescriptives")) try {
        c = 3462, a = $j("#price-span").text().split("$")[1].trim(), b = "Prescriptives", d = e = $j(".description-container h1").text().trim()
    } catch (Dd) {
        c = 3462, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("sallybeauty")) try {
        $j(".facebook_productdetail_like").remove(), c = 1201, a = 0 < $j("li.sale").length ? $j("li.sale > .OGspanInsert:first").text().split("$")[1].trim() :
            $j("li.regular > .OGspanInsert:first").text().split("$")[1].trim(), b = $j(".brandName a").first().text().trim(), e = $j(".productName:first").text().trim(), d = $j("#prodSpecs").clone().children().remove().end().text().split("#:")[1].trim()
    } catch (Ed) {
        c = 1201, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("sallyexpress")) try {
        c = 1201, a = $j(".pricePanel > strong").text().split("\u00a3")[1].trim(), b = $j(".characteristics").html().split("<br>")[0].split("/span>")[1].trim(0), e = $j(".product > h1").text().trim(), d = $j(".characteristics").html().split("<br>")[1].split("/span>")[1].trim(0)
    } catch (Fd) {
        c =
            1201, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("skincarerx")) try {
        c = 991, a = $j('[itemprop="price"]').text().trim(), b = $j('[itemprop="brand"]').text().trim(), e = $j('[itemprop="name"]').text().trim(), d = $j('[name="addProductID"]').attr("value")
    } catch (Gd) {
        c = 991, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("skinstore")) try {
        c = 631, a = 0 < $j(".ProductSalePrice").length ? $j(".ProductSalePrice").text().split("$")[1].trim() : $j(".ProductPrice").text().split("$")[1].trim(), b = $j(".header_h1").text().trim(), e = $j("h2.fn").text().trim(), d =
            $j(".ProductSkuContainer").text().split("#")[1].trim()
    } catch (Hd) {
        c = 631, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("smashbox")) try {
        c = 3452, a = $j(".price:first").text().split("$")[1].trim(), b = "Smashbox", d = e = $("h1").text().trim()
    } catch (Id) {
        c = 3452, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("shophorne")) try {
        c = 5838, a = 0 < $j("#pprice .productSpecialPrice").length ? $j("#pprice .productSpecialPrice").text().split("$")[1].replace(",", "").trim() : $j("#pprice").text().split("$")[1].replace(",", "").trim(), b = "HORNE", d = e = $j("meta[name=Description]").attr("content").trim()
    } catch (Jd) {
        c =
            5838, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.spalook.com")) try {
        c = 2481, a = 0 < $j("#ProductOtherPriceHyperLink").length ? $j("#ProductOtherPriceHyperLink").text().split("$")[1].trim() : $j("#ProductPriceHyperLink").text().split("$")[1].trim(), b = $j(".floatLeft>:nth-child(3)").text().trim(), e = $j("#prodTitle").text().trim(), d = $j("#order >:first").text().split("#")[1].trim()
    } catch (Kd) {
        c = 2481, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("stilacosmetics")) try {
        c = 1551, a = $j("#price > b").text().split("$")[1].trim(), b = "Stila",
        d = e = $("#title").text().trim()
    } catch (Ld) {
        c = 1551, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("tartecosmetics")) try {
        c = 4494, a = $j("#item_detailsTopInner h3").text().split("$")[1].trim(), b = "tarte", d = e = $j("#item_detailsTopInner h1").text().trim()
    } catch (Md) {
        c = 4494, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("thebodyshop-usa")) try {
        c = 6062, a = 0 < $j("#priceNew").length ? $j("#priceNew").text().split("$")[1].trim() : $j(".price.new").text().split("$")[1].trim(), b = "The Body Shop", e = $j("h1.title").text().trim(), d = $j("label[data-weight]").attr("data-weight").split("#")[4]
    } catch (Nd) {
        c =
            6062, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.thebodyshop.de")) try {
        c = 47740, a = 0 < $j("#priceNew").length ? $j("#priceNew").text().split("\u20ac")[1].trim() : $j(".price.new").text().split("\u20ac")[0].replace(",", ".").trim(), b = "The Body Shop", e = $j("h1.title").text().trim(), d = $j("label[data-weight]").attr("data-weight").split("#")[4]
    } catch (Od) {
        c = 47740, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("theperfumespot")) try {
        c = 641, a = $j(".orderFinalPrice").text().split("$")[1].trim(), b = $j(".breadcrumbs > a:nth-child(3)").text().split("brand")[1].trim(),
        e = $j(".orderItemName > h1").text().trim(), d = $j(".itemNum").clone().children().remove().end().text().split("#")[1].trim()
    } catch (Pd) {
        c = 641, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("triabeauty")) try {
        c = 1251, a = $j(".pprice").text().split("$")[1].trim(), b = "tria", d = e = $j("h1.camal_case").text().trim()
    } catch (Qd) {
        c = 1251, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.walgreens.com")) try {
        c = 43919, a = "" !== $j("#sale_amount").text().trim() ? $j("#sale_amount").text().split("$")[1].trim() : $j("#price_amount").text().split("$")[1].trim(),
        b = $j('meta[property="og:title"]').attr("content").split("\u00a0")[0].trim(), e = $j("h1").text().trim(), d = $j("#skuId").val()
    } catch (Rd) {
        c = 43919, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("missetam")) try {
        c = 43947, g = "\u20ac", a = $j(".price").clone().children("span").remove().end().text().trim().replace(" ", ","), b = "Miss Etam", e = $("h1 >*").text().trim(), d = window.location.pathname.split("/")[4]
    } catch (Sd) {
        c = 43947, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("venta-unica")) try {
        c = 43934, g = "\u20ac", a = $j('[itemprop="price"]').text().split(g)[0].trim(),
        b = "Venta-Unica", d = e = $j('[itemprop="name"]').text().trim()
    } catch (Td) {
        c = 43934, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("impressionen")) try {
        c = 43937, g = "\u20ac", a = $j(".regularPrice.sale:first").text().split(g)[1].trim(), b = "Impressionen", d = e = $j(".productInfo h1").text().trim()
    } catch (Ud) {
        c = 43937, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("olook")) try {
        c = 43938, a = 0 < $j(".price.left2").length ? $j(".price.left2").text().replace("por: R", "").replace("$", "").replace(",", ".").trim() : $j(".price").first().text().replace("R", "").replace("$",
            "").replace(",", ".").trim(), b = "Olook", d = e = $j("#product-info h1").text().trim()
    } catch (Vd) {
        c = 43938, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("dafiti.com.ar")) try {
        c = 44063, k = "ARS", a = "" !== $j("#special_price_box").text() ? $.trim($j("#special_price_box").text().split("$")[1]) : $.trim($j("#price_box").text().split("$")[1]), b = $j('[property="gr:BusinessEntity"]').text().trim(), d = e = $j('[property="gr:name"]').text().trim()
    } catch (Wd) {
        c = 44063, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("dafiti.com.br")) try {
        c = 43940, a = $j(".product-price-to").text().split("$")[1].trim(),
        b = $j(".product-title-brand").text().trim(), e = $j(".product-title-product").text().trim(), d = $j("[data-configsku]").attr("data-configsku")
    } catch (Xd) {
        c = 43940, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("chicos")) try {
        c = 43985, a = "" !== $j(".sale-price").text().trim() ? $j(".sale-price:first").text().split("$")[1].trim() : $j(".regular-price:first").text().split("$")[1].trim(), b = "Chico's", e = $j("#product-name h1").text().trim(), d = $j(".styleId:first").text().trim()
    } catch (Yd) {
        c = 43985, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("camillebeckman")) try {
        c =
            2461, a = $j("#listPrice").text().split("$")[1].trim(), b = "Camille Beckman", e = $j(".product-detail-header").text().trim(), d = $j(".product-details").text().split(":")[1].trim()
    } catch (Zd) {
        c = 2461, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.aveda.co.uk")) try {
        c = 4866, a = $j("#price-span").text().split("\u00a3")[1].trim(), b = "AVEDA", d = e = $j(".top_right div h1").text().trim()
    } catch ($d) {
        c = 4866, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.aveda.com.au")) try {
        c = 46414, a = $j("#price-span").text().split("$")[1].trim(), b = "AVEDA", d =
            e = $j(".top_right div h1").text().trim()
    } catch (ae) {
        c = 46414, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("boutine")) try {
        c = 6298, a = $j("#product_price").text().split("$")[1].trim(), b = "Boutine", d = e = $j("#product_title").text().trim()
    } catch (be) {
        c = 6298, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("dsw")) try {
        c = 49388, a = $j("#priceSelected").text().split("$")[1].trim(), b = "DSW", d = e = $j(".title").text().trim()
    } catch (ce) {
        c = 49388, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("toms.com")) try {
        c = 49247, a = $j(".price-box .regular-price .price").text().split("$")[1].replace(",",
            "").trim(), b = "Toms", e = $j(".full-title").text().trim(), d = $j(".sku").text().split(" ")[1].trim()
    } catch (de) {
        c = 49247, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.avenue.com")) try {
        c = 43917, a = 0 < $j(".salepricestyle").length ? $j(".salepricestyle:first").text().split("$")[1].trim() : $j("#current_price").text().split("$")[1].trim(), b = "Avenue", e = $j('meta[property="og:title"]').attr("content").trim(), d = productid
    } catch (ee) {
        c = 43917, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("gorjana-griffin")) try {
        c = 6301, a = $j(".product-essential .price:last").text().split("$")[1].trim(),
        b = window.location.pathname.split("/")[1], d = e = $j(".product-name h1").text().trim()
    } catch (fe) {
        c = 6301, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("utrechtart")) try {
        c = 6216, a = $.jCache.getItem("defaultItem").NowPrice.split("$")[1].trim(), b = $j(".swatchimage").attr("src").split("/")[5], e = $j("h1").text().trim(), d = $.jCache.getItem("defaultItem").Attributes[3].Values[0]
    } catch (ge) {
        c = 6216, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.jamesperse.co.uk")) try {
        c = 51E3, a = $j(".product-details .regular-price .price").text().split("\u00a3")[1].trim(),
        b = "James Perse", d = e = $j(".product-details h1").text().trim()
    } catch (he) {
        c = 51E3, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.jamesperse.com")) try {
        c = 43923, a = $j(".productdetails tbody tbody tr td").eq(2).text().split("$")[1].trim(), b = "James Perse", d = e = $j(".productitle span").text().trim()
    } catch (ie) {
        c = 43923, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("habitat.fr")) try {
        c = 45406, a = zx_amount, b = "Habitat", e = zx_fn, d = zx_identifier
    } catch (je) {
        c = 45406, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("habitat")) try {
        c = 43909, a = $j(".one_price:first").text().split("\u00a3")[1].trim(),
        b = "Habitat", e = $j('[name="keywords"]').attr("content"), d = $j("#product_code").text().trim()
    } catch (ke) {
        c = 43909, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("ashford")) try {
        c = 43918, a = $j("#pricing .highlight").text().split("$")[1].trim(), b = $j(".sameBrandProduct").text().trim(), e = $j("#product_info h1").clone().children().remove().end().text().trim(), d = productid
    } catch (le) {
        c = 43918, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("illumecandles")) try {
        c = 6326, a = 0 < $j(".detailprice .SalePrice").length ? $j(".detailprice .SalePrice").text().split("$")[1].trim() :
            $j(".detailprice").text().split("$")[1].trim(), b = "Illume", e = $j("h1").text().trim(), d = $j(".detailcontent").text().split("Item #")[1].split(/\s+/)[0]
    } catch (me) {
        c = 6326, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("guessbymarciano")) try {
        c = 2852, 0 < $j("#mbox-product-info").length ? (a = 0 < $j("#mbox-product-info .price strike").length ? $j("#mbox-product-info .price").clone().children().remove().end().text().split("$")[1].trim() : $j("#mbox-product-info .price").text().split("$")[1].trim(), e = $j(".title h1").text().trim(),
            d = $j(".styleNumber").text().split("#")[1].trim()) : (a = $j(".price").eq(0).clone().children().remove().end().text().split("$")[1].trim(), e = $j(".grpProdInfo h1 a").eq(0).text().trim(), d = $j("#styleId").val().trim()), b = "Marciano"
    } catch (ne) {
        c = 2852, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("toofaced")) try {
        c = 44233, a = 0 < $j(".SalePrice").length ? $j(".SalePrice").text().split("$")[2].trim() : $j(".productPrice").text().split("$")[1].trim(), b = "Too Faced", e = $j('[itemprop="name"]').text().trim(), d = txtProductID.value
    } catch (oe) {
        c =
            44233, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("yslbeautyus")) try {
        c = 4476, a = app.ProductCache.getPrice(), b = "Yves Saint Laurent", e = cmProductName, d = cmProductID
    } catch (pe) {
        c = 4476, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("earnestsewn")) try {
        c = 43963, a = optionsPrice.productPrice, b = "Earnest Sewn", e = $j(".product-name").text().trim(), d = optionsPrice.productId
    } catch (qe) {
        c = 43963, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.equipmentfr.com")) try {
        c = 48938, a = $j(".price").text().split("$")[1].trim(), b = "Equipment", d = e = $j("#product-title").text().trim()
    } catch (re) {
        c =
            48938, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.lauraashley.com")) try {
        c = 4556, a = "" !== $j("#atrPrice").text() ? $j("#atrPrice span:not(.per.unit,[id$=Label])").text().split("\u00a3")[1].trim() : $j("#price").clone().children().remove().end().text().split("\u00a3")[1].trim(), b = "Laura Ashley", e = $j("#tag-invtname").text().trim(), d = $j("#tag-invtref").text().trim()
    } catch (se) {
        c = 4556, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("lauraashleyusa")) try {
        c = 2292, a = $j(".productDetailPrice").text().split("$")[1].trim(), b = "Laura Ashley USA",
        e = $j("[data-cmsadmin-edit-product]").text().trim(), d = $j("[data-cmsadmin-edit-product]").attr("data-cmsadmin-edit-product").trim()
    } catch (te) {
        c = 2292, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("stylistpick.es")) try {
        c = 43981;
        g = "\u20ac";
        if ("" !== $j('[id^="old-price"]').text()) a = $j('[id^="product-price"]').text().split(g)[0].trim();
        else {
            var a = jirafe.product.price,
                J = a.split(".")[1],
                K = a.length;
            2 < J.length && (a = a.slice(0, K - 2))
        }
        b = "stylist\u2665pick";
        e = jirafe.product.name;
        d = jirafe.product.sku
    } catch (ue) {
        c = 43981, d = b = e = "",
        a = 0
    } else if (-1 != f.indexOf("tailorstore.se")) try {
        c = 43980, g = "kr", l = 15, a = "" !== $j('[itemprop="price"]').text() ? $j('[itemprop="price"]').text().split("kr")[0].replace(/[^0-9\.\,]/g, "").replace(",", ".").trim() : $j("#totalPrice").text().split("kr")[0].replace(/[^0-9\.\,]/g, "").replace(",", ".").trim(), b = "Tailor Store", d = e = $j('[itemprop="breadcrumb"]>:last').text().trim()
    } catch (ve) {
        c = 43980, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("cathkidston")) try {
        c = 4616, g = "\u00a3", a = "" !== $j(".SalePrice").text() ? $j(".SalePrice").text().split(g)[1].trim() :
            $j(".price .variantprice").text().split(g)[1].trim(), b = "Cath Kidston", e = $j("h1").text().trim(), d = $j(".sku").text().trim()
    } catch (we) {
        c = 4616, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("rebeccaminkoff") || -1 != f.indexOf("benminkoff")) try {
        c = 6224, a = optionsPrice.productPrice, b = $j(".header h1").text().trim(), e = $j(".product-name:first").text().trim(), d = optionsPrice.productId
    } catch (xe) {
        c = 6224, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("zalando")) try {
        var v = wt_zConfig.domain.split(".")[1];
        "se" == v ? (c = 5950, g = "kr") : "it" == v ? (c = 6084,
            g = "\u20ac") : "fi" == v ? (c = 6126, g = "\u20ac") : "nl" == v ? (c = 6115, g = "\u20ac") : "dk" == v ? (c = 6198, g = "kr") : "pl" == v ? (c = 43948, g = "pl") : "es" == v ? (c = 43953, g = "\u20ac") : "be" == v ? (c = 44488, g = "\u20ac") : "no" == v ? (c = 44557, g = "kr") : "co" == v ? (c = 4569, g = "\u00a3") : "fr" == v ? (c = 48877, g = "\u20ac") : "de" == v ? (c = 48277, g = "\u20ac") : "ch" == v && (c = 48283, g = "CHF");
        a = product.amount;
        b = product.brand;
        d = e = product.fn
    } catch (ye) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("mothercare")) try {
        c = 6278, g = "\u00a3", a = app.ProductCache.getPrice(), b = $j(".productbrand>a").text().trim(),
        e = app.ProductCache.displayName, d = app.ProductCache.pid
    } catch (ze) {
        c = 6278, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("berghaus")) try {
        c = 6304, g = "\u00a3", a = $j(".amount:first").text().trim(), b = "Berghaus", e = $j("h1:last").text().trim(), d = PageContext.PRODUCT_ID
    } catch (Ae) {
        c = 6304, d = b = e = "", a = 0
    } else if (-1 != location.href.indexOf("uniqlo.com/uk")) try {
        c = 4606, g = "\u00a3", a = $j(".price").text().split("\u00a3")[1].trim(), b = "Uniqlo", d = e = $j("#product-name").text().trim()
    } catch (Be) {
        c = 4606, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("heidimerrick")) try {
        c =
            44242, a = $j(".price-sale").text().split("$")[1].trim(), b = "Heidi Merrick", d = e = $j("h2").text().trim()
    } catch (Ce) {
        c = 44242, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("hudsonjeans")) try {
        c = 43959, a = g_unitcost.split("$")[1].trim(), b = "Hudson", e = utag_data.product_name, d = utag_data.product
    } catch (De) {
        c = 43959, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("betseyjohnson")) try {
        c = 43998, a = ItemGroupJSON.CurrentItem.Price, b = "Betsey Johnson", e = ItemGroupJSON.CurrentItem.Name, d = ItemGroupJSON.CurrentItem.ID
    } catch (Ee) {
        c = 43998, d = b = e = "", a = 0
    } else if (-1 !=
        f.indexOf("www.reef.com")) try {
        c = 43952, a = g_unitcost.split("$")[1].trim(), b = "Reef", e = utag_data.product_name, d = utag_data.product
    } catch (Fe) {
        c = 43952, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.monnierfreres.co.uk")) try {
        c = 6007, g = "\u00a3", a = $j(".prd-amount").text().split(g)[1].trim(), b = $j(".prd-brand").text().trim(), e = $j(".prd-name").text().trim(), d = $j('[name="sFUPID"]').val()
    } catch (Ge) {
        c = 6007, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.monnierfreres.fr")) try {
        g = "\u20ac", c = 50959, a = $j(".box-amount .prd-amount").text().split("\u20ac")[0].replace(" ",
            ",").trim(), b = "MONNIER Freres", d = e = $j(".prd-name").text().trim()
    } catch (He) {
        c = 50959, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.monnierfreres.it")) try {
        c = 50971, a = $j(".box-amount .prd-amount").text().split("\u20ac")[0].replace(" ", ",").trim(), b = "MONNIER Freres", e = $j(".prd-name").text().trim(), d = $j('[name="sFUPID"]').val(), g = "\u20ac"
    } catch (Ie) {
        c = 50971, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.monnierfreres.de")) try {
        c = 50639, a = $j(".box-amount .prd-amount").text().split("\u20ac")[0].replace(" ", ",").trim(), b =
            "MONNIER Freres", d = e = $j(".prd-name").text().trim(), g = "\u20ac"
    } catch (Je) {
        c = 50639, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.monnierfreres.com")) try {
        c = 50968, a = $j(".box-amount .prd-amount").text().split("\u20ac")[0].replace(" ", ",").trim(), b = "MONNIER Freres", d = e = $j(".prd-name").text().trim(), g = "\u20ac"
    } catch (Ke) {
        c = 50968, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.art.com")) try {
        c = 6080, a = $j("#prd-price-value span").last().text().replace(/[^0-9\,\.]/g, "").replace(",", "").trim(), b = "Art.com", d = e = $j("#prd-product-title h1").text().trim()
    } catch (Le) {
        c =
            6080, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.toast.co.uk")) try {
        c = 5985, g = "\u00a3", $j("#nowprice"), a = $j("#nowprice").text().trim().replace(",", "").replace("\u00a3", ""), b = "TOAST", d = e = $j(".productDetailTextTitle").text().trim().split("\n")[0]
    } catch (Me) {
        c = 5985, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.wefashion.nl")) try {
        c = 5923, a = $j(".priceProductRed").length ? $j(".priceProductRed").text().trim().replace(",", "").replace("\u20ac", "") : $j(".priceProduct").text().trim().replace(",", "").replace("\u20ac", ""), b =
            "WE", e = $j(".infoBox h1").text().trim(), d = $j(".article").text().split(" ")[1]
    } catch (Ne) {
        c = 5923, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.urbanoutfitters.com")) try {
        j = $j(".toggleCountry span").text().trim(), "FR" == j ? (g = "\u20ac", c = 4650, a = $j("#productDetail #prodOptions .price span").text().replace("\u20ac", "").replace(",", ".").trim(), e = $j("#prodTitle").text().trim()) : "DE" == j ? (g = "\u20ac", c = 5925, a = $j("#productDetail #prodOptions .price span").text().replace("\u20ac", "").replace(",", ".").trim(), e = $j("#prodTitle").text().trim()) :
            "ENG" == j ? (g = "\u20ac", c = 4568, a = $j(".price").text().split("\u00a3")[1].trim(), e = $j("#prodOptions h2").first().text().trim()) : (c = 47780, a = $j("#prodOptions .price span").first().text().split("$")[1].replace("\u2022", "").trim(), e = $j("#prodTitle").text().trim()), b = "URBAN OUTFITTERS", d = e
    } catch (Oe) {
        d = 0, e = "", a = 0
    } else if (-1 != f.indexOf("www.liberty.co.uk")) try {
        c = 4558, a = $j(".productprice .red #priceDiv").length ? $j(".productprice .red #priceDiv").text().trim().replace("\u20ac", "") : $j(".product_price").text().trim().replace(",",
            "").replace("\u00a3", ""), b = "LIBERTY LONDON", e = $j("#product_title").text().trim(), d = $j("#note_content_details p").text().split(" ")[2]
    } catch (Pe) {
        c = 4558, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("monoprix.fr")) try {
        c = 6284, g = "\u20ac", a = tc_vars.product_unitprice_ati, b = tc_vars.product_trademark, e = tc_vars.product_name, d = tc_vars.product_irfc
    } catch (Qe) {
        c = 6284, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("shop.mango.com")) try {
        j = $j(".pais.current_country span").first().text().trim(), "USA" == j ? (c = 5905, g = "$", a = "Sale" === $j('[id^="Form:SVFichaProducto:SVFilA:j_id1576000852_326b0b75"]').text() ||
            "SPECIAL PRICES" === $j('[id^="Form:SVFichaProducto:SVFilA:j_id1576000852_326b0b75"]').text() ? $j(".precioProducto .true").text().split("$")[1].trim() : $j(".precioProducto").text().split("$")[1].trim()) : "United Kingdom" == j ? (c = 2051, g = "\u00a3", a = "Sale" === $j('[id^="Form:SVFichaProducto:SVFilA:j_id1576000852_326b0b75"]').text() || "SPECIAL PRICES" === $j('[id^="Form:SVFichaProducto:SVFilA:j_id1576000852_326b0b75"]').text() ? $j(".precioProducto .true").text().split("\u00a3")[1].trim() : $j(".precioProducto").text().split("\u00a3")[1].trim()) :
            "Deutschland" == j ? (c = 6357, g = "\u20ac", a = $j(".ficha_precio_venta_decimal").hasClass("true") ? $j('[itemprop="price"]').text().split("\u20ac")[1].replace(",", ".").trim() : $j('[itemprop="price"]').text().replace(",", ".").replace("\u20ac", "").trim()) : "France" == j && (c = 6357, g = "\u20ac", a = $j(".ficha_precio_venta_decimal").hasClass("true") ? $j('[itemprop="price"]').text().split("\u20ac")[1].replace(",", ".").trim() : $j('[itemprop="price"]').text().replace(",", ".").replace("\u20ac", "").trim()), o = $j("#Form a span").first().text().trim(),
            "Islas Canarias" == o ? (c = 2051, g = "\u20ac", a = "REBAJAS" == $j('[id^="Form:SVFichaProducto:SVFilA:j_id1576000852_326b0b75"]').text() ? $j('[id^="Form:SVFichaProducto:panelFicha"] span[class$="Big"]').text().split("\u20ac")[1].trim() : $j('[id^="Form:SVFichaProducto:panelFicha"] span[class$="Big"]').text().split("\u20ac")[0].trim()) : "Espanya" == o ? (c = 2051, g = "\u20ac", a = "REBAJAS" == $j('[id^="Form:SVFichaProducto:SVFilA:j_id1576000852_326b0b75"]').text() ? $j('[id^="Form:SVFichaProducto:panelFicha"] span[class$="Big"]').text().split("\u20ac")[1].trim() :
                $j('[id^="Form:SVFichaProducto:panelFicha"] span[class$="Big"]').text().split("\u20ac")[0].trim()) : "Ceuta" == o ? (c = 2051, g = "\u20ac", a = "REBAJAS" == $j('[id^="Form:SVFichaProducto:SVFilA:j_id1576000852_326b0b75"]').text() ? $j('[id^="Form:SVFichaProducto:panelFicha"] span[class$="Big"]').text().split("\u20ac")[1].trim() : $j('[id^="Form:SVFichaProducto:panelFicha"] span[class$="Big"]').text().split("\u20ac")[0].trim()) : "Melilla" == o ? (c = 2051, g = "\u20ac", a = "REBAJAS" == $j('[id^="Form:SVFichaProducto:SVFilA:j_id1576000852_326b0b75"]').text() ?
                $j('[id^="Form:SVFichaProducto:panelFicha"] span[class$="Big"]').text().split("\u20ac")[1].trim() : $j('[id^="Form:SVFichaProducto:panelFicha"] span[class$="Big"]').text().split("\u20ac")[0].trim()) : "Italia" == o && (c = 2051, g = "\u20ac", a = "SALDI" == $j('[id^="Form:SVFichaProducto:SVFilA:j_id1576000852_326b0b75"]').text() ? $j('[id^="Form:SVFichaProducto:panelFicha"] span[class$="Big"]').text().split("\u20ac")[2].trim() : $j('[id^="Form:SVFichaProducto:panelFicha"] span[class$="Big"]').text().split("\u20ac")[1].trim()),
        b = "MANGO", d = e = $j(".cabecera_producto .nombreProducto").text().trim()
    } catch (Re) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.promod.it")) try {
        c = 43928, a = $j(".actuel").text().trim().replace(",", "").replace("\u20ac", ""), b = "promod", d = e = $j("#fiche_2 h1").text().trim()
    } catch (Se) {
        c = 43928, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.promod.de")) try {
        c = 5932, a = $j(".actuel").text().trim().replace("\u20ac", ""), b = "promod", d = e = $j("#fiche_2 h1").text().trim()
    } catch (Te) {
        c = 5932, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.fossil.it")) try {
        c =
            43931, a = $j(".productPrice").text().trim().replace(",", "").replace("\u20ac", ""), b = "Fossil", e = $j(".productTitle").first().text().trim(), d = $j("#productDetails .style").text().trim().split(":")[1]
    } catch (Ue) {
        c = 43931, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.fossil.de")) try {
        c = 5892, a = $j(".productPrice").text().trim().replace(",", "").replace("\u20ac", ""), b = "Fossil", e = $j(".productTitle").first().text().trim(), d = $j("#productDetails .style").text().trim().split(":")[1]
    } catch (Ve) {
        c = 5892, d = b = e = "", a = 0
    } else if (-1 !=
        f.indexOf("fr.privateoutlet.com")) try {
        c = 43926, a = $j(".price #price_incl_taxe").text().trim().replace("\u20ac", ""), b = "PRIVATE OUTLET", d = e = $j("#titleficheproduit h2").first().text().trim()
    } catch (We) {
        c = 43926, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.surlatable.com")) try {
        c = 49385, a = $j(".pricing .sale").length ? $j(".pricing .sale").text().trim().split("$")[1].replace(",", "").replace("$", "") : $j(".price").first().text().trim().replace(",", "").replace("$", ""), b = "Sur la table", d = e = $j("#primary h1").text().trim()
    } catch (Xe) {
        c =
            49385, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.inhabitny.com")) try {
        c = 47704, a = $j("#price .originalprice").length ? $j("#productform .price").clone().children().remove().end().text().trim().replace(",", "").replace("$", "") : $j("#productform .price").text().trim().replace(",", "").replace("$", ""), b = "INHABIT", d = e = $j("#productform h1").text().trim()
    } catch (Ye) {
        c = 47704, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.kiabi.com")) try {
        c = 43932, a = $j(".cadre .salePrice.price.grey .ent").text().replace(",", ".").trim() + $j(".cadre .salePrice.price.grey .dec").text().split("\u20ac")[0].trim(),
        b = "KIABI", e = $j("h1").first().text().trim(), d = $j(".plusdedetails span").text().trim()
    } catch (Ze) {
        c = 43932, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("de.monsoon.co.uk")) try {
        c = 43932, a = $j(".productDetail_big_nowprice").text().trim().replace("\u20ac", ""), b = "MONSOON", e = $j(".productDetail_name_and_description h1").text().trim(), d = $j(".productCode").text().trim()
    } catch ($e) {
        c = 43932, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.evans.co.uk")) try {
        c = 4894, a = $j(".now_price span").first().text().trim().replace("\u00a3", ""), b =
            "EVANS", d = e = $j("#product_tab_1 h1").text().trim()
    } catch (af) {
        c = 4894, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.clarinsusa.com")) try {
        c = 4499, a = $j(".salesprice").first().text().trim().replace(",", "").replace("$", ""), b = "CLARINS", d = e = $j(".productname").text().trim()
    } catch (bf) {
        c = 4499, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.clarins.co.uk")) try {
        c = 4602, a = $j(".salesprice").first().text().trim().replace(",", "").replace("\u00a3", ""), b = "CLARINS", d = e = $j(".productdetailcolumn h1").text().trim()
    } catch (cf) {
        c = 4602, d = b =
            e = "", a = 0
    } else if (-1 != f.indexOf("www.potterybarnkids.com")) try {
        c = 49359, k = $j(".intl-flag-21").eq(0).attr("src").split("/")[12].split(".")[0].toLowerCase(), "us" == k ? (l = "1", g = "$") : "gb" == k ? (l = "10", g = "\u00a3") : "au" == k ? (l = "8", g = "$") : "ca" == k ? (l = "16", g = "$") : "dk" == k ? (l = "18", g = "kr") : "fr" == k ? (l = "11", g = "\u20ac") : "de" == k ? (l = "11", g = "\u20ac") : "it" == k ? (l = "11", g = "\u20ac") : "nl" == k ? (l = "11", g = "\u20ac") : "es" == k ? (l = "11", g = "\u20ac") : "hk" == k && (l = "31", g = "HK$"), a = $j(".subset-pricing .product-price .price-amount").first().text().trim(),
        b = "pottery barn kids", d = e = $j(".pip-summary h1").text().trim()
    } catch (df) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.childrensplace.com")) try {
        c = 5818, k = $j("#countryImage").eq(0).attr("src").split("/"), k = k[k.length - 1].split(".")[0].toLowerCase(), "us" == k ? (l = "1", n = g = "$") : "au" == k ? (l = "8", g = "$", n = "AUD") : "cn" == k ? (l = "2", g = "\u00a5", n = "CNY") : "fr" == k ? (l = "11", g = "\u20ac", n = "EUR") : "de" == k ? (l = "11", g = "\u20ac", n = "EUR") : "hk" == k ? (l = "31", g = "HK$", n = "HKD") : "gb" == k && (l = "10", g = "\u00a3", n = "GBP"), $j(".sale-alert-wrapper").length ?
            a = $j(".sale-alert-wrapper span").first().text().split(n)[1].trim() : $(".price_wrapper .sale_price").length ? a = $j("#product_info p .sale_price").first().text().trim().replace(",", "").replace(n, "") : $("#product_info p").length && (a = $j("#product_info p").first().text().trim().replace(",", "").replace(n, "")), b = "The Children's Place", d = e = $j("#product_info h2").text().trim()
    } catch (ef) {
        c = 5818, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.brownsfashion.com")) try {
        c = 6038, a = $j(".p_p.currUpdate .currency-value").last().text().replace(",",
            "").trim(), b = "Browns", d = e = $j(".product-manufacturer-name.fontFuturaWeight").text().trim()
    } catch (ff) {
        c = 6038, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.shoplesnouvelles.com")) try {
        c = 2582, a = $j(".priceNow").length ? $j(".priceNow").text().trim().replace(",", "").replace("$", "") : $j(".regular-price").first().text().trim().replace(",", "").replace("$", ""), b = "LES NOUVELLES", d = e = $j(".product-name h1").text().trim()
    } catch (gf) {
        c = 2582, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.rag-bone.com")) try {
        c = 45682, a = $j(".prod-price #UnitCostSpan").length ?
            $j(".prod-price #UnitCostSpan").first().text().trim().replace(",", "").replace("$", "") : $j(".prod-price").first().text().trim().replace(",", "").replace("$", ""), b = "rag & bone", e = $j(".product-details-area p").first().text().trim(), d = $j("#ContentPlaceHolder1_MFGSKUL").text().trim()
    } catch (hf) {
        c = 45682, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.harrods.com")) try {
        c = 5989, a = $j(".price_all").first().text().trim().replace(",", "").replace("\u00a3", ""), b = "Harrods", e = $j(".f_left .fn").first().text().trim(), d = $j(".price_pcode").text().trim().split("Code")[1]
    } catch (jf) {
        c =
            5989, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("zenmed.com")) try {
        c = 1421, a = $j(".price").eq(0).text().replace(",", "").split("$")[1], b = "ZENMED", d = e = $j(".product h2").first().text()
    } catch (kf) {
        c = 1421, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.dollhouse.com")) try {
        c = 6321, a = $j(".price").length ? $j(".price").clone().children().remove().end().text().trim().replace(",", "").replace("$", "") : $j(".price").first().text().trim().replace(",", "").replace("$", ""), b = "dollhouse", d = e = $j(".zone.zone-productcontent h2").text().trim()
    } catch (lf) {
        c =
            6321, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.sassanova.com")) try {
        c = 6318, a = $j(".price").length ? $j(".price").clone().children().remove().end().text().trim().replace("$", "") : $j(".price").first().text().trim().replace(",", "").replace("$", ""), b = "sassanova", d = e = $j(".backforwardbuttons h2").text().trim()
    } catch (mf) {
        c = 6318, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.horchow.com")) try {
        c = 3252, a = 0 < $j(".lineItemInfo .price.pos1override").length ? $j(".lineItemInfo .price.pos1override").first().text().trim().replace("$",
            "") : 0 < $j(".lineItemInfo span").length ? $j(".lineItemInfo span").first().text().trim().replace("$", "") : $j("div.price.pos1").text().trim().replace("$", ""), b = "HORCHOW", d = e = $j("div#productDetails h1").clone().children().remove().end().text().trim()
    } catch (nf) {
        c = 3252, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("stelladot")) try {
        c = 44142, a = $j("#sale_price_label").length ? $j("#sale_price_label").text().trim().replace(",", "").replace("$", "").replace("Sale", "") : $j("#main_price_label").first().text().trim().replace("$",
            ""), b = "stella & dot", d = e = $j("#pdp_add_to_bag_form h2").text().trim()
    } catch (of) {
        c = 44142, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.fossil.com")) try {
        c = 691, a = $j(".price .salePrice").text().trim().length ? $j("#productPrice .price .salePrice").text().split("$")[1].trim() : $j("#productPrice .price .listPrice").text().split("$")[1].trim(), b = "FOSSIL", d = e = $j("#productName").text().trim()
    } catch (pf) {
        c = 691, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.thecorner.com.cn")) try {
        c = 44341, a = $j(".newprice").text().split("$")[1].trim(),
        b = $j("h2").text().trim(), d = e = $j(".typeSeason").find("a").text().trim(), g = "$"
    } catch (qf) {
        c = 44341, d = b = e = "", a = 0
    } else if (-1 != location.href.indexOf("www.thecorner.com/us")) try {
        c = 44341, a = $j(".newprice").text().split("$")[1].trim(), b = $j("h2").text().trim(), d = e = $j(".typeSeason").find("a").text().trim(), g = "$"
    } catch (rf) {
        c = 44341, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.zulily.com")) try {
        c = 46516, a = $j(".price").length ? $j(".price").text().trim().replace(",", "").replace("$", "") : $j(".price").text().trim().replace("$",
            "").replace(",", ""), b = "zulily", d = e = $j("#product-info h2").text().trim()
    } catch (sf) {
        c = 46516, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.bareescentuals.com")) try {
        c = 44058, a = $j(".be_price").first().text().split("$")[1].trim().replace("$", "").replace(",", ""), b = "Bare Escentuals", d = e = $j(".main_product_header #productname h1").first().text().trim()
    } catch (tf) {
        c = 44058, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.skechers.co.uk")) try {
        c = 49080, a = $j("#price").text().trim().replace("\u00a3", "").replace(",", ""), b = "SKECHERS",
        d = e = $j("#productTitle").first().text().trim()
    } catch (uf) {
        c = 49080, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.wetseal.com")) try {
        c = 44061, a = $j("#now-price-text").length ? $j("#now-price-text").text().trim().replace(",", "").replace("$", "").replace("Now", "") : $j("#regular-price-text").text().trim().replace("$", "").replace(",", ""), b = "wet seal", d = e = $j("#product-detail-name").text().trim()
    } catch (vf) {
        c = 44061, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.superdry.it")) try {
        c = 44062, a = $j(".price").text().trim().replace("$",
            "").replace(",", ""), b = "Superdry.", e = $j(".hproduct.product-detail h1").text().trim(), d = $j('[name="product_id"]').val()
    } catch (wf) {
        c = 44062, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.superdry.fi")) try {
        c = 46333, g = "$", a = $j(".price").text().trim().replace("$", "").replace(",", ""), b = "Superdry.", e = $j(".hproduct.product-detail h1").text().trim(), d = $j('[name="product_id"]').val()
    } catch (xf) {
        c = 46333, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.superdrystore.se")) try {
        c = 46330, g = "$", a = $j(".price").text().trim().replace("$",
            "").replace(",", ""), b = "Superdry.", e = $j(".hproduct.product-detail h1").text().trim(), d = $j('[name="product_id"]').val()
    } catch (yf) {
        c = 46330, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.sarenza.com")) try {
        c = 44064, a = $j(".price strong").length ? $j(".price strong").text().split("de")[1].replace("\u20ac", "").trim().replace(",", ".") : $j(".price").text().trim().replace("\u20ac", "").replace(",", "."), b = "sarenza", d = e = $j(".contentProduct h1 span").last().text().trim()
    } catch (zf) {
        c = 44064, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("shop.guess.com")) try {
        c =
            49517, a = $j(".price strike").length ? $j(".price").text().trim().split("$")[2] : $j(".price").text().trim().replace("$", ""), b = "GUESS", d = e = $j(".productTitleDet .title").text().trim()
    } catch (Af) {
        c = 49517, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.annascholz.com")) try {
        c = 6218, k = $j(".currency .active").text().trim(), "$" == k ? g = "$" : "\u00a3" == k ? g = "\u00a3" : "\u20ac" == k && (g = "\u20ac"), a = $j(".price").last().text().trim().replace("$", "").replace("\u00a3", "").replace("\u20ac", ""), b = "anna scholtz", d = e = $j(".details_top-right h2").first().text().trim()
    } catch (Bf) {
        c =
            6218, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.barenecessities.com")) try {
        c = 43915, a = $j("#ctl00_cphMainContent_spanOurPrice").text().trim().replace("$", ""), b = "bare necessities", e = $j("#ctl00_cphMainContent_productName").text().trim().split("Add")[0], d = BN_PageData.PageContext.Product.ProductID
    } catch (Cf) {
        c = 43915, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.fragrancenet.com")) try {
        c = 43914, k = $j("#currency span.currency.active"), k.hasClass("currencyUS") ? g = "$" : k.hasClass("currencyUK") && (g = "\u00a3"), a = $j(".pop_price.sale span").text().trim().replace("$",
            "").replace("GBP\u00a3", ""), b = "FragranceNet", e = $j("#product_pop_title").text().trim(), d = $j(".prodInfo.clear .col1black").text().trim().split("#")[1]
    } catch (Df) {
        c = 43914, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.tibi.com")) try {
        c = 44411, a = $j(".product-essential .special-price .price").length ? $j(".product-essential .special-price .price").text().trim().replace("$", "") : $j(".product-essential .regular-price .price").first().text().trim().replace("$", ""), b = "tibi", d = e = $j(".product-name h1").text().trim()
    } catch (Ef) {
        c =
            44411, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.rothschildkids.com")) try {
        c = 43950, a = $j(".desc-price .priceNew").length ? $j(".desc-price .priceNew").text().split("Now")[1].trim().replace("$", "") : $j(".desc-price").text().trim().replace("$", ""), b = "rothschildkids", e = $j("#product-desc h1").text().trim(), d = $j(".desc-style").text().trim()
    } catch (Ff) {
        c = 43950, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.nicolemiller.com")) try {
        c = 44221, a = $j(".product-shop .price").text().split("$")[1].replace(",", "").trim(), b = "nicole miller",
        d = e = $j(".product-shop .product-name h1").text().replace("Add to Favorites", "").trim()
    } catch (Gf) {
        c = 44221, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.tartcollections.com")) try {
        c = 43951, a = $j(".price-box .special-price .price").length ? $j(".price-box .special-price .price").first().text().trim().replace("$", "") : $j(".price-box .regular-price .price").first().text().trim().replace("$", ""), b = "TART COLLECTIONS", d = e = $j(".product-name h1").text().trim()
    } catch (Hf) {
        c = 43951, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.truereligionbrandjeans.com")) try {
        k =
            "$", c = 5914, a = $j(".price.float-left span span").length ? $j(".price.float-left span span").first().text().split("$")[1].trim() : $j("#ContentPlaceHolder1_UnitCost #UnitCostSpan").text().split("$")[1].trim(), b = "TRUE RELIGION", d = e = $j(".box h2 #ContentPlaceHolder1_OutfitName").length ? $j(".modelName a").first().text().trim() : $j("#ContentPlaceHolder1_ModelName").first().text().trim()
    } catch (If) {
        c = 5914, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.katesomerville.com")) try {
        c = 4959, a = $j(".label-radio-configurable b").length ?
            $j(".label-radio-configurable b").first().text().trim().replace("$", "") : $j(".price").first().text().trim().replace("$", ""), b = "Kate Somerville", d = e = $j(".product-detail-heading h2").text().trim()
    } catch (Jf) {
        c = 4959, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.kellywearstler.com")) try {
        c = 6317, a = $j(".product_price span").text().trim().replace("$", ""), b = "kelly wearstler", d = e = $j(".productname").text().trim()
    } catch (Kf) {
        c = 6317, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("halens.cz")) try {
        c = 43971, g = "CZK", a = $j(".main .price").hasClass("not-discounted") ?
            $j(".price-place-holder").text().replace("K\u010d", "").trim() : $j(".price-place-holder span span").text().replace(/[^0-9\.\,]/g, "").trim(), b = "halens", d = e = $j("h1").text().trim()
    } catch (Lf) {
        c = 43971, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("halens.fi")) try {
        c = 47440, g = "\u20ac", a = $j(".main .price").hasClass("not-discounted") ? $j(".price-place-holder").text().replace("Alk.", "").replace(/[^0-9\.\,]/g, "").replace(",", ".").trim() : $j(".price-place-holder span span").text().replace("Alk.", "").replace(/[^0-9\.\,]/g, "").replace(",",
            ".").trim(), b = "halens", d = e = $j("h1").text().trim()
    } catch (Mf) {
        c = 47440, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("halens.se")) try {
        c = 45139, g = "kr", a = $j(".main .price").hasClass("not-discounted") ? $j(".price-place-holder").text().replace(/[^0-9\.\,]/g, "").trim() : $j(".price-place-holder span span").text().replace(/[^0-9\.\,]/g, "").trim(), b = "halens", d = e = $j("h1").text().trim()
    } catch (Nf) {
        c = 45139, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("fab.nl")) try {
        c = 43973, a = $j(".prodBuyList .price").text().trim().replace("\u20ac", ""),
        b = "fab.", d = e = $j(".product-name h1").text().trim(), g = "\u20ac"
    } catch (Of) {
        c = 43973, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("eu.fab.com")) try {
        c = 45442, a = $j(".prodBuyList .fabPrice").first().text().split("\u20ac")[0].trim(), b = "fab.", d = e = $j(".prodInfoBlock.poRel h1").text().trim(), g = "\u20ac"
    } catch (Pf) {
        c = 45442, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("fab.com")) try {
        c = 45833, a = $j(".prodBuyList .fabPrice").first().text().split("$")[1].replace("fab", "").trim(), b = "fab.", d = e = $j(".prodInfoBlock.poRel h1").text().trim()
    } catch (Qf) {
        c =
            45833, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.vypredaj24.sk")) try {
        c = 43974, a = $j(".preis").first().text().trim().replace("\u20ac", ""), b = "vypredaj24", d = e = $j(".produktteaser h1").text().trim()
    } catch (Rf) {
        c = 43974, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.superdry.nl")) try {
        c = 43977, a = $j(".price").text().trim().replace("$", ""), b = "Superdry.", d = e = $j(".fn").text().trim()
    } catch (Sf) {
        c = 43977, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.superdry.be")) try {
        c = 43978, a = $j(".price").text().trim().replace("$", ""), b = "Superdry.",
        d = e = $j(".fn").text().trim()
    } catch (Tf) {
        c = 43978, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.superdry.de")) try {
        c = 6201, a = $j(".price").text().trim().replace("$", ""), b = "Superdry.", d = e = $j(".fn").text().trim()
    } catch (Uf) {
        c = 6201, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("be.tommy.com")) try {
        c = 5977, a = $j(".salesprice.sales-price").text().trim().replace("\u20ac", ""), b = "TOMMY HILFIGER", d = e = $j(".productname").first().text().trim()
    } catch (Vf) {
        c = 5977, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("nl.tommy.com")) try {
        c = 44560, a = $j(".variantContent .salesprice").text().split("\u20ac")[1].replace(",",
            ".").trim(), b = "TOMMY HILFIGER", e = $j(".productName h2").text().trim(), d = $j(".productid").text().split(":")[1].trim()
    } catch (Wf) {
        c = 44560, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("es.tommy.com")) try {
        c = 44575, a = $j(".salesprice.sales-price").first().text().replace("\u20ac", "").replace(",", "").trim(), b = "TOMMY HILFIGER", d = e = $j(".productname").first().text().trim()
    } catch (Xf) {
        c = 44575, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("de.tommy.com")) try {
        c = 44578, a = $j(".salesprice.sales-price").first().text().split("\u20ac")[0].replace(",",
            ".").trim(), b = "TOMMY HILFIGER", d = e = $j(".productname").first().text().trim()
    } catch (Yf) {
        c = 44578, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("at.tommy.com")) try {
        c = 44581, a = $j(".salesprice.sales-price").first().text().split("\u20ac")[0].replace(",", ".").trim(), b = "TOMMY HILFIGER", d = e = $j(".productname").first().text().trim()
    } catch (Zf) {
        c = 44581, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.c-and-a.com")) try {
        c = 44343, a = $j(".sale").length ? $j(".sale").text().replace("\u20ac", "").replace(",", ".").trim() : $j(".regular").first().text().replace("\u20ac",
            "").replace(",", ".").trim(), b = "C&A", d = e = $j(".name").text().trim()
    } catch ($f) {
        c = 44343, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.welikefashion.com")) try {
        c = 6095, a = $j(".price font b").length ? $j(".price").first().clone().children().remove().end().text().split("\u20ac")[1].trim() : $j(".price").first().text().replace("\u20ac", "").trim(), b = "WELIKEFASHION.COM", d = e = $j(".productname").first().text().trim()
    } catch (ag) {
        c = 6095, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.crane.com")) try {
        c = 3612, a = $j("#saleprice").length ?
            $j("#saleprice").text().trim() : $j("#price").text().trim(), b = "CRANE & CO", e = $j(".right_content h1").first().text().trim(), d = $j("#product_sku").text().trim()
    } catch (bg) {
        c = 3612, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.sojeans.be")) try {
        c = 44208, g = "\u20ac", a = $j(".price del").length ? $j(".price").text().split("\u20ac")[1].replace("\u20ac", "").trim() : $j(".price").text().replace("\u20ac", "").trim(), b = "SoJeans", e = $j(".sk-productInfos strong").first().text().trim(), d = $j(".tab-content .grd-unit").text().split(":")[2].trim()
    } catch (cg) {
        c =
            44208, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.sojeans.nl")) try {
        c = 44208, g = "\u20ac", a = $j(".price del").length ? $j(".price").text().split("\u20ac")[1].replace("\u20ac", "").trim() : $j(".price").text().replace("\u20ac", "").trim(), b = "SoJeans", e = $j(".sk-productInfos strong").first().text().trim(), d = $j(".tab-content .grd-unit").text().split(":")[2].trim()
    } catch (dg) {
        c = 44208, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.sojeans.de")) try {
        c = 44209, g = "\u20ac", a = $j(".price del").length ? $j(".price").text().split("\u20ac")[1].replace("\u20ac",
            "").trim() : $j(".price").text().replace("\u20ac", "").trim(), b = "SoJeans", e = $j(".sk-productInfos strong").first().text().trim(), d = $j(".tab-content .grd-unit").text().split(":")[2].trim()
    } catch (eg) {
        c = 44209, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.sojeans.es")) try {
        c = 44587, g = "\u20ac", $j(".price del"), a = $j(".price").text().split("\u20ac")[0].trim(), b = "SoJeans", d = e = $j(".sk-productInfos strong").first().text().trim()
    } catch (fg) {
        c = 44587, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.sojeans.co.uk")) try {
        c = 4813, g = "\u00a3",
        a = $j(".price del").length ? $j(".price").text().split("\u00a3")[1].replace("\u00a3", "").trim() : $j(".price").text().replace("\u00a3", "").trim(), b = "SoJeans", e = $j(".sk-productInfos strong").first().text().trim(), d = $j(".tab-content .grd-unit").text().split(":")[2].trim()
    } catch (gg) {
        c = 4813, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("ferragamo")) try {
        j = $(".titleFooter").eq(0).text(), "United States" == j ? (g = "$", c = 43927) : "Canada" == j ? (g = "$", c = 43930) : "Europe" == j && (g = "\u20ac", c = 46022), a = $j(".price").text().split(" ")[1].replace(",",
            "").trim(), b = "Ferragamo", e = $j(".titleProd").first().text().replace("*", "").trim(), d = $j(".supTitleProd").text().split("-")[0].trim()
    } catch (hg) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("collectivehabit")) try {
        g = "$", c = 44504, a = $j(".price").last().text().replace(",", "").replace("$", "").trim(), b = $j(".data").first().text(), e = $j(".product-name h1").first().text().trim(), d = $j(".product-ids").text().split("#")[1].trim()
    } catch (ig) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.assem.nl")) try {
        c = 44491, g = "\u20ac", a = zx_amount,
        b = zx_brand, e = zx_description, d = zx_identifier
    } catch (jg) {
        c = 44491, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.hunkemoller.be")) try {
        c = 44494, a = $j(".price").first().attr("data-price").replace("00", ""), b = "hunkemoller", d = e = $j(".productInfo h1").first().text().trim()
    } catch (kg) {
        c = 44494, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.castaluna.be")) try {
        c = 44497, a = $j("#ctl00_cphMain_ctl00_lblPrice").text().replace("\u20ac", "").replace(",", ".").trim(), b = "CASTALUNA", d = e = $j("#ctl00_cphMain_ctl00_litProductTitle").text().trim()
    } catch (lg) {
        c =
            44497, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.castaluna.fr")) try {
        c = 44015, a = $j("#ctl00_cphMain_ctl00_lblPrice").text().replace("\u20ac", "").replace(",", ".").trim(), b = "CASTALUNA", d = e = $j("#ctl00_cphMain_ctl00_litProductTitle").text().trim()
    } catch (mg) {
        c = 44015, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.castaluna.se")) try {
        c = 45181, a = $j("#ctl00_cphMain_ctl00_lblPrice").text().replace("kr", "").replace(" ", "").trim(), b = "CASTALUNA", d = e = $j("#ctl00_cphMain_ctl00_litProductTitle").text().trim()
    } catch (ng) {
        c = 45181,
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.outlet-avenue.be")) try {
        c = 44344, a = $j("#rightmiddle h2").first().text().split("\u20ac")[0].replace("\u20ac", "").trim(), b = "OUTLET-AVENUE", d = e = $j("#righttop h3").first().text().trim()
    } catch (og) {
        c = 44344, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("us.jimmychoo.com")) try {
        c = 44468, a = $j(".pricing .price h2").first().text().replace("$", "").trim().replace(",", ""), b = "JIMMY CHOO", d = e = $j(".product-detail-main .productname").text().trim()
    } catch (pg) {
        c = 44468, d = b = e = "", a = 0
    } else if (-1 !=
        f.indexOf("www.jimmychoo.com")) try {
        c = 44360, a = $j(".pricing .price h2").first().text().replace("\u00a3", "").trim().replace(",", ""), b = "JIMMY CHOO", d = e = $j(".product-detail-main .productname").text().trim()
    } catch (qg) {
        c = 44360, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.helmutlang.com")) try {
        c = 43957, a = $j(".salesprice").first().text().replace("$", "").trim(), b = "HELMUT LANG", d = e = $j(".hl_productSummaryTitle.productname").text().trim()
    } catch (rg) {
        c = 43957, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.lineapelle.com")) try {
        c =
            1141, sale = $j(".special-price .price").text().replace("$", "").trim(), regu = $j(".regular-price .price").text().replace("$", "").trim(), a = 0 === sale.length ? regu : sale, b = "linea pelle", d = e = $j(".product-name h1").first().text().trim()
    } catch (sg) {
        c = 1141, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.mcgregor.be")) try {
        c = 44551, a = $j(".price").text().split("\u20ac")[2].trim(), b = "McGregor", d = e = $j(".product-name h2").text().trim()
    } catch (tg) {
        c = 44551, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.3suisses.be")) try {
        c = 6059, a = $j(".prod-info-price-det .prod-info-price-reduc").length ?
            $j(".prod-info-price-det .prod-info-price-value").text().replace("\u20ac", "").trim() : $j(".prod-info-price-det ..prod-info-price-value").text().replace("\u20ac", "").trim(), b = "3 SUiSSeS", d = e = $j(".prod-info-title span").first().text().trim()
    } catch (ug) {
        c = 6059, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.3suisses.fr")) try {
        c = 44247, a = $j(".priceInfos span").first().text().replace(",", ".").trim() + $j(".priceFormat .decimal").first().text().trim(), b = "3 SUiSSeS", d = e = $j(".Cright h1").first().text().trim()
    } catch (vg) {
        c =
            44247, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.daxon.be")) try {
        c = 6061, a = $j(".memo_fp_prix_final").first().text().replace("\u20ac", ".").trim(), b = "Daxon", d = e = $j(".smooth-scroll").text().trim()
    } catch (wg) {
        c = 6061, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.laredoute.be")) try {
        c = 5948, $j(".divPrice mainCol1 #ctl00_cphMain_ctl00_lblPrice"), a = $j("#ctl00_cphMain_ctl00_lblPrice").first().text().replace("\u20ac", "").trim(), b = "LA REDOUTE", d = e = $j(".divProductSelection h1").text().trim()
    } catch (xg) {
        c = 5948, d = b = e = "", a = 0
    } else if (-1 !=
        f.indexOf("laredoute")) try {
        c = 4575, a = $j(".divPrice.mainCol1 #cphMain_ctl00_lblPrice").length ? $j("#cphMain_ctl00_lblPrice").text().replace(",", ".").replace("\u20ac", "").trim() : $j("#ctl00_cphMain_ctl00_lblPrice").length ? $j("#ctl00_cphMain_ctl00_lblPrice").first().text().replace(",", ".").replace("\u20ac", " ").trim() : $j("#MainContentAreaPlaceHolder_MainContentAreaPlaceHolder_ProductInfo_rptrProductDetails_ListPriceMinimum_0 strong").text().replace(",", ".").replace("\u20ac", "").trim(), b = "LA REDOUTE", d =
            e = $j(".divProductSelection h1").text().trim(), g = "\u20ac"
    } catch (yg) {
        c = 4575, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.romwe.com")) try {
        c = 44140, k = $j("#header select option:selected").text(), "US Dollar" == k ? g = "$" : "Euro" == k ? g = "\u20ac" : "GB Pound" == k ? g = "\u00a3" : "CNY" == k && (g = "\uffe5"), a = $j("#product_details .normalprice").length ? $j(".productSpecialPrice").text().replace("$", "").replace("\u20ac", "").replace("\u00a3", "").replace("\uffe5", "").trim() : $j(".productSalePrice").first().text().replace("$", "").replace("\u20ac",
            "").replace("\u00a3", "").replace("\uffe5", "").trim(), b = "ROMWE", d = e = $j("#product_details h2").first().text().trim()
    } catch (zg) {
        c = 44140, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.joie.com")) try {
        c = 4542, a = $j("#product-view-price .price").last().text().split("$")[1].replace(",", "").trim(), b = "JOIE", d = e = $j("#product-view-inner-left h1").first().text().trim()
    } catch (Ag) {
        c = 4542, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.onekingslane.com")) try {
        c = 44138, a = $j(".oklPrice").first().text().replace("$", "").trim(), b = "ONE KINGS LANE",
        d = e = $j("h1").text().split("Lane")[1].trim()
    } catch (Bg) {
        c = 44138, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.zhush.com")) try {
        c = 44337, a = $j(".pricecolor.colors_productprice span").text().replace("$", "").trim(), b = "zhush", d = e = $j(".productnamecolorLARGE.colors_productname span").first().text().trim()
    } catch (Cg) {
        c = 44337, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.madamrage.com")) try {
        c = 43958, g = $j(".ProductPrice.VariationProductPrice").text().charAt(0), a = $j(".ProductPrice.VariationProductPrice").text().replace("$", "").replace("\u20ac",
            "").replace("\u00a3", "").trim(), b = "MADAM Rage", d = e = $j(".ProductDetailsProdName").text().trim()
    } catch (Dg) {
        c = 43958, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.suitableshop.be")) try {
        c = 43979, a = $j(".productSpecialPrice").length ? $j(".productSpecialPrice").first().text().replace("\u20ac", "").trim() : $j("#price").first().text().replace("\u20ac", "").trim(), b = "SUITABLE", d = e = $j("#product_info_description h1").first().text().trim()
    } catch (Eg) {
        c = 43979, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.naturepedic.com")) try {
        c =
            6217, a = $j(".listdetail2 option").first().text().split("$")[1].trim(), b = "naturepedic", d = e = $j(".listdetail2 option").first().text().split("-")[0].trim()
    } catch (Fg) {
        c = 6217, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.etam.com")) try {
        c = 5955, a = $j(".special-price .price").length ? $j(".special-price .price").first().text().replace("\u20ac", "").trim() : $j(".price").first().text().replace("\u20ac", "").trim(), b = "Etam", d = e = $j(".product-name h1 .short").first().text().trim()
    } catch (Gg) {
        c = 5955, d = b = e = "", a = 0
    } else if (-1 !=
        f.indexOf("www.agentprovocateur.com")) try {
        c = 5907, a = $j(".productContent .price").text().replace("$", "").trim(), b = "agent provocateur", a = $j(".productContent h1").text().trim(), d = x.products.replace(";", "")
    } catch (Hg) {
        c = 5907, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.kurtgeiger.com")) try {
        c = 3472, a = $j(".special-price .price").length ? $j(".special-price .price").first().text().replace("\u00a3", "").trim() : $j(".regular-price .price").first().text().replace("\u00a3", "").trim(), b = "KURT GEIGER", d = e = $j(".product-name").first().clone().children().remove().end().text().trim()
    } catch (Ig) {
        c =
            3472, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("storets.com")) try {
        c = 44141, a = $j("#assign_prd_discount_price_text").length ? $j("#assign_prd_discount_price_text").text().replace("$", "").split("USD")[0].trim() : $j("#assign_prd_sale_price_text").text().replace("$", "").split("USD")[0].trim(), b = "storets", d = e = $j("b").first().text().trim()
    } catch (Jg) {
        c = 44141, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("cortefiel.com")) try {
        c = 6262, a = $j(".product-price.sales").length ? $j("strong.product-price.sales").clone().children().remove().end().text().replace("\u20ac",
            "").trim() : $j(".product-price").text().replace("\u20ac", "").trim(), b = "CORTEFIEL", d = e = $j("fieldset h1").text().trim()
    } catch (Kg) {
        c = 6262, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.elcorteingles.es")) try {
        c = 43946, a = $j(".fch_precio_oferta span").length ? $j(".fch_precio_oferta span").text().trim() : $j("#fch_caja_precio .fch_precio_normal span").text().split("\u20ac")[0].replace(".", "").trim(), b = "El Corte Ingles", d = e = $j(".fch_marca_prod span").text().replace(":", "").trim()
    } catch (Lg) {
        c = 43946, d = b = e = "", a = 0
    } else if (-1 !=
        f.indexOf("www.youngbritishdesigners.com")) try {
        c = 44696, g = "\u00a3", a = $j(".productPrices h1").text().replace("\u00a3", "").trim(), b = "YOUNG BRITISH DESIGNERS", d = e = $j(".productTitle h1").text().trim()
    } catch (Mg) {
        c = 44696, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("frontrowshop")) try {
        c = 51562, g = "$", a = $j(".now").text().replace(g, "").trim(), b = "Front row Shop", d = e = $j(".pr-detail dl dd h1").text().trim()
    } catch (Ng) {
        c = 51562, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.apricotonline.co.uk")) try {
        c = 4729, a = $j(".price").first().text().split(" ")[1].replace("\u00a3",
            "").trim(), b = "APRICOT", d = e = $j("#product-heading").text().trim()
    } catch (Og) {
        c = 4729, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.lunabazaar.com")) try {
        c = 44206, a = $j(".prod-detail-cost-value").text().replace("$", "").trim(), b = "El Corte Ingles", e = $j("#product-detail-div h1").text().trim(), d = $j(".prod-detail-part-value").text().trim()
    } catch (Pg) {
        c = 44206, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.supertrash.com")) try {
        "United Kingdom" === $j("#location-picker").attr("title") ? (c = 44734, g = "\u00a3", a = window.s2m_configuration.s2m_amount_1) :
            "United States" === $j("#location-picker").attr("title") ? (c = 45439, g = "$", a = window.s2m_configuration.s2m_amount_1) : "Nederland" === $j("#location-picker").attr("title") && (c = 6093, g = "\u20ac", a = window.s2m_configuration.s2m_amount_1), b = "SUPERTRASH", d = e = window.s2m_configuration.s2m_product_name
    } catch (Qg) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.amara.co.uk")) try {
        c = 44725, a = $j(".price.reddull").length ? $j(".price.reddull").text().replace("\u00a3", "").trim() : $j(".price").text().replace("\u00a3", "").trim(), b = "AMARA",
        d = e = $j(".product-h1").text().trim()
    } catch (Rg) {
        c = 44725, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("uk.monsoon.co.uk")) try {
        c = 44740, a = $j("#now_price").text().split("\u00a3")[1].trim(), b = "MONSOON", d = e = $j(".productDetail_name_and_description h1").text().trim()
    } catch (Sg) {
        c = 44740, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("uk.accessorize.com")) try {
        c = 44743, a = $j("#now_price").text().split("\u00a3")[1].trim(), b = "ACCESSORIZE", d = e = $j(".productDetail_name_and_description h1").text().trim()
    } catch (Tg) {
        c = 44743, d = b = e = "", a = 0
    } else if (-1 !=
        f.indexOf("us.accessorize.com")) try {
        c = 44719, a = 0 < $j("#WAS_price").length ? $j("#now_price").text().split(":")[1].split("$")[1].replace(",", ".").trim() : $j("#now_price").text().split("$")[1].replace(",", ".").trim(), b = "ACCESSORIZE", e = $j(".productDetail_name_and_description h1").text().trim(), d = $j(".productCode").text().trim()
    } catch (Ug) {
        c = 44719, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("de.accessorize.com")) try {
        c = 6204, a = 0 < $j("#WAS_price").length ? $j("#now_price").text().split(":")[1].split("\u20ac")[0].replace(",",
            ".").trim() : $j("#now_price").text().split("\u20ac")[0].replace(",", ".").trim(), b = "ACCESSORIZE", d = e = $j(".productDetail_name_and_description h1").text().trim()
    } catch (Vg) {
        c = 6204, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("fr.accessorize.com")) try {
        c = 44614, a = $j("#now_price").text().split("\u20ac")[0].replace(",", ".").trim(), b = "ACCESSORIZE", d = e = $j(".productDetail_name_and_description h1").text().trim()
    } catch (Wg) {
        c = 44614, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.myflashtrash.com")) try {
        c = 44327, a = $j(".price").text().split("\u00a3")[1].trim(),
        b = "FLASHTRASH", d = e = $j(".prdt_titl").text().trim()
    } catch (Xg) {
        c = 44327, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("hunter-boot")) try {
        c = 44714, a = $j(".price.price-big").first().text().replace("\u00a3", "").trim(), b = "HUNTER", d = e = $j("h1").text().trim()
    } catch (Yg) {
        c = 44714, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.alexandermcqueen.com")) try {
        k = $j(".nation").text().trim(), "UNITED STATES" == k ? (g = "$", c = 44666, a = 0 < $j(".itemBoxPrice .oldprice").length ? $j("#description .itemBoxPrice .newprice").first().text().replace(/[^0-9\,\.]/g,
            "").replace(",", "").trim() : $j("#description .priceValue").first().text().replace(/[^0-9\,\.]/g, "").replace(",", "").trim()) : "UNITED KINGDOM" === k ? (g = "\u00a3", c = 44660, a = 0 < $j(".itemBoxPrice .oldprice").length ? $j("#description .itemBoxPrice .newprice").first().text().replace(/[^0-9\,\.]/g, "").replace(",", "").trim() : $j("#description .priceValue").first().text().replace(/[^0-9\,\.]/g, "").replace(",", "").trim()) : "FRANCE" === k && (g = "\u20ac", c = 44660, a = 0 < $j(".itemBoxPrice .oldprice").length ? $j("#description .itemBoxPrice .newprice").first().text().replace(/[^0-9\,\.]/g,
            "").replace(",", ".").trim() : $j("#description .priceValue").first().text().replace(/[^0-9\,\.]/g, "").replace(".", "").replace(",", ".").trim()), b = "ALEXANDER McQUEEN", d = e = $j("#description h1").text().trim()
    } catch (Zg) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("millyny")) try {
        c = 44780, a = $j(".info.right .regular-price .price").text().split("$")[1].trim(), b = "Milly", d = e = $j(".info.right .product-name").text().trim()
    } catch ($g) {
        c = 44780, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("shopexcessbaggage.com")) try {
        c = 44518, a = $j(".price-box .old-price").length ?
            $j(".special-price .price").first().text().replace("$", "").trim() : $j(".regular-price .price").first().text().replace("$", "").trim(), b = "EXCESS BAGGAGE", d = e = $j(".product-name h1").text().trim()
    } catch (ah) {
        c = 44518, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.dwellstudio.com")) try {
        c = 2602, a = $j(".price").first().text().replace("$", "").trim(), b = "Dwell Studio", d = e = $j(".duvetset-details-product-name").text().trim()
    } catch (bh) {
        c = 2602, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.isaay.com")) try {
        c = 4868, a = $j(".salesprice").first().text().replace("$",
            "").trim(), b = "ISAAY", d = e = $j(".productname").text().trim()
    } catch (ch) {
        c = 4868, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.oasap.com")) try {
        c = 6340, a = $j("#order_price").text().replace("$", "").replace("NOW:", "").trim(), b = "OASAP", d = e = $j(".prodDetail h2").first().text().trim()
    } catch (dh) {
        c = 6340, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.jeweliq.com")) try {
        c = 44351, a = $j(".price").text().replace("$", "").trim(), b = "JEWELIQ", d = e = $j(".title").first().text().trim()
    } catch (eh) {
        c = 44351, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("jcpenney")) try {
        c =
            44338, a = $j("#pdp_right_rail .gallery_page_price.flt_wdt.comparisonPrice").text().split("$")[1].replace("sale", "").trim(), b = "JCPenny", d = e = $j(".pdp_details h1").first().text().trim()
    } catch (fh) {
        c = 44338, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("us.karenmillen")) try {
        c = 2031, a = amznAnalytics.flatValues.itemPrice.replace("$", "").trim(), b = "Karen Millen", d = e = amznAnalytics.flatValues.productTitle.trim()
    } catch (gh) {
        c = 2031, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("eu.karenmillen")) try {
        j = $j(".country_nav_menu img").last().attr("alt"),
            "Netherlands" === j ? (c = 44605, g = "\u20ac") : "Sweden" === j ? (c = 44611, g = "KR") : "France" == j && (c = 45967, g = "\u20ac"), a = $j(".product_price").text().split(" ")[1].replace(",", ".").trim(), e = $j("#product_title").text().trim(), b = "Karen Millen", d = e
    } catch (hh) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("thinkgeek.com")) try {
        c = 44331, a = $j(".availability_sale s").length ? $j(".availability_sale").next().text().replace("$", "").trim() : $j("#buy h3").text().replace("$", "").trim(), b = "ThinkGeek", d = e = $j(".title-page").text().trim()
    } catch (ih) {
        c =
            44331, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("thenewenglandtradingcompany.com")) try {
        c = 5984, a = $j("#dvProductPricing .ProductDetailsPrice").text().replace("$", "").trim(), b = "The New England Trading Company", d = e = $j("h1.ProductDetailsProductName").text().trim()
    } catch (jh) {
        c = 5984, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("uk.spacenk.com")) try {
        c = 6010, a = app.Product.productjson.data.pricing.sale.replace("\u00a3", "").replace(".0", ".00"), b = "Space NK UK", e = $j(".productname").first().text().trim(), d = app.Product.productjson.data.ID
    } catch (kh) {
        c =
            6010, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("clothesbymajestic.com")) try {
        c = 43995, a = $(".originalprice").length ? $j(".price").children().remove().end().text().replace("$", "").trim() : $j(".price").text().replace("$", "").trim(), b = "Clothes by Majestic", e = $j("#content h2").text().trim(), d = $j("#content h3").first().text().split(":")[1].trim()
    } catch (lh) {
        c = 43995, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.tactics.com")) try {
        c = 44E3, a = $j("#itemprice .red").text().replace("$", "").replace("On Sale:", "").trim(), b = "Tactics",
        d = e = $j("#productright form h1").children().remove().end().text().trim()
    } catch (mh) {
        c = 44E3, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("occa-home.co.uk")) try {
        c = 44094, a = $j(".special_price").length ? $j(".special_price").text().split("\u00a3")[1].trim() : $j(".price").text().split("\u00a3")[1].trim(), b = "Occa-Home", e = $j(".push-banner h1").text().trim(), d = $j("#product-code").text().split(":")[1].trim()
    } catch (nh) {
        c = 44094, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("brora.co.uk")) try {
        c = 44003, a = $j("#ctl00_BrowseContentPlaceHolder_StylePricesLabel").text().split("\u00a3")[1].trim(),
        b = "Brora", e = $j("#ctl00_BrowseContentPlaceHolder_StyleDescriptionLabel").text().trim(), d = $j("#ctl00_BrowseContentPlaceHolder_StyleCodeLabel").text().split(":")[1].trim()
    } catch (oh) {
        c = 44003, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("opensky.com")) try {
        c = 43967, a = $j(".price .wrap").first().text().split("$")[1].trim(), b = "Open Sky", d = e = $j(".offer.layout-product .brass-tacks h1").first().text().trim()
    } catch (ph) {
        c = 43967, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("veronicamclothing.com")) try {
        c = 43993, a = $j("#price").children().remove().end().text().split("$")[1].trim(),
        b = "Veronica M Clothing", e = $j("#content h2").text().trim(), d = $j("#content h3").text().split(":")[1].trim()
    } catch (qh) {
        c = 43993, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.windsmoor.co.uk")) try {
        c = 4942, a = $j(".price.nowprice").length ? $j(".price.nowprice").children().remove().end().text().split("\u00a3")[1].trim() : $j(".price").children().remove().end().text().split("\u00a3")[1].trim(), b = "WINDSMOOR", d = e = $j(".product_options h1").text().trim()
    } catch (rh) {
        c = 4942, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.sarenza.nl")) try {
        c =
            43933, a = $j(".price .product-price").first().text().split("\u20ac")[0].replace(",", ".").trim(), b = "sarenza.nl", d = e = $j(".product-viewer .h1-like span").text().trim()
    } catch (sh) {
        c = 43933, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.sarenza.fr")) try {
        c = 44064, a = $j(".price .product-price").first().text().split("\u20ac")[0].replace(",", ".").trim(), b = "sarenza.fr", d = e = $j(".product-viewer .h1-like span").text().trim()
    } catch (th) {
        c = 44064, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.sarenza.es")) try {
        c = 5982, a = $j(".product-price").text().replace("\u20ac",
            "").replace(".", "").replace(",", ".").trim(), b = "sarenza.es", d = e = $j(".product-viewer .h1-like span").text().trim()
    } catch (uh) {
        c = 5982, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.stuartweitzman.com")) try {
        c = 43920, a = $j(".pricing").children().remove().end().text().split("(")[0].replace("|", "").replace("$", "").trim(), b = "STUART WEITZMAN", d = e = $j(".hdng3").text().trim()
    } catch (vh) {
        c = 43920, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("uk.stuartweitzman.com")) try {
        c = 47714, a = $j(".productprice .price .salesprice").length ? $j(".productprice .price .salesprice").text().split("\u00a3")[1].trim() :
            $j(".pricing").children().remove().end().text().split("(")[0].replace("|", "").replace("\u00a3", "").trim(), b = "STUART WEITZMAN", d = e = $j(".productname").text().trim()
    } catch (wh) {
        c = 47714, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.karmaloop.com")) try {
        c = 1791, a = $j(".sale-price").length ? $j(".sale-price").text().split("$")[1].trim() : $j(".price").text().replace("$", "").trim(), b = "Karma Loop", e = $j("#title").text().trim(), d = $j(".addtocart").attr("data-productid")
    } catch (xh) {
        c = 1791, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.brooksbrothers.com")) try {
        c =
            4521, a = $j(".price-sales.price-sales-red  ").length ? $j(".price-sales.price-sales-red  ").text().split("$")[1].trim() : $j(".price-sales    ").text().split("$")[1].trim(), b = "Brooks Brothers", d = e = $j(".product-name").text().trim()
    } catch (yh) {
        c = 4521, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.allenedmonds.com")) try {
        c = 47783, a = $j("#item_offerprice").text().split("$")[1].trim(), b = "Allen Edmonds", d = e = $j("#attributeBoxHeading1 h1").text().trim()
    } catch (zh) {
        c = 47783, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.stevenalan.com")) try {
        c =
            49283, a = $j(".salesprice.itemOnSale").length ? $j(".salesprice.itemOnSale").text().split("$")[1].replace("N/A", "").trim() : $j(".salesprice").text().split("$")[1].replace("N/A", "").trim(), b = "steven alan", e = $j(".productname").first().text().trim(), d = $j(".itemNo").text().split(":")[1].trim()
    } catch (Ah) {
        c = 49283, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.eddiebauer.com")) try {
        c = 49606, a = $j(".salePrice").length ? $j(".salePrice").text().split("$")[1].trim() : $j(".productPrice").text().split("$")[1].trim(), b = "Eddie Bauer",
        d = e = $j("#productTitle").text().trim()
    } catch (Bh) {
        c = 49606, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.sperrytopsider.com")) try {
        c = 44169, a = $j(".sale").length ? $j(".sale").text().split("$")[1].trim() : $j("#pricing").text().split("$")[1].trim(), b = "SPERRY TOP-SIDER", d = e = $j("#product-name strong").text().trim()
    } catch (Ch) {
        c = 44169, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.columbia.com")) try {
        c = 3802, a = $j("#member-price").length ? $j("#member-price").text().split("$")[1].trim() : $j("#regular-price").text().split("$")[1].trim(),
        b = "Columbia", e = $j(".product_title").text().trim(), d = $j(".pdp_style_num").text().split("#")[1].trim()
    } catch (Dh) {
        c = 3802, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.orvis.com")) try {
        c = 5819, a = $j("#_ctl0_ContentPlaceHolder1_pfBuyBox_PFMembersRepeater__ctl1_memberPrice_SaleAvail").length ? $j(".MemSalePrice").text().split("$")[1].trim() : $j(".MemListPrice").text().split("$")[1].trim(), b = "ORVIS", d = e = $j("#pf_title").text().trim()
    } catch (Eh) {
        c = 5819, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.orvis.co.uk")) try {
        c = 4915, g =
            "\u00a3", a = $j("#_ctl0_ContentPlaceHolder1_pfBuyBox_PFMembersRepeater__ctl1_memberPrice_SaleAvail").length ? $j(".MemSalePrice").text().split("\u00a3")[1].trim() : $j(".MemListPrice").text().split("\u00a3")[1].trim(), b = "ORVIS UNITED KINGDOM", d = e = $j("#pf_title").text().trim()
    } catch (Fh) {
        c = 4915, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.underarmour.com")) try {
        c = 49259, a = $j(".price .money").text().split("$")[1].trim(), b = "Under Armour", d = e = $j("h1 .first").text().trim()
    } catch (Gh) {
        c = 49259, d = b = e = "", a = 0
    } else if (-1 !=
        f.indexOf("www.ties.com")) try {
        c = 3832, a = $j(".price span").text().trim(), b = "TIES.com", d = e = $j("h1.title").text().trim()
    } catch (Hh) {
        c = 3832, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("store.diesel.com")) try {
        c = 4432, a = $j(".discountedPrice.price").length ? $j(".discountedPrice.price").text().split("$")[1].trim() : $j(".fullPrice.price ").text().split("$")[1].trim(), b = "DIESEL", d = e = $j(".titolo.fn").text().trim()
    } catch (Ih) {
        c = 4432, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.armani.com")) try {
        c = 44161, a = $j(".price.newprice").length ?
            $j(".price.newprice").text().split("$")[1].trim() : $j(".price ").text().split("$")[1].trim(), b = "GIORGIO ARMANI", d = e = $j("#catTitle").text().trim()
    } catch (Jh) {
        c = 44161, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.giorgioarmanibeauty-usa.com")) try {
        c = 4475, a = $j(".price.newprice").length ? $j(".price.newprice").text().split("$")[1].trim() : $j(".price ").text().split("$")[1].trim(), b = "GIORGIO ARMANI beauty", d = e = $j(".productdetailcolumn.productinfo .productname").text().trim()
    } catch (Kh) {
        c = 4475, d = b = "", a = 0
    } else if (-1 !=
        f.indexOf("us.levi.com")) try {
        c = 3072, a = $j(".now").length ? $j(".now").text().split("$")[1].trim() : $j(".prod_total_price ").text().split("$")[1].trim(), b = "LEVIS", d = e = $j(".product_title").text().trim()
    } catch (Lh) {
        c = 3072, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.levi.com")) try {
        j = $j("#global-lang-cta").text().trim(), "it" == j && (c = 44288, a = $j("#pdp-buystack-price span").text().split("\u20ac")[0].replace(",", ".").trim(), b = "LEVIS IT", d = e = $j(".finish").text().trim())
    } catch (Mh) {
        c = 44288, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.bodenusa.com")) try {
        c =
            4002, a = $j(".NowPrice").text().split("$")[1].trim(), b = "boden", d = e = $j(".tabNavContent .titleBlock h1").first().text().trim()
    } catch (Nh) {
        c = 4002, d = b = "", a = 0
    } else if (-1 != f.indexOf("shopten25.com")) try {
        c = 44240, a = $j(".currentprice.pricedisplay").text().split("$")[1].trim(), b = "shop ten 25", d = e = $j(".product_description p").text().split(".")[0].trim()
    } catch (Oh) {
        c = 44240, d = b = "", a = 0
    } else if (-1 != f.indexOf("otteny.com")) try {
        c = 45076, a = $j(".special-price").length ? $j(".special-price .price").text().split("$")[1].trim() :
            $j(".price").text().split("$")[1].trim(), b = "OTTE", d = e = $j(".product-name h1").text().trim()
    } catch (Ph) {
        c = 45076, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.stefanibags.com")) try {
        c = 43996, a = $j("#ctl00_CPHMain_Product_ctl00_LblSalePrice").length ? $j("#ctl00_CPHMain_Product_ctl00_LblSalePrice").text().split("$")[1].trim() : $j("#ctl00_CPHMain_Product_ctl00_LblPrice").text().split("$")[1].trim(), b = "Stefani Bags", d = e = $j("h2").text().trim()
    } catch (Qh) {
        c = 43996, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.freshpair.com")) try {
        c =
            4855, a = $j("#__dollarPriceId_0").text().split("$")[1].trim(), b = "Freshpair", d = e = $j(".product_name").text().trim()
    } catch (Rh) {
        c = 4855, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.journeys.com")) try {
        c = 44204, a = $j(".current-price"), f1 = a.clone().children().remove().end().text().trim(), f2 = a.clone().children().last().text().trim(), a = f1 + "." + f2, b = "JOURNEYS", d = e = $j(".product-title").text().trim()
    } catch (Sh) {
        c = 44204, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.shoe-shop.com")) try {
        c = 44180, a = $j("#productPriceOur span").text().trim(),
        b = "PAVERS", e = $j("#brand").text().trim(), d = pr_page_id
    } catch (Th) {
        c = 44180, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.shoeme.ca")) try {
        c = 44002, a = $j(".price-field").text().replace("$", "").trim(), b = "ShoeMe.ca", d = e = $j(".product-title h1").text().trim()
    } catch (Uh) {
        c = 44002, d = b = "", a = 0
    } else if (-1 != f.indexOf("us.hessnatur.com")) try {
        c = 44188, a = $j("#price").text().split("$")[1].trim(), b = "hessnatur", d = e = $j(".product-title h1").text().trim()
    } catch (Vh) {
        c = 44188, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.bestbuyeyeglasses.com")) try {
        c =
            44185, a = $j(".ourprice").text().split("$")[1].trim(), b = "bestbuyeyeglasses.com", d = e = $j(".title-header h1").text().trim()
    } catch (Wh) {
        c = 44185, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.myweddingfavors.com")) try {
        c = 44182, a = $j(".price").first().text().split("$")[1].trim(), b = "My Wedding Favors", d = e = $j("h1").text().trim()
    } catch (Xh) {
        c = 44182, d = b = "", a = 0
    } else if (-1 != f.indexOf("touchofmodern.com")) try {
        c = 44205, a = $j(".dynamic-price").text().split("$")[1].trim(), b = "Touch Of Modern", d = e = $j(".product_info h1").text().trim()
    } catch (Yh) {
        c =
            44205, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.allposters.com")) try {
        c = 44187, a = $j("#price").text().split("$")[1].trim(), b = "AllPosters", d = e = $j("#productHeading h1").text().trim()
    } catch (Zh) {
        c = 44187, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.cache-cache.fr")) try {
        c = 44013, a = $j(".prixpromo").text().split("\u20ac")[0].trim(), b = "cache cache", e = $j("#productDetails h2").text().trim(), d = product_id
    } catch ($h) {
        c = 44013, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.stefanel.com")) try {
        k = $j("#select-country").text().trim(), "Shop United Kingdom" ==
            k ? (c = 6356, g = "\u00a3") : "Shop Germany" == k ? (c = 6355, g = "\u20ac") : "Shop Italy" == k && (c = 43982, g = "\u20ac"), a = $j(".price").text().split(g)[1].replace(",", ".").trim(), b = "STEFANEL", d = e = $j(".product-name h1").text().trim()
    } catch (ai) {
        d = b = "", a = 0
    } else if (-1 != f.indexOf("www.newstyle-mode.de")) try {
        c = 44200, a = $j(".productOldPrice").length ? $j(".price .productOldPrice").eq(1).text().split("Nur")[1].replace("EUR", "").trim() : $j(".price div").text().split("EUR")[0].trim(), b = "New Style Mode", d = e = $j("h2").eq(3).text().trim()
    } catch (bi) {
        d =
            b = "", a = 0
    } else if (-1 != f.indexOf("www.sanuk.com")) try {
        c = 44199, a = $j(".salesprice").text().split("$")[1].trim(), b = "sanuk", d = e = $j(".productname").text().trim()
    } catch (ci) {
        c = 44199, d = b = "", a = 0
    } else if (-1 != f.indexOf("razorreef")) try {
        c = 44190, a = $j(".special-price").length ? $j(".special-price .price").text().split("$")[1].trim() : $j(".regular-price .price").text().split("$")[1].trim(), b = "RAZOR REEF", d = e = $j(".product-name").text().trim()
    } catch (di) {
        c = 44190, d = b = "", a = 0
    } else if (-1 != f.indexOf("islandsurf.com")) try {
        c =
            3872, a = $j("#price span").first().text().split("$")[1].split(" ")[0].trim(), b = "Island Surf", d = e = $j("h2#title").text().trim()
    } catch (ei) {
        c = 3872, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.neostrata.com")) try {
        c = 44193, a = $j("div .tableitem").eq(3).text().split("$")[1].trim(), b = "Neo Strata", d = e = $j("div .tableitem").eq(1).text().trim()
    } catch (fi) {
        c = 44193, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.sunpocketoriginal.com")) try {
        c = 44195, a = $j("span.price").text().split("SEK")[0].trim(), b = "SUNPOCKET", d = e = $j("article h1").text().trim()
    } catch (gi) {
        c =
            44195, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.davidmeister.com")) try {
        c = 44160, a = $j("#attr-sellprice").text().split("$")[1].trim(), b = "DAVID MEISTER", d = e = $j(".invtname").text().trim()
    } catch (hi) {
        c = 44160, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.moltonbrown.com")) try {
        c = 45044, a = $j(".atg_store_selectAttributes .atg_store_newPrice").length ? $j(".atg_store_selectAttributes .atg_store_newPrice").first().text().split("$")[1].trim() : $j(".price").first().text().split("$")[1].trim(), b = "MOLTON BROWN", d = e = $j(".producttitle").first().text().trim()
    } catch (ii) {
        c =
            45044, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.moltonbrown.co.uk")) try {
        c = 44158, a = $j(".atg_store_selectAttributes .atg_store_oldPrice").length ? $j(".atg_store_selectAttributes .atg_store_newPrice").first().text().split("\u00a3")[1].trim() : $j(".price").first().text().split("\u00a3")[1].trim(), b = "MOLTON BROWN", d = e = $j(".producttitle").first().text().trim()
    } catch (ji) {
        c = 44158, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.seattleluxe.com")) try {
        c = 44175, a = $j(".yourprice").first().text().trim(), b = "Seattle Luxe", d = e = $j("#productdesc h1").text().trim()
    } catch (ki) {
        c =
            44175, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.annsbridalbargains.com")) try {
        c = 44172, a = $j(".atg_store_selectAttributes .atg_store_oldPrice").length ? $j("#priceGrid .r4c1.redB").text().split("$")[1].trim() : $j(".r4c1").text().split("$")[1].trim(), b = "Anns Bridal BARGAINS", d = e = $j(".prodTitle").text().trim()
    } catch (li) {
        c = 44172, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.efurnituremart.com")) try {
        c = 44207, a = $j("#product_price").text().trim(), b = "eFurnitureMart", d = e = $j(".dialog_product h2 span").eq(1).text().trim()
    } catch (mi) {
        c =
            44207, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.evitaperoni.com")) try {
        c = 44220, a = $j("#saleprice").text().split("$")[1].trim(), b = "EVITA PERONI", d = e = $j("#ep-product-name").text().trim()
    } catch (ni) {
        c = 44220, d = b = "", a = 0
    } else if (-1 != f.indexOf("babooshbaby.com")) try {
        c = 44219, a = $j('dd[itemprop="lowPrice"]').text().split("$")[1].trim(), b = "baboosh baby", d = e = $j("h2#productTitle span").first().text().trim()
    } catch (oi) {
        c = 44219, d = b = "", a = 0
    } else if (-1 != f.indexOf("a-thread.com")) try {
        c = 44238, a = $j(".price-sale").length ? $j(".price-sale").text().split("$")[1].replace("USD",
            "").trim() : $j(".price").text().split("$")[1].replace("USD", "").trim(), b = "a-thread", d = e = $j("#product-title").text().trim()
    } catch (pi) {
        c = 44238, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.lids.com")) try {
        c = 44330, a = $j("span.sale").length ? $j("span.sale").text().split("$")[1].trim() : $j(".price h3").text().split("$")[1].trim(), b = "Lids", d = e = $j("#details h1").text().trim()
    } catch (qi) {
        c = 44330, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.buffalojeans.com")) try {
        c = 44334, a = $j(".sale-price cufontext").length ? $j(".sale-price cufontext").text().split("$")[1].trim() :
            $j("#productPrice cufontext").text().split("$")[1].trim(), b = "BUFFALO", d = e = $j("#product-description cufontext").text().trim()
    } catch (ri) {
        c = 44334, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.muuse.com")) try {
        c = 5826, a = $j(".DSH").text().split(" ")[1].trim(), b = "MUUSE", d = e = $j(".GCC").text().trim()
    } catch (si) {
        c = 5826, d = b = "", a = 0
    } else if (-1 != f.indexOf("xlash.net")) try {
        c = 44335, a = $j(".tabcontent:visible .price ins").text().split("$")[1].trim(), b = "Xbeauty", d = e = $j(".title_top").text().trim()
    } catch (ti) {
        c = 44335, d = b = "", a = 0
    } else if (-1 !=
        f.indexOf("www.perriconemd.com")) try {
        c = 44194, a = $j(".pricesale").length ? $j(".pricesale").text().split("$")[1].trim() : $j("td.tableitem1bg div.tableitem").first().text().split("$")[1].trim(), b = "Perricone MD", e = $j(".detailheader h1").text().trim(), d = $j(".tableitem1bg .tableitem").first().text().trim()
    } catch (ui) {
        c = 44194, d = b = "", a = 0
    } else if (-1 != f.indexOf("stylesforless.com")) try {
        c = 44198, a = $j(".price").eq(2).text().split("$")[1].trim(), b = "STYLES FOR LESS", d = e = $j(".product-name h2").text().trim()
    } catch (vi) {
        c =
            44198, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.unbeatablesale.com")) try {
        c = 44183, a = $j(".itemPrice").text().split("$")[1].trim(), b = "UNBEATABLE sale", d = e = $j("h1").text().trim()
    } catch (wi) {
        c = 44183, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.naturalskinshop.com")) try {
        c = 44192, a = $j(".price").text().split("$")[1].trim(), b = "natural skin shop", d = e = $j(".product-name h1").text().trim()
    } catch (xi) {
        c = 44192, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.sendthetrend.com")) try {
        c = 44196, a = $j(".uc-price").text().split("$")[1].trim(), b =
            "SEND THE TREND", d = e = $j(".product-title h2").text().trim()
    } catch (yi) {
        c = 44196, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.anniescatalog.com")) try {
        c = 6225, a = $j(".price").text().split("$")[1].trim(), b = "Annies Crafts", e = $j(".subhead").text().trim(), d = $j(".code").text().split("#")[1].replace("Item", "").trim()
    } catch (zi) {
        c = 6225, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.poppin.com")) try {
        c = 44202, a = $j(".price").text().trim(), b = "poppin", e = $j(".right-content h1").text().trim(), d = $j("#custcol_ava_item").val()
    } catch (Ai) {
        c =
            44202, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.douglas.de")) try {
        c = 48907, a = $j("p.price").first().text().split("\u20ac")[1].replace(",", ".").trim(), b = $j(".productbrand").attr("alt").trim(), d = e = $j(".productname").text().trim()
    } catch (Bi) {
        c = 48907, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.choies.com")) try {
        c = 52423, k = $j(".our").text().trim().charAt(0), "$" == k && (g = "$"), a = $j(".pr-detail .now.fll").length ? $j(".pr-detail .now.fll").text().split(k)[1].trim() : $j(".pr-detail .our").text().split(k)[1].trim(), b = "CHOIES",
        d = e = $j(".pr-detail dl dd h1").first().text().trim()
    } catch (Ci) {
        c = 52423, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.conleys.de")) try {
        c = 44405, a = $j(".regularPrice.sale").length ? $j(".price").last().text().split(" ")[1].replace(",", ".").trim() : $j(".regularPrice .price").first().text().split(" ")[1].trim(), b = "CONLEYS", d = e = $j(".productInfo h1").text().trim()
    } catch (Di) {
        c = 44405, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.bettybarclay.com")) try {
        c = 43936, k = $j(".country-selector.last-child.toggle span").text().trim(), "Ihr Land" ==
            j && (g = "\u20ac"), a = $j(".currentPrice.red").length ? $j(".currentPrice.red").last().text().replace("*", "").trim() : $j(".currentPrice").text().replace("*", "").trim(), b = "Betty Barclay", d = e = $j(".top-part h1").text().trim()
    } catch (Ei) {
        c = 43936, d = b = "", a = 0
    } else if (-1 != f.indexOf("verypoolish")) try {
        c = 44235, a = $j(".price.pricesale").length ? $j(".price.pricesale").text().split(" ")[2].trim() : $j(".price").last().text().split(" ")[0].trim(), b = "VERY POOLISH", d = e = $j("#maindetailtab h2").text().trim()
    } catch (Fi) {
        c = 44235,
        d = b = "", a = 0
    } else if (-1 != f.indexOf("www.vertbaudet.de")) try {
        c = 5895, a = $j(".memo_fp_prix_final").first().text().replace("\u20ac", ".").trim(), b = "vertbaudet", d = e = $j("h1").text().trim()
    } catch (Gi) {
        c = 5895, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.furla.com")) try {
        c = 6343, a = $("#prodotto_descrizione small").length ? $j("#prodotto_descrizione strong").eq(1).text().split("\u20ac")[0].trim() : $j("strong").first().text().split("\u20ac")[0].trim(), b = "FURLA", d = e = $j("h1").text().trim()
    } catch (Hi) {
        c = 6343, d = b = "", a = 0
    } else if (-1 !=
        f.indexOf("giglio")) try {
        c = 6347, a = a = $j(".price").eq(1).text().split("\u20ac")[0].trim(), b = "GIGLIO", d = e = $j("h2").first().text().trim()
    } catch (Ii) {
        c = 6347, d = b = "", a = 0
    } else if (-1 != f.indexOf("buffalo-shop.de")) try {
        c = 5898, a = $j(".newPdpPrice").last().text().split("\u20ac")[1].trim(), b = "Buffalo", e = $j(".productname span").first().text().trim(), d = product_id
    } catch (Ji) {
        c = 5898, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.fashionforhome.de")) try {
        c = 44596, a = $j(".special-price").text().split("\u20ac")[0].replace(".", "").replace(",",
            ".").trim(), b = "FASHION FOR HOME", d = e = $j(".product-info-name").text().trim()
    } catch (Ki) {
        c = 44596, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.fashionforhome.nl")) try {
        c = 5960, g = "\u20ac", a = $j(".special-price").text().split("\u20ac")[1].replace(".", "").replace(",", ".").trim(), b = "FASHION FOR HOME", d = e = $j(".product-info-name").text().trim()
    } catch (Li) {
        c = 5960, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.fashionforhome.at")) try {
        c = 44620, g = "\u20ac", a = $j(".special-price").text().split("\u20ac")[1].replace(".", "").replace(",",
            ".").trim(), b = "FASHION FOR HOME", d = e = $j(".product-info-name").text().trim()
    } catch (Mi) {
        c = 44620, d = b = "", a = 0
    } else if (-1 != f.indexOf("kolibrishop")) try {
        c = 44251, a = $j(".prodetails-price").text().split("\u20ac")[0].trim(), b = "kalibri", d = e = $j(".prodetails-name").text().trim()
    } catch (Ni) {
        c = 44251, d = b = "", a = 0
    } else if (-1 != f.indexOf("vestiairecollective.com")) try {
        k = $j(".world button span").last().text().trim(), c = 44546, "\u20ac EUR" === k ? (g = "\u20ac", a = $j(".prd-price .actual").text().split("\u20ac")[0].replace(",", ".").trim()) :
            "$ USD" === k ? (g = "$", a = $j(".prd-price .actual").text().split("$")[1].trim()) : "\u00a3 GBP" === k && (g = "\u00a3", a = $j(".prd-price .actual").text().split("\u00a3")[1].replace(",", "").trim()), b = "VESTIAIRE COLLECTIVE", d = e = $j(".prd-name").text().trim()
    } catch (Oi) {
        d = b = "", a = 0
    } else if (-1 != f.indexOf("www.monshowroom.com")) try {
        c = 44249, g = $("#textdevise_hautsite").text().split(/\s/)[0].trim(), a = $j("#prix_vente").clone().children().remove().end().text().replace(/[^0-9\,\.]/g, "").replace(",", ".").trim(), b = "MON SHOWROOM",
        d = e = $j(".titre_h1_zoom h1 span.capi_14_normal_nu_7F7F7F").text().trim()
    } catch (Pi) {
        c = 44249, d = b = "", a = 0
    } else if (-1 != f.indexOf("uk.menlook.com")) try {
        c = 52859, a = $j("#product-content .product-price .discounted-price .price-sales").length ? $j("#product-content .product-price .discounted-price .price-sales").text().split("\u00a3")[0].replace(",", "").trim() : $j("#product-content .product-price .discounted-price .price-sales.nodiscount").text().split("\u00a3")[0].replace(",", "").trim(), b = "MENLOOK", d = e = $j(".product-name").first().text().trim()
    } catch (Qi) {
        c =
            52859, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.menlook.com")) try {
        c = 6230, a = $j("#product-content .product-price .discounted-price .price-sales").length ? $j("#product-content .product-price .discounted-price .price-sales").text().split("\u20ac")[0].replace(",", ".").trim() : $j("#product-content .product-price .discounted-price .price-sales.nodiscount").text().split("\u20ac")[0].replace(",", ".").trim(), b = "MENLOOK", d = e = $j(".product-name").first().text().trim()
    } catch (Ri) {
        c = 6230, d = b = "", a = 0
    } else if (-1 != f.indexOf("es.menlook.com")) try {
        c =
            48886, a = $j("#product-content .product-price .discounted-price .price-sales").length ? $j("#product-content .product-price .discounted-price .price-sales").text().split("\u20ac")[0].replace(",", ".").trim() : $j("#product-content .product-price .discounted-price .price-sales.nodiscount").text().split("\u20ac")[0].replace(",", ".").trim(), b = "MENLOOK", d = e = $j(".product-name").first().text().trim()
    } catch (Si) {
        c = 48886, d = b = "", a = 0
    } else if (-1 != f.indexOf("de.menlook.com")) try {
        c = 48880, a = $j("#product-content .product-price .discounted-price .price-sales").length ?
            $j("#product-content .product-price .discounted-price .price-sales").text().split("\u20ac")[0].replace(",", ".").trim() : $j("#product-content .product-price .discounted-price .price-sales.nodiscount").text().split("\u20ac")[0].replace(",", ".").trim(), b = "MENLOOK", d = e = $j(".product-name").first().text().trim()
    } catch (Ti) {
        c = 48880, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.fr.forzieri.com")) try {
        c = 6366, g = "\u20ac", a = $j(".price.on_sale #salePrice").length ? $j("#salePrice").text().split("\u20ac")[1].replace(".", "").replace(",",
            ".").trim() : $j("#productPrice #listPrice").text().split("\u20ac")[1].replace(".", "").replace(",", ".").trim(), b = "FORZIERI", d = e = $j(".productTitle h1").text().trim()
    } catch (Ui) {
        c = 6366, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.cn.forzieri.com")) try {
        c = 5965, g = "\u00a5", a = $j(".price.on_sale #salePrice").length ? $j("#salePrice").text().split("\u00a5")[1].replace(",", "").trim() : $j("#productPrice #listPrice").text().split("\u00a5")[1].replace(",", "").trim(), b = "FORZIERI", d = e = $j(".productTitle h1").text().trim()
    } catch (Vi) {
        c =
            5965, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.it.forzieri.com")) try {
        c = 44287, g = "\u20ac", a = $j(".price.on_sale #salePrice").length ? $j("#salePrice").text().split("\u20ac")[1].replace(".", "").replace(",", ".").trim() : $j("#productPrice #listPrice").text().split("\u20ac")[1].replace(".", "").replace(",", ".").trim(), b = "FORZIERI IT", d = e = $j(".productTitle h1").text().trim()
    } catch (Wi) {
        c = 44287, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.de.forzieri.com")) try {
        c = 47071, g = "\u20ac", a = $j(".price.on_sale #salePrice").length ? $j("#salePrice").text().split("\u20ac")[1].replace(".",
            "").replace(",", ".").trim() : $j("#productPrice #listPrice").text().split("\u20ac")[1].replace(".", "").replace(",", ".").trim(), b = "FORZIERI DE", d = e = $j(".productTitle h1").text().trim()
    } catch (Xi) {
        c = 47071, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.uk.forzieri.com")) try {
        c = 5965, g = "\u00a3", a = $j(".price.on_sale #salePrice").length ? $j("#salePrice").text().split("\u00a3")[1].replace(",", "").trim() : $j("#productPrice #listPrice").text().split("\u00a3")[1].replace(",", "").trim(), b = "FORZIERI DE", d = e = $j(".productTitle h1").text().trim()
    } catch (Yi) {
        c =
            5965, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.ru.forzieri.com")) try {
        c = 52189, g = "\u0440\u0443\u0431", a = $j(".price.on_sale #salePrice").length ? $j("#salePrice").text().split("\u0440\u0443\u0431.")[1].replace(",", "").trim() : $j("#productPrice #listPrice").text().split("\u0440\u0443\u0431.")[1].replace(",", "").trim(), b = "FORZIERI DE", d = e = $j(".productTitle h1").text().trim()
    } catch (Zi) {
        c = 52189, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.forzieri.com")) try {
        c = 551, g = "$", a = $j(".price.on_sale #salePrice").length ? $j("#salePrice").text().split("$")[1].replace(",",
            "").trim() : $j("#productPrice #listPrice").text().split("$")[1].replace(",", "").trim(), b = "FORZIERI", d = e = $j(".productTitle h1").text().trim()
    } catch ($i) {
        c = 551, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.bonprix.fr")) try {
        c = 6381, 0 < $j("#productview").length && (a = $j('span[itemprop="price"]').attr("content"), b = "bonprix", d = e = $j(".product-name").text().trim())
    } catch (aj) {
        c = 6381, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.bonprix.it")) try {
        c = 44278, 0 < $j("#productview").length && (a = $j('span[itemprop="price"]').attr("content"),
            b = "bonprix", d = e = $j(".product-name").text().trim())
    } catch (bj) {
        c = 44278, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.bonprix.at")) try {
        c = 44312, 0 < $j("#productview").length && (a = $j('span[itemprop="price"]').attr("content"), b = "bonprix", d = e = $j(".product-name").text().trim())
    } catch (cj) {
        c = 44312, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.bonprix.nl")) try {
        c = 44923, 0 < $j("#productview").length && (a = $j('span[itemprop="price"]').attr("content"), b = "bonprix", d = e = $j(".product-name").text().trim())
    } catch (dj) {
        c = 44923, d = b = "", a = 0
    } else if (-1 !=
        f.indexOf("www.bonprix.se")) try {
        c = 6334, 0 < $j("#productview").length && (a = $j('span[itemprop="price"]').attr("content"), b = "bonprix", d = e = $j(".product-name").text().trim())
    } catch (ej) {
        c = 6334, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.bonprix.co.uk")) try {
        c = 49326, 0 < $j("#productview").length && (a = $j('#span[itemprop="price"]').attr("content"), b = "bonprix", d = e = $j(".product-name").text().trim())
    } catch (fj) {
        c = 49326, d = b = "", a = 0
    } else if (-1 != f.indexOf("belair-paris")) try {
        c = 44010, a = $j(".special-price span").eq(2).text().split("\u20ac")[0].trim(),
        b = "BELAIR", e = $j(".product-name.left h1").text().trim(), d = spConfig.config.productId
    } catch (gj) {
        c = 44010, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.pyrenex.comxxx")) try {
        c = 44971, a = $j(".special-price .price").text().split("\u20ac")[0].trim(), b = "PYRENEX", d = e = $j(".product_name.product_name_promotion").text().trim()
    } catch (hj) {
        c = 44971, d = b = "", a = 0
    } else if (-1 != f.indexOf("yves-rocher.cn")) try {
        c = 50741, a = $j(".bold").last().text().split("\u00a5")[1].trim(), b = "YVES ROCHER", e = $j("h1.brandcolor").text().trim(), d = parseInt($j("#col2 .product_minidetail").text().split(":")[1].trim(),
            10), g = "\u00a5"
    } catch (ij) {
        c = 50741, d = b = "", a = 0
    } else if (-1 != f.indexOf("yves-rocher.fr")) try {
        c = 6391, a = $j(".prix").last().text().split("\u20ac")[0].trim(), b = "YVES ROCHER", e = $j(".catName").text().trim(), d = $j(".product_minidetail").last().text().split(":")[1].trim()
    } catch (jj) {
        c = 6391, d = b = "", a = 0
    } else if (-1 != f.indexOf("yves-rocher.se")) try {
        c = 6155, g = "SEK", a = $j('#col2 [id*="addform"] span.prix').text().split("kr")[0].replace(",", ".").trim(), b = "YVES ROCHER", d = e = $j("h1.titre").last().text().trim()
    } catch (kj) {
        c = 6155,
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("yves-rocher.no")) try {
        c = 6166, g = "NOK", a = $j('#col2 [id*="addform"] span.prix').text().split("kr")[1].replace(",", ".").trim(), b = "YVES ROCHER", d = e = $j("h1.titre").last().text().trim()
    } catch (lj) {
        c = 6166, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("yves-rocher.be")) try {
        c = 47416, g = "\u20ac", a = $j('#col2 [id*="addform"] span.prix').clone().children().remove().end().text().split("\u20ac")[1].replace(",", ".").trim(), b = "YVES ROCHER", d = e = $j("h1.titre").last().text().trim()
    } catch (mj) {
        c = 47416,
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("yvesrocherusa.com")) try {
        c = 1401, g = "$", a = $j('#col2 [id*="addform"] span.prix').text().split("$")[1].trim(), b = "YVES ROCHER", d = e = $j("h1.titre").last().text().trim()
    } catch (nj) {
        c = 1401, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("yves-rocher.dk")) try {
        c = 51375, g = "DKK", a = $j('#col2 [id*="addform"] span.prix').text().split("kr")[1].replace(",", ".").trim(), b = "YVES ROCHER", d = e = $j("h1.titre").last().text().trim()
    } catch (oj) {
        c = 6166, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("yves-rocher.fi")) try {
        c =
            47284, g = "\u20ac", a = $j('#col2 [id*="addform"] span.prix').text().split("\u20ac")[0].replace(",", ".").trim(), b = "YVES ROCHER", d = e = $j("h1.titre").last().text().trim()
    } catch (pj) {
        c = 47284, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("yves-rocher.nl")) try {
        c = 49589, g = "\u20ac", a = $j('#col2 [id*="addform"] span.prix').clone().children().remove().end().text().split("\u20ac")[1].replace(",", ".").trim(), b = "YVES ROCHER", d = e = $j("h1.titre").last().text().trim()
    } catch (qj) {
        c = 49589, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("yves-rocher.es")) try {
        c =
            6333, g = "\u20ac", a = $j('#col2 [id*="addform"] span.prix').text().split("\u20ac")[0].replace(",", ".").trim(), b = "YVES ROCHER", d = e = $j("h1.titre").last().text().trim()
    } catch (rj) {
        c = 6333, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("eshop.sinequanone.comxxx")) try {
        c = 44968, a = $j(".price").last().text().split("\u20ac")[0].trim(), b = "Sinequanone", d = e = $j(".product_name.product_name_promotion").text().trim()
    } catch (sj) {
        c = 44968, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.hectoretlola.comxxx")) try {
        c = 44965, a = $j(".price").last().text().split("\u20ac")[0].trim(),
        b = "Sinequanone", d = e = $j(".product_name.product_name_promotion").text().trim()
    } catch (tj) {
        c = 44965, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.galerieslafayette.comxxx")) try {
        c = 44317, a = $j(".prix.solde").text().split("\u20ac")[0].trim(), b = "GALERIES lafayette", d = e = $j("#brand-title").text().trim()
    } catch (uj) {
        c = 44317, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.brandalley.co.ukxxx")) try {
        c = 44244, a = $j(".fiche_prix_vente").text().split("\u00a3")[1].trim(), b = "BrandAlley", d = e = $j(".fiche_titre h1").text().trim()
    } catch (vj) {
        c =
            44244, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.atelierdecourcelles.comxxx")) try {
        c = 6232, a = $j(".special-price .price").text().split("\u20ac")[0].trim(), b = "ATELIER DE COURCELLES", d = e = $j(".product-name-name").text().trim()
    } catch (wj) {
        c = 6232, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.handpickedcollection.com")) try {
        c = 45143, a = $j("form .special-price .price").length ? $j("form .special-price .price").text().split("\u00a3")[1].trim() : $j(".regular-price .price").text().split("\u00a3")[1].trim(), b = "THE HANDPICKED COLLECTION",
        d = e = $j(".product-name h1").text().trim()
    } catch (xj) {
        c = 45143, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.office.co.uk")) try {
        c = 4565, g = "\u00a3", a = $j(".price.red").length ? $j(".price.red span").text().split("\u00a3")[1].trim() : $j(".price").text().split("\u00a3")[1].replace("NOW:", "").trim(), b = "OFFICE", d = e = $j(".title h2 span").text().trim()
    } catch (yj) {
        c = 4565, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.booksamillion.com")) try {
        c = 2272, a = $j("li span strong").text().split("$")[1].trim(), b = "BAM", d = e = $j("td span strong").eq(0).text().trim()
    } catch (zj) {
        c =
            2272, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.black.co.uk")) try {
        c = 4531, a = $j(".static.new-price").text().split("\u00a3")[1].trim(), b = "black.co.uk", e = $j(".right h1").text().trim(), d = $j("li strong").text().split(":")[1].trim()
    } catch (Aj) {
        c = 4531, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.nocibe.fr")) try {
        c = 6383, a = $j(".ligne_n .prix").first().text().split("\u20ac")[0].trim(), b = "NOCIBE", d = e = $j(".produit_d h1").text().trim()
    } catch (Bj) {
        c = 6383, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.nafnaf.com")) try {
        c = 44962, a = $j(".special-price .price").length ?
            $j(".special-price .price").text().split("\u20ac")[0].trim() : $j(".price").text().split("\u20ac")[0].trim(), b = "NAF NAF", d = e = $j(".product_name.product_name_promotion").text().trim()
    } catch (Cj) {
        c = 44962, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.my-fashionlab.com")) try {
        c = 44037, a = $j(".product_price").text().split("\u20ac")[0].trim(), b = "MY FASHION LAB", d = e = $j(".product_name").text().trim()
    } catch (Dj) {
        c = 44037, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.shopmanhattanite.com")) try {
        c = 1841, a = $j("#productPrices").text().split("$")[1].trim(),
        b = "Manhattanite", d = e = $j("#productName").text().trim()
    } catch (Ej) {
        c = 1841, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.vetaffaires.fr")) try {
        c = 44053, a = $j(".special-price .price").text().split("\u20ac")[0].trim(), b = "vet affaires", e = $j(".product-name h1").text().trim(), d = $j("#zx_identifier").text().trim()
    } catch (Fj) {
        c = 44053, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.ziapepe.com")) try {
        c = 6286, a = $j(".pPrice").text().split("\u20ac")[2].trim(), b = "PATRIZIZ PEPE", d = e = $j(".caseUpper").text().trim()
    } catch (Gj) {
        c = 6286, d = b = "",
        a = 0
    } else if (-1 != f.indexOf("www.westfield.com.au")) try {
        c = 44438, a = $j(".sale .amount").length ? $j(".sale .amount").text().split("$")[1].trim() : $j(".amount").text().split("$")[1].trim(), b = "NAF NAF", d = e = $j(".product_details h1").text().trim()
    } catch (Hj) {
        c = 44438, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.dcshoes.com.au")) try {
        c = 44432, a = $j(".special-price").length ? $j(".special-price").text().split("AUD")[1].trim() : $j(".price-box .regular-price .price").first().text().split("AUD")[1].trim(), b = "DC SHOES", d = e = $j(".details header h1").text().trim()
    } catch (Ij) {
        c =
            44432, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.quiksilverwomen.com.au")) try {
        c = 44426, a = $j('.details span[id*="product-price-"]').first().text().split("AUD")[1].trim(), b = "QUIKSILVER", d = e = $j(".details header h1").text().trim()
    } catch (Jj) {
        c = 44426, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.quiksilver.com.au")) try {
        c = 44426, g = "$", l = 8, a = $j(".price-box .regular-price .price").last().text().split("AUD")[1].trim(), b = "QUIKSILVER", d = e = $j(".details header h1").text().trim()
    } catch (Kj) {
        c = 44426, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.roxyaustralia.com.au")) try {
        c =
            44429, a = $j(".details .price-box .regular-price .price").last().text().split("AUD")[1].trim(), b = "ROXY", d = e = $j(".details header h1").text().trim()
    } catch (Lj) {
        c = 44429, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.lkbennett.com")) try {
        c = 4696, a = $j(".objframe .price.wasPrice").length ? $j(".objframe span").eq(1).text().split("\u00a3")[1].trim() : $j(".objframe .price").text().split("\u00a3")[1].trim(), b = "L.K. Bennett", d = e = $j(".product-title").text().trim()
    } catch (Mj) {
        c = 4696, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.joseph.co.uk")) try {
        c =
            44717, a = $j(".priceNow").text().split("\u00a3")[1].trim(), b = "JOSEPH", d = e = $j(".grid_12.push_12.alpha.pdcontent h1").text().trim()
    } catch (Nj) {
        c = 44717, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.johnlewis.com")) try {
        c = 4554, a = $j("#prod-price .price strong").text().split("\u00a3")[1].trim(), b = "John Lewis", d = e = $j(".col-10.first #prod-title").text().trim()
    } catch (Oj) {
        c = 4554, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.paperlondon.com")) try {
        c = 45074, $j("#product-price em"), a = $j("#product-price").text().split("\u00a3")[1].trim(),
        b = "PAPER LONDON", d = e = $j("#product-information h1").text().trim()
    } catch (Pj) {
        c = 45074, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.the-editeur.com")) try {
        c = 44711, a = $j(".text-pricespecial").length ? $j(".text-pricespecial").text().split("\u00a3")[1].trim() : $j(".text-price").text().split("\u00a3")[1].trim(), b = "the EDITEUR", e = $j("p").text().split("Available")[0].trim(), d = $j(".productcode").text().split(":")[1].trim()
    } catch (Qj) {
        c = 44711, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.veryeickhoff.com")) try {
        c = 45340, a = $j(".price").text().split("\u20ac")[1].replace(".",
            "").replace(",", ".").trim(), b = "VERY EICKHOFF", d = e = $j("h1").text().trim()
    } catch (Rj) {
        c = 45340, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.zapa.fr")) try {
        c = 45295, a = $j(".special-price .price").text().split("\u20ac")[0].trim(), b = "ZAPA", d = e = $j(".product_name.product_name_promotion").text().trim()
    } catch (Sj) {
        c = 45295, d = b = "", a = 0
    } else if (-1 != f.indexOf("fr.bazarchic.com")) try {
        c = 45310, g = "\u20ac", a = $j("#fiche_price div").eq(2).text().split("\u20ac")[0].trim(), b = "BAZARCHIC", d = e = $j("#fiche_price div").first().text().trim()
    } catch (Tj) {
        c =
            45310, d = b = "", a = 0
    } else if (-1 != f.indexOf("eshop.americanretro.fr")) try {
        c = 45289, a = $j(".reduc_old_price").length ? $j(".reduc_new_price.reduc_new_price_40").text().split("\u20ac")[0].trim() : $j(".price").text().split("\u20ac")[0].trim(), b = "AMERICAN RETRO", d = e = $j(".product-name").clone().children().remove().end().text().trim()
    } catch (Uj) {
        c = 45289, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.coggles.com")) try {
        c = 48921, $j(".currency-current").hasClass("GBP") ? (g = "\u00a3", a = $j('span[itemprop="price"]').text().split("\u00a3")[1].trim()) :
            $j(".currency-current").hasClass("EUR") && (g = "\u20ac", a = $j('span[itemprop="price"]').text().split("\u20ac")[1].trim()), b = "COGGLES", d = e = $j('.product-details span[itemprop="name"]').text().trim()
    } catch (Vj) {
        c = 48921, d = b = "", a = 0
    } else if (-1 != f.indexOf("sheinside")) try {
        k = $j("#user_menu3 .three.outer").text().split(":")[1].trim(), "GBP\u00a3" == k ? (c = 51485, g = "\u00a3", a = $j(".good_spantotal").text().split(g)[1].trim()) : "US$" == k ? (c = 51485, g = "$", a = $j(".good_spantotal").text().split(g)[1].trim()) : "EUR\u20ac" == k ? (c =
            51485, g = "\u20ac", a = $j(".good_spantotal").text().split(g)[1].trim()) : "S.Kr." == k && (c = 51485, g = "kr", a = $j(".good_spantotal").text().split("S.Kr.")[1].trim()), b = "SheInside", d = e = $j(".good_descright h1").text().trim()
    } catch (Wj) {
        d = b = "", a = 0
    } else if (-1 != f.indexOf("www.kipling-usa.com")) try {
        c = 44216, a = $j(".saleprice").length ? $j(".saleprice").text().split("$")[1].trim() : $j(".regprice").text().split("$")[1].trim(), b = "kipling", d = e = $j(".productTitle").text().trim()
    } catch (Xj) {
        c = 44216, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.theiconic.com.au")) try {
        c =
            45790, a = $j(".pull-right .price.price-special").length ? $j(".pull-right .price.price-special").text().split("$")[1].trim() : $j(".row-fluid .pull-right .price").text().split("$")[1].trim(), b = "THE ICONIC", d = e = $j(".row-fluid h2").first().text().trim()
    } catch (Yj) {
        c = 45790, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.covetique.com")) try {
        c = 45424, a = $j(".product-shop .old-price").length ? $j(".product-shop .special-price .price").text().split("\u00a3")[1].trim() : $j(".product-shop .regular-price .price").text().split("\u00a3")[1].trim(),
        b = "COVETIQUE", d = e = $j(".product-shop .product-name h1").text().trim()
    } catch (Zj) {
        c = 45424, d = b = "", a = 0
    } else if (-1 != f.indexOf("rtister.com")) try {
        c = 45338, a = $j("#productDetails .product-price span").first().text().trim(), b = "rtister", d = e = $j("#productDetails h1.product-title").text().trim()
    } catch (ak) {
        c = 45338, d = b = "", a = 0
    } else if (-1 != f.indexOf("ardenreed.com")) try {
        c = 44648, a = $j(".precio").text().split("$")[1].trim(), b = "ARDENREED", d = e = e = $j(".titulo").text().trim()
    } catch (bk) {
        c = 44648, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.fashionsisters.de")) try {
        c =
            45376, $j("#vks0"), a = $j("#ProduktPreisOben span").first().text().replace(",", ".").trim(), b = "fashion Sisters", d = e = $j("#ProduktBezeichnung").text().trim()
    } catch (ck) {
        c = 45376, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.bonoboplanet.com")) try {
        c = 44011, a = $j(".prixpromo").text().split("\u20ac")[0].trim(), b = "BONOBO JEANS", d = e = $j("#prodLayer h2").text().trim()
    } catch (dk) {
        c = 44011, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.barneyswarehouse.com")) try {
        c = 48047, a = $j(".standardprice").clone().children().remove().end().text().split("$")[1].trim(),
        b = "BARNEYS WAREHOUSE", d = e = $j("#detail-column h2").text().trim()
    } catch (ek) {
        c = 48047, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.charlesdavid.com")) try {
        c = 6143, a = $j(".special-price").length ? $j(".special-price .price").text().split("$")[1].trim() : $j(".regular-price .price").text().split("$")[1].trim(), b = "charles david", d = e = $j(".std").first().text().trim()
    } catch (fk) {
        c = 6143, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.paigeusa.com")) try {
        c = 46750, a = $j("#UnitCostSpan").text().split("$")[1].trim(), b = "PAIGE", d = e = $j(".productSpecifics h1").first().text().trim()
    } catch (gk) {
        c =
            46750, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.kiyonna.com")) try {
        c = 44133, a = $j(".price").text().split("$")[1].trim(), b = "KIYONNA", d = e = $j(".section h2").text().trim()
    } catch (hk) {
        c = 44133, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.thejewelhut.com")) try {
        c = 4823, a = $j("#price").text().split("$")[1].trim(), b = "thejewelhut", d = e = $j(".title").first().text().trim()
    } catch (ik) {
        c = 4823, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.footlocker.com")) try {
        c = 44211, a = $j("#pdp_priceRange").text().split("$")[1].trim(), b = "Foot Locker", e = $j("#pdp_info h1").text().trim(),
        d = $j("#productSKU").text().trim()
    } catch (jk) {
        c = 44211, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.sharperimage.com")) try {
        c = 44210, a = $j(".pdp-cart-price .sale").length ? $j(".pdp-cart-price .sale").text().split("$")[1].trim() : $j(".pdp-cart-price strong").text().split("$")[1].trim(), b = "SHARPER IMAGE", d = e = $j(".pdp-info-summary h3").text().trim()
    } catch (kk) {
        c = 44210, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.designerliving.com")) try {
        c = 44173, a = $j(".prodsale").text().split("$")[1].trim(), b = "DESIGNER LIVING", d = e = $j(".prodHeader").text().trim()
    } catch (lk) {
        c =
            44173, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.omorovicza.co.uk")) try {
        c = 44156, a = $j(".product-price-box .price").text().split("\u00a3")[1].trim(), b = "Omorovicza", d = e = $j(".product-name h1").text().trim()
    } catch (mk) {
        c = 44156, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.masdings.com")) try {
        c = 44154, a = $j(".currencyValue").eq(1).text().trim(), b = "MASDINGS", e = $j(".article span").text().split("\u00a3")[0].trim(), d = $j(".tab p").first().text().split(":")[1].trim()
    } catch (nk) {
        c = 44154, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.zales.com")) try {
        c =
            44215, a = $j(".listprice12").length ? $j(".formatPrice").eq(1).text().split("$")[1].trim() : $j(".formatPrice").text().split("$")[1].trim(), b = "ZALES", d = e = $j("#productTitle").text().trim()
    } catch (ok) {
        c = 44215, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.gordonsjewelers.com")) try {
        c = 44214, a = $j(".salePrice").length ? $j(".salePrice").text().split("$")[1].trim() : $j(".normPrice").text().split("$")[1].trim(), b = "Gordons JEWELERS", d = e = $j("#productTitle").text().trim()
    } catch (pk) {
        c = 44214, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.threadbare.co")) try {
        c =
            45446, a = $j(".price").text().split("$")[1].replace("AUD", "").trim(), b = "threadbare", d = e = $j(".checkoutdetail h1").text().trim()
    } catch (qk) {
        c = 45446, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.artfulhome.com")) try {
        c = 44212, a = $j("#salesColumn .description").eq(4).text().split("$")[1].trim(), b = "artful home", d = e = $j(".artitem").first().text().trim()
    } catch (rk) {
        c = 44212, d = b = "", a = 0
    } else if (-1 != f.indexOf("maiyet.com")) try {
        c = 45472, a = $j(".price").text().split("$")[1].replace(",", "").trim(), b = "MAIYET", d = e = $j("#item_info h1").text().trim()
    } catch (sk) {
        c =
            45472, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.portero.com")) try {
        c = 3982, a = $j(".price").text().split("$")[1].replace(",", "").trim(), b = "PORTERO", d = e = $j(".product-name h2").text().trim()
    } catch (tk) {
        c = 3982, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.kay.com")) try {
        c = 44237, a = $j(".left.prices-box .price").text().split("$")[1].trim(), b = "KAY JEWELERS", e = $j(".product-name").text().trim(), d = $j(".stock-number").text().split(":")[1].trim()
    } catch (uk) {
        c = 44237, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.hartstrings.com")) try {
        c =
            44332, a = $j(".info-box .new-price").length ? $j(".info-box .new-price").text().split("$")[1].trim() : $j(".price").text().split("$")[1].replace("-", "").trim(), b = "Hartstrings", d = e = $j(".info-box h2").text().trim()
    } catch (vk) {
        c = 44332, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.tumi.com")) try {
        c = 44336, a = $j(".amount.cufon .cufon.cufon-canvas").text().split("$")[1].trim(), b = "TUMI", d = e = $j(".product-title.fn").text().trim()
    } catch (wk) {
        c = 44336, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.hankypanky.com")) try {
        c = 44349, a = $j(".product_price").text().split("$")[1].trim(),
        b = "hanky panky", d = e = $j(".product_title").text().trim()
    } catch (xk) {
        c = 44349, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.thomaspink.com")) try {
        c = 44329, a = $j(".product_price").text().split("\u00a3")[1].trim(), b = "THOMAS PINK", e = $j(".product_title").text().trim(), d = $j(".product_code").text().split(":")[1].trim()
    } catch (yk) {
        c = 44329, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.zalora.com.my")) try {
        c = 44444, g = "RM", a = $j(".value").last().text().trim(), b = "ZALORA", d = e = $j(".prd-title.fsm").text().trim()
    } catch (zk) {
        c = 44444, d = b = "",
        a = 0
    } else if (-1 != f.indexOf("www.zalora.co.th")) try {
        c = 44471, g = "THB", a = $j(".value").last().text().trim(), b = "ZALORA", d = e = $j(".prd-title.fsm").text().trim()
    } catch (Ak) {
        c = 44471, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.zalora.com.ph")) try {
        c = 44654, g = "\u20b1", a = $j(".value").last().text().trim(), b = "ZALORA", d = e = $j(".prd-title.fsm").text().trim()
    } catch (Bk) {
        c = 44654, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.zalora.sg")) try {
        c = 44651, g = "S$", a = $j(".value").last().text().trim(), b = "ZALORA", d = e = $j(".prd-title.fsm").text().trim()
    } catch (Ck) {
        c =
            44651, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.icbnyc.com")) try {
        c = 44456, a = $j(".price").clone().children().remove().end().text().split("$")[1].trim(), b = "icb", d = e = $j(".productname").text().trim()
    } catch (Dk) {
        c = 44456, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.alternativeapparel.com")) try {
        c = 44450, a = $j(".itemOnSale").length ? $j(".salePrice").eq(1).text().split("$")[1].trim() : $j(".price").text().split("$")[1].trim(), b = "ALTERNATIVE", d = e = $j("#productTitle span").text().trim()
    } catch (Ek) {
        c = 44450, d = b = "", a = 0
    } else if (-1 !=
        f.indexOf("www.watchstation.com")) try {
        c = 4528, a = $j(".price").text().split("$")[1].replace(",", "").trim(), b = "Watch Station", d = e = $j(".pdpTitle").first().text().split("-")[0].trim()
    } catch (Fk) {
        c = 4528, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.tulle4us.com")) try {
        c = 45218, a = $j("#price .salePrice.myerror").length ? $j("#price .salePrice.myerror").text().split("$")[1].trim() : $j(".price").clone().children().remove().end().text().split("$")[1].trim(), b = "Tulle", d = e = $j(".name.mb10").clone().children().remove().end().text().trim()
    } catch (Gk) {
        c =
            45218, d = b = "", a = 0
    } else if (-1 != f.indexOf("emersonfry.com")) try {
        c = 44178, a = $j(".price").text().split("$")[1].trim(), b = "EMERSON FRY", d = e = $j(".name").text().split("-")[0].trim()
    } catch (Hk) {
        c = 44178, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.chicnova.com")) try {
        c = 44447, a = $j(".chic_productinfor_main .price").last().text().split("$")[1].trim(), b = "chicnova", d = e = $j(".chic_productinfor_main .chic_product_name").text().trim()
    } catch (Ik) {
        c = 44447, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.dessy.com")) try {
        c = 44144, a = $j(".details-price").text().split("$")[1].trim(),
        b = "THE DESSY GROUP", d = e = $j(".details").text().trim()
    } catch (Jk) {
        c = 44144, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.bcbgeneration.com")) try {
        c = 52633, a = $j("#pdpMain #product-content .product-price .price-sales").first().text(), "" === a && (a = $j("#pdpMain #product-content .product-price").first().text()), a = a.split("$")[1].trim(), b = "BCBGMAXAZRIA", d = e = $j(".product-name").first().text().trim()
    } catch (Kk) {
        c = 52633, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.herveleger.com")) try {
        c = 45647, a = $j(".original-price").text().split("$")[1].replace(",",
            "").trim(), b = "HERVE LEGER", d = e = $j(".product-name").first().text().trim()
    } catch (Lk) {
        c = 45647, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.bcbg.com")) try {
        c = 52630, a = $j("#pdpMain #product-content .product-price .price-sales").first().text(), "" === a && (a = $j("#pdpMain #product-content .product-price").first().text()), a = a.split("$")[1].trim(), b = "BCBGMAXAZRIA", d = e = $j(".product-name").first().text().trim()
    } catch (Mk) {
        c = 52630, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.potterybarn.com")) try {
        c = 49362, a = $j(".pip-summary .product-subset .subset-pricing .price-special .price-amount").length ?
            $j(".pip-summary .product-subset .subset-pricing .price-special .price-amount").first().text().replace(",", "").trim() : $j(".pip-summary .price-container .product-price .price-sale .price-amount").length ? $j(".pip-summary .price-container .product-price .price-sale .price-amount").first().text().replace(",", "").trim() : $j(".pip-summary .price-state.price-standard .price-amount").first().text().replace(",", "").trim(), b = "POTTEERY BARN", d = e = $j(".pip-summary h1").first().text().trim()
    } catch (Nk) {
        c = 49362, d =
            b = "", a = 0
    } else if (-1 != f.indexOf("www.pbteen.com")) try {
        c = 49365, a = $j(".pip-summary .price-state.price-strike-sale").length ? $j(".price-state.price-sale .price-amount").first().text().trim() : $j(".price-state.price-standard .price-amount").first().text().trim(), b = "PB teen", d = e = $j(".pip-summary h1").first().text().trim()
    } catch (Ok) {
        c = 49365, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.inthemoodintimates.com")) try {
        c = 44501, a = $j(".pricecolor.colors_productprice span").text().split("$")[1].trim(), b = "In the Mood Intimates",
        d = e = $j(".productnamecolorLARGE.colors_productname").text().trim()
    } catch (Pk) {
        c = 44501, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.discountwatchstore.com")) try {
        c = 44189, a = $j("#price").length ? $j("#price").text().split("$")[1].trim() : $j(".price").text().split("$")[1].trim(), b = "discount Watch Store", d = e = $j(".page_headers h1").text().trim()
    } catch (Qk) {
        c = 44189, d = b = "", a = 0
    } else if (-1 != f.indexOf("theorganizedparent")) try {
        c = 44197, a = $j(".newPrice").length ? $j(".newPrice").text().split("$")[1].trim() : $j("#productDetailSalePrice").text().split("$")[1].trim(),
        b = "The Organized Parent", d = e = $j("#productDisplayNameStr").text().trim()
    } catch (Rk) {
        c = 44197, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.hothair.co.uk")) try {
        c = 44181, a = $j("#product_price").text().trim(), b = "hot hair", d = e = $j("#center-main-content h1").text().trim()
    } catch (Sk) {
        c = 44181, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.twoseasons.co.uk")) try {
        c = 44201, g = "\u00a3", a = $j(".rrp.strike").length ? $j("#salePrice").text().split("\u00a3")[1].trim() : $j("#listPrice").text().split("\u00a3")[1].trim(), b = "TWO SEASONS", d = e = $j(".brandHeader ").text().trim()
    } catch (Tk) {
        c =
            44201, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.bagsbuy.com")) try {
        c = 44231, a = $j(".price").text().split("$")[1].trim(), b = "Bagsbuy", d = e = $j(".stylename").first().text().trim()
    } catch (Uk) {
        c = 44231, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.jockey.com")) try {
        c = 44230, a = $j(".ProductListPrice.Strike").length ? $j(".ProductMarkedDownPrice").text().split("$")[1].trim() : $j(".ProductListPrice").text().split("$")[1].trim(), b = "JOCKEY", d = e = $j(".ProductNameHeading").text().trim()
    } catch (Vk) {
        c = 44230, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.electric-yoga.com")) try {
        c =
            44333, a = $j("#price").clone().children().remove().end().text().split("$")[1].trim(), b = "ELECTRIC YOGA", d = e = $j(".product_img_block.clearfix h2").text().trim()
    } catch (Wk) {
        c = 44333, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.dl1961.com")) try {
        c = 5909, a = $j(".variantprice span").text().split("$")[1].replace(",", "").trim(), b = "DL", e = $j(".ProductNameText").text().split("-")[1].trim(), d = $j(".ProductNameText").text().split("-")[0].trim()
    } catch (Xk) {
        c = 5909, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.lesmillsclothing.com")) try {
        c =
            44414, a = $j(".ProductPricing span").last().text().split("$")[1].trim(), b = "LesMills", d = e = $j(".ItemName").first().text().trim()
    } catch (Yk) {
        c = 44414, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.reno.de")) try {
        c = 44390, a = $j("#productPrice span").last().text().split("\u20ac")[0].replace(",", ".").trim(), b = "RENO", d = e = $j("#productCategory strong").text().trim()
    } catch (Zk) {
        c = 44390, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.shopgarageonline.com")) try {
        c = 44191, a = $j(".sale-price").first().text().split("$")[1].trim(), b = "GARAGE",
        d = e = $j(".fn").first().text().trim()
    } catch ($k) {
        c = 44191, d = b = "", a = 0
    } else if (-1 != f.indexOf("store.scholastic.com")) try {
        c = 3822, a = $j(".purchasePriceRow").length ? $j(".purchasePriceRow .value").text().split("$")[1].trim() : $j(".pricingArea .value").text().split("$")[1].trim(), b = "THE SCHOLASTIC STORE", d = e = $j(".productName").text().trim()
    } catch (al) {
        c = 3822, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.claudiepierlot.com")) try {
        c = 45301, a = $j(".price").text().split("\u20ac")[0].trim(), b = "CLAUDIE PIERLOT", d = e = $j("#productBox_right_top .product_name ").text().trim()
    } catch (bl) {
        c =
            45301, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.freemantporter.com")) try {
        c = 45292, a = $j(".price").text().split(":")[1].replace("\u20ac", "").replace("Prix normal", "").trim(), b = "FREEMAN T PORTER", d = e = $j(".page-header.clearfix h1").text().trim()
    } catch (cl) {
        c = 45292, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.letanneur.com")) try {
        c = 45304, a = $j(".price").text().replace(",", ".").split("\u20ac")[0].trim(), b = "LE TANNEUR", d = e = $j(".product-name h1").text().trim()
    } catch (dl) {
        c = 45304, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.bonton.fr")) try {
        c =
            45298, a = $j(".price").text().split("\u20ac")[0].trim(), b = "BONTON", d = e = $j(".product-name").text().trim()
    } catch (el) {
        c = 45298, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.jeansandfashion.com")) try {
        c = 45421, a = $j("#value").text().split("\u20ac")[1].replace(",", ".").trim(), b = "JEANS AND FASHION", d = e = $j("#prod-info h1").text().trim()
    } catch (fl) {
        c = 45421, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.stylistpick.fr")) try {
        c = 45397, g = "\u20ac", a = $j(".price").text().split("\u20ac")[0].replace(",", ".").trim(), b = "stylistpick", d = e = $j(".product-name").first().text().trim()
    } catch (gl) {
        c =
            45397, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.markandgraham.com")) try {
        c = 49214, a = $j(".pip-summary .currency .price-amount").length ? $j(".pip-summary .currency .price-amount").last().text().replace(",", "").trim() : $j(".pip-summary .currency .currency-amount").last().text().replace(",", "").trim(), b = "Mark AND Graham", d = e = $j(".pip-summary h1").text().trim()
    } catch (hl) {
        c = 49214, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.glassworks-studios.com")) try {
        k = $j(".currency .selected").text().trim(), "\u00a3 GBP" === k ? (c = 44322,
            a = $j(".price ins").length ? $j(".price ins").text().split("\u00a3")[1].trim() : $j(".product_details .price").text().split("\u00a3")[1].trim(), b = "GLASSWORKS", d = e = $j(".product_details h1").text().trim()) : "$ USD" === k && (c = 4212, a = $j(".price ins").length ? $j(".price ins").text().split("$")[1].trim() : $j(".product_details .price").text().split("$")[1].trim(), b = "GLASSWORKS", d = e = $j(".product_details h1").text().trim())
    } catch (il) {
        d = b = "", a = 0
    } else if (-1 != f.indexOf("www.sweatybetty.com")) try {
        c = 4504, a = $j("#priceCopy").text().split("$")[1].replace(",",
            "").trim(), b = "Sweaty Betty", d = e = $j(".cont-prod-title h1").text().trim()
    } catch (jl) {
        c = 4504, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.pinkmascara.com")) try {
        c = 4507, a = $j(".price.saleprice").length ? $j(".price.saleprice").clone().children().remove().end().text().split("$")[1].trim() : $j(".price").text().split("$")[1].trim(), b = "pinkMASCARA", d = e = $j("h3").eq(1).text().trim()
    } catch (kl) {
        c = 4507, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.sundancecatalog.com")) try {
        c = 5880, a = $j(".columnItem .productPricing #productPricing span").first().text().split("$")[1].trim(),
        b = "sundance", d = e = $j(".itrLeftColumn .productName").first().text().trim()
    } catch (ll) {
        c = 5880, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.aquabyaqua.com")) try {
        c = 45710, a = $j(".form .special-price").length ? $j(".special-price .price").text().split("\u00a3")[1].trim() : $j(".regular-price .price").last().text().split("\u00a3")[1].trim(), b = "AQUA BY AQUA", d = e = $j(".form h2").first().clone().children().remove().end().text().trim()
    } catch (ml) {
        c = 45710, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.wildfoxcouture.co.uk")) try {
        c = 6114,
        a = $j(".price").text().split("\u00a3")[1].replace(",", "").trim(), b = "WILDFOX", d = e = $j(".prodtittle").text().trim()
    } catch (nl) {
        c = 6114, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.styleserver.de")) try {
        c = 45499, a = $j(".detailtabdata .price").clone().children().remove().end().text().split("\u20ac")[0].replace(",", ".").trim(), b = "STYLE SERVER", d = e = $j("#productintro h1").text().trim()
    } catch (ol) {
        c = 45499, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.temperleylondon.com")) try {
        s = $j(".region .selectWrapper span").text().trim(), "UK(\u00a3)" ===
            s ? (g = "\u00a3", c = 45475, a = $j(".price-box .price").text().split("\u00a3")[1].replace(",", "").trim()) : "US & CANADA($)" === s && (g = "$", c = 45475, a = $j(".price-box .price").text().split("$")[1].replace(",", "").trim()), b = "Temperley", d = e = $j(".product-name h1").text().trim()
    } catch (pl) {
        d = b = "", a = 0
    } else if (-1 != f.indexOf("www.lyleandscott.com")) try {
        c = 45517, a = $j(".now_price").text().split("\u00a3")[1].replace(",", "").trim(), b = "Lyle and Scott", d = e = $j(".productTitle").text().trim()
    } catch (ql) {
        c = 45517, d = b = "", a = 0
    } else if (-1 !=
        f.indexOf("www.joythestore.com")) try {
        c = 45313, a = $j(".price-box .price").last().text().split("\u00a3")[1].replace(",", "").trim(), b = "JOY", d = e = $j(".product-name h1").text().trim()
    } catch (rl) {
        c = 45313, d = b = "", a = 0
    } else if (-1 != f.indexOf("store.nike.com")) try {
        k = $j(".nike-cq-list-item.nike-cq-list-item1.nike-cq-list-item-level1.nike-cq-list-item-first").last().text().trim(), "Belgium" == k ? (c = 45511, g = "\u20ac", a = $j('span[itemprop="price"]').text().split("\u20ac")[0].replace(",", ".").trim()) : "Espa\u00f1a" == k ? (c = 45523,
            g = "\u20ac", a = $j('span[itemprop="price"]').text().split("\u20ac")[0].replace(",", ".").trim()) : "Finland" == k ? (c = 45478, g = "\u20ac", a = $j('span[itemprop="price"]').text().split("\u20ac")[0].replace(",", ".").trim()) : "France" == k ? (c = 45505, g = "\u20ac", a = $j('span[itemprop="price"]').text().split("\u20ac")[0].replace(",", ".").trim()) : "Sweden" == k ? (c = 45328, g = "kr", a = $j('span[itemprop="price"]').text().split("kr")[0].replace(",", ".").replace(" ", "").trim()) : "Italia" == k ? (c = 49182, g = "\u20ac", a = $j('span[itemprop="price"]').text().split("\u20ac")[0].replace(",",
            ".").trim()) : "Deutschland" == k ? (c = 46063, g = "\u20ac", a = $j('span[itemprop="price"]').text().split("\u20ac")[0].replace(",", ".").trim()) : "Denmark" == k ? (c = 46054, g = "kr", a = $j('span[itemprop="price"]').text().split("kr")[1].replace(".", "").trim()) : "Netherlands" == k ? (c = 46060, g = "\u20ac", a = $j('span[itemprop="price"]').text().split("\u20ac")[0].replace(",", ".").trim()) : "United Kingdom" == k && (c = 46057, g = "\u00a3", a = $j('span[itemprop="price"]').text().split("\u00a3")[1].replace(",", ".").trim()), b = "Nike", d = e = $j('h1[itemprop="name"]').text().trim()
    } catch (sl) {
        d =
            b = "", a = 0
    } else if (-1 != f.indexOf("www.darlingclothes.com")) try {
        c = 45532, g = "\u00a3", a = $j('input[name="txtwebprice"]').val(), b = "Darling", d = e = $j("#prc h1").text().trim()
    } catch (tl) {
        c = 45532, d = b = "", a = 0
    } else if (-1 != f.indexOf("shop.charliebrown.com.au")) try {
        c = 48601, a = $j(".just-prise").first().text().split("$")[1].trim(), b = "Charlie Brown", d = e = $j("#ProductDetails h2 cufon").text().trim()
    } catch (ul) {
        c = 48601, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.bonds.com.au")) try {
        c = 48589, a = $j(".price-box .old-price").length ? $j(".special-price .price").text().split("$")[1].trim() :
            $j(".regular-price .price").text().split("$")[1].split("A")[0].trim(), b = "BONDS", d = e = $j(".product-name h1").text().trim()
    } catch (vl) {
        c = 48589, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.shoesofprey.com")) try {
        c = 45193, a = $j(".shoe-price").text().split("$")[1].replace("USD", "").trim(), b = "Shoes of Prey", d = e = $j(".shoe-heading p").text().trim()
    } catch (wl) {
        c = 45193, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.styletread.com.au")) try {
        c = 44152, a = $j(".price-box .old-price").length ? $j(".special-price .price").text().split("$")[1].trim() :
            $j(".regular-price .price").text().split("$")[1].trim(), b = "style tread", d = e = $j(".title-underline").text().trim()
    } catch (xl) {
        c = 44152, d = b = "", a = 0
    } else if (-1 != f.indexOf("orbclothing.ca")) try {
        c = 44177, a = $j('input[name="price"]').val(), b = "orb", d = e = $j(".grid_5.omega.product_info h1").text().trim()
    } catch (yl) {
        c = 44177, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.100percentpure.com")) try {
        c = 44179, a = $j(".price").text().split("$")[1].trim(), b = "100 percent pure", d = e = $j(".title").text().trim()
    } catch (zl) {
        c = 44179, d = b = "", a =
            0
    } else if (-1 != f.indexOf("www.totsy.com")) try {
        c = 44174, a = $j(".price.special-price.big_price").text().split("$")[1].trim(), b = "totsy", d = e = $j(".page-header.row h3").text().trim()
    } catch (Al) {
        c = 44174, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.jessicasimpson.com")) try {
        c = 4469, a = $j(".tableitem.detailPricing .pricesale").length ? $j(".tableitem.detailPricing .pricesale").text().split("$")[1].trim() : $j(".tableitem.detailPricing").text().split("$")[1].trim(), b = "Jessica Simpson", d = e = $j(".detailheader").text().trim()
    } catch (Bl) {
        c =
            4469, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.obaz.com")) try {
        c = 44328, a = $j(".pricing strong").first().text().split("$")[1].trim(), b = "obaz", d = e = $j(".info h1").first().text().trim()
    } catch (Cl) {
        c = 44328, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.pendleton-usa.com")) try {
        c = 44339, a = $j(".col2 .salePrice").length ? $j(".salePrice").clone().children().remove().end().text().split("$")[1].trim() : $j(".price-container .price").text().split("$")[1].trim(), b = "PENDLETON", d = e = $j(".item-name").text().trim()
    } catch (Dl) {
        c = 44339, d =
            b = "", a = 0
    } else if (-1 != f.indexOf("thechildrenswearoutlet.com")) try {
        c = 44354, a = $j(".variantprice").text().split("$")[1].replace("Price:", "").trim(), b = "the Childrens Wear Outlet", d = e = $j(".productName").text().trim()
    } catch (El) {
        c = 44354, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.containerstore.com")) try {
        c = 44357, a = $j('span[itemprop="price"]').first().text().split("$")[1].replace(",", "").replace("ea", "").trim(), b = "The Container Store", d = e = $j('h1[itemprop="name"]').first().text().trim()
    } catch (Fl) {
        c = 44357, d = b = "",
        a = 0
    } else if (-1 != f.indexOf("feverdesigns")) try {
        c = 44363, a = $j(".product-shop .price-box .old-price").length ? $j(".product-shop .price-box .special-price .price").text().split("\u00a3")[1].trim() : $j(".product-shop .price-box .regular-price .price").text().split("\u00a3")[1].trim(), b = "FEVER LONDON", e = $j(".product-name").first().text().trim(), d = $j(".sku").text().split(":")[1].trim()
    } catch (Gl) {
        c = 44363, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.dress-for-less.com")) try {
        j = $j(".head_country span").text().trim(),
            "Deutschland" == j ? (g = "\u20ac", c = 47119) : "Nederland" == j ? (g = "\u20ac", c = 47380) : "\u00d6sterreich" == j ? (g = "\u20ac", c = 47404) : "Espa\u00f1a" == j ? (g = "\u20ac", c = 47149) : "Belgi\u00eb" == j ? (g = "\u20ac", c = 47407) : "France" == j ? (g = "\u20ac", c = 46963) : "United Kingdom" == j ? (g = "\u00a3", c = 43922) : "Danmark" == j ? (g = "DKK", c = 46492) : "Italy" == j ? (g = "\u20ac", c = 47287) : "Schweiz" == j && (g = "CHF", c = 47353), 0 < $("#article").length && (a = $j(".price_actual").first().text().replace(/[^0-9\,\.]/g, "").replace(",", ".").trim(), b = "dress for less", e = $j(".attribute b").text().trim()),
        d = e
    } catch (Hl) {
        d = b = "", a = 0
    } else if (-1 != f.indexOf("store.murphynye.com")) try {
        c = 44307, a = $j(".pr_detail-price").text().split("\u20ac")[1].trim(), b = "MURPHY and MNYE", d = e = $j("#pr_detail h1").text().trim()
    } catch (Il) {
        c = 44307, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.amazingkids.nl")) try {
        c = 44554, a = $j("#prijs").first().text().split("\u20ac")[1].replace(",", ".").trim(), b = "Amazing Kids", d = e = $j(".name").first().text().split(" ")[1].trim()
    } catch (Jl) {
        c = 44554, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.lordandtaylor.com")) try {
        c =
            4480, a = $j("#listPrice").length ? $j("#offerPrice").text().split("$")[1].trim() : $j("#price").text().split("$")[1].trim(), b = "Lord and Taylor", d = e = $j(".detial").text().trim()
    } catch (Kl) {
        c = 4480, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.nancymeyer.com")) try {
        c = 45203, a = $j(".SalePrice").length ? $j(".SalePrice").text().split("$")[1].trim() : $j(".ListPricewoSale").text().split("$")[1].trim(), b = "NANCY MEYER", d = e = $j(".prod-name").first().text().trim()
    } catch (Ll) {
        c = 45203, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.aldoshoes.com")) try {
        c =
            49424, a = $j(".swatchesInfo .sale.price").length ? $j(".swatchesInfo .sale.price").first().text().split("$")[1].trim() : $j(".swatchesInfo .price").first().text().split("$")[1].trim(), b = "ALDO", d = e = $j("#box1 h2").text().trim()
    } catch (Ml) {
        c = 49424, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.shoptiques.com")) try {
        c = 45749, a = $j(".display-price .sale").length ? $j(".display-price .sale").text().split("$")[1].trim() : $j("#product-price").text().split("$")[1].trim(), b = "SHOPTIQUES", d = e = $j("#product-name").text().trim()
    } catch (Nl) {
        c =
            45749, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.debijenkorf.nl")) try {
        c = 5897, g = "\u20ac", a = $j(".price_big_red").length ? $j(".price_big_red").text().split("\u20ac")[1].replace(",", ".").trim() : $j(".price_big").text().split("\u20ac")[1].replace(",", ".").trim(), b = "de Bijenkorf", d = e = $j("h1 span").text().trim()
    } catch (Ol) {
        c = 5897, d = b = "", a = 0
    } else if (-1 != f.indexOf("lorenhope.com")) try {
        c = 45754, a = $j(".ProductPrice.VariationProductPrice").text().split("$")[1].replace(",", "").trim(), b = "LOREN HOPE", d = e = $j("#ProductTop h1").text().trim()
    } catch (Pl) {
        c =
            45754, d = b = "", a = 0
    } else if (-1 != f.indexOf("shop.bingbangnyc.com")) try {
        c = 45808, a = $j(".price").text().split("$")[1].replace(",", "").trim(), b = "Bing Bang", d = e = $j(".user_column h1").text().trim()
    } catch (Ql) {
        c = 45808, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.carnetdemode.com")) try {
        c = 51922, a = $j(".prix_boutique").text().split("\u20ac")[0].replace(",", "").trim(), b = "carnet de mode", d = e = $j("#desc_produit h1").text().trim()
    } catch (Rl) {
        c = 51922, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.cynthiarowley.com")) try {
        c = 45817, a = $j(".price-box .old-price").length ?
            $j(".price-box .special-price .price").text().split("$")[1].replace(",", "").trim() : $j(".price-box .price .price").text().split("$")[1].replace(",", "").trim(), b = "CYNTHIA ROWLEY", d = e = $j(".desc h3").text().trim()
    } catch (Sl) {
        c = 45817, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.clarevivier.com")) try {
        c = 45814, a = $j(".product-price").text().split("$")[1].replace(",", "").trim(), b = "CLARE VIVIER", d = e = $j("#product-title h1").text().trim()
    } catch (Tl) {
        c = 45814, d = b = "", a = 0
    } else if (-1 != f.indexOf("humblechic.com")) try {
        c = 45820,
        a = $('span[itemprop="price"]').text().split("$")[1].replace(",", "").trim(), b = "humble chic", d = e = $(".productnamecolorLARGE.colors_productname").text().trim()
    } catch (Ul) {
        c = 45820, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.iceonline.com.au")) try {
        c = 45704, a = $j(".price").text().split("$")[1].replace(",", "").trim(), b = "ice", d = e = $j(".product-name h1").text().trim()
    } catch (Vl) {
        c = 45704, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.socialdressshop.com")) try {
        c = 45415, a = $j(".price").clone().children().remove().end().text().split("$")[1].replace(",",
            "").trim(), b = "social dress shop", d = e = $j(".title").text().trim()
    } catch (Wl) {
        c = 45415, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.boutiquetoyou.com")) try {
        c = 1321, a = $j(".pricecolor.colors_productprice span").text().split("$")[1].replace(",", "").trim(), b = "boutuque to you", d = e = $j(".productnamecolorLARGE.colors_productname span").text().trim()
    } catch (Xl) {
        c = 1321, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.acnestudios.com")) try {
        j = $j("#footer-menu #footer-shipping").text().trim(), "United Kingdom" == j && (c = 6341, a = $j(".product-shop .product-price .price").text().split("Gbp")[0].replace(",",
            "").trim(), b = "Acne", d = e = $j("#item-details h1").text().trim())
    } catch (Yl) {
        d = b = "", a = 0
    } else if (-1 != f.indexOf("www.oki-ni.com")) try {
        c = 4566, a = $j(".details_price .details_price").text().split("\u00a3")[1].replace(",", "").trim(), b = "OKI NI", d = e = $j(".details_top h4").text().trim()
    } catch (Zl) {
        c = 4566, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.ollieandnic.com")) try {
        c = 44749, a = $j(".price span").text().split("\u00a3")[1].replace(",", "").trim(), b = "Ollie and Nic", d = e = $j(".overview h1").text().trim()
    } catch ($l) {
        c = 44749, d =
            b = "", a = 0
    } else if (-1 != f.indexOf("www.parkerny.com")) try {
        c = 45901, a = $j("#UnitCostSpan").text().split("$")[1].replace(",", "").trim(), b = "Parker", d = e = $j(".productHeader h1").text().trim()
    } catch (am) {
        c = 45901, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.dkny.com")) try {
        c = 45461, a = $j(".price-selected span").last().text().split("$")[1].replace(",", "").trim(), b = "", d = e = $j(".product-name").text().trim()
    } catch (bm) {
        c = 45461, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.pier1.com")) try {
        c = 49463, a = $j(".sectionHeading .product-price .price-sales").length ?
            $j(".product-price .price-sales").text().split("$")[1].replace(",", "").trim() : $j(".product-price .price-standard").text().split("$")[1].replace(",", "").trim(), b = "Pier 1", d = e = $j(".sectionHeading .product-name").text().trim()
    } catch (cm) {
        c = 49463, d = b = "", a = 0
    } else if (-1 != f.indexOf("marksandspencer")) try {
        var L = $j(".main-site-tools.cf .geo .geo span").first().text().trim();
        j = $j(".aero a").text().split(" -")[0].trim();
        "United Kingdom" == L ? (c = 4656, g = "\u00a3", a = $j(".priceString").text().split("\u00a3")[1].replace(",",
            "").trim(), e = $j(".fn").text().trim()) : "AT" == j ? (g = "\u20ac", c = 45259, a = $j("#hideDottedBorder .price .salesprice").text().split("\u20ac")[1].replace(",", ".").trim(), e = $j(".sIFR-alternate").text().trim()) : "ES" == j ? (g = "\u20ac", c = 45256, a = $j("#hideDottedBorder .price .salesprice").text().split("\u20ac")[0].replace(",", ".").trim(), e = $j(".sIFR-alternate").text().trim()) : "FR" == j ? (g = "\u20ac", c = 43906, a = $j("#hideDottedBorder .price .salesprice").text().split("\u20ac")[0].replace(",", ".").trim(), e = $j(".sIFR-alternate").text().trim()) :
            "BE" == j ? (g = "\u20ac", c = 45253, a = $j("#hideDottedBorder .price .salesprice").text().split("\u20ac")[0].replace(",", ".").trim(), e = $j(".sIFR-alternate").text().trim()) : "DE" == j ? (g = "\u20ac", c = 45937, a = $j("#hideDottedBorder .price .salesprice").text().split("\u20ac")[0].replace(",", ".").trim(), e = $j(".sIFR-alternate").text().trim()) : "NL" == j && (g = "\u20ac", c = 48874, a = $j("#hideDottedBorder .price .salesprice").text().split("\u20ac")[1].replace(",", ".").trim(), e = $j(".sIFR-alternate").text().trim());
        b = "Marks&Spencer";
        d = e
    } catch (dm) {
        d = b = "", a = 0
    } else if (-1 != f.indexOf("www.kidrobot.com")) try {
        c = 45280, a = $j(".nprice").text().split("$")[1].trim(), b = "KidRobot", d = e = $j(".detail-product-selection .item-title").text().trim()
    } catch (em) {
        c = 45280, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.mcgregor.fr")) try {
        c = 45685, a = $j('span[itemprop="price"]').text().split("\u20ac")[0].replace(",", ".").trim(), b = "McGregor", d = e = $j('span[itemprop="name"]').text().trim()
    } catch (fm) {
        c = 45685, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.craneandcanopy.com")) try {
        c =
            45925, a = $j(".feature-descrip .price").text().split("-")[0].replace("$", "").trim(), b = "Crane and Canopy", d = e = $j(".title").text().trim()
    } catch (gm) {
        c = 45925, d = b = "", a = 0
    } else if (-1 != f.indexOf("stonetextilestudio.com")) try {
        c = 45934, a = $j(".price").text().split("$")[1].trim(), b = "Stone Textile", d = e = $j(".this-info h3").text().trim()
    } catch (hm) {
        c = 45934, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.saturday.com")) try {
        c = 46006, a = $j("#product-content .product-price span").last().text().split("$")[1].trim(), b = "Kate Spade", d =
            e = $j("#product-content .product-name").text().trim()
    } catch (im) {
        c = 46006, d = b = "", a = 0
    } else if (-1 != f.indexOf("zimmermannwear")) try {
        c = 45908, a = $j(".price").text().split("$")[1].trim(), b = "ZIMMERMANN", d = e = $j(".product-name h1").text().trim()
    } catch (jm) {
        c = 45908, d = b = "", a = 0
    } else if (-1 != f.indexOf("whistles")) try {
        j = $j(".country.dropdown a").text().split("(")[0].trim(), "UK" == j ? (g = "\u00a3", c = 4953) : "USA" == j && (g = "$", c = 4953), a = $j("#price").text().split(g)[1].trim(), b = "WHISTLES", d = e = $j("#productInfo h3").text().trim()
    } catch (km) {
        c =
            4953, d = b = "", a = 0
    } else if (-1 != f.indexOf("elizabethshowers.com")) try {
        c = 45931, a = $j(".small").text().split("$")[1].replace(",", "").trim(), b = "elizabeth showers", d = e = $j(".small").eq(2).text().trim()
    } catch (lm) {
        c = 45931, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.omoda.nl")) try {
        c = 44590, a = $j(".prijs .old").length ? $j(".prijs").clone().children().remove().text().split("\u20ac")[1].replace(",", ".").trim() : $j(".prijs").text().split("\u20ac")[1].replace(",", ".").trim(), b = "OMODA", d = e = $j(".title").text().trim()
    } catch (mm) {
        c =
            44590, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.olsen.de")) try {
        c = 44617, a = $j(".product-price.reduced .h1 strong del").length ? $j(".product-price.reduced .h1 strong").last().text().split("\u20ac")[1].replace(",", ".").trim() : $j(".product-price .h1 strong").text().split("\u20ac")[1].replace(",", ".").trim(), b = "olsen", d = e = $j(".product-infos h1").text().trim()
    } catch (nm) {
        c = 44617, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.warbyparker.com")) try {
        c = 50930, a = $j(".price").text().split("$")[1].trim(), b = "WARBY PARKER", d = e =
            $j(".product-name h1").text().trim()
    } catch (om) {
        c = 50930, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.thelimited.com")) try {
        c = 1891, a = $j(".price .strikeprice").length ? $j(".price .salesprice").text().split("$")[1].replace(",", "").trim() : $j(".price .standardprice").text().split("$")[1].replace(",", "").trim(), b = "THE LIMITED", d = e = $j(".productname").text().trim()
    } catch (pm) {
        c = 1891, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.shuuemura.ca")) try {
        c = 45707, a = $j(".product-price .price-sales").text().split("C$")[1].trim(), b = "shu uemura",
        d = e = $j(".product-name").first().text().trim()
    } catch (qm) {
        c = 45707, d = b = "", a = 0
    } else if (-1 != f.indexOf("tieks.com")) try {
        c = 45700, a = $j(".price").text().split("$")[1].trim(), b = "tieks", d = e = $j(".product-name").text().trim()
    } catch (rm) {
        c = 45700, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.ruelala.com")) try {
        c = 5913, a = $j("#salePrice").text().split("$")[1].trim(), b = "Rue lala", d = e = $j("#productName").text().trim()
    } catch (sm) {
        c = 5913, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.sloaneranger.com")) try {
        c = 45784, a = $j(".itemprice").text().split("$")[1].replace("Price:",
            "").trim(), b = "SLOANE RANGER", d = e = $j("#maininfo h1").text().split(".")[0].trim()
    } catch (tm) {
        c = 45784, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.lanecrawford.com")) try {
        c = 46121, j = $j(".country").text().split("\u00bb")[0].trim(), "United States Of America" == j ? (g = "$", a = $j("p data").attr("value").trim()) : "France" == j ? (g = "\u20ac", a = $j("p data").attr("value").trim()) : "\u4e2d\u56fd" == j ? (g = "\u00a5", a = $j("p data").attr("value").trim()) : "United Kingdom" == j ? (g = "\u00a3", a = $j("p data").attr("value").trim()) : "Korea, Republic Of" ==
            j ? (g = "$", a = $j("p data").attr("value").trim()) : "Australia" == j ? (g = "$", a = $j("p datna").attr("value").trim()) : "Italy" == j ? (g = "\u20ac", a = $j("p data").attr("value").trim()) : "Spain" == j ? (g = "\u20ac", a = $j("p data").attr("value").trim()) : "Japan" == j ? (g = "\u00a5", a = $j("p data").attr("value").trim()) : "Sweden" == j ? (g = "$", a = $j("p data").attr("value").trim()) : "Canada" == j ? (g = "$", a = $j("p data").attr("value").trim()) : "Singapore" == j ? (g = "$", a = $j("p data").attr("value").trim()) : "Norway" == j ? (g = "$", a = $j("p data").attr("value").trim()) :
            "Hong Kong" == j ? (g = "$", a = $j("p data").attr("value").trim()) : "Germany" == j && (g = "\u20ac", a = $j("p data").attr("value").trim()), b = $j(".product-brand").text().trim(), d = e = $j(".product-name").text().trim()
    } catch (um) {
        c = 46121, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.pebblegrey.co.uk")) try {
        c = 46118, a = $j(".new").text().split("\u00a3")[1].trim(), b = "pebble grey", d = e = $j("title").text().trim()
    } catch (vm) {
        c = 46118, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.amandawakeley.com")) try {
        c = 6033, a = $j(".special-price").length ? $j(".special-price").last().text().split("\u00a3")[1].trim() :
            $j(".price").text().split("\u00a3")[1].trim(), b = "AMANDA WAKELEY", d = e = $j(".product-name h1").text().trim()
    } catch (wm) {
        c = 6033, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.arqueonautas.de")) try {
        c = 45994, a = $j("#skudetails-price").text().replace(",", ".").trim(), b = "ARQUEONAUTAS", d = e = $j("#skudetails-variant-title").text().trim()
    } catch (xm) {
        c = 45994, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.muji.de")) try {
        c = 46E3, a = $j(".num").text().split("\u20ac")[1].replace(",", ".").trim(), b = "MUJI", d = e = $j("#goodsNmArea").text().trim()
    } catch (ym) {
        c =
            46E3, d = b = "", a = 0
    } else if (-1 != f.indexOf("strellson.com")) try {
        "\u00d6sterreich" == $j(".content.js_trackable_navi .lang .js_open").text().trim() ? c = 46318 : "Deutschland" == $j(".content.js_trackable_navi .lang .js_open").text().trim() && (c = 46129), a = $j(".js_price").text().split("\u20ac")[0].replace(",", ".").trim(), b = "strellson", d = e = $j(".h4").first().text().trim()
    } catch (zm) {
        c = 46129, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.expressofashion.de")) try {
        c = 45997, a = $j(".price").text().split("\u20ac")[1].replace(",", ".").trim(),
        b = "expresso", d = e = $j(".fn").text().trim()
    } catch (Am) {
        c = 45997, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.luxodo.com")) try {
        c = 45982, a = $j(".price.sale .old_price").length ? $j(".price.sale").clone().children().remove().end().text().split("\u20ac")[1].trim() : $j(".price").clone().children().remove().end().text().split("\u20ac")[1].trim(), b = $j("h1").text().trim(), d = e = $j("h2").eq(1).clone().children().remove().end().text().trim()
    } catch (Bm) {
        c = 45982, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.plein.com")) try {
        "DE" === $j(".language_active").text() &&
            (c = 45400, a = zx_amount, b = "PHILLIPP PLEIN", e = zx_fn, d = zx_identifier)
    } catch (Cm) {
        c = 45400, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.juicycouture.com")) try {
        c = 6081, a = $j(".product-price .price-sales").text().split("$")[1].replace("NOW", "").trim(), b = "Juciy Couture", d = e = $j(".product-name").text().trim()
    } catch (Dm) {
        c = 6081, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.zooq.com")) try {
        c = 46045, g = "HK$", a = $j("#info_show b").text().split("$")[1].trim(), b = $j("#info_show span").eq(0).text().trim(), d = e = $j("#info_show span").eq(1).text().trim()
    } catch (Em) {
        c =
            46045, d = b = "", a = 0
    } else if (-1 != f.indexOf("furbishstudio.com")) try {
        c = 45916, a = $j(".ProductPrice.VariationProductPrice").text().split("$")[1].replace(",", "").trim(), b = "FURBISH", d = e = $j(".product-name").text().trim()
    } catch (Fm) {
        c = 45916, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.gilesandbrother.com")) try {
        c = 45644, a = $j("h2#price-field span").last().text().split("$")[1].replace(",", "").trim(), b = "GILES and BROTHER", d = e = $j("h1#prodTitle").text().trim()
    } catch (Gm) {
        c = 45644, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.solesociety.com")) try {
        c =
            45716, a = $j(".price").text().split("$")[1].trim(), b = "SOLE SOCIETY", d = e = $j(".product_main_title").clone().children().remove().end().text().trim()
    } catch (Hm) {
        c = 45716, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.couturecandy.com")) try {
        c = 841, a = $j(".notmore b").eq(1).text().split("$")[1].trim(), b = $j("#rightcol h1").text().split("-")[0].trim(), d = e = $j("#rightcol h1").text().split("-")[1].trim()
    } catch (Im) {
        c = 841, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.tjformal.com")) try {
        c = 1001, a = $j(".price").text().split("$")[1].trim(),
        b = "TJ Formal", d = e = $j(".subtitle").text().trim()
    } catch (Jm) {
        c = 1001, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.bluegala.com")) try {
        c = 5822, a = $j(".sale").length ? $j(".sale").text().split("$")[1].trim() : $j("tr td b").eq(9).text().split("$")[1].trim(), b = "BLUEGALA", d = e = $j("tr td h1").text().trim()
    } catch (Km) {
        c = 5822, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.thewhitecompany.com")) try {
        c = 46042, a = $j(".bold-txt.red").length ? $j(".bold-txt.red").text().split("\u00a3")[1].trim() : $j(".bold-txt").text().split("\u00a3")[1].trim(),
        b = "THE WHITE COMPANY", d = e = $j("#h-productname").text().trim()
    } catch (Lm) {
        c = 46042, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.hervia.com")) try {
        c = 46135, a = $j(".price .EUR").text().split("\u20ac")[0].trim(), b = "HERVIA", d = e = $j("#product_title").text().trim()
    } catch (Mm) {
        c = 46135, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.saba.com.au")) try {
        c = 46112, a = $j(".price-sales").length ? $j(".price-sales").clone().children().remove().end().text().split("$")[1].trim() : $j("#product-content .price-vips .saledesc").length ? $j(".price-vips").clone().children().remove().end().text().split("$")[1].trim() :
            $j(".price-vips .standarddesc").text().split("$")[1].trim(), b = "SABA", d = e = $j(".product-name").first().text().trim()
    } catch (Nm) {
        c = 46112, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.sportscraft.com.au")) try {
        c = 46109, a = $j(".price-sales").length ? $j(".price-sales").clone().children().remove().end().text().split("$")[1].trim() : $j("#product-content .price-vips .saledesc").length ? $j(".price-vips").clone().children().remove().end().text().split("$")[1].trim() : $j(".price-vips .standarddesc").text().split("$")[1].trim(),
        b = "SPORTSCRAFT", d = e = $j(".product-name").first().text().trim()
    } catch (Om) {
        c = 46109, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.goertz.de")) try {
        c = 46507, a = $j(".price .value").length ? $j(".price .value").last().text().split("\u20ac")[1].replace(",", ".").trim() : $j(".price span").eq(1).text().split("\u20ac")[1].replace(",", ".").trim(), b = "GOERTZ", d = e = $j(".productname").first().text().trim()
    } catch (Pm) {
        c = 46507, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.goertz.at")) try {
        c = 46291, a = $j(".price .value").length ? $j(".price .value").last().text().split("\u20ac")[1].replace(",",
            ".").trim() : $j(".price span").eq(1).text().split("\u20ac")[1].replace(",", ".").trim(), b = "GOERTZ", d = e = $j(".productname").first().text().trim()
    } catch (Qm) {
        c = 46291, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.breuninger.com")) try {
        c = 46510, a = $j("#price .current").text().split("\u20ac")[1].replace(",", ".").trim(), b = $j(".col2 h1").text().trim(), d = e = $j(".col2 h2").text().trim()
    } catch (Rm) {
        c = 46510, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.holdenouterwear.com")) try {
        c = 46382, a = $j(".price").text().split("$")[1].trim(), b = "HOLDEN",
        d = e = $j(".font-serif.product-name h1").text().trim()
    } catch (Sm) {
        c = 46382, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.wolfandbadger.com")) try {
        c = 3602, g = "\u00a3", a = $j(".price .main strike").length ? $j(".main").clone().children().remove().end().text().split("\u00a3")[1].trim() : $j(".price .main").text().split("\u00a3")[1].trim(), b = $j(".span-11 h2 a").text().trim(), d = e = $j(".span-11 h1").text().trim()
    } catch (Tm) {
        c = 3602, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.giltcity.com")) try {
        c = 45836, a = $j(".pkg-price").clone().children().remove().end().text().split("$")[1].trim(),
        b = "GILT CITY", d = e = $j(".h1 offer-name").text().trim()
    } catch (Um) {
        c = 45836, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.jbrandjeans.com")) try {
        c = 46136, a = $j("#UnitCostSpan").text().split("$")[1].trim(), b = "J BRAND", d = e = $j(".headCon.clearfix h1").text().trim()
    } catch (Vm) {
        c = 46136, d = b = "", a = 0
    } else if (-1 != f.indexOf("shop.carhartt-wip.com")) try {
        j = $j("#countryandlanguage img").attr("alt").trim(), "Germany" == j ? (c = 45991, g = "\u20ac") : "Deutschland" == j ? (c = 45991, g = "\u20ac") : "Espa\u00f1a" == j && (c = 47689, g = "\u20ac"), a = $j("#price").text().split(g)[1].trim(),
        b = "carhartt", d = e = $j(".fluid-1.product-title h1").text().trim()
    } catch (Wm) {
        d = b = "", a = 0
    } else if (-1 != f.indexOf("www.dodocase.com")) try {
        c = 44834, a = $j(".price.color-picker span").text().split("$")[1].trim(), b = "DODOCASE", d = e = $j(".dodo-header.product ").text().trim()
    } catch (Xm) {
        c = 44834, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.adornia.com")) try {
        c = 46001, a = $j(".productPrice.StoreProductPrice").text().split("$")[1].replace(",", "").trim(), b = "ADORNIA FINE JEWELRY", d = e = $j(".StoreProductModelName").text().trim()
    } catch (Ym) {
        c =
            46001, d = b = "", a = 0
    } else if (-1 != f.indexOf("store.acmilan.com")) try {
        c = 46303, a = $j(".total-cost.cost.clearer .price.clearer .discounted").text().split("\u20ac")[1].replace(",", ".").trim(), b = "AC Milan", d = e = $j(".product-name h1").text().trim()
    } catch (Zm) {
        c = 46303, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.schuurman-schoenen.nl")) try {
        c = 46570, a = $j(".price.productPrice .price").text().split("\u20ac")[1].replace(",", ".").trim(), b = "SCHUURMAN SCHOENEN", d = e = $j("h1 span").text().trim()
    } catch ($m) {
        c = 46570, d = b = "", a = 0
    } else if (-1 !=
        f.indexOf("www.kleertjes.com")) try {
        c = 46567, a = $j(".after_price").text().split("\u20ac")[1].replace(",", ".").trim(), b = "kleertjes", d = e = $j(".productname").text().trim()
    } catch (an) {
        c = 46567, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.10-35.com")) try {
        c = 46612, a = $j(".price").text().split("\u20ac")[1].replace(",", ".").trim(), b = "1035", d = e = $j(".product-name h2").text().trim()
    } catch (bn) {
        c = 46612, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.zoeandlola.nl")) try {
        c = 46615, a = $j(".Price").text().split("\u20ac")[1].replace(",", ".").trim(),
        b = "ZOE AND LOLA", d = e = $j(".ProductDescription").eq(1).text().trim()
    } catch (cn) {
        c = 46615, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.johnvarvatos.com")) try {
        c = 46132, a = $j(".price").text().split("$")[1].replace(",", "").trim(), b = "john varvatos", d = e = $j(".icon_john_varvatos").text().trim()
    } catch (dn) {
        c = 46132, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.ettika.com")) try {
        c = 46390, a = $j(".currency").text().split("$")[1].replace(",", "").trim(), b = "Ettika", d = e = $j(".fontgreen h1").text().trim()
    } catch (en) {
        c = 46390, d = b = "", a = 0
    } else if (-1 !=
        f.indexOf("www.joesjeans.com")) try {
        c = 46408, a = $j(".ListPricewoSaleA").text().split("$")[1].replace(",", "").trim(), b = "JOES", d = e = $j(".ProductName").text().trim()
    } catch (fn) {
        c = 46408, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.donaldjpliner.com")) try {
        c = 46426, a = $j(".ctl00_MainContent_ProductInfo1_ctl00_PurchaseCtrl_RetailPricelabel").length ? $j(".ctl00_MainContent_ProductInfo1_ctl00_PurchaseCtrl_RetailPricelabel").text().split("$")[1].trim() : $j("#ctl00_MainContent_ProductInfo1_ctl00_PurchaseCtrl_ListPriceLabel").text().split("$")[1].trim(),
        b = $j(".products_desc h4").text().trim(), d = e = $j(".products_desc div").text().trim()
    } catch (gn) {
        c = 46426, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.tom-tailor.nl")) try {
        c = 45388, a = $j(".neu").length ? $j(".neu").text().split("EUR")[0].replace(",", ".").trim() : $j(".preis").text().split("EUR")[0].replace(",", ".").trim(), b = "TOM TAILOR", d = e = $j(".name").text().trim()
    } catch (hn) {
        c = 45388, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.tom-tailor.de")) try {
        c = 45382, a = $j(".neu").length ? $j(".neu").text().split("EUR")[0].replace(",", ".").trim() :
            $j(".preis").text().split("EUR")[0].replace(",", ".").trim(), b = "TOM TAILOR", d = e = $j(".name").text().trim()
    } catch (jn) {
        c = 45382, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.tom-tailor.be")) try {
        c = 45391, a = $j(".neu").length ? $j(".neu").text().split("EUR")[0].replace(",", ".").trim() : $j(".preis").text().split("EUR")[0].replace(",", ".").trim(), b = "TOM TAILOR", d = e = $j(".name").text().trim()
    } catch (kn) {
        c = 45391, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.tom-tailor.at")) try {
        c = 45391, a = $j(".neu").length ? $j(".neu").text().split("EUR")[0].replace(",",
            ".").trim() : $j(".preis").text().split("EUR")[0].replace(",", ".").trim(), b = "TOM TAILOR", d = e = $j(".name").text().trim()
    } catch (ln) {
        c = 45391, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.debenhams.com")) try {
        c = 4570, a = $j(".now2").text().split("\u00a3")[1].replace(",", "").trim(), b = $j("#product-brand-logo a").attr("title").trim(), d = e = $j(".catalog_link").text().trim()
    } catch (mn) {
        c = 4570, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.cutterbuck.com")) try {
        c = 44804, a = $j(".tab-content .price").last().text().split("$")[1].replace(",",
            "").trim(), b = "CUTTER & BUCK", d = e = $j(".tab-content h1").text().trim()
    } catch (nn) {
        c = 44804, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.savilerowco.com")) try {
        c = 44810, g = "$", a = $j(".list-price").clone().children().remove().end().text().split("$")[1].replace(",", "").trim(), b = "SAVILE ROW COMPANY", d = e = productName
    } catch (on) {
        c = 44810, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.linksoflondon.com")) {
        if ("us-en" === locale) try {
            c = 44813, a = $j("#product-price").text().split("$")[1].replace(",", "").trim(), b = "LINKS OF LONDON", d = e =
                $j("#product_details h1").text().trim()
        } catch (pn) {
            c = 44813, e = d = b = "", a = 0
        }
        if ("gb-en" === locale) try {
            c = 6048, a = $j("#product-price").text().split("\u00a3")[1].replace(",", "").trim(), b = "LINKS OF LONDON", d = e = $j("#product_details h1").text().trim()
        } catch (qn) {
            c = 6048, e = d = b = "", a = 0
        }
    } else if (-1 != f.indexOf("www.lucy.com")) try {
        c = 1921, a = $j(".price-sale").length ? $j(".price-sale").text().split("$")[1].replace(",", "").replace("-", "").trim() : $j("#content-area .product-price").text().split("$")[1].replace(",", "").trim(),
        b = "LUCY", d = e = $j("#content-area #product-title").text().trim()
    } catch (rn) {
        c = 1921, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.perfume.com")) try {
        c = 44822, a = $j(".sale-price span").text().split("$")[1].replace(",", "").trim(), b = $j(".line_head.products-detail.clearfix div:nth-child(2) h1 a:nth-child(1)").text().trim(), d = e = $j(".line_head.products-detail.clearfix div:nth-child(2) h1 a:nth-child(2)").text().trim()
    } catch (sn) {
        c = 44822, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("ashleystewart.com")) try {
        c = 46748, a = $j("#product-content .product-price span").last().text().split("$")[1].replace(",",
            "").trim(), b = "ASHLEY STEWART", e = $j("h1.product-name").text().trim(), d = $j('span[itemprop="productID"]').text().trim()
    } catch (tn) {
        c = 46748, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.shopsavannahs.com")) try {
        j = $j("#select-language a").text().trim(), -1 != j.indexOf("United Kingdom") ? (c = 3322, g = "\u00a3", a = $j("#product-price .sale-price").length ? $j("#product-price .sale-price").clone().children().remove().end().text().split("GBP")[0].replace(",", "").replace(" ", "").trim() : $j("#product-price").text().split("GBP")[0].replace(",",
            "").replace(" ", "").trim()) : (c = 2532, g = "$", a = 1 < $j(".sale-price").length ? $j(".sale-price").clone().children().remove().end().text().split("USD")[0].replace(",", "").replace(" ", "").trim() : $j("#product-price").text().split("USD")[0].replace(",", "").replace(" ", "").trim()), b = $j("#product-name").text().trim(), d = e = $j(".product-manufacturer").text().trim()
    } catch (un) {
        c = "$" == g ? 2532 : 3322, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.buildabear.com")) try {
        c = 44828, a = $j(".sales-price").length ? $j(".sales-price").text().split("$")[1].replace(",",
            "").trim() : $j(".product-price").text().split("$")[1].replace(",", "").trim(), b = "BUILD-A-BEAR", d = e = $j(".hero-title").text().trim()
    } catch (vn) {
        c = 44828, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.pretavoir.co.uk")) try {
        c = 44831, -1 != $j(".price").text().indexOf("\u00a3") ? (g = "\u00a3", a = $j(".price").text().split("\u00a3")[1].replace(",", "").trim()) : (g = "$", a = $j(".price").text().split("$")[1].replace(",", "").trim()), b = $j(".first.odd td").text().trim(), d = e = $j(".product-name").text().trim()
    } catch (wn) {
        c = 44831, e = d = b =
            "", a = 0
    } else if (-1 != f.indexOf("www.follifollie.co.uk")) try {
        c = 4596, g = "\u00a3", a = $j(".price span:first-child").text().split("\u00a3")[1].replace(",", "").trim(), b = "FOLLI FOLLIE", d = e = $j(".product-inner div:nth-child(2) h2").text().trim()
    } catch (xn) {
        c = 4596, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.modewalk.com")) try {
        c = 44855, a = $j(".new").length ? $j(".new").text().split("$")[1].replace(",", "").trim() : $j(".price").text().split("$")[1].replace(",", "").trim(), b = $j(".info_block h1").text().trim(), d = e = $j(".info_block h2").text().trim()
    } catch (yn) {
        c =
            44855, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.upunique.com")) try {
        c = 44882, a = $j(".p61").text().split("$")[1].replace(",", "").trim(), b = "UPUNIQUE", d = e = $j(".deailed_basic form div h1").text().trim()
    } catch (zn) {
        c = 44882, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.infurn.com")) try {
        c = 45274, a = $j("#pd_rightcol #price").text().split("$")[1].replace(",", "").trim(), b = "INFURN", d = e = $j("#pd_leftcol h1").clone().children().remove().end().text().trim()
    } catch (An) {
        c = 45274, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.belenechandia.com")) try {
        c =
            44870, g = "\u00a3", a = "rgb(255, 0, 0)" == $j("#divDetail span:eq(1)").css("color") ? $j(".DetailTabContent span:eq(1)").text().split("\u00a3")[1].replace(",", "").trim() : $j(".DetailTabContent span:first").text().split("\u00a3")[1].replace(",", "").trim(), b = "BELEN ECHANDIA", d = e = $j(".spanProductNameLeft").text().trim()
    } catch (Bn) {
        c = 44870, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.omorovicza.com")) try {
        c = 44879, a = $j(".product-price-box .price").text().split("$")[1].replace(",", "").trim(), b = "OMOROVICZA", d = e = $j(".product-name h1").text().trim()
    } catch (Cn) {
        c =
            44879, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.homeandcook.co.uk")) try {
        c = 44687, g = "\u00a3", a = $j(".saveText").length ? $j("#ctl00_ContentPlaceHolder1_pnlAddToCart table tbody tr:eq(2) td").text().split("\u00a3")[1].replace(",", "").trim() : $j("#ctl00_ContentPlaceHolder1_lblRetailPrice").text().split("\u00a3")[1].replace(",", "").trim(), b = "HOME & COOK", e = $j(".productTitle").text().trim(), skuu = $j(".productSubTitle").text(), d = -1 != skuu.indexOf("-") ? $j(".productSubTitle").text().split("-")[1].trim() : skuu
    } catch (Dn) {
        c =
            44687, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.bnyconline.com")) try {
        c = 44663, g = "$", a = $j(".add_to_cart .sale_price").length ? $j(".add_to_cart .sale_price").text().split("$")[1].replace(",", "").trim() : $j(".add_to_cart .price").text().split("$")[1].replace(",", "").trim(), b = "BNYC ONLINE", d = e = $j(".title h1").text().split("(")[0].trim()
    } catch (En) {
        c = 44663, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.classicshapewear.com")) try {
        c = 44540, g = "$", a = "rgb(255, 0, 0)" == $j(".productSpecialPrice3").css("color") ? $j(".productSpecialPrice3").text().split("$")[1].replace(",",
            "").trim() : $j(".productSpecialPrice2").text().split("$")[1].replace(",", "").trim(), b = "CLASSIC SHAPEWEAR", d = e = $j("h1").text().trim()
    } catch (Fn) {
        c = 44540, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.east.co.uk")) try {
        c = 44326, g = "\u00a3", a = $j("#priceFrm span:first").length ? $j("#priceFrm span:first").text().split("\u00a3")[1].replace(",", "").trim() : $j("#priceFrm").text().split("\u00a3")[1].replace(",", "").trim(), b = "EAST", d = e = $j("h1").text().trim()
    } catch (Gn) {
        c = 44326, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.sundiego.com")) try {
        c =
            44167, g = "$", a = "rgb(255, 0, 0)" == $j(".price_sale").css("color") ? $j(".price_sale").text().split("$")[1].replace(",", "").trim() : $j(".price_regular").text().split("$")[1].replace(",", "").trim(), b = "SUN DIEGO", d = e = $j(".range").text().split("$")[0].trim()
    } catch (Hn) {
        c = 44167, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.ernestjones.co.uk")) try {
        c = 44384, g = "\u00a3", a = $j("#price").text().split("\u00a3")[1].replace(",", "").trim(), b = "ERNEST JONES", d = e = $j(".title").text().split("basket")[1].trim()
    } catch (In) {
        c = 44384, e =
            d = b = "", a = 0
    } else if (-1 != f.indexOf("www.swarovski.com")) try {
        "DEU" === _tag.DCSext.channel ? (c = 44369, g = "\u20ac", a = $j(".product-info .price").text().split("EUR")[1].replace(",", ".").trim()) : "USA" === _tag.DCSext.channel ? (c = 6016, g = "\u00a3", a = $j(".productbox span").text().split("GBP")[1].replace(",", "").trim()) : "GBP" === _tag.DCSext.channel && (c = 44378, g = "\u00a3", a = $j(".productbox span").text().split("GBP")[1].replace(",", "").trim()), b = "SWAROVSKI", e = $j("h1").text().trim(), d = $j(".article-no").text().split(":")[1].trim()
    } catch (Jn) {
        e =
            d = b = "", a = 0
    } else if (-1 != f.indexOf("www.hsamuel.co.uk")) try {
        c = 44387, g = "\u00a3", a = $j("#price").text().split("\u00a3")[1].replace(",", "").trim(), b = $j(".feature-list dd:first").text().trim(), e = $j(".item").text().trim(), d = $j(".mpn").text().trim()
    } catch (Kn) {
        c = 44387, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.point-rouge.de")) try {
        c = 44408, g = "\u20ac", a = "33px" == $j(".special-price:last").css("font-size") ? $j(".special-price:last").text().replace(",", ".").trim().split("\u20ac")[0].trim() : $j(".regular-price:last").text().split("&")[0].replace(",",
            ".").split("\u20ac")[0].trim(), b = $j(".small-link.brands").text().split("von")[1].trim(), d = e = $j("h1").text().trim()
    } catch (Ln) {
        c = 44408, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.usc.co.uk")) try {
        c = 44381, g = "\u00a3", a = "rgb(255, 0, 0)" == $j(".price_sale").css("color") ? $j(".price_sale").text().split("\u00a3")[1].replace(",", "").trim() : $j("#SalePriceDiv2").text().split("\u00a3")[1].replace(",", "").trim(), b = "USC", d = e = $j(".title").text().trim()
    } catch (Mn) {
        c = 44381, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.tonybianco.com.au")) try {
        c =
            44764, a = $j(".price").text().split("$")[1].replace(",", "").trim(), b = "TONY BIANCO", d = e = $j(".product-name h1").text().trim()
    } catch (Nn) {
        c = 44764, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.butlers.de")) try {
        c = 46780, a = $j(".salesprice").text().split("\u20ac")[1].replace(",", ".").trim(), b = $j(".firstname").first().text().trim(), d = e = $j(".surname").first().text().trim()
    } catch (On) {
        c = 46780, a = 0, d = e = b = ""
    } else if (-1 != f.indexOf("www.tedbaker.com")) try {
        "United Kingdom (\u00a3)" == $j("#country_select span").text() ? (c = 2081,
            g = "\u00a3", a = $j(".lead .pricing .price.unit").text().split(g)[1].replace(",", "").trim()) : "France (\u20ac)" == $j("#country_select span").text() ? (c = 51709, g = "\u20ac", a = $j(".lead .pricing .price.unit").text().split(g)[0].replace(",", "").trim()) : "Germany (\u20ac)" == $j("#country_select span").text() ? (c = 51712, g = "\u20ac", a = $j(".lead .pricing .price.unit").text().split(g)[0].replace(",", "").trim()) : "Netherlands (\u20ac)" == $j("#country_select span").text() && (c = 51715, g = "\u20ac", a = $j(".lead .pricing .price.unit").text().split(g)[1].replace(",",
            "").trim()), b = "TED BAKER " + $j(".lead .collection.collection_endurance").text().trim(), d = e = $j(".lead .name").text().trim()
    } catch (Pn) {
        c = 2081, a = 0, d = e = b = ""
    } else if (-1 != f.indexOf("www.tedbaker-london.com")) try {
        c = 4500, a = $j("#product_price").text().trim().split("$")[1].trim(), b = $j("#product_title").clone().children().remove().end().text().trim(), d = e = $j("#product_title span").text().trim()
    } catch (Qn) {
        c = 4500, a = 0, d = e = b = ""
    } else if (-1 != f.indexOf("www.karenmillen.com")) try {
        c = 4618, a = $j(".product_price").text().split("\u00a3")[1].replace(",",
            "").trim(), b = "KAREN MILLEN", d = e = $j("#product_title").text().trim()
    } catch (Rn) {
        a = 0, d = e = b = ""
    } else if (-1 != f.indexOf("www.dune.co.uk")) try {
        c = 4594, a = $j(".prodPRICE").text().split("\u00a3")[1].replace(",", "").trim(), b = $j(".prodName1").first().clone().children().remove().end().text().trim(), d = e = $j(".productTITLE .prodName2").first().clone().children().remove().end().text().trim()
    } catch (Sn) {
        c = 4594, a = 0, d = e = b = ""
    } else if (-1 != f.indexOf("www.houseoffraser.co.uk")) try {
        c = 4553, a = $j("#productPriceContainer .priceNow").length ?
            $j("#productPriceContainer .priceNow").text().split("\u00a3")[1].replace(",", "").trim() : $j("#productPriceContainer .price").text().split("\u00a3")[1].replace(",", "").trim(), b = $j(".brandname").text().trim(), d = e = $j(".productName").text().trim()
    } catch (Tn) {
        c = 4553, a = 0, d = e = b = ""
    } else if (-1 != f.indexOf("www.debenhams.de")) try {
        c = 45394, a = TMAN.getParam("product_price_string").replace(",", ".").trim(), b = $j(".brand").first().text().trim(), d = e = $j(".col-1 h1").text().trim()
    } catch (Un) {
        c = 45394, a = 0, d = e = b = ""
    } else if (-1 !=
        f.indexOf("www.alchimie-forever.com")) try {
        c = 46432, a = $j("#our_price_display").text().split("$")[1].replace(",", "").trim(), b = "ALCHIMIE FOREVER", d = e = $j(".product_title").text().trim()
    } catch (Vn) {
        c = 46432, a = 0, d = e = b = ""
    } else if (-1 != f.indexOf("www.envishoes.com")) try {
        c = 46759, a = $j(".price").last().text().split("$")[1].replace(",", "").trim(), b = $j(".by-brand").text().trim(), d = e = $j(".product-name h1").text().trim()
    } catch (Wn) {
        c = 46759, a = 0, d = e = b = ""
    } else if (-1 != f.indexOf("www.projectbly.com")) try {
        c = 46777, a = $j(".price").text().split("$")[1].replace(",",
            "").replace("-", "").trim(), b = "Bly", d = e = $j(".heading h3").text().trim()
    } catch (Xn) {
        c = 46777, a = 0, d = e = b = ""
    } else if (-1 != f.indexOf("www.ilycouture.com")) try {
        c = 46597, a = $j(".productnamecolorLARGE.colors_productname .product_productprice span").text().split("$")[1].replace(",", "").trim(), b = "ily", d = e = $j(".productnamecolorLARGE.colors_productname span").first().text().trim()
    } catch (Yn) {
        c = 46597, a = 0, d = e = b = ""
    } else if (-1 != f.indexOf("www.sofialivelovely.com")) try {
        c = 46801, a = $j(".price").last().text().split("$")[1].replace(",",
            "").trim(), b = $j(".designer").text().trim(), d = e = $j(".product-name h1").text().trim()
    } catch (Zn) {
        c = 46801, a = 0, d = e = b = ""
    } else if (-1 != f.indexOf("www.patrice-breal.com")) try {
        c = 44042, a = $j(".priceProduct").last().text().split("\u20ac")[0].replace(",", ".").trim(), b = "Patrice-Breal", d = e = $j("#prodName").text().trim()
    } catch ($n) {
        c = 44042, a = 0, d = e = b = ""
    } else if (-1 != f.indexOf("www.zadig-et-voltaire.com")) try {
        c = 45167, g = "\u00a3", a = "rgb(255, 0, 0)" == $j(".product-view .special-price span:eq(1)").css("color") ? $j(".product-view .special-price span:eq(1)").text().split("\u00a3")[1].replace(",",
            "").trim() : $j(".product-view .price").text().split("\u00a3")[1].replace(",", "").trim(), b = "Zadig & Voltaire", d = e = $j(".product-name h1").text().trim()
    } catch (ao) {
        c = 45167, a = 0, d = e = b = ""
    } else if (-1 != f.indexOf("fortressofinca.com")) try {
        c = 46798, a = $j(".oldprice").length ? $j(".wpsc_product_price p span").eq(1).text().split("$")[1].replace(",", "").trim() : $j(".productcol p span").text().split("$")[1].replace(",", "").trim(), b = "FORTRESS OF INCA", d = e = $j("#product_title h1").text().trim()
    } catch (bo) {
        c = 46798, a = 0, d = e =
            b = ""
    } else if (-1 != f.indexOf("www.shop-e-mode.com")) try {
        c = 47710, a = $j(".price-box .price").text().split("$")[1].replace(",", "").trim(), b = "SHOP e MODE", d = e = $j(".product-name h1").text().trim()
    } catch (co) {
        c = 47710, a = 0, d = e = b = ""
    } else if (-1 != f.indexOf("shop.hampdenclothing.com")) try {
        c = 47725, a = $j(".prod_info.prod_price").text().split("$")[1].replace(",", "").trim(), b = $j(".prod_info.prod_brand a").text().trim(), d = e = $j(".prod_info.prod_name h1").text().trim()
    } catch (eo) {
        c = 47725, a = 0, d = e = b = ""
    } else if (-1 != f.indexOf("www.ellisfaas.com")) try {
        c =
            47605, a = $j(".meta-listing.product-detail-dl").text().split("\u00a3")[1].replace(",", ".").trim(), b = "ELLIS FAAS", d = e = $j(".heading.main-heading").first().text().trim()
    } catch (fo) {
        c = 47605, a = 0, d = e = b = ""
    } else if (-1 != f.indexOf("www.thehuntingensemble.nl")) try {
        c = 47608, a = $j(".price.solo").text().split("EUR")[0].replace(",", "").trim(), b = "THE HUNTING ENSEMBLE", d = e = $j(".prod-title").first().text().trim()
    } catch (go) {
        c = 47608, a = 0, d = e = b = ""
    } else if (-1 != f.indexOf("www.uggaustralia.co.uk")) try {
        c = 4829, a = $j(".maininfo .salesprice").text().split("\u00a3")[1].replace(",",
            "").trim(), b = "UGG austrailia", d = e = $j(".productname").first().text().trim()
    } catch (ho) {
        c = 4829, a = 0, d = e = b = ""
    } else if (-1 != f.indexOf("www.uggaustralia.nl")) try {
        c = 47737, a = $j(".maininfo .salesprice").text().split("\u20ac ")[1].replace(",", ".").trim(), b = "UGG austrailia", d = e = $j(".productname").first().text().trim()
    } catch (io) {
        c = 47737, a = 0, d = e = b = ""
    } else if (-1 != f.indexOf("www.uggaustralia.com")) try {
        c = 2392, a = $j(".product-price .price-sales").text().split("$")[1].replace(",", "").trim(), b = "UGG austrailia", d = e = $j(".product-col-2..product-detail .product-name").first().text().trim()
    } catch (jo) {
        c =
            2392, a = 0, d = e = b = ""
    } else if (-1 != f.indexOf("www.cabanalife.com")) try {
        c = 47719, a = $j(".price-box .price").last().text().split("$")[1].trim(), b = "cabanalife", d = e = $j(".product-name h1").text().trim()
    } catch (ko) {
        c = 47719, a = 0, d = e = b = ""
    } else if (-1 != f.indexOf("iskoa.es")) try {
        c = 47680, a = $j("#product_view_price_sell").text().split("\u20ac")[0].trim(), b = "ISKOA", d = e = $j(".productTitle").text().trim()
    } catch (lo) {
        c = 47680, a = 0, d = e = b = ""
    } else if (-1 != f.indexOf("www.hushpuppies.com")) try {
        c = 47761, a = $j("#product_info .price .price").text().split("$")[1].trim(),
        b = "Hush Puppies", d = e = $j(".product-name").text().trim()
    } catch (mo) {
        c = 47761, a = 0, d = e = b = ""
    } else if (-1 != f.indexOf("www.shoesales.com.au")) try {
        c = 45724, a = $j(".product-shop .price").last().text().split("$")[1].trim(), b = $j(".product-name span").text().split("by")[1].trim(), e = $j(".product-name h1").clone().children().remove().end().text().trim(), d = optionsPrice.productId
    } catch (no) {
        c = 45724, a = 0, d = e = b = ""
    } else if (-1 != f.indexOf("www.bobbibrown.com.au")) try {
        c = 5842, a = $j(".size-data .price").text().split("$")[1].trim(),
        b = "BOBBI BROWN", d = e = $j(".product-info h1").text().trim()
    } catch (oo) {
        c = 5842, a = 0, d = e = b = ""
    } else if (-1 != f.indexOf("www.esteelauder.com.au")) try {
        c = 46417, a = $j(".sku-menu option:selected").length ? $j(".sku-menu option:selected").text().split("$")[1].trim() : $j("#price-span").text().split("$")[1].trim(), b = "ESTEE LAUDER", d = e = $j(".prod_title_primary").first().text().trim()
    } catch (po) {
        c = 46417, d = e = b = ""
    } else if (-1 != f.indexOf("www.lamadeclothing.com")) try {
        g = "$", c = 44027, a = $j(".price-box .price").last().text().split("$")[1].trim(),
        b = "LA made", d = e = $j(".product-name h1").text().trim()
    } catch (qo) {
        c = 44027, d = e = b = ""
    } else if (-1 != f.indexOf("www.hobobags.com")) try {
        c = 47773, a = $j("#UnitCostSpan").text().split("$")[1].trim(), b = "Hobo The Original", d = e = $j("#ContentPlaceHolder1_ModelName").text().trim()
    } catch (ro) {
        c = 47773, d = e = b = ""
    } else if (-1 != f.indexOf("www.lillypulitzer.com")) try {
        c = 47728, a = $j(".basePrice").text().split("$")[1].trim(), b = "Lilly Pulitzer", d = e = $j(".itemName").text().trim()
    } catch (so) {
        c = 47728, d = e = b = ""
    } else if (-1 != f.indexOf("www.rachelcomey.com")) try {
        c =
            46742, a = $j(".product-shop .price-box span").last().text().split("$")[1].trim(), b = "Rachel Comey", d = e = $j(".product-name h1").text().trim()
    } catch (to) {
        c = 46742, d = e = b = ""
    } else if (-1 != f.indexOf("www.bebe.com")) try {
        c = 46517, a = $j(".priceDisplay").first().text().split("$")[1].replace("-", "").trim(), b = "bebe", d = e = $j(".description-container h1").text().trim()
    } catch (uo) {
        c = 46517, d = e = b = ""
    } else if (-1 != f.indexOf("apartmentnumber9.com")) try {
        c = 46090, a = $j(".price.product-price span").last().text().split("$")[1].replace(",",
            "").replace("30% OFF", "").trim(), b = $j("#product-detail-info h3").text().trim(), d = e = $j("#product-detail-info h4").text().trim()
    } catch (vo) {
        c = 46090, d = e = b = ""
    } else if (-1 != f.indexOf("www.melissajoymanning.com")) try {
        c = 46147, a = $j("#product-info-area #price-value").text().split("$")[1].replace(",", "").trim(), b = "Melissa Joy Manning", d = e = $j(".prod-title").text().trim()
    } catch (wo) {
        c = 46147, d = e = b = ""
    } else if (-1 != f.indexOf("www.fiorelli.com")) try {
        c = 48202, a = $j(".rightcol .price").text().split("\u00a3")[1].trim(), b =
            "FIORELLI", d = e = $j(".subtitle.replace").first().text().trim()
    } catch (xo) {
        c = 48202, d = e = b = ""
    } else if (-1 != f.indexOf("www.fisher-price.com")) try {
        c = 44564, g = "$", a = 0 < $j(".sale-price").length ? $j(".sale-price").text().trim().replace("$", "").replace(",", "") : $j('span[itemprop="price"]').text().trim().replace("$", "").replace(",", ""), b = "Fisher-Price", d = e = $j('span[itemprop="name"]').text().trim()
    } catch (yo) {
        c = 44564, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.soliver.de")) try {
        c = 44375, g = "\u20ac", a = 3 < $j("#descriptions .value.price .newPrice span:last").text().length ?
            $j("#descriptions .value.price .newPrice span:last").text().split("EUR")[0].replace(",", ".").trim() : $j("#descriptions .value.price span").text().split("EUR")[0].replace(",", ".").trim(), b = "S. Oliver", d = e = $j("#descriptions h1").text().trim()
    } catch (zo) {
        c = 44375, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.albamoda.de")) try {
        c = 44393, g = "\u20ac", a = $j(".infoContent.articleInfos .priceReduced").attr("data-price").split("EUR")[0].replace(",", "."), b = $j("#manufacturerToolTip h4").text().split("von")[1].replace(" ",
            ""), d = e = $j("#infoContainer h1").text()
    } catch (Ao) {
        c = 44393, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.titus.de")) try {
        c = 44372, g = "\u20ac", a = $j(".spacer span:first").text().split("\u20ac")[1].replace(",", ".").trim(), b = "Titus", d = e = $j(".spacer h1").text()
    } catch (Bo) {
        c = 44372, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.smartwool.com")) try {
        c = 48857, g = "$", a = $j(".product-detail.clearfix h3 span").text().split("$")[1].replace(",", "").trim(), b = "Smartwool", d = e = $j(".product-detail.clearfix h1").text()
    } catch (Co) {
        c = 48857, e =
            d = b = "", a = 0
    } else if (-1 != f.indexOf("www.babista.de")) try {
        c = 48790, g = "\u20ac", a = 3 < $j(".currentPriceInner.priceNow").text().length ? $j(".currentPriceInner.priceNow").text().split("\u20ac")[0].replace(",", ".").trim() : $j(".subcolumns.product_detail .currentPrice").text().split("\u20ac")[0].replace(",", ".").trim(), b = $j(".subcolumns.product_detail .product_title_subhead").clone().children().remove().end().text().split("von")[1].trim(), d = e = $j(".subcolumns.product_detail .product-title-header").text()
    } catch (Do) {
        c =
            48790, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.belstaff.co.uk")) try {
        c = 44777, g = "\u00a3", a = 1 < $j("#rich-floating-bar .price").length ? $j("#rich-floating-bar .price").text().split("\u00a3")[1].replace(",", "").trim() : $(".productdetailcolumn.productinfo .salesprice").text().split("\u00a3")[1].replace(",", "").trim(), b = "BELSTAFF", d = e = $j(".productdetailcolumn.productinfo h1").text()
    } catch (Eo) {
        c = 44372, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.yancor.de")) try {
        c = 48811, g = "\u20ac", a = 0 < $j(".pd-right-col-small.price-box .pd-main-price-red").length ?
            $j(".pd-right-col-small.price-box .pd-main-price-red").text().split("\u20ac")[0].replace(",", ".").trim() : $j(".pd-right-col-small.price-box .pd-main-price").text().split("\u20ac")[0].replace(",", ".").trim(), b = "Yancor", d = e = $j(".product-details h2").text()
    } catch (Fo) {
        c = 48811, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("hurley.com")) try {
        c = 46105, g = "$", a = $j(".prod-info td:eq(1)").text().split("$")[1].replace(",", "").trim(), b = "Hurley", d = e = $j(".prod-info h1").text()
    } catch (Go) {
        c = 46105, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.elaineturner.com")) try {
        c =
            47707, g = "$", a = $j(".pricecolor.colors_productprice span").text().split("$")[1].replace(",", "").trim(), b = "Elaine Turner", d = e = $j(".productnamecolorLARGE.colors_productname").text()
    } catch (Ho) {
        c = 47707, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.necessaryclothing.com")) try {
        c = 46387, g = "$", a = $j(".entry .special-price .price-number").length ? $j(".entry .special-price .price-number").text().replace(",", "").trim() : $j(".entry .regular-price .price").text().split("$")[1].replace(",", "").trim(), b = "Necessary Clothing",
        d = e = $j(".rtcol .prodname").text()
    } catch (Io) {
        c = 46387, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.luluandgeorgia.com")) try {
        c = 48508, g = "$", a = $j(".bottom-price .commerce-product-field .field-type-commerce-price").length ? $j(".bottom-price .field-commerce-price").text().split("$")[1].replace(",", ".").trim() : $j(".six.columns .field-content").text().split("$")[1].replace(",", ".").trim(), b = "Lulu and Georgia", d = e = 1 < $j(".six.columns .product-title").length ? $j(".six.columns .product-title").text() : $j(".six.columns h3").text().trim()
    } catch (Jo) {
        c =
            48508, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("uk.burberry.com")) try {
        c = 48856, a = $j(".price-amount").text().split("\u00a3")[1].replace(",", "").trim(), b = "BURBERRY", d = e = $j(".product-title-container h1").text().trim()
    } catch (Ko) {
        c = 48856, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("us.burberry.com")) try {
        c = 48944, a = $j(".price-amount").text().split("$")[1].replace(",", "").trim(), b = "BURBERRY", d = e = $j(".product-title-container h1").text().trim()
    } catch (Lo) {
        c = 48944, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.jackspade.com")) try {
        c =
            46003, a = 3 < $j(".product-discounted-price").text().length ? $j(".product-discounted-price .product-sales-price").text().split("$")[1].replace("sale", "").trim() : $j(".product-price  .product-sales-price").text().split("$")[1].replace(",", "").trim(), b = "JACK SPADE", e = $j(".product-name h1").text().trim(), d = $j(".productspecs ul li:last-child").text().split("#")[1].trim()
    } catch (Mo) {
        c = 46003, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.adidas.com")) try {
        c = 46531, a = $j("#productDetailSection #productPrice #currentPrice").text().split("$")[1].trim(),
        b = "adidas", d = e = $j("#productName").text().trim()
    } catch (No) {
        c = 46531, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.24colours.de")) try {
        c = 48817, a = $j("#productPrice span").text().replace(",", ".").trim(), b = "24 COLOURS", d = e = $j(".pageHead").text().trim()
    } catch (Oo) {
        c = 48817, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.jacques-britt-shop.de")) try {
        c = 46774, a = $j("#vk1").text().split("\u20ac")[0].replace(",", ".").trim(), b = "Jacques Britt", d = e = $j("#ProduktBezeichnung").text().trim()
    } catch (Po) {
        c = 46774, e = d = b = "", a = 0
    } else if (-1 !=
        f.indexOf("www.nivenandjoshua.com")) try {
        c = 49179, a = $j(".prices").text().split("\u00a3")[1].replace(",", "").trim(), b = "Niven and Joshua", d = e = $j("#productInfo h2").first().text().trim()
    } catch (Qo) {
        c = 49179, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.riverisland.com")) try {
        g = "\u00a3", c = 49217, a = $j(".right-side .price .sale").text().length ? $j(".right-side .price .sale").text().split("\u00a3")[1].trim() : $j(".right-side .price").text().split("\u00a3")[1].trim(), b = "RIVER ISLAND", d = e = $j(".right-side h1").first().text().trim()
    } catch (Ro) {
        c =
            49217, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.riverisland.fr")) try {
        g = "\u20ac", c = 49217, a = $j(".right-side .price .sale").text().length ? $j(".right-side .price .sale").text().split("\u20ac")[0].replace(",", ".").trim() : $j(".right-side .price").text().split("\u20ac")[0].replace(",", ".").trim(), b = "RIVER ISLAND", d = e = $j(".right-side h1").first().text().trim()
    } catch (So) {
        c = 49217, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("eu.riverisland.com")) try {
        g = "\u20ac", c = 49217, a = $j(".right-side .price .sale").text().length ? $j(".right-side .price .sale").text().split("\u20ac")[1].replace(",",
            ".").trim() : $j(".right-side .price").text().split("\u20ac")[1].replace(",", ".").trim(), b = "RIVER ISLAND", d = e = $j(".right-side h1").first().text().trim()
    } catch (To) {
        c = 49217, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("us.riverisland.com")) try {
        g = "$", c = 50997, a = $j(".right-side .price .sale").text().length ? $j(".right-side .price .sale").text().split("$")[1].trim() : $j(".right-side .price").text().split("$")[1].trim(), b = "RIVER ISLAND", d = e = $j(".right-side h1").first().text().trim()
    } catch (Uo) {
        c = 50997, e = d = b = "", a = 0
    } else if (-1 !=
        f.indexOf("www.kendrascott.com")) try {
        c = 47723, a = 0 < $j("#product-price span").text().length ? $j("#product-right #product-price span").last().split("$")[1].text().trim() : $j("#product-price").text().split("$")[1].trim(), b = "KENDRA SCOTT", d = e = $j("#product-title").text().trim()
    } catch (Vo) {
        c = 47723, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.lelesadoughi.com")) try {
        c = 46756, a = $j(".ecwid-productBrowser-ProductPage .ecwid-productBrowser-price").text().split("$")[1].replace(",", "").trim(), b = "LELE SADOUGHI", d = e = $j(".ecwid-productBrowser-ProductPage .ecwid-productBrowser-head").first().text().trim()
    } catch (Wo) {
        c =
            46756, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("cynthiavincent.net")) try {
        c = 53116, a = $j(".price").clone().children().remove().end().first().text().split("$")[1].replace(",", "").trim(), b = "CYNTHIA VINCENT", d = e = $j(".title").first().text().trim()
    } catch (Xo) {
        c = 53116, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.giginewyork.com")) try {
        c = 46745, a = $j(".pricecolor.colors_productprice span").text().split("$")[1].replace(",", "").trim(), b = "GiGi NEW YORK", d = e = $j(".productnamecolorLARGE.colors_productname span").text().trim()
    } catch (Yo) {
        c =
            46745, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("dareenhakim.com")) try {
        c = 48130, a = $j(".price").text().split("$")[1].replace(",", "").trim(), b = "dareen hakim", d = e = $j(".product-shop span").first().text().trim()
    } catch (Zo) {
        c = 48130, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.kule.com")) try {
        c = 47786, a = $j(".product-shop .price-box .price.price-special").length ? $j(".product-shop .price-box .price.price-special").text().split("$")[1].trim() : $j(".price-box span").text().split("$")[1].trim(), b = "KULE", d = e = $j(".product-shop .product-name h1").text().trim()
    } catch ($o) {
        c =
            47786, d = b = "", a = 0
    } else if (-1 != f.indexOf("shopadorn.com")) try {
        c = 46804, a = $j(".modal_price span").last().text().split("$")[1].replace(",", "").trim(), b = "Shop adorn", d = e = $j(".product_name").first().text().trim()
    } catch (ap) {
        c = 46804, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.biscuit-home.com")) try {
        c = 48955, a = $j(".price").text().split("$")[1].replace(",", "").trim(), b = "BISCUIT", d = e = $j("#lblTitle_ctl").text().trim()
    } catch (bp) {
        c = 48955, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.michaelstars.com")) try {
        c = 46553, a = $j('span[id*="product-price-"]').text().split("$")[1].trim(),
        b = "Michael Stars", d = e = $j(".product-name h1").text().trim()
    } catch (cp) {
        c = 46553, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.rebeccataylor.com")) try {
        c = 6009, a = $j("#attr-sellprice").text().split("$")[1].replace(",", "").trim(), b = "REBECCA TAYLOR", d = e = $j(".invtname").text().trim()
    } catch (dp) {
        c = 6009, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.bysmits.com")) try {
        c = 47731, a = $j(".price-box .old-price").length ? $j(".price-box .special-price ").text().split("\u20ac")[1].replace(",", ".").trim() : $j(".price-box .regular-price .price").text().split("\u20ac")[1].replace(",",
            ".").trim(), b = "by smits", d = e = $j(".product-name h1").text().trim()
    } catch (ep) {
        c = 47731, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.dicapolavori.com")) try {
        c = 48892, g = "\u20ac", a = $j("#Merk span").last().text().replace("Final Summer Sale", "").replace("\u20ac", "").replace(",", ".").trim(), b = "diCapolavori", d = e = $j("#Merk h2").text().split("(")[0].trim()
    } catch (fp) {
        c = 48892, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("catwalk88.com")) try {
        c = 49216, 0 < $j(".product-view").length && (g = $j(".vivian-current span").text().replace(/[a-zA-Z]*/,
            "").replace(/[\(\)]/g, "").trim(), a = $j('span[id*="product-price-"]').first().text().replace(/[^0-9\,\.]/g, "").replace(",", ".").trim(), b = "CATWALK88", d = e = $j(".product-name h1").text().split("(")[0].trim())
    } catch (gp) {
        c = 49216, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.shuuemura-usa.com")) try {
        c = 48511, a = $j(".product-price .price-sales").text().split("$")[1].replace(",", "").trim(), b = "shu uemura", d = e = $j(".product-detail-head.clearfix .product-name").first().text().trim()
    } catch (hp) {
        c = 48511, e = d = b = "", a = 0
    } else if (-1 !=
        f.indexOf("www.curatorsf.com")) try {
        c = 48847, a = $j(".Value em").text().split("$")[1].replace(",", "").trim(), b = "CURATOR", d = e = $j(".ProductMain #ProductName").text().trim()
    } catch (ip) {
        c = 48847, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.echodesign.com")) try {
        c = 48868, a = $j(".regular-price .price").text().split("$")[1].replace(",", "").trim(), b = "echo", d = e = $j(".product-name h1").text().trim()
    } catch (jp) {
        c = 48868, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.bonlook.com")) try {
        c = 4540, a = $j(".field.field-ucd-sell-price span").text().split("$")[1].replace(",",
            "").trim(), b = "BONLOOK", d = e = $j(".title span").text().trim()
    } catch (kp) {
        c = 4540, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.burkedecor.com")) try {
        c = 1271, a = $j(".content .price").text().split("$")[1].replace(",", "").trim(), b = "BURKEDECOR", d = e = $j(".title cufontext").text().trim()
    } catch (lp) {
        c = 1271, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.adamsblatt.ch")) try {
        c = 48799, a = $j(".price-box .price").text().split("\u20ac")[1].replace(",", ".").trim(), b = "adams Blatt", d = e = $j(".product-name h1").text().trim()
    } catch (mp) {
        c = 48799,
        e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.aqaq.com")) try {
        c = 45710, a = $j(".price-container .old-price").length ? $j(".price-container .special-price").text().split("$")[1].replace(",", "").trim() : $j(".price-container .regular-price").text().split("$")[1].replace(",", "").trim(), b = "AQ AQ", d = e = $j(".form h1").text().trim()
    } catch (np) {
        c = 45710, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.radley.co.uk")) try {
        c = 4621, a = $j(".product-options-bottom .prices .now").length ? $j(".product-options-bottom .prices .now").text().split("\u00a3")[1].replace(",",
            "").replace("Now", "").trim() : $j(".product-options-bottom .prices span").text().split("\u00a3")[1].replace(",", "").trim(), b = "RADLEY", d = e = $j(".product-name h1").text().trim()
    } catch (op) {
        c = 4621, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.jasu.com")) try {
        c = 49270, a = $j(".pprice").clone().children().remove().end().text().split("$")[1].replace(",", "").trim(), b = "JASU", d = e = $j(".pname").first().text().trim()
    } catch (pp) {
        c = 49270, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.box13.com.au")) try {
        c = 45412, a = $j(".product-shop .price-box .price").text().split("$")[1].replace(",",
            "").trim(), b = "BOX 13", d = e = $j(".product-view .product-name").text().trim()
    } catch (qp) {
        c = 45412, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.zodee.com.au")) try {
        c = 48670, a = $j(".price-box .special-price .price").last().text().split("$")[1].replace(",", "").trim(), b = "zodee", d = e = $j(".product-name span").last().text().trim()
    } catch (rp) {
        c = 48670, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("birchbox.co.uk")) try {
        c = 46081, a = $j(".product-addtocart .product-price .regular-price").text().split("\u00a3")[1].replace(",", "").trim(), b =
            "BIRCHBOX", d = e = $j(".span8 h1").text().trim()
    } catch (sp) {
        c = 46081, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.birchbox.com")) try {
        c = 50772, a = $j('.price [itemprop="price"]').text().split("$")[1].replace(",", "").trim(), b = $j(".span6 .brand-name").text().trim(), d = e = $j(".span6 .page-header h1").text().trim()
    } catch (tp) {
        c = 50772, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.themensshop.com.au")) try {
        c = 48622, g = "$", a = $j(".padding.details .now").length ? $j(".padding.details .now").text().split("$")[1].replace(",", "").trim() :
            $j(".padding.details .price .currency").text().split("$")[1].replace(",", "").trim(), b = $j(".padding.details h2").text().trim(), d = e = $j(".padding.details h1").text().trim()
    } catch (up) {
        c = 48622, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.charles-voegele.de")) try {
        c = 46789, a = $j(".grid4 .price span").first().text().trim(), b = "Charles Vogele", d = e = $j(".grid4 h1").first().text().trim()
    } catch (vp) {
        c = 46789, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.mandarinaduck.com")) try {
        c = 6250, a = $j(".information .price span").last().text().split("\u20ac")[1].trim(),
        b = "MANDARINA DUCK", d = e = $j(".information H1").text().trim()
    } catch (wp) {
        c = 6250, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.herrenausstatter.de")) try {
        c = 47131, a = $j(".rechts #vk1").text().replace(",", ".").trim(), b = "herrenausstatter", d = e = $j("#ProduktUntertitel").text().trim()
    } catch (xp) {
        c = 47131, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.jacques-britt-shop.de")) try {
        c = 46774, a = $j("#ProduktPreisOben #vk1").text().replace(",", ".").trim(), b = "Jacques Britt", d = e = $j("#Produkt_hori_top #ProduktBezeichnung").text().trim()
    } catch (yp) {
        c =
            46774, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.deichmann.com")) try {
        c = 46168, a = $j(".detail-head .detail-head-right").text().split("\u20ac")[0].replace(",", ".").trim(), b = $j(".brand a").text().trim(), d = e = $j("#m_product_facts_name cufontext").text().trim()
    } catch (zp) {
        c = 46168, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.falke.com")) try {
        c = 46198, a = $j(".price-table .price").text().split("\u20ac")[0].replace(",", ".").trim(), b = "FALKE", d = e = $j(".optionsRight .special").text().trim()
    } catch (Ap) {
        c = 46198, d = b = "", a = 0
    } else if (-1 !=
        f.indexOf("store.orsay.com")) try {
        c = 46201, a = $j(".details .float-L.regularPrice ").text().split("\u20ac")[0].replace(",", ".").trim(), b = "orsay", d = e = $j(".main-infos .product-name").text().trim()
    } catch (Bp) {
        c = 46201, d = b = "", a = 0
    } else if (-1 != f.indexOf("shop-de.lacoste.com")) try {
        c = 47881, a = $j(".price.mainPrice span").text().split("\u20ac")[0].replace(",", ".").trim(), b = "LACOSTE", d = e = $j(".productinfo .productname").text().trim()
    } catch (Cp) {
        c = 47881, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.trendfabrik.de")) try {
        c = 45604,
        a = $j(".availeble-box .special-price .price").length ? $j(".availeble-box .special-price .price").text().split("\u20ac")[0].replace(",", ".").trim() : $j(".availeble-box .regular-price .price").text().split("\u20ac")[0].replace(",", ".").trim(), b = "TREND FABRIK", d = e = $j(".product-holder .product-name").text().trim()
    } catch (Dp) {
        c = 45604, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.street-one.de")) try {
        c = 46255, a = $j(".fourth.clearfix .box-wk-button.clearfix em del").length ? $j(".fourth.clearfix .box-wk-button.clearfix em ins").text().replace(",",
            ".").trim() : $j(".fourth.clearfix .box-wk-button.clearfix em strong").text().replace(",", ".").trim(), b = "Street One", d = e = $j(".second h1").text().trim()
    } catch (Ep) {
        c = 46255, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.lodenfrey.com")) try {
        c = 47890, a = $j(".information .oldPrice").length ? $j(".information .artPrice.reduced").text().replace(",", ".").split("\u20ac")[0].trim() : $j(".information .priceBlock .artPrice").text().replace(",", ".").split("\u20ac")[0].trim(), b = "LODENFREY", d = e = $j(".productMainInfo #productTitle").clone().children().remove().end().text().trim()
    } catch (Fp) {
        c =
            47890, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.hallhuber.com")) try {
        c = 46267, g = "\u20ac", a = $j(".price-box .price").last().text().split("\u20ac")[1].replace(",", ".").trim(), b = "HALLHUBER", d = e = $j(".product-name.decoration-regular cufontext").text().replace("|", "").trim()
    } catch (Gp) {
        c = 46267, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.daniel-hechter.de")) try {
        c = 46270, a = $j(".clearfix.catpriceinfo.detail cufontext").text().split("\u20ac")[1].replace(",", ".").replace("*", "").trim(), b = "DANIEL HECHTER", d = e = $j(".shortdesc").text().trim()
    } catch (Hp) {
        c =
            46270, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.roland-schuhe.de")) try {
        c = 48814, a = $j("#m_product_facts_price").text().split("\u20ac")[0].replace(",", ".").trim(), b = "ROLAND ONLINE SHOP", d = e = $j(".cufon.cufon-canvas cufontext").first().text().trim()
    } catch (Ip) {
        c = 48814, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.airfield-shop-dresden.de")) try {
        c = 48805, a = $j(".content_prices.clearfix .price #our_price_display").text().split("\u20ac")[0].trim(), b = $j("#pb-left-column span").first().text().trim(), d = e = $j("#pb-left-column div span").eq(2).text().trim()
    } catch (Jp) {
        c =
            48805, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.myelisa.com")) try {
        c = 48802, a = $j(".product-options-bottom .price-box .old-price").length ? $j(".product-options-bottom .price-box .special-price .price").text().replace(",", ".").split("\u20ac")[0].trim() : $j(".product-options-bottom .price-box .regular-price .price").text().replace(",", ".").split("\u20ac")[0].trim(), b = "myElisa", d = e = $j(".product-shop .product-name").text().trim()
    } catch (Kp) {
        c = 48802, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.frontlineshop.com")) try {
        c =
            45610, a = $j(".pricing .sales-price").text().split("\u20ac")[1].replace(",", ".").trim(), b = $j("#product-display .headline.product-name .product-title").first().text().trim(), d = e = $j("#product-display .headline.product-name .product-title").last().text().trim()
    } catch (Lp) {
        c = 45610, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.edonmanor.com")) try {
        c = 44705, a = $j("#item-info .money").last().text().split("$")[1].replace(",", "").trim(), b = $j(".brand-links").text().trim(), d = e = $j(".product-name").text().trim()
    } catch (Mp) {
        c =
            44705, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.b-glowing.com")) try {
        c = 45661, a = $j(".product-price #selectedOptionPrice .reddy").length ? $j(".product-price #selectedOptionPrice .reddy").clone().children().remove().end().text().replace("$", "").replace(",", "").split("SALE")[0].trim() : $j(".product-price #selectedOptionPrice").clone().children().remove().end().text().split("$")[1].replace(",", "").trim(), b = $j("h2.company-name a").text().trim(), d = e = $j("h1.product-name").text().trim()
    } catch (Np) {
        c = 45661, d = b = "",
        a = 0
    } else if (-1 != f.indexOf("www.chromaticgallerie.com")) try {
        c = 49297, a = $j(".product-shop .price-special").length ? $j(".product-shop .price-special").text().replace(",", "").split("$")[1].trim() : $j(".product-shop .product-name h1").text().split("$")[1].replace(",", "").trim(), b = "CHROMATIC gallerie", d = e = $j(".product-shop .product-name h1").text().split("$")[0].trim()
    } catch (Op) {
        c = 49297, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.fredasalvador.com")) try {
        c = 46441, a = $j(".span6 .price").text().split("$")[1].replace(",",
            "").trim(), b = "FREDA SALVADOR", d = e = $j(".span6 .title").text().trim()
    } catch (Pp) {
        c = 46441, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.tandjdesigns.com")) try {
        c = 48937, a = $j("#Price").text().replace("$", "").split("sale")[0].trim(), b = "t and j DESIGNS", d = e = $j("#ProductDescription h2").text().trim()
    } catch (Qp) {
        c = 48937, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.julesb.co.uk")) try {
        c = 47743, "$USD" === $j("#currency_link .block1").text() ? (g = "$", a = $j("#price").text().split("$")[1].replace(",", "").trim()) : "\u00a3GBP" === $j("#currency_link .block1").text() &&
            (g = "\u00a3", a = $j("#price").text().split("\u00a3")[1].replace(",", "").trim()), b = "Jules B", d = e = $j("#product_title").text().trim()
    } catch (Rp) {
        c = 47743, d = b = "", a = 0
    } else if (-1 != f.indexOf("trumpetandhorn.com")) try {
        c = 49304, a = $j(".price-box .price").text().split("$")[1].replace(",", "").trim(), b = "Trumpet & Horn", d = e = $j(".product-name h1").text().trim()
    } catch (Sp) {
        c = 49304, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.dollskill.com")) try {
        c = 49232, a = $j(".price-box .old-price").length ? $j(".price-box .special-price .price").text().replace(",",
            "").split("$")[1].trim() : $j(".price-box .regular-price .price").text().split("$")[1].replace(",", "").trim(), b = "DOLLS KILL", d = e = $j(".product-name span").text().trim()
    } catch (Tp) {
        c = 49232, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.h2oplus.com")) try {
        c = 49378, a = $j(".tableitem #productPricing span").text().split("$")[1].replace(",", "").trim(), b = "h20 plus", d = e = $j(".detailheader").text().trim()
    } catch (Up) {
        c = 49378, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.madebygirl.com")) try {
        c = 49562, a = $j("#cartform #priceBlock").text().split("$")[1].replace(",",
            "").trim(), b = "Made By Girl", d = e = $j("#main td h2").text().trim()
    } catch (Vp) {
        c = 49562, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.halsbrook.com")) try {
        c = 45068, a = $j(".product-shop .hb-price-old").length ? $j(".product-sidebar .hb-price-sale").first().clone().children().remove().end().text().replace(",", "").trim() : $j(".product-sidebar .hb-price").first().clone().children().remove().end().text().replace(",", "").trim(), b = "HALSBROOK", d = e = $j(".product-name h2").text().trim()
    } catch (Wp) {
        c = 45068, d = b = "", a = 0
    } else if (-1 !=
        f.indexOf("www.davieandchiyo.com")) try {
        c = 49300, a = $j(".modal_price span").last().text().split("$")[1].replace(",", "").trim(), b = "Davie and Chiyo", d = e = $j(".product_name").text().trim()
    } catch (Xp) {
        c = 49300, d = b = "", a = 0
    } else if (-1 != f.indexOf("freshproduceclothes.com")) try {
        c = 45658, a = $j(".price-box .old-price").length ? $j(".price-box .special-price").text().split("$")[1].replace(",", "").trim() : $j(".price-box .regular-price .price").text().split("$")[1].replace(",", "").trim(), b = "fresh produce", d = e = $j(".product-name h1").text().trim()
    } catch (Yp) {
        c =
            45658, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.flannels.com")) try {
        c = 4653, a = $j("#SalePriceDiv2").text().split("\u00a3")[1].replace(",", "").trim(), b = "FLANNELS", d = e = $j(".title h1 span").text().trim()
    } catch (Zp) {
        c = 4653, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.shopjeen.com")) try {
        c = 46108, a = $j("#product-price .money").text().split("$")[1].replace(",", "").trim(), b = "SHOP JEEN", d = e = $j("#product-description h1").text().trim()
    } catch ($p) {
        c = 46108, d = b = "", a = 0
    } else if (-1 != f.indexOf("boy-meets-girl-usa.myshopify.com")) try {
        c =
            46483, a = $j("#product-header #purchase").text().split("$")[1].replace(/[^0-9\.]/g, "").trim(), b = "Boy Meets Girl", d = e = $j("#product-title").first().text().trim()
    } catch (aq) {
        c = 46483, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.boymeetsgirlusa.com")) try {
        c = 46483, a = $j("#purchase .price").text().split("$")[1].replace("USD", "").trim(), b = "Boy Meets Girl", d = e = $j("#product-title").text().trim()
    } catch (bq) {
        c = 46483, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.activebeauty.co.uk")) try {
        c = 4713, a = $j(".controls .price .amount").text().split("\u00a3")[1].replace(",",
            "").trim(), b = "active beauty", d = e = $j(".label strong").first().text().trim()
    } catch (cq) {
        c = 4713, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.adinionline.co.uk")) try {
        c = 4724, a = $j(".product_price").text().split("\u00a3")[1].replace(",", "").trim(), b = "Adini", d = e = $j(".product_heading .shawl_header").text().trim()
    } catch (dq) {
        c = 4724, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.aftershockplc.com")) try {
        c = 6041, a = $j(".product-detail-line .product-detail-price").text().split("\u00a3")[1].replace(",", "").trim(), b = "aftershock", d =
            e = $j(".floated").text().trim()
    } catch (eq) {
        c = 6041, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.airfield-shop-dresden.de")) try {
        c = 48805, a = $j(".content_prices.clearfix #our_price_display").text().split("\u20ac")[0].replace(",", "").trim(), b = "airfield", d = e = $j("#pb-left-column span").first().text().trim()
    } catch (fq) {
        c = 48805, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.allsole.com")) try {
        j = $j(".n-unit.top-lvl-item.currency a").first().text().trim(), "GBP \u00a3" == j ? (c = 4725, g = "\u00a3") : "EUR \u20ac" == j && (c = 4725, g = "\u20ac"),
        a = $j(".productoptions .product-price span").text().split(g)[1].replace(",", "").trim(), b = "all Sole", d = e = $j(".product-title.font-alpha span").text().trim()
    } catch (gq) {
        c = 4725, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.amara.com")) try {
        c = 44725, a = $j("#product-purchase .product-price.clearfix .price.old").length ? $j("#product-purchase .product-price.clearfix .price.reddull").text().split("\u00a3")[1].replace(",", "").trim() : $j("#product-purchase .product-price.clearfix .price").text().split("\u00a3")[1].replace(",",
            "").trim(), b = "AMARA", d = e = $j("#product-purchase .product-h1").text().trim()
    } catch (hq) {
        c = 44725, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.ambrosewilson.com")) try {
        var M = $j(".priceRange").text().split(" ")[35].trim(),
            c = 4726,
            a = "to" == M ? $j(".priceRange").text().split("to")[0].replace("from \u00a3", "").trim() : $j(".priceRange").text().split("\u00a3")[1].trim(),
            b = "ambrose Wilson",
            d = e = $j("#productHeading h1").text().trim()
    } catch (iq) {
        c = 4726, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.amplebosom.com")) try {
        c = 4727, a = $j("#er-prodpage-right h2").text().split("\u00a3")[1].replace(",",
            "").replace("-", "").trim(), b = "Ample Bosom", d = e = $j("#er-prodpage-right h1").text().trim()
    } catch (jq) {
        c = 4727, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.agfashion.de")) try {
        c = 45229, a = $j("#detail .article_details_price strong").text().split("\u20ac")[0].replace(",", ".").trim(), b = "angies glamour Fahsion", d = e = $j(".right h1").text().trim()
    } catch (kq) {
        c = 45229, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.annsummers.com")) try {
        c = 4728, a = $j(".col-2.product-attributes .price .attr-price .amount").text().replace(",", "").trim(),
        b = "Ann Summers", d = e = $j(".col-2.product-attributes h1").text().trim()
    } catch (lq) {
        c = 4728, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.antikbatik.fr")) try {
        c = 44008, a = $j(".add-to-cart .price-box .price").text().replace(",", ".").split("\u20ac")[0].trim(), b = "ANTIK BATIK", d = e = $j(".product-shop .product-name h1").text().trim()
    } catch (mq) {
        c = 44008, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.anyahindmarch.com")) try {
        c = 4610, a = $j(".productdetailcolumn.productinfo .price .salesprice").text().replace(",", "").split("\u00a3")[1].trim(),
        b = "Anya Hindmarch", d = e = $j(".productdetailcolumn.productinfo .productname").text().trim()
    } catch (nq) {
        c = 4610, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.aphrodite1994.com")) try {
        c = 45547, a = $j(".price-box .price").last().text().split("\u00a3")[1].trim(), b = "APHRODITE", d = e = $j(".product-shop .product-name h1").text().trim()
    } catch (oq) {
        c = 45547, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.arbeitskleidung-billiger.com")) try {
        c = 47047, a = $j("#d10-price .single span").text().trim(), b = "arbeitskleidung billiger", d = e = $j("#d10-name h1").text().trim()
    } catch (pq) {
        c =
            47047, d = b = "", a = 0
    } else if (-1 != f.indexOf("windsor.de")) try {
        c = 46513, g = "CHF", a = $j(".h4.price .js_price").text().replace(",", ".").replace("'", "").split("CHF")[1].trim(), b = "windsor", d = e = $j(".pdt.summary .h1").text().trim()
    } catch (qq) {
        c = 46513, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.towneandreese.com")) try {
        c = 49448, a = $j(".price-box span").eq(1).text().split("$")[1].trim(), b = "TOWNE and REESE", d = e = $j(".product-name h1").text().trim()
    } catch (rq) {
        c = 49448, d = b = "", a = 0
    } else if (-1 != f.indexOf("briarrin.com")) try {
        c = 49556,
        a = $j(".details .price").text().split("$")[1].split("USD")[0].trim(), b = "Bri Arrin", d = e = $j(".details h1").text().trim()
    } catch (sq) {
        c = 49556, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.raoul.com")) try {
        c = 49370, a = $j("#tab1 p").first().text().split("$")[1].trim(), b = "RAOUL", d = e = $j("#tab1 h3").first().text().trim()
    } catch (tq) {
        c = 49370, d = b = "", a = 0
    } else if (-1 != f.indexOf("mlleclothing.com")) try {
        c = 49576, a = $j("#content #description b").first().text().split("$")[1].trim(), b = "Mlle Mademoiselle", d = e = $j("#description h1").first().text().trim()
    } catch (uq) {
        c =
            49576, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.arktis.de")) try {
        c = 6238, a = $j(".article_details_price strong").text().split("\u20ac")[0].replace(",", ".").trim(), b = "arktis", d = e = $j("#detailbox h1").text().trim()
    } catch (vq) {
        c = 6238, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.armedangels.de")) try {
        c = 6239, a = $j(".detail .articlePrice").text().split("\u20ac")[1].replace(",", ".").trim(), b = "armedangels", d = e = $j(".smallHeadline").text().trim()
    } catch (wq) {
        c = 6239, d = b = "", a = 0
    } else if (-1 != f.indexOf("emploinewyork.com")) try {
        c = 46438,
        a = $j(".price-box .special-price .price").length ? $j(".price-box .special-price .price").text().split("$")[1].trim() : $j(".price-box .regular-price .price").text().split("$")[1].trim(), b = "emploi NEW YORK", d = e = $j(".product-name h1").text().trim()
    } catch (xq) {
        c = 46438, d = b = "", a = 0
    } else if (-1 != f.indexOf("tnuck.com")) try {
        c = 49331, a = $j(".modal_price .current_price").text().split("$")[1].trim(), b = "TUCKER NUCK", d = e = $j(".product_vendor a").text().trim()
    } catch (yq) {
        c = 49331, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.richandskinnyjeans.com")) try {
        c =
            46591, a = $j(".content-desc .price #UnitCostSpan").text().split("$")[1].trim(), b = "RICH and SKINNY", d = e = $j(".content-desc h1").text().trim()
    } catch (zq) {
        c = 46591, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.ardenb.com")) try {
        c = 49673, a = $j("#product-info-area #product-pSale").length ? $j("#product-info-area #product-pSale").text().split("$")[1].replace(",", "").trim() : $j("#product-info-area #product-pPrice").text().split("$")[1].replace(",", "").trim(), b = "ARDEN B", d = e = $j("#product-pName").text().trim()
    } catch (Aq) {
        c = 49673,
        d = b = "", a = 0
    } else if (-1 != f.indexOf("www.scoopnyc.com")) try {
        c = 49649, a = $j(".price-box .price").last().text().split("$")[1].trim(), b = "SCOOP NYC", d = e = $j(".cnt .name").text().trim()
    } catch (Bq) {
        c = 49649, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.johnhardy.com")) try {
        c = 4222, a = $j(".product-info .product-price").last().text().split("$")[1].replace(",", "").trim(), b = "John Hardy", d = e = $j(".product-description span").text().trim()
    } catch (Cq) {
        c = 4222, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.artigiano.co.uk")) try {
        c = 6273, a = $j(".product_options .price_products").text().split("\u00a3")[1].replace(",",
            "").trim(), b = "ARTIGIANO", d = e = $j("#title_product .title_product").text().trim()
    } catch (Dq) {
        c = 6273, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.artisanti.com")) try {
        c = 4718, a = $j("#product_form #_EKM_PRODUCTPRICE").text().replace(",", "").trim(), b = "ARTISANTI", d = e = $j("#right_prod h1 span").text().trim()
    } catch (Eq) {
        c = 4718, d = b = "", a = 0
    } else if (-1 != f.indexOf("direct.asda.com")) try {
        c = 4651, a = $j(".reviewsAndPrice.clearfix .productPrice .newPrice").length ? $j(".reviewsAndPrice.clearfix .productPrice .newPrice").text().split("\u00a3")[1].replace(",",
            "").trim() : $j(".reviewsAndPrice.clearfix .productPrice span").text().split("\u00a3")[1].replace(",", "").trim(), b = "George", d = e = $j("#productName").text().trim()
    } catch (Fq) {
        c = 4651, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.aspecto.co.uk")) try {
        c = 46048, a = $j(".productSelection #itemPrice .currTag").last().text().split("\u00a3")[1].replace(",", "").trim(), b = "ASPECTO", d = e = $j(".productSelection h1").first().text().trim()
    } catch (Gq) {
        c = 46048, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.atelierdecourcelles.com")) try {
        c = 6232,
        a = $j(".product-price-box .price-box .price").text().split("\u20ac")[0].replace(",", ".").trim(), b = $j(".product-name .product-brand-name").text().trim(), d = e = $j(".product-name .product-name-name").text().trim()
    } catch (Hq) {
        c = 6232, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.atterleyroad.com")) try {
        c = 44159, a = $j(".product-main-info .special-price").length ? $j(".product-main-info .special-price .price").text().split("\u00a3")[1].replace(",", "").trim() : $j(".product-main-info .regular-price .price").text().split("\u00a3")[1].replace(",",
            "").trim(), b = "ATTERLEY ROAD", d = e = $j(".left .product-name h1").text().trim()
    } catch (Iq) {
        c = 44159, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.attitudeclothing.co.uk")) try {
        c = 4730, a = $j(".price_container.right #our_price").text().split("\u00a3")[0].replace(",", "").trim(), b = "attitude clothing co", d = e = $j("#product_description strong").text().trim()
    } catch (Jq) {
        c = 4730, d = b = "", a = 0
    } else if (-1 != f.indexOf("shop.howardshowers.com.au")) try {
        c = 49699, a = $j(".alternateb-views .just-prise").first().text().split("$")[1].replace(",",
            "").trim(), b = "hOWard shOWers", d = e = $j("#ProductDetails h2").text().trim()
    } catch (Kq) {
        c = 49699, d = b = "", a = 0
    } else if (-1 != f.indexOf("morganandtaylor.com.au")) try {
        c = 49745, a = $j(".summary .price .amount").last().text().split("$")[1].replace(",", "").trim(), b = "MORGAN and TAYLOR", d = e = $j(".summary h1").text().trim()
    } catch (Lq) {
        c = 49745, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.shopjessicabuurman.com")) try {
        c = 49702, a = $j("#product-details #price .car_price").length ? $j("#product-details #price .car_price").text().split("$")[1].replace(",",
            "").trim() : $j("#product-details #price").text().split("$")[1].replace(",", "").trim(), b = "JESSICA BUURMAN", d = e = $j("#product-details h1").first().text().trim()
    } catch (Mq) {
        c = 49702, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.ausmode.com")) try {
        c = 49226, a = $j(".left_cont_details .productPrice").last().text().split("$")[1].replace(",", "").trim(), b = "AUSMODE", d = e = $j(".bold_black_descrip").first().text().trim()
    } catch (Nq) {
        c = 49226, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.herfashionbox.com")) try {
        c = 49748, a = $j(".price").last().text().split("$")[1].replace(",",
            "").trim(), b = "HER FASHION BOX", d = e = $j(".price").clone().children().remove().end().text().split("for")[0].trim()
    } catch (Oq) {
        c = 49748, d = b = "", a = 0
    } else if (-1 != f.indexOf("austinreed")) try {
        j = $j("#currentCountry .flag").attr("src").split("/")[5].trim(), g = $j("#currentCountry span").text().replace("(", "").replace(")", "").trim(), "GB.jpg" == j ? c = 4731 : "US.jpg" == j ? c = 45059 : "AU.jpg" == j && (c = 48586), a = $j("#productInfoCont #productPrice .wasPrice").length ? $j("#productInfoCont #productPrice .nowPrice").text().split(g)[1].replace(",",
            "").trim() : $j("#productInfoCont #productPrice .onePrice").text().split(g)[1].replace(",", "").trim(), b = "AUSTIN REED", d = e = $j("#productInfoCont h3 strong").first().text().trim()
    } catch (Pq) {
        d = e = b = "", a = 0
    } else if (-1 != f.indexOf("www.avenue32.com")) try {
        "GBP" == universal_variable.product.currency ? (c = 45188, g = "\u00a3") : "USD" == universal_variable.product.currency && (c = 45575, g = "$"), a = universal_variable.product.unit_sale_price, b = "AVENUE 32", e = universal_variable.product.name, d = universal_variable.product.sku_code
    } catch (Qq) {
        e =
            d = b = "", a = 0
    } else if (-1 != f.indexOf("www.meici.com")) try {
        c = 49760, a = $j(".pro_r .pro_price .price").text().split("\uffe5")[1].replace(",", "").trim(), b = "MEICI", d = e = $j(".relative span").first().text().trim()
    } catch (Rq) {
        c = 49760, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.bailey44.com")) try {
        c = 49763, a = $j(".product-shop .price-box .price").text().split("$")[1].replace(",", "").trim(), b = "BAILEY 44", d = e = $j(".product-name h1").first().text().trim()
    } catch (Sq) {
        c = 49763, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.ccskye.com")) try {
        c =
            49628, a = $j("#content .price").text().split("$")[1].replace(",", "").trim(), b = "CC SKYE", d = e = $j("#content .vendor").first().text().trim()
    } catch (Tq) {
        c = 49628, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.thedreslyn.com")) try {
        c = 49736, a = $j(".product-shop .product-price .price-box .old-price").length ? $j(".product-shop .product-price .price-box .special-price span").eq(1).text().replace("$", "").replace(",", "").trim() : $j(".product-shop .product-price .regular-price .price").text().replace(",", "").replace("$", "").trim(),
        b = "THE DRESLYN", d = e = $j(".product-name h1").first().text().trim()
    } catch (Uq) {
        c = 49736, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.roseredbridal.com")) try {
        c = 49373, a = $j("#product-details #product-prices .product-price").text().split("$")[1].replace(",", "").trim(), b = "Rose Red Bridal Designs", d = e = $j("#product-details #product-title h1").first().text().trim()
    } catch (Vq) {
        c = 49373, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.glassons.com")) try {
        c = 48682, a = $j(".product-info.floatLeft .price span").last().text().split("$")[1].replace(",",
            "").trim(), b = "GLASSONS", d = e = $j(".product-info.floatLeft h2").first().text().trim()
    } catch (Wq) {
        c = 48682, d = b = "", a = 0
    } else if (-1 != f.indexOf("beginningboutique.com.au")) try {
        c = 45850, a = $j(".ProductMain .money").text().split("$")[1].replace(",", "").replace("AUD", "").trim(), b = "BEGINNING BOUTIQUE", d = e = $j(".ProductMain h5").first().text().trim()
    } catch (Xq) {
        c = 45850, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.electricvisual.com")) try {
        c = 49769, a = $j(".product-shop .price-box .price").text().split("$")[1].replace(",", "").trim(),
        b = "ELECTRIC", d = e = $j(".product-main-info h1").first().text().trim()
    } catch (Yq) {
        c = 49769, d = b = "", a = 0
    } else if (-1 != f.indexOf("baggu.com")) try {
        c = 4865, a = $j(".details .price span").text().split("/")[0].replace("$", "").replace(",", "").trim(), b = "BAGGU", d = e = $j(".details h1").first().text().trim()
    } catch (Zq) {
        c = 4865, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.bagsdirect.com")) try {
        c = 4743, a = $j("#summary .pricenow .price").text().split("\u00a3")[1].replace(",", "").trim(), b = "bags direct", d = e = $j(".summary.fn").first().text().trim()
    } catch ($q) {
        c =
            4743, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.bananashoes.com")) try {
        c = 4744, a = $j("#product-overview .price-box .price").text().split("\u00a3")[1].replace(",", "").trim(), b = "Banana Shoes", d = e = $j("#product-overview h2").first().text().trim()
    } catch (ar) {
        c = 4744, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.bankfashion.co.uk")) try {
        c = 6020, a = $j("#productDetailsContainer #productSummaryPrice").clone().children().remove().end().text().split("\u00a3")[1].replace(",", "").trim(), b = "BANK FASHION", d = e = $j("#productSummaryTitle").first().text().trim()
    } catch (br) {
        c =
            6020, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.basefashion.co.uk")) try {
        c = 45556, a = $j("#product_form_container #product_price .price .GBP").text().split("\u00a3")[1].replace(",", "").trim(), b = "base FASHION", d = e = $j("#product_title span").first().text().trim()
    } catch (cr) {
        c = 45556, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.bastyan.co.uk")) try {
        c = 4637, a = $j("#product_info .product_price .one_price").text().split("\u00a3")[1].replace(",", "").trim(), b = "BASTYAN", d = e = $j("#product_title").first().text().trim()
    } catch (dr) {
        c =
            4637, d = b = "", a = 0
    } else if (-1 != f.indexOf("shop.cleobella.com")) try {
        c = 49682, a = $j(".span5 .purchase .price").clone().children().remove().end().text().split("$")[1].replace(",", "").trim(), b = "Cleobella", d = e = $j(".span5 .title").first().text().trim()
    } catch (er) {
        c = 49682, d = b = "", a = 0
    } else if (-1 != f.indexOf("edithhart.com")) try {
        c = 49679, a = $j(".mrExtDetails .productPrice.mrExtProduct  .strikeoutPrice").length ? $j(".mrExtDetails .productPrice.mrExtProduct .salePrice").text().split("$")[1].replace(",", "").trim() : $j(".mrExtDetails .productPrice.mrExtProduct ").first().text().split("$")[1].replace(",",
            "").trim(), b = "Edith Hart", d = e = $j(".mrExtDetails .productTitle.mrExtProduct.first-child h2").first().text().trim()
    } catch (fr) {
        c = 49679, d = b = "", a = 0
    } else if (-1 != f.indexOf("moreislove.com")) try {
        c = 49334, a = $j("#viewPrice .prc").last().text().replace(",", "").trim(), b = "MORE IS LOVE", d = e = $j(".box1 span").first().text().trim()
    } catch (gr) {
        c = 49334, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.isabellaoliver.com")) try {
        c = 6123, a = $j(".title #product-price .blu-price span").text().split("$")[1].replace(",", "").trim(), b = "Isabella Oliver",
        d = e = $j("#product-header .title.long h1").first().text().trim()
    } catch (hr) {
        c = 6123, d = b = "", a = 0
    } else if (-1 != f.indexOf("store.plumprettysugar.com")) try {
        c = 49805, a = $j(".ProductMain .Value .ProductPrice.VariationProductPrice").text().split("$")[1].replace(",", "").trim(), b = "PLUM PRETTY SUGAR", d = e = $j(".BlockContent h1").first().text().trim()
    } catch (ir) {
        c = 49805, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.glamour-sales.com.cn")) try {
        c = 49814, a = $j(".product-essential-top .price-box .regular-price .price").first().clone().children().remove().end().text().replace(",",
            "").trim(), b = "GLAMOUR SALES", d = e = $j(".product-info .product-name").first().text().trim()
    } catch (jr) {
        c = 49814, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.shopsixtwenty.com")) try {
        c = 49802, a = $j(".product-shop .price-box .price").text().split("$")[1].replace(",", "").trim(), b = "SIX TWENTY", d = e = $j(".pr-view-box .product-name h2").first().text().trim()
    } catch (kr) {
        c = 49802, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.fila.com")) try {
        c = 49643, a = $j(".pricing .price .salesprice").text().split("$")[1].replace(",", "").trim(), b = "FILA",
        d = e = $j(".productinfo h1").first().text().trim()
    } catch (lr) {
        c = 49643, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.bostonproper.com")) try {
        c = 49262, a = $j("#product-price .sale-price").length ? $j("#product-price .sale-price").text().split("$")[1].replace(",", "").trim() : $j("#product-price .regular-price").text().split("$")[1].replace(",", "").trim(), b = "BOSTON PROPER", d = e = $j("#product-name h1").first().text().trim()
    } catch (mr) {
        c = 49262, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.drjays.com")) try {
        c = 49286, a = $j("#product_info_price .price").text().split("$")[1].replace(",",
            "").trim(), b = "DRJAYS", d = e = $j("#product_info h1").first().text().trim()
    } catch (nr) {
        c = 49286, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.sarenza.de")) try {
        c = 6057, a = $j(".price strong").length ? $j(".price .product-price").text().split("\u20ac")[0].replace(",", ".").trim() : $j(".price").text().trim().replace("\u20ac", ""), b = "sarenza", d = e = $j(".h1-like span").last().text().trim()
    } catch (or) {
        c = 6057, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.oneillclothing.com")) try {
        c = 48863, a = $j(".price .sale").length ? $j(".price .sale").text().split("$")[1].replace(",",
            "").trim() : $j(".regular-price .price").text().split("$")[1].replace(",", "").trim(), b = "ONEILL", e = $j(".product-details h1").last().text().trim(), d = $j(".product-details .meta span").text().split("#")[1].trim()
    } catch (pr) {
        c = 48863, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.metalmulisha.com")) try {
        c = 49235, a = $j(".price strike span").length ? $j(".product-price .price span").last().text().split("$")[1].replace(",", "").trim() : $j(".regular-price .price").text().split("$")[1].replace(",", "").trim(), b = "METAL MULISHA",
        e = $j(".product-detail-title").last().text().trim(), d = $j(".product-detail-sku").text().split("#")[1].trim()
    } catch (qr) {
        c = 49235, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("kyokuformen.com")) try {
        c = 45670, a = $j("#product-price .product-price").text().split("$")[1].replace(",", "").trim(), b = "KYOKU FOR MEN", d = e = $j("#product-meta h1").text().split("$")[0].trim()
    } catch (rr) {
        c = 45670, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("bagadocious.com")) try {
        c = 46279, a = $j(".currency #product_price").text().replace(",", "").trim(), b = "BAGADOCIOUS",
        e = $j("#center-main h1").first().text().split("$")[0].trim(), d = $j("#product_code.property-value").text().trim()
    } catch (sr) {
        c = 46279, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.millieicaro.com")) try {
        c = 49273, a = $j(".modal_price .current_price").text().split("$")[1].replace(",", "").trim(), b = "MILLE L CARO", d = e = $j("h1.product_name").first().text().trim()
    } catch (tr) {
        c = 49273, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.silverjeans.com")) try {
        j = $j(".current.language-silverjeansca span").text().trim(), "Canada" == j && (c = 50654,
            a = $j(".product-main-info .price-box .old-price").length ? $j(".product-main-info .price-box .special-price .price").text().split("$")[1].replace(",", "").trim() : $j(".product-main-info .price-box .regular-price .price").text().split("$")[1].replace(",", "").trim(), b = "SILVER JEANS", e = $j(".product-name h1").text().trim(), d = $j(".title .product-ids").text().split("SKU ")[1].trim())
    } catch (ur) {
        c = 50654, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("us.havaianas.com")) try {
        c = 48058, a = $j(".specs .price").text().split("$")[1].replace(",",
            "").trim(), b = "HAVAIANAS", d = e = $j("h3.name").text().trim()
    } catch (vr) {
        c = 48058, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.ghurka.com")) try {
        c = 48833, a = $j(".old-price").length ? $j(".price-box .special-price .price").text().split("$")[1].replace(",", "").trim() : $j(".price-box .price").text().split("$")[1].replace(",", "").trim(), b = "GHURKA", e = $j(".product-name div").text().split("  ")[0].trim(), d = $j(".sku-product span").text().trim()
    } catch (wr) {
        c = 48833, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.cannonlewis.com")) try {
        c =
            48058, a = $j(".price cufon cufontext").text().split("$")[1].replace(",", "").trim(), b = "CANNON LEWIS", d = e = $j("#brown-box h1 cufon cufontext").text().trim()
    } catch (xr) {
        c = 48058, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("shop.cococozy.com")) try {
        c = 46795, a = $j("#priceBlock .priceSpanRet").text().split("$")[1].replace(",", "").trim(), b = "COCOCOZY", e = $j(".product_description h2").text().trim(), d = $j("#infBlock div p").text().split("\u2022")[1].split("#")[1].trim()
    } catch (yr) {
        c = 46795, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.perryellis.com")) try {
        c =
            46376, a = $j(".salesprice").length ? $j(".price .salesprice").text().split("$")[1].replace(",", "").trim() : $j(".price .standardprice").text().split("$")[1].replace(",", "").trim(), b = "PERRY ELLIS", e = $j("h1.productname").text().trim(), d = $j(".itemNo").text().split("#")[1].trim()
    } catch (zr) {
        c = 46376, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("beachfashionshop.com")) try {
        c = 3712, k = $j(".currentCurrency").text(), "\u20ac EUR" === k ? g = "\u20ac" : "\u00a3 GBP" === k ? g = "\u00a3" : "$ USD" === k && (g = "$"), a = $j(".with-discounted-price .discounted-price").length ?
            $j(".product-price .discounted-price").text().split(" ")[1].replace(",", "").trim() : $j(".product-price .normal-price").text().split(" ")[1].replace(",", "").trim(), b = "BEACHFASHIONSHOP", d = e = $j("h3#product-name").text().trim()
    } catch (Ar) {
        c = 3712, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.evesapple.com")) try {
        c = 46385, a = $j("#onsale .red").length ? $j("#prodDesc .notmore .red").clone().children().remove().end().text().split("$")[1].replace(",", "").trim() : $j("#prodDesc .notmore").text().split("$")[1].replace(",",
            "").trim(), b = "EVES APPLE", e = $j(".description-container .item-name").text().trim(), d = $j(".item-no").text().trim()
    } catch (Br) {
        c = 46385, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.lorisshoes.com")) try {
        c = 45667, a = $j(".price .originalprice").length ? $j(".backforwardbuttons .price").text().split("$")[2].replace(",", "").trim() : $j(".backforwardbuttons .price").text().split("$")[1].replace(",", "").trim(), b = $j(".backforwardbuttons h2").text().trim(), e = $j(".backforwardbuttons h3.vendor").text().trim(), d = $j("h3.stylenumber").text().split(":")[1].trim()
    } catch (Cr) {
        c =
            45667, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.ray-ban.com")) try {
        c = 1661, a = $j(".price-box .price").text().split("$")[1].replace(",", "").trim(), b = "RAY BAN", e = $j(".product-name h1").text().trim(), d = $j(".product-attributes").text().split("(")[1].split(")")[0].trim()
    } catch (Dr) {
        c = 1661, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.trinaturk.com")) try {
        c = 6055, a = $j("#product-content .price-sales").text().split("$")[1].replace(",", "").trim(), b = "TRINA TURK", e = $j(".product-detail h1").text().trim(), d = $j("#trStyle #lblStyleID").text().trim()
    } catch (Er) {
        c =
            6055, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.babibello.com")) try {
        c = 49204, a = $j(".sub.avenir cufon cufontext").text().split("$")[1].replace(",", "").trim(), b = "BABI BELLO", d = e = $j(".rhsb h1").first().text().trim()
    } catch (Fr) {
        c = 49204, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("invertededge.com")) try {
        c = 49811, a = 0 < $j(".product-view .special-price .price").length ? $j(".price-box .special-price .price").text().split("$")[1].replace(",", "").trim() : $j(".price-box .price").text().split("$")[1].replace(",", "").trim(), b = "INVERTED EDGE",
        d = e = $j(".product-name h2").first().text().trim()
    } catch (Gr) {
        c = 49811, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.loversandfriends.us")) try {
        c = 49775, a = $j(".summary .price .amount").last().text().split("$")[1].replace(",", "").trim(), b = "LOVERS AND FRIENDS", d = e = $j("h1.product_title").first().text().trim()
    } catch (Hr) {
        c = 49775, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.jackwills.com")) try {
        $j(".activeCurrency").hasClass("gbp") ? (g = "\u00a3", a = $j(".price strong").last().text().split("\u00a3")[1].replace(",", "").trim(),
            c = 4655) : $j(".activeCurrency").hasClass("usd") && (g = "$", a = $j(".price strong").last().text().split("$")[1].replace(",", "").trim(), c = 45898), b = "JACK WILLIS", d = e = $j(".title").first().text().trim()
    } catch (Ir) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.wishingtreedesigns.com")) try {
        c = 46126, a = $j("#dnn_ctr1051_viewproductinformation_UC_ScratchCombo_LBL_TotalPriceDesc").last().text().split("$")[1].replace(",", "").trim(), b = "WISHING TREE DESIGNS", d = e = $j("#dnn_ctr1051_viewproductinformation_LBL_VPI_ProductName").text().trim()
    } catch (Jr) {
        c =
            46126, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.heels.com")) try {
        c = 2332, a = $j(".on_sale").length ? $j(".price .on_sale").last().text().split("$")[1].replace(",", "").trim() : $j(".price .price").last().text().split("$")[1].replace(",", "").trim(), b = "HEELS", e = $j(".productName h1").clone().children().remove().end().text().trim(), d = $j(".sku").text().split(":")[1].trim()
    } catch (Kr) {
        c = 2332, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.ikkon.com")) try {
        c = 48860, a = $j('div[itemprop="price"]').text().split("$")[1].replace(",",
            "").trim(), b = "IKKON", d = e = $j(".product-name h1").text().trim()
    } catch (Lr) {
        c = 48860, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.shoescribe.com")) try {
        j = $j(".col.col1 #shippingTo p").eq(1).text().trim(), "UNITED STATES" == j && (c = 46094, a = $j(".newprice").length ? $j("#itemNameAndPrice .price div").last().text().split("$")[1].replace(",", "").trim() : $j("#itemNameAndPrice .price").text().split("$")[1].replace(",", "").trim()), b = "SHOESCRIBE", e = $j(".productDataInfoTitle #brandName").text().trim(), d = $j("#shortDesc p").last().text().split(":")[1].trim()
    } catch (Mr) {
        c =
            46094, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("shopwittmore.com")) try {
        c = 44752, a = $j(".product-info .price").text().split("$")[1].split(" ")[0].replace(",", "").trim(), b = "WITTMORE", d = e = $j(".product-info h1").text().trim()
    } catch (Nr) {
        c = 44752, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("us.caudalie.com")) try {
        c = 45883, a = $j(".price-box .price").text().split("$")[1].split(" ")[0].replace(",", "").trim(), b = "CAUDALIE", d = e = $j(".product-name h1").text().trim()
    } catch (Or) {
        c = 45883, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.design55online.co.uk")) try {
        c =
            46351, a = $j(".product-shop .price-box .price").last().text().split("\u00a3")[1].split(" ")[0].replace(",", "").trim(), b = "DESIGN55", d = e = $j(".product-title h1").text().trim()
    } catch (Pr) {
        c = 46351, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("oneloveorganics.com")) try {
        c = 45844, a = $j(".details .addtocart .price").text().split("$")[1].replace(",", "").trim(), b = "ONE LOVE ORGANICS", d = e = $j(".productdetails .details .name").text().trim()
    } catch (Qr) {
        c = 45844, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.dolcevita.com")) try {
        c = 45733,
        a = $j("#UnitCostSpan").text().split("$")[1].replace(",", "").trim(), b = "DOLCE VITA", d = e = $j(".cart-inner .item-name").text().trim()
    } catch (Rr) {
        c = 45733, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.splendid.com")) try {
        c = 2181, a = $j(".productProperties #UnitCostSpan").text().split("$")[1].replace(",", "").trim(), b = "SPLENDID", e = $j(".order-info div h1").text().trim(), d = $j("#ContentPlaceHolder1_MFGSKUL").text().trim()
    } catch (Sr) {
        c = 2181, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.allforcolor.com")) try {
        c = 45781, a = $j("#price_button_message .itemprice").text().split("$")[1].replace(",",
            "").trim(), b = "ALL FOR COLOR", e = $j("#itemtd h1").text().trim(), d = $j(".olbox p strong").first().text().trim()
    } catch (Tr) {
        c = 45781, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.thechimpstore.com")) try {
        c = 45335, a = $j(".product-view-text-container .price s").length ? $j(".product-view-text-container .price").text().split("\u00a3")[2].replace(",", "").trim() : $j(".product-view-text-container .price").text().split("\u00a3")[1].replace(",", "").trim(), b = "CHIMP", d = e = $j(".product-view-text-container h2").text().trim()
    } catch (Ur) {
        c =
            45335, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.ellamoss.com")) try {
        c = 2171, a = $j("#UnitCostSpan").text().split("$")[1].replace(",", "").trim(), b = "ELLA MOSS", e = $j(".productDetailPad h1").text().trim(), d = $j(".skuCode").text().split(":")[1].trim()
    } catch (Vr) {
        c = 2171, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.vintagehavana.com")) try {
        c = 45673, a = $j(".backforwardbuttons .price").clone().children().remove().end().text().split("$")[1].replace(",", "").trim(), b = "VINTAGE HAVANA", e = $j(".backforwardbuttons h2").text().trim(),
        d = $j(".backforwardbuttons h3").text().split(":")[1].trim()
    } catch (Wr) {
        c = 45673, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.classichostess.com")) try {
        c = 49850, a = $j(".prod-detail-cost .prod-detail-cost-value").text().split("$")[1].replace(",", "").trim(), b = "CLASSIC HOSTESS", e = $j("#product-detail-div h1").text().trim(), d = $j(".prod-detail-part-value").text().trim()
    } catch (Xr) {
        c = 49850, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.jared.com")) try {
        c = 44236, a = $j(".prices-box .price").text().split("$")[1].replace(",", "").trim(),
        b = "JARED", e = $j(".pip-info .product-name").text().trim(), d = $j(".stock-number").text().split(":")[1].trim()
    } catch (Yr) {
        c = 44236, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.spanx.com")) try {
        c = 45215, a = $j(".ws-sale-price").text().split("$")[1].replace(",", "").trim(), b = "SPANX", e = $j("h1.ws-product-title").text().trim(), d = $j(".ws-product-attribute .ws-product-attribute-value").text().split(":")[1].trim()
    } catch (Zr) {
        c = 45215, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("shop.fruit.com")) try {
        c = 45727, a = $j('.attributeList dd[itemprop="lowPrice"]').text().split("$")[1].replace(",",
            "").replace("-", "").trim(), b = "FRUIT OF THE LOOM", e = $j('#productTitle span[itemprop="name"]').text().trim(), d = $j(".attributeList .itemNo").text().trim()
    } catch ($r) {
        c = 45727, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.muubaa.com")) try {
        c = 44417, $("#link_currency_GBP").hasClass("active") ? (g = "", a = $j("#add_to_basket_form .GBP").first().text().split("\u00a3")[1].replace(",", "").trim()) : $("#link_currency_USD").hasClass("active") ? (a = $j("#add_to_basket_form .USD").first().text().split("$")[1].replace(",", "").trim(),
            g = "$") : $("#link_currency_EUR").hasClass("active") && (a = $j("#add_to_basket_form .EUR").first().text().split("\u20ac")[0].replace(",", "").trim(), g = "\u20ac"), b = "MUUBAA", d = e = $j("#product_title").text().trim()
    } catch (as) {
        c = 44417, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.joules.com")) try {
        c = 4797, a = $j('span[itemprop="price"]').text().split("\u00a3")[1].replace(",", "").trim(), b = "JOULES", e = $j('h1[itemprop="name"]').text().trim(), d = $j('.product-base-details p[itemprop="name"]').text().split(":")[1].trim()
    } catch (bs) {
        c =
            4797, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.joyus.com")) try {
        c = 45179, a = $j(".prod-cart-form #sale-price").text().split("$")[1].replace(",", "").trim(), b = "JOYUS", d = e = $j(".prod-header").text().trim()
    } catch (cs) {
        c = 45179, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.thompsonlondon.com")) try {
        c = 45179, a = $j(".prodPrice h4").clone().children().remove().end().text().split("$")[1].replace(",", "").trim(), b = "THOMPSON LONDON", e = $j("#details .general h2").text().trim(), d = $j(".prodCode").text().replace("(", "").replace(")",
            "").trim()
    } catch (ds) {
        c = 45179, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.kooba.com")) try {
        c = 45221, a = $j(".price-box .price").last().text().split("$")[1].replace(",", "").trim(), b = "KOOBA", e = $j(".product-name h1").text().trim(), d = $j(".product-sku").text().split(":")[1].trim()
    } catch (es) {
        c = 45221, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.dooney.com")) try {
        c = 48953, a = $j("#dbprice font").length ? $j("#dbprice").last().text().split("$")[2].replace(",", "").trim() : $j("#dbprice").last().text().split("$")[1].replace(",",
            "").trim(), b = "DOONEY AND BOURKE", e = $j(".dbiStyleName").text().trim(), d = $j("#dbstyle").text().trim()
    } catch (fs) {
        c = 48953, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.mih-jeans.com")) try {
        c = 45578, g = "\u00a3", a = $j(".product-desc .price-box .price").last().text().split("\u00a3")[1].replace(",", "").trim(), b = "MiH JEANS", d = e = $j(".product-desc .product-name").text().trim()
    } catch (gs) {
        c = 45578, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("us.mih-jeans.com")) try {
        c = 45578, g = "$", a = $j(".product-desc .price-box .price").last().text().split("$")[1].replace(",",
            "").trim(), b = "MiH JEANS", d = e = $j(".product-desc .product-name").text().trim()
    } catch (hs) {
        c = 45578, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.oscarblandi.com")) try {
        c = 44176, a = $j(".prod_det_bg2 form label:nth-child(3)").text().split("$")[1].replace(",", "").trim(), b = "OSCAR BLANDI", d = e = $j(".font30-yellow strong").text().trim()
    } catch (is) {
        c = 44176, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("shop.lacoste.com")) try {
        c = 45277, a = $j("#rightColumn .priceBlock dd").last().text().split("$")[1].replace(",", "").trim(), b = "LACOSTE",
        e = $j("#rightColumn .productTitle").text().trim(), d = $j(".itemNo").text().trim()
    } catch (js) {
        c = 45277, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.pinkice.com")) try {
        c = 44959, a = $j("#form1 .font_c1").last().text().split("$")[1].replace(",", "").trim(), b = "LACOSTE", d = e = $j("#form1 .b").text().trim()
    } catch (ks) {
        c = 44959, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.tateossian.com")) try {
        g = "$", c = 45170, a = $j("#details .prodPrice h4").clone().children().remove().end().text().split("$")[1].replace(",", "").trim(), b = "TATEOSSIAN LONDON",
        e = $j("#details .general h2").text().trim(), d = $j("small.prodCode").text().split("(")[1].replace(")", "").trim()
    } catch (ls) {
        c = 45170, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.bodieandfou.com")) try {
        c = 5970, s = $j("#currency option:selected").text(), "GBP" === s ? (g = "\u00a3", a = $j(".priceBlock .price").text().split("\u00a3")[1].replace(",", "").trim()) : "USD" === s ? (g = "$", a = $j(".priceBlock .price").text().split("$")[1].replace(",", "").trim()) : "EUR" === s && (g = "\u20ac", a = $j(".priceBlock .price").text().split("\u20ac")[1].replace(",",
            "").trim()), b = "BODIE AND FOU", d = e = $j("h1#product_name").text().trim()
    } catch (ms) {
        c = 5970, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.stetson.com")) try {
        c = 44794, a = $j(".productinfo #price").clone().children().remove().end().text().split("$")[1].replace(",", "").trim(), b = "STETSON", e = $j(".productinfo h1").text().trim(), d = $j(".productinfo .stylenum").text().split(":")[1].trim()
    } catch (ns) {
        c = 44794, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.eyesave.com")) try {
        c = 45212, a = $j("#dgSkus .c_price").first().text().split("$")[1].replace(",",
            "").trim(), b = "EYE SAVE", d = e = $j("#lblstylename").text().trim()
    } catch (os) {
        c = 45212, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.redbubble.com")) try {
        c = 44876, a = $j('meta[itemprop="price"]').attr("content").replace(",", "").trim(), b = "REDBUBBLE", d = e = $j('span[itemprop="name"]').text().trim()
    } catch (ps) {
        c = 44876, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.penhaligons.com")) try {
        c = 44366, a = $j("#priceFrm").text().split("\u00a3")[1].replace(",", "").trim(), b = "PENHALIGONS", d = e = $j(".cont-proddetail h1").text().trim()
    } catch (qs) {
        c =
            44366, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.finishline.com")) try {
        c = 3892, a = $j('span[itemprop="price"]').text().split("$")[1].replace(",", "").trim(), b = "FINISH LINE", e = $j("#title").text().trim(), d = $j("#styleColor").text().trim()
    } catch (rs) {
        c = 3892, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.beautybridge.com")) try {
        c = 44840, a = $j(".itemPriceWrapper .itemPrice").text().split("$")[1].replace(",", "").trim(), b = "BEAUTY BRIDGE", e = $j(".h1ItemTitle h1").text().trim(), d = $j(".itemCode").text().split("#")[1].trim()
    } catch (ss) {
        c =
            44840, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.crocs.com")) try {
        c = 45017, a = $j(".saleRedText").length ? $j('h3[itemprop="offers"] span').clone().children().remove().end().first().text().split("$")[1].replace(",", "").trim() : $j('h3[itemprop="offers"]').text().split("$")[1].replace(",", "").trim(), b = "CROCS", d = e = $j("h1#pname").text().trim()
    } catch (ts) {
        c = 45017, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.made.com")) try {
        c = 6210, g = "\u00a3", a = $j(".price-box-product span .price").last().text().split("\u00a3")[1].replace(",",
            "").trim(), b = "MADE", d = e = $j(".qstns h2").first().text().replace("Questions about the", "").trim()
    } catch (us) {
        c = 6210, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.deandeluca.com")) try {
        c = 44507, a = $j("#product-display .inner h1").last().text().split("$")[1].replace(",", "").trim(), b = "DEAN AND DELUCA", e = $j("#product-display .product-description h1").text().trim(), d = $j("#ContentPlaceHolder1_ProductItemDetails strong").text().split("#")[1].trim()
    } catch (vs) {
        c = 44507, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.theorchidboutique.com")) try {
        c =
            44669, a = optionsPrice.productPrice, b = "ORCHID BOUTIQUE", e = $j(".product-view .product-name h1").text().trim(), d = $j(".product-sku").text().split(":")[1].trim()
    } catch (ws) {
        c = 44669, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.dylanscandybar.com")) try {
        c = 44843, a = $j('dl[itemprop="offerDetails"] dd[itemprop="lowPrice"]').text().split("$")[1].replace(",", "").trim(), b = "DYLANS CANDY BAR", e = $j('span[itemprop="name"]').text().trim(), d = $j(".attributeList dd.itemNo").text().trim()
    } catch (xs) {
        c = 44843, d = b = e = "", a = 0
    } else if (-1 !=
        f.indexOf("www.whitestuff.com")) try {
        c = 45176, a = $j("#priceCopy").text().split("\u00a3")[1].replace(",", "").replace("was", "").trim(), b = "WHITE STUFF", e = $j(".productTITLE h1").text().trim(), d = $j(".descHolder .productCODE").text().split(":")[1].trim()
    } catch (ys) {
        c = 45176, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.woodhouseclothing.com")) try {
        c = 46075, a = $j("#salePrice").text().split("\u00a3")[1].replace(",", "").trim(), b = "WOODHOUSE", e = $j("#product_details h1").text().trim(), d = $j("#productRef").text().split(":")[1].trim()
    } catch (zs) {
        c =
            46075, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.swankymaison.com")) try {
        c = 45050, a = $j(".Price cufon cufontext").text().split("\u00a3")[1].replace(",", "").trim(), b = "SWANKY MAISON", d = e = $j(".ProductRight h1").text().trim()
    } catch (As) {
        c = 45050, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.shopvault.com")) try {
        c = 45464, a = $j("#price").text().split("$")[1].replace(",", "").trim(), b = "VAULT", e = $j('h1[itemprop="name"]').text().trim(), d = $j('strong[itemprop="identifier"]').text().trim()
    } catch (Bs) {
        c = 45464, d = b = e = "", a = 0
    } else if (-1 !=
        f.indexOf("uk.tommy.com")) try {
        c = 4700, a = $j(".salesprice").text().split("\u00a3")[1].replace(",", "").trim(), b = "TOMMY HILFIGER", e = $j(".productName h2").text().trim(), d = $j(".productid").text().split(":")[1].trim()
    } catch (Cs) {
        c = 4700, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("fr.tommy.com")) try {
        c = 44584, a = $j(".salesprice").text().split("\u20ac")[0].replace(",", ".").trim(), b = "TOMMY HILFIGER", e = $j(".productName h2").text().trim(), d = $j(".productid").text().split(":")[1].trim()
    } catch (Ds) {
        c = 44584, d = b = e = "", a = 0
    } else if (-1 !=
        f.indexOf("www.cult.co.uk")) try {
        c = 45146, g = "$", a = $j(".price-info .price").text().split("$")[1].replace(",", ".").trim(), b = "CULT", d = e = $j(".product-detail h1 .fn").text().trim()
    } catch (Es) {
        c = 45146, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.vendula.co.uk")) try {
        c = 45164, a = $j("#product_price_sale .GBP").text().split("\u00a3")[1].replace(",", ".").trim(), b = "VENDULA LONDON", d = e = $j("#product_title").text().trim()
    } catch (Fs) {
        c = 45164, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("boutique.best-mountain.com")) try {
        c = 45985, a = $j('meta[itemprop="price"]').attr("content").trim(),
        b = "Best Mountain", d = e = $j("#ajax_product_name").text().trim()
    } catch (Gs) {
        c = 45985, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.josbank.com")) try {
        c = 44849, a = $j("#prodDetails .cost .reg").length ? $j(".cost .price").text().split("CAD")[1].replace(",", "").trim() : $j(".cost .regprice").text().split("CAD")[1].replace(",", "").trim(), b = "JOS A BANK", d = e = $j(".prodName").text().trim()
    } catch (Hs) {
        c = 44849, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("store.ferrari.com")) try {
        c = 4908, a = $j("#product_sell_price .amount").data("value"),
        b = "FERRARI", d = e = $j("#bpc-title h1 strong").text().trim()
    } catch (Is) {
        c = 4908, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.timetospa.co.uk")) try {
        c = 4490, a = $j(".Price").text().split("\u00a3")[1].replace(",", "").trim(), b = "TIME TO SPA", d = e = $j('span[itemprop="name"]').text().trim()
    } catch (Js) {
        c = 4490, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.highandmighty.co.uk")) try {
        c = 45775, a = $j("#productHeading .priceRange").text().split("\u00a3")[1].replace(",", "").trim(), b = "HIGH AND MIGHTY", e = $j("#productHeading h1").text().trim(),
        d = $j("#prodCatNumber").text().trim()
    } catch (Ks) {
        c = 45775, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.cultbeauty.co.uk")) try {
        c = 45584, a = $j('span[itemprop="price"] span').text().split("\u00a3")[1].replace(",", "").trim(), b = "CULT BEAUTY", d = e = $j('h1[itemprop="name"]').clone().children().remove().end().text().trim()
    } catch (Ls) {
        c = 45584, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.knomobags.com")) try {
        c = 45155, a = 0 < $j(".special-price .price").length ? $j(".special-price .price").text().split("\u00a3")[1].replace(",", "").trim() :
            $j(".product-price .price").text().split("\u00a3")[1].replace(",", "").trim(), b = "KNOMO", d = e = $j(".options h1").text().trim()
    } catch (Ms) {
        c = 45155, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("mynetsale.com.au")) try {
        c = 49318, a = $j("#detail_product .box_price .price").text().split("$")[1].replace(",", "").trim(), b = "MYNETSALE", d = e = $j("#detail_product .intitule").text().trim()
    } catch (Ns) {
        c = 49318, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.seekandadore.com")) try {
        c = 45329, a = $j("#ctl00_ctl00_cph1_cph1_ctl00_ctrlProductPrice2_lblPriceValue").text().split("\u00a3")[1].replace(",",
            "").trim(), b = "SEEK AND ADORE", d = e = $j(".product-info-container .productName").text().trim()
    } catch (Os) {
        c = 45329, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.buttershoes.com")) try {
        c = 45664, a = $j(".backforwardbuttons .price").clone().children().remove().end().text().split("$")[1].replace(",", "").trim(), b = "BUTTER", d = e = $j(".backforwardbuttons h2").text().trim()
    } catch (Ps) {
        c = 45664, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.tommyjohnwear.com")) try {
        c = 45764, a = $j(".price .currency-type").text().split("$")[1].replace(",",
            "").trim(), b = "TOMMY JOHN", d = e = $j(".product-header h1").clone().children().remove().end().text().trim()
    } catch (Qs) {
        c = 45764, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.gift-library.com")) try {
        c = 45149, a = $j(".price .list-price").clone().children().remove().end().text().split("\u00a3")[1].replace(",", "").trim(), b = "GIFT LIBRARY", d = e = $j(".primary-info h1").clone().children().remove().end().text().trim()
    } catch (Rs) {
        c = 45149, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("boutique.carnetdevol.com")) try {
        c = 45196, a = $j(".gshpProductPrice").length ?
            $j("#gshpReferencePriceValue").text().split("\u20ac")[0].replace(",", ".").trim() : $j("#gshpReferencePriceValue .gshpDiscountedPrice").text().split("\u20ac")[0].replace(",", ".").trim(), b = "CARNET DE VOL", e = $j(".gshpProductCardInfo h3 span").text().trim(), d = $j(".gshpProductCardReference").text().split(".")[1].trim()
    } catch (Ss) {
        c = 45196, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.mona-mode.nl")) try {
        c = 45241, a = $j(".fl .currentPrice").first().text().split("\u20ac")[1].replace(",", ".").trim(), b = "MONA MODE", d = e =
            $j("#jsProductTitle").text().trim()
    } catch (Ts) {
        c = 45241, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("fr.monsoon.co.uk")) try {
        c = 43912, a = $j("#now_price").hasClass("pink") ? $j("#now_price").first().text().split("\u20ac")[0].split(":")[1].replace(",", ".").trim() : $j("#now_price").first().text().split("\u20ac")[0].replace(",", ".").trim(), b = "MONSOON", e = $j(".productDetail_name_and_description h1").text().trim(), d = $j(".productCode").text().trim()
    } catch (Us) {
        c = 43912, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("de.monsoon.co.uk")) try {
        c =
            43944, a = $j("#now_price").hasClass("pink") ? $j("#now_price").first().text().split("\u20ac")[0].split(":")[1].replace(",", ".").trim() : $j("#now_price").first().text().split("\u20ac")[0].replace(",", ".").trim(), b = "MONSOON", e = $j(".productDetail_name_and_description h1").text().trim(), d = $j(".productCode").text().trim()
    } catch (Vs) {
        c = 43944, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.timberlandonline.co.uk")) try {
        c = 46550, a = $j("#product-content .price-sales").first().text().split("\u00a3")[1].replace(",", ".").trim(),
        b = "TIMBERLAND", e = $j('h1[itemprop="name"]').text().trim(), d = $j('span[itemprop="productID"]').text().trim()
    } catch (Ws) {
        c = 46550, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.designersguild.com")) try {
        c = 44213, a = $j("#product-content .price-sales").first().text().split("\u00a3")[1].replace(",", ".").trim(), b = "DESIGNERS GUILD", e = $j('h1[itemprop="name"]').text().trim(), d = $j('span[itemprop="productID"]').text().trim()
    } catch (Xs) {
        c = 44213, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.kissafrog.de")) try {
        c = 45247, a = $j(".lb_price_detail .lb_price_detail").first().text().split("\u20ac")[1].replace(",",
            ".").trim(), b = "KISS A FROG", e = $j(".lb_left h2").text().trim(), d = $j("#ctl30_ctl00_ctl00_lblKHKItemId").text().trim()
    } catch (Ys) {
        c = 45247, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.mexx.de")) try {
        c = 6247, a = $j(".priceProduct .price").text().split("\u00a3")[1].replace(",", ".").trim(), b = "MEXX", d = e = $j(".productInformationCaption h1").text().trim()
    } catch (Zs) {
        c = 6247, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.greatplains.co.uk")) try {
        c = 45140, a = $j("#product_price").text().split("\u00a3")[1].replace(",", ".").trim(), b =
            "GREAT PLAINS", d = e = $j("h1#product_title").text().trim()
    } catch ($s) {
        c = 45140, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.izabel.com")) try {
        c = 45158, a = $j("#price").text().split("\u00a3")[1].replace(",", ".").trim(), b = "IZABEL LONDON", d = e = $j('h1[itemprop="name"]').text().trim()
    } catch (at) {
        c = 45158, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.goeiemode.nl")) try {
        c = 44632, a = $j("#productInfo div").last().text().split("\u20ac")[1].replace(",", ".").trim(), b = "GOEIEMODE", d = e = $j("h1.name").text().trim()
    } catch (bt) {
        c = 44632, d = b =
            e = "", a = 0
    } else if (-1 != f.indexOf("www.yaminta.nl")) try {
        c = 45268, a = $j(".price ins").text().split("\u20ac")[1].replace(",", ".").trim(), b = "YAMINTA", d = e = $j("h1.head").text().trim()
    } catch (ct) {
        c = 45268, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.yaminta.be")) try {
        c = 45379, a = $j(".price ins").text().split("\u20ac")[1].replace(",", ".").trim(), b = "YAMINTA", d = e = $j("h1.head").text().trim()
    } catch (dt) {
        c = 45379, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.wearelabels.com")) try {
        c = 44635, "nl" === $j("html").attr("lang") && (a = $j(".price-box span").last().text().split("\u20ac")[1].replace(",",
            ".").trim()), b = "WE ARE LABELS", d = e = $j("h1.product").text().trim()
    } catch (et) {
        c = 44635, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.vinicioboutique.com")) try {
        c = 47296, "it" === $j("html").attr("xml:lang") && (a = $j("#buy_block div:nth-child(1)").clone().children().remove().end().text().replace("\u20ac", "").replace(",", ".").replace(" ", "").trim()), b = "VINICIO", d = e = $j("#buy_block h5").text().trim()
    } catch (ft) {
        c = 47296, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.julep.com")) try {
        c = 49418, a = $j(".product-main-info .regular-price").hasClass("has-special-price") ?
            $j(".product-main-info p.special-price .price").text().split("$")[1].replace(",", "").trim() : $j(".product-main-info p.regular-price .price").text().split("$")[1].replace(",", "").trim(), b = "JULEP BEAUTY INC", d = e = $j(".product-name h1").text().trim()
    } catch (gt) {
        c = 49418, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.bumbleandbumble.com")) try {
        c = 49943, a = $j("#price-span").text().split("$")[1].replace(",", "").trim(), b = "BUMBLE AND BUMBLE", d = e = $j('meta[property="og:title"]').attr("content")
    } catch (ht) {
        c = 49943, d = b = e = "",
        a = 0
    } else if (-1 != f.indexOf("tortoiseandblonde.com")) try {
        c = 49877, a = $j("#productprice cufon cufontext").text().split("$")[1].replace(",", "").trim(), b = "BUMBLE AND BUMBLE", d = e = $j("#product-details-page cufon cufontext").first().text().trim()
    } catch (it) {
        c = 49877, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.thebodyshop.co.uk")) try {
        c = 6050, a = $j("#priceOld").text().split("\u00a3")[1].replace(",", "").trim(), b = "THE BODY SHOP", d = e = $j("h1.title").first().text().trim()
    } catch (jt) {
        c = 6050, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.anthropologie.eu")) try {
        c =
            4478, a = $j('span[itemprop="price"]').text().split("\u00a3")[1].replace(",", "").trim(), b = "ANTHROPOLOGIE", d = e = $j('h1[itemprop="name"]').text().trim()
    } catch (kt) {
        c = 4478, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.beautyencounter.com")) try {
        c = 48830, a = $j(".infoProduct #pd_main_pricetext .price-main").text().split("$")[1].replace(",", "").trim(), b = "BEAUTY COUNTER", d = e = $j(".infoProduct .titleProduct").text().trim()
    } catch (lt) {
        c = 48830, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.toryburch.co.uk")) try {
        c = 49621, a = $j('div[itemprop="offers"] .price div').text().split("\u00a3")[1].replace(",",
            "").trim(), b = "BEAUTY COUNTER", e = $j("h1.productname").text().trim(), d = $j(".styleNum span").text().trim()
    } catch (mt) {
        c = 49621, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("eu.triumph.com")) try {
        "fi" === $j("meta[http-equiv=content-language]").attr("content") ? (c = 45235, a = 0 < $j(".variantDetails .salesprice").length ? $j(".variantDetails .salesprice").text().split("\u20ac")[1].replace(",", ".").trim() : $j(".variantDetails .standardoneprice").text().split("\u20ac")[1].replace(",", ".").trim()) : "sv" === $j("meta[http-equiv=content-language]").attr("content") ?
            (c = 44608, a = 0 < $j(".variantDetails .salesprice").length ? $j(".variantDetails .salesprice").text().split("SEK")[1].replace(".", "").trim() : $j(".variantDetails .standardoneprice").text().split("SEK")[1].replace(".", "").trim()) : "da" === $j("meta[http-equiv=content-language]").attr("content") && (c = 46327, g = "\u20ac", a = 0 === $j(".variantContent .variantDetails .standardoneprice").length ? $j(".variantDetails .productinfo .pricing .price .salesprice").text().split("\u20ac")[1].replace(".", "").replace(",", ".").trim() :
            $j(".variantContent .variantDetails .standardoneprice").text().split("\u20ac")[1].replace(".", "").replace(",", ".").trim()), b = $j(".variantDetails h1.productname").first().text().trim(), e = $j(".prd1 .producttype h2").first().text().trim(), d = $j(".itemNo").text().trim()
    } catch (nt) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.thelittlegreenbag.nl")) try {
        c = 44623, a = $j("#prijs").text().split("\u20ac")[1].replace(",", ".").trim(), b = "THE LITTLE GREEN BAG", e = $j("#model h1").text().trim(), d = $j("p.tasdetails").text().split(":")[1].trim()
    } catch (ot) {
        c =
            44623, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.superdry.com")) try {
        j = $j(".country_flags .ddTitle.borderRadiusTp .ddTitleText .ddlabel").text().trim(), "USA" == j ? (c = 50589, g = "$", a = $j(".price-info .price").text().split("$")[1].replace(",", "").trim()) : "English" == j && (c = 4608, g = "$", a = $j(".price-info .price").text().split("$")[1].replace(",", ".").trim()), b = "SUPERDRY", d = e = $j('span[itemprop="name"]').text().trim()
    } catch (pt) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.stanwells.com")) try {
        c = 44672, "GBP" === $j(".currency-wrapper span").first().text().trim() ?
            (g = "\u00a3", a = $j(".product-options-bottom .price-box .price").last().text().split("\u00a3")[1].replace(",", "").trim()) : "EUR" === $j(".currency-wrapper span").first().text().trim() ? (g = "\u20ac", a = $j(".product-options-bottom .price-box .price").last().text().split("\u20ac")[1].replace(",", "").trim()) : "USD" === $j(".currency-wrapper span").first().text().trim() && (g = "$", a = $j(".product-options-bottom .price-box .price").last().text().split("$")[1].replace(",", "").trim()), b = "STANWELLS", d = e = $j(".product-name a h2").text().trim()
    } catch (qt) {
        c =
            44672, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.splashdirect.com")) try {
        c = 45191, a = $j(".product-page-info .price").last().text().split("\u00a3")[1].replace(",", "").trim(), b = "SPLASHDIRECT", e = $j("#product_addtocart_form h1").text().trim(), d = $j(".product-page-info p").first().clone().children().remove().end().text().split(":")[1].trim()
    } catch (rt) {
        c = 45191, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.sojeans.it")) try {
        c = 45191, a = $j(".sk-productInfos .price").clone().children().remove().end().text().split("\u20ac")[0].replace(",",
            ".").trim(), b = "SO JEANS", e = $j(".sk-productInfos h2").first().text().trim(), d = $j(".details span").text().split(":")[1].trim()
    } catch (st) {
        c = 45191, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.sojeans.fr")) try {
        c = 45688, a = $j(".sk-productInfos .price").clone().children().remove().end().text().split("\u20ac")[0].replace(",", ".").trim(), b = "SO JEANS", e = $j(".sk-productInfos h2").first().text().trim(), d = $j(".details span").text().split(":")[1].trim()
    } catch (tt) {
        c = 45688, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.smythson.com")) try {
        c =
            45062, g = "\u00a3", a = $j('span[itemprop="price"] .price').text().split("\u00a3")[1].replace(",", "").trim(), b = "SMYTHSON", d = e = $j('span[itemprop="name"]').first().text().trim()
    } catch (ut) {
        c = 45062, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.opumo.com")) try {
        c = 45341, g = "\u00a3", a = $j(".price-including-tax span").last().text().split("\u00a3")[1].replace(",", "").trim(), b = "OPUMO", d = e = $j(".short-description").first().text().trim()
    } catch (vt) {
        c = 45341, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.newone-shop.com")) try {
        c = 45403,
        g = "\u20ac", a = $j(".details-col .price").last().text().split("\u20ac")[1].replace(",", ".").trim(), b = "NEWONE SHOP", d = e = $j("#test_product_shortdesc").first().text().trim()
    } catch (wt) {
        c = 45403, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.luxedesignerhandbags.com")) try {
        c = 48839, g = "$", a = $j("form.cf p.price").text().split("$")[1].replace(",", "").trim(), b = "LUXE DH", d = e = $j("div.my-sticky-element h1").clone().children().remove().end().first().text().trim()
    } catch (xt) {
        c = 48839, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.lookfantastic.com")) try {
        c =
            6074, "GBP" === siteObj.currencyType ? (g = "\u00a3", a = $j('span[itemprop="price"]').text().split("\u00a3")[1].replace(",", "").trim()) : "EUR" === siteObj.currencyType && (g = "\u20ac", a = $j('span[itemprop="price"]').text().split("\u20ac")[1].replace(",", "").trim()), b = "LOOK FANTASTIC", d = e = $j('span[itemprop="name"]').text().trim()
    } catch (yt) {
        c = 6074, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.leurinkmode.nl")) try {
        c = 44638, g = "\u20ac", a = $j(".maattabel .prijs span").last().text().split("\u20ac")[1].replace(",", ".").trim(), b =
            "LEURINK MODE", d = e = $j(".row1 h2").text().trim()
    } catch (zt) {
        c = 44638, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.jeroenbeekman.nl")) try {
        c = 44629, g = "\u20ac", a = $j("#artikel_prijs").clone().children().remove().end().text().split("\u20ac")[1].replace(",", "").trim(), b = "JEROEN BEEKMAN MODE", d = e = $j(".artikel_omschrijving h1").clone().children().remove().end().text().replace("|", "").trim()
    } catch (At) {
        c = 44629, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.gutemode.de")) try {
        c = 45232, g = "\u20ac", a = $j("#productInfo .price").text().split("\u20ac")[1].replace(",",
            ".").trim(), b = "GUREMODE", d = e = $j("h1.name").text().trim()
    } catch (Bt) {
        c = 45232, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.monicavinader.com")) try {
        "$" === $j(".currency.active").text().trim() ? (c = 50594, g = "$", a = $j(".details .price strong").text().split("$")[1].replace(",", ".").trim()) : "\u00a3" === $j(".currency.active").text().trim() && (c = 46739, g = "\u00a3", a = $j(".details .price strong").text().split("\u00a3")[1].replace(",", ".").trim()), b = "MONICA VINADER", d = e = $j(".details h1").text().trim()
    } catch (Ct) {
        d = b = e = "", a =
            0
    } else if (-1 != f.indexOf("www.jeansonline.com")) try {
        c = 44626, g = "\u20ac", a = $j('div[itemprop="offers"] span').last().text().split("\u20ac")[1].replace(",", ".").trim(), b = "JEANSONLINE", d = e = $j('span[itemprop="name"]').first().text().trim()
    } catch (Dt) {
        c = 44626, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.zooshoo.com")) try {
        c = 6320, a = $j('span[itemprop="price"]').text().split("$")[1].replace(",", "").trim(), b = "ZOOSHOO", d = e = $j('span[itemprop="name"]').text().trim()
    } catch (Et) {
        c = 6320, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.jades24.com")) try {
        c =
            5878, a = $j("div.price span").first().text().split("\u20ac")[0].replace(".", "").replace(",", ".").trim(), b = "JADES24", d = e = $j("#product_name h1").text().trim()
    } catch (Ft) {
        c = 5878, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.jacava.com")) try {
        c = 44702, a = $j(".price-box span").last().text().split("\u00a3")[1].replace(",", ".").trim(), b = "JACAVA", d = e = $j(".product_name h1").text().trim()
    } catch (Gt) {
        c = 44702, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.jacava.com")) try {
        c = 44702, a = $j(".price-box span").last().text().split("\u00a3")[1].replace(",",
            ".").trim(), b = "JACAVA", d = e = $j(".product_name h1").text().trim()
    } catch (Ht) {
        c = 44702, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.gasjeans.com")) try {
        "France" === $j("#select-country").text().split(":")[1].trim() ? (c = 45691, a = $j(".product-shop .price-box span").first().text().split("\u20ac")[1].replace(",", "").trim()) : "Germany" === $j("#select-country").text().split(":")[1].trim() ? (c = 45694, a = $j(".product-shop .price-box span").first().text().split("\u20ac")[1].replace(",", "").trim()) : "Spain" === $j("#select-country").text().split(":")[1].trim() &&
            (c = 45697, a = $j(".product-shop .price-box span").first().text().split("\u20ac")[1].replace(",", "").trim()), b = "GAS", d = e = $j(".product-name h1").text().trim()
    } catch (It) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.bullsandbirds.com")) try {
        g = "\u20ac", c = 45952, a = optionsPrice.productPrice, b = "BULLS AND BIRDS", d = e = $j('h2[itemprop="name"]').text().trim()
    } catch (Jt) {
        c = 45952, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.bonsoirdirect.com")) try {
        c = 45161, a = $j('span[itemprop="price"]').first().text().split("\u00a3")[1].trim(),
        b = "BONSOIR", e = $j('b[itemprop="name"]').text().trim(), d = $j('div[itemprop="model"]').text().split(":")[1].trim()
    } catch (Kt) {
        c = 45161, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.additionelle.com")) try {
        c = 44184, a = $j(".swatchprice").first().text().split("$")[1].trim(), b = "ADDITION ELLE", d = e = $j("h1.productname").text().trim()
    } catch (Lt) {
        c = 44184, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.penningtons.com")) try {
        c = 44184, a = $j(".pricing .price").last().text().split("$")[1].trim(), b = "PENNINGTONS", d = e = $j("h1.productname").text().trim()
    } catch (Mt) {
        c =
            44184, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.abiferrin.com")) try {
        c = 48922, a = $j("#price-preview").clone().children().remove().end().text().split("$")[1].trim(), b = "ABI FERRIN", d = e = $j("h1.title").text().trim()
    } catch (Nt) {
        c = 48922, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.designdarling.com")) try {
        c = 49964, a = $j("#price span").text().split("$")[1].trim(), b = "DESIGN DARLING", d = e = $j("#details h2").first().text().trim()
    } catch (Ot) {
        c = 49964, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("shop.lego.com")) try {
        c = 44819, a = $j(".product-price em").text().split("$")[1].trim(),
        b = "LEGO", d = e = $j('span[itemprop="name"]').first().text().trim()
    } catch (Pt) {
        c = 44819, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("linensource.blair.com")) try {
        c = 44171, a = $j(".price-wrap span").first().text().split("$")[1].replace("-", "").trim(), b = "LINENSOURCE", d = e = $j(".description-container .item-name").first().text().trim()
    } catch (Qt) {
        c = 44171, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.silkn.com")) try {
        c = 1371, a = $j(".productDetail span.regular-price .price").text().split("$")[1].trim(), b = "SILK N", d = e = $j(".productDescHeader h2").first().text().trim()
    } catch (Rt) {
        c =
            1371, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.c-and-a.com")) try {
        c = 45250, "at" === caConfig.COUNTRY && (a = 0 < $j(".price .sale").length ? $j(".price .sale").text().split("\u20ac")[0].replace(",", ".").trim() : $j(".price .regular").text().split("\u20ac")[0].replace(",", ".").trim()), b = "C AND A", d = e = $j("p.name").first().text().trim()
    } catch (St) {
        c = 45250, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("bamba.se")) try {
        c = 45767, g = "kr", a = $j(".main-price").text().split("kr")[0].trim(), b = "BAMBA", d = e = $j("h1.productname").first().text().trim()
    } catch (Tt) {
        c =
            45767, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.biotherm.ca")) try {
        c = 43961, a = $j(".product-price .price-sales").text().split("C$")[1].trim(), b = "BIOTHERM", d = e = $j('h1[itemprop="name"]').first().text().trim()
    } catch (Ut) {
        c = 43961, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.blacklabelboutique.com")) try {
        c = 44232, a = $j("#information #pricing span").first().text().split("$")[1].trim(), b = "BLACK LABEL BOUTIQUE", d = e = $j("#content h1").clone().children().remove().end().first().text().trim()
    } catch (Vt) {
        c = 44232, d = b = e = "", a = 0
    } else if (-1 !=
        f.indexOf("www.brandos.dk")) try {
        c = 5894, a = TDConf.Config.price.replace(",", "."), b = "BRANDOS", e = TDConf.Config.productName, d = TDConf.Config.productId
    } catch (Wt) {
        c = 5894, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.brandos.fi")) try {
        c = 47272, a = 0 < $j(".pink").length ? $j('form[name="pick"] p.pink').text().trim().replace(",", ".").split(" ")[0] : $j('form[name="pick"] p.darkgrey').text().trim().replace(",", ".").split(" ")[0], b = "BRANDOS", d = e = $j("h1.article-box").text().trim()
    } catch (Xt) {
        c = 47272, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.brandos.no")) try {
        c =
            5974, a = 0 < $j(".pink").length ? $j('form[name="pick"] p.pink').text().trim().replace(",", ".").split("kr")[0].replace(" ", "").trim() : $j('form[name="pick"] p.darkgrey').text().trim().replace(",", ".").split("kr")[0].replace(" ", "").trim(), b = "BRANDOS", d = e = $j("h1.article-box").text().trim()
    } catch (Yt) {
        c = 5974, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.brandos.se")) try {
        c = 5931, a = TDConf.Config.price.replace(",", ".").replace(/[^0-9\.\,]/g, ""), b = "BRANDOS", e = TDConf.Config.productName, d = TDConf.Config.productId
    } catch (Zt) {
        c =
            5931, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("onepiece.com")) try {
        if ("lc lc-front au" == $j("li a span:eq(2)").attr("class")) c = 49954;
        else if ("lc lc-front us" == $j("li a span:eq(2)").attr("class") || "lc lc-front cn" == $j("li a span:eq(2)").attr("class") || "lc lc-front it" == $j("li a span:eq(2)").attr("class") || "lc lc-front de" == $j("li a span:eq(2)").attr("class") || "lc lc-front es" == $j("li a span:eq(2)").attr("class") || "lc lc-front jp" == $j("li a span:eq(2)").attr("class") || "lc lc-front ru" == $j("li a span:eq(2)").attr("class") ||
            "lc lc-front dk" == $j("li a span:eq(2)").attr("class") || "lc lc-front be" == $j("li a span:eq(2)").attr("class") || "lc lc-front ie" == $j("li a span:eq(2)").attr("class") || "lc lc-front pl" == $j("li a span:eq(2)").attr("class") || "lc lc-front pt" == $j("li a span:eq(2)").attr("class") || "lc lc-front in" == $j("li a span:eq(2)").attr("class") || "lc lc-front nz" == $j("li a span:eq(2)").attr("class") || "lc lc-front id" == $j("li a span:eq(2)").attr("class") || "lc lc-front il" == $j("li a span:eq(2)").attr("class")) c = 52746;
        g = $j("#buy-price .curr-symbol").text();
        a = $j(".large-8.columns #buy-price .curr-amount").first().text().trim();
        b = "One Piece";
        d = e = $j(".row .large-6.columns.product-info h1").first().text().trim()
    } catch ($t) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("onepiece.co.uk")) try {
        c = 52746, g = $j("#buy-price .curr-symbol").text(), a = $j(".large-8.columns #buy-price .curr-amount").first().text().trim(), b = "One Piece", d = e = $j(".row .large-6.columns.product-info h1").first().text().trim()
    } catch (au) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("onepiece.fr")) try {
        c =
            52746, g = $j("#buy-price .curr-symbol").text(), a = $j(".large-8.columns #buy-price .curr-amount").first().text().trim(), b = "One Piece", d = e = $j(".row .large-6.columns.product-info h1").first().text().trim()
    } catch (bu) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("onepiece.fi")) try {
        c = 52746, g = $j("#buy-price .curr-symbol").text(), a = $j(".large-8.columns #buy-price .curr-amount").first().text().trim(), b = "One Piece", d = e = $j(".row .large-6.columns.product-info h1").first().text().trim()
    } catch (cu) {
        d = b = e = "", a = 0
    } else if (-1 !=
        f.indexOf("onepiece.gr")) try {
        c = 52746, g = $j("#buy-price .curr-symbol").text(), a = $j(".large-8.columns #buy-price .curr-amount").first().text().trim(), b = "One Piece", d = e = $j(".row .large-6.columns.product-info h1").first().text().trim()
    } catch (du) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("onepiece.se")) try {
        c = 52746, g = $j("#buy-price .curr-symbol").text(), a = $j(".large-8.columns #buy-price .curr-amount").first().text().trim(), b = "One Piece", d = e = $j(".row .large-6.columns.product-info h1").first().text().trim()
    } catch (eu) {
        d =
            b = e = "", a = 0
    } else if (-1 != f.indexOf("onepiece.ca")) try {
        c = 52746, g = $j("#buy-price .curr-symbol").text(), a = $j(".large-8.columns #buy-price .curr-amount").first().text().trim(), b = "One Piece", d = e = $j(".row .large-6.columns.product-info h1").first().text().trim()
    } catch (fu) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("onepiece.ch")) try {
        c = 52746, g = $j("#buy-price .curr-symbol").text(), a = $j(".large-8.columns #buy-price .curr-amount").first().text().trim(), b = "One Piece", d = e = $j(".row .large-6.columns.product-info h1").first().text().trim()
    } catch (gu) {
        d =
            b = e = "", a = 0
    } else if (-1 != f.indexOf("onepiece.no")) try {
        c = 52746, g = $j("#buy-price .curr-symbol").text(), a = $j(".large-8.columns #buy-price .curr-amount").first().text().trim(), b = "One Piece", d = e = $j(".row .large-6.columns.product-info h1").first().text().trim()
    } catch (hu) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.julievos.com")) try {
        c = 50585, a = $j(".six.columns.omega .current_price").first().text().split("$")[1].trim(), b = "julie vos", d = e = $j(".six.columns.omega .product_name").first().text().trim()
    } catch (iu) {
        c = 50585,
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.riiviva.com")) try {
        c = 49976, a = $j(".inner-item-info .item-name .subtitle").first().text().split("$")[1].trim(), b = "Riiviva", d = e = $j(".inner-item-info .item-name h1").first().text().trim()
    } catch (ju) {
        c = 49976, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("emilymaynard.com")) try {
        c = 49967, a = $j(".col.half.prod-right .price").first().text().split("$")[1].trim(), b = "Emily", d = e = $j(".product-name.clear h2").first().text().trim()
    } catch (ku) {
        c = 49967, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.milkandhoneyboutique.com")) try {
        c =
            50633, a = $j("#product-description #product-price .money").first().text().split("$")[1].trim(), b = "Milk and Honey Boutique", d = e = $j("#product-description h1").clone().children().remove().end().text().trim()
    } catch (lu) {
        c = 50633, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.dormify.com")) try {
        c = 50651, a = $j(".product-main-info .price-box .old-price").text().length ? $j(".product-main-info .price-box .special-price").text().split("$")[1].trim() : $j(".product-main-info .price-box .regular-price").text().split("$")[1].trim(),
        b = "dormify", d = e = $j(".product-main-info .product-name h1").text().trim()
    } catch (mu) {
        c = 50651, e = d = b = "", a = 0
    } else if (-1 != f.indexOf("www.everlane.com")) try {
        c = 50678, a = $j(".prices-window span").first().text().split("$")[1].trim(), b = "EVERLANE", d = e = $j("#product-sidebar hgroup h2").text().trim()
    } catch (nu) {
        c = 50678, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.andrewmarc.com")) try {
        c = 3082, a = $j(".price .old-price .price").length ? $j(".price .special-price .price").text().split("$")[1].trim() : $j(".price .regular-price .price").text().split("$")[1].trim(),
        b = "ANDREW MARC", d = e = $j(".shell .product.clearfix h2").first().text().trim()
    } catch (ou) {
        c = 3082, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.wardow.com")) try {
        "Deutsch" === $j("li.current").text().trim() && (c = 46558, a = $j('.product-shop .price-box span[id*="product-price-"]').first().text().split("\u20ac")[0].replace(",", ".").trim(), b = "WARDOW", d = e = $j(".product-shop .product-name").first().text().trim())
    } catch (pu) {
        c = 46558, d = b = "", a = 0
    } else if (-1 != f.indexOf("yhd.com")) try {
        c = 50729, a = $j("#current_price").text().trim().split("\u00a5")[1],
        b = "YIHAODIAN", e = $j("#productMainName").text().trim(), d = $j("#productCode").text().trim(), g = "\u00a5"
    } catch (qu) {
        c = 50729, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("lefeng.com")) try {
        c = 50726, a = $j("#uprice").val().trim(), b = "LEFENG", e = $j("div.info-right span.pname").text().trim(), d = $j("div.main p.path span.fr").text().split("\uff1a")[1].trim(), g = "\u00a5"
    } catch (ru) {
        c = 50726, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.theukedit.com")) try {
        c = 46522, a = $j('span[itemprop="price"]').text().split("\u00a3")[1].replace(",", "").trim(),
        b = "THE UK EDIT", d = e = $j('span[itemprop="name"]').text().trim()
    } catch (su) {
        c = 46522, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.teacollection.com")) try {
        c = 44143, a = 0 < $(".outfit-item-details .regular-price").length ? $j(".outfit-item-details .regular-price").clone().children().remove().end().text().split("$")[1].replace(",", "").trim() : $j("#store_price").clone().children().remove().end().text().split("$")[1].replace(",", "").trim(), b = "TEA COLLECTION", d = e = $j("#pdp-item-details hgroup h1").text().trim()
    } catch (tu) {
        c =
            44143, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.teacollection.com")) try {
        c = 44143, a = 0 < $(".outfit-item-details .regular-price").length ? $j(".outfit-item-details .regular-price").clone().children().remove().end().text().split("$")[1].replace(",", "").trim() : $j("#store_price").clone().children().remove().end().text().split("$")[1].replace(",", "").trim(), b = "TEA COLLECTION", d = e = $j("#pdp-item-details hgroup h1").text().trim()
    } catch (uu) {
        c = 44143, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.stylepit.se")) try {
        c = 45988, a = zx_amount,
        b = zx_brand, e = zx_fn, d = zx_identifier
    } catch (vu) {
        c = 45988, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.stylepit.fi")) try {
        c = 46561, a = zx_amount, b = zx_brand, e = zx_fn, d = zx_identifier
    } catch (wu) {
        c = 46561, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.stylepit.pl")) try {
        c = 46606, a = zx_amount, b = zx_brand, e = zx_fn, d = zx_identifier
    } catch (xu) {
        c = 46606, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.stylepit.ua")) try {
        c = 46609, a = zx_amount, b = zx_brand, e = zx_fn, d = zx_identifier
    } catch (yu) {
        c = 46609, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.stbernardsports.com")) try {
        c =
            46435, a = spConfig.config.basePrice, b = "ST BERNARD SPORTS", d = e = spConfig.config.productName
    } catch (zu) {
        c = 46435, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.somewhere.fr")) try {
        c = 45940, a = tagContext.Products[0].CurrentPrice, b = "SOMEWHERE", e = tagContext.Products[0].Title, d = tagContext.Products[0].ProductId
    } catch (Au) {
        c = 45940, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.smartguy.se")) try {
        g = "kr", c = 46849, a = zx_amount, b = "SMARTGUY", d = e = zx_fn
    } catch (Bu) {
        c = 46849, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.smartguy.no")) try {
        g = "kr", c = 45964,
        a = zx_amount, b = "SMARTGUY", d = e = zx_fn
    } catch (Cu) {
        c = 45964, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.smartguy.dk")) try {
        g = "kr", c = 46942, a = zx_amount, b = "SMARTGUY", d = e = zx_fn
    } catch (Du) {
        c = 46942, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.shoep.nl")) try {
        c = 45262, a = $("#delPriceTo").text().split("\u20ac")[1].replace(",", ".").trim(), b = "SHOEP", d = e = $j("#mainDetails h1").text().trim()
    } catch (Eu) {
        c = 45262, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.phase-eight-fashion.com")) try {
        if (j = $j("#address_country_flag").attr("alt"), "Germany" === j ||
            "France" === j || "Italy" === j || "Spain" === j) c = 46312, a = $(".productPrice").first().text().split("\u20ac")[1].replace(",", ".").replace("Was", "").trim(), b = "PHASE EIGHT", d = e = $j("#productTitle").text().trim()
    } catch (Fu) {
        c = 46312, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.otto.nl")) try {
        c = 46618, a = $j("#ads2Price").text().split("\u20ac")[1].replace(",", ".").trim(), b = "OTTO", d = e = item.imgAlt
    } catch (Gu) {
        c = 46618, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.opus-fashion.com")) try {
        "de" === $j("li.language").text().trim() && (c = 46582, a = zx_amount,
            b = "OPUS FASHION", e = zx_description, d = zx_identifier)
    } catch (Hu) {
        c = 46582, d = b = "", a = 0
    } else if (-1 != f.indexOf("www.nicandzoe.com")) try {
        c = 45730, a = $j('span[id*="product-price-"]').text().split("$")[1].trim(), b = "NIC + ZOE", d = e = $j("h2").text().trim()
    } catch (Iu) {
        c = 45730, d = b = "", a = 0
    } else if (-1 != f.indexOf("1mall.com")) try {
        c = 50729, a = $j("#productFacadePrice").text().trim(), b = "YIHAODIAN", e = $j("#productMainName").text().trim(), d = $j("#productCode").text().trim(), g = "\u00a5"
    } catch (Ju) {
        c = 50729, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.bubbleroom.se")) try {
        g =
            "kr", c = 45322, a = $j('meta[itemprop="price"]').attr("content").split("kr")[0].replace(/[^0-9]/g, "").trim(), b = "BUBBLE ROOM", e = $j('h2[itemprop="name"]').text().trim(), d = $j('span[itemprop="identifier"]').text().trim()
    } catch (Ku) {
        c = 45322, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.bubbleroom.dk")) try {
        g = "kr", c = 45490, a = $j('meta[itemprop="price"]').attr("content").replace(/[^0-9]/g, "").trim(), b = "BUBBLE ROOM", e = $j('h2[itemprop="name"]').text().trim(), d = $j('span[itemprop="identifier"]').text().trim()
    } catch (Lu) {
        c =
            45490, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.bubbleroom.no")) try {
        g = "kr", c = 46069, a = $j('meta[itemprop="price"]').attr("content").split("nok")[0].replace(/[^0-9]/g, "").trim(), b = "BUBBLE ROOM", e = $j('h2[itemprop="name"]').text().trim(), d = $j('span[itemprop="identifier"]').text().trim()
    } catch (Mu) {
        c = 46069, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.buffalo-boots.com")) try {
        "AT" === $(".count-lang a span").first().text().trim() && (g = "\u20ac", c = 46069, a = product_price.split("EUR")[1].replace(",", ".").trim(), b = "BUFFALO",
            e = product_name, d = product_id)
    } catch (Nu) {
        c = 46069, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.charliemary.com")) try {
        "nl" === $j("html").attr("lang") && (g = "\u20ac", c = 46072, a = optionsPrice.productPrice, b = "CHARLIE + MARY", e = $j(".product-name h2").text().trim(), d = $j(".product-code strong").text().trim())
    } catch (Ou) {
        c = 46072, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.mustang-jeans.com")) try {
        "mustang-de" === epoq_tenantId && (g = "\u20ac", c = 45970, a = $j(".data .price span").last().text().replace(",", ".").split("EUR")[0].trim(),
            b = "MUSTANG", d = e = $j(".data h1.label").text().trim())
    } catch (Pu) {
        c = 45970, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.deadlegacy.com")) try {
        g = $j("#change_currency option:selected").text().split(" ")[0].trim(), c = 46069, a = $j(".single__details .single__price").text().split(g)[1].replace(",", ".").trim(), b = "DEAD LEGACY", d = e = $j("h1.oversize").text().trim()
    } catch (Qu) {
        c = 46069, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.milkandhoney.se")) try {
        g = "kr", c = 45973, a = optionsPrice.productPrice, b = "MILK AND HONEY", d = e = $j("h1.product-name").text().trim()
    } catch (Ru) {
        c =
            45973, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.shangpin.com")) try {
        c = 50759, a = $j("#SP_ProdPrice").val().trim(), b = $j("#spDetail_proInfo h2 a").text().trim(), e = $j("#spDetail_proInfo h1").text().trim(), d = $j(".spDetail_proNo").text().split(":")[1].trim(), g = "\u00a5"
    } catch (Su) {
        c = 50759, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.gymboree.com")) try {
        g = "$", c = 49201, a = $j('meta[property="og:price:amount"]').attr("content").trim(), b = "GYMBOREE", e = $j('meta[property="og:title"]').attr("content").trim(), d = $j('meta[name="DCSext.product_code"]').attr("content").trim()
    } catch (Tu) {
        c =
            49201, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.lipstickboutique.co.uk")) try {
        g = "\u00a3", c = 46078, a = $j(".prodPricing .pNow").text().split("\u00a3")[1].trim(), b = "LIPSTICK BOUTIQUE", d = e = $j(".prodTitle h1").text().trim()
    } catch (Uu) {
        c = 46078, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.lenox.com")) try {
        g = "$", c = 45761, a = $j(".item-price .price span").last().text().split("$")[1].trim(), b = "LENOX", d = e = $j("header h1").text().trim()
    } catch (Vu) {
        c = 45761, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.lasenza.co.uk")) try {
        g = "\u00a3",
        c = 45433, a = $j("#product_price .price-hold strong.price").text().split("\u00a3")[1].trim(), b = "LA SENZA", d = e = $j("h1#product-name").text().trim()
    } catch (Wu) {
        c = 45433, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.lamadeclothing.com")) try {
        g = "$", c = 47767, a = optionsPrice.productPrice, b = "LA MADE", d = e = $j(".product-name h1").text().trim()
    } catch (Xu) {
        c = 47767, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.jeanswelt.de")) try {
        g = "\u20ac", c = 46576, a = $j("span#price").text().replace(",", ".").trim(), b = "JEANS WELT", d = e = $j("h2.productsname").text().trim()
    } catch (Yu) {
        c =
            46576, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.grandpa.se")) try {
        g = "kr", c = 46066, a = $j("#price span").last().text().replace("SEK", "").trim(), b = "GRANDPA", d = e = $j("#product-info p a").text().trim()
    } catch (Zu) {
        c = 46066, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.jackthreads.com")) try {
        g = "$", c = 45656, a = Contra.Settings.product.price, b = "JACK THREADS", d = e = Contra.Settings.product.name
    } catch ($u) {
        c = 45656, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.freshcotton.com")) try {
        "nl" === $j('meta[http-equiv="Content-Language"]').attr("content") &&
            (g = "\u20ac", c = 46315, a = $("#ctl00_ContentPlaceHolder1_PrijsLabel").text().split("\u20ac")[1].replace(",", ".").trim(), b = "FRESHCOTTON", d = e = $("#ctl00_ContentPlaceHolder1_UpdatePanelProduct h1").text().trim())
    } catch (av) {
        c = 46315, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.jackthreads.com")) try {
        g = "$", c = 52207, a = Contra.Settings.product.price, b = "JACK THREADS", d = e = Contra.Settings.product.name
    } catch (bv) {
        c = 52207, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.modanisa.com")) try {
        g = "TL", c = 46573, a = $j('meta[name="zx:price"]').attr("content"),
        b = "MODANISA", e = $j('meta[name="zx:fn"]').attr("content"), d = $j('meta[name="zx:identifier"]').attr("content")
    } catch (cv) {
        c = 46573, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.boozt.com")) try {
        "fi" === App.Config.Country ? (g = "\u20ac", c = 45481) : "no" === App.Config.Country ? (g = "kr", c = 44974) : "dk" === App.Config.Country ? (g = "kr", c = 44989) : "de" === App.Config.Country ? (g = "\u20ac", c = 45502) : "se" === App.Config.Country ? (g = "kr", c = 44992) : "nl" === App.Config.Country && (g = "\u20ac", c = 45508), a = $j('.details div[itemprop="price"]').text().split(g)[0].trim(),
        b = $j('span[itemprop="brand"]').text().trim(), e = $j(".details .bx h1 span").last().text().trim(), d = $j('meta[itemprop="productID"]').attr("content").split(":")[1]
    } catch (dv) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.bonaparte.nl")) try {
        g = "\u20ac", c = 44920, a = $j('meta[name="nav_title"]').attr("content").replace(/[^0-9\,\.]/g, "").replace(".", "").replace(",", ".").trim(), b = "BON'A PARTE", d = e = $j('meta[name="nav_title"]').attr("content").replace(/[^a-zA-z\s]/g, "").trim()
    } catch (ev) {
        c = 44920, d = b = e = "", a = 0
    } else if (-1 !=
        f.indexOf("www.bonaparte.se")) try {
        g = "kr", c = 45115, a = $j('meta[name="nav_title"]').attr("content").replace(/[^0-9\,\.]/g, "").replace(".", "").replace(",", ".").trim(), b = "BON'A PARTE", d = e = $j('meta[name="nav_title"]').attr("content").replace(/[^a-zA-z\s]/g, "").trim()
    } catch (fv) {
        c = 45115, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.bonaparte.dk")) try {
        g = "kr", c = 45112, a = $j('meta[name="nav_title"]').attr("content").replace(/[^0-9\,\.]/g, "").replace(".", "").replace(",", ".").trim(), b = "BON'A PARTE", d = e = $j('meta[name="nav_title"]').attr("content").replace(/[^a-zA-z\s]/g,
            "").trim()
    } catch (gv) {
        c = 45112, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.bonaparte.ch")) try {
        g = "chf", c = 44296, a = $j('meta[name="nav_title"]').attr("content").replace(/[^0-9\,\.]/g, "").replace(",", "").trim(), b = "BON'A PARTE", d = e = $j('meta[name="nav_title"]').attr("content").replace(/[^a-zA-z\s]/g, "").trim()
    } catch (hv) {
        c = 44296, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.smartgirl.se")) try {
        c = 6158, a = zx_amount, b = "SMART GIRL", e = zx_fn, d = zx_identifier
    } catch (iv) {
        c = 6158, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.smartgirl.dk")) try {
        c =
            46930, a = zx_amount, b = "SMART GIRL", e = zx_fn, d = zx_identifier
    } catch (jv) {
        c = 46930, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("smartgirl.no")) try {
        c = 44899, a = zx_amount, b = "SMART GIRL", e = zx_fn, d = zx_identifier
    } catch (kv) {
        c = 44899, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("provrummet.se")) try {
        g = "kr", c = 47179, a = $j(".H2Lora").text().replace(/[^0-9]/g, "").trim(), b = "PROVRUMMET", d = e = $j("h1.Prodtitle").text().trim()
    } catch (lv) {
        c = 47179, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("fashionisland.se")) try {
        var B = $j(".fi_topnav_select span").first().text().trim();
        "NOK" === B ? g = "kr" : "SEK" === B ? g = "kr" : "EUR" === B ? g = "\u20ac" : "DKK" === B ? g = "kr" : "USD" === B && (g = "$");
        c = 6212;
        a = 0 < $(".Oc33aa27a").length ? $j(".Oc33aa27a span").first().text().replace(/[^0-9\,\.]/g, "").replace(",", ".").trim() : $j(".Ob5bd8f25 span").first().text().replace(/[^0-9\,\.]/g, "").replace(",", ".").trim();
        b = "FASHION ISLAND";
        d = e = 0 < $j(".Bodoni-Bold").length ? $j(".Bodoni-Bold").text().trim() : $j("h2.product_name").text().trim()
    } catch (mv) {
        c = 6212, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("shop.80spurple.com")) try {
        g = "$",
        c = 2362, a = $j("#ap_0 .price").last().text().split("$")[1].trim(), b = "80'S PURPLE", d = e = $j(".productTitle div.titleOne").text().trim()
    } catch (nv) {
        c = 2362, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("axel.dk")) try {
        g = "kr", c = 6227, a = $j("#productPrice span").last().text().replace(/[^0-9]/g, "").trim(), b = "AXEL", d = e = $j("#productName .subHeader").text().trim()
    } catch (ov) {
        c = 6227, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("babyshop.dk")) try {
        "Danmark" === $j(".c-3 a.selected").attr("title") && (g = "kr", c = 47635, a = $j(".price-and-stock .price span").last().text().split("DKK")[0].replace(",",
            ".").trim(), b = "BABYSHOP", d = e = $j("h1.h3").text().trim())
    } catch (pv) {
        c = 47635, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("bangerhead.se")) try {
        g = "kr", c = 6148, a = $j('span[itemprop="price"]').text().split("kr")[0].trim(), b = "BANGERHEAD", d = e = $j('h1[itemprop="name"]').text().trim()
    } catch (qv) {
        c = 6148, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("beadroom.com")) try {
        g = "$", c = 6220, a = $j(".product-specification-price dd").text().split(" ")[0].split("$")[1].trim(), b = "BEADROOM", d = e = $j(".product-specification-name dd").text().trim()
    } catch (rv) {
        c =
            6220, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.beautyplanet.se")) try {
        g = "kr", c = 6149, a = $j(".heading3 .Price").text().split("kr")[0].replace("SEK", "").trim(), b = "BEAUTY PLANET", d = e = $j(".Info h1").text().trim()
    } catch (sv) {
        c = 6149, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.blossommotherandchild.com")) try {
        p = $j("li.currency a.active").attr("title"), "USD" === p ? g = "$" : "EUR" === p ? g = "\u20ac" : "GBP" === p && (g = "\u00a3"), c = 5966, a = optionsPrice.productPrice, b = "BLOSSOM", d = e = $j(".product-name h1").text().trim()
    } catch (tv) {
        c = 5966,
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("blue-tomato.com")) try {
        j = $j("#headerLanguage .headerLanguage").text().split("/")[0].trim(), "DK" === j ? (c = 49511, g = "kr") : "FR" === j ? (c = 6377, g = "\u20ac") : "DE" === j ? (c = 49508, g = "\u20ac") : "GB" === j ? (c = 44320, g = "\u00a3") : "SE" === j ? (c = 49502, g = "kr") : "CH" === j && (c = 49505, g = "chf"), a = $j('span[itemprop="price"]').text().replace(/[^0-9\.\,]/g, "").trim(), 1 == a.indexOf(",") ? a.replace(",", "") : 1 < a.indexOf(",") && a.replace(",", "."), b = "BLUE TOMATO", d = e = $j('h1[itemprop="name"]').text().trim()
    } catch (uv) {
        d =
            b = e = "", a = 0
    } else if (-1 != f.indexOf("www.bluebox.se")) try {
        g = "kr", c = 6367, a = $j('span[itemprop="price"]').text().trim(), b = "BLUEBOX", d = e = $j('h1[itemprop="name"]').text().trim()
    } catch (vv) {
        c = 6367, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.boden.co.uk")) try {
        g = "\u00a3", c = 4707, a = $j(".tabNavContent span.NowPrice").text().split(g)[1].replace("to", "").trim(), b = "BODEN", d = e = $j(".tabNavContent .titleBlock h1").first().text().trim()
    } catch (wv) {
        c = 4707, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.boutique1.com")) try {
        c = 6040, 0 <
            $j(".product_details_content_wrapper").length && (g = $j("#currency_btn strong").text().trim(), a = $j('span[class*="_price"]').last().text().split(g)[1].trim(), b = "BOUTIQUE 1", d = e = $j("span.product_name").first().text().trim())
    } catch (xv) {
        c = 6040, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.bustedtees.com")) try {
        g = "$", c = 801, a = $j("span#price").text().split(g)[1].trim(), b = "BUSTED TEES", d = e = $j("h1#product_name").text().trim()
    } catch (yv) {
        c = 801, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.cachette.com")) try {
        var D = $j("div#bzCurrencies a.active").text().trim();
        "GBP" === D ? g = "\u00a3" : "EUR" === D ? g = "\u20ac" : "JPY" === D ? g = "\u00a5" : "USD" === D && (g = "$");
        c = 49357;
        a = $j("#prodprice .productPrice").text().split(g)[1].replace(",", ".").trim();
        b = "CACHETTE";
        d = e = $j("#flyprodname h1").text().trim()
    } catch (zv) {
        c = 49357, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.cashmereboutique.com")) try {
        g = "$", c = 921, a = E, b = "CASHMERE BOUTIQUE", d = e = $j(".desc h4.colr").text().trim()
    } catch (Av) {
        c = 921, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.lightinthebox.com")) try {
        g = $j(".currency-selector a em").first().text().trim(),
        c = 6141, a = $j('strong[itemprop="price"]').text().split(g)[1].trim(), b = "LIGHT IN THE BOX", e = $j(".prod-info-title h1").clone().children().remove().end().text().trim(), d = $j("h1 .item-id").text().replace("#", "").trim()
    } catch (Bv) {
        c = 6141, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.cellbes.se")) try {
        c = 45136, a = $j(".price-place-holder .price span").first().text().split("kr")[0].replace(/[^0-9]/g, "").trim(), b = "CELLBES", d = e = $j(".product h1").text().trim()
    } catch (Cv) {
        c = 45136, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.cellbes.dk")) try {
        c =
            46357, a = $j(".price-place-holder .price span").first().text().split("kr")[1].replace(/[^0-9]/g, "").trim(), b = "CELLBES", d = e = $j(".product h1").text().trim()
    } catch (Dv) {
        c = 46357, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.cellbes.no")) try {
        c = 47623, a = $j(".price-place-holder .price span").first().text().split("kr")[1].replace(/[^0-9]/g, "").trim(), b = "CELLBES", d = e = $j(".product h1").text().trim()
    } catch (Ev) {
        c = 47623, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.cellbes.fi")) try {
        g = "\u20ac", c = 44639, a = $j(".price-place-holder .price span").first().text().split("\u20ac")[0].replace(",",
            ".").replace("Alk. ", "").trim(), b = "CELLBES", d = e = $j(".product h1").text().trim()
    } catch (Fv) {
        c = 44639, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.cellbes.cz")) try {
        g = "K\u010d", c = 46579, a = $j(".price-place-holder .price span").first().text().split("K\u010d")[0].replace(/[^0-9]/g, "").trim(), b = "CELLBES", d = e = $j(".product h1").text().trim()
    } catch (Gv) {
        c = 46579, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.liebo.com")) try {
        g = "\u00a5", c = 50783, a = $j("#sale_price").val().trim(), b = "LIEBO", d = e = $j("#hidGoodName").val().trim()
    } catch (Hv) {
        c =
            50783, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.likeface.com")) try {
        g = "\u00a5", c = 50864, a = $j("#jrtj").text().trim(), 0 === a && (a = $j(".gPE_bnr_Info_prc .tPrc1 div").text().split("\u00a5")[1].trim()), b = "Likeface", d = e = $j(".gPE_bnr_Info .tCtn h1").text().trim()
    } catch (Iv) {
        c = 50864, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.mybag.com")) try {
        g = $j(".currency-current").text().trim().split(" ")[1].trim(), c = 4778, a = $j('span[itemprop="price"]').text().split(g)[1].replace(",", "").trim(), b = "MY BAG", d = e = $j('span[itemprop="name"]').first().text().trim()
    } catch (Jv) {
        c =
            4778, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.esprit.cn")) try {
        g = "\u00a5", c = 50870, a = $j(".textInfo .sku_price3 h4 span").text().split("\uffe5")[1].trim(), b = "Esprit", d = e = $j(".textInfo  h3").text().trim()
    } catch (Kv) {
        c = 50870, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("chicstar.com")) try {
        g = "$", c = 1041, a = 0 < $j("#currentBid").length ? $j("#currentBid").text().split("$")[1].replace(",", "").trim() : $j("#currentdivPrice").text().split(g)[1].replace(",", "").trim(), b = "CHIC STAR", d = e = $j("#divDescription").first().text().trim()
    } catch (Lv) {
        c =
            1041, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.cocosa.com")) try {
        c = 49712, 0 < $j(".prod_all_info_c").length && (g = "\u00a3", a = $j("span.p_price").text().split(g)[1].replace(",", "").trim(), b = "COCOSA", d = e = $j("span.product_n").first().text().trim())
    } catch (Mv) {
        c = 49712, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.coniefoxdress.com")) try {
        p = $j("#currenciesIds").text().trim().substr(0, 2), "JP" === p ? (g = "\uffe5", l = 12) : "US" === p ? (g = "$", l = 1) : "EU" === p ? (g = "\u20ac", l = 11) : "GB" === p ? (g = "\u00a3", l = 10) : "AU" === p ? (g = "$", l = 8) : "CA" === p ? (g =
            "$", l = 16) : "CN" === p && (g = "\uffe5", l = 2), c = 6288, a = $j("#salePriceSpan").length ? $j("span#salePriceSpan").text().replace(",", "").trim() : $j("span#priceSpan").text().replace(",", "").trim(), b = "CONIEFOX", d = e = $j("h1.product_title").first().text().trim()
    } catch (Nv) {
        c = 6288, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.camillaandmarc.com")) try {
        "AUD" === $j('meta[itemprop="priceCurrency"]').attr("content") && (g = "AUD", l = 8, c = 49859, a = $j('span[itemprop="price"]').first().text().trim().split("$")[1].replace(",", ""), b = "CAMILLA AND MARC",
            d = e = $j('span[itemprop="name"]').first().text().trim())
    } catch (Ov) {
        c = 49859, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.coolstuff.se")) try {
        g = "SEK", c = 6265, a = $j('div[itemprop="price"]').text().replace(/[^0-9]/g, "").trim(), b = "COOL STUFF", d = e = $j('h1[itemprop="name"]').first().text().trim()
    } catch (Pv) {
        c = 6265, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.countryattire.com")) try {
        c = 49348, 0 < $j(".product-view").length && (g = "\u00a3", a = $j('span[id*="product-price-"]').text().split(g)[1].replace(",", "").trim(), b = "COUNTRY ATTIRE",
            d = e = $j(".product-name h1").first().text().trim())
    } catch (Qv) {
        c = 49348, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.designersmarket.dk")) try {
        g = "DKK", c = 6330, a = $j('div[itemprop="price"]').text().split(g)[1].replace(".", "").replace(",", ".").trim(), b = "DESIGNERS MARKET", d = e = $j('h1[itemprop="name"]').first().text().trim()
    } catch (Rv) {
        c = 6330, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.scandinaviandesigncenter.fi")) try {
        g = "\u20ac", c = 49839, a = $j('span[itemprop="price"]').text().replace(/[^0-9]/g, "").trim(), b = "DESIGN ONLINE",
        d = e = $j("h1.sIFR-replaced").first().text().trim()
    } catch (Sv) {
        c = 49839, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.destinationmaternity.com")) try {
        g = "$", c = 6130, a = $j('span[itemprop="price"]').text().split(g)[1].trim(), b = "DESTINATION MATERNITY", e = $j('h1[itemprop="name"]').first().text().trim(), d = $j("div.PidNum").text().split(":")[1].trim()
    } catch (Tv) {
        c = 6130, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.dhc.net.cn")) try {
        g = "\u00a5", c = 50912, a = $j("span.red_price").first().text().split("\uffe5")[1].split(" ")[0].trim(),
        b = "DHC", d = e = $j('td span[style = "font-size: 18px; line-height: 30px; font-weight: bold;"]').first().text().trim()
    } catch (Uv) {
        c = 50912, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.dhccare.com")) try {
        c = 49706, a = $j("#ctl00_cpBody_updatePanaelProducts #ctl00_cpBody_ProductDisplayCtrl_productRepeater_ctl01_Price").text().split("$")[1].split(" ")[0].trim(), b = "DHC", d = e = $j(".productDisplayName").first().text().trim()
    } catch (Vv) {
        c = 49706, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.accessoryconcierge.com")) try {
        g = "$", c = 49739,
        a = $j("p#price-preview").text().split(g)[1].trim(), b = "ACCESSORY CONCIERGE", d = e = $j("h2.title").first().text().trim()
    } catch (Wv) {
        c = 49739, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.yohobuy.com")) try {
        g = "\u00a5", c = 50918, $j("#newBrowse li").each(function () {
            $j(this).find(".thumb a").attr("href") == window.location.href && (a = $j(this).find(".price").text().split(" ").pop().trim())
        }), b = "YOHO", d = e = $(".goodsdetail-main .info .title h2").text().trim()
    } catch (Xv) {
        c = 50918, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.dylanboutique.com")) try {
        g =
            "$", c = 5856, a = $j("span#product_price").text().split(g)[1].trim(), b = "DYLAN BOUTIQUE", d = e = $j("h1.product-title ").first().text().trim()
    } catch (Yv) {
        c = 5856, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("edressme")) try {
        g = "$", c = 931, 0 < $j(".product-view").length && (a = $j('span[id*="product-price-"]').text().split(g)[1].trim(), b = "EDRESSME", e = $j('span[itemprop="name"]').first().text().trim(), d = $j('span[itemprop="sku"]').text().trim())
    } catch (Zv) {
        c = 931, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("eleven.se")) try {
        var y = $("#d-top-currency select option:selected").text().split("-")[0].trim();
        "CAD" === y ? g = "CAD" : "DKK" === y ? g = "DKK" : "EUR" === y ? g = "EUR" : "GBP" === y ? g = "GBP" : "NOK" === y ? g = "NOK" : "SEK" === y ? g = "SEK" : "USD" === y && (g = "USD");
        c = 6147;
        a = $j(".pr-summary .price").length ? $j(".pr-summary .price").first().text().replace(/[^0-9\,\.]/g, "").replace(",", ".").trim() : $j(".pr-alt .price").first().text().replace(/[^0-9\,\.]/g, "").replace(",", ".").trim();
        b = "ELEVEN";
        d = e = $j("h1.fn").first().text().trim()
    } catch ($v) {
        c = 6147, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("ellos.se")) try {
        g = "SEK", c = 47176, a = $j("span#PCPrice").text().replace(/[^0-9]/g,
            "").trim(), b = "ELLOS", d = e = $j(".detailDescriptionContainer h1").first().text().trim()
    } catch (aw) {
        c = 47176, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("ellos.no")) try {
        g = "NOK", c = 6189, a = $j("span#PCPrice").text().replace(/[^0-9]/g, "").trim(), b = "ELLOS", d = e = $j(".detailDescriptionContainer h1").first().text().trim()
    } catch (bw) {
        c = 6189, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("ellos.dk")) try {
        g = "DKK", c = 44986, a = $j("span#PCPrice").text().replace(/[^0-9]/g, "").trim(), b = "ELLOS", d = e = $j(".detailDescriptionContainer h1").first().text().trim()
    } catch (cw) {
        c =
            44986, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("etnies.com")) try {
        g = "$", c = 2372, a = $j("hgroup h3.price").text().replace(/[^0-9\.]/g, "").trim(), b = "ETNIES", d = e = $j("hgroup h1").first().text().trim()
    } catch (dw) {
        c = 2372, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("expressionsdesbijoux.com")) try {
        g = "\u00a3", c = 6043, a = $j(".product_prices h3").first().text().replace(/[^0-9\.]/g, "").trim(), b = "EXPRESSIONS DES BIJOUX", d = e = $j("hgroup h1").first().text().trim()
    } catch (ew) {
        c = 6043, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("fashionfifteen.dk")) try {
        g =
            "DKK", c = 46924, a = $j('div[itemprop="price"]').first().text().replace(/[^0-9\,]/g, "").replace(",", ".").trim(), b = "FASHION FIFTEEN", d = e = $j('h1[itemprop="name"]').first().text().trim()
    } catch (fw) {
        c = 46924, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("feminint.se")) try {
        g = "SEK", c = 46342, a = $j("#ctl00_main_showproduct1_spnPrice").first().text().replace(/[^0-9]/g, "").trim(), b = "FEMININT", d = e = $j(".ProductPageHeader h1").first().text().trim()
    } catch (gw) {
        c = 46342, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("flirtcatalog.com")) try {
        g = "$",
        c = 4891, a = $j("#UnitCostSpan").first().text().replace(/[^0-9\.]/g, "").trim(), b = "FLIRT CATALOG", e = $j("h1.productDetailHeading").first().text().trim(), d = $j("span.detailStyleName").text().split(":")[1].trim()
    } catch (hw) {
        c = 4891, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("footway.se")) try {
        g = "SEK", c = 6156, a = $j('span[id*="product-price-"]').first().text().replace(/[^0-9]/g, "").trim(), b = "FOOTWAY", d = e = $j(".product-name h1 span").first().text().trim()
    } catch (iw) {
        c = 6156, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("footway.no")) try {
        g =
            "NOK", c = 44908, a = $j('span[id*="product-price-"]').first().text().replace(/[^0-9]/g, "").trim(), b = "HEPPO", d = e = $j(".product-name h1 span").first().text().trim()
    } catch (jw) {
        c = 44908, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("footway.dk")) try {
        g = "DKK", c = 44941, a = $j('span[id*="product-price-"]').first().text().replace(/[^0-9]/g, "").trim(), b = "HEPPO", d = e = $j(".product-name h1 span").first().text().trim()
    } catch (kw) {
        c = 44941, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("frankdandy.com")) try {
        g = $j(".localize-trigger span").first().text().split("(")[1].replace(")",
            "").trim(), c = 5825, a = $j("#product-details div.price").first().clone().children().remove().end().text().replace(/[^0-9]/g, "").trim(), b = "FRANK DANDY", d = e = $j("#product-main h1").first().text().trim()
    } catch (lw) {
        c = 5825, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.gant.co.uk")) try {
        g = "\u00a3", c = 50877, a = $j('h3[itemprop="price"]').text().split(g)[1].trim(), b = "GANT", d = e = $j('h1[itemprop="name"]').first().clone().children().remove().end().text().trim()
    } catch (mw) {
        c = 50877, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("no.gant.com")) try {
        g =
            "NOK", c = 49794, a = $j('span[id*="product-price-"] span').first().text().replace(",-", "").replace(/[^0-9\,]/g, "").replace(",", ".").trim(), b = "GANT", d = e = $j(".product-name h1").text().trim()
    } catch (nw) {
        c = 49794, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("goodnightmacaroon.co")) try {
        g = "$", c = 49559, 0 < $j("div.caroufredsel_wrapper").length && (a = $j(".product-price .money").text().replace(/[^0-9\.]/g, "").trim(), b = "GOODNIGHT MACAROON", d = e = $j("#product-description h1").text().trim())
    } catch (ow) {
        c = 49559, d = b = e = "", a = 0
    } else if (-1 !=
        f.indexOf("teesbytina.com")) try {
        g = "$", c = 6319, a = $j("#content .price").clone().children().remove().end().text().replace(/[^0-9\.]/g, "").trim(), b = "TEES BY TINA", e = $j("#content h2").first().text().trim(), d = $j("#content h3").first().text().split(":")[1].trim()
    } catch (pw) {
        c = 6319, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("ofakind.com")) try {
        g = "$", c = 50663, a = $j("div.price-value").text().trim(), b = "OF A KIND", d = e = $j("#sidebar h2").first().text().trim()
    } catch (qw) {
        c = 50663, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("dianejameshome.com")) try {
        g =
            "$", c = 50693, a = $j("div#price").text().split("$")[1].trim(), b = "OF A KIND", d = e = $j("h1.prodName").first().text().trim()
    } catch (rw) {
        c = 50693, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("melboteri.com")) try {
        g = "$", c = 49742, a = $j("#price-preview .money").text().split("$")[1].replace(",", "").trim(), b = "MEL BOTERI", d = e = $j("h2.title").first().text().trim()
    } catch (sw) {
        c = 49742, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("williams-sonoma.com")) try {
        "USD" === digitalData.x_state.currencyCode && (g = "$", c = 50803, 0 < $j('span[itemprop="price"]').length ?
            a = $j('span[itemprop="price"]').last().text().replace(",", "").trim() : 0 < $j('span[itemprop="lowPrice"]').length && (a = $j('span[itemprop="lowPrice"]').last().text().replace(",", "").trim()), b = "WILLIAMS-SONOMA", d = e = $j('h1[itemprop="name"]').first().text().trim())
    } catch (tw) {
        c = 50803, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("menincities.com")) try {
        g = "$", c = 52622, a = $j(".detail.layout-column-half-right .h1-style.price").text().split("$")[1].replace(",", "").trim(), b = "MEN IN CITIES", d = e = $j(".detail.layout-column-half-right .title").first().text().trim()
    } catch (uw) {
        c =
            52622, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("harveynichols.com")) try {
        g = "\u00a3", c = 50867, 0 < $j("#product_addtocart_form").length && (a = $j('span[id*="product-price-"]').text().split("\u00a3")[1].replace(",", "").trim(), b = "HARVEY NICHOLS", e = $j("span.product-desc").first().text().trim(), d = $j(".product-sku").text().split(":")[1].trim())
    } catch (vw) {
        c = 50867, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.shopwaitingonmartha.com")) try {
        c = 51121, a = $j("#product-details .product-price").text().split("$")[1].replace(",", "").trim(),
        b = "WAITING ON MARTHA", d = e = $j("#product-details h2").first().text().trim()
    } catch (ww) {
        c = 51121, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("gretaundluis.com")) try {
        c = 6327, g = "\u20ac", a = $j("#price").text().replace(",", ".").trim(), b = "GRETA AND LUIS", d = e = emosECPageArray.name
    } catch (xw) {
        c = 6327, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("guldknappen.dk")) try {
        c = 45127, g = "DKK", a = $j("div.varekortprice").text().split(g)[1].replace(".", "").replace(",", ".").trim(), b = "GUILDKNAPPEN", d = e = $j('span[itemprop="name"]').first().text().trim()
    } catch (yw) {
        c =
            45127, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("happysocks.com")) try {
        c = 44186, "SE" === $j('input[name="overlay_country"]').val() && (g = "SEK", a = $j('span[id*="product-price-"]').text().split("kr")[0].replace(".", "").replace(",", ".").trim(), b = "HAPPY SOCKS", d = e = $j("h2.product-name").first().text().trim())
    } catch (zw) {
        c = 44186, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("hardcasa.dk")) try {
        c = 46888, g = "DKK", a = $j('span[id*="product-price-"]').text().split("kr")[0].replace(".", "").replace(",", ".").trim(), b = "HARDCASA", d = e = $j("h1.product-name").first().text().trim()
    } catch (Aw) {
        c =
            46888, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("heals.co.uk")) try {
        c = 43962, g = "\u00a3", a = 0 < $j("#parentprice").length ? $j("#parentprice").text().split("\u00a3")[1].replace(",", "").trim() : $j('span[itemprop="price"]').text().split("\u00a3")[1].replace(",", "").trim(), b = "HEAL'S", d = e = $j('h1[itemprop="name"]').first().text().trim()
    } catch (Bw) {
        c = 43962, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("guldknappen.dk")) try {
        c = 45127, g = "DKK", a = $j("div.varekortprice").text().split(g)[1].replace(".", "").replace(",", ".").trim(), b = "GUILDKNAPPEN",
        d = e = $j('span[itemprop="name"]').first().text().trim()
    } catch (Cw) {
        c = 45127, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("ilovegorgeous.co.uk")) try {
        c = 6004, g = "USD" === window.universal_variable.product.currency ? "$" : "\u20ac", a = "$" === g ? $j('.product-shop span[id*="product-price-"]').text().replace(/[^0-9\.\,]/g, "").trim() : $j('.product-shop span[id*="product-price-"]').text().replace(/[^0-9\.\,]/g, "").replace(",", ".").trim(), b = "I LOVE GORGEOUS", d = e = $j(".product-name h1").text().trim()
    } catch (Dw) {
        c = 6004, d = b = e = "", a = 0
    } else if (-1 !=
        f.indexOf("inlovewithfashion.com")) try {
        c = 4793, g = "\u00a3", a = $j("#prodmain h1").text().split("\u00a3")[1].trim(), b = "IN LOVE WITH FASHION", e = $j("#prodmain h1").text().split("\u00a3")[0].trim(), d = $j("#prodmain h6").text().split(":")[1].trim()
    } catch (Ew) {
        c = 4793, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("klokker.no")) try {
        c = 6162, g = "NOK", a = $j('.product-shop span[id*="product-price-"]').first().text().replace(/[^0-9\.\,]/g, "").replace(",", ".").trim(), b = "KLOKKER", d = e = $j(".product-name h1").text().trim()
    } catch (Fw) {
        c =
            6162, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("departementfeminin.com")) try {
        c = 51367, g = "\u20ac", a = $j(".prixTTC").first().text().split("\u20ac")[0].replace(",", ".").trim(), b = "DEPARTMENT FEMININ", d = e = $j("span#product_name").text().trim()
    } catch (Gw) {
        c = 51367, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("jennyfer.com")) try {
        c = 46468, g = "\u20ac", a = $j('span[id*="product-price-"]').text().split("\u20ac")[0].replace(",", ".").trim(), b = "JENNYFER", e = $j("#product-view h1").text().trim(), d = $j(".product-reference").text().split(":")[1].trim()
    } catch (Hw) {
        c =
            46468, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("lace.de")) try {
        c = 47080, g = "\u20ac", a = $j("#commodity-price").clone().children().remove().end().text().split("EUR")[1].replace(",", ".").trim(), b = "LACE", d = e = $j("#commodity-title h2").text().trim()
    } catch (Iw) {
        c = 47080, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("lace.dk")) try {
        c = 46936, g = "DKK", a = $j("#commodity-price").clone().children().remove().end().text().split("DKK")[1].replace(",", ".").trim(), b = "LACE", d = e = $j("#commodity-title h2").text().trim()
    } catch (Jw) {
        c = 46936, d = b = e =
            "", a = 0
    } else if (-1 != f.indexOf("liveit.se")) try {
        c = 44258, g = "SEK", a = $j(".p-price-label").first().text().split("kr")[0].trim(), b = "LIVE IT", d = e = $j('meta[itemprop="name"]').attr("content")
    } catch (Kw) {
        c = 44258, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("lyko.se")) try {
        c = 46852, g = "SEK", a = $j("h2#productpage-main-price").first().text().split(":-")[0].trim(), b = "LYKO", d = e = $j("h1#lblName").text().trim()
    } catch (Lw) {
        c = 46852, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("maxstudio.com")) try {
        c = 4717, 0 < $j(".productContent").length && (g = $j('span[itemprop="price"]').first().text().replace("NOW: ",
            "").substring(0, 1).trim(), a = $j('span[itemprop="price"]').first().text().replace(/[^0-9\.\,]/g, "").trim(), b = "MAXSTUDIO", d = e = $j('h1[itemprop="name"]').text().trim())
    } catch (Mw) {
        c = 4717, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("milanoo.com")) try {
        c = 4871, g = $j(".pop_menu a label").first().text().trim(), a = $j("#price_list b.price .smt_price").first().text().replace(/[^0-9\.\,]/g, "").replace(",", ".").trim(), b = "MILANOO", d = e = $j("#product_right h1").text().trim()
    } catch (Nw) {
        c = 4871, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("my1styears.com")) try {
        c =
            4896, 0 < $j(".product-view").length && (g = "\u00a3", a = $j('span[id*="product-price-"]').first().text().replace(/[^0-9\.\,]/g, "").replace(",", ".").trim(), b = "MY 1ST YEARS", d = e = $j(".product-name h1.h3").text().trim())
    } catch (Ow) {
        c = 4896, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.chicwish.com")) try {
        j = $j('select[name="currency"] option:selected').text().trim(), c = 50753, "HKD" == j ? g = "HK$" : "USD" == j ? g = "$" : "GBP" == j ? g = "\u00a3" : "AUD" == j ? g = "AU$" : "BRL" == j ? g = "R$" : "NZD" == j ? g = "NZ$" : "RUB" == j ? g = "RUB" : "EUR" == j && (g = "\u20ac"), a = $j('span[id*="product-price-"]').first().text().replace(/[^0-9\.\,]/g,
            "").replace(",", ".").trim(), b = "CHICWISH", d = e = $j('h1[itemprop="name"]').text().trim()
    } catch (Pw) {
        c = 50753, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("mybag.com")) try {
        c = 4778, g = "GBP" === $j('meta[itemprop="priceCurrency"]').attr("content") ? "\u00a3" : "\u20ac", a = $j('span[itemprop="price"]').first().text().replace(/[^0-9\.\,]/g, "").replace(",", "").trim(), b = "MY BAG", d = e = $j('span[itemprop="name"]').text().trim()
    } catch (Qw) {
        c = 4778, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("mytights.com")) try {
        c = 4716, g = "$", a = $j('.product-essential span[id*="product-price-"]').first().text().replace(/[^0-9\.\,]/g,
            "").replace(",", "").trim(), b = "MY TIGHTS", d = e = $j(".product-essential .product-name h1").text().trim()
    } catch (Rw) {
        c = 4716, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("navabi.co.uk")) try {
        c = 49442, g = "\u00a3", a = $j('span[itemprop="price"]').first().text().replace(/[^0-9\.\,]/g, "").replace(",", "").trim(), b = "NAVABI", d = e = $j('[itemprop="name"]').text().trim()
    } catch (Sw) {
        c = 49442, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("netlingeri.dk")) try {
        c = 6167, g = "DKK", a = $j('[itemprop="price"]').first().text().replace(/[^0-9\.\,]/g, "").replace(",",
            ".").trim(), b = "NET LINGERI", d = e = $j('[itemprop="name"]').text().trim()
    } catch (Tw) {
        c = 6167, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("nevernaked.com")) try {
        c = 49785, g = "NOK", a = $j('span[id*="product-price-"]').first().text().replace(/[^0-9\.\,]/g, "").replace(",", ".").trim(), b = "NEVER NAKED", d = e = $j('[itemprop="name"] h1').text().trim()
    } catch (Uw) {
        c = 49785, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("outnorth.se")) try {
        c = 44995, g = "SEK", a = 0 < $j(".ONprisRea").length ? $j("div.ONprisRea").first().text().replace(/[^0-9\.\,]/g, "").replace(",",
            ".").trim() : $j("div.ONpris").first().text().replace(/[^0-9\.\,]/g, "").replace(",", ".").trim(), b = "OUTNORTH", d = e = $j("h1.ONrubrik1H1").text().trim()
    } catch (Vw) {
        c = 44995, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("overland.com")) try {
        c = 3022, g = "$", a = $j("#ctl00_MainContent_ProductDetail span").eq(0).first().text().replace(/[^0-9\.\,]/g, "").replace(",", "").trim(), b = "OVERLAND", d = e = $j("#ctl00_MainContent_ProductDetail h1").text().trim()
    } catch (Ww) {
        c = 3022, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("pacsun.com")) try {
        c = 591, g = "$",
        a = $j(".price div").last().text().replace(/[^0-9\.\,]/g, "").replace(",", "").trim(), b = "PACIFIC SUNWEAR", d = e = $j("h2.productname").text().trim()
    } catch (Xw) {
        c = 591, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("pauls-boutique.com")) try {
        c = 6116, g = "\u00a3", a = $j("em.ProductPrice").last().text().replace(/[^0-9\.\,]/g, "").replace(",", "").trim(), b = "PAUL'S BOUTIQUE", d = e = $j(".ProductDetailsGrid h1").text().trim()
    } catch (Yw) {
        c = 6116, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("prettygreen.com")) try {
        c = 5968, g = "$", a = $j("b#price_value").text().replace(/[^0-9\.\,]/g,
            "").replace(",", "").trim(), b = "PRETTY GREEN, LTD.", d = e = $j("h1#name").clone().children().remove().end().text().trim()
    } catch (Zw) {
        c = 5968, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.sigersonmorrison.com")) try {
        c = 50780, a = $j(".product-price .product-price-value #product_price").text().trim(), b = "SIGERSON MORRISON", d = e = $j(".product-name").text().trim()
    } catch ($w) {
        c = 50780, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.shopburu.com")) try {
        c = 50885, a = $j("#product-price .product-price").text().split("$")[1].trim(), b = "Bu Ru",
        d = e = $j("#product-description h1").clone().children().remove().end().text().trim()
    } catch (ax) {
        c = 50885, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.aftershockplc.us")) try {
        c = 51135, a = $j(".product-detail-line .product-detail-price").text().split("$")[1].trim(), b = "Aftershock London", d = e = $j(".floated_title strong").text().trim()
    } catch (bx) {
        c = 51135, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("editorialist.com")) try {
        c = 49826, a = $j(".grid_4.alpha p").eq(1).text().split("$")[1].replace(",", "").replace("USD", "").trim(), b = "EDITORIALIST",
        d = e = $j(".grid_4.alpha .no-marg").last().text().trim()
    } catch (cx) {
        c = 49826, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("g-star.com")) try {
        c = 5961, "nl_nl" === $j("body").attr("data-locale") && (g = "\u20ac", a = $j('.primary-info [itemprop="price"]').text().split(g)[1].replace(",", ".").trim(), b = "G-STAR RAW", d = e = $j('.primary-info [itemprop="name"]').last().text().trim())
    } catch (dx) {
        c = 5961, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("voijeans.com")) try {
        c = 6110, temp = $j(".currency-switcher p.text").text(), "GBP" === temp ? g = "\u00a3" : "EUR" ===
            temp ? g = "\u20ac" : "USD" === temp && (g = "$"), a = $j('.product-shop [id*="product-price-"]').text().split(g)[1].replace(",", "").trim(), b = "VOI JEANS CO.", d = e = $j(".product-shop .product-name h1").text().trim()
    } catch (ex) {
        c = 6110, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("verseo.com")) try {
        c = 791, a = $j(".price-box-row2 strong").text().split("$")[1].replace(",", "").trim(), b = "VERSEO", d = e = $j(".price-box span").first().text().trim()
    } catch (fx) {
        c = 791, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("urbanminx.com")) try {
        c = 5916, a = $j('[id*="product-price-"]').text().split("$")[1].replace(",",
            "").trim(), b = "URBAN MINX", d = e = $j(".product-name h1").first().text().trim()
    } catch (gx) {
        c = 5916, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("uppercut.se")) try {
        c = 6152, temp = $j(".link.language span").text().split(":")[1].trim(), "EUR" === temp ? g = "\u20ac" : "DKK" === temp ? g = "DKK" : "NOK" === temp ? g = "NOK" : "SEK" === temp && (g = "SEK"), a = $j("#divDC_Product_Price .price").text().replace(",", ".").trim(), b = "UPPERCUT", d = e = $j("#spanDC_Product_CategoryName").first().text().trim()
    } catch (hx) {
        c = 6152, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("regentrow.com")) try {
        c =
            44944, a = $j('[id*="product-price-"]').first().text().replace(/[^0-9\.\,]/g, "").trim(), b = "REGENTROW", e = $j(".product-shop h2").first().text().trim(), d = $j(".product-code").text().split(":")[1].trim()
    } catch (ix) {
        c = 44944, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("shop.samsonite.com")) try {
        c = 6131, a = $j('[itemprop="lowPrice"]').first().text().replace(/[^0-9\.\,]/g, "").trim(), b = "SAMSONITE", e = $j('[itemprop="name"]').first().text().trim(), d = $j(".itemNo").text().trim()
    } catch (jx) {
        c = 6131, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("shopfriiscompany.com")) try {
        c =
            45493, "Denmark" === $j("#country-selector a").first().text().trim() && (a = $j('[itemprop="price"]').first().text().replace(/[^0-9\.\,]/g, "").trim(), b = "FRIIS COMPANY", d = e = $j('[itemprop="name"]').first().text().trim())
    } catch (kx) {
        c = 45493, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("skobox.dk")) try {
        c = 46927, a = $j(".product_content_container .currentPrice").first().text().replace(/[^0-9\.\,]/g, "").replace(",", ".").trim(), b = "SKOBOX", d = e = $j(".product_content_container .product_headline").first().text().trim()
    } catch (lx) {
        c =
            46927, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("smartkid.se")) try {
        c = 6150, a = $j(".product-info-box .regular-price span").last().text().replace(/[^0-9\.\,]/g, "").trim(), b = "SMARTKIDS", d = e = $j(".product-top h1").first().text().trim()
    } catch (mx) {
        c = 6150, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("smartkids.no")) try {
        c = 44902, a = $j(".product-info-box .regular-price span").last().text().replace(/[^0-9\.\,]/g, "").replace(",", ".").trim(), b = "SMARTKIDS", d = e = $j(".product-top h1").first().text().trim()
    } catch (nx) {
        c = 44902, d = b = e = "",
        a = 0
    } else if (-1 != f.indexOf("smartkids.dk")) try {
        c = 6364, a = $j(".product-info-box .regular-price span").last().text().replace(/[^0-9\.\,]/g, "").replace(".", "").replace(",", ".").trim(), b = "SMARTKIDS", d = e = $j(".product-top h1").first().text().trim()
    } catch (ox) {
        c = 6364, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("smartsport.dk")) try {
        c = 6173, a = $j(".product-info-box .regular-price span").last().text().replace(/[^0-9\.\,]/g, "").replace(".", "").replace(",", ".").trim(), b = "SMART SPORT", d = e = $j(".product-top h1").first().text().trim()
    } catch (px) {
        c =
            6173, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("smithsonianstore.com")) try {
        c = 3812, a = $j('.product-info [class*="-price"]').first().text().replace(/[^0-9\.\,]/g, "").replace(",", "").trim(), b = "SMITHSONIAN MUSEUM STORE", d = e = $j(".product-top h1").first().text().trim()
    } catch (qx) {
        c = 3812, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("sobling.se")) try {
        c = 44243, a = $j(".productRight .productPrice").text().replace(/[^0-9\.\,]/g, "").trim(), b = "SOBLING", d = e = $j(".productLeft h1").first().text().trim()
    } catch (rx) {
        c = 44243, d = b = e = "", a = 0
    } else if (-1 !=
        f.indexOf("spartoo.nl")) try {
        c = 51205, a = $j("#testA .dis_market_price b").text().replace(/[^0-9\.\,]/g, "").replace(",", ".").trim(), b = "SPARTOO", d = e = $j("h1 span.fn").text().trim()
    } catch (sx) {
        c = 51205, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("spartoo.se")) try {
        c = 51226, a = $j("#testA .dis_market_price b").text().replace(/[^0-9\.\,]/g, "").replace(",", ".").trim(), b = "SPARTOO", d = e = $j("h1 span.fn").text().trim()
    } catch (tx) {
        c = 51226, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("spreadshirt.se")) try {
        c = 51226, a = 0 < $j("h2.h-1.no-gap").length ?
            $j("h2.h-1.no-gap").text().replace(/[^0-9\.\,]/g, "").replace(",", ".").trim() : $j("#gwtPrice").text().replace(/[^0-9\.\,]/g, "").replace(",", ".").trim(), b = "SPREAD SHIRT", d = e = $j("h2.h-2").text().trim()
    } catch (ux) {
        c = 51226, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("stylebystories.com")) try {
        g = window.webshop.currency, c = 50666, a = $j("form #price").text().replace(/[^0-9\.\,]/g, "").replace(",", ".").trim(), b = "STYLE BY STORIES", d = e = $j("form h1.articleName").text().trim()
    } catch (vx) {
        c = 50666, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("styledelux.com")) try {
        c =
            6175, a = $j(".product-info-box .regular-price span").text().replace(/[^0-9\.\,]/g, "").replace(",", ".").trim(), b = "STYLE DELUX", d = e = $j(".product-top h1").text().trim()
    } catch (wx) {
        c = 6175, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("toejeksperten.dk")) try {
        c = 46882, a = $j("#ItemLabelPrice span").text().replace(/[^0-9\.\,]/g, "").replace(",", ".").trim(), b = "TOJ eksperten", d = e = $j("#ItemOptions h1").text().trim()
    } catch (yx) {
        c = 46882, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("teva.com")) try {
        c = 1381, g = $j('meta[itemprop="priceCurrency"]').attr("content"),
        a = $j('.pdp-inner [itemprop="price"] .salesprice').text().replace(/[^0-9\.\,]/g, "").replace(",", "").trim(), b = "TEVA", d = e = $j('.pdp-inner h1[itemprop="name"]').text().trim()
    } catch (zx) {
        c = 1381, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("tessabit.com")) try {
        c = 5995, g = "\u20ac", a = 0 < $j("#ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_lbPrice strike").length ? $j("#ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_lbPrice span").eq(0).text().replace(/[^0-9\.\,]/g, "").replace(",", ".").trim() : $j("#ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_lbPrice").text().replace(/[^0-9\.\,]/g,
            "").replace(",", ".").trim(), b = "TESSABIT", d = e = $j("#ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_itemFriedlyNameSep").text().trim()
    } catch (Ax) {
        c = 5995, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("swimspot.com")) try {
        c = 1391, a = 0 < $j("strong.price em").length ? $j("strong.price em").first().text().replace(/[^0-9\.\,]/g, "").replace(",", ".").trim() : $j("strong.price").first().text().replace(/[^0-9\.\,]/g, "").replace(",", ".").trim(), b = "SWIM SPOT", d = e = $j(".DetailItem h2").first().text().trim()
    } catch (Bx) {
        c = 1391, d = b =
            e = "", a = 0
    } else if (-1 != f.indexOf("baukjen.com")) try {
        c = 49239, -1 != window.location.pathname.indexOf("/uk/") && (g = "\u00a3", a = $j("#product-details-main p.price .blu-price").first().text().replace(/[^0-9\.\,]/g, "").replace(",", ".").trim(), b = "BAUKJEN", d = e = $j("#product-details-main div.title h1").text().trim())
    } catch (Cx) {
        c = 49239, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("thecools.com")) try {
        c = 50941, a = $j(".productDetailedLayout .price").text().replace(/[^0-9\.\,]/g, "").replace(",", "").trim(), b = "THE COOLS", d = e = $j(".productDetailedLayout .productDetailedName").text().trim()
    } catch (Dx) {
        c =
            50941, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.cowshedonline.com")) try {
        c = 51030, a = $j(".price-box .regular-price .price").first().text().split("\u00a3")[1].replace(",", "").trim(), b = "COWSHED", d = e = $j(".product-essential__inner .product-shop .product-name h1").text().trim()
    } catch (Ex) {
        c = 51030, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.hayneedle.com")) try {
        c = 49637, a = $j(".optionCont.zoneWidth100 .floatLeft .ppPrice").text().split("$")[1].replace(",", "").trim(), b = "hayneedle", d = e = $j(".marginLeft10px .twentyTwoText.HN_Txt1.HN_FontFam_3.inline.normalText.marginRight10px").text().trim()
    } catch (Fx) {
        c =
            49637, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("argoz.com")) try {
        c = 50938, a = $j("#attributes .price_display").text().split("-")[0].replace("$", "").trim(), b = "Argoz", d = e = $j(".box h1").text().trim()
    } catch (Gx) {
        c = 50938, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("capwell.co")) try {
        c = 51382, a = $j(".m-product-info-block .m-product-price").text().split("$")[1].replace(",", "").trim(), b = "CAPWELL", d = e = $j(".m-product-title .m-product-name").text().trim()
    } catch (Hx) {
        c = 51382, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("food52.com")) try {
        c = 51445,
        a = $j(".product-summary .pricing .price-range").text().split("$")[1].replace(",", "").trim(), b = "FOOD52", d = e = $j(".product-summary h1").first().text().trim()
    } catch (Ix) {
        c = 51445, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.shopterrain.com")) try {
        c = 51500, g = "$", a = $j(".wl-product-identifiers .prices .price span").text().split("$")[1].replace(",", "").trim(), b = "terrain", d = e = $j(".wl-product-identifiers .wl-product-name").first().text().trim()
    } catch (Jx) {
        c = 51500, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.kabum.com.br")) try {
        c =
            51685, g = "R$", a = 0 < $j("preco_antigo").length ? $j(".preco_normal").eq(0).text().replace(/[^0-9\.\,]/g, "").replace(".", "").replace(",", ".").trim() : $j(".preco_normal").text().replace(/[^0-9\.\,]/g, "").replace(".", "").replace(",", ".").trim(), b = "Kabum", d = e = $j("h1.titulo_det").text().trim()
    } catch (Kx) {
        c = 51685, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("schutz.com.br")) try {
        c = 51679, g = "R$", a = $j("#spanPrecoPor").text().replace(/[^0-9\.\,]/g, "").replace(".", "").replace(",", ".").trim(), b = "Schutz", e = $j("h1.titProduto").text().trim(),
        d = $j(".lstReference").last().text().trim()
    } catch (Lx) {
        c = 51679, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.epocacosmeticos.com.br")) try {
        c = 51676, g = "R$", a = $j("#divItemInfo .verdana_10_rosa").first().text().replace(/[^0-9\.\,]/g, "").replace(".", "").replace(",", ".").trim(), b = "Epoca Cosmeticos", d = e = $j("h1.hTitle").text().trim()
    } catch (Mx) {
        c = 51676, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.marisa.com.br")) try {
        c = 51607, g = "R$", a = $j("p.vl span").text().replace(/[^0-9\.\,]/g, "").replace(".", "").replace(",", ".").trim(),
        b = "Lojas Marisa", e = $j("h1.nome-produto-heading").text().trim(), d = $j(".composicao-pc p span").text().trim()
    } catch (Nx) {
        c = 51607, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.thebeautybox.com.br")) try {
        c = 51664, g = "R$", a = 0 < $j(".preco1").length ? $j(".preco2").eq(0).text().replace(/[^0-9\.\,]/g, "").replace(".", "").replace(",", ".").trim() : $j(".preco2").text().replace(/[^0-9\.\,]/g, "").replace(".", "").replace(",", ".").trim(), b = "THE BEAUTY BOX (BR)", e = $j(".descr_prod h1 span").text().trim(), d = $j("#spnSku").text().trim()
    } catch (Ox) {
        c =
            51664, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.passarela.com.br")) try {
        c = 51658, g = "R$", a = $j("p.preco").text().replace(/[^0-9\.\,]/g, "").replace(".", "").replace(",", ".").trim(), b = "Passarela", d = e = $j(".info-compra h2").text().trim()
    } catch (Px) {
        c = 51658, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.lojaskd.com.br")) try {
        c = 51622, g = "R$", a = $j("span.preco-por").text().replace(/[^0-9\.\,]/g, "").replace(".", "").replace(",", ".").trim(), b = "Lojas KD", e = $j(".nomeProduto h1").text().trim(), d = $j(".referencia span").text().trim()
    } catch (Qx) {
        c =
            51622, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.cantao.com.br")) try {
        c = 51640, g = "R$", a = $j("#inforProduto h3").text().replace(/[^0-9\.\,]/g, "").split(/<br[^>]*>/gi)[0].replace(".", "").replace(",", ".").trim(), b = "CANT\u00c3O", d = e = $j("#inforProduto h2").text().trim()
    } catch (Rx) {
        c = 51640, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("consul.com.br")) try {
        c = 51631, g = "R$", a = $j("#ctl00_ContentPlaceHolderMain_bPrecoPor").text().replace(/[^0-9\.\,]/g, "").replace(".", "").replace(",", ".").trim(), b = "Consul", e = $j("#ctl00_ContentPlaceHolderMain_tdNome").text().trim(),
        d = $j("#ctl00_ContentPlaceHolderMain_tdNome").html().split(/<br[^>]*>/gi)[1].trim()
    } catch (Sx) {
        c = 51631, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("brastemp.com.br")) try {
        c = 51628, g = "R$", a = $j(".txt_prod_n_preco").text().replace(/[^0-9\.\,]/g, "").replace(".", "").replace(",", ".").trim(), b = "Brastemp", e = $j("h2.titleProd").text().trim(), d = $j("h3.caracPrdTexto").text().trim()
    } catch (Tx) {
        c = 51628, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.rihappy.com.br")) try {
        c = 51652, g = "R$", a = $j(".skuBestPrice").text().replace(/[^0-9\.\,]/g,
            "").replace(".", "").replace(",", ".").trim(), b = "Ri Happy", e = $j(".fn.productName").text().trim(), d = $j(".skuReference").text().trim()
    } catch (Ux) {
        c = 51652, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.gilt.com")) try {
        c = 50902, a = $j(".overview.summary-section #price .price-emphasis").text().split("$")[1].replace(",", "").trim(), b = "GILT", d = e = $j(".overview.summary-section hgroup .product-name").text().trim()
    } catch (Vx) {
        c = 50902, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("asauvage.com")) try {
        c = 51418, a = $j(".product-shop .price-box.1 .price").text().split("\u00a3")[1].replace(",",
            "").trim(), b = "A.SAUVAGE", d = e = $j(".product-shop .product-name").text().trim()
    } catch (Wx) {
        c = 51418, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.felderfelder.com")) try {
        c = 51721, a = $j(".product-view-price .price-box .regular-price .price").text().split("\u00a3")[1].replace(",", "").trim(), b = "FELDER FELDER", d = e = $j(".product-shop .product-name h1").text().trim()
    } catch (Xx) {
        c = 51721, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.swellcaroline.com")) try {
        c = 51580, a = $j(".product-shop .price-box .price").text().split("$")[1].replace(",",
            "").trim(), b = "Swell Caroline", d = e = $j(".product-name h1").text().trim()
    } catch (Yx) {
        c = 51580, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("skinchemists.com")) try {
        c = 50988, a = $j(".product-type-data .price-box .price").text().split("\u00a3")[1].replace(",", "").trim(), b = "skin Chemists London", d = e = $j(".product-name h1").text().trim()
    } catch (Zx) {
        c = 50988, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.runwaybidder.com")) try {
        c = 51036, a = $j(".prod_right p").eq("2").text().split(":")[1].replace("AUD", "").replace(",", "").trim(), b = "RUNWAY BIDDER",
        d = e = $j(".prod_right .product_name_bold").text().trim()
    } catch ($x) {
        c = 51036, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.stylechi.com")) try {
        c = 51132, a = $j("#product-info .price .discount span").text().split("\u00a3")[1].replace(",", "").trim(), b = "StyleChi", d = e = $j("#product-info h1").first().text().trim()
    } catch (ay) {
        c = 51132, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("rebelcircus.com")) try {
        c = 50940, a = $j(".product-shop .price-box .price").text().split("$")[1].replace(",", "").trim(), b = "Rebel Circus", d = e = $j(".product-name h1").text().trim()
    } catch (by) {
        c =
            50940, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.pixiemarket.com")) try {
        c = 49885, a = $j(".product-info .price-box .price").text().split("$")[1].replace(",", "").trim(), b = "Pixie Market", d = e = $j(".product-info .product-name strong").text().trim()
    } catch (cy) {
        c = 49885, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.bhldn.com")) try {
        c = 51937, a = $j(".v-product-detailinfo.clearfix .prices span").text().split("$")[1].replace(",", "").trim(), b = "BHLDN", d = e = $j(".v-product-detailinfo.clearfix h1").first().text().trim()
    } catch (dy) {
        c =
            51937, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.sassandbide.com")) try {
        c = 51423, a = $j(".price-box .regular-price .price").text().split("$")[1].replace(",", "").replace("USD", "").trim(), b = "sass and bide", d = e = $j(".secondBlock .product-name h1").first().text().trim()
    } catch (ey) {
        c = 51423, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.lexmod.com")) try {
        c = 51509, a = $j(".saleprice").text().split("$")[1].replace(",", "").trim(), b = "LexMod", d = e = $j(".Prod_name").text().trim()
    } catch (fy) {
        c = 51509, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.montrail.com")) try {
        c =
            51503, a = $j(".prod_top_col.prod_options .product_price.dollar_amount").text().split("$")[1].replace(",", "").trim(), b = "montrail", d = e = $j(".prod_top_col.prod_info h1").first().text().trim()
    } catch (gy) {
        c = 51503, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.kitchenaid.com")) try {
        c = 51467, a = $j("#cta-content .offer-price-amount").text().split("$")[1].replace(",", "").trim(), b = "KitchenAid", d = e = $j(".product-overview .product-title").first().text().trim()
    } catch (hy) {
        c = 51467, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.ouidad.com")) try {
        c =
            50886, a = $j(".quantities li em").first().text().split("$")[1].replace(",", "").trim(), b = "Ouidad", d = e = $j(".product_info h3").first().text().trim()
    } catch (iy) {
        c = 50886, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.starbucksstore.com")) try {
        c = 4641, a = $j(".pricebox.rounded .price .salesprice").first().text().split("$")[1].replace(",", "").trim(), b = "Starbucks", d = e = $j(".varLeft .accessibility.productname").text().trim()
    } catch (jy) {
        c = 4641, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.muglerstore.co.uk")) try {
        c = 51905, a = $j(".clearfix .price .salesprice ").first().text().split("\u00a3")[1].replace(",",
            "").trim(), b = "Thierry Mugler", d = e = $j(".productinfoInner h1").text().trim()
    } catch (ky) {
        c = 51905, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.vincecamuto.co.uk")) try {
        c = 51054, a = $j(".price-box .regular-price .price").first().text().split("\u00a3")[1].replace(",", "").trim(), b = "VINCE CAMUTO", d = e = $j(".product-main-info h1").first().text().trim()
    } catch (ly) {
        c = 51054, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.vincecamuto.com")) try {
        c = 2622, a = $j('[property="v:price"]').first().text().split("$")[1].replace(",", "").trim(),
        b = "VINCE CAMUTO", d = e = $j(".prodTitle").first().text().trim()
    } catch (my) {
        c = 2622, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("moodsofnorway.com")) try {
        c = 51890, a = $j("#title-section .price.sale-new").first().text().split("$")[1].replace(",", "").trim(), b = "moods of norway", d = e = $j("#title-section .title h1").first().text().trim()
    } catch (ny) {
        c = 51890, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.halcyondays.co.uk")) try {
        g = "$", c = 51944, a = $j(".product-shop .attributes li").first().text().split("$")[1].replace(",", "").trim(), b = "HALCYON DAYS",
        d = e = $j(".product-shop .product-name h1").first().text().trim()
    } catch (oy) {
        c = 51944, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.celestineeleven.com")) try {
        c = 51947, a = $j(".product-shop .price-box .regular-price .price").first().text().split("\u00a3")[1].replace(",", "").trim(), b = "CELESTINE ELEVEN", d = e = $j(".product-name h3").first().text().trim()
    } catch (py) {
        c = 51947, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.madisonplusselect.com")) try {
        c = 51559, a = $j("#product-header #purchase .price strong").text().split("$")[1].replace(",",
            "").replace("USD", "").trim(), b = "Madison Plus Select", d = e = $j("#product-header #product-header-title #product-title").first().text().trim()
    } catch (qy) {
        c = 51559, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.shop.puma.com")) try {
        c = 51727, a = $j(".variantContent .price.singleprice div").text().split("$")[1].replace(",", "").trim(), b = "PUMA", d = e = $j(".product-name div h1").first().text().trim()
    } catch (ry) {
        c = 51727, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.margaretelizabeth.com")) try {
        c = 49853, a = $j("#detail #price-field span").text().split("$")[1].replace(",",
            "").trim(), b = "MARGARET ELIZABETH", d = e = $j("#detail h1").first().text().trim()
    } catch (sy) {
        c = 49853, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.shiseido.com")) try {
        c = 49934, a = $j(".sizeVariations div").eq(6).text().split("$")[1].replace(",", "").trim(), b = "Shiseido", d = e = $j(".productDetailHeader .productNameHeader").first().text().trim()
    } catch (ty) {
        c = 49934, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.jagjeans.com")) try {
        c = 50657, a = $j(".product-main-info .price-box .regular-price span").text().split("$")[1].replace(",",
            "").trim(), b = "JAG", d = e = $j(".title h1").first().text().trim()
    } catch (uy) {
        c = 50657, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.blackhalo.com")) try {
        c = 50699, a = $j(".product-shop.grid12-5 .price-box .regular-price span").text().split("$")[1].replace(",", "").trim(), b = "Black Halo", d = e = $j(".product-name h1").first().text().trim()
    } catch (vy) {
        c = 50699, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.halston.com")) try {
        c = 51403, a = $j(".product-shop.grid12-3 .price-box .regular-price span").text().split("$")[1].replace(",", "").trim(),
        b = "HALSTON HERITAGE", d = e = $j(".product-name h1").first().text().trim()
    } catch (wy) {
        c = 51403, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.cuddlduds.com")) try {
        c = 51424, a = $j(".product-shop .price-box .regular-price span").text().split("$")[1].replace(",", "").trim(), b = "Cuddl Duds", d = e = $j(".product-main-info .product-name h1").first().text().trim()
    } catch (xy) {
        c = 51424, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.pointzero.ca")) try {
        c = 51439, a = $j(".product-shop .product-name .price-pz strong .price").text().split("$")[1].replace(",",
            "").trim(), b = "POINT ZERO", d = e = $j(".product-name h1").first().text().trim()
    } catch (zy) {
        c = 51439, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.colehaan.com")) try {
        c = 51928, a = $j("#product-content .product-price .price-sales").text().split("$")[1].replace(",", "").trim(), b = "Cole Haan", d = e = $j(".product-name").first().text().trim()
    } catch (Ay) {
        c = 51928, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.wanderlustandco.com")) try {
        c = 50768, a = $j(".content .price .money").text().split("$")[1].replace(",", "").trim(), b = "Wanderlust and Co",
        d = e = $j(".content .title").first().text().trim()
    } catch (By) {
        c = 50768, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.mybeautifuldressing.com")) try {
        c = 50687, a = $j(".mybd_mfc_prd_price .our_price_display span").text().split("\u20ac")[0].replace(",", ".").replace(" ", "").trim(), b = "MY BEAUTIFUL DRESSING", d = e = $j(".mybd_mfc_prd_title").first().text().trim()
    } catch (Cy) {
        c = 50687, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.theoliveshoppe.com")) try {
        c = 50861, a = $j(".boxy .product-options-bottom .regular-price span").text().split("$")[1].replace(",",
            "").trim(), b = "OLIVE SHOPPE", d = e = $j(".col-main.products.float-right .page-title").first().text().trim()
    } catch (Dy) {
        c = 50861, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.mooreaseal.com")) try {
        c = 50927, a = $j(".section.product_section.clearfix .modal_price span").last().text().split("$")[1].replace(",", "").trim(), b = "MOOREA SEAL", d = e = $j(".six.columns.omega .product_name").first().text().trim()
    } catch (Ey) {
        c = 50927, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("infamouscases.com")) try {
        c = 50735, a = $j(".section.product_section.clearfix .modal_price span .current_price").text().split("EUR")[1].replace(",",
            "").trim(), b = "INFAMOUS", d = e = $j(".product_name").first().text().trim()
    } catch (Fy) {
        c = 50735, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.pamelalovenyc.com")) try {
        c = 51748, a = $j("#prod-summary .div-align .price").text().split("$")[1].replace(",", "").trim(), b = "PAMELA LOVE", d = e = $j(".div-align h1").first().text().trim()
    } catch (Gy) {
        c = 51748, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("lovenailtree")) try {
        c = 51964, a = $j("#product-details #product-prices #product-price span").text().split("$")[1].replace(",", "").trim(), b = "LOVE NAIL TREE",
        d = e = $j("#product-title h1").first().text().trim()
    } catch (Hy) {
        c = 51964, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.yumidirect.co.uk")) try {
        c = 47746, a = $j(".product-shop .price-box .price").last().text().split("$")[1].replace(",", "").trim(), b = "Yumi", d = e = $j(".product-shop .product-name h1").first().text().trim()
    } catch (Iy) {
        c = 47746, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.kupivip.ru")) try {
        g = "\u0440\u0443\u0431", c = 51523, a = $j(".b-product__description.g-fitem.oh .b-price.cr.ll .e-price.null").text().split("\u0440\u0443\u0431.")[0].replace(/[^0-9]/g,
            "").replace(" ", "").trim(), b = "KUPIVIP", d = e = $j(".e-title__brand-name a strong").clone().children().remove().end().text().trim()
    } catch (Jy) {
        c = 51523, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.quelle.ru")) try {
        g = "\u0440\u0443\u0431", c = 52099, a = $j(".productDataBox .productPriceBox .productPrice.discount").text().split(".\u2013")[0].replace(/[^0-9]/g, "").trim(), b = "QUELLE", d = e = $j(".productDataBox .h2.productName").text().trim()
    } catch (Ky) {
        c = 52099, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("3sekreta.ru")) try {
        g = "\u0440\u0443\u0431",
        c = 52039, a = $j(".l-rCol .b-price .today .val").text().split("p.")[0].replace(/[^0-9]/g, "").trim(), b = "3SEKRETA", d = e = $j(".l-rCol h1").first().text().trim()
    } catch (Ly) {
        c = 52039, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.lamoda.ru")) try {
        g = "\u0440\u0443\u0431", c = 51526, a = 0 < $j(".price.price_product .price__new").length ? $j(".price.price_product .price__new").text().split("\u0440\u0443\u0431.")[0].replace(/[^0-9]/g, "").trim() : $j(".price.price_product").text().split("\u0440\u0443\u0431.")[0].replace(/[^0-9]/g, "").trim(),
        b = "la Moda", d = e = $j(".product-card__header-link").first().text().trim()
    } catch (My) {
        c = 51526, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("topbrands.ru")) try {
        g = "\u0440\u0443\u0431", c = 51618, a = 0 < $j(".product_price_block #product_price .color_crimson").length ? $j(".product_price_block #product_price .without_my_price span").eq(1).text().split("\u0440\u0443\u0431.")[0].replace(/[^0-9]/g, "").trim() : $j(".product_price_block #product_price .my_price .color_black").text().split("\u0440\u0443\u0431.")[0].replace("\u0426\u0435\u043d\u0430:",
            "").replace(/[^0-9]/g, "").trim(), b = "TOPBRANDS", d = e = $j("#descr_container b a").first().text().trim()
    } catch (Ny) {
        c = 51618, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("shoptime.ru")) try {
        g = "\u0440\u0443\u0431", c = 52045, a = $j(".b-product_description .b-product__price-wrap .b-price .e-price").text().split("\u0440\u0443\u0431.")[0].replace(/[^0-9]/g, "").trim(), b = "SHOPTIME", d = e = $j(".e-title.b-product_title.oh a").first().text().trim()
    } catch (Oy) {
        c = 52045, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.butik.ru")) try {
        g = "\u0440\u0443\u0431",
        c = 51529, a = $j("#productParams .price").text().split("\u0440.")[0].replace(/[^0-9]/g, "").trim(), b = "BUTIK", d = e = $j("#productParams .type").first().text().trim()
    } catch (Py) {
        c = 51529, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.trendsbrands.ru")) try {
        g = "\u0440\u0443\u0431", c = 51621, a = $j("#center_top .retail-price").text().split("P")[0].replace(/[^0-9]/g, "").trim(), b = "TRENDS BRANDS", d = e = $j("#center_top .p_name h1").first().text().trim()
    } catch (Qy) {
        c = 51621, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.klimini.ru")) try {
        g =
            "\u0440\u0443\u0431", c = 52051, a = $j(".for_card_info .info_tovar .price_card").text().split("\u0440\u0443\u0431.")[0].replace(/[^0-9]/g, "").trim(), b = "Klimini", d = e = $j(".s_content h1").first().text().trim()
    } catch (Ry) {
        c = 52051, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.westwing.ru")) try {
        g = "\u0440\u0443\u0431", c = 52060, a = $j("#cartform #ourPrice strong").text().split(".-")[0].replace(/[^0-9]/g, "").trim(), b = "WESTWING", d = e = $j("#cartform h2 a").first().text().trim()
    } catch (Sy) {
        c = 52060, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.lacywear.ru")) try {
        g =
            "\u0440\u0443\u0431", c = 51532, a = $j(".change_goods_info #update_price_section .active .change_price_active").text().split("\u0440\u0443\u0431.")[0].replace(/[^0-9]/g, "").trim(), b = "LACY", d = e = $j(".top_goods_info_right_inner_left h1").first().text().trim()
    } catch (Ty) {
        c = 51532, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("brand-in-trend.ru")) try {
        g = "\u0440\u0443\u0431", c = 51535, a = $j(".blockforbuy_left .prices .newprice").first().text().split(".-")[0].replace(/[^0-9]/g, "").trim(), b = "BRAND in TREND", d = e = $j(".productnames .brand a").first().text().trim()
    } catch (Uy) {
        c =
            51535, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.proball.ru")) try {
        g = "\u0440\u0443\u0431", c = 52072, a = $j(".buy_button_panel .price_panel .price").text().split("p.")[0].replace(/[^0-9]/g, "").trim(), b = "proball", d = e = $j(".item_detail_box h1").first().text().trim()
    } catch (Vy) {
        c = 52072, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("mexx-shop.ru")) try {
        g = "\u0440\u0443\u0431", c = 51538, a = $j(".second_bg .price").text().split("\u0440\u0443\u0431.")[0].replace(/[^0-9]/g, "").trim(), b = "Mexx", d = e = $j(".second h2").first().text().trim()
    } catch (Wy) {
        c =
            51538, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("tom-tailor-online.ru")) try {
        g = "\u0440\u0443\u0431", c = 51541, a = $j(".second .price").text().split("\u0440\u0443\u0431.")[0].replace(/[^0-9]/g, "").trim(), b = "TOM TAILOR", d = e = $j(".item_h1price .item_article h2").first().text().trim()
    } catch (Xy) {
        c = 51541, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("beunited.ru")) try {
        g = "\u0440\u0443\u0431", c = 51544, a = $j(".item-info .item-info-price .other").text().split("\u0440\u0443\u0431.")[0].replace(/[^0-9]/g, "").trim(), b = "BEAUTY UNITED",
        d = e = $j(".brand-logo h1").first().text().trim()
    } catch (Yy) {
        c = 51544, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.ninobrutti.ru")) try {
        g = "\u0440\u0443\u0431", c = 52084, a = $j(".item-order .item-price strong").first().text().split("\u0440\u0443\u0431.")[0].replace(/[^0-9]/g, "").trim(), b = "nino brutti", d = e = $j(".item-name").first().text().trim()
    } catch (Zy) {
        c = 52084, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.the-alba.com")) try {
        g = "\u0440\u0443\u0431", c = 51547, a = $j(".price_block.b-clear .b-price").text().split("\u0440\u0443\u0431.")[0].replace(/[^0-9]/g,
            "").trim(), b = "ALBA", d = e = $j(".b-clear h1").first().text().trim()
    } catch ($y) {
        c = 51547, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.i-lux.ru")) try {
        g = "\u0440\u0443\u0431", c = 51550, a = $j(".actions.clear ").text().split("\u0440\u0443\u0431.")[0].replace(/[^0-9]/g, "").trim(), b = "iLUX", d = e = $j(".product h1").first().text().trim()
    } catch (az) {
        c = 51550, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.modaskidka.ru")) try {
        g = "\u0440\u0443\u0431", c = 52087, a = $j(".productDataBox .productPriceBox .productPrice.discount").text().split(".-")[0].replace(/[^0-9]/g,
            "").trim(), b = "\u041c\u043e\u0434\u0430\u0421\u043a\u0438\u0434\u043a\u0430", d = e = $j(".productNameContainer .productName").first().text().trim()
    } catch (bz) {
        c = 52087, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.artaban.ru")) try {
        g = "\u0440\u0443\u0431", c = 52090, a = $j("#fragment-1 .summa #prod_price_span").text().split("\u0440\u0443\u0431.")[0].replace(/[^0-9]/g, "").replace(",", "").trim(), b = "artaban", d = e = $j(".prod_heading h1 span").first().text().trim()
    } catch (cz) {
        c = 52090, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.kinderly.ru")) try {
        g =
            "\u0440\u0443\u0431", c = 52096, a = $j(".price-wrap-tab .price-field").text().split("\u0440\u0443\u0431")[0].replace(/[^0-9]/g, "").replace(",", "").trim(), b = "kinderly", d = e = $j(".prod-info.fl .breadcrumbs span").first().text().trim()
    } catch (dz) {
        c = 52096, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("showrooms.ru")) try {
        g = "\u0440\u0443\u0431", c = 52102, a = $j(".sr-1307-product-right .sr-1307-product-price-wrapper .sr-1307-product-price").text().split("\u0440\u0443\u0431.")[0].replace(/[^0-9]/g, "").replace(",", "").trim(), b =
            "SHOWROOMS", d = e = $j("#item-card .sr-1307-product-title").first().text().trim()
    } catch (ez) {
        c = 52102, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.fixon.ru")) try {
        g = "\u0440\u0443\u0431", c = 52105, a = $j("#tovarDesc .priceWrap .col.left .price").text().split("\u0440\u0443\u0431.")[0].replace(/[^0-9]/g, "").replace(",", "").trim(), b = "fixon", d = e = $j(".item_name").first().text().trim()
    } catch (fz) {
        c = 52105, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("hampdenclothing.com")) try {
        c = 51703, a = $j(".product-info .description .price").text().split("$")[1].replace(",",
            "").trim(), b = "HAMPDEN", d = e = $j(".description span").eq(1).text().trim()
    } catch (gz) {
        c = 51703, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("trendsport.ru")) try {
        g = "\u0440\u0443\u0431", c = 52111, a = $j(".good-info .good-price strong").text().split("p")[0].replace(/[^0-9]/g, "").replace(",", "").trim(), b = "TRENDSPORT", d = e = $j(".good-info h1").first().text().trim()
    } catch (hz) {
        c = 52111, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("kolgotoff.ru")) try {
        g = "\u0440\u0443\u0431", c = 51553, a = $j(".product-shop h1 span").eq(2).text().split("\u0440\u0443\u0431")[0].replace(/[^0-9]/g,
            "").replace(",", "").trim(), b = "Mr Kogotoff", d = e = $j(".product-name h1 span").first().text().trim()
    } catch (iz) {
        c = 51553, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("snowqueen.ru")) try {
        g = "\u0440\u0443\u0431", c = 51556, a = $j(".mainContent2 .item .price span").first().text().replace(/[^0-9]/g, "").replace(",", "").trim(), b = "\u0421\u043d\u0435\u0436\u043d\u0430\u044f \u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0430", d = e = $j(".mainContent2 .text h1").first().text().trim()
    } catch (jz) {
        c = 51556, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.svesta.com")) try {
        g =
            "\u0440\u0443\u0431", c = 52117, a = $j("#product-details #price font").eq(1).text().replace(/[^0-9]/g, "").replace(",", "").trim(), b = "SVESTA", d = e = $j("#product-details h1 a").first().text().trim()
    } catch (kz) {
        c = 52117, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("nasonpearl.ru")) try {
        g = "\u0440\u0443\u0431", c = 52120, a = $j(".item-description .item-order .item-order-totals .item-order-price").text().replace(/[^0-9]/g, "").replace(",", "").trim(), b = "nasonpearl", d = e = $j(".item-description-title h1").first().text().trim()
    } catch (lz) {
        c =
            52120, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("shop-couture.ru")) try {
        g = "\u0440\u0443\u0431", c = 52123, a = $j(".rightBlock .good-price .price-main b").text().replace(/[^0-9]/g, "").replace(",", "").trim(), b = "SHOP COUTURE", d = e = $j(".name").first().text().trim()
    } catch (mz) {
        c = 52123, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("kideria.ru")) try {
        g = "\u0440\u0443\u0431", c = 52129, a = $j(".cp-column2 .v_gi .price").clone().children().remove().end().text().replace(/[^0-9]/g, "").replace(",", "").trim(), b = "kideria", d = e = $j(".cp-column2 h1").first().text().trim()
    } catch (nz) {
        c =
            52129, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("ladylikes.ru")) try {
        g = "\u0440\u0443\u0431", c = 52135, a = $j(".GoodInfo .Price #orig_price").text().replace(/[^0-9]/g, "").replace(",", "").trim(), b = "Lady Likes", d = e = $j(".MainInfo h1").first().text().trim()
    } catch (oz) {
        c = 52135, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("bobber.ru")) try {
        g = "\u0440\u0443\u0431", c = 52138, a = $j(".fl.frik.product-info .sale-price span").text().replace(/[^0-9]/g, "").replace(",", "").trim(), b = "Bobber", d = e = $j(".fl.frik.product-info .title").first().text().trim()
    } catch (pz) {
        c =
            52138, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.itealist.ru")) try {
        g = "\u0440\u0443\u0431", c = 52153, a = $j(".iteminfo .field-item.odd .newprice").text().replace(/[^0-9]/g, "").replace(",", "").trim(), b = "itealist", d = e = $j(".iteminfo .itemtitle").text().trim()
    } catch (qz) {
        c = 52153, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.homeme.ru")) try {
        g = "\u0440\u0443\u0431", c = 52159, a = $j(".main-banner.card-banner .banner-price-block .price").first().text().replace(/[^0-9]/g, "").replace(",", "").trim(), b = "HomeMe", d = e = $j(".banner-price-block h1").first().text().trim()
    } catch (rz) {
        c =
            52159, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.mini-boutique.ru")) try {
        g = "\u0440\u0443\u0431", c = 52168, a = $j(".product-right-side .price-wrapper.fl #price-field").first().text().replace(/[^0-9]/g, "").replace(",", "").trim(), b = "Mini Boutique", d = e = $j(".page-title").first().text().trim()
    } catch (sz) {
        c = 52168, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("shop.elmonte.ru")) try {
        g = "\u0440\u0443\u0431", c = 52171, a = $j(".b-about .price-block .price-info .real-price").first().text().replace(/[^0-9]/g, "").replace(",", "").trim(),
        b = "elmonte", d = e = $j(".b-product__meta.clearfix .b-product__meta__desk.bold").first().text().trim()
    } catch (tz) {
        c = 52171, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.agnes.ru")) try {
        g = "\u0440\u0443\u0431", c = 52186, a = $j(".warenkorb_box.left .price-box .show-the-price-box .price").first().text().replace(/[^0-9]/g, "").replace(",", "").trim(), b = "AGNES", d = e = $j(".brand_name .product-name.font12px").first().text().trim()
    } catch (uz) {
        c = 52186, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("fabylonia.ru")) try {
        g = "\u0440\u0443\u0431",
        c = 52195, a = $j(".white_content .product_price_wrap .product_price .price").first().text().replace(/[^0-9]/g, "").replace(",", "").trim(), b = "Fabylonia", d = e = $j(".white_content .product_title").first().text().trim()
    } catch (vz) {
        c = 52195, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.veseloshagat.ru")) try {
        g = "\u0440\u0443\u0431", c = 52204, a = $j(".good_descr_block .price_block .goodnewprice").html().trim(), b = "\u0412\u0435\u0441\u0435\u043b\u043e \u0448\u0430\u0433\u0430\u0442\u044c", d = e = $j(".good_descr_block .goodreting .good_d_title").first().text().trim()
    } catch (wz) {
        c =
            52204, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("thevintagepearl.com")) try {
        c = 52234, a = $j(".details .product-price #product_price").html().trim(), b = "the vintage pearl", d = e = $j(".descr h1").first().text().trim()
    } catch (xz) {
        c = 52234, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("teeki.com")) try {
        c = 52261, a = $j(".summary.entry-summary .price .amount").text().split("$")[1].replace(",", "").trim(), b = "teeki", e = $j(".summary.entry-summary h1").first().text().trim(), d = $j(".product_meta .sku_wrapper .sku").text().trim()
    } catch (yz) {
        c =
            52261, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("designerintimates.com")) try {
        c = 52237, a = 0 < $j(".default-shop.detail_product_blog.detail_fix .price-box .old-price").length ? $j(".default-shop.detail_product_blog.detail_fix .price-box .special-price .price").text().split("$")[1].trim() : $j(".default-shop.detail_product_blog.detail_fix .price-box .regular-price .price").text().split("$")[1].trim(), b = "designer Intimates", d = e = $j(".default-shop.detail_product_blog.detail_fix .item.fn").first().text().trim()
    } catch (zz) {
        c =
            52237, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.luxurybarber.com")) try {
        c = 52264, a = $j(".product_desc .table_cont .prodct_price .price-box .regular-price .price").text().split("$")[1].replace(",", "").trim(), b = "LUXURY BARBER", d = e = $j(".product_desc h1").first().text().trim()
    } catch (Az) {
        c = 52264, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.koolaburra.com")) try {
        c = 52231, a = 0 < $j(".product-essential .font-sans.product-shop .special-price .price").length ? $j(".product-essential .font-sans.product-shop .special-price .price").text().split("$")[1].replace(",",
            "").trim() : $j(".product-essential .font-sans.product-shop .regular-price .price").text().split("$")[1].replace(",", "").trim(), b = "KOOLABURRA", d = e = $j(".font-serif.product-name .font-serif").first().text().trim()
    } catch (Bz) {
        c = 52231, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("shop.harpersbazaar.com")) try {
        c = 51955, a = $j(".product-shop .price-box .price").text().split("$")[1].replace(",", "").trim(), b = $j(".product-title.clearfix h1 a").text().trim(), d = e = $j(".product-shop h2").first().text().trim()
    } catch (Cz) {
        c = 51955,
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.shopdandynow.com")) try {
        c = 51970, a = $j(".description #product-variants #price-field").clone().children().remove().end().text().split("$")[1].replace(",", "").trim(), b = "SHOP DANDY", d = e = $j(".description h1").first().text().trim()
    } catch (Dz) {
        c = 51970, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.pegaston.com")) try {
        g = "\u20ac", c = 52018, a = $j("#productPageRight .details .price.pull-right ins").text().split("\u20ac")[1].replace(",", "").trim(), b = "PEGASTON", d = e = $j(".details .title").first().text().trim()
    } catch (Ez) {
        c =
            52018, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("store.hypebeast.com")) try {
        c = 52012, a = 0 < $j(".info .price ins .amount").length ? $j(".info .price ins .amount").text().split("$")[1].replace(",", "").trim() : $j(".info .price .amount").text().split("$")[1].replace(",", "").trim(), b = $j("#product-summary .brand a").text().trim(), d = e = $j("#product-summary h1").first().text().trim()
    } catch (Fz) {
        c = 52012, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.bowanddrape.com")) try {
        c = 51898, a = $j(".span6 .border_bottom #product_price_span").text().split("$")[1].replace(",",
            "").trim(), b = "BOW and DRAPE", d = e = $j(".border_bottom h3").first().text().trim()
    } catch (Gz) {
        c = 51898, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.paperstyle.com")) try {
        c = 51772, a = $j(".vr_l .formcopy .bgcolor_LightDullPurple.color_Black div").text().split("$")[1].replace(",", "").trim(), b = "paper STYLE", d = e = $j(".page-subtitle").first().text().trim()
    } catch (Hz) {
        c = 51772, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.mrp.com")) try {
        j = $j("#country_pop .selcont span").text().trim(), "Australia" == j && (c = 49315, a = $j(".atg_store_productSummaryContainer .priceRupee").text().split("AUD")[1].replace(",",
            "").trim(), b = "MRP", d = e = $j("#singlePDP .beltedDress").first().text().trim())
    } catch (Iz) {
        c = 49315, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.annaij.com")) try {
        j = $j(".form-language.cls-lang .cls-ul-lang li a").text().trim(), "DE" == j ? (g = "\u20ac", c = 51751, a = $j(".product-shop .price-box .regular-price .price").text().split("\u20ac")[1].replace(",", "").trim(), b = "ANNA INSPIRING JEWELLERY", d = e = $j(".product-name h1").first().text().trim()) : "EN" == j && (g = "\u20ac", c = 51751, a = $j(".product-shop .price-box .regular-price .price").text().split("\u20ac")[0].replace(".",
            "").replace(",", ".").trim(), b = "ANNA INSPIRING JEWELLERY", d = e = $j(".product-name h1").first().text().trim())
    } catch (Jz) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.modelcocosmetics.com")) try {
        c = 51116, a = $j(".product-right .product-shop .price-box .regular-price .price").text().split("US$")[1].replace(",", "").trim(), b = "MODEL co", d = e = $j(".product-shop .product-name").first().text().trim()
    } catch (Kz) {
        c = 51116, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.adorebeauty.com.au")) try {
        c = 50683, a = $j(".product-shop .product-detail-top .detail-price-box .regular-price .price").clone().children().remove().end().text().split("$")[1].replace(",",
            "").trim(), b = "adore beauty", d = e = $j(".product-name.gos-pdetail h1").first().text().trim()
    } catch (Lz) {
        c = 50683, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("usa.roots.com")) try {
        c = 1741, a = $j("#productdetails .pricing #priceTop .value").text().split("$")[1].replace(",", "").trim(), b = "Roots", d = e = $j("#productdetails #productName").first().text().trim()
    } catch (Mz) {
        c = 1741, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.thredup.com")) try {
        c = 52430, a = $j(".right-column .price-info .price .google-price.price span").first().text().split("$")[1].replace(",",
            "").trim(), b = $j(".item-details.selected table .brand-in-details").text().trim(), d = e = $j(".right-column h1 .left.categoryh1").first().text().trim()
    } catch (Nz) {
        c = 52430, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.chictweak.com")) try {
        c = 52646, a = $j(".pricel").first().text().split("$")[1].replace(",", "").trim(), b = "chic tweak", d = e = $j(".wrapper img").attr("alt")
    } catch (Oz) {
        c = 52646, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.simplysoles.com")) try {
        c = 44755, a = 0 < $j("#content .priceline .price .originalprice").length ? $j("#content .priceline .price").first().text().split("$")[2].replace(",",
            "").trim() : $j("#content .priceline .price").first().text().split("$")[1].replace(",", "").trim(), b = $j("#content h3.vendor").text().trim(), d = e = $j("#content h2").first().text().trim()
    } catch (Pz) {
        c = 44755, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.fdavenue.com")) try {
        c = 45427, a = $j(".ProductDetailsGrid .ProductPrice.VariationProductPrice").first().text().split("\u00a3")[1].replace(",", "").trim(), b = "FD AVENUE", d = e = $j(".ProductDetailsGrid .Value").first().text().trim()
    } catch (Qz) {
        c = 45427, d = b = e = "", a = 0
    } else if (-1 !=
        f.indexOf("secure.trinaturk.com")) try {
        c = 6055, a = $j(".product-col-2.product-detail #product-content .product-price span").first().text().split("$")[1].replace(",", "").trim(), b = "TRINA TURK", d = e = $j(".product-col-2.product-detail .product-name.mobile-hidden").first().text().trim()
    } catch (Rz) {
        c = 6055, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.finestationery.com")) try {
        c = 45746, a = $j(".body #productQuantity option").text().split("$")[1].split("2 for")[0].replace(",", "").replace("(", "").trim(), b = $j("#productBrand a span").text().trim(),
        d = e = $j("#productNumber span").eq(1).text().trim()
    } catch (Sz) {
        c = 45746, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.next.co.uk")) try {
        c = 51942, a = $j(".StyleCopy .Price").text().split("\u00a3")[1].replace(",", "").replace("(", "").trim(), b = "NEXT", d = e = $j(".StyleHeader .Title h1").text().trim()
    } catch (Tz) {
        c = 51942, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.fashionunion.com")) try {
        j = $j(".currentCurrency .currently").text().trim(), "GBP" == j && (c = 49413, g = "\u00a3"), a = $j(".atributesPrice #atrPrice .priceValue").text().split(g)[1].replace(",",
            "").replace("(", "").trim(), b = "FASHION UNION", d = e = $j(".productdetail_rhs .desc h1").text().trim()
    } catch (Uz) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.perfumejunkie.com")) try {
        c = 52391, a = $j(".flot-left .detail-price .price").text().split("$")[1].replace(",", "").replace("(", "").trim(), b = $j(".detail-left .decs-right .pt15.pb20").text().split("Designer : ")[1].split("Description")[0].trim(), d = e = $j(".decs-right h1").text().split("by ")[0].trim()
    } catch (Vz) {
        c = 52391, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.aninebing.com")) try {
        c =
            51994, a = $j(".c #product-details .price").text().split("$")[1].replace(",", "").replace("(", "").trim(), b = "ANINE BING", d = e = $j(".c #product-details h2").text().trim()
    } catch (Wz) {
        c = 51994, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.everythingbutwater.com")) try {
        c = 52426, a = $j(".top-row .price .mainprice").text().split("$")[1].replace(",", "").replace("(", "").trim(), b = "EVERYTHING BUT Water", d = e = $j(".prod-info h2").text().trim()
    } catch (Xz) {
        c = 52426, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.grafic.com")) try {
        c = 52451, a =
            0 < $j(".product-main-info .price-box .special-price .price").length ? $j(".product-main-info .price-box .special-price .price").text().split("$")[1].replace(",", "").replace("(", "").trim() : $j(".product-main-info .price-box .price").text().split("$")[1].replace(",", "").replace("(", "").trim(), b = $j(".product-shop .product-main-info .product-brand").text().trim(), d = e = $j(".product-shop .product-main-info .product-name").text().trim()
    } catch (Yz) {
        c = 52451, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.barringtongifts.com")) try {
        c =
            52441, a = $j(".product-essential .price-box .price").text().split("$")[1].replace(",", "").replace("(", "").trim(), b = "BARRINGTON", d = e = $j(".product-essential .product-name.clearfix h2").text().trim()
    } catch (Zz) {
        c = 52441, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.weddingtonway.com")) try {
        c = 49600, a = 0 < $j(".product-summary-details .sale-price").length ? $j(".product-summary-details .sale-price").html().trim() : $j(".product-summary-details .price").html().trim(), b = "WEDDINGTON WAY", d = e = $j(".product-summary-details .strong").text().trim()
    } catch ($z) {
        c =
            49600, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.laperla.com")) try {
        c = 52285, a = 0 < $j(".product-main-info .price-box .special-price .price").length ? $j(".product-main-info .price-box .special-price .price").text().split("$ ")[1].replace(",", "").replace("(", "").trim() : $j(".product-main-info .price-box .price").text().split("$ ")[1].replace(",", "").replace("(", "").trim(), b = $j(".product-main-info .product-brand").text().split("by ")[1].trim(), d = e = $j(".product-main-info .product-line").text().trim() + " " + $j(".product-main-info .product-name h1").text().trim()
    } catch (aA) {
        c =
            52285, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.sportchek.ca")) try {
        c = 52219, a = 0 < $j("#summary_price .p-v.clearance .value.price").length ? $j("#summary_price .p-v.clearance .value.price").text().split("$")[1].replace(",", "").replace("(", "").trim() : $j("#summary_price .p-v.our-price .value.price").text().split("$")[1].replace(",", "").replace("(", "").trim(), b = "SPORTCHEK", d = e = $j(".details.container #product_price_review h1").text().trim()
    } catch (bA) {
        c = 52219, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.datura.com")) try {
        c =
            52243, a = 0 < $j(".price-box .special-price .price").length ? $j(".price-box .special-price .price").text().split("$")[1].trim() : $j(".price-box .regular-price .price").text().split("$")[1].replace(",", "").replace("(", "").trim(), b = "DATURA", d = e = $j(".product-shop .product-name h1").text().trim()
    } catch (cA) {
        c = 52243, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.lemystere.com")) try {
        c = 52252, a = $j(".price-box .regular-price .price").text().split("$")[1].replace(",", "").replace("(", "").trim(), b = "Le Myst\u00e9re", d = e = $j(".product-main-info .product-name h1").text().trim()
    } catch (dA) {
        c =
            52252, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.carolehochman.com")) try {
        c = 52255, a = 0 < $j(".price-box .price.price-markdown").length ? $j(".price-box .price.green-type").text().split("$")[1].replace(",", "").trim() : $j(".price-box .regular-price.green-type .price").text().split("$")[1].replace(",", "").replace("(", "").trim(), b = "CAROLE HOCHMAN", d = e = $j(".product-main-info .product-name .product-name-part1").text().trim() + " " + $j(".product-main-info .product-name .product-name-part2").text().trim()
    } catch (eA) {
        c =
            52255, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.hatattack.com")) try {
        c = 49823, a = 0 < $j(".price-box .price.price-markdown").length ? $j(".price-box .price.green-type").text().split("$")[1].replace(",", "").trim() : $j("tr .prodPrice b").text().split("$")[1].replace(",", "").replace("(", "").trim(), b = "hatattack", d = e = $j("tbody tr .prodName").text().split("Style")[0].trim()
    } catch (fA) {
        c = 49823, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.johnstonmurphy.com")) try {
        c = 49538, a = 0 < $j(".productprice #lblPrice .productsaleprice").length ?
            $j(".productprice #lblPrice .productsaleprice").text().split("$")[1].replace(",", "").trim() : $j(".productprice #lblPrice").text().split("$")[1].replace(",", "").trim(), b = "JOHNSTON & MURPHY", d = e = $j("td #hdProdName").text().trim()
    } catch (gA) {
        c = 49538, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("store-us.hugoboss.com")) try {
        c = 51968, a = 0 < $j(".productinfo .salesprice.issalesprice").length ? $j(".productinfo .salesprice.issalesprice").text().split("$")[1].replace(",", "").trim() : $j(".variantDetails.clearfix .productinfo #hic_price .salesprice").text().split("$")[1].replace(",",
            "").trim(), e = $j(".variantDetails.clearfix .productinfo .productname.label").text().split("by")[0].trim(), b = "HUGO BOSS", d = e
    } catch (hA) {
        c = 51968, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("havenboutiquedallas.com")) try {
        c = 51718, a = 0 < $j(".eight.columns.omega .modal_price .sale .current_price").length ? $j(".eight.columns.omega .modal_price .sale .current_price").text().split("$")[1].replace(",", "").trim() : $j(".eight.columns.omega .modal_price .current_price").text().split("$")[1].replace(",", "").trim(), b = $j(".meta a").text().trim(),
        d = e = $j(".section.product_section.clearfix .eight.columns.omega .product_name").text().trim()
    } catch (iA) {
        c = 51718, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("dnafootwear.com")) try {
        c = 52439, a = 0 < $j("td .price span").length ? $j("td .price span").text().split("$")[1].replace(",", "").trim() : $j("td .price").text().split("$")[1].replace(",", "").trim(), b = $j("td .smallcatname").text().trim(), d = e = $j("td .prodname").text().trim()
    } catch (jA) {
        c = 52439, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("ylianayepez.com")) try {
        c = 51790, a = $j("tr .product-Price").text().split("$")[1].replace(",",
            "").trim(), b = "YLIANA YEPEZ", d = e = $j("tr .product-name").text().trim()
    } catch (kA) {
        c = 51790, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.olcaygulsen.com")) try {
        c = 51787, a = 0 < $j(".price.default .prijs_van").length ? $j(".info-blok .price.default").text().split("$")[2].replace(",", "").trim() : $j(".info-blok .price.default").text().split("$")[1].replace(",", "").trim(), b = "OLCAY GULSEN", d = e = $j(".detail-right h1").text().trim()
    } catch (lA) {
        c = 51787, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("shop.tenover6.com")) try {
        c = 51406, a = $j("#price #price-field").text().split("$")[1].replace(",",
            "").trim(), b = $j("#product-main-vendor h2").text().trim(), d = e = $j("#product-main-title h1").text().trim()
    } catch (mA) {
        c = 51406, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.shoptheshoebox.com")) try {
        c = 4879, a = 0 < $j("#ProductListing #content .saleprice").length ? $j("#ProductListing #content .saleprice").text().split("$")[1].replace(",", "").trim() : $j("#ProductListing #content .price").text().split("$")[1].replace(",", "").trim(), b = $j("#ProductListing #content h3.vendor").text().trim(), d = e = $j("#ProductListing #content h2").text().trim()
    } catch (nA) {
        c =
            4879, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.designsbystephene.com")) try {
        c = 6133, a = 0 < $j("#ProductListing #content .originalprice").length ? $j("#ProductListing #content .price").text().split("$")[2].replace(",", "").trim() : $j("#ProductListing #content .price").text().split("$")[1].replace(",", "").trim(), b = $j("#ProductListing #content h3.vendor").text().trim(), d = e = $j("#ProductListing #content h2").text().trim()
    } catch (oA) {
        c = 6133, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.fantasyjewelrybox.com")) try {
        c = 6132,
        a = 0 < $j("#ProductListing #content .originalprice").length ? $j("#ProductListing #content .price.productpageprice .saleprice").text().split("$")[1].replace(",", "").trim() : $j("#ProductListing #content .price").text().split("$")[1].replace(",", "").trim(), b = "fantasy jewelry box", d = e = $j("#ProductListing #content h2").text().trim()
    } catch (pA) {
        c = 6132, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.houseofharlow1960.com")) try {
        c = 4502, a = 0 < $j(".price.saleprice").length ? $j(".zone.zone-product .zone.zone-product-info .price.saleprice").text().split("$")[2].replace(",",
            "").trim() : $j(".zone.zone-product .zone.zone-product-info .price").text().split("$")[1].replace(",", "").trim(), b = "House of Harlow 1960", d = e = $j(".zone.zone-product .zone.zone-product-info h1").text().trim()
    } catch (qA) {
        c = 4502, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.antler.co.uk")) try {
        c = 49193, a = 0 < $j(".product-shop .price-box .special-price .price").length ? $j(".product-shop .price-box .special-price .price").text().split("\u00a3")[1].replace(",", "").trim() : $j(".product-shop .price-box .regular-price .price").text().split("\u00a3")[1].replace(",",
            "").trim(), b = "Antler", d = e = $j(".product-shop .product-name h1").text().trim()
    } catch (rA) {
        c = 49193, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.navabi.us")) try {
        c = 49442, a = $j(".ip_item_head .ip_price span").text().split("U")[0].replace(",", "").trim(), b = $j(".ip_item_head .ip_designer a").text().trim(), d = e = $j(".ip_item_head .ip_title").text().trim()
    } catch (sA) {
        c = 49442, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.fleurdumal.com")) try {
        c = 48836, a = 0 < $j(".info.right .price span").length ? $j(".info.right .price span").text().split("$")[2].replace(",",
            "").trim() : $j(".info.right .price").text().split("$")[1].replace(",", "").trim(), b = "fleur du mal", d = e = $j(".info.right h3").text().trim()
    } catch (tA) {
        c = 48836, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.glossybox.fr")) try {
        c = 46282, a = $j(".product-price .regular-price .price").text().split("\u20ac")[0].replace(",", ".").trim(), b = $j(".unit.regular.product-details .product-title.without-margin-top .brand-name.optional").text().trim(), d = e = $j(".unit.regular.product-details .product-title.without-margin-top .product-name.essential").text().trim()
    } catch (uA) {
        c =
            46282, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("joop.com")) try {
        "JOOP! DeutschlandDeutsch" == $j(".lang div span").text().trim() ? c = 45976 : "JOOP! \u00d6sterreichDeutsch" == $j(".lang div span").text().trim() && (c = 45979), a = $j("#sidebar .price .js_price").text().split("\u20ac")[0].replace(",", ".").trim(), b = "JOOP!", d = e = $j("#sidebar h1.h3").text().trim()
    } catch (vA) {
        c = 45976, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("shop.fiveblu.com")) try {
        c = 45955, a = $j(".box-price .price-detail .price-to").text().split("R$ ")[1].replace(",",
            ".").trim(), b = "FIVEBLU", e = $j("#product-title").text().trim(), d = $j(".informations .product-additional-item .product-additional-col2").first().text().trim()
    } catch (wA) {
        c = 45955, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.yvesdelorme.com")) try {
        c = 46021, g = "$", a = $j(".entity .content .prix span").first().text().split("$ ")[1].replace(",", "").trim(), b = "Yves Delorme", d = e = $j(".entity .content .name").text().trim()
    } catch (xA) {
        c = 46201, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.surfstitch.com")) try {
        j = $j("#store-config .button-wrapper #regionSelection #currency").text().trim(),
            "$ AUD" == j ? (c = 49198, a = 0 < $j("div.fltlt h2.fltlt .sale #salePrice").length ? $j("div.fltlt h2.fltlt .sale #salePrice").first().text().split("$")[1].split("AUD")[0].replace(",", ".").trim() : $j("div.fltlt h2.fltlt .rrp #listPrice").first().text().split("$")[1].split("AUD")[0].replace(",", ".").trim()) : "\u20ac EUR" == j && (c = 45755, a = 0 < $j("div.fltlt h2.fltlt .sale #salePrice").length ? $j("div.fltlt h2.fltlt .sale #salePrice").first().text().split("\u20ac")[0].replace(",", ".").trim() : $j("div.fltlt h2.fltlt .rrp #listPrice").first().text().split("\u20ac")[0].replace(",",
                ".").trim()), b = "Surf Stitch", d = e = $j("#product .fltrt h1").text().trim()
    } catch (yA) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.kleertjesonline.nl")) try {
        c = 46309, a = $j(".price-box .special-price .price").text().split("\u20ac")[1].replace(",", ".").trim(), b = "KLEERTJES", d = e = $j(".product-name h2").text().trim()
    } catch (zA) {
        c = 46309, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.freeshop.it")) try {
        c = 46324, a = $j(".product-price-value #product_price").text().replace(",", "").trim(), b = $j(".recensioni div").text().split("Marca:")[1].split(" ")[1].trim(),
        d = e = $j(".title h1").text().trim()
    } catch (AA) {
        c = 46324, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.outletcity.com")) try {
        c = 46321, a = $j(".product .wrapper .price .current").text().split("\u20ac")[1].replace(".", "").replace(",", ".").trim(), e = $j(".product .wrapper .pricing h1 span").text().trim(), b = $j(".product .wrapper .pricing h1").text().split(e)[0].trim(), d = e
    } catch (BA) {
        c = 46321, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("yintai.com")) try {
        g = "\u00a5", c = 52516, a = $j(".yt-price .yt-num").text().split("\uffe5")[1].trim(),
        b = $j(".p-info .p-tit-brand a").text().trim(), d = e = $j(".p-info h1").text().trim()
    } catch (CA) {
        c = 52516, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.lifevc.com")) try {
        g = "\u00a5", c = 52519, a = $j(" .shoppingInfo .salePrice em").first().text().trim(), b = $j(".shoppingInfo .sNo span").first().text().split("\uff1a")[1].trim(), d = e = $j(".sName").first().text().trim()
    } catch (DA) {
        c = 52519, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("naruko.com.cn")) try {
        g = "\u00a5", c = 52525, a = $j("#ctl00_ctl00_ContentPlaceHolder1_ContentPlaceHolder1_pnl1 span").first().next().text().trim(),
        b = "Naruko", e = $j(".productbuyinfo h2").text().trim(), d = $j(".productbuyinfo .identifier").text().split("\uff1a")[1].trim()
    } catch (EA) {
        c = 52525, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("gap.cn")) try {
        g = "\u00a5", c = 52528, a = $j("#productShowPrice").text().split("\uffe5")[1].trim(), b = "Gap", e = $j(".product-name h1").text().trim(), d = $j(".product-shop .availability").text().split(":")[1].trim()
    } catch (FA) {
        c = 52528, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.manduka.com")) try {
        c = 51453, a = $j(".details .price").text().split("$")[1].trim(),
        b = "Manduka", d = e = $j(".details #product_name").text().trim()
    } catch (GA) {
        c = 51453, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.chanluu.com")) try {
        c = 52522, a = $j(".ProductDetailsGrid").text().split("$")[1].split(" ")[0].trim(), b = "CHAN LUU", d = e = $j(".ProductDetailsGrid h1").text().trim()
    } catch (HA) {
        c = 52522, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("boxerfy.com")) try {
        c = 51913, a = $j(".ProductDetailsGrid .priceses").text().trim(), b = "BOXERFY", d = e = $j(".ProductDetailsGrid h1").text().trim()
    } catch (IA) {
        c = 51913, d = b = e = "", a = 0
    } else if (-1 !=
        f.indexOf("bethelightny.com")) try {
        c = 52537, a = $j(".variant-price span").text().split("$")[1].split(" ")[0].trim(), b = "BE THE LIGHT NEW YORK", d = e = $j(".clearfix h2").text().trim()
    } catch (JA) {
        c = 52537, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.clarisonic.com")) try {
        c = 52547, a = $j(".product_add_to_cart .price .product_price.price_sale").text().split("$")[1].trim(), b = "clarisonic", d = e = $j(".produt_title-subtitle .product_name").text().trim()
    } catch (KA) {
        c = 52547, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("2pennyblue.com")) try {
        c =
            52465, a = $j(".price-box .price").text().split("$")[1].trim(), b = "TWO PENNY BLUE", d = e = $j(".product-main-info .product-name").text().trim()
    } catch (LA) {
        c = 52465, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("hatchhub.com")) try {
        c = 51889, a = $j(".region.region-one-main .field-items .field-item.even").first().text().split("$")[1].trim(), b = "HATCH HUB", d = e = $j(".region.region-one-main .commerce-product-title").first().text().split(":")[1].trim()
    } catch (MA) {
        c = 51889, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("modifywatches.com")) try {
        c =
            51503, a = $j(".eight.columns.omega .modal_price .current_price").text().split("$")[1].trim(), b = "MODIFYWATCHES", d = e = $j(".product_name").text().trim()
    } catch (NA) {
        c = 51503, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.covetchic.com")) try {
        c = 52510, a = 0 < $j("#product-price .new-price #our_price_display").length ? $j("#product-price .new-price #our_price_display").first().text().split("\u20ac")[0].replace(",", ".").trim() : $j("#product-price #our_price_display").first().text().split("\u20ac")[0].replace(",", ".").trim(),
        b = $j("#page-header #page-title").text().trim(), d = e = $j("#product-title").text().trim()
    } catch (OA) {
        c = 52510, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.carbon38.com")) try {
        c = 52462, a = $j(".price-box .special-price .price").text().split("$")[1].trim(), b = "CARBON38", d = e = $j(".product-name h1").text().trim()
    } catch (PA) {
        c = 52462, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.aimeronline.com")) try {
        c = 50714, a = $j(".pro-desc .pro-price #discount_price").first().text().split("$")[1].trim(), b = "AIMER", d = e = $j(".pro_name.pro-name").first().text().trim()
    } catch (QA) {
        c =
            50714, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.therealreal.com")) try {
        c = 44145, a = $j("#product-description #product-price-size .row-item").first().text().split("$")[1].replace(",", "").trim(), b = "The RealReal", d = e = $j("#product-description .heading.h-xl").first().text().trim()
    } catch (RA) {
        c = 44145, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.siwydenim.com")) try {
        c = 4880, a = $j("#content .price").first().text().split("$")[1].replace(",", "").trim(), b = "siwy", d = e = $j("#content h2").first().text().trim()
    } catch (SA) {
        c = 4880,
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.525america.com")) try {
        c = 4873, a = $j("#product-information #price").first().text().split("$")[1].replace(",", "").trim(), b = "525 america", d = e = $j("#product-information h2").first().text().trim()
    } catch (TA) {
        c = 4873, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.aliceandtrixie.com")) try {
        c = 5889, a = $j(".productinfo .price").first().text().split("$")[1].replace(",", "").trim(), b = "ALICE and TRIXIE", d = e = $j(".productinfo h2").first().text().trim()
    } catch (UA) {
        c = 5889, d = b = e = "", a = 0
    } else if (-1 !=
        f.indexOf("shop.chairish.com")) try {
        c = 52513, a = $j(".eight.columns .price").first().text().split("$")[1].replace(",", "").trim(), b = $j(".product_option.contentsection a").text().trim(), d = e = $j(".eight.columns h1").first().text().trim()
    } catch (VA) {
        c = 52513, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.blanknyc.com")) try {
        c = 4142, a = 0 < $j(".zone.zone-product-content h2 .price .originalprice").length ? $j(".zone.zone-product-content h2 .price").text().split("$")[2].replace(",", "").trim() : $j(".zone.zone-product-content h2 .price").text().split("$")[1].replace(",",
            "").trim(), b = "BLANKNYC", d = e = $j(".zone.zone-product-content h2 .name").text().trim() + " - " + $j(".zone.zone-product-content h2 .color").text().trim()
    } catch (WA) {
        c = 4142, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.buttersupersoft.com")) try {
        c = 6134, a = 0 < $j("#content .price .originalprice").length ? $j("#content .price").text().split("$")[2].replace(",", "").trim() : $j("#content .price").text().split("$")[1].replace(",", "").trim(), b = "BUTTER Super Soft", d = e = $j("#content h2").text().trim()
    } catch (XA) {
        c = 6134, d = b = e = "",
        a = 0
    } else if (-1 != f.indexOf("www.glamboutique.com")) try {
        c = 44453, a = 0 < $j("#content .price .originalprice").length ? $j("#content .price").text().split("$")[2].replace(",", "").trim() : $j("#content .price").text().split("$")[1].replace(",", "").trim(), b = $j("#content .vendor").text().trim(), d = e = $j("#content h2").text().trim()
    } catch (YA) {
        c = 44453, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.madisonstyle.com")) try {
        c = 4506, a = 0 < $j("#content .price .originalprice").length ? $j("#content .price").text().split("$")[2].replace(",",
            "").trim() : $j("#content .price").text().split("$")[1].replace(",", "").trim(), b = $j("#content .vendor").text().trim(), d = e = $j("#content h2").text().trim()
    } catch (ZA) {
        c = 4506, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.rowenfootwear.com")) try {
        c = 46102, a = 0 < $j("#content .price .originalprice").length ? $j("#content .price").text().split("$")[2].replace(",", "").trim() : $j("#content .price").text().split("$")[1].replace(",", "").trim(), b = "Rowen", d = e = $j("#content h2").text().trim()
    } catch ($A) {
        c = 46102, d = b = e = "", a = 0
    } else if (-1 !=
        f.indexOf("www.yoga-clothing.com")) try {
        c = 4886, a = 0 < $j(".productinfo .price .originalprice").length ? $j(".productinfo .price").text().split("$")[2].replace(",", "").trim() : $j(".productinfo .price").text().split("$")[1].replace(",", "").trim(), b = $j("#ProductListing .vendor").first().text().trim(), d = e = $j("#ProductListing h2").first().text().trim()
    } catch (aB) {
        c = 4886, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.shopfidelitydenim.com")) try {
        c = 6135, a = 0 < $j("#productcontent .price .originalprice").length ? $j("#productcontent .price").text().split("$")[2].replace(",",
            "").trim() : $j("#productcontent .price").text().split("$")[1].replace(",", "").trim(), b = $j("#productcontent h2").text().trim(), d = e = $j("#productcontent h3").text().trim()
    } catch (bB) {
        c = 6135, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.tossdesigns.com")) try {
        c = 52597, a = 0 < $j("#content .price .originalprice").length ? $j("#content .price").text().split("$")[2].replace(",", "").trim() : $j("#content .price").text().split("$")[1].replace(",", "").trim(), b = "TOSS DESIGNS", d = e = $j("#content h2").text().trim()
    } catch (cB) {
        c = 52597,
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("shop.lesnereides.com")) try {
        c = 52603, a = $j("#buy_block .price .our_price_display").text().split(" \u20ac")[0].replace(".", "").replace(",", ".").trim(), b = "Les N\u00e9r\u00e9ides", d = e = $j("#center_column #primary_block h2").first().text().trim()
    } catch (dB) {
        c = 52603, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.tornbyronnykobo.com")) try {
        c = 4505, a = $j(".details.contentheight .price").text().split("$")[1].replace(",", "").trim(), b = "TORN BY RONNY KOBO", d = e = $j(".details.contentheight h2").first().text().trim()
    } catch (eB) {
        c =
            4505, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.wrkngtitle.com")) try {
        c = 52600, a = $j("#content .price").text().split("$")[1].replace(",", "").trim(), b = "WRKNG TITLE", d = e = $j("#content h2").first().text().trim()
    } catch (fB) {
        c = 52600, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.thebay.com")) try {
        c = 49880, a = "" !== $j(".detial_pric.priceItems .sale").text() ? $j(".detial_pric.priceItems .sale").text().split("$")[1].replace(",", "").trim() : $j(".detial_pric.priceItems #price").text().split("$")[1].replace(",", "").trim(), b = "HUDSON'S BAY",
        d = e = $j(".detial_right .detial").first().text().trim()
    } catch (gB) {
        c = 49880, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.yesstyle.com")) try {
        c = 44149, a = 0 < $j(".inside .sale.finalprice").length ? $j(".inside .sale.finalprice").text().split("$")[1].replace(",", "").trim() : $j(".inside .finalprice").text().split("$")[1].replace(",", "").trim(), b = $j(".cf .brand").first().text().trim(), d = e = $j(".cf .ptitle").first().text().trim()
    } catch (hB) {
        c = 44149, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.unique-vintage.com")) try {
        c = 4887,
        a = 0 < $j(".div3 .product_price .productSpecialPrice").length ? $j(".div3 .product_price .productSpecialPrice").text().split("$")[1].replace(",", "").trim() : $j(".div3 .product_price").text().split("$")[1].replace(",", "").trim(), e = $j(".div2 #dressdetails").first().text().split("[")[0].trim(), b = "Unique Vintage", d = $j(".div2 #dressdetails .smallText").first().text().split("#")[1].split("]")[0].trim()
    } catch (iB) {
        c = 4887, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.triton.com.br")) try {
        c = 46726, g = "R$", a = $j(".botaoComprar .price p em strong").eq(1).text().split("R$")[1].replace(",",
            ".").trim(), b = "Triton", d = e = $j("#info-box-produto .box.box-name .name").first().text().trim()
    } catch (jB) {
        c = 46726, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("loja.tufiduek.com.br")) try {
        c = 46720, g = "R$", a = $j(".finalizar .precoProduto .skuBestInstallmentValue").text().split("R$")[1].replace(",", ".").trim(), b = "TUFI DUEK", d = e = $j(".right .name").first().text().trim()
    } catch (kB) {
        c = 46720, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("loja.forum.com.br")) try {
        c = 46717, g = "R$", a = $j(".precoProduto .skuBestInstallmentValue").text().split("R$")[1].replace(",",
            ".").trim(), b = "FORUM", d = e = $j(".right .name").first().text().trim()
    } catch (lB) {
        c = 46717, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("kingdomandstate.com")) try {
        var c = 51958,
            E = $j(".summary .price ins span").text();
        "" === E && (E = $j(".summary .price span").text());
        a = E.split("$")[1].trim();
        b = "Kingdom & State";
        d = e = $j("#primary #content .product_title").text().trim()
    } catch (mB) {
        c = 51958, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("shop.davidjones.com.au")) try {
        c = 51707, a = 0 < $j(".right .price.sale").length ? $j(".right .price.sale").text().split("$")[1].split("R")[0].replace(",",
            "").trim() : $j(".right .price").text().split("$")[1].split("R")[0].replace(",", "").trim(), b = "DAVID JONES", d = e = $j(".information #catalog_link").first().text().trim()
    } catch (nB) {
        c = 51707, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.unclejeans.com")) try {
        c = 44049, a = $j(".col-right .price-box .regular-price .price").text().split("\u20ac")[0].replace(",", ".").trim(), b = "Uncle Jeans", d = e = $j(".product-name h1").first().text().trim()
    } catch (oB) {
        c = 44049, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.olehenriksen.com")) try {
        c =
            49985, a = $j("#product-cart-wrapper .column1 .product-price .variantprice").text().split("$")[1].replace(",", "").trim(), b = "OLE HENRIKSEN", d = e = $j("#product-description-wrapper h2").first().text().trim()
    } catch (pB) {
        c = 49985, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.miriale.com")) try {
        c = 51307, a = $j(".prizezone .prize").text().split("\u20ac")[1].replace(",", ".").trim(), b = "MIRIALE", d = e = $j(".descproduit.prod_details .bloc h2").first().text().trim()
    } catch (qB) {
        c = 51307, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.lakenusa.com")) try {
        c =
            51916, a = 0 < $j('.product_dealprice [itemprop="price"]').length ? $j('.product_dealprice [itemprop="price"]').text().split("$")[1].replace(",", "").trim() : $j('.product_saleprice [itemprop="price"]').text().split("$")[1].replace(",", "").trim(), b = "LAKEN", d = e = $j(".productnamecolorLARGE.colors_productname").first().text().trim()
    } catch (rB) {
        c = 51916, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.dynamiteclothing.com")) try {
        c = 51895, a = 0 < $j(".prodDetailDescr_section .prodPrice.salePrice").length ? $j(".prodDetailDescr_section .prodPrice.salePrice").text().split("$")[1].replace(",",
            "").trim() : $j(".prodDetailDescr_section .prodPrice").text().split("$")[1].replace(",", "").trim(), b = "dynamite", d = e = $j(".prodDetailDescr_section .prodName").first().text().trim()
    } catch (sB) {
        c = 51895, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.more-and-more.de")) try {
        c = 51895, a = 0 < $j(".intocart .preislabel sup").length ? $j(".intocart .preislabel").text().split("\u20ac")[1].split("*")[0].replace(",", ".").trim() : $j(".intocart .preislabel").text().split("\u20ac")[0].split("*")[0].replace(",", ".").trim(), b = "MORE & MORE",
        d = e = $j(".details_infos .headline").first().text().trim()
    } catch (tB) {
        c = 51895, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.wacoal-america.com")) try {
        c = 50794, a = 0 < $j('[itemprop="offerDetails"] .price ins').length ? $j('[itemprop="offerDetails"] .price ins').text().split("$")[1].replace(",", "").trim() : $j('[itemprop="offerDetails"] .price').text().split("$")[1].replace(",", "").trim(), b = "Wacoal", d = e = 0 < $j('.product-display .product-detail h1 [style="color:#D16587;"]').length ? $j(".product-display .product-detail h1").html().split("<br>")[0].trim() :
            $j(".product-display .product-detail h1").text().trim()
    } catch (uB) {
        c = 50794, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.oneida.com")) try {
        c = 52690, a = 0 !== $j(".add-to-cart .qty-wrapper").length ? 0 < $j(".price-box .line-through-price").length ? $j(".price-box .regular-price .price").text().split("$")[2].replace(",", "").trim() : $j(".price-box .regular-price .price").text().split("$")[1].replace(",", "").trim() : 0 < $j("#item1 .middle .price .old-price").length ? $j("#item1 .middle .price .price").text().split("$")[2].replace(",",
            ".").trim() : $j("#item1 .middle .price").text().split("\u20ac")[1].split("*")[0].replace(",", ".").trim(), b = "ONEIDA", d = e = $j(".product-name h1").first().text().trim()
    } catch (vB) {
        c = 52690, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.jaycompanies.com")) try {
        c = 52453, a = 0 < $j(".summary .price del .amount").length ? $j(".summary .price ins .amount").text().split("$")[1].replace(",", "").trim() : $j(".summary .price .amount").text().split("$")[1].replace(",", "").trim(), b = "THE JAY COMPANIES", e = $j(".clearfix .margin.clearfix h1").first().text().trim(),
        d = $j(".product_meta .sku_wrapper .sku").first().text().trim()
    } catch (wB) {
        c = 52453, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.sierratradingpost.com")) try {
        c = 52794, a = $j(".priceStory .salePrice").text().split("$")[1].replace(",", "").trim(), b = "SIERRA TRADING POST", d = e = $j("#addToCartForm .linkHeavySection").first().text().trim()
    } catch (xB) {
        c = 52794, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.c21stores.com")) try {
        c = 52592, a = $j(".wl-price.wl-cf .price.price-sale").text().split("$")[1].replace(",", "").trim(), b = "Century21",
        d = e = $j('.wl-cf [itemprop="name"]').first().text().trim()
    } catch (yB) {
        c = 52592, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.shopinstyleessentials.com")) try {
        c = 52807, a = $j(".price-box .price").text().split("$")[1].replace(",", "").trim(), b = "InStyle Essentials", d = e = $j(".single-product .left h3").first().text().trim()
    } catch (zB) {
        c = 52807, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.mattbernson.com")) try {
        c = 52799, a = $j("#productDetails .product-price .sqs-money-native").text().replace(",", "").trim(), b = "MATT BERNSON", d = e =
            $j("#productDetails .product-title").first().text().trim()
    } catch (AB) {
        c = 52799, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("insideandoutcosmetics.com")) try {
        c = 52795, a = $j("#description_tab #price p").text().split("$")[1].replace(",", "").trim(), b = "INSIDE AND OUT", d = e = $j(".clearfix #main .title").first().text().trim()
    } catch (BB) {
        c = 52795, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.nautica.com")) try {
        c = 4885, a = $j(".product-price .price-sales").text().split("$")[1].replace(",", "").trim(), b = "NAUTICA", d = e = $j(".productBody .product-name").first().text().trim()
    } catch (CB) {
        c =
            4885, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.justfab.com")) try {
        c = 52446, a = $j("#assets #description span.heavy").text().split("$")[1].replace(",", "").trim(), b = "JUSTFAB", d = e = $j("#description .name").first().text().trim()
    } catch (DB) {
        c = 52446, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("palomasnest.com")) try {
        c = 52444, a = 0 < $j("#detail .price .was-price").length ? $j("#detail .price").text().split("$")[1].split("was")[0].replace(",", "").trim() : $j("#detail .price").text().split("$")[1].replace(",", "").trim(), b = "PALOMA'S NEST",
        d = e = $j('#detail [itemprop="name"]').first().text().trim()
    } catch (EB) {
        c = 52444, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.bridgeandburn.com")) try {
        c = 52870, a = $j(".purchase .price").text().split("$")[1].replace(",", "").trim(), b = "BRIDGE & BURN", d = e = $j(".span6 .title").first().text().trim()
    } catch (FB) {
        c = 52870, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.20jeans.com")) try {
        c = 52823, a = $j(".info-block .product-info .price.pull-right span").text().split("$")[1].replace(",", "").trim(), b = "20Jeans", d = e = $j(".product-info .h1.name.pull-left").first().text().trim()
    } catch (GB) {
        c =
            52823, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.sweetandspark.com")) try {
        c = 52618, a = $j(".product_body.clearfix .content .price").text().split("$")[1].replace(",", "").trim(), b = "sweet & spark", e = $j(".product_body.clearfix .content .title").first().text().trim(), d = $j(".product_body.clearfix .content h5").first().text().split(":")[1].trim()
    } catch (HB) {
        c = 52618, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("aplusrstore.com")) try {
        c = 6082, a = $j("#price #displayprice").text().split("$")[1].replace(",", "").trim(), b = $j("#content .designer-title").first().text().trim(),
        d = e = $j("#content .product-title").first().text().trim()
    } catch (IB) {
        c = 6082, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("numeproducts.com")) try {
        c = 52803, a = $j(".product-shop .price-box .regular-price .price").text().split("$")[1].replace(",", "").trim(), b = "NuMe", d = e = $j(".product-name h1").first().text().trim()
    } catch (JB) {
        c = 52803, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("shop.bikini.com")) try {
        c = 52750, a = $j("#content #product-col .price").text().split("$")[1].replace(",", "").trim(), b = "BIKINI.COM", d = e = $j("#content #product-col h1").first().text().trim()
    } catch (KB) {
        c =
            52750, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.fredericks.com")) try {
        c = 52660, 0 < $j(".productdetails .price .red").length ? (a = $j(".productdetails .price .red").text().split("$")[1].replace(",", "").trim(), e = $j(".productdetails h1").text().split("Was")[0].trim()) : (a = $j(".productdetails .price").text().split("$")[1].replace(",", "").trim(), e = $j(".productdetails h1").text().split("$")[0].trim()), b = "frederick's of Hollywood", d = e
    } catch (LB) {
        c = 52660, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("sqnsport.com")) try {
        c = 52762,
        a = $j(".price .amount").text().split("$")[1].replace(",", "").trim(), b = "SQN sport", d = e = $j(".summary .product_title.entry-title").first().text().trim()
    } catch (MB) {
        c = 52762, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.crasqi.com")) try {
        c = 52651, a = $j(".product-shop .price-box .price").text().split("$")[1].replace(",", "").trim(), b = "crasqi", d = e = $j(".product-name h1").text().trim()
    } catch (NB) {
        c = 52651, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.knotstandard.com")) try {
        c = 52726, a = $j(".medium-5.columns .price span").text().replace(",",
            "").trim(), b = "Knot Standard", d = e = $j(".medium-5.columns h1").first().text().trim()
    } catch (OB) {
        c = 52726, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.vooberlin.com")) try {
        j = $j(".currency-selector.switcher select option:selected").text().trim(), "EUR" == j && (c = 52549, a = $j("#product-purchase .price-box .price").text().split("\u20ac")[1].replace(",", "").trim(), b = "VooStore", d = e = $j(".product-name .name").text().trim())
    } catch (PB) {
        c = 52549, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.brika.com")) try {
        c = 52880, a = $j(".regular-price .price").text().split("$")[1].replace(",",
            "").trim(), b = "BRIKA", d = e = $j(".product-name h1").first().text().trim()
    } catch (QB) {
        c = 52880, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("nlyman.com")) try {
        j = $j(".dropdown .dropdown-toggle span").attr("class").trim(), "flag-norway" == j ? (g = "kr", c = 52792, a = $j(".productpage-right .product-price .price-now").text().split("kr")[0].trim()) : "flag-denmark" == j ? (g = "kr", c = 52788, a = $j(".productpage-right .product-price .price-now").text().split("kr")[0].trim()) : "flag-finland" == j ? (g = "\u20ac", c = 52820, a = $j(".productpage-right .product-price .price-now").text().split("\u20ac")[0].trim()) :
            "flag-sweden" == j && (g = "kr", c = 52784, a = $j(".productpage-right .product-price .price-now").text().split("kr")[0].trim()), b = "NLY MAN", d = e = $j(".product-title h2 .title-product").text().trim()
    } catch (RB) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("jaxonhome.com")) try {
        c = 52864, a = $j(".purchase .price").text().split("$")[1].replace(",", "").trim(), b = "JAXON", d = e = $j(".span6 .title").first().text().trim()
    } catch (SB) {
        c = 52864, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.zanui.com.au")) try {
        c = 44549, a = $j(".prd-right .price-info .sale-price .sale-price-value").text().split("$")[1].replace(",",
            "").trim(), b = "Zanui", d = e = $j(".title-bar h1").text().trim()
    } catch (TB) {
        c = 44549, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.ashabyadm.com")) try {
        c = 50750, a = $j(".regular-price .price").text().split("$")[1].replace(",", "").trim(), b = "ASHA", d = e = $j(".top_title h1").first().text().trim()
    } catch (UB) {
        c = 50750, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.lilogi.com")) try {
        c = 52888, a = 0 < $j(".price .special-price").length ? $j(".price .special-price .price").text().split("$")[1].replace(",", "").trim() : $j(".price .regular-price .price").text().split("$")[1].replace(",",
            "").trim(), b = $j(".product_brand_box .product_brand").first().text().trim(), d = e = $j(".product_brand_box .product_name").first().text().trim()
    } catch (VB) {
        c = 52888, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.chicpeek.com")) try {
        c = 50582, a = $j(".description .price.proxima").text().split("$")[1].replace(",", "").replace("VIP", "").trim(), b = "Chic Peek", d = e = $j(".description h2").text().trim()
    } catch (WB) {
        c = 50582, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("rahrahdesigns.com")) try {
        c = 52888, a = $j(".smooth .product-price").text().split("$")[1].replace(",",
            "").trim(), b = "rahrah", d = e = $j("#product-title h1").first().text().trim()
    } catch (XB) {
        c = 52888, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.dearkates.com")) try {
        c = 52992, a = $j("#product-information #product-title span").text().split("$")[1].replace(",", "").trim(), b = "DEAR KATE", d = e = $j("#product-title").clone().children().remove().end().text().trim()
    } catch (YB) {
        c = 52992, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("ateaoceanie.com")) try {
        c = 51088, g = "\u00a3", a = $j(".regular-price .price").text().split("\u00a3")[1].replace(",",
            "").trim(), b = "ATEA", d = e = $j(".product-info h1").first().text().trim()
    } catch (ZB) {
        c = 51088, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("bottletop.org")) try {
        c = 47711, a = $j(".product-price .money").text().split("\u00a3")[1].split("GBP")[0].replace(",", "").trim(), e = $j("#product-description .dark-block").text().trim(), b = "BOTTLETOP", d = e
    } catch ($B) {
        c = 47711, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.designpass.com")) try {
        c = 52730, a = $j(".price-box .regular-price .price").text().split("\u00a3")[1].replace(",", "").trim(), e = $j('.product-shop .product-name.clear [itemprop="name"]').text().trim(),
        b = "DESIGN PASS", d = e
    } catch (aC) {
        c = 52730, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("westwardleaning.com")) try {
        c = 46009, a = $j(".col-md-3.col-xs-12.right-col #product-price .product-price").text().split("$")[1].replace(",", "").trim(), b = "WESTWARD LEANING", d = e = $j(".col-md-3.col-xs-12.right-col h1").first().text().trim()
    } catch (bC) {
        c = 46009, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("bymalenebirger.com")) try {
        -1 != $j("#change-country").text().indexOf("United Kingdom") ? (c = 50618, g = "\u00a3", a = $j("#item-info .item-price-data .price").text().split("\u00a3")[1].trim(),
            b = "Malene Birger", e = $j("#item-info .item-info-name .item-name").text().trim(), d = $j("#item-info .item-sku").text().trim()) : -1 != $j("#change-country").text().indexOf("Danmark") ? (c = 49916, g = "DKK", a = $j("#item-info .item-price-data .price").text().split("DKK")[0].replace(",", "").trim(), b = "Malene Birger", e = $j("#item-info .item-info-name .item-name").text().trim(), d = $j("#item-info .item-sku").text().trim()) : -1 != $j("#change-country").text().indexOf("Sweden") && (c = 51087, g = "SEK", a = $j("#item-info .item-price-data .price").text().split("SEK")[0].replace(",",
            "").trim(), b = "Malene Birger", e = $j("#item-info .item-info-name .item-name").text().trim(), d = $j("#item-info .item-sku").text().trim())
    } catch (cC) {
        d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.ganni.com")) try {
        j = $j("#CountrySelection a img").attr("src").split("/")[3].replace("?type=Image", "").trim(), c = 52831, "en.gif" == j ? (g = "\u20ac", a = $j("#productDetails #productPrice .formText.retailPrice").text().trim(), b = "Ganni", d = e = $j("#productDescription span").eq(2).text().trim()) : "da.gif" == j && (g = "\u20ac", a = $j("#productDetails #productPrice .formText.retailPrice").text().replace(",",
            ".").trim(), b = "Ganni", d = e = $j("#productDescription span").eq(2).text().trim())
    } catch (dC) {
        c = 52831, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.flightclub.com")) try {
        c = 52734, a = $j(".span4.product-shop .price-box .regular-price .price").text().split("$")[1].trim(), b = "FLIGHT CLUB", d = e = $j(".mb-padding.product-name h1").text().trim()
    } catch (eC) {
        c = 52734, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("shop.mrkate.com")) try {
        c = 52619, a = $j(".details.border .module.header .price").text().split("$")[1].trim(), b = "Mr.Kate", d = e = $j(".details.border .module.header .title").text().trim()
    } catch (fC) {
        c =
            52619, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.beautybox5shop.com")) try {
        c = 49291, a = $j(".span6 #price-field").text().split("$")[1].trim(), b = "beautybox five", d = e = $j(".span6 .title").text().trim()
    } catch (gC) {
        c = 49291, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.uk.eden-park.com")) try {
        c = 6213, a = $j("#prodInfos_layer #prodPrice_layer #priceProduct span").first().text().split("\u00a3")[1].trim(), b = "Eden Park", d = e = $j("#prodName").text().trim()
    } catch (hC) {
        c = 6213, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.eden-park.fr")) try {
        c =
            44019, a = $j("#prodInfos_layer #prodPrice_layer #priceProduct #prixpromo3164").text().split("\u20ac")[0].trim(), b = "Eden Park", d = e = $j("#prodName").text().trim()
    } catch (iC) {
        c = 44019, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.lahalle.com")) try {
        c = 50883, a = $j(".product-shop .lignes-prix .tarif .price.prix").clone().children().remove().end().text().split("\u20ac")[0].trim(), b = "LA HALLE", d = e = $j(".descriptif-produit #title_fp h1").text().trim()
    } catch (jC) {
        c = 50883, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.sanmarina.fr")) try {
        c =
            50883, a = $j(".product-shop .prix-produit .price .price.prix").text().split("\u20ac")[0].replace(",", ".").trim(), b = "SAN MARINA", d = e = $j(".color-label .no-link").text().trim()
    } catch (kC) {
        c = 50883, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.avenuedelaglisse.com")) try {
        c = 45787, a = $j(".fa_bloc-details .bloc-ajout .fa_prix-unitaire.blk_prix_unitaire").text().split("\u20ac")[0].replace(",", ".").trim(), b = "Avenue del la Glisse", d = e = $j(".fa_designation").text().trim()
    } catch (lC) {
        c = 45787, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.brandalley.fr")) try {
        c =
            44244, a = $j("#detailLeftContent .fiche_prix_vente").text().split("\u20ac")[0].replace(",", ".").trim(), b = "BrandAlley", d = e = $j(".marqueTitre span").text().trim()
    } catch (mC) {
        c = 44244, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.barefoottess.com")) try {
        c = 51892, a = $j(".product-options-bottom .price-box .regular-price span").text().split("$")[1].replace(",", " ").trim(), b = "Barefoot Tess", d = e = $j(".product-name h1").text().trim()
    } catch (nC) {
        c = 51892, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.bebeaffaires.com")) try {
        c = 46666,
        a = $j(".generalites .generalites_prix b").text().split("\u20ac")[0].replace(",", ".").trim(), b = "Bebe Affairs", d = e = $j(".generalites h1 b").text().trim()
    } catch (oC) {
        c = 46666, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.renttherunway.com")) try {
        c = 4022, a = $j(".product-overview .product-prices .price-rental.price-box span").text().replace(",", "").trim(), b = "RENT THE RUNWAY", d = e = $j(".product-designer h1").text().trim()
    } catch (pC) {
        c = 4022, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.dermstore.com")) try {
        c = 1221, a = $j(".reviewBlock .text14.gray2 strong b").text().split("$")[1].replace(",",
            "").trim(), b = "DERMSTORE", d = e = $j("h2").text().trim()
    } catch (qC) {
        c = 1221, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.generalpants.com.au")) try {
        c = 53147, a = $j(".prod .big-price span").text().split("$")[1].replace(",", "").trim(), b = "General Pants Co", d = e = $j(".productTitle h2").text().trim()
    } catch (rC) {
        c = 53147, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.spiritbeautylounge.com")) try {
        c = 52396, a = $j(".prod_price #product_price").text().split("$")[1].replace(",", "").trim(), b = "Spirit Beauty Lounge", d = e = $j(".prod_title").clone().children().remove().end().text().trim()
    } catch (sC) {
        c =
            52396, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.aolai.com")) try {
        g = "\u00a5", c = 53212, a = $j("#ol-info-price i").first().text().trim(), b = "\u5c1a\u54c1\u5965\u83b1", e = $j("#ol-info-wp h1").text().trim(), d = $j("#ol-info-productid").text().trim()
    } catch (tC) {
        c = 53212, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.nop.cn")) try {
        g = "\u00a5", c = 53188, a = $j(".pdpricecur").text().replace(/[^0-9\.]/g, " ").split(" ")[1], b = "NOP", e = $j(".pdname h1").text().trim(), d = $j(".pdid").text().replace(/[^0-9]/g, "")
    } catch (uC) {
        c = 53188, d = b = e = "",
        a = 0
    } else if (-1 != f.indexOf("www.onlyts.cn")) try {
        g = "\u00a5", c = 53192, a = $j("#product_sale_price").text().replace(/[^0-9\.]/g, ""), b = "TS", e = $j("#product_title").text().trim().split("\n")[1].trim(), d = $j("#product_sku").text().trim()
    } catch (vC) {
        c = 53192, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.handu.com")) try {
        g = "\u00a5", c = 53196, a = $j(".promote_price").text().replace(/[^0-9\.]/g, ""), b = "\u97e9\u90fd\u8863\u820d", e = $j(" .product_name").text().trim(), d = $j(" .code").text().trim()
    } catch (wC) {
        c = 53196, d = b = e = "", a = 0
    } else if (-1 !=
        f.indexOf("eshakti.com")) try {
        c = 52E3, a = $j("#ctl00_ContentPlaceHolder1_lblPrice").text().replace("$", ""), b = "eShakti", e = $("#ctl00_ContentPlaceHolder1_lblProductName").text(), d = $("#ctl00_ContentPlaceHolder1_lblProductId").text()
    } catch (xC) {
        c = 52E3, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.windsorstore.com")) try {
        c = 53012, a = $j("#item-info .price .priceamt").text().split("$")[1].replace(",", "").trim(), b = "windsor", d = e = $j("#item-info h1").first().text().trim()
    } catch (yC) {
        c = 53012, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.fortnumandmason.com")) try {
        c =
            44483, a = $j(".product-info .price span").text().split("\u00a3")[1].replace(",", "").trim(), b = "FORTNUM AND MASON", d = e = $j(".product-info h1").first().text().trim()
    } catch (zC) {
        c = 44483, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("downeastbasics.com")) try {
        c = 53132, a = $j(".prod-detail-rt .prod-detail-price .prod-detail-cost .prod-detail-cost-value").text().split("$")[1].replace(",", "").trim(), b = "DOWNEAST", d = e = $j(".prod-detail-rt h3").first().text().trim()
    } catch (AC) {
        c = 53132, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.ofmercer.com")) try {
        c =
            53136, a = $j("#product-description #product-price .money").text().split("$")[1].replace(",", "").trim(), b = "OF MERCER", d = e = $j("#product-description h1").clone().children().remove().end().text().trim()
    } catch (BC) {
        c = 53136, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("www.iamitalian.com")) try {
        c = 52835, a = $j("#pb-left-column #our_price_container .price").text().split("\u20ac")[0].replace(",", ".").trim(), b = "I AM ITALIAN", d = e = $j("#pb-left-column h1").first().text().trim()
    } catch (CC) {
        c = 52835, d = b = e = "", a = 0
    } else if (-1 != f.indexOf("store.friedaandnellie.com")) try {
        c =
            53184, a = $j(".product-shop .price-box .price").text().split("$")[1].replace(",", "").trim(), b = "frieda and nellie", d = e = $j(".product-shop .product-name h1").first().text().trim()
    } catch (DC) {
        c = 53184, d = b = e = "", a = 0
    } else z = !0;
    if ("undefined" == typeof a || !a) a = 0;
    if ("undefined" == typeof b || !b) b = "";
    if ("undefined" == typeof e || !e) e = "";
    0 === a && (z = !0);
    0 === c && (z = !0);
    var w;
    if (!z)
        if (null === d || "undefined" == typeof d) z = !0;
        else {
            $j("#rewardStyleBase").remove();
            var C = document.createElement("style"),
                G = document.createTextNode("#rewardStyle iframe { display: block!important; width: 100%; height: 100%; background-color: transparent !important; overflow: hidden; }");
            C.type = "text/css";
            C.styleSheet ? C.styleSheet.cssText = G.nodeValue : C.appendChild(G);
            h.appendChild(C);
            show_link_ninja();
            show_preloader();
            "undefined" == typeof g && (g = "");
            "undefined" == typeof l && (l = "");
            w = new easyXDM.Socket({
                remote: "http://" + host + ".rewardstyle.com/api/pinloader?u=" + encodeURIComponent(location.href) + "&a=" + encodeURIComponent(c) + "&s=" + encodeURIComponent(d) + "&d=" + encodeURIComponent(b) + "&n=" + encodeURIComponent(e) + "&p=" + encodeURIComponent(a) + "&cu=" + encodeURIComponent(g) + "&cid=" + encodeURIComponent(l) +
                    "&url=http://" + host + ".rewardstyle.com/api/pin",
                swf: "http://" + host + ".rewardstyle.com/styles/js/easyXDM-2.4.15.118/easyxdm.swf",
                container: "rewardStyle",
                onMessage: function (a) {
                    if ("close" == a) jQuery.isFunction($j) ? $j("#rewardStyleBase").remove() : $("#rewardStyleBase").remove();
                    else if ("show" == a) remove_preloader(), $j("#rewardStyle").fadeIn(function () {
                        w.postMessage("live")
                    });
                    else if ("grab" == a) {
                        var d = 0,
                            b = [],
                            a = "",
                            e;
                        if (911 == c) b.push($j("#main-image").css("background-image").slice(4, -1)), b[0].h = $j("#main-image").css("height"),
                        b[0].w = $j("#main-image").css("width");
                        else if (981 == c) b.push(ItemGroupJSON.CurrentItem.LargeImageURL), b[0].h = 350, b[0].w = 350;
                        else if (1021 == c) 0 < $j("#productOptionsGroup").length ? (b.push($j("#productOptionsGroup a img").attr("src")), $j("#productOptionsGroup a img").not(":first").each(function () {
                            b.push($(this).attr("src"))
                        })) : (xx = "http://s7d5.scene7.com/is/image/Ulta/", yy = $j("#skuId-hid").val(), b.push(xx + yy)), "undefined" === typeof b[0] && 0 < $j(".mobile-img-container").length && (b = [], b.push($j(".mobile-img-container img").attr("src")),
                            $j(".mobile-img-container img").not(":first").each(function () {
                                b.push($(this).attr("src"))
                            })), b[0].h = 400, b[0].w = 400;
                        else if (49385 == c) b.push(config.noFlashImageUrl), b[0].h = 426, b[0].w = 426;
                        else if (51523 == c) b.push($j(".e-pic a #pinmeImg").attr("src")), b[0].h = 300, b[0].w = 450;
                        else if (51553 == c) $j(".product-img-box .large-image").attr("style").split("('")[1].replace("')", "").replace(";", "").trim(), b[0].h = 240, b[0].w = 178;
                        else if (52446 == c) b.push($j("#zoom_shoes_1 a").attr("href").trim()), b[0].h = 378, b[0].w = 505;
                        else if (46132 == c) b.push($j(".column.one_half.full_row.hero_image").css("background-image").replace("url(", "").replace(")", "")), b[0].h = 638, b[0].w = 880;
                        else if (44145 == c) b.push("https:" + $j(".zoomPad img").attr("src")), b[0].h = 404, b[0].w = 306;
                        else if (6083 == c) b.push(mrUserCustom.imageSrc), b[0].h = 450, b[0].w = 480;
                        else if (4953 == c) b.push($j("#productDetailsContainer #zoom_parent img").attr("src")), b[0].h = 445, b[0].w = 222;
                        else if (3022 == c) b.push($j("#altviews img").attr("src").split("?")[0]), b[0].h = 100, b[0].w = 65;
                        else if (49424 == c) {
                            var a = "http://www.aldoshoes.com/",
                                f = img_ColorID;
                            e = eval("img_big_1_" + f);
                            f = eval("img_path_" + f);
                            b.push(a + f + e);
                            b[0].h = 400;
                            b[0].w = 400
                        } else 4868 == c ? (b.push(fluid.retail.demandware.DisplayIntegrator.prototype.fluidDisplayConfig.noFlashImageUrl), b[0].h = 426, b[0].w = 426) : 5923 == c ? (b.push("http://wefashion.scene7.com/is/image/" + imageName + "_1?$WEImageProductDetail$"), b[0].h = 495, b[0].w = 330) : 1921 == c ? (b.push("http://s7d2.scene7.com/is/image/" + imageName), b[0].h = 464, b[0].w = 556) : 45196 == c ? (b.push("http://www.boutique.carnetdevol.com" +
                            $j("#flash1 img").attr("src").replace(".", "").trim()), b[0].h = 450, b[0].w = 450) : 1751 == c ? (b.push($j("#zoomViewerContainer img").attr("src").split("?")[0]), b[0].h = 533, b[0].w = 400) : 2682 == c ? (b.push($j("div.img-wrap img").attr("src")), $j("div.views ul li:not([class]) img").each(function () {
                            b.push($j(this).attr("src"))
                        }), b[0].h = 350, b[0].w = 250) : 4462 == c ? (b.push($j("meta").eq(6).attr("content")), b[0].h = 285, b[0].w = 228) : 3252 == c ? (b.push($j("#prod-img img").attr("src")), b[0].h = 284, b[0].w = 227) : 44141 == c ? (b.push($j("tbody tbody tbody tbody tbody tbody tbody tbody tr td img").attr("src").trim()),
                            b[0].h = 350, b[0].w = 235) : 4853 == c ? (a = "http:" + $j(".view-image-enlarge").attr("src"), b.push(a.trim()), b[0].h = 350, b[0].w = 250) : 4530 == c ? (b.push($j("#pd_prd_img").text().replace('strLarge = "', "").split("?")[0]), b[0].h = 369, b[0].w = 275) : 44369 == c ? (b.push("http://www.swarovski.com/" + $j(".active img").attr("src")), b[0].h = 80, b[0].w = 80) : 6016 == c ? (b.push("http://www.swarovski.com/" + $j(".active img").attr("src")), b[0].h = 80, b[0].w = 80) : 44378 == c ? (b.push("http://www.swarovski.com/" + $j(".active img").attr("src")), b[0].h =
                            80, b[0].w = 80) : 6147 == c ? (b.push($j("#ImageSwitch img").attr("src")), b[0].h = 250, b[0].w = 250) : 2972 == c ? (b.push($j("img[itemprop=image]").attr("src")), b[0].h = $j("img[itemprop=image]").css("height"), b[0].w = $j("img[itemprop=image]").css("width")) : 5837 == c ? (b.push($j('meta[property="og:image"]').attr("content")), b[0].w = 500, b[0].h = 500) : 4564 == c ? ($j(".imageThumb").each(function () {
                            b.push($j(this).attr("src").replace(/ /g, "-"))
                        }), b[0].h = 350, b[0].w = 350) : 44593 == c ? ($j(".imageThumb").each(function () {
                            b.push($j(this).attr("src").replace(/ /g,
                                "-"))
                        }), b[0].h = 350, b[0].w = 350) : 4533 == c ? (b.push($j("img#item_imgMain").attr("src")), b[0].h = $j("img#item_imgMain").attr("height"), b[0].w = $j("img#item_imgMain").attr("width"), 0 < $j("ul#altViews").length && $j("ul#altViews").find("li").each(function () {
                            b.push($(this).attr("altsrc"))
                        })) : 6056 == c ? (b.push($j("div.stage img").attr("src")), b[0].h = 435, b[0].w = 328) : 6222 == c ? (b.push($j('[name="flashvars"]').val().split("images=")[1]), b[0].h = $j("img").css("height"), b[0].w = $j("img").css("width")) : 3222 == c || 4722 == c || 5814 ==
                            c ? 0 < $j(".newskin object img").length && (b.push($j(".newskin object img").attr("src")), b[0].h = 528, b[0].w = 396) : 2692 == c ? (0 < $j(".zoomProductThumbnail").length ? $j(".zoomProductThumbnail").each(function () {
                                var a = $j(this).attr("onclick"),
                                    a = a.split("'")[1];
                                b.push(a)
                            }) : (a = $j(".img-wrap img").attr("src"), b.push(a)), b[0].h = 350, b[0].w = 250) : 43965 == c || 43968 == c ? (b.push(ess.productJSON.mainImageURL), i = 0, $j(ess.productJSON.alternateViews).each(function () {
                                    b.push(ess.productJSON.alternateViews[i].enhancedImageURL);
                                    i++
                                }),
                                b[0].h = 350, b[0].w = 350) : 2952 == c ? (productImages.color_none_1 ? b.push("http://" + window.location.hostname + a + productImages.color_none_1.main) : b.push("http://" + window.location.hostname + a + productImages.color_None_1.main), b[0].h = 350, b[0].w = 350) : 6086 == c ? (b.push($j('[property="og:image"]').attr("content")), b[0].h = 350, b[0].w = 350) : 43924 == c ? (b.push($j('img[name="viewImage"]').attr("src")), b[0].h = 350, b[0].w = 350) : 4616 == c ? (b.push($j('[style="cursor:hand;cursor:pointer;"]:not([name])').attr("src")), b[0].h = 350, b[0].w =
                                350) : 5914 == c ? (0 < $j(".pdp-main-image #ContentPlaceHolder1_MainImage").length ? b.push("http://www.truereligionbrandjeans.com/" + $j(".pdp-main-image #ContentPlaceHolder1_MainImage").attr("src")) : b.push($j(".zoomContainer .zoomWindowContainer div").attr("style").split(" ")[17].replace("url(", "").replace(");", "").trim()), b[0].h = 514, b[0].w = 400) : 44491 == c ? (b.push(zx_photo), b[0].h = 570, b[0].w = 455) : 44058 == c ? (b.push($("#homeImgBanner img").attr("src").split("?")[0]), b[0].h = 400, b[0].w = 400) : 44819 == c ? (b.push($j('img[itemprop="image"]').attr("src")),
                                b[0].h = 450, b[0].w = 600) : 46517 == c ? (b.push($j("#ogImage").attr("content").split("?")[0]), b[0].h = 795, b[0].w = 556) : 44344 == c ? (e = $j("#zoom_a").css("background-image").replace("url(", "").slice(0, -1), b.push(e), b[0].h = 370, b[0].w = 277) : 44882 == c ? (e = $j(".group4.cboxElement").attr("href"), b.push(e), b[0].h = 62, b[0].w = 62) : 45746 == c ? (b.push($j(".column1of2 .addthis_toolbox.addthis_default_style a.addthis_button_pinterest_pinit.at300b").attr("pi:pinit:media")), b[0].h = 530, b[0].w = 430) : $j("img").each(function () {
                                130 < $j(this)[0].clientHeight &&
                                    60 < $j(this)[0].clientWidth && (b.push($j(this)[0].src), b[d].h = 0.33 * $j(this)[0].clientHeight, b[d].w = 0.33 * $j(this)[0].clientWidth, d++)
                            });
                        remove_preloader();
                        $j("#rewardStyle_image_picker").html('<div id="rewardStyle_not_found" >   <div class="clearfix">       <a id="__rs_logo" style="float: left; margin-left: 170px;" href="http://www.rewardstyle.com" target="_blank">           <h1 style="height: 53px; width: 229px; background: url(\'http://www.rewardstyle.com/images/search/logo.png?v=1\') center center no-repeat; display:block; text-indent: -5000px">RewardStyle</h1>       </a>       <a class="close" href="javascript:void(0);" onClick="jQuery(\'#rewardStyleBase\').remove();">          <img src="http://www.rewardstyle.com/images/search/close.png?v=1" alt="" />       </a>       <div style="float: left; width: 100%;">          <div class="rs__font" style="text-align:center;margin: 25px 10px 30px 10px; width: 95%;">              <h3 class="rs__font" style="background-color:#FFFFFF;" id="num_images">                   <span style="/*position:relative;left:-10px;bottom:25px*/;font-size:14px; font-family: \'Gotham A\', \'Gotham B\', sans-serif; color: #000; text-transform: uppercase;">Please select the product image:</span>               </h3>          </div>       </div>       <span id="patent-pending" class="footer">          LINK NINJA<span>&trade;</span>           PATENT PENDING       </span>');
                        rows = 4 < b.length ? b.length / 4 : 1;
                        width = 450;
                        height = 150 * Math.ceil(rows) + 150;
                        $j("#rewardStyle_not_found").css("width", width + "px");
                        $j("#rewardStyle_not_found").css("height", height + "px");
                        $j("#patent-pending").each(function () {
                            this.style.setProperty("width", width - 10 + "px", "important")
                        });
                        $j("#__rs_logo").css("margin-left", "-110px");
                        $j("#__rs_logo").css("position", "relative");
                        $j("#__rs_logo").css("left", "50%");
                        $j("#num_images").append('<div id="rs__images">');
                        for (i = 0; i < b.length; i++) $j("#rs__images").append("<img class='rs__image' id='rs__image_" +
                            i + "' src=" + b[i] + " style='width:" + b[i].w + ";height:" + b[i].h + ";visibility:visible!important;' />");
                        $j("#num_images").append("</div>");
                        $j("#rewardStyle_image_picker").fadeIn();
                        jQuery("#rewardStyle_image_picker").on("mousedown", ".rs__image", function (a) {
                            1 == a.which && (x = jQuery(this)[0].src, jQuery("#rewardStyle_not_found").remove(), remove_preloader(), jQuery("#rewardStyle_image_picker").remove(), jQuery("#rewardStyle").fadeIn(w.postMessage(encodeURIComponent(x))))
                        })
                    }
                }
            })
        }
    if (z) {
        $j("#rewardStyle_not_found").remove();
        $j("#rewardStyleBase").remove();
        $j("#rewardStyle_not_found").remove();
        remove_preloader();
        $j("#rewardStyle_image_picker").remove();
        show_link_ninja();
        show_preloader();
        f = encodeURIComponent("http://" + host + ".rewardstyle.com/api/pin");
        adv_id = c;
        if (0 === c) return w = new easyXDM.Socket({
            remote: "http://" + host + ".rewardstyle.com/api/pinloader?url=" + f + "&e=2&l=" + encodeURIComponent(location.href),
            swf: "http://" + host + ".rewardstyle.com/styles/js/easyXDM-2.4.15.118/easyxdm.swf",
            container: "rewardStyle",
            onMessage: function (a) {
                "close" ==
                    a && $j("#rewardStyleBase").remove()
            }
        }), $j("#rewardStyle").fadeIn(w.postMessage("error")), !1;
        w = new easyXDM.Socket({
            remote: "http://" + host + ".rewardstyle.com/api/pinloader?url=" + f + "&e=1&a=" + adv_id + "&location=" + encodeURIComponent(location.href) + "&title=" + encodeURIComponent(window.document.title),
            swf: "http://" + host + ".rewardstyle.com/styles/js/easyXDM-2.4.15.118/easyxdm.swf",
            container: "rewardStyle",
            onMessage: function (a) {
                "close" == a ? $j("#rewardStyleBase").remove() : "zclip" == a ? w.postMessage("zclip") : "show" ==
                    a ? (remove_preloader(), $j("#rewardStyle").fadeIn()) : "zclip firefox" == a && w.postMessage("zclip firefox")
            }
        })
    }
}
var h = document.getElementsByTagName("head")[0];
try {
    var q = document.createElement("script");
    q.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js";
    q.type = "text/javascript";
    q.id = "jquery";
    q.onreadystatechange = function () {
        ("complete" === this.readyState || "loaded" === this.readyState) && loadXDM()
    };
    q.onload = loadXDM;
    h.appendChild(q)
} catch (e$$11) {
    "dev" == host && alert(e$$11)
}
var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
        this.OS = this.searchString(this.dataOS) || "an unknown OS"
    },
    searchString: function (d) {
        for (var e = 0; e < d.length; e++) {
            var b = d[e].string,
                a = d[e].prop;
            this.versionSearchString = d[e].versionSearch || d[e].identity;
            if (b) {
                if (-1 != b.indexOf(d[e].subString)) return d[e].identity
            } else if (a) return d[e].identity
        }
    },
    searchVersion: function (d) {
        var e = d.indexOf(this.versionSearchString);
        if (-1 != e) return parseFloat(d.substring(e + this.versionSearchString.length + 1))
    },
    dataBrowser: [{
        string: navigator.userAgent,
        subString: "Chrome",
        identity: "Chrome"
    }, {
        string: navigator.userAgent,
        subString: "OmniWeb",
        versionSearch: "OmniWeb/",
        identity: "OmniWeb"
    }, {
        string: navigator.vendor,
        subString: "Apple",
        identity: "Safari",
        versionSearch: "Version"
    }, {
        prop: window.opera,
        identity: "Opera",
        versionSearch: "Version"
    }, {
        string: navigator.vendor,
        subString: "iCab",
        identity: "iCab"
    }, {
        string: navigator.vendor,
        subString: "KDE",
        identity: "Konqueror"
    }, {
        string: navigator.userAgent,
        subString: "Firefox",
        identity: "Firefox"
    }, {
        string: navigator.vendor,
        subString: "Camino",
        identity: "Camino"
    }, {
        string: navigator.userAgent,
        subString: "Netscape",
        identity: "Netscape"
    }, {
        string: navigator.userAgent,
        subString: "MSIE",
        identity: "Explorer",
        versionSearch: "MSIE"
    }, {
        string: navigator.userAgent,
        subString: "Gecko",
        identity: "Mozilla",
        versionSearch: "rv"
    }, {
        string: navigator.userAgent,
        subString: "Mozilla",
        identity: "Netscape",
        versionSearch: "Mozilla"
    }],
    dataOS: [{
        string: navigator.platform,
        subString: "Win",
        identity: "Windows"
    }, {
        string: navigator.platform,
        subString: "Mac",
        identity: "Mac"
    }, {
        string: navigator.userAgent,
        subString: "iPhone",
        identity: "iPhone/iPod"
    }, {
        string: navigator.platform,
        subString: "Linux",
        identity: "Linux"
    }]
};
BrowserDetect.init();
