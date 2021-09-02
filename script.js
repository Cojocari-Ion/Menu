const menu = [
    {
        id: 1,
        tittle: "macaroane cu brânză",
        category: "lunch",
        price: 13.99,
        img: "photos/macaroaneCuBranza.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ut sit minus nemo deserunt voluptatibus id."

    },

    {
        id: 2,
        tittle: "toast cu ou",
        category: "breakfast",
        price: 9.99,
        img: "photos/ouaPrajite.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ut sit minus nemo deserunt voluptatibus id."

    },

    {
        id: 3,
        tittle: "cartofi prăjiți",
        category: "lunch",
        price: 10.99,
        img: "photos/cartofiPrajiti.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ut sit minus nemo deserunt voluptatibus id."

    },

    {
        id: 4,
        tittle: "english breakfast",
        category: "breakfast",
        price: 14.99,
        img: "photos/ouAvocado.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ut sit minus nemo deserunt voluptatibus id."

    },

    {
        id: 5,
        tittle: "shake ciocolată",
        category: "shakes",
        price: 14.99,
        img: "photos/shakeCaramela.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ut sit minus nemo deserunt voluptatibus id."

    },

    {
        id: 6,
        tittle: "terci cu fructe",
        category: "breakfast",
        price: 12.99,
        img: "photos/terci.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ut sit minus nemo deserunt voluptatibus id."

    },

    {
        id: 7,
        tittle: "shake caramelă",
        category: "shakes",
        price: 12.99,
        img: "photos/shakeCiocolata.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ut sit minus nemo deserunt voluptatibus id."

    },

    {
        id: 8,
        tittle: "pizza cu jumere",
        category: "shakes",
        price: 12.99,
        img: "photos/pizza.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ut sit minus nemo deserunt voluptatibus id."

    },

    {
        id: 9,
        tittle: "steak",
        category: "dinner",
        price: 30.99,
        img: "photos/pizza.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ut sit minus nemo deserunt voluptatibus id."

    }

];

const sectionCenter = document.querySelector('.section-center');
const filterBtns = document.querySelectorAll(".button");
const container = document.querySelector(".menu-buttons");

window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    const categories = menu.reduce(
        function(values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        }, ["all"]
    );
    const categoryBtns = categories.map(function (category) {
        return `<button type="button" data-id="${category}" class="button btn-shakes">${category}</button>`;
    }).join(" ");
    container.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".button");
    
    filterBtns.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            };
        });
    });
});



function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<div class="col-lg-6">
        <div class="p-3 menu-item">
          <div id="item-img1" style="background-image: url(${item.img});" class="item-img"></div>
          <article class="item-info">
            <header>
              <h4 class="item-title">${item.tittle}</h4>
              <h4 class="item-price">${item.price}</h4>
              
            </header>
            <hr>
            <p>${item.description}</p>
          </article>
        </div>
      </div>`
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
};