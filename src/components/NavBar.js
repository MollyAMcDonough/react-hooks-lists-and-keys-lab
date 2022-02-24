import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksJsx = links.map(link => {
    return (
      <a key={link} href={`#${link}`}>{link}</a>
    );
  })

  return <nav>{linksJsx}</nav>;
}

export default NavBar;
