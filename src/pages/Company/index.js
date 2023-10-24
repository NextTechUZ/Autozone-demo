import React from 'react'
import Firstshow from '../../components/sections/companyparts/FirstShow'
import Kamp from '../../components/sections/companyparts/Kompaniya'
// import Litsenziya from '../../components/sections/companyparts/litsenziya'
import Hamkorlar from '../../components/sections/companyparts/Hamkor'
import Foydalanuvchi from '../../components/sections/companyparts/Foydalanuvchilar'

export default function Company() {
  return (
    <>
        <Firstshow/>
        <Kamp/>
        {/* <Litsenziya/> */}
        <Hamkorlar/>
        <Foydalanuvchi/>
    </>
  )
}
