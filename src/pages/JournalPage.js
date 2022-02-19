import { React, useState, useEffect } from "react";
import { RichTextEditor } from "@mantine/rte";

import { Divider, ScrollArea, Button } from "@mantine/core";
import "../pages/JournalPage.css";
import { db } from "/Users/mareikebrandt/Desktop/projekte/react/chonsa_react/chonsa-app/src/firebase.js";
import { collection, getDocs, addDoc } from "firebase/firestore";

export const JournalPage = () => {
  const [journalEntry, setJournalEntry] = useState([]);
  const journalCollectionRef = collection(db, "journalEntry");

  useEffect(() => {
    const getJournal = async () => {
      const data = await getDocs(journalCollectionRef);
      setJournalEntry(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getJournal();
  }, []);
  return (
    <div className="journal_body">
      <ScrollArea className="journal" type="always" offsetScrollbars>
        {
          <div className="journal">
            {/* <div>{Date}</div> */}
            <p>new entry:</p>

            <RichTextEditor placeholder={"Write here"} />
            <div>
              <Button style={{}} variant="light" radius="xl">
                save
              </Button>
            </div>
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
                  {/* <h1>date: {journal.date}</h1> */}
                  <p> {journal.content}</p>
                  <Divider />
                </div>
              );
            })}
          </div>
        }
      </ScrollArea>
    </div>
  );
};
