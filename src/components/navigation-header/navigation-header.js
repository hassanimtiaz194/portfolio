import Link from "next/link";

const NavigationHeader = () => {
  return (
    <header>
      <div>
        <Link href="/">Hassan Imtiaz</Link>
      </div>
      <nav>
        <ul className="flex flex-row gap-5">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/projects">PROJECTS</Link>
          </li>
          <li>
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default NavigationHeader;
