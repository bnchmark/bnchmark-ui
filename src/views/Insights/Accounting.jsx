import React from "react";

// material-ui components
import withStyles from "material-ui/styles/withStyles";

// material ui icons

// core components

// style for this view
import validationFormsStyle from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx";

import Form from "react-jsonschema-form";
import {ReactTypeformEmbed} from 'react-typeform-embed';


const schema = {
    // "title": "A registration form",
    // "description": "A simple form example.",
    "type": "object",
    "required": [
        "firstName",
        "lastName"
    ],
    "properties": {
        "firm": {
            "type": "string",
            "title": "Who is your main Accounting Firm?"
        },
        "services": {
            "type": "array",
            "title": "What services do you engage accounting firms for?",
            "items": {
                type: "string",
                enum: [
                    "Financial Statement Assurance",
                    "Canadian Tax",
                    "US Tax",
                    "Transfer Pricing",
                    "Controls Reports",
                    "SR&ED",
                    "Regulatory Compliance",
                    "OTHER"
                ],
            },
            "uniqueItems": true
        },
        "partner_firm": {
            "type": "string",
            "title": "Who is the main Partner at the firm?"
        },

        "provider": {
            type: "string",
            title: "Name of the service provider?"
        },

        "service_cost": {
            "type": "number",
            "title": "Amount you pay for the service?"
        },

        "partner_contact": {
            "type": "string",
            "title": "Who is the partner (main contact) you work with?"
        }
    }
};

const UISchema = {
    "firstName": {
        "ui:autofocus": true,
        "ui:emptyValue": ""
    },
    "age": {
        "ui:widget": "updown",
        "ui:title": "Age of person",
    },
    "services": {
        "ui:widget": "checkboxes",
        classNames: "task-title foo-bar"
    },
    "bio": {
        "ui:widget": "textarea"
    },
    "password": {
        "ui:widget": "password",
        "ui:help": "Hint: Make it strong!"
    },
    "date": {
        "ui:widget": "alt-datetime"
    },
    "telephone": {
        "ui:options": {
            "inputType": "tel"
        }
    }
};

const log = (type) => console.log.bind(console, type);

class Accounting extends React.Component {
    constructor(props) {
        super(props);

    }

    submit(data) {
        console.log(data)
    }


    render() {
        const {classes} = this.props;
        return <ReactTypeformEmbed
            url={'https://bnchmark.typeform.com/to/e1h9fF'}
            hideFooter={true}
            onSubmit={this.submit}
        />
        // return (
        //     <GridContainer>
        //         <ItemGrid xs={12} sm={12} md={6}>
        //             <Form
        //                 uiSchema={UISchema}
        //                 schema={schema}
        //                 onChange={log("changed")}
        //                 onSubmit={log("submitted")}
        //                 onError={log("errors")}/>
        //         </ItemGrid>
        //     </GridContainer>
        // );
    }
}

export default withStyles(validationFormsStyle)(Accounting);
