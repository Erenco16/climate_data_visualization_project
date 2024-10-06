import React from "react";
import Charts from "./Charts";
import MapSegment from "./MapSegment";


const ViewTwo = () => {

    const titles = [
        "Positive Graphs",
        "True Data example",
        "Overview Real Data",
        "CO2 Chart",
        "CH4 Chart",
        "CO Chart",
        "H2OChart%"
    ];
    const texts = [
        "Through Data, we can see that the sum of Carbon Dioxide (CO2), Methane (CH4), Carbon Monoxide (CO) and Water Vapor Percentage has reduced significantly over the 10-year period of observation. The same results were noted throughout all the recording Sites. Does this mean that the environment is finally healing? That after all the years of commitment and using paper straws that we are finally seeing the fruits of our effort?",
        "No, unfortunately. But this is a testament to the age old saying of “if you go hunting for witches, you will find them”.  Data Is a powerful tool but it can both be used for good and bad depending on how we interpret it.  A good example is in the graph you see now, where if we slice the values to 2021, we get an overall positive graph, whereas if we slice it to 2023, we can an overall negative graph.",
        "If we instead look at more correctly interpreted data, we can see that the %H20, Variance of CH4 and Average CO2 levels have all gone up over the past 10 years. What is worse is that when we interact with the z-value or meters above ground value (zmAGL), we find out that the atmosphere closer to us has a high amount of CO2, CH4 and %H2O as time goes on.",
        "Although it may seem like overtime, the Total amount of CO2 has gone down (Light Green line), the minimum amount of CO2 emitted per year (Dark Green Line), has gradually increased. As Time goes on, we may be emitting a lesser quantity of CO2, but the Minimum amount of CO2 being emitted has continuously increased, which render out efforts in vain. We can also see that the average CO2 emitted has gone up by nearly 31ppm from 2011 to 2022.",
        "We see a similar type of result when we look at the Total amount of CH4 and the Minimum amount of CH4 emitted. If we want to interpret the data positively, we can say that the total amount of CH4 emissions have reduced as time goes on. However, the minimum amount of CH4 emitted has only ever gone up over the years. The average CH4 level have increased by 120ppb from the year 2011 to the year 2022.",
        "Carbon Monoxide or CO is a very poisonous and extremely dangerous gas that can be fatal in hours of high exposure. This makes the chart we see about the average CO levels much more alarming. Although it may seem like the total amount of CO emitted has been relatively the same over the past 9 years, the average CO has spiked continuously, now being at an all-time high of 190.26ppb as of 2023. It is a stark coast to back in 2011 when the average CO level was 158.14ppb.",
        "Water may be the evilest of evils. A high H2O percentage typically means that the climate in the surrounding area will turn warmer. As the years go on, we see a high spike after the COVID-19 pandemic. We can see that the average H2O% is currently increasing as we speak, making the environment around us hotter and more susceptible to global warming."];
    return (
        <>
            <MapSegment/>
            {[1, 2, 3, 4, 5, 6, 7].map((id) => (
                <Charts key={id} id={id} jsonFileName={"./dashboards.json"} texts={texts} titles={titles}/>
            ))}</>
    )
}

export default ViewTwo;