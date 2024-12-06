import React from 'react'
import OutputComponent from '../code-editor/output/OutputComponent'
import InformationLanguageComponent from '../code-editor/information-language/InformationLanguageComponent'
import CodeEditorComponent from '../code-editor/editor/CodeEditorComponent'

const RegularLayout = () => {
  return (
    <div className="relative flex items-start justify-center gap-2 flex-col lg:flex-row">
        <CodeEditorComponent />
        <div className="w-[100%] lg:w-[28%] overflow-hidden">
          <OutputComponent />
          <InformationLanguageComponent />
        </div>
      </div>
  )
}

export default RegularLayout