/* http://fontello.github.io/awesome-uni.font/demo.html */
const home = {
    text: 'Radicación',
    link: '/filing-documents',
    icon: 'icon-pin'
};

const settings = {
    text: 'Configuración',
    link: '/filing-config',
    icon: 'icon-wrench'
};

const headingMain = {
    text: 'Módulos',
    heading: true
};

const headingComponents = {
    text: 'Configuración',
    heading: true
};

// const masters = {
//     text: 'Maestros',
//     link: '/masters',
//     icon: 'icon-note',
//     submenu: [
//         {
//             text: 'Listas',
//             link: '/masters/items'
//         },
//         {
//             text: 'Opciones',
//             link: '/masters/item-details'
//         }
//     ]
// }

// const security = {
//     text: 'Seguridad',
//     link: '/security',
//     icon: 'icon-chemistry',
//     submenu: [
//         {
//             text: 'Roles',
//             link: '/security/roles'
//         },
//         {
//             text: 'Usuarios',
//             link: '/security/users'
//         }
//     ]
// }

const logout = {
    text: 'Sign Out',
    link: '/home',
    icon: 'icon-logout'
}

const headingOthers = {
    text: 'Otros',
    heading: true
};

export const menu = [
    headingMain,
    home,
    settings,
    headingComponents,
    headingOthers,
    logout
];
