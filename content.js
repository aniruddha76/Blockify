function startExtension() {
    let textScripts = document.querySelectorAll("script[type='text/javascript']");
    if (textScripts) {
        for (let i = 0; i < textScripts.length; i++) {
            console.log(textScripts[i])
            textScripts[i].remove();
            console.log("script removed");
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