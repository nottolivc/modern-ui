import React, { Component } from "react";
import PropTypes from "prop-types";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";


const theme = {
    //   fontFamily: "Roboto",
    //   headerBgColor: "#25274d",
    //   headerFontColor: "#fff",
    //   headerFontSize: "15px",
    //   botBubbleColor: '#25274d"',
    //   botFontColor: "#fff",
    //   userBubbleColor: "#fff",
    //   userFontColor: "#4a4a4a",
    fontFamily: 'Sans-serif',
    margin: "0",
    // alignItems: "center",
    // justifyContent: "right",
    // background: '#111',
    // color: '#fff'
};

class Review extends Component {
   constructor(props) {
      super(props);
      this.state = [{
         name: "",
         role: "",
         experience: "",
      }];
   }

   componentWillMount() {
      const { steps } = this.props;
      const { name, role, experience } = steps;
      this.setState([{ name, role, experience }]);
   }

   render() {
      const { name, role, experience } = this.state;
      return (
         <>
            <div style={{ width: "90%" }}>
               <h3>All Done</h3>
                        <h4>{name}</h4>
                        <h4>{role}</h4>
                        <h4>{experience}</h4>
            </div>
         </>
      );
   }
}

Review.propTypes = {
   steps: PropTypes.object,
};

Review.defaultProps = {
   steps: undefined,
};

const steps = [
   {
      id: "1",
      message: "What is your name?",
      trigger: "name",
   },
   {
      id: "name",
      user: true,
      trigger: "3",
   },
   {
      id: "3",
      message: "Client or developer?",
      trigger: "role",
   },
   {
      id: "role",
      options: [
         {
            value: "developer",
            label: "developer",
            trigger: "5",
         },
         { value: "client", label: "client", trigger: "5" },
      ],
   },
   {
      id: "5",
      message: "Years of experience?",
      trigger: "experience",
   },
   {
      id: "experience",
      user: true,
      trigger: "7",
      validator: value => {
         if (isNaN(value)) {
            return "value must be a number";
         } else if (value < 0) {
            return "value must be positive";
         } else if (value > 120) {
            return `${value}? Come on!`;
         }

         return true;
      },
   },
   {
      id: "7",
      message: "Great! Check out your summary",
      trigger: "review",
   },
   {
      id: "review",
      component: <Review />,
      asMessage: true,
      trigger: "update",
   },
   {
      id: "update",
      message: "Would you like to update some field?",
      trigger: "update-question",
   },
   {
      id: "update-question",
      options: [
         { value: "yes", label: "Yes", trigger: "update-yes" },
         { value: "no", label: "No", trigger: "end-message" },
      ],
   },
   {
      id: "update-yes",
      message: "What field would you like to update?",
      trigger: "update-fields",
   },
   {
      id: "update-fields",
      options: [
         {
            value: "name",
            label: "Name",
            trigger: "update-name",
         },
         {
            value: "role",
            label: "role",
            trigger: "update-role",
         },
         {
            value: "experience",
            label: "experience",
            trigger: "update-experience",
         },
      ],
   },
   {
      id: "update-name",
      update: "name",
      trigger: "7",
   },
   {
      id: "update-role",
      update: "role",
      trigger: "7",
   },
   {
      id: "update-experience",
      update: "experience",
      trigger: "7",
   },
   {
      id: "end-message",
      message: "Thanks!",
      end: true,
   },
];

const CustomChatbot = props => (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} />
   </ThemeProvider>
);
export default CustomChatbot;