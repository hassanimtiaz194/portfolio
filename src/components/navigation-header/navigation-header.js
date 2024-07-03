import Link from "next/link";

const NavigationHeader = () => {
  return (
    <header>
      <div>
        <Link href="/portfolio">Hassan Imtiaz</Link>
      </div>
      <nav>
        <ul className="flex flex-row gap-5">
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/portfolio/projects">PROJECTS</Link>
          </li>
          <li>
            <Link href="/portfolio/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default NavigationHeader;