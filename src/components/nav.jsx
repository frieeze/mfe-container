const React = require('react');

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href='/'>Home</a>
          <a href='/counter'>Counter</a>
        </li>
      </ul>

      <style jsx>{`
        nav a {
          color: #white;
          text-decoration: none;
          font-size: 13px;
          padding-right: 10px;
        }
      `}</style>
    </nav>
  );
};

export default Nav;
