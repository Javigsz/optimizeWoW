import { useState, useEffect } from "react";

const CommandSettings = () => {
  const [copied, setCopied] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleClickOnCode = async (text: string) => {
    try {
      // Copiar el enlace al portapapeles
      setCopied(true); // Cambia el estado si se copió correctamente
      setTimeout(() => setCopied(false), 2000);
      console.log(cursorPos);
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error("Error copying to cipboard: ", error);
    } finally {
      // Mostrar un mensaje de alerta
      console.log("Link copied to clipboard");
    }
  };

  const handleCursorMovement = (e: MouseEvent) => {
    setCursorPos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    // Escuchar el movimiento del mouse
    window.addEventListener("mousemove", handleCursorMovement);

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener("mousemove", handleCursorMovement);
    };
  }, []);

  return (
    <>
      <h3 className="text-gray-100">Command Settings</h3>
      <ul className="list-disc mt-4">
        <li>
          <span
            className="font-source-code-pro bg-primary-300 cursor-pointer"
            onClick={() =>
              handleClickOnCode("/console cameraDistanceMaxZoomFactor 2.6")
            }
          >
            /console cameraDistanceMaxZoomFactor 2.6
          </span>{" "}
          &nbsp;
        </li>
        <li>
          <span
            className="font-source-code-pro bg-primary-300 cursor-pointer"
            onClick={() =>
              handleClickOnCode("/console CameraReduceUnexpectedMovement 1")
            }
          >
            /console CameraReduceUnexpectedMovement 1
          </span>{" "}
          &nbsp;
        </li>
        <li>
          <span
            className="font-source-code-pro bg-primary-300 cursor-pointer"
            onClick={() =>
              handleClickOnCode("/console set ResampleAlwaysSharpen 1")
            }
          >
            /console set ResampleAlwaysSharpen 1
          </span>{" "}
          <br /> This one will make a huge difference to the quality of the game
          graphics.
        </li>
        <li>
          <span
            className="font-source-code-pro bg-primary-300 cursor-pointer"
            onClick={() => handleClickOnCode("/console RAIDWaterDetail 0")}
          >
            /console RAIDWaterDetail 0
          </span>{" "}
          <br />
        </li>
        <li>
          <span
            className="font-source-code-pro bg-primary-300 cursor-pointer"
            onClick={() => handleClickOnCode("/console RAIDweatherDensity 0")}
          >
            /console RAIDweatherDensity 0
          </span>{" "}
          <br />
        </li>
        <li>
          <span
            className="font-source-code-pro bg-primary-300 cursor-pointer"
            onClick={() => handleClickOnCode("/console SpellQueueWindow X")}
          >
            /console SpellQueueWindow X
          </span>{" "}
          <br /> Change X for 150 plus your average ms of latency of your
          client.
        </li>

        <li>
          <span
            className="font-source-code-pro bg-primary-300 cursor-pointer"
            onClick={() =>
              handleClickOnCode(
                "/run for i=1, 200000 do C_QuestLog.RemoveQuestWatch(i) end",
              )
            }
          >
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
        {copied && (
          <div
            className="fixed px-3 py-1 text-accentText bg-secondary rounded text-sm z-50 pointer-events-none"
            style={{
              top: cursorPos.y,
              left: cursorPos.x,
              transform: "translate(-50%, -120%)",
            }}
          >
            Command copied!
          </div>
        )}
      </ul>
    </>
  );
};

export default CommandSettings;
