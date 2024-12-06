import axios from 'axios'
import { LANGUAGE_VERSION } from '../constants/programmingLangData.jsx'

const API = axios.create({
    baseURL: 'https://emkc.org/api/v2/piston'
})

const executeCodeFn = async (language, sourceCode) => {
    console.log(language, sourceCode);
    
    const code = await API.post('/execute', {
        "language": language,
        "version": LANGUAGE_VERSION[language],
        "files": [
            {
                "name": "learning.js",
                "content": sourceCode
            }
        ]
    })
    return code.data
}

export default executeCodeFn