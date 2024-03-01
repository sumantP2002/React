
//we get this with the help of react but we are not using it so we pass this as object
const anotherUser = "chai aur react";
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google',
    anotherUser
}

//version 1 of react code
/*
function customRender(element , container){
    let domElement = document.createElement(element.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', domElement.props.href);
    domElement.setAttribute('target', domElement.props.target);

    container.appendChild(domElement);
}
*/


//version 2 of react code
function customRender(reactElement , mainContanier){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props){
        if(prop === 'children') continue
        domElement.setAttribute(prop , reactElement.props[prop]);
    
    }
    mainContanier.appendChild(domElement);
}

const mainContanier = document.querySelector('#root');

customRender(reactElement , mainContanier);




