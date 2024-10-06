import React from "react";
const MapSegment = () => {
    return (
        <section>
            <div className="map-segment-wrapper">
                <div className="grid-item grid-item-1 map-item"><img src="../map.png"/>
                </div>
                <div className="grid-item grid-item-2">
                    <h2>In 2011, PennState University led INFLUX
                    </h2>
                    <p>A program funded by NSIT, located in Indianapolis to develop a better approach to measure climate change for urban environments.
                    </p>
                </div>

                <div className="grid-item grid-item-3">
                    <div className="item-1">
                        <h3>Cavity ring-down spectroscopy (CRDS)</h3>
                    </div>
                    <div className="item-2">
                        <div className="circle-img">
                            <img src="../svg/light-bulb.svg" />
                        </div>
                    </div>
                    <div className="item-3">
                        <p>Is a trace-gas analysis instrument that can measure nearly every small gas-phase molecule (e.g., CO2, H20) with superb precision</p>
                    </div>
                </div>

                <div className="grid-item grid-item-4">
                    <div className="item-1">
                        <h3>The Indianapolis Flux Experiment (INFLUX)</h3>
                    </div>
                    <div className="item-2">
                        <div className="circle-img">
                            <img src="../svg/microscope-svg.svg" />
                        </div>
                    </div>
                    <div className="item-3">
                        <p>Is the initial research on improving methods of environmental measurements, experimenting on ground and aerial measuring methods.</p>
                    </div>
                </div>

                <div className="grid-item grid-item-5">
                    <div className="item-1">
                        <h3>CO2, CH4, CO and H2O%</h3>
                    </div>
                    <div className="item-2">
                        <div className="circle-img">
                            <img src="../svg/poison-svg.svg" />
                        </div>
                    </div>
                    <div className="item-3">
                        <p>Are known as Greenhouse Gases; some are harmful to wildlife and humans, but all of them are harmful to the environment.</p>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default MapSegment;