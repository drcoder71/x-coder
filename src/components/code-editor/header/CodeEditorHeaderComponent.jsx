import React, { useState } from "react";
import ChangeLanguageComponent from "../select-language/SelectLangComponent";
import ButtonUi from "../../ui/ButtonUi";
import { useDispatch, useSelector } from "react-redux";
import { FaPlay } from "react-icons/fa";
import { ExecutedCode } from "../../../features/code-editor/codeEditorSlice";
import executeCodeFn from '../../../api/code.api'

const CodeEditorHeaderComponent = () => {
  const dispatch = useDispatch();
  const codeEditorStore = useSelector((state) => state.codeeditor);
  
  const runCode = async () => {
    const code = codeEditorStore.editorCode.value.getValue();
    if (!code || codeEditorStore.editorCode.value === 'Tanlang...') {
      dispatch(ExecutedCode(null));
      return
    }
    try {
      const { run: result } = await executeCodeFn(codeEditorStore.language?.value, code);
      dispatch(ExecutedCode(result.output));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-end justify-between mb-2 mt-4 gap-1">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-xl md:text-3xl text-white py-2">Code Studio</h1>
        <div className="inline-flex items-center justify-start gap-1 lg:gap-4 ">
          <ButtonUi
            label={"Runner"}
            icon={<FaPlay className={'w-3 h-3 lg:w-4 lg:h-4'}/>}
            className={"bg-[#2a9134] rounded-sm text-white py-[10px] px-4 shadow-[0px_0px_15px_-10px_#00000077]"}
            clickHandler={runCode}
            disabled={codeEditorStore.language?.value === "Tanlang..." ? true : false}
          />
          <ChangeLanguageComponent />
        </div>
      </div>
        {/* <ButtonUi label={"System"} icon={<IoSettingsSharp className="w-3 h-3 lg:w-5 lg:h-5" />} className={'bg-[#fff] text-[#014f86] rounded-sm'}/> */}
    </div>
  );
};

export default CodeEditorHeaderComponent;
