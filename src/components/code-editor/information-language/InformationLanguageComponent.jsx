import { useSelector } from "react-redux";

const InformationLanguageComponent = () => {
  const selectedLanguage = useSelector(
    (state) => state.programminglanguage.value
  );
  return (
    <div className="h-[15.6rem] bg-[#1e1e1e] p-2 text-white rounded-sm overflow-scroll">
      <h2 className="capitalize text-xl">
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
          {selectedLanguage.language}
        </a>
      </h2>
      <p className="text-sm text-gray-400 font-sans">
        JavaScript - single thread, dynamic, multi-paradigm va Objectga
        yo'naltirilgan dasturlash tili.{" "}
      </p>
      <div className="mt-1">
        <h3 className="text-sm inline-block p-1 bg-[#ff8800] rounded-[5px]">Single Thread</h3>
        <p className="text-sm text-gray-400 font-sans bg-[#ffffff13] p-1 my-1 rounded-sm">Javascript fileda yozilgan kodlarni bir boshidan ketma-ketlik bilan o'qiydi va ishga tushiradi. Shuningdek kodlarda qaysi qatorda xatolik bo'ladigan bo'lsa o'sha qatorgacha dastur ishlaydi va undan keyin xatolik chiqariladi.</p>
      </div>
    </div>
  );
};

export default InformationLanguageComponent;
