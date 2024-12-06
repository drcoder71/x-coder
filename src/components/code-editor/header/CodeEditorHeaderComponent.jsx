import React, { useState } from "react";
import ChangeLanguageComponent from "../select-language/SelectLangComponent";
import ButtonUi from "../../ui/ButtonUi";
import { executeCode } from "../../../api/code.api";
import { useDispatch, useSelector } from "react-redux";
import {
  ExecutedCode,
} from "../../../features/execute-cpde/executeCodeSlice";
import { LuSettings } from "react-icons/lu";
import { FaPlay } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

const CodeEditorHeaderComponent = ({ editorRef, SetOutput }) => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.programminglanguage.language);

  const runCode = async () => {
    const code = editorRef.current.getValue();
    if (!code || value === 'Tanlang...') {
      SetOutput(null)
      return
    }
    try {
      const { run: result } = await executeCode(value, code);
      dispatch(ExecutedCode(result.output));
    } catch (err) {
      console.log(err);
    } finally {

    }
  };

  return (
    <div className="flex items-end justify-between my-2 gap-1">
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-3xl text-white py-2">Code Studio</h1>
        <div className="inline-flex items-center justify-start gap-1 lg:gap-4 ">
          <ChangeLanguageComponent />
          <ButtonUi
            label={"Runner"}
            icon={<FaPlay className={'w-3 h-3 lg:w-4 lg:h-4'}/>}
            className={"bg-[#2a9134] rounded-sm text-white px-4 shadow-[0px_0px_15px_-10px_#00000077]"}
            clickHandler={runCode}
            disabled={value === "Tanlang..." ? true : false}
          />
        </div>
      </div>
        {/* <ButtonUi label={"System"} icon={<IoSettingsSharp className="w-3 h-3 lg:w-5 lg:h-5" />} className={'bg-[#fff] text-[#014f86] rounded-sm'}/> */}
    </div>
  );
};

export default CodeEditorHeaderComponent;
