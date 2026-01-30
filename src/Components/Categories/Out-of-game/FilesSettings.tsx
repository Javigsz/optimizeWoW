const FilesSettings = () => {
  return (
    <>
      <h3 className="text-gray-100">Files Settings</h3>
      <ul className="list-disc mt-4">
        <li>
          Delete the Data folder of the game if it is too heavy. Usually this
          folder weighs around 110GB so if yours is much bigger than that,
          detele it and open Battle.net launcher so the game patches and
          redownloads the files.
        </li>
        <img src={"/images/files.png"} className="p-20" alt="img1" />
        <li>
          Reinstall the game completely. This is recommended doing every
          expansion start. To do this correctly, do the following:
          <ul className="ml-10 list-decimal">
            <li>
              Log in to the game and run{" "}
              <span className="font-source-code-pro bg-primary-300">
                /console cvar_default
              </span>{" "}
              then logout and close the game.
            </li>
            <li>Uninstall every version of the game via Battle.net Launcher</li>
            <li>
              Go into the folder where the game was installed and delete
              everything.
              <br /> <span className="text-red-800">DISCLAIMER: </span>
              Make a copy of your WTF and Cache folders if you don't want to
              lose your addons configurations.
            </li>
            <li>Install the game again</li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default FilesSettings;
