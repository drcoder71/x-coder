import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { TbSlash } from "react-icons/tb";
import { useSelector } from "react-redux";
import { PROGRAMMING_INFORMATION } from "../../../constants/programmingLangData";

const InformationLanguageComponent = ({ className }) => {
  const selectedLanguage = useSelector(
    (state) => state.codeeditor.language
  );
  return (
    <div className={`h-[33.75vh] bg-[#1e1e1e] p-2 text-white rounded-sm overflow-scroll ${className}`}>
      <h3 className="text-sm text-gray-700 font-[monospace]">Information:</h3>
      {selectedLanguage.value === "Tanlang..." ? (
        <>
          <h2 className="text-sm text-gray-300 text-center py-4">
            Iltimos dasturlash tilini tanlang !
          </h2>
        </>
      ) : (
        <>
          <h2 className="capitalize text-xl">
            <a href={PROGRAMMING_INFORMATION[selectedLanguage.value].link}>
              {PROGRAMMING_INFORMATION[selectedLanguage.value].label}
            </a>
          </h2>
          <p className="text-sm text-gray-400 font-sans">
            {PROGRAMMING_INFORMATION[selectedLanguage.value].description}
          </p>
          {
            PROGRAMMING_INFORMATION[selectedLanguage.value].sections?.map(({section_label, section_description}) => (
                <div className="mt-4" key={section_label}>
                    <h3 className="text-sm inline-block p-1 bg-[#ff8800] rounded-[5px]">{section_label}</h3>
                    <p className="text-sm text-gray-400 font-sans bg-[#ffffff13] p-1 my-2 rounded-sm">{ section_description }</p>
                </div>
            ))
          }
        </>
      )}
    </div>
  );
};

export default InformationLanguageComponent;
