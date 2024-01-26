console.log(resources)

/* Navigasjon/Kategorier */
let categoryList = "";

resources.map(resource => categoryList += `<li>
        <a href="#" onclick="updateSection('${resource.category}', this)">${resource.category}</a>
    </li>`)

console.log(categoryList)

const nav = document.getElementById("categoryList");
nav.innerHTML = categoryList;

/* Hovedinnhold */
const main = document.getElementById('mainContent');

function createSection(resource) {
    let contentHTML = `<section>
        <h3>${resource.category}</h3>
        <p>${resource.text}</p>
        <ul>`;
            resource.sources.forEach(source => {
                contentHTML += `<li><a href="${source.url}">${source.title}</a></li>`;
            });
    contentHTML += `</ul></section>`;
    return contentHTML;
}

/* Oppdater hovedinnhold */
function updateSection(category, element) {
    /* Hvordan få farge å bakgrunn til kategoriene til å vare etter de er trykket på hentet fra: https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=undexpand&ntref=1.
        Matet inn koden jeg allerede hadde laget og sendte: "hvordan kan jeg få den valgte kategorien til å endre bakgrunnsfarge til hvit og tekstfarge til svart. jeg ønsker også at disse endringene skal vare så lenge den har blitt trykket på." */
    document.querySelectorAll('#categoryList a').forEach(a => {
        a.classList.remove('selected');
    });

    // Add 'selected' class to the clicked category
    element.classList.add('selected');

    const resource = resources.find(i => i.category === category);
    main.innerHTML = createSection(resource);
}

