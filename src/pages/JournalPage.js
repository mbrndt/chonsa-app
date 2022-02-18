import React from "react";
import JournalQuill from "../components/journal";
import { Divider, ScrollArea, Button } from "@mantine/core";
import "../pages/JournalPage.css";

export const JournalPage = () => {
  return (
    <div className="journal_body">
      <ScrollArea className="journal" type="always" offsetScrollbars>
        {
          <div className="journal">
            <p>new entry:</p>

            <JournalQuill />

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

            <p>
              yesterday, xx.xx.xx.
              <br></br>
              <br></br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam,
              aenean morbi quisque luctus in habitant elit nibh pellentesque.
              Dignissim ut ultrices euismod nunc cras elementum faucibus dolor.
              Tortor urna sed aliquam velit pulvinar feugiat. Amet felis donec
              pellentesque aliquam.
            </p>
            <div>
              <img
                src={require("./assets/pictures/kris-atomic-3b2tADGAWnU-unsplash.jpg")}
                alt="Table in a cafe, you can see a french press, a coffee cup and a floral pot on the table and a big window in the background"
              />
              <br></br>
              <div>
                <img
                  src={require("./assets/pictures/lasse-jensen-84mFDd6bZG4-unsplash.jpg")}
                  alt="well lit bookshop with white bookshelves, old carpet and white exposed beams on the ceiling"
                />
              </div>
            </div>
            <Divider />
            <p>
              tuesday, xx.xx.xx.
              <br></br>
              <br></br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam,
              aenean morbi quisque luctus in habitant elit nibh pellentesque.
              Dignissim ut ultrices euismod nunc cras elementum faucibus dolor.
              Tortor urna sed aliquam velit pulvinar feugiat. Amet felis donec
              pellentesque aliquam.
            </p>
            <Divider />
            <p>
              sunday, xx.xx.xx.
              <br></br>
              <br></br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam,
              aenean morbi quisque luctus in habitant elit nibh pellentesque.
              Dignissim ut ultrices euismod nunc cras elementum faucibus dolor.
              Tortor urna sed aliquam velit pulvinar feugiat. Amet felis donec
              pellentesque aliquam.
            </p>
          </div>
        }
      </ScrollArea>
    </div>
  );
};
