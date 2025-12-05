import { useState, useRef } from "react";
import { Award, X } from "lucide-react";
import useClickOutside from "../../newHook/useClickOutside";

import { certificationButtons, certificationDetails } from "../../newData";

const CertificationsTab = () => {
  const [isOpen, setIsOpen] = useState({ type: null, id: null });

  const popoverRef = useRef(null);
  useClickOutside(popoverRef, () => setIsOpen({ type: null, id: null }));

  return (
    <div className="relative">
      {/* BUTTON LIST */}
      <div className="grid grid-cols-1 gap-4">
        {certificationButtons.map((cert) => (
          <button
            key={cert.id}
            onClick={() => setIsOpen({ type: "cert", id: cert.id })}
            className="flex items-center gap-4 p-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer text-left"
          >
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
              <Award size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">{cert.title}</h4>
            </div>
          </button>
        ))}
      </div>

      {/* POPOVER */}
      {certificationDetails.map((popover) =>
        isOpen.type === "cert" && isOpen.id === popover.id ? (
          <div
            key={popover.id}
            className="fixed top-0 left-0 w-screen h-screen bg-black/50 z-50 flex items-center justify-center px-4"
          >
            <div
              ref={popoverRef}
              className="relative bg-white rounded-lg shadow-xl p-6 max-w-xl w-full overflow-y-auto max-h-[90vh]"
            >
              {/* Close */}
              <button
                onClick={() => setIsOpen({ type: null, id: null })}
                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-md"
              >
                <X size={16} />
              </button>

              <h2 className="text-xl font-semibold text-center mb-4">
                {popover.title}
              </h2>

              <div className="space-y-5 text-start">
                {/* Description */}
                <div className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                  {popover.description}
                </div>

                {/* Single image (Logistics & Programming) */}
                {popover.image && (
                  <img
                    src={popover.image}
                    alt=""
                    className="w-full border rounded shadow"
                  />
                )}

                {/* SUB 1 */}
                {popover.sub1 && (
                  <>
                    <h4 className="font-semibold">{popover.sub1}</h4>
                    <a href={popover.linkSub1} target="_blank">
                      <img
                        src={popover.image1}
                        alt=""
                        className="w-full border rounded shadow"
                      />
                    </a>
                  </>
                )}

                {/* SUB 2 */}
                {popover.sub2 && (
                  <>
                    <h4 className="font-semibold">{popover.sub2}</h4>
                    <img
                      src={popover.image2}
                      alt=""
                      className="w-full border rounded shadow"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default CertificationsTab;
