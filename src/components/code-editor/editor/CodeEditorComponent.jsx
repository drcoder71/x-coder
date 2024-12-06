import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CODE_SNIPPET } from "../../../constants/programmingLangData";
import { SetEditorCode } from "../../../features/code-editor/codeEditorSlice";

const CodeEditorComponent = () => {
  const [value, setValue] = useState(" ");
  const codeEditorStore = useSelector((state) => state.codeeditor);
  const dispatch = useDispatch()

  const onMount = (editor) => {
    dispatch(SetEditorCode(editor))
    editor.focus();
  };

  return (
    <div className="lg:w-[72%] w-[100%] h-[50vh] lg:h-[80vh]">
      <Editor
        height="100%"
        width={"100%"}
        theme={"vs-dark"}
        language={codeEditorStore.language.value}
        defaultValue={CODE_SNIPPET[codeEditorStore.language.value]}
        value={value}
        onChange={(val) => setValue(val)}
        onMount={onMount}
      />
    </div>
  );
};

export default CodeEditorComponent;
