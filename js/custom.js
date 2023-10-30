function toggleDropdown(link, children) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        if (children.style.display === "none" || children.style.display === "") {
            children.style.display = "block";
            link.querySelector(".dropdown-icon").style.transform = "rotate(180deg)";
        } else {
            children.style.display = "none";
            link.querySelector(".dropdown-icon").style.transform = "rotate(0deg)";
        }
    });
}

const waterLink = document.getElementById("waterTreatmentLink");
const children0 = waterLink.nextElementSibling;

//when browser load initial open 
children0.style.display = "block";
waterLink.querySelector(".dropdown-icon").style.transform = "rotate(180deg)";

toggleDropdown(waterLink, children0);

const sewagewater = document.getElementById("sewagewater");
const children1 = sewagewater.nextElementSibling;
toggleDropdown(sewagewater, children1);



function initializeDropdowns() {
    const catItems = document.querySelectorAll(".cat-item");
    catItems.forEach(function (catItem) {
        const subChildren = catItem.querySelector(".sub_children");
        const subLink = catItem.querySelector("a");

        if (subChildren) {
            toggleDropdown(subLink, subChildren);
        }
    });
}

initializeDropdowns()

function showContent(contentId, linkId) {
    const contents = document.querySelectorAll('.productContent');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    const selectedContent = document.getElementById(contentId);
    selectedContent.style.display = 'block';
    const links = document.querySelectorAll('ul li a');
    links.forEach(link => {
        link.classList.remove('selected');
    });
    document.getElementById(linkId).classList.add('selected');
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('klarimax_link').addEventListener('click', function (e) {
        e.preventDefault();
        showContent('klarimax', 'klarimax_link');
    });

    document.getElementById('sewage_link').addEventListener('click', function (e) {
        e.preventDefault();
        showContent('sewage', 'sewage_link');
    });

    document.getElementById('raw_link').addEventListener('click', function (e) {
        e.preventDefault();
        showContent('raw', 'raw_link');
    });

    document.getElementById('dual_link').addEventListener('click', function (e) {
        e.preventDefault();
        showContent('dual', 'dual_link');
    });

    document.getElementById('carbon_link').addEventListener('click', function (e) {
        e.preventDefault();
        showContent('carbon', 'carbon_link');
    });

    document.getElementById('iron_link').addEventListener('click', function (e) {
        e.preventDefault();
        showContent('iron', 'iron_link');
    });

    document.getElementById('chamber_link').addEventListener('click', function (e) {
        e.preventDefault();
        showContent('chamber', 'chamber_link');
    });

    document.getElementById('softners_link').addEventListener('click', function (e) {
        e.preventDefault();
        showContent('softners', 'softners_link');
    });

    document.getElementById('eseries_link').addEventListener('click', function (e) {
        e.preventDefault();
        showContent('eseries', 'eseries_link');
    });

    document.getElementById('pharmaro_link').addEventListener('click', function (e) {
        e.preventDefault();
        showContent('pharmaro', 'pharmaro_link');
    });

    document.getElementById('acid_link').addEventListener('click', function (e) {
        e.preventDefault();
        showContent('acid', 'acid_link');
    });

    document.getElementById('mixed_link').addEventListener('click', function (e) {
        e.preventDefault();
        showContent('mixedbed', 'mixed_link');
    });

    document.getElementById('absorber_link').addEventListener('click', function (e) {
        e.preventDefault();
        showContent('absorber', 'absorber_link');
    });

    document.getElementById('tower_link').addEventListener('click', function (e) {
        e.preventDefault();
        showContent('tower', 'tower_link');
    });

    document.getElementById('hrscc_link').addEventListener('click', function (e) {
        e.preventDefault();
        showContent('hrscc', 'hrscc_link');
    });

    document.getElementById('terminator_link').addEventListener('click', function (e) {
        e.preventDefault();
        showContent('terminator', 'terminator_link');
    });

    document.getElementById('loflo_link').addEventListener('click', function (e) {
        e.preventDefault();
        showContent('loflo', 'loflo_link');
    });

    document.getElementById('siro_link').addEventListener('click', function (e) {
        e.preventDefault();
        showContent('siro', 'siro_link');
    });

    document.getElementById('seqtreat_link').addEventListener('click', function (e) {
        e.preventDefault();
        showContent('seqtreat', 'seqtreat_link');
    });

    document.getElementById('bio_link').addEventListener('click', function (e) {
        e.preventDefault();
        showContent('bio', 'bio_link');
    });

    document.getElementById('fabx_link').addEventListener('click', function (e) {
        e.preventDefault();
        showContent('fabx', 'fabx_link');
    });

    document.getElementById('atom_link').addEventListener('click', function (e) {
        e.preventDefault();
        showContent('atom', 'atom_link');
    });

});

showContent('klarimax', 'klarimax_link');





