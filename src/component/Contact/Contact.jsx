import { useRef } from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Contact = () => {
  const form = useRef();
  const theme = useContext(themeContext),
    darkMode = theme.state.darkMode;
  const [state, handleSubmit] = useForm("mqkoeywv");
  if (state.succeeded) {
    return <p className="user">Thanks for contact me!</p>;
  }
  return (
    <div>
      <div className="contact-form">
        <div className="wleft">
          <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
            <span>Contact me</span>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>
        <div className="c-right">
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/mqkoeywv"
          >
            <input
              id="email"
              type="email"
              name="email"
              className="user"
              placeholder="Your email Address"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              id="message"
              name="message"
              className="user"
              placeholder="Message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <input
              type="submit"
              disabled={state.submitting}
              value="Send"
              className="button"
            />
            <div
              className="blur c-blur1"
              style={{ background: "var(--purple)" }}
            ></div>
          </form>
        </div>
      </div>
    </div>
  );
};
{
  /* <form onSubmit={handleSubmit} action="https://formspree.io/f/mqkoeywv">
<label htmlFor="email">Email Address</label>
<input id="email" type="email" name="email" />
<ValidationError prefix="Email" field="email" errors={state.errors} />
<textarea id="message" name="message" />
<ValidationError
  prefix="Message"
  field="message"
  errors={state.errors}
/>
<button type="submit" disabled={state.submitting}>
  Submit
</button>
</form> */
}

//   return (
//     <div>
//       <div className="contact-form">
//         <div className="wleft">
//           <div className="awesome">
//             <span>Get in touch</span>
//             <span>Contact me</span>
//             <div
//               className="blur s-blur1"
//               style={{ background: "#ABF1FF94" }}
//             ></div>
//           </div>
//         </div>
//         <div className="c-right">
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="user_name"
//               className="user"
//               placeholder="Name"
//             />
//             <input
//               type="email"
//               name="user_email"
//               className="user"
//               placeholder="Email"
//             />
//             <textarea name="message" className="user" placeholder="Message" />
//             <input type="submit" value="Send" className="button" />
//             <div
//               className="blur c-blur1"
//               style={{ background: "var(--purple)" }}
//             ></div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Contact;
