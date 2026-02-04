import { orderedComponents } from "./Categories/In-game";
import { orderedComponents2 } from "./Categories/Out-of-game";
import Footer from "./Footer";

const MainContent = () => {
  return (
    <>
      <div className="flex-1 overflow-y-auto min-w-175 p-20 mx-10 flex-col bg-primary-600 gap-10">
        <h1 className="text-4xl font-bold mb-5 text-accentText">
          How to improve performance in World of Warcraft
        </h1>
        <p className="font-light">
          This page has been developed to help you optimize your World of
          Warcraft experience, recopiling tips and tricks from different sources
          to help you improve your game experience.
        </p>
        <h2 id="InGame" className=" text-accentText my-5 text-xl scroll-mt-12 ">
          In-game settings
        </h2>
        {Object.entries(orderedComponents).map(([, { id, Component }]) => (
          <section
            key={id}
            id={id}
            className="m-7 scroll-mt-12 text-md text-gray-400"
          >
            <Component />
          </section>
        ))}
        <h2
          id="OutOfGame"
          className=" text-accentText my-5 text-xl scroll-mt-12 "
        >
          Out-of-game settings
        </h2>
        {Object.entries(orderedComponents2).map(([, { id, Component }]) => (
          <section
            key={id}
            id={id}
            className="m-7 scroll-mt-12 text-md text-gray-400"
          >
            <Component />
          </section>
        ))}
        <h2 id="Addons" className=" text-accentText my-5 text-xl scroll-mt-12 ">
          Addons settings
        </h2>
        <p className="m-7 text-md text-gray-400">
          Here you can find information about addons configurations that you can
          use to optimize your game experience.{" "}
          <b>
            Due to the addons changes made by Blizzard in Midnight, it is not
            demonstrated that the past addon configurations are still valid.
            This section will be updated as new addons are released and tested.
          </b>
        </p>
        <img src={"/images/peon.jpg"} className="p-30" alt="img1" />
        <Footer />
      </div>
    </>
  );
};

export default MainContent;
