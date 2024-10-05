import React, { useState, useEffect } from 'react';
import '../css/styles.css';
import MobileLayout from "./MobileLayout";
import DesktopLayout from "./DesktopLayout";
import {useMediaQuery} from "react-responsive";

export default function App() {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    return isTabletOrMobile ?
        (<MobileLayout/>) :(<DesktopLayout/>);

}
