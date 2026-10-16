import { createContext, useState, useEffect } from "react";
import { useContext } from "react";
import AuthContext from "./AuthContext";

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
       
    const [notes,setNotes] = JSON.parse(localStorage.getItem("notes")) || [];  

    const createNote = (data) => {
        
        setNotes((prev) => {
            const updatedNotes = [...prev, data];
            localStorage.setItem("notes", JSON.stringify(updatedNotes));
            return updatedNotes;
        });
    }  

    return (
        
        <NoteContext.Provider value={{ notes, createNote }}>
            {children}
        </NoteContext.Provider>
    );
};

export default NoteContext;
