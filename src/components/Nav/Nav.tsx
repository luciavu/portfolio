import './Nav.scss';
type NavLink = {
  number: string;
  name: string;
  link: string;
};

type NavPropTypes = {
  links: NavLink[];
};

const Nav = ({ links }: NavPropTypes) => {
  return (
    <>
      <nav>
        {links.map((link) => (
          <a className="nav-link" href={link.link}>
            <div className="number">{link.number}</div>
            <div className="name">{link.name}</div>
          </a>
        ))}
      </nav>
    </>
  );
};
export default Nav;
