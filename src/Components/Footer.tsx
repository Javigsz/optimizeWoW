const Footer = () => {
  return (
    <>
      <footer className="w-full pt-4 h-6 bg-primary-600 border-t border-white/10 z-10 font-light text-gray-400 text-sm">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[12px]">
              © 2026 How to Make WoW Run Better. All rights reserved.
            </p>
            <a
              href="https://github.com/javigsz/optimizewow"
              className="underline hover:text-white"
              target="_blank"
            >
              Github
            </a>
          </div>
          <button
            className="underline hover:text-white cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Go to top
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
