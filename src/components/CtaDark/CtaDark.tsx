import Link from "next/link";
import { Reveal } from "../Reveal";

export function CtaDark() {
  return (
    <div className="px-6 my-20 md:mt-0">
      <div className="max-w-5xl px-4 py-6 mx-auto border-transparent bg-radialBlack md:px-16 md:py-12 shadow-dark rounded-3xl">
        <div className="grid items-center md:grid-cols-2">
          <div className="my-8">
            <Reveal>
              <h3 className="text-3xl font-bold">Curriculum Vitae</h3>
            </Reveal>
            <Reveal>
              <p className="mt-5">
                Download my resumen to know more about my experience and skills.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div className="my-1">
              <Link
                href="#clients"
                className="px-4 py-3 rounded-md bg-blueRadial md:ml-16"
                style={{ display: "flex", alignItems: "center" }}
              >
                <span style={{ marginRight: "20px" }}>
                  <img
                    src="/assets/descargas.png"
                    alt="Download Icon"
                    style={{ width: "16px", height: "16px" }}
                  />
                </span>
                Download Resume
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

<div className="my-8">
  <Link
    href="#clients"
    className="px-4 py-3 rounded-md bg-blueRadial"
    style={{ display: "flex", alignItems: "center" }}
  >
    <span style={{ marginRight: "8px" }}>
      <img
        src="/assets/descargas.png"
        alt="Download Icon"
        style={{ width: "16px", height: "16px" }}
      />
    </span>
    Download Resume
  </Link>
</div>;
