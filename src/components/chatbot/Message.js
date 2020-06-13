import React from "react";

import * as RB from "react-bootstrap";
import "./global.css";

const Message = props => {
  return (
    <div className="">
      <div
        className=""
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: "relative",
          minHeight: "5rem"
        }}
      >
        {props.speaks === "bot" && (
          <div
            className=""
            style={{
              //   display: "flex",
              position: "absolute",
              //   top: 10,
              left: 0,
              //   marginTop: "1rem",
              marginBottom: "1rem"
            }}
          >
            <RB.Toast className="botDialog">
              <RB.Toast.Body style={{ wordWrap: "break-word" }}>
                {props.text}
              </RB.Toast.Body>
            </RB.Toast>
          </div>
        )}
        {props.speaks === "user" && (
          <div
            className=""
            style={{
              //   display: "flex",
              position: "absolute",
              //   top: 4,
              right: 0,
              //   marginTop: "1rem",
              marginBottom: "1rem"
            }}
          >
            <RB.Toast className="userDialog">
              <RB.Toast.Body style={{ wordWrap: "break-word" }}>
                {props.text}
              </RB.Toast.Body>
            </RB.Toast>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
