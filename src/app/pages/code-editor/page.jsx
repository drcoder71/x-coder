import React from 'react'
import { CodeEditorHeaderComponent } from '../../../components/code-editor'
import { EditorLayout } from '../../../components/layout-editor'

const CodeEditorPage = () => {
  return (
    <div className='lg:w-[85%] mx-auto w-[95%] py-3 rounded-lg'>
        <CodeEditorHeaderComponent />
        <EditorLayout layout={'regular'}/>
    </div>
  )
}

export default CodeEditorPage