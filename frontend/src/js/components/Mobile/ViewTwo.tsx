import React from "react";
import Charts from "../Desktop/Charts";

const ViewTwo = () => {
    return (
        <>
            {[1, 2, 3, 4].map((id) => (
                <Charts key={id} id={id} jsonFileName={"./dashboards.json"} />
            ))}</>
    )
}

export default ViewTwo;