import React from "react";

// core components
import Wizard from "components/Wizard/Wizard.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import ItemGrid from "components/Grid/ItemGrid.jsx";
import AuthService from "auth/Auth"
import About from "./WizardSteps/About";
import Company from "./WizardSteps/Company.jsx";
// import Step3 from "./WizardSteps/Step3.jsx";


const auth = new AuthService();

class WizardView extends React.Component {
    submitForm(data) {

        console.log(data);
        return;
        // var url = 'http://localhost:3000/api/data'
        auth.fetch("http://localhost:3001/api/profile", {
            method: 'POST',
            body: JSON.stringify(data)
        }).then((data) => {
            console.log(data)
        });
    }

    render() {


        return (
            <GridContainer justify="center">
                <ItemGrid xs={12} sm={8}>
                    <Wizard
                        validate
                        finishButtonClick={this.submitForm}
                        steps={[{stepName: "About", stepComponent: About, stepId: "about"}
                            // {stepName: "Company", stepComponent: Company, stepId: "company"}
                            // {stepName: "Address", stepComponent: Step3, stepId: "address"}
                        ]}
                        title="Build Your Profile"
                        subtitle="This information will let us know more about you."
                    />
                </ItemGrid>
            </GridContainer>
        );
    }
}

export default WizardView;
