import React, {useState} from 'react'
import './style/index.scss'
import {HomeBanner} from "@/composent/header/Banner.jsx";
import {HomeBody} from "@/pages/Home/compose/HomeBody.jsx";
import {SearchBox} from "@/composent/header/SearchBox.jsx";
import headerTitle from '@/assets/img/home/home_banner_title.png'

export function Home() {
    const [checkBoxShow, changeCheckbox] = useState(false)
    return (
        <div className={"home_container"}>
            <HomeBanner
                headerTitle={headerTitle}
                changeCheckbox={changeCheckbox}/>
            <HomeBody/>
            {
                checkBoxShow ? <SearchBox changeCheckbox={changeCheckbox}/> : <></>
            }
        </div>
    )
}


