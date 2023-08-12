import { BiTimer, BiSolidDiscount } from 'react-icons/bi';
import { SiSimplenote } from 'react-icons/si';
import { FaObjectUngroup } from 'react-icons/fa';
import { TbCubeSend } from 'react-icons/tb';
import { RiCustomerService2Fill } from 'react-icons/ri';

import result from './product.json';

export const title = 'Hans Shop';
export const title_web = 'xcoders - online shop';
export const about_text = `"Trade your way to success with our diverse range of quality goods. From local to global, we've got you covered. Experience hassle-free transactions and reliable delivery services. Let us be your partner in achieving your business goals. Choose us for a seamless and profitable trading experience. With our commitment to excellence, your satisfaction is guaranteed. Join the millions of satisfied customers who trust us for their trading needs. Start your journey to prosperity today with our exceptional trading solutions. ${title} made easy with us. Let's trade together and grow together!"`;
export const products = result.products;
export const notification = [
    {
        message: `"Shop with us and feel appreciated - Your satisfaction is our top priority!"`,
        updated: '2023-08-12T04:09:15+07:00' // date can't change: YYYY-MM-DDTHH:mm:ss
    },
    {
        message: `"Experience the joy of shopping with us - Your happiness is our ultimate goal!"`,
        updated: '2023-08-12T04:09:15+07:00' // date can't change: YYYY-MM-DDTHH:mm:ss
    }
];
export const about = [
    {
        icon: BiTimer,
        title: 'Pay in seconds',
        description: `"Instant payments, hassle-free transactions. Pay in seconds, enjoy the satisfaction."`
    },
    {
        icon: SiSimplenote,
        title: 'easy payment',
        description: `"Pay with ease, hassle-free transactions - Simplify your life with our easy payment options."`
    },
    {
        icon: FaObjectUngroup,
        title: 'Complete item',
        description: `"Get it all in one go with our complete item - convenience at its finest!"`
    },
    {
        icon: TbCubeSend,
        title: 'Fast delivery',
        description: `"Swiftly delivered, satisfaction guaranteed - our speedy service is all you need!"`
    },
    {
        icon: RiCustomerService2Fill,
        title: 'Friendly customer service',
        description: `"Experience the warmth of our service - where customers are always our top priority."`
    },
    {
        icon: BiSolidDiscount,
        title: 'get more discount',
        description: `"Maximize your savings with our unbeatable discounts - Get more for less today!"`
    }
];
export const navLink = [
    { name: 'Home', link: '/' },
    { name: 'Products', link: '/products' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' }
];