function preloadImages(array, waitForOtherResources, timeout) {
    var loaded = false, list = preloadImages.list,
    imgs = array.slice(0), t = timeout || 15*1000, timer;
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    if (!waitForOtherResources || document.readyState === 'complete') {
        loadNow();
    } else {
        window.addEventListener("load", function() {
            clearTimeout(timer);
            loadNow();
        });
        // in case window.addEventListener doesn't get called (sometimes some resource gets stuck)
        // then preload the images anyway after some timeout time
        timer = setTimeout(loadNow, t);
    }

    function loadNow() {
        if (!loaded) {
            loaded = true;
            for (var i = 0; i < imgs.length; i++) {
                var img = new Image();
                img.onload = img.onerror = img.onabort = function() {
                    var index = list.indexOf(this);
                    if (index !== -1) {
                        // remove image from the array once it's loaded
                        // for memory consumption reasons
                        list.splice(index, 1);
                    }
                }
                list.push(img);
                img.src = imgs[i];
            }
        }
    }
}

preloadImages(["http://www.google.com/a/help/intl/en/images/sites_35.gif", "http://www.google.com/a/help/intl/en/images/sites_35.gif"], true);
//preloadImages(["url99.jpg", "url98.jpg"], true);