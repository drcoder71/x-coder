import React from 'react'
import { useSelector } from 'react-redux'

const OutputComponent = () => {
    const executedCode = useSelector(state => state.executedcode)

  return (
    <div className=' bg-[#1e1e1e] p-1 text-white font-[monospace] rounded-sm mb-2'>
        <h3 className='text-gray-700 text-md px-2 '>Output:</h3>
        <pre className='h-[40vh] px-2'>
            {
                executedCode.value ? executedCode.value : `
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