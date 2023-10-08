import React from 'react'
import Firstshow from '../../components/sections/companyparts/firstShow'
import Kamp from '../../components/sections/companyparts/kompaniya'
import Litsenziya from '../../components/sections/companyparts/litsenziya'
import Hamkorlar from '../../components/sections/companyparts/hamkor'
import Foydalanuvchi from '../../components/sections/companyparts/foydalanuvchilar'

export default function Company() {
  return (
    <>
        <Firstshow/>
        <Kamp/>
        <Litsenziya/>
        <Hamkorlar/>
        <Foydalanuvchi/>
    </>
  )
}
