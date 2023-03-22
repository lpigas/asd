import MyModal from "components/modal/MyModal";
import { useStateContext } from "context/StateContext";
import React, { useEffect, useState } from "react";
const blob = require("../../const/blob_data.json");

export default function Rightblock({ usersActiveDepart }) {
  const { activeUser, setActiveUser, activeDepart } = useStateContext();
  const [foldersDate, setFoldersDate] = useState();
  const [activeFolder, setActiveFolder] = useState();
  const [bigPhoto, setBigPhoto] = useState();
  const [bigPhotoVisible, setBigPhotoVisible] = useState(false);

  const [usersActiveDepartFiltred, setUsersActiveDepartFiltred] = useState([
    ...usersActiveDepart,
  ]);
  useEffect(() => {
    activeUser
      ? setFoldersDate(Object.keys(blob[activeDepart][0][activeUser][0]))
      : setFoldersDate();
  }, [activeUser]);
  useEffect(() => {
    setActiveUser();
    setActiveFolder();
  }, [activeDepart]);

  const str = `https://screenshotsscript.blob.core.windows.net/screenshots/${activeDepart}/${activeUser}/${activeFolder}/`;

  const filtredUser = (e) => {
    setUsersActiveDepartFiltred(
      usersActiveDepart.filter((item) => item.toLowerCase().includes(e))
    );
  };
  useEffect(() => {
    setUsersActiveDepartFiltred([...usersActiveDepart]);
  }, [usersActiveDepart]);

  const openModal = (photoUrl) => {
    setBigPhoto(photoUrl);
    setBigPhotoVisible(true);
  };

  return (
    <div className="">
      <MyModal setVisible={setBigPhotoVisible} visible={bigPhotoVisible}>
        <img src={bigPhoto}></img>
      </MyModal>
      {!activeUser ? (
        <>
          <div className="flex justify-end p-4 ">
            <input
              className="p-2 border-2 border-gray-300 h-[35px]"
              onChange={(e) => filtredUser(e.target.value)}
            />
            <img src="/image/find.png" className="w-[35px] h-[35px]"></img>
          </div>

          <div className="flex flex-wrap">
            {usersActiveDepartFiltred.map((user) => (
              <div
                key={user}
                className="p-4 mx-4 flex-col w-[120px]"
                onClick={() => setActiveUser(user)}
              >
                <img
                  src={user.photo}
                  className="h-[50px] w-[50px] hover:h-[75px] hover:w-[75px] m-auto"
                />
                <div className="text-bold text-lg text-center break-all">
                  {user}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="my-2">
          <div
            className="flex justify-end m-[15px]"
            onClick={() => setActiveUser()}
          >
            <img
              alt="Back"
              src="/image/back.png"
              className="w-[25px] bg-white"
            />{" "}
            Back
          </div>
          <div className="border-b-2 border-gray-300">
            <div>
              <img
                src={activeUser.photo}
                alt={activeUser}
                className={"w-[500px] h-[500px]"}
              ></img>
            </div>
            {activeUser}

            <div className="mt-[10px]">
              <span>Screenshot From day</span>
            </div>
          </div>
          {activeUser && !activeFolder ? (
            <div className="flex flex-wrap">
              {activeUser &&
                foldersDate &&
                foldersDate.map((folder) => (
                  <div key={folder + Math.random()} className="flex flex-wrap">
                    {blob[activeDepart][0][activeUser] &&
                    blob[activeDepart][0][activeUser][0][folder].length ===
                      0 ? (
                      <div className="flex flex-col items-center m-6 flex-wrap">
                        <img src="/image/emptyFolder.jpeg" />
                        {folder}
                      </div>
                    ) : (
                      <div
                        className="flex flex-col items-center m-10 flex-wrap"
                        onClick={() => setActiveFolder(folder)}
                      >
                        <img
                          src="/image/fullFolder.webp"
                          className="w-[75px]"
                        />
                        <div className="mt-[-37px]">
                          {blob[activeDepart][0][activeUser] &&
                            blob[activeDepart][0][activeUser][0][folder].length}
                        </div>
                        <span className="mt-4">{folder}</span>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          ) : (
            <div className="flex flex-col">
              <div className="flex justify-end m-[15px] ">
                <img
                  alt="Back"
                  src="/image/back.png"
                  className="w-[25px] bg-white"
                  onClick={() => setActiveFolder()}
                />
                <span onClick={() => setActiveFolder()}>Back to folders</span>
              </div>
              <div className="flex flex-wrap ">
                {blob[activeDepart][0][activeUser] &&
                  blob[activeDepart][0][activeUser][0][activeFolder].map(
                    (photo) => (
                      <div
                        className="w-[100px] h-[100px] m-6"
                        key={photo}
                        onClick={() => openModal(str + photo)}
                      >
                        <img src={str + photo} alt={photo}></img>
                        <span>{photo}</span>
                      </div>
                    )
                  )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
