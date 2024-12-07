import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonUi, ListItemUi } from "../../ui";
import { ChangeLayout } from "../../../features/code-system/CodeSystemSlice";
import { SYSTEM_DATA } from "../../../constants/systemData";
import { LuLayoutPanelLeft } from "react-icons/lu";

const SelectLayoutComponent = () => {
  const [active, setActive] = useState(false);
  const selectedLayout = useSelector((state) => state.codesystem.layout);
  const dispatch = useDispatch();

  return (
    <div className="relative">
      <div className="bg-[#023e7d] text-white flex items-center justify-start gap-2 rounded-sm">
        <ButtonUi
          label={!selectedLayout.value ? "regular" : selectedLayout.value}
          className={
            "rounded-sm bg-[#014f86] text-white p-1 text-sm w-[80px] lg:text-md lg:w-[80px] capitalize"
          }
          clickHandler={() => setActive((prev) => !prev)}
        />
        <LuLayoutPanelLeft className="w-3 h-3 lg:w-5 lg:h-5 mr-2" />
      </div>
      {active ? (
        <ul className="absolute top-[50px] left-[0px] z-[999] rounded-xl bg-[#fff] px-3 overflow-hidden">
          {SYSTEM_DATA.map(({ layout }) => (
            <ListItemUi
              key={layout}
              className={"py-2 p-3 cursor-pointer border-b border-[#7d7d7d35]"}
              clickHandler={() => {
                dispatch(ChangeLayout(layout));
                setActive(false);
              }}
            >
              <span>{layout}</span>
            </ListItemUi>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default SelectLayoutComponent;
