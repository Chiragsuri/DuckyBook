import React from "react";
import Notes from "./Notes";
import Loader from "./Loader";

const DisplayNotes = (props) => {
  Loader(props.setProgress);
  const { showAlert } = props;
  return (
    <div>
      <Notes showAlert={showAlert} />
    </div>
  );
};

export default DisplayNotes;
