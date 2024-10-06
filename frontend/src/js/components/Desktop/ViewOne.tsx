import React from "react";
import Charts from "./Charts";
import MapSegment from "./MapSegment";
const ViewOne = () => {
    return (
        <>
            <MapSegment/>
            {[1, 2, 3, 4, 5].map((id) => (
                <Charts key={id} id={id} jsonFileName={"./presentations.json"} />
            ))}</>
    )
}

export default ViewOne;