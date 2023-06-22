import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "64943ad78d144c68de4c3062",
      user: "649324b37741a8acfc2c399c",
      title: "Quak Quak2.0",
      description: "Ducky Gona Kill ",
      tag: "duck",
      date: "2023-06-22T12:13:11.116Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
