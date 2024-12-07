import React, { useEffect, useState } from "react";
import {
  LANGUAGE_ICONS,
  LANGUAGE_VERSION,
} from "../../../constants/programmingLangData";
import { useDispatch, useSelector } from "react-redux";
import { ButtonUi, ListItemUi } from "../../ui";
import { FaCode } from "react-icons/fa";
import { ChangeLanguage } from "../../../features/code-editor/codeEditorSlice";

const languages = Object.entries(LANGUAGE_VERSION);

const ChangeLanguageComponent = () => {
  const selectedLanguage = useSelector(
    (state) => state.codeeditor.language
  );
  const dispatch = useDispatch();
  const [isActive, setActive] = useState(false);

  const { value, icon } = selectedLanguage;

  useEffect(() => {
    dispatch(ChangeLanguage({ language: 'Tanlang...', icon: <FaCode /> }));
  }, []);

  return (
    <div className="relative">
      <div className="bg-[#023e7d] text-white flex items-center justify-start gap-2 rounded-sm">
        <ButtonUi
          label={value}
          className={"rounded-sm bg-[#014f86] text-white p-1 text-sm w-[80px] lg:text-md lg:w-[120px]"}
          clickHandler={() => setActive(prev => !prev)}
        />
        <p className="text-2xl pr-2 lg:text-2xl">{icon.value}</p>
      </div>
      {isActive ? (
        <ul className="absolute top-[50px] left-[0px] z-[999] rounded-xl bg-[#fff] px-3 overflow-hidden">
          {languages.map(([lang, version]) => (
            <ListItemUi
              label={lang}
              key={lang}
              className={"py-2 p-3 cursor-pointer border-b border-[#7d7d7d35]"}
              clickHandler={() => {
                dispatch(
                  ChangeLanguage({ language: lang, icon: LANGUAGE_ICONS[lang] })
                );
                setActive(false);
              }}
            >
              <span>{lang}</span>
              <span>{version}</span>
            </ListItemUi>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default ChangeLanguageComponent;