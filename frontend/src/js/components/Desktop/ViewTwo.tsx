import React from "react";
import Charts from "./Charts";
import MapSegment from "./MapSegment";


const ViewTwo = () => {
    return (
        <>
            <MapSegment/>
            {[1, 2, 3, 4].map((id) => (
                <Charts key={id} id={id} jsonFileName={"./dashboards.json"} />
            ))}</>
    )
}

export default ViewTwo;