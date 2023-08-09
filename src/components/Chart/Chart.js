import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataValue => dataValue.value);
    const maximumValue = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    max={maximumValue}
                    label={dataPoint.label} 
                />
            ))}
        </div>
    );
};

export default Chart;