import Logo from '../assets/Logo.png'

const Header = () => {
  const view = `
    <div class="header">
        <div class="header-logo">
            <a href="/">
                <img src="${Logo}" alt="Rick and Morty">
            </a>
        </div>
        <nav>
            <a href="/">
                Home
            </a>
            <a href="#/about/">
                About
            </a>
        </nav>
    </div>
  `;
  return view;
};

export default Header;
