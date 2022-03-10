import { useEffect, useState } from "react";
import { Paper, Grid, Typography, Box, Zoom, Container, useMediaQuery } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { useSelector } from "react-redux";
// import Chart from "../../components/Chart/Chart.jsx";
import { trim, formatCurrency } from "../../helpers";
import {
  treasuryDataQuery,
  rebasesDataQuery,
  bulletpoints,
  tooltipItems,
  tooltipInfoMessages,
  itemType,
} from "./treasuryData.js";
import { useTheme } from "@material-ui/core/styles";
import "./treasury-dashboard.scss";
import apollo from "../../lib/apolloClient";
import InfoTooltip from "src/components/InfoTooltip/InfoTooltip.jsx";
import { allBondsMap } from "src/helpers/AllBonds";
import Chart from "react-google-charts"
import { Pie3D } from 'react-pie3d'
import { useBonds, useWeb3Context } from "src/hooks";
import Coverflow from 'react-coverflow';
import team1 from '../../assets/nfts/01.png'
import team2 from '../../assets/nfts/02.png'
import team3 from '../../assets/nfts/03.png'
import team4 from '../../assets/nfts/04.png'
import team5 from '../../assets/nfts/05.png'


const fn = function () {
  /* do your action */
}

function Portfolio() {

  const smallerScreen = useMediaQuery("(max-width: 650px)");
  const verySmallScreen = useMediaQuery("(max-width: 379px)");

  
  const busdBalance = useSelector(state => {
    return state.app.busdTreasuyBalance;
  });
  const busdPALBalance = useSelector(state => {
    return state.app.busdPALTreasuyBalance;
  });
  const { bonds } = useBonds();
  const purchased = bonds.map(bond => bond.purchased)
  return (
    <div id="treasury-dashboard-view" className={`${smallerScreen && "smaller"} ${verySmallScreen && "very-small"}`}>
      <Container
        style={{
          paddingLeft: smallerScreen || verySmallScreen ? "0" : "3.3rem",
          paddingRight: smallerScreen || verySmallScreen ? "0" : "3.3rem",
        }}
      >
        <Box className={`hero-metrics`}>
          <Paper className="ohm-card">
          <div>
            <h1>
            {(purchased[0] + purchased[1]).toFixed(2)}$ Purchased in Treasury 
            </h1>
            <Chart
                chartType="PieChart"
                loader={<div>Loading Pie Chart</div>}
                data={[
                    ['Student', 'English'],
                    ['BUSD ' + purchased[0]?.toString() +'$', purchased[0]],
                    ['PAL-BUSD ' + purchased[1]?.toFixed(2)+'$', purchased[1]]
                ]}
                options={{
                    is3D: true,
                    backgroundColor: "none",
                    // legend: {textStyle: {fontSize: 24, color: "#fff"}},
                    legendTextStyle: { color: '#FFF', fontSize: 18},
                    height: 300,
                    tooltip: {textStyle: {fontSize: 16}}
                    // slices: {
                    //   0: { color: "yellow" },
                    //   1: { color: "blue" },
                    // },
                    // legend: "none",
                    // pieSliceText: "none",
                }}
            />
          </div>
          <div>
            <h1>
              Token Balance in Treasury
            </h1>
            <Chart
                chartType="PieChart"
                loader={<div>Loading Pie Chart</div>}
                data={[
                    ['Student', 'English'],
                    ['BUSD ' + busdBalance?.toString(), busdBalance],
                    ['PAL ' + busdPALBalance?.toString(), busdPALBalance]
                ]}
                options={{
                    is3D: true,
                    backgroundColor: "none",
                    // legend: {textStyle: {fontSize: 24, color: "#fff"}},
                    legendTextStyle: { color: '#FFF', fontSize: 18},
                    height: 300,
                    tooltip: {textStyle: {fontSize: 16}},
                    slices: {
                      0: { color: "#008000" },
                      1: { color: "#FFA500" },
                    }
                    // legend: "none",
                    // pieSliceText: "none",
                }}
            />
          </div>
          </Paper>
        </Box>
        <Coverflow width="960" height="500"
          displayQuantityOfSide={1}
          navigation={false}
          enableScroll={true}
          clickable={true}
          active={0}
        >
      <div
        onClick={() => fn()}
        onKeyDown={() => fn()}
        role="menuitem"
        tabIndex="0"
      >
        <img
          src={team1}
          alt='CrossChain1'
          style={{
            display: 'block',
            width: '100%',
          }}
        />
      </div>
      <img src={team2} alt='CrossChain2' />
      <img src={team3} alt='CrossChain3' />
      <img src={team4} alt='CrossChain4' />
      <img src={team5} alt='CrossChain5' />
    </Coverflow>
      </Container>
    </div>
  );
}

export default Portfolio;


