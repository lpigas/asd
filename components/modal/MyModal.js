import React, { Children, useEffect, useState } from "react";

export default function MyModal({ children, visible, setVisible }) {
  const changeClasses = ["MyModal"];

  if (visible) {
    changeClasses.push("active");
  }
  const [width, setWidth] = useState(750);
  useEffect(() => {
    !visible && setWidth(750);
  }, [visible]);

  return (
    <div className={changeClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className="MyModalContent"
        style={{ width: `${width}px` }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center">
          <div
            className="m-4"
            onClick={() => (width === 750 ? setWidth(1450) : setWidth(750))}
          >
            <img src={"/image/find.png"} width={35}></img>
          </div>
        </div>
        <div className="w-[90%] m-auto mb-8">{children}</div>
      </div>
    </div>
  );
}
