import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { StyledChartSection } from "../../styles";

function TheChart() {

    return (

        <StyledChartSection>
            <PieChart
                data={
                    [
                        { title: `grafico`, value: 10, color: '#E38624' },
                        { title: `gráfico2`, value: 50, color: '#E22291' }

                    ]}
                startAngle={90}
                animate={true}
                viewBoxSize={[250, 100]}
                lineWidth={50}
            />
        </StyledChartSection>

    )
} export default TheChart;