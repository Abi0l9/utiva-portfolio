import React, { useState } from "react";
import SectionWrapper from "../../SectionWrapper";
import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
  Tooltip,
} from "@mui/material";
import { worksList } from "../../../const";

const Work = ({ state, content, toggler }) => {
  return (
    <Box className="">
      <Dialog open={state} onClose={toggler}>
        <DialogTitle>Project: {content?.name}</DialogTitle>
        <DialogContent>
          <DialogContentText
            component={"div"}
            className="flex flex-row items-center"
          >
            <p className="font-semibold">Tech Used: </p>
            <DialogContentText
              component={"div"}
              className="flex flex-row flex-wrap"
            >
              {content?.tech?.map((t) => (
                <div
                  key={t}
                  className="bg-gray-900 shadow-lg p-1 rounded-[5px] min-w-[15%] text-center text-gray-200 mx-1 my-1"
                >
                  {t}
                </div>
              ))}
            </DialogContentText>
          </DialogContentText>
          <DialogContentText>
            Description: {content.description}
          </DialogContentText>
          <DialogContentText>status: {content.state}</DialogContentText>
          <DialogContentText>
            repo: <Link href={content.link}>{content.repoLink}</Link>
          </DialogContentText>
          <DialogContentText>
            deployed at:{" "}
            <Link href={content.link}>{content.link || "N/A"}</Link>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

const Works = () => {
  const [modalState, setModalState] = useState(false);
  const [modalcontent, setModalContent] = useState({});

  const toggleModal = () => {
    setModalState(!modalState);
  };

  const handleModalContent = (content) => {
    setModalContent(content);
    toggleModal();
  };

  return (
    <div className="">
      <div className="bg-gray-800">
        <Work state={modalState} content={modalcontent} toggler={toggleModal} />
      </div>

      <SectionWrapper>
        <div className="w-full md:w-3/4 flex flex-row flex-wrap gap-y-2 gap-x-2">
          {worksList?.map((work) => (
            <Tooltip key={work.name} title={"Click for more information"}>
              <div
                onClick={() => handleModalContent(work)}
                className="bg-gray-200 min-w-1/4 md:min-w-2/4 cursor-pointer text-gray-900 text-xl text-center  py-2 px-4 rounded-lg active:bg-gray-900 active:text-white"
              >
                {work.name}
              </div>
            </Tooltip>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Works;
