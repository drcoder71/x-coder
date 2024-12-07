import React, { useEffect } from "react";
import RegularLayout from "./RegulerLayout";
import SmileLayout from "./SmileLayout";
import { useDispatch, useSelector } from "react-redux";
import { ChangeLayout } from "../../features/code-system/CodeSystemSlice";
import ParallelLayout from "./ParallelLayout";

const EditorLayout = () => {
  const selectedLayout = useSelector((state) => state.codesystem.layout);

  switch (selectedLayout.value) {
    case "regular":
      return <RegularLayout />;
    case "smile":
        console.log('smile');
        
      return <SmileLayout />;
    case "parallel":
      return <ParallelLayout />;
  }
};

export default EditorLayout;
