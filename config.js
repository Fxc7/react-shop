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
    }
];
export const faq = [
    {
        animate: 'zoom-in-left',
        question: "What kind of products does your online shop offer?",
        answer: "We offer a wide range of products, including clothing, accessories, electronics, home decor, and more."
    },
    {
        animate: 'zoom-in-left',
        question: "How can I place an order on your online shop?",
        answer: "Placing an order is easy! Simply browse our products, select the items you want, add them to your cart, and proceed to checkout. Follow the prompts to provide your shipping and payment information."
    },
    {
        animate: 'zoom-in-left',
        question: "What payment methods do you accept?",
        answer: "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and other secure online payment methods for your convenience."
    },
    {
        animate: 'zoom-in-left',
        question: "What is your return and exchange policy?",
        answer: "We have a hassle-free return and exchange policy within 30 days of purchase. If you're not satisfied with your order, you can return it for a refund or exchange. Please refer to our Returns & Exchanges page for more details."
    },
    {
        animate: 'zoom-in-left',
        question: "How can I track my order after I've made a purchase?",
        answer: "Once your order is shipped, you'll receive a tracking number via email. You can use this tracking number on our website to monitor the progress of your delivery."
    },
    {
        animate: 'zoom-in-left',
        question: "Do you offer international shipping?",
        answer: "Yes, we offer international shipping to many countries around the world. During the checkout process, you'll be able to select your country and see the available shipping options and costs. Please note that international shipping times may vary."
    }
];

export const about = [
    {
        icon: BiTimer,
        title: 'Pay in seconds',
        animate: 'zoom-in-left',
        description: `"Instant payments, hassle-free transactions. Pay in seconds, enjoy the satisfaction."`
    },
    {
        icon: SiSimplenote,
        title: 'easy payment',
        animate: 'zoom-in-right',
        description: `"Pay with ease, hassle-free transactions - Simplify your life with our easy payment options."`
    },
    {
        icon: FaObjectUngroup,
        title: 'Complete item',
        animate: 'zoom-in-left',
        description: `"Get it all in one go with our complete item - convenience at its finest!"`
    },
    {
        icon: TbCubeSend,
        title: 'Fast delivery',
        animate: 'zoom-in-right',
        description: `"Swiftly delivered, satisfaction guaranteed - our speedy service is all you need!"`
    },
    {
        icon: RiCustomerService2Fill,
        title: 'Friendly customer service',
        animate: 'zoom-in-left',
        description: `"Experience the warmth of our service - where customers are always our top priority."`
    },
    {
        icon: BiSolidDiscount,
        title: 'get more discount',
        animate: 'zoom-in-right',
        description: `"Maximize your savings with our unbeatable discounts - Get more for less today!"`
    }
];
export const navLink = [
    { name: 'Home', link: '/' },
    { name: 'Products', link: '/products' },
    { name: 'About', link: '/about' },
    { name: 'FAQ', link: '/faq' },
    { name: 'Contact', link: '/contact' }
];