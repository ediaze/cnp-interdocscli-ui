/* http://fontello.github.io/awesome-uni.font/demo.html */
const home = {
    text: 'Rock',
    link: '/rock',
    icon: 'icon-pin'
};

const headingMain = {
    text: 'Módulos',
    heading: true
};

const headingComponents = {
    text: 'Configuración',
    heading: true
};

const masters = {
    text: 'Maestros',
    link: '/masters',
    icon: 'icon-note',
    submenu: [
        {
            text: 'Listas',
            link: '/masters/items'
        },
        {
            text: 'Opciones',
            link: '/masters/item-details'
        }
    ]
}

const security = {
    text: 'Seguridad',
    link: '/security',
    icon: 'icon-chemistry',
    submenu: [
        {
            text: 'Roles',
            link: '/security/roles'
        },
        {
            text: 'Usuarios',
            link: '/security/users'
        }
    ]
}

const logout = {
    text: 'Sign Out',
    link: '/sign-out',
    icon: 'icon-logout'
}

const headingOthers = {
    text: 'Otros',
    heading: true
};

export const menu = [
    headingMain,
    home,    
    headingComponents,
    masters,
    security,
    headingOthers,
    logout
];
