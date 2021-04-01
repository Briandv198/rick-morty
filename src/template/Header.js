const Header = () => {
  const view = `
    <div class="header">
        <div class="header-logo">
            <h1>
                <a href="/">
                    Rick and Morty
                </a>
            </h1>
        </div>
        <nav>
            <a href="#/about/">
                About
            </a>
        </nav>
    </div>
  `;
  return view;
};

export default Header;
