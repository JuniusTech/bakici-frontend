import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import eyeclosed from "../assets/eyeclosed.svg";

const usePasswordToggle1 = () => {
  const [visible, setVisiblity] = useState(false);

  const Icon = (
    <>
      {visible ? (
        <FontAwesomeIcon
          icon={"eye"}
          onClick={() => setVisiblity((visiblity) => !visiblity)}
        />
      ) : (
        <img
          src={eyeclosed}
          alt=""
          onClick={() => setVisiblity((visiblity) => !visiblity)}
        />
      )}
    </>
  );

  const InputType = visible ? "text" : "password";

  return [InputType, Icon];
};

export default usePasswordToggle1;

export const usePasswordToggle2 = () => {
  const [visible, setVisiblity] = useState(false);

  const Icon = (
    <>
      {visible ? (
        <FontAwesomeIcon
          icon={"eye"}
          onClick={() => setVisiblity((visiblity) => !visiblity)}
        />
      ) : (
        <img
          src={eyeclosed}
          alt=""
          onClick={() => setVisiblity((visiblity) => !visiblity)}
        />
      )}
    </>
  );

  const InputType = visible ? "text" : "password";

  return [InputType, Icon];
};
