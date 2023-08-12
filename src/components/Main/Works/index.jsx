import React, { useState } from "react";
import SectionWrapper from "../../SectionWrapper";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
} from "@mui/material";
import { worksList } from "../../../const";

const Work = ({ state, content, toggler }) => {
  return (
    <Box className="">
      <Dialog open={state} onClose={toggler}>
        <DialogTitle component={"div"} className="flex flex-row items-center">
          <p className=" w-[130px]">Project: </p>
          <p className="">{content?.name}</p>
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            component={"div"}
            className="flex flex-row items-start"
          >
            <div className="font-semibold w-[130px]">Tech Used: </div>
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
          <DialogContentText className="flex flex-row items-start">
            <span className="font-bold min-w-[130px]">Description: </span>
            {content.description}
          </DialogContentText>
          <DialogContentText className="flex flex-row items-center">
            <span className="font-bold min-w-[130px]">status: </span>

            {content.state}
          </DialogContentText>
          <DialogContentText className="flex flex-row items-center">
            <span className="font-bold min-w-[130px]">Repo: </span>

            <Link href={content.link}>{content.repoLink}</Link>
          </DialogContentText>
          <DialogContentText className="flex flex-row items-center">
            <span className="font-bold min-w-[130px]">Latest commit: </span>
            {content?.latestCommit || null}
          </DialogContentText>
          <DialogContentText className="flex flex-row items-center">
            <span className="font-bold min-w-[130px]">Commit Date: </span>
            {new Date(content?.commitDate).toLocaleDateString() || null}
          </DialogContentText>
          <DialogContentText className="flex flex-row items-center">
            <span className="font-bold min-w-[130px]">Deployed at: </span>
            <Link href={content.link}>{content.link || "N/A"}</Link>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={toggler}
            variant="outlined"
            color="error"
            size="small"
          >
            close
          </Button>
        </DialogActions>
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
    <div className="flex flex-col min-h-screen items-center w-full" id="works">
      <div className="bg-gray-800">
        <Work state={modalState} content={modalcontent} toggler={toggleModal} />
      </div>

      <SectionWrapper>
        <div className="text-gray-200 text-3xl text-center mb-8">
          My Projects
        </div>

        <div className="w-full flex flex-row justify-start flex-wrap gap-y-2 gap-x-2">
          {worksList?.map((work) => (
            <div
              key={work.name + "" + work.category}
              className="w-[48%] md:w-[24%] flex flex-col p-1 border-[1px] border-gray-500 rounded-md"
            >
              <div
                className="w-full h-[150px] md:h-[200px] transition-all hover:-translate-y-1 hover:scale-[1.02] duration-300 bg-gray-500  rounded-md cursor-pointer"
                onClick={() => handleModalContent(work)}
              >
                <img
                  src={work.img}
                  alt={work.name}
                  className="h-[100%] w-full rounded-md object-cover"
                />
              </div>
              <div className="text-left p-1 w-full flex flex-col  ">
                <p className="hidden">{work.commits()}</p>
                <p
                  onClick={() => handleModalContent(work)}
                  className="text-xl md:text-2xl cursor-pointer hover:underline"
                >
                  {work.name}
                </p>
                <p className="text-sm text-gray-400">{work.category}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Works;
