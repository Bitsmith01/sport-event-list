import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <section className="h-fit w-full bg-black mt-5">
      <div className="container mx-auto p-5 flex justify-center items-center">
        <span className="text-center text-white text-sm">
          © 2023 SPORTEVENTS. All rights reserved. | Privacy Policy | Terms of
          Use
        </span>
      </div>
    </section>
  );
}

export default Footer;
