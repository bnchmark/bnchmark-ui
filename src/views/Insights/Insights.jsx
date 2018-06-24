import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// react plugin for creating vector maps
import {VectorMap} from "react-jvectormap";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import Tooltip from "material-ui/Tooltip";

// material-ui-icons
import ContentCopy from "material-ui-icons/ContentCopy";
import Store from "material-ui-icons/Store";
import InfoOutline from "material-ui-icons/InfoOutline";
import Warning from "material-ui-icons/Warning";
import DateRange from "material-ui-icons/DateRange";
import LocalOffer from "material-ui-icons/LocalOffer";
import Update from "material-ui-icons/Update";
import ArrowUpward from "material-ui-icons/ArrowUpward";
import AccessTime from "material-ui-icons/AccessTime";
import Accessibility from "material-ui-icons/Accessibility";
import Refresh from "material-ui-icons/Refresh";
import Edit from "material-ui-icons/Edit";
import Place from "material-ui-icons/Place";
import ArtTrack from "material-ui-icons/ArtTrack";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import Button from "components/CustomButtons/Button.jsx";
import StatsCard from "components/Cards/StatsCard.jsx";
import ChartCard from "components/Cards/ChartCard.jsx";
import PricingCard from "components/Cards/PricingCard.jsx";
import ImagePriceCard from "components/Cards/ImagePriceCard.jsx";

import {
    dailySalesChart,
    emailsSubscriptionChart,
    completedTasksChart
} from "variables/charts";

import insightsStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";

import priceImage1 from "assets/img/card-2.jpeg";
import priceImage2 from "assets/img/card-3.jpeg";
import priceImage3 from "assets/img/card-1.jpeg";
import Home from "material-ui-icons/Home";

const us_flag = require("assets/img/flags/US.png");
const de_flag = require("assets/img/flags/DE.png");
const au_flag = require("assets/img/flags/AU.png");
const gb_flag = require("assets/img/flags/GB.png");
const ro_flag = require("assets/img/flags/RO.png");
const br_flag = require("assets/img/flags/BR.png");

class Insights extends React.Component {
    state = {
        value: 0
    };
    handleChange = (event, value) => {
        this.setState({value});
    };

    handleChangeIndex = index => {
        this.setState({value: index});
    };

    render() {
        const {classes} = this.props;
        return (
            <div>
                {/*<GridContainer>*/}
                {/*<ItemGrid xs={12} sm={6} md={6} lg={3}>*/}
                {/*<StatsCard*/}
                {/*icon={ContentCopy}*/}
                {/*iconColor="orange"*/}
                {/*title="Used Space"*/}
                {/*description="49/50"*/}
                {/*small="GB"*/}
                {/*statIcon={Warning}*/}
                {/*statIconColor="danger"*/}
                {/*statLink={{ text: "Get More Space...", href: "#pablo" }}*/}
                {/*/>*/}
                {/*</ItemGrid>*/}
                {/*<ItemGrid xs={12} sm={6} md={6} lg={3}>*/}
                {/*<StatsCard*/}
                {/*icon={Store}*/}
                {/*iconColor="green"*/}
                {/*title="Revenue"*/}
                {/*description="$34,245"*/}
                {/*statIcon={DateRange}*/}
                {/*statText="Last 24 Hours"*/}
                {/*/>*/}
                {/*</ItemGrid>*/}
                {/*<ItemGrid xs={12} sm={6} md={6} lg={3}>*/}
                {/*<StatsCard*/}
                {/*icon={InfoOutline}*/}
                {/*iconColor="red"*/}
                {/*title="Fixed Issues"*/}
                {/*description="75"*/}
                {/*statIcon={LocalOffer}*/}
                {/*statText="Tracked from Github"*/}
                {/*/>*/}
                {/*</ItemGrid>*/}
                {/*<ItemGrid xs={12} sm={6} md={6} lg={3}>*/}
                {/*<StatsCard*/}
                {/*icon={Accessibility}*/}
                {/*iconColor="blue"*/}
                {/*title="Followers"*/}
                {/*description="+245"*/}
                {/*statIcon={Update}*/}
                {/*statText="Just Updated"*/}
                {/*/>*/}
                {/*</ItemGrid>*/}
                {/*</GridContainer>*/}

                <GridContainer>
                    <ItemGrid xs={6} sm={6} md={4}>
                        <PricingCard
                            title="IT"
                            price="20%"
                            description="This is good if your company size is between 2 and 10 Persons."
                            icon={Home}
                            iconColor="rose"
                            footer={
                                <Button round color="rose">
                                    UPDATE
                                </Button>
                            }
                        />
                    </ItemGrid>
                    <ItemGrid xs={6} sm={6} md={4}>
                        <PricingCard
                            title="Accounting"
                            price="20%"
                            description="This is good if your company size is between 2 and 10 Persons."
                            icon={Home}
                            iconColor="rose"
                            footer={
                                <Button round color="rose">
                                    Choose plan
                                </Button>
                            }
                        />
                    </ItemGrid>
                </GridContainer>
            </div>
        );
    }
}

Insights.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(insightsStyle)(Insights);
