import axios from 'axios'
import { LANGUAGE_VERSION } from '../constants/programmingLangData'

const API = axios.create({
    baseURL: 'https://emkc.org/api/v2/piston'
})

export const executeCode = async (language, sourceCode) => {
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