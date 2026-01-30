const GraphicSettings = () => {
  return (
    <>
      <h3 className="text-gray-100">Graphic Settings</h3>
      <p>(Only look at images if you don't want to know all the details)</p>
      <ul className="list-disc mt-4">
        <li>
          Display Mode: Fullscreen (Windowed) which is as close to native
          Fullscreen as possible.
        </li>
        <li>
          Resolution: your native monitor resolution. Default will find it for
          you if you click apply.
        </li>
        <li>
          Render Scale: 100%. Modifications are no longer recommended due to
          specific bugs.
        </li>
        <li>
          Vertical Sync: Disabled. <br />
          <span className="text-red-800">DISCLAIMER: </span>If you play on a
          mac, it is required that you have this on! Hardware and software both
          require this, you will have a nightmare on a mac with this disabled.
        </li>
        <li>
          Low Latency Mode: NVIDIA Reflex if you have NVIDIA Graphics Card. If
          you don't, use Built-in.
        </li>
        <li>Anti-aliasing: off.</li>
        <li>Camera FoV: 90 for best view.</li>
        <img src={"/images/graphics1.jpg"} className="p-10" alt="img1" />
        <li className="list-none">
          <p className="font-light my-4">
            Select the raid and battleground tab and check the box to enable it.
            If you want these next settings to apply in every zone instead,
            apply them in the Base tab.
          </p>
        </li>
        <li>
          Graphics Quality can be 10. It will automatically switch over to
          Custom in your process of tweaking.
        </li>
        <li>Shadow Quality: Fair or Good.</li>
        <li>Liquid Detail: Fair or Good.</li>
        <li>
          Particle Density: High for clean effects (mostly stuff to dodge on the
          ground).
        </li>
        <li>SSAO: Disabled </li>
        <li>Depth Effects: Disabled </li>
        <li>Compute Effects: Disabled.</li>
        <li>Outline Mode: High.</li>
        <li>
          Texture Resolution: High. Performance impact is almost non-existent
          and your game will look better.
        </li>
        <li>
          Spell Density: Essential so you see only your personal abilities and
          important effects like healing zones.
        </li>
        <li>
          Projected Textures: <b>MUST be Enabled</b>. Otherwise you will miss
          important void zones and die to boss mechanics.
        </li>
        <li>View Distance: 3.</li>
        <li>Environment Detail: 1.</li>
        <li>Ground Clutter: 1.</li>
      </ul>
      <img src={"/images/graphics2.jpg"} className="p-10" alt="img1" />
      <ul className="list-disc mt-4">
        <li>Disable Triple Buffering to reduce input lag.</li>
        <li>
          For Texture Filtering the performance sweetspot is 8x but we recommend
          16x on good hardware for clean texture sharpness.
        </li>
        <li>Disable Ray Traced Shadows.</li>
        <li>
          Use the Ambient Occlusion Type FidelityFX CACAO for the quality of
          lightning effects.
        </li>
        <li>Disable VRS Mode.</li>
        <li>
          For Graphics API DirectX 12 is recommended so you can use feature
          flags like multi-threading and async resource creation.
        </li>
        <li>Physics interaction is recommended player only.</li>
        <li>Disable Target FPS or set it to 60 on potato hardware.</li>
        <li>
          FPS Limiter: NONE. Don't use the in-game FPS limiter because it is
          always a performance loss. Use your graphics card driver settings, MSI
          Afterburner, etc. to limit your FPS. Best settings would be to limit
          them to your monitor refresh rate.
        </li>
        <li>
          Contrast recommend changing to 75 for better visibility of raid
          mechanics and clear lines on ground effects.
        </li>
      </ul>
      <img src={"/images/graphics3.jpg"} className="p-10" alt="img3" />
      <img src={"/images/graphics4.jpg"} className="p-10" alt="img4" />
    </>
  );
};

export default GraphicSettings;
