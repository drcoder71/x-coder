import { Editor } from '@monaco-editor/react'
import React, { useState } from 'react'
import CodeEditorComponent from '../../components/code-editor/CodeEditorComponent'
import SelectLangComponent from '../../components/code-editor/SelectLangComponent'
import OutputEditorComponent from '../../components/output-editor/outputEditorComponent'

const CompilerPage = () => {
  return (
    <div className='text-4xl'>
        <div className=''>
            <div className=''>
                <SelectLangComponent/>
                <CodeEditorComponent />
            </div>
                {/* <OutputEditorComponent /> */}
        </div>
    </div>
  )
}

export default CompilerPage