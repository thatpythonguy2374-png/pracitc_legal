import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DisclaimerModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const lastSeen = localStorage.getItem("disclaimerTime");
    const now = Date.now();

    // 24 hours check
    if (!lastSeen || now - lastSeen > 24 * 60 * 60 * 1000) {
      setTimeout(() => setOpen(true), 400); // smooth entry
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("disclaimerTime", Date.now());
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* MODAL */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            transition={{ duration: 0.4 }}
          >
            {/* 👇 THIS BOX WAS MISSING */}
            <div className="max-w-xl w-full bg-[var(--ink)] border border-white/10 p-8 shadow-xl rounded-md">
              <h2 className="text-xl font-bold mb-4 text-white">Disclaimer</h2>

              <div className="text-white/70 text-sm leading-relaxed space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                <p>
                  In accordance with the rules and regulations prescribed by the Bar Council of
                  India, advocates and law firms are prohibited from soliciting work or advertising
                  their services.
                </p>

                <p>By accessing this website, you acknowledge and confirm that:</p>

                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    You are accessing this website voluntarily and solely for the purpose of
                    obtaining information about our practice, areas of expertise, and legal
                    services.
                  </li>
                  <li>
                    Neither this website nor any of its contents constitutes an advertisement,
                    solicitation, invitation, inducement, or personal communication intended to
                    attract clients or legal work.
                  </li>
                  <li>
                    No lawyer, partner, associate, employee, or representative of this firm has
                    approached, contacted, or otherwise encouraged you to visit this website for the
                    purpose of seeking legal services.
                  </li>
                  <li>
                    Any information made available on this website is provided exclusively for
                    general informational purposes and should not be construed as legal advice.
                  </li>
                  <li>
                    Your use of this website, including any communication through it, does not
                    create an advocate-client, attorney-client, or fiduciary relationship between
                    you and the firm.
                  </li>
                  <li>
                    Any materials, documents, publications, or resources downloaded from this
                    website are obtained at your own discretion and initiative.
                  </li>
                  <li>
                    While reasonable efforts are made to ensure the accuracy and currency of the
                    information provided, we do not warrant its completeness, reliability, or
                    suitability for any specific purpose.
                  </li>
                  <li>
                    We shall not be responsible for any loss, damage, or consequences arising from
                    reliance upon the information contained on this website.
                  </li>
                </ol>

                <p className="pt-2">
                  By clicking <span className="text-white font-medium">"I Agree"</span> or
                  continuing to access this website, you confirm that you have read, understood, and
                  accepted the terms of this disclaimer.
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={handleAccept}
                  className="bg-primary text-primary-foreground px-5 py-2 text-sm hover:opacity-90 transition"
                >
                  I Agree
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
