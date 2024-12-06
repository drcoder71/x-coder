import { useSelector } from "react-redux"

const InformationLanguageComponent = () => {
    const selectedLanguage = useSelector(state => state.programminglanguage.value)
  return (
    <div className="bg-[#1e1e1e] p-2 text-white rounded-sm">
        <h2 className="capitalize text-xl">
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">{selectedLanguage.language}</a>
        </h2>
    </div>
  )
}

export default InformationLanguageComponent