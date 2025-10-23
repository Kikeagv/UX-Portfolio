import StaggeredMenu from "./StaggeredMenu";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about me", link: "/about" },
  { label: "Projects", ariaLabel: "View my projects", link: "/projects" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  { label: "Cats", ariaLabel: "Fun cats page", link: "/cats" },
  { label: "Extra", ariaLabel: "Extra content", link: "/extra" },
];

const socialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

export default function Navigation() {
  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="#fff"
      openMenuButtonColor="#fff"
      changeMenuColorOnOpen={true}
      colors={["#B19EEF", "#5227FF"]}
      logoUrl="/src/assets/logos/reactbits-gh-white.svg"
      accentColor="#ff6b6b"
      isFixed={true}
    />
  );
}
