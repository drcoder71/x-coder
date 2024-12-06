import React from "react";
import RegularLayout from "./RegulerLayout";

const EditorLayout = ({ layout }) => {
  switch (layout) {
    case "regular":
      return <RegularLayout />;
  }
};

export default EditorLayout;
