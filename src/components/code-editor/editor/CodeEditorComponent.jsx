import { Editor } from "@monaco-editor/react";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { CODE_SNIPPET } from "../../../constants/programmingLangData";
import CodeEditorHeaderComponent from "../header/CodeEditorHeaderComponent";
import OutputComponent from "../output/OutputComponent";

const CodeEditorComponent = () => {
  const [output, SetOutput] = useState(null)
    const selectLanguage = useSelector(state => state.programminglanguage.value)
    const editorRef = useRef()
  const [value, setValue] = useState(" ");

  const onMount = (editor) => {
    editorRef.current = editor
    
    editor.focus()
  }

  return (
    <div className="lg:w-[85%] mx-auto w-[95%]">
      <CodeEditorHeaderComponent editorRef={editorRef} SetOutput={SetOutput}/>
      <div className="flex items-center justify-center gap-2 flex-col lg:flex-row">
        <div className="lg:w-[50%] p-2 bg-[#1e1e1e] w-[100%]">
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
        <div className="w-[100%] lg:w-[50%]">
          <OutputComponent output={output}/>
        </div>
      </div>
    </div>
  );
};

export default CodeEditorComponent;
