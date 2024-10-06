import React from "react";
const MapSegment = () => {
    return (
        <section>
            <div className="map-segment-wrapper">
                <div className="grid-item grid-item-1 map-item">
                    <a href="https://earth.gov/ghgcenter/custom-interfaces/nist-interface/?agency=nist&region=in&zoom-level=8" target="_blank">
                    <img src="../map.png"/>
                    </a>
                </div>
                <div className="grid-item grid-item-2">
                    <h2>In <a href="https://earth.gov/ghgcenter/data-catalog/influx-testbed-ghg-concentrations">2011</a>, <a href="https://www.psu.edu/" target="_blank">PennState University</a> led INFLUX
                    </h2>
                    <p>A program funded by <a href="https://www.nist.gov/" target="_blank">NIST</a>, located in Indianapolis to develop a better approach to measure climate change for urban environments.
                    </p>
                </div>

                <div className="grid-item grid-item-3">
                    <div className="item-1">
                        <h3>Cavity ring-down spectroscopy<a href="https://www.picarro.com/company/technology/crds" target="_blank"> (CRDS)</a>
                        </h3>
                    </div>
                    <div className="item-2">
                        <div className="circle-img">
                            <img src="../svg/light-bulb.svg" />
                        </div>
                    </div>
                    <div className="item-3">
                        <p>Is a trace-gas analysis instrument that can measure nearly every small <a href="https://www.sciencedirect.com/topics/engineering/gas-phase" target="_blank">gas-phase</a> molecule (e.g., CO2, H20) with superb precision</p>
                    </div>
                </div>

                <div className="grid-item grid-item-4">
                    <div className="item-1">
                        <h3>The <a href="https://en.wikipedia.org/wiki/Indianapolis" target="_blank">Indianapolis</a> Flux Experiment (<a href="https://sites.psu.edu/influx/#:~:text=The%20Indianapolis%20Flux%20Experiment%20(INFLUX,gas%20fluxes%20from%20urban%20environments." target="_blank">INFLUX</a>)</h3>
                    </div>
                    <div className="item-2">
                        <div className="circle-img">
                            <img src="../svg/microscope-svg.svg" />
                        </div>
                    </div>
                    <div className="item-3">
                        <p>Is the initial research on improving methods of environmental measurements, experimenting on <a href="https://www.researchgate.net/publication/258625198_Urban-Dome_GHG_Monitoring_Challenges_and_Perspectives_from_the_INFLUX_Project" target="_blank">ground and aerial measuring methods.</a></p>
                    </div>
                </div>

                <div className="grid-item grid-item-5">
                    <div className="item-1">
                        <h3><a href="https://climate.nasa.gov/vital-signs/carbon-dioxide/?intent=121" target="_blank"> CO2</a>, <a href="https://climate.nasa.gov/vital-signs/methane/?intent=121" target="_blank">CH4</a>,  <a href="https://www2.hse.ie/conditions/carbon-monoxide-poisoning/" target="_blank">CO</a> and <a href="https://science.nasa.gov/earth/climate-change/steamy-relationships-how-atmospheric-water-vapor-amplifies-earths-greenhouse-effect/" target="_blank">H2O%</a></h3>
                    </div>
                    <div className="item-2">
                        <div className="circle-img">
                            <img src="../svg/poison-svg.svg" />
                        </div>
                    </div>
                    <div className="item-3">
                        <p>Are known as <a href="https://science.nasa.gov/climate-change/faq/what-is-the-greenhouse-effect/" target="_blank">Greenhouse Gases</a>; some are harmful to wildlife and humans, but all of them are harmful to the environment.</p>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default MapSegment;