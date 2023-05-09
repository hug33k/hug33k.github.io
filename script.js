const colors = ["grey", "yellow", "blue", "green", "red", "brown", "orange", "purple"];
var backgroundUpdate = null;
var quotesUpdate = null;
var lastQuote = null;
var selectedTags = [];

const _array = (length) => Array(length).fill();
const _random = (max) => Math.ceil(Math.random() * max);

const bindNav = () => {
    const navItems = document.querySelectorAll('nav li');
    [].forEach.call(navItems, (item) => {
        item.addEventListener('click', (e) => {
            const sectionId = Array.from(e.target.classList).filter((c) => c.startsWith("nav-"))[0].replace("nav-", "");
            document.getElementById("block-" + sectionId).scrollIntoView({block: "start", behavior: "smooth"});
        });
    });
};

const handleArticles = () => {
    document.querySelectorAll("article.collapsible").forEach((article) => {
        article.querySelector("header").addEventListener("click", (e) => {
            article.classList.toggle("collapsed");
        });
    })
};

const generateShape = (index, max) => {
    const _randomBorderRadius = (a, b, c, d) => `${_array(4).map(_=>`${_random(a)+b}%`).join(" ")} / ${_array(4).map(_=>`${_random(c)+d}%`).join(" ")}`;
    const item = document.createElement("div");
    item.classList.add("shape");

    const width = _random(50)+50;
    const borderRadius = _randomBorderRadius(40, 50, 40, 50);
    const top = _random(100) / max * index;
    const left = _random(100) / max * index;

    const animOrigin = `background-position: 0% 50%;
    border-radius: ${borderRadius};
    top: ${top}%;
    left: ${left}%;`

    const _generateAnimCommon = () => `border-radius: ${_randomBorderRadius(40, 50, 40, 50)};
    top: ${_random(100)}%;
    left: ${_random(100)}%;`;

    var style = `#background .shape:nth-child(${index}) {
        width: ${width}px;
        height: ${width}px;
        background: linear-gradient(${_random(360)-180}deg, ${_array(_random(4)+2).map(_=>`var(--color-${colors[_random(colors.length)-1]})`).join(",")});
        background-size: 600% 600%;
        animation: animate-shape-${index} ${_random(40)+30}s ease infinite;
        position: absolute;
        ${animOrigin}
    }`

    var animation = `@keyframes animate-shape-${index} {
        0% {${animOrigin}}
        ${_random(20)+15}% {
            background-position: 50% 100%;
            ${_generateAnimCommon()}
        }
        50% {
            background-position: 100% 75%;
            ${_generateAnimCommon()}
        }
        ${_random(20)+60}% {
            background-position: 100% 50%;
            ${_generateAnimCommon()}
        }
        100% {${animOrigin}}
    }`;

    return { item, style, animation };
};

const generateBackground = () => {
    if (backgroundUpdate)
        clearTimeout(backgroundUpdate);

    const background = document.getElementById("background");
    background.classList.remove("show");
    const styling = document.getElementById("style").sheet;
    const count = _random(15)+5;
    _array(count).forEach((_, index) => {
        const { item, style, animation } = generateShape(index+1, count);
        background.appendChild(item);
        styling.insertRule(style, styling.cssRules ? styling.cssRules.length : 0);
        styling.insertRule(animation, styling.cssRules ? styling.cssRules.length : 0);
    });
    if (backgroundUpdate)
        setTimeout(() => background.classList.add("show"), (_random(3)+3)*1000);
    else
        background.classList.add("show");

    backgroundUpdate = setTimeout(generateBackground, (_random(30)+60)*1000);
};

const filterTags = (tag, show) => {
    if (show)
        selectedTags.push(tag);
    else
        selectedTags = selectedTags.filter(t => t !== tag);
    document.querySelectorAll("#block-what article:not(#what-dev)").forEach(item => {
        if (!selectedTags.length)
            item.classList.remove("tags-hide");
        else {
            const tags = Array.from(item.classList).filter(t => t.startsWith("tag-")).map(t => t.replace("tag-", ""));
            if (selectedTags.every(t => tags.includes(t)))
                item.classList.remove("tags-hide");
            else
                item.classList.add("tags-hide");
        }
    });
}

const handleTags = () => {
    const tags = [...new Set(Array.from(document.querySelectorAll(".tags-item")).map(tag => tag.innerText))];
    const list = document.getElementById("tags-list");
    tags.forEach(tag => {
        const item = document.createElement("li");
        item.innerText = tag;
        item.classList.add("tags-list-item");
        item.classList.add("tags-hide");
        item.addEventListener("click", () => {
            item.classList.toggle("tags-hide");
            filterTags(tag.toLowerCase(), !item.classList.contains("tags-hide"));
        });
        list.appendChild(item);
    });
};

const toggleGalleryFullscreen = (gallery, project=null) => {
    mask.style.backgroundColor = window.getComputedStyle(gallery).getPropertyValue("background-color");
    mask.classList.toggle("mask-show");
    setTimeout(() => {
        gallery.querySelector("h5").innerText = (gallery.classList.contains("gallery-fullscreen") ? "Galerie" : project);
        gallery.classList.toggle("gallery-fullscreen");
        setTimeout(() => {
            mask.classList.toggle("mask-show");
        }, 100);
    }, 1000);
};

const handleGalleries = () => {
    const mask = document.getElementById("mask");
    document.querySelectorAll(".gallery").forEach(gallery => {
        const images = gallery.querySelectorAll("img");
        const project = gallery.closest("article.collapsible").querySelector("h4").innerText;
        gallery.addEventListener("click", (e) => {
            const buttonWidth = parseInt(window.getComputedStyle(gallery, "::before").getPropertyValue("width"));
            var index = Array.from(images).findIndex((img) => img.classList.contains("gallery-active"));
            if (e.offsetX < buttonWidth) {
                index -= 1;
            }
            else if (e.offsetX > (gallery.offsetWidth - buttonWidth)) {
                index += 1;
            } else {
                return;
            }
            index = (index + images.length) % images.length;
            Array.from(images).forEach((img, i) => {
                img.classList.remove("gallery-active");
                if (i === index)
                    img.classList.add("gallery-active");
            });
        });
        gallery.querySelector(".gallery-slider").addEventListener("click", () => {
            if (!gallery.classList.contains("gallery-fullscreen"))
                toggleGalleryFullscreen(gallery, project);
        });
        const header = gallery.querySelector("h5");
        const headerStyling = window.getComputedStyle(header)
        const headerWidth = parseInt(headerStyling.getPropertyValue("width")) - parseInt(headerStyling.getPropertyValue("padding-right")) - parseInt(headerStyling.getPropertyValue("padding-left"));
        header.addEventListener("click", (e) => {
            e.stopPropagation();
            if (e.offsetX > headerWidth) {
                toggleGalleryFullscreen(gallery, project);
            }
        });
    });
};

const handleKeyboard = () => {
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            document.querySelectorAll(".gallery.gallery-fullscreen").forEach(item => {
                toggleGalleryFullscreen(item);
            });
        }
    });
};

const handleQuotes = () => {
    const toggleQuote = (quotes) => {
        var index = lastQuote;
        while (index === lastQuote)
            index = _random(quotes.length) - 1;
        quotes.forEach((quote, i) => {
            if (i === index)
                quote.classList.remove("hide");
            else
                quote.classList.add("hide");
        });
        lastQuote = index;
    };

    const quotes = document.querySelectorAll("#who-quotes .content .paragraph");
//    toggleQuote(quotes);
//    quotesUpdate = setInterval(() => toggleQuote(quotes), 3000);
};

window.onload = () => {
    bindNav();
    generateBackground();
    handleArticles();
    handleTags();
    handleGalleries();
    handleKeyboard();
    handleQuotes();
};
