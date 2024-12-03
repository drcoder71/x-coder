import React, { useState } from 'react'
import { LANGUAGE_VERSION } from '../../../constants/programmingLangData'
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../../../features/select-language/selectLanguageSlice';
import {ButtonUi, ListItemUi} from '../../ui'

const languages = Object.entries(LANGUAGE_VERSION)

console.log(languages);


const ChangeLanguageComponent = () => {
    const selectLanguage = useSelector(state => state.programminglanguage.value)
    const dispatch = useDispatch()
    const [isActive, setActive] = useState(false)

  return (
    <div className='relative'>
      <ButtonUi label={selectLanguage} className={'rounded-md text-gray-300'} clickHandler={() => setActive(true)}/>
      {
        isActive ? (
          <ul className='absolute top-[50px] right-[0px] z-[999] rounded-xl bg-[#929191] overflow-hidden'>
            {
              languages.map(([lang, version]) => (
                <ListItemUi label={lang} key={lang} className={'py-2 p-3 cursor-pointer border-b border-[#7d7d7d]'} clickHandler={() => {
                  dispatch(changeLanguage(lang))
                  setActive(false)
                }}>
                  <span>{lang}</span>
                  <span>{version}</span>
                </ListItemUi>
              ))
            }
          </ul>
        ) : ''
      }
    </div>
  )
}

export default ChangeLanguageComponent