import React, { useState, useEffect } from 'react';
import '../css/styles.css';
import MobileLayout from "./MobileLayout";
import DesktopLayout from "./DesktopLayout";
import {useMediaQuery} from "react-responsive";
import LoadingPage from "./LoadingPage";
export default function App() {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() =>
        {setIsLoading(false)
        }, 4000)
    }, []);
    return(isLoading ? <LoadingPage/> : (isTabletOrMobile ? (<MobileLayout/>) :(<DesktopLayout/>)));

}
