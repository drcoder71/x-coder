import React from "react";
import OutputComponent from "../code-editor/output/OutputComponent";
import InformationLanguageComponent from "../code-editor/information-language/InformationLanguageComponent";
import CodeEditorComponent from "../code-editor/editor/CodeEditorComponent";

const ParallelLayout = () => {
  return (
    <>
      <div className="relative flex items-start justify-center gap-2 flex-col lg:flex-row">
        <div className="w-[100%] lg:w-[28%] overflow-hidden">
            <InformationLanguageComponent className={"lg:h-[80vh]"}/>
        </div>
        <CodeEditorComponent className={'lg:w-[44%] lg:h-[80vh]'}/>
        <div className="w-[100%] lg:w-[28%] overflow-hidden">
          <OutputComponent className={"lg:h-[80vh]"}/>
        </div>
      </div>
    </>
  );
};

export default ParallelLayout;
