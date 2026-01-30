const WindowsSettings = () => {
  return (
    <>
      <h3 className="text-gray-100">Windows Settings</h3>
      <ul className="list-disc mt-4">
        <li>
          Game Bar: OFF.
          <br />
          Settings -{">"} Gaming -{">"} Game Bar
        </li>
        <li>
          Captures: OFF.
          <br />
          Settings -{">"} Gaming -{">"} Captures
        </li>
        <li>
          Game Mode: ON (Only in Windows 11).
          <br />
          Settings -{">"} Gaming -{">"} Game Mode
        </li>
        <img src={"/images/windows1.png"} className="p-20" alt="img1" />
        <li>
          Default graphics settings.
          <ul className="ml-10 list-decimal">
            <li>
              Hardware Acceleration: ON
              <br />
              Settings -{">"} System -{">"} Display -{">"} Graphics -{">"}{" "}
              Advanced graphic settings.
            </li>
            <li>
              Optimisations for windowed games: ON
              <br />
              Settings -{">"} System -{">"} Display -{">"} Graphics.
            </li>
          </ul>
        </li>
        <img src={"/images/windows2.png"} className="p-20" alt="img2" />
      </ul>
    </>
  );
};

export default WindowsSettings;
