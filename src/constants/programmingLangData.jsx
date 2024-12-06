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