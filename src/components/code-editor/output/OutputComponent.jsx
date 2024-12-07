import React from 'react'
import { useSelector } from 'react-redux'

const OutputComponent = ({ className }) => {
    const executedCodeStore = useSelector(state => state.codeeditor.executedCode)

  return (
    <div className={` h-[45vh] bg-[#222222] p-1 text-white font-[monospace] rounded-sm mb-2 overflow-scroll ${className}`}>
        <h3 className='sticky top-0 left-0 text-gray-700 text-md px-2 '>Output:</h3>
        <pre className='h-[40vh] px-2 text-green-500'>
            {
                executedCodeStore.value ? executedCodeStore.value : `
* * *   *   *   *    *
*   *   *   *   * *  *
* *     *   *   *  * *
*   *    * *    *    *
--------------------------
 * *    *    * * *   * * *
*     *   *  *    *  * *
*     *   *  *    *  * 
 * *    *    * * *   * * *
`
            }
        </pre>
    </div>
  )
}

export default OutputComponent