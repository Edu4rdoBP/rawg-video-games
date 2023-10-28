import Facebook from '../../../public/img/facebook.svg'
import Instagram from '../../../public/img/instagram.svg'
import Linkedin from '../../../public/img/linkedin.svg'
import Twitter from '../../../public/img/twitter.svg'

interface IItem {
    title: string;
    src: string;
    alt: string;
    href: string;
    size: number;
}

export const MenuItems: IItem[] = [
    {
        title: 'Logo Facebook',
        src: Facebook,
        alt: 'Logo Facebook',
        href: '/',
        size: 10,
    },
    {
        title: 'Logo Instagram',
        src: Instagram,
        alt: 'Logo Instagram',
        href: '/',
        size: 18,
    },
    {
        title: 'Logo Linkedin',
        src: Linkedin,
        alt: 'Logo Linkedin',
        href: '/',
        size: 18,
    },
    {
        title: 'Logo Twitter',
        src: Twitter,
        alt: 'Logo Linkedin',
        href: '/',
        size: 16,
    },
]

export function getMenuItems(): IItem[] {
    return MenuItems;
}