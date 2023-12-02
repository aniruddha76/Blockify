function startExtension() {
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

    let adScripts = document.querySelectorAll("script");
    if (adScripts) {
        for (let i = 0; i < adScripts.length; i++) {
            let keyword = "fr2023_loer.js"
            if (adScripts[i].src && adScripts[i].src.includes(keyword)) {
                adScripts[i].remove();
            }
        }
    }

    let videos = document.getElementsByTagName("video");
    if (videos) {
        for (let i = 0; i < videos.length; i++) {
            videos[i].style.display = "none";
        }
    }

    let adsByGoogle = document.getElementsByClassName("adsbygoogle");
    if (adsByGoogle) {
        for (let i = 0; i < adsByGoogle.length; i++) {
            adsByGoogle[i].style.display = "none";
        }
    }

    console.log("Removed All Ads")
}

startExtension();

let mutationObserver = new MutationObserver(enteries => {
    startExtension();
})

mutationObserver.observe(document.body, { childList: true, subtree: true })