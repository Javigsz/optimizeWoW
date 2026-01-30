import GraphicSettings from "./GraphicSettings";
import CommandSettings from "./CommandSettings";
import UISettings from "./UISettings";

export const orderedComponents = [
  {
    id: "GraphicSettings",
    label: "Graphic Settings",
    Component: GraphicSettings,
  },
  {
    id: "CommandSettings",
    label: "Command Settings",
    Component: CommandSettings,
  },
  {
    id: "UISettings",
    label: "UI Settings",
    Component: UISettings,
  },
];
