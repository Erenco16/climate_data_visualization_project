import React from "react";
import Charts from "./Charts";
import MapSegment from "./MapSegment";
const ViewOne = () => {
    return (
        <>
            <MapSegment/>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
                <Charts key={id} id={id} jsonFileName={"./dashboards.json"} />
            ))}</>
    )
}

export default ViewOne;