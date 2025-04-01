import React from 'react';

const Intro: React.FC = () => {
  return (
    <section id="intro" className="sbm-section w-screen flex-1 my-[40px]">
      <p className="text-midnight my-3 lg:my-5 2xl:my-20 text-2xl lg:text-3xl 2xl:text-5xl">
        <strong>SBM</strong> è un'azienda leader nelle tecnologie sanitarie, con
        oltre 20 anni di esperienza siamo al fianco di medici, ricercatori e operatori
        del settore.
        <br />
        Offriamo soluzioni innovative per migliorare la qualità della vita dei pazienti
        e ottimizzare il lavoro di chi si prende cura della loro salute.
        <br />
        Questa è <strong>SBM</strong>, your next health partner.
      </p>
    </section>
  );
};

export default Intro;

