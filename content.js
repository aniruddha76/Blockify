function startExtension() {
    let adScripts = document.querySelectorAll("script");
    if (adScripts) {
        for (let i = 0; i < adScripts.length; i++) {
            if (adScripts[i].src.includes("ad-provider")) {
                adScripts[i].remove();
            }
        }
    }

    let frame = document.getElementsByTagName("iframe");
    if (frame) {
        for (let i = 0; i < frame.length; i++) {
            frame[i].style.display = "none";
        }
    }

    let widgetAds = document.getElementsByClassName("exo-native-widget");
    if (widgetAds) {
        for (let i = 0; i < widgetAds.length; i++) {
            widgetAds[i].style.display = "none";
        }
    }

    let wrapper = document.getElementsByClassName("exo_wrapper")[0];
    if (wrapper) {
        wrapper.style.display = "none";
    }

    let adsClass = document.getElementsByClassName("maex");
    if (adsClass) {
        for (let i = 0; i < adsClass.length; i++) {
            adsClass[i].style.display = "none";
        }
    }

    let adsByGoogle = document.getElementsByClassName("adsbygoogle");
    if (adsByGoogle) {
        for (let i = 0; i < adsByGoogle.length; i++) {
            adsByGoogle[i].style.display = "none";
        }
    }
}

startExtension();

let mutationObserver = new MutationObserver(enteries => {
    startExtension();
})

mutationObserver.observe(document.body, { childList: true, subtree: true })