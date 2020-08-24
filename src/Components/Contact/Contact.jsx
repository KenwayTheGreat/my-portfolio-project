import React from "react";
import "./ContactStyle.jsx";
import emailjs from "emailjs-com";
import {
  ContactS,
  ContactTitle,
  Span,
  Form,
  FormInput,
  InputText,
  InputEmail,
  InputExp,
  TextArea,
  InputSubmit,
} from "./ContactStyle.jsx";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "ahmad_amir2709_gmail_com",
        "template_EuKMbjto",
        e.target,
        "user_YHTPGC2uQDx3AZHrL662M"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <ContactS id={"contactSection"}>
      <div className="container">
        <ContactTitle>
          <Span>Drop </Span>Me A line
        </ContactTitle>
        <Form onSubmit={sendEmail}>
          <FormInput>
            <InputText type="text" placeholder="Your Name" name="name" />
            <InputEmail type="email" placeholder="Your Email" name="email" />
          </FormInput>
          <InputExp type="text" className="sub" placeholder="Your Subject" name="subject" />
          <TextArea
            cols="30"
            rows="10"
            placeholder="Your Message"
            name="message"
          />
          <InputSubmit type="submit" value="Send Message" />
        </Form>
      </div>
    </ContactS>
  );
}
