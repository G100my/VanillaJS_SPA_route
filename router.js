import home from './components/home.js';
import page1 from './components/page1.js';
import page2 from './components/page2.js';
import errorPage from './components/errorPage.js';

const routes = {
    '/': home,
    '/#page1': page1,
    '/#page2': page2,
    '/#errorPage': errorPage,
}
const routeKeyArray = Object.keys(routes);

const navbar = document.getElementById('navbar');
const main = document.getElementById('main');


navbar.querySelectorAll('a').forEach(item => {
    item.addEventListener('click', function (event) {
        
        event.preventDefault();

        console.log('hash: ' + this.hash);

        // first child node is 'text' node which contain white space string on HTML.
        if (main.hasChildNodes()) {

            main.firstChild.replaceWith(routes[`/${this.hash}`])

            window.history.pushState(
                {},
                this.hash,
                window.location.origin + this.hash
            )
        }
    })
})

// when press back/forword
window.addEventListener('popstate', function () {
    main.firstChild.replaceWith(routes[this.location.pathname])
})

// when hash changed
window.addEventListener('hashchange', function () {
    console.log('onhashchange');

    if (main.hasChildNodes()) {

        const targetPath = `/${this.hash}`
        
        if (routeKeyArray.includes(targetPath))
            main.firstChild.replaceWith(routes[targetPath]);
            
        else main.firstChild.replaceWith(routes['/#errorPage']);
    }
})
