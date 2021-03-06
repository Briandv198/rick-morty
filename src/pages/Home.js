import getData from "../utils/getData";

const Home = async () => {
  const characters = await getData();
  const view = `
        <div class="home">
            ${characters.results
              .map(
                (character) => `
                <article class="character-item">
                    <a href="#/${character.id}/">
                        <div class="image">
                            <img src="${character.image}" alt="${character.name}">
                        </div>
                        <h2>${character.name}</h2>
                    </a>
                </article>
            `
              )
              .join("")}
        </div>
    `;
  return view;
};

export default Home;
