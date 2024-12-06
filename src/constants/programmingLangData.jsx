import { BiLogoTypescript } from "react-icons/bi"
import { FaJsSquare, FaPython } from "react-icons/fa"
import { RiJavaFill } from "react-icons/ri"

export const LANGUAGE_VERSION = {
    javascript: "18.15.0",
    typescript: "5.0.3",
    java: "15.0.2",
    python: "3.10.0"
}

export const CODE_SNIPPET = {
    javascript: "\nconst greet = () => { \nconsole.log('Hello Dr.Coder') \n} \n\ngreet()"
}

export const LANGUAGE_ICONS = {
    javascript: <FaJsSquare />,
    typescript: <BiLogoTypescript />,
    java: <RiJavaFill />,
    python: <FaPython />
}

export const PROGRAMMING_INFORMATION = {
    javascript: {
        label: "Javascript",
        description: "JavaScript - single thread, dynamic, multi-paradigm va Objectga yo'naltirilgan dasturlash tili.",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        sections: [
            {
                section_label: "Single Thread",
                section_description: "Javascript fileda yozilgan kodlarni bir boshidan ketma-ketlik bilan o'qiydi va ishga tushiradi. Shuningdek kodlarda qaysi qatorda xatolik bo'ladigan bo'lsa o'sha qatorgacha dastur ishlaydi va undan keyin xatolik chiqariladi.",
            },
            {
                section_label: "Single Thread",
                section_description: "Javascript fileda yozilgan kodlarni bir boshidan ketma-ketlik bilan o'qiydi va ishga tushiradi. Shuningdek kodlarda qaysi qatorda xatolik bo'ladigan bo'lsa o'sha qatorgacha dastur ishlaydi va undan keyin xatolik chiqariladi.",
            },
            {
                section_label: "Single Thread",
                section_description: "Javascript fileda yozilgan kodlarni bir boshidan ketma-ketlik bilan o'qiydi va ishga tushiradi. Shuningdek kodlarda qaysi qatorda xatolik bo'ladigan bo'lsa o'sha qatorgacha dastur ishlaydi va undan keyin xatolik chiqariladi.",
            },
            {
                section_label: "Single Thread",
                section_description: "Javascript fileda yozilgan kodlarni bir boshidan ketma-ketlik bilan o'qiydi va ishga tushiradi. Shuningdek kodlarda qaysi qatorda xatolik bo'ladigan bo'lsa o'sha qatorgacha dastur ishlaydi va undan keyin xatolik chiqariladi.",
            },
        ]
    },
    typescript: {
        label: "Typescript",
        description: "TypeScript - Javascript tilinig yuqori va samarali to'plami hisoblanadi. Javascriptda bor barcha xususiyatlarga ega, shuningdek compilerga static tekishiruvni qo'shib beradi.",
        link: "",
        sections: [
            {
                section_label: "Static tekshiruv",
                section_description: "Typescriptda kodlaridagi o'zgaruvchilarni tekshirib, ma'lumot turlari Static Type ekanligini aniqlab beradi.",
            },
            {
                section_label: "Static Type",
                section_description: "Ma'lumot turlarini aynan bitta typeda ishlashini quvvatlaydi.",
            },
            {
                section_label: "Typescript samardorligi",
                section_description: "Typescript Static Type bo'lganligi sababili ma'lumot almashinish juda ham ishonchli bo'ladi. Katta projectlarni Typescriptda ko'targan afzaroq.",
            },
        ]
    },
    python: {
        label: "Python",
        description: "Python - High Level, Dynamic, multi-paradigm",
        link: "https://docs.python.org/3/",
        sections: [
            {
                section_label: "High-Level",
                section_description: "Python-da kod yozish inson tiligi yaqin bo'lganligi uchun ham High-Level til hisoblanadi.",
            },
            {
                section_label: "Dynamic",
                section_description: "Python kodlarida o'zgaruvchilardagi ma'lumot turlariga ahamiyat bermaydi. Ushbu holat Python tilini o'rganishni osonlashtirib beradi.",
            },
            {
                section_label: "multi-paradigm",
                section_description: "Python tilida function (paradigm) usulida hamda class(paradigm) usulida kod yozish imkoniyati borligi sababli Multi-Paradigm deyiladi.",
            }
        ]
    },
    java: {
        label: "Java",
        description: "Java - Multi thread, static, multi-paradigm va Objectga yo'naltirilgan dasturlash tili.",
        link: "",
        sections: [
            {
                section_label: "Static Type",
                section_description: "Java tilida har bitta o'zgaruvchiga berilgan ma'lumot turi qat'iy amal qiladi.",
            },
            {
                section_label: "Multi Thread",
                section_description: "Java fileda yozilgan kodlar ishaga tushirilganida eng avval o'qib chiqadi, kodda xatolik bo'lsa uni ma'lum qiladi va xatolik to'g'rilangandan so'ng dastur ishlaydi.",
            },
            {
                section_label: "Multi-Paradigm",
                section_description: "Java-da kodlarni function va class usulida yozish imkoniyat bo'lganligi sababi Multi-Paradigm dasturlash tili hisoblandi.",
            },
        ]
    },
}