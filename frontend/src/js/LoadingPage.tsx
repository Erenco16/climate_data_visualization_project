import React, {useState, useEffect} from "react";
import SVGDrawing from "./components/SVGDrawing";
import '../css/loading.css'

const LoadingPage = () => {
    return (
        <>
            <div className="loading-animation">
                <SVGDrawing width={300} height={300}/>
            </div>
        </>
    )
}

export default LoadingPage;