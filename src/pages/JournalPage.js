import { React, useState, useEffect } from "react";
import { RichTextEditor } from "@mantine/rte";
import { Link, useNavigate } from "react-router-dom";

import { Divider, ScrollArea, Button } from "@mantine/core";
import "../styles/JournalPage.css";
import {
  auth,
  db,
} from "/Users/mareikebrandt/Desktop/projekte/react/chonsa_react/chonsa-app/src/firebase.js";
import { addDoc, collection, getDocs, Timestamp } from "firebase/firestore";
import { DatePicker } from "@mantine/dates";

export const JournalPage = ({ isAuth }) => {
  const [journalEntry, setJournalEntry] = useState([]);
  const journalCollectionRef = collection(db, "journalEntry");

  useEffect(() => {
    const getJournal = async () => {
      const data = await getDocs(journalCollectionRef);
      setJournalEntry(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getJournal();
  }, []);
  const [title, setTitle] = useState("");
  const [content, setContentText] = useState("");

  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(journalCollectionRef, {
      title,
      content,

      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    window.location.reload();
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <div className="journal_top">
        <Link className="button back-button" to="/">
          back
        </Link>
        <h1 id="journal_header">journal</h1>
      </div>

      <div className="journal_body">
        <div></div>
        <ScrollArea className="journal" type="always" offsetScrollbars>
          {
            <div className="journal" style={{ fontFamily: "Josefine Sans" }}>
              <p>new entry:</p>
              {/* <DatePicker placeholder="Pick date" label="date" /> */}

              <div>
                <label> Title:</label>
                <input
                  placeholder="Title..."
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                />
              </div>
              <div className="inputGp">
                <label> Post:</label>
                <textarea
                  placeholder="Post..."
                  onChange={(event) => {
                    setContentText(event.target.value);
                  }}
                />
              </div>
              <button onClick={createPost}> Submit Post</button>
            </div>
          }
        </ScrollArea>

        <ScrollArea className="entries" type="always" offsetScrollbars>
          {
            <div className="entries">
              <p>old entries:</p>
              {journalEntry.map((journal) => {
                return (
                  <div>
                    <Divider />
                    {/* <p>date: {journal.Timestamp}</p> */}
                    <p>{journal.title}</p>
                    <p> {journal.content}</p>
                  </div>
                );
              })}
            </div>
          }
        </ScrollArea>
      </div>
    </>
  );
};
