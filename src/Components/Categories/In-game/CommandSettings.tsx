const CommandSettings = () => {
  return (
    <>
      <h3 className="text-gray-100">Command Settings</h3>
      <ul className="list-disc mt-4">
        <li>
          <span className="font-source-code-pro bg-primary-300">
            /console cameraDistanceMaxZoomFactor 2.6
          </span>{" "}
          &nbsp;
        </li>
        <li>
          <span className="font-source-code-pro bg-primary-300">
            /console CameraReduceUnexpectedMovement 1
          </span>{" "}
          &nbsp;
        </li>
        <li>
          <span className="font-source-code-pro bg-primary-300">
            /console set ResampleAlwaysSharpen 1
          </span>{" "}
          <br /> This one will make a huge difference to the quality of the game
          graphics.
        </li>
        <li>
          <span className="font-source-code-pro bg-primary-300">
            /console RAIDWaterDetail 0
          </span>{" "}
          <br />
        </li>
        <li>
          <span className="font-source-code-pro bg-primary-300">
            /console RAIDweatherDensity 0
          </span>{" "}
          <br />
        </li>
        <li>
          <span className="font-source-code-pro bg-primary-300">
            /run for i=1, 200000 do C_QuestLog.RemoveQuestWatch(i) end
          </span>{" "}
          <br /> This will untrack your quests. The reason this helps
          performance can be found{" "}
          <a
            className=" font-bold hover:underline"
            target="_blank"
            href="https://www.reddit.com/r/WowUI/comments/1qk96mg/otherfixworkaroundhidden_tracked_quests_caused_60/"
          >
            here
          </a>
          .
        </li>
      </ul>
    </>
  );
};

export default CommandSettings;
