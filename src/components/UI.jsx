import { atom, useAtom } from "jotai"; // atom is a state management library
import { useEffect } from "react";

const pictures = [
  "speak-no-label",
  "fall-guy-slide",
  "gabby-slide-new",
  "kfp-slide",
  // "apartment-wall",
  // "apartment-good-light",
  // "sam-roof",
  // "film-costa-sunset",
  // "good-vibes",
  // "Gator",
  // "costa-rican-sunset",
  // "Cornice-2",
  // "drive-view",
  // "Stream-Trees",
  // "dino-bali",
  // "nusa-water",
  // "joey-pup",
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "pxl-cover", // the cover of the book
    back: pictures[0], // the first page of the book
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length], // the front of the page
    back: pictures[(i + 1) % pictures.length], // the back of the page
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "pxl-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play();
  }, [page]);

  return (
    <>
      <main className=" pointer-events-none select-none z-10 fixed  inset-0  flex justify-between flex-col">
        <a
          className="pointer-events-auto mt-10 ml-10"
          href="https://www.pxlagency.com/"
        >
          <img className="w-20" src="/images/Logo_PXL.png" />
        </a>
        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="overflow-auto flex items-center gap-4 max-w-full p-10">
            {[...pages].map((_, index) => (
              <button
                key={index}
                className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-lg  text-lg uppercase shrink-0 border ${
                  index === page
                    ? "bg-white/90 text-black"
                    : "bg-black/30 text-white"
                }`}
                onClick={() => setPage(index)}
              >
                {index === 0 ? "Cover" : `Page ${index}`}
              </button>
            ))}
            <button
              className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-lg  text-lg uppercase shrink-0 border ${
                page === pages.length
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(pages.length)}
            >
              Back Cover
            </button>
          </div>
        </div>
      </main>

      <div className="fixed inset-0 flex items-center -rotate-2 select-none hidden">
        <div className="relative">
          <div className="bg-white/0  animate-horizontal-scroll flex items-center gap-8 w-max px-8">
            <h1 className="shrink-0 text-white text-10xl font-black ">
              PXL
            </h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              Creative Agency
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">
              Entertainment
            </h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              Web
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">
              Social
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic">
              Activations
            </h2>
            <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
              Creative
            </h2>
          </div>
          <div className="absolute top-0 left-0 bg-white/0 animate-horizontal-scroll-2 flex items-center gap-8 px-8 w-max">
            <h1 className="shrink-0 text-white text-10xl font-black ">
              PXL
            </h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              Creative Agency
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">
              Entertainment
            </h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              Web
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">
              Social
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic">
              Activations
            </h2>
            <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
              Creative
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
