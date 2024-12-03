import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import ButtonUI from "../../ui/ButtonUi";
import ChangeLanguageComponent from "../select-language/SelectLangComponent";
import ButtonUi from "../../ui/ButtonUi";
import { executeCode } from "../../../api/code.api";
import { useDispatch, useSelector } from "react-redux";
import { ExecuteCodeSlice, ExecutedCode } from "../../../features/execute-cpde/executeCodeSlice";

const CodeEditorHeaderComponent = ({ editorRef, SetOutput }) => {
    const dispatch = useDispatch()
    const selectedLanguage = useSelector(state => state.programminglanguage)

    const runCode = async () => {
        const code = editorRef.current.getValue()
        if(!code) return 
        try {
            const {run: result } = await executeCode(selectedLanguage.value, code)
            dispatch(ExecutedCode(result.output))
        } catch (err) {
            console.log(err);
        } finally {

        }
    }

  return (
    <div className="flex items-center justify-between my-2">
      <div className="w-[150px]">
        <h3 className="text-2xl text-white font-bold">File Coding</h3>
      </div>
      <div className="w-[480px] flex-1"></div>
      <div className="w-[300px] flex justify-end items-center gap-3">
        <div>
            <ChangeLanguageComponent />
        </div>
        <div>
            <ButtonUi label={'run code'} clickHandler={runCode} className={'bg-[#2c6e49] text-gray-300 rounded-md shadow-[0px_0px_13px_1px_white'}/>
        </div>
      </div>
    </div>
  );
};

export default CodeEditorHeaderComponent;
