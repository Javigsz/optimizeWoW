import { orderedComponents } from "./Categories/In-game";
import { orderedComponents2 } from "./Categories/Out-of-game";
import { useActiveSection } from "../hooks/useActiveSection";

const SideMenu = () => {
  const activeId = useActiveSection([
    ...orderedComponents.map((c) => c.id),
    ...orderedComponents2.map((c) => c.id),
  ]);
  return (
    <>
      <div className=" flex-col sticky top-10 hidden md:flex min-h-[calc(100svh-40px)] overflow-y-auto self-start min-w-60 bg-primary-600 text-sm p-5">
        <nav>
          <ul className="p-2">
            <li key={"InGame"}>
              <a href={"#InGame"} className="block text-accentText py-2">
                In-game settings
              </a>
            </li>
            <ul className="list-disc font-extralight opacity-70 pb-2">
              {orderedComponents.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={` ${activeId === id ? "font-semibold" : ""} block py-2`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <li key={"OutOfGame"}>
              <a href={"#OutOfGame"} className="block text-accentText py-2">
                Out of game settings
              </a>
            </li>
            <ul className="list-disc font-extralight opacity-70 pb-2">
              {orderedComponents2.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={` ${activeId === id ? "font-semibold" : ""} block py-2`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <li key={"Addons"}>
              <a href={"#Addons"} className="block text-accentText py-2">
                Addons settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideMenu;
