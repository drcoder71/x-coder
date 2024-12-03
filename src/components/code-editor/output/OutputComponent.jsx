import React from 'react'
import { useSelector } from 'react-redux'

const OutputComponent = () => {
    const executedCode = useSelector(state => state.executedcode)

  return (
    <div className=' bg-[#1e1e1e] p-2 text-white font-[monospace]'>
        <div className='h-[80vh]'>
            {
                executedCode.value ? executedCode.value : 'Code is missing'
            }
        </div>
    </div>
  )
}

export default OutputComponent