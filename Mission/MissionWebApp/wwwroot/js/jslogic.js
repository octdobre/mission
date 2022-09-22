function loadCss(cssPath) {
    var ss = document.styleSheets;
    for (var i = 0, max = ss.length; i < max; i++) {
        if (ss[i].href.includes(cssPath.substr(2)))
            return;
    }
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssPath;

    document.getElementsByTagName("head")[0].appendChild(link);
}