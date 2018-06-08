import React from "react";

// material-ui-icons
import Face from "material-ui-icons/Face";
import RecordVoiceOver from "material-ui-icons/RecordVoiceOver";
// import Email from "material-ui-icons/Email";

// material-ui components
import FormControl from "material-ui/Form/FormControl";
import withStyles from "material-ui/styles/withStyles";
import Select from "material-ui/Select";
import MenuItem from "material-ui/Menu/MenuItem";
import InputLabel from "material-ui/Input/InputLabel";
import InputAdornment from "material-ui/Input/InputAdornment";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import PictureUpload from "components/CustomUpload/PictureUpload.jsx";
import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";

import {profession_list} from "./data/AboutData";

const style = {
    infoText: {
        fontWeight: "300",
        margin: "10px 0 30px",
        textAlign: "center"
    },
    inputAdornmentIcon: {
        color: "#555"
    },
    inputAdornment: {
        top: "3px",
        position: "relative",
    },
    choiche: {
        textAlign: "center",
        cursor: "pointer",
        marginTop: "20px"
    },
    ...customSelectStyle
};


class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            firstnameState: "",
            lastname: "",
            lastnameState: "",
            email: "",
            emailState: "",
            profession: "",
            professionState: "",
            title: "",
            titleState: "",
            domain: "",
            domainState: "",
            teamSize: "",
            teamSizeState: "",
            simpleSelect: "",
        };
    }

    // function that returns true if value is email, false otherwise
    verifyEmail(value) {
        var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailRex.test(value)) {
            return true;
        }
        return false;
    }

    // function that verifies if a string has a given length or not
    verifyLength(value, length) {
        if (value.length >= length) {
            return true;
        }
        return false;
    }

    handleSelectChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    change(event, stateName, type, stateNameEqualTo) {
        switch (type) {
            // case "email":
            //     if (this.verifyEmail(event.target.value)) {
            //         this.setState({[stateName + "State"]: "success"});
            //     } else {
            //         this.setState({[stateName + "State"]: "error"});
            //     }
            //     break;
            case "length":
                if (this.verifyLength(event.target.value, stateNameEqualTo)) {
                    this.setState({[stateName + "State"]: "success"});
                } else {
                    this.setState({[stateName + "State"]: "error"});
                }
                break;
            default:
                break;
        }
        this.setState({[stateName]: event.target.value});
    }

    isValidated() {
        if (
            this.state.firstnameState === "success" &&
            this.state.lastnameState === "success" &&
            // this.state.professionState === "success" &&
            this.state.domainState === "success" &&
            this.state.titleState === "success"
        // this.state.teamSizeState === "success"
        ) {
            return true;
        } else {
            if (this.state.firstnameState !== "success") {
                this.setState({firstnameState: "error"});
            }
            if (this.state.lastnameState !== "success") {
                this.setState({lastnameState: "error"});
            }
            // if (this.state.professionState !== "success") {
            //     this.setState({professionState: "error"});
            // }
            if (this.state.titleState !== "success") {
                this.setState({titleState: "error"});
            }
            if (this.state.domainState !== "success") {
                this.setState({domainState: "error"});
            }
            // if (this.state.teamSizeState !== "success") {
            //     this.setState({teamSizeState: "error"});
            // }
        }
        return false;
    }

    getValues() {
        return this.state;
    }

    render() {
        const {classes, auth} = this.props;

        console.log(auth);

        return (
            <GridContainer justify="center">

                <ItemGrid xs={12} sm={12}>
                    <h4 className={classes.infoText}>Let's start with the basic information</h4>
                </ItemGrid>


                <ItemGrid xs={12} sm={4}>
                    <PictureUpload/>
                </ItemGrid>

                {/*Name */}
                <ItemGrid xs={12} sm={6}>

                    <CustomInput
                        success={this.state.firstnameState === "success"}
                        error={this.state.firstnameState === "error"}
                        labelText={
                            <span>First Name <small>(required)</small></span>
                        }
                        id="firstname"
                        formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            onChange: event => this.change(event, "firstname", "length", 3),
                            endAdornment: (
                                <InputAdornment position="end" className={classes.inputAdornment}>
                                    <Face className={classes.inputAdornmentIcon}/>
                                </InputAdornment>
                            )
                        }}
                    />
                    <CustomInput
                        success={this.state.lastnameState === "success"}
                        error={this.state.lastnameState === "error"}
                        labelText={
                            <span>Last Name <small>(required)</small></span>
                        }
                        id="lastname"
                        formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            onChange: event => this.change(event, "lastname", "length", 3),
                            endAdornment: (
                                <InputAdornment position="end" className={classes.inputAdornment}>
                                    <RecordVoiceOver className={classes.inputAdornmentIcon}/>
                                </InputAdornment>
                            )
                        }}
                    />
                </ItemGrid>


                {/*Title*/}
                <ItemGrid sm={5}>
                    <CustomInput
                        success={this.state.titleState === "success"}
                        error={this.state.titleState === "error"}
                        labelText={<span>Title <small>(required)</small></span>}
                        id="title"
                        formControlProps={{fullWidth: true}}
                        inputProps={{
                            onChange: event => this.change(event, "title", "length", 3),
                            endAdornment: (
                                <InputAdornment position="end" className={classes.inputAdornment}>
                                    <Face className={classes.inputAdornmentIcon}/>
                                </InputAdornment>
                            )
                        }}
                    />
                </ItemGrid>


                <ItemGrid xs={10} md={3} lg={5}>
                    <FormControl fullWidth className={classes.selectFormControl}>
                        <InputLabel
                            htmlFor="profession"
                            error
                            className={classes.selectLabel}
                        >
                            <span>Professional Accreditation</span>
                        </InputLabel>
                        <Select
                            MenuProps={{
                                className: classes.selectMenu
                            }}
                            classes={{
                                select: classes.select
                            }}
                            value={this.state.profession}
                            onChange={this.handleSelectChange}
                            inputProps={{
                                name: "profession",
                                id: "profession"
                            }}
                        >
                            <MenuItem disabled classes={{root: classes.selectMenuItem}}>
                                Professional Accreditation
                            </MenuItem>
                            {profession_list.map((item, index) => {
                                    return <MenuItem
                                        key={index}
                                        classes={{
                                            root: classes.selectMenuItem,
                                            selected: classes.selectMenuItemSelected
                                        }}
                                        value={item.value}
                                    >{item.title}</MenuItem>
                                }
                            )}
                        </Select>
                    </FormControl>
                </ItemGrid>

                <ItemGrid xs={12} sm={8}>
                    <FormControl fullWidth className={classes.selectFormControl}>
                        <InputLabel htmlFor="domain" className={classes.selectLabel}>
                            <span>Domains you oversee </span>
                        </InputLabel>
                        <Select
                            MenuProps={{
                                className: classes.selectMenu
                            }}
                            classes={{
                                select: classes.select
                            }}
                            value={this.state.domain}
                            onChange={this.handleSelectChange}
                            inputProps={{
                                name: "domain",
                                id: "domain"
                            }}
                        >
                            <MenuItem
                                disabled
                                classes={{
                                    root: classes.selectMenuItem
                                }}
                            >
                                Domains you oversee
                            </MenuItem>
                            <MenuItem
                                classes={{
                                    root: classes.selectMenuItem,
                                    selected: classes.selectMenuItemSelected
                                }}
                                value="finance"
                            >
                                Finance
                            </MenuItem>
                            <MenuItem
                                classes={{
                                    root: classes.selectMenuItem,
                                    selected: classes.selectMenuItemSelected
                                }}
                                value="tax"
                            >
                                Tax
                            </MenuItem>
                        </Select>
                    </FormControl>
                </ItemGrid>


                <ItemGrid xs={12} sm={2}>
                    <FormControl fullWidth className={classes.selectFormControl}>
                        <InputLabel htmlFor="teamSize" className={classes.selectLabel}>
                            Team Size
                        </InputLabel>
                        <Select
                            MenuProps={{
                                className: classes.selectMenu
                            }}
                            classes={{
                                select: classes.select
                            }}
                            value={this.state.teamSize}
                            onChange={this.handleSelectChange}
                            inputProps={{
                                name: "teamSize",
                                id: "team-size"
                            }}
                        >
                            <MenuItem
                                disabled
                                classes={{
                                    root: classes.selectMenuItem
                                }}
                            >
                                Team Size
                            </MenuItem>
                            <MenuItem
                                classes={{
                                    root: classes.selectMenuItem,
                                    selected: classes.selectMenuItemSelected
                                }}
                                value="1"
                            >
                                1
                            </MenuItem>
                            <MenuItem
                                classes={{
                                    root: classes.selectMenuItem,
                                    selected: classes.selectMenuItemSelected
                                }}
                                value="2"
                            >
                                2
                            </MenuItem>
                        </Select>
                    </FormControl>
                </ItemGrid>


                {/*<ItemGrid xs={12} sm={12} md={12} lg={10}>*/}
                {/*<CustomInput*/}
                {/*success={this.state.emailState === "success"}*/}
                {/*error={this.state.emailState === "error"}*/}
                {/*labelText={*/}
                {/*<span>*/}
                {/*Email <small>(required)</small>*/}
                {/*</span>*/}
                {/*}*/}
                {/*id="email"*/}
                {/*formControlProps={{*/}
                {/*fullWidth: true*/}
                {/*}}*/}
                {/*inputProps={{*/}
                {/*onChange: event => this.change(event, "email", "email"),*/}
                {/*endAdornment: (*/}
                {/*<InputAdornment position="end" className={classes.inputAdornment}>*/}
                {/*<Email className={classes.inputAdornmentIcon}/>*/}
                {/*</InputAdornment>*/}
                {/*)*/}
                {/*}}*/}
                {/*/>*/}
                {/*</ItemGrid>*/}
            </GridContainer>
        );
    }
}


export default withStyles(style)(About);
