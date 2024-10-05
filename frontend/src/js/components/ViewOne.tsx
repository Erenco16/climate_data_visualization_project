import React from "react";
import Charts from "./Charts";

const ViewOne = () => {
    return (
        <>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
                <Charts key={id} id={id} jsonFileName={"./dashboards.json"} />
            ))}</>
    )
}

export default ViewOne;