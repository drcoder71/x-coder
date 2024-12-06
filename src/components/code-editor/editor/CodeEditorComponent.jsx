import { Editor } from "@monaco-editor/react";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { CODE_SNIPPET } from "../../../constants/programmingLangData";
import CodeEditorHeaderComponent from "../header/CodeEditorHeaderComponent";
import OutputComponent from "../output/OutputComponent";
import InformationLanguageComponent from "../information-language/InformationLanguageComponent";

const CodeEditorComponent = () => {
  const [output, SetOutput] = useState(null)
    const selectLanguage = useSelector(state => state.programminglanguage.value)
    const editorRef = useRef()
  const [value, setValue] = useState(" ");

  const onMount = (editor) => {
    editorRef.current = editor
    
    editor.focus()
  }  

  const MouseDown = (e) => {
    console.log(e);
  }

  return (
    <div className="lg:w-[85%] mx-auto w-[95%]">
      <CodeEditorHeaderComponent editorRef={editorRef} SetOutput={SetOutput}/>
      <div className="relative flex items-start justify-center flex-col lg:flex-row">
        <div className="lg:w-[72%] w-[100%]">
        <Editor
          height="80vh"
          width={'100%'}
          theme={"vs-dark"}
          language={selectLanguage}
          defaultValue={CODE_SNIPPET[selectLanguage]}
          value={value}
          onChange={(val) => setValue(val)}
          onMount={onMount}
        />
        </div>
        <div className="absolute top-0 left-[72%] h-full w-[7px] rounded-sm bg-gray-700 translate-x-[-50%] group hover:cursor-ew-resize" id="controller__resize" onMouseDown={MouseDown}>
          <div className="w-[3px] h-[80%] translate-x-[50%] translate-y-[15%] rounded-sm bg-gray-800 group-hover:bg-gray-900 "></div>
        </div>
        <div className="w-[100%] lg:w-[28%]">
          <OutputComponent output={output}/>
          <InformationLanguageComponent />
        </div>
      </div>
    </div>
  );
};

export default CodeEditorComponent;
