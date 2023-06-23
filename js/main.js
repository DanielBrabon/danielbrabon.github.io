window.onload = function () {
    window.addEventListener("resize", setLayout);
    setLayout();
};

function setLayout() {
    let header = document.querySelector("header");
    let h1 = document.querySelector("h1");
    let link_icons = document.querySelector("#link_icons");

    let icons_width = link_icons.children[0].offsetWidth * link_icons.childElementCount;

    if (header.offsetWidth > (h1.offsetWidth + icons_width) / 0.8) {
        header.style.flexDirection = "row";
        header.style.justifyContent = "space-between";
        header.style.textAlign = "initial";

        link_icons.style.marginTop = "0";
    } else {
        header.style.flexDirection = "";
        header.style.justifyContent = "";
        header.style.textAlign = "";

        link_icons.style.marginTop = "";
    }

    let posts_wrap = document.querySelector("#posts_wrap");
    let post_headers = document.querySelectorAll(".post_header");

    let font_size = parseFloat(window.getComputedStyle(post_headers[0]).getPropertyValue('font-size'));

    if (posts_wrap.offsetWidth > font_size * 60) {
        post_headers.forEach(p_header => {
            p_header.style.flexDirection = "row";
            p_header.style.justifyContent = "space-between";
            p_header.style.alignItems = "center";

            Array.from(p_header.children).forEach(child => child.style.marginBottom = "revert");
        });
    } else {
        post_headers.forEach(p_header => {
            p_header.style.flexDirection = "";
            p_header.style.justifyContent = "";
            p_header.style.alignItems = "";

            Array.from(p_header.children).forEach(child => child.style.marginBottom = "");
        });
    }
}