import React, { useState } from "react";
import ChangeLanguageComponent from "../select-language/SelectLangComponent";
import ButtonUi from "../../ui/ButtonUi";
import { executeCode } from "../../../api/code.api";
import { useDispatch, useSelector } from "react-redux";
import {
  ExecutedCode,
} from "../../../features/execute-cpde/executeCodeSlice";
import { LuSettings } from "react-icons/lu";

const CodeEditorHeaderComponent = ({ editorRef, SetOutput }) => {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.programminglanguage.value);

  const runCode = async () => {
    const code = editorRef.current.getValue();
    if (!code || language === 'Tanlang...') {
      SetOutput(null)
      return
    }
    try {
      const { run: result } = await executeCode(language, code);
      dispatch(ExecutedCode(result.output));
    } catch (err) {
      console.log(err);
    } finally {

    }
  };

  return (
    <div className="flex items-center justify-between my-2">
      <h1 className="text-xl md:text-3xl text-white ">Code Studio</h1>
      <div className="inline-flex items-center justify-start gap-4 ">
        <ButtonUi
          label={"Runner"}
          icon={<LuSettings className="w-5 h-5"/>}
          className={"bg-[#014f86] rounded-sm text-white px-4"}
          clickHandler={runCode}
          disabled={language === "Tanlang..." ? true : false}
        />
        <ChangeLanguageComponent />
      </div>
    </div>
  );
};

export default CodeEditorHeaderComponent;
