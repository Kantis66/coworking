document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");

    // Fonction pour accepter les cookies
    document.getElementById("accept-cookies").onclick = function () {
        document.cookie = "cookiesAccepted=true; path=/; max-age=" + 60 * 60 * 24 * 365;
        cookieBanner.style.display = "none";
    };

    // Fonction pour refuser les cookies
    document.getElementById("decline-cookies").onclick = function () {
        document.cookie = "cookiesAccepted=false; path=/; max-age=" + 60 * 60 * 24 * 365;
        cookieBanner.style.display = "none";
    };
});
