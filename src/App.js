import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import ListItem from './components/ListItem';

const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends",
  },
  
  {
      url: "https://www.twitch.tv/directory/game/VALORANT",
      imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
      alt: "Imagem do jogo Valorant",
  },
  
  {  
    url: "https://www.twitch.tv/directory/game/Minecraft",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft",
  },
  
  {
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo TFT",
  },
]

const channelListData = [
  {  
    url: "https://www.twitch.tv/cellbit",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem de Cellbit",
  },
  
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends",
  },
    
  {   
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo TFT",
  },
]

const socialListData = [
  {
    url: "https://www.instagram.com/leandro_tchep/",
    imageUrl: "/assets/instagram.svg",
    alt: "Instagram do Leandro Chagas"
  },
  {
    url: "https://www.youtube.com/watch?v=z3qP4Ikq8nk",
    imageUrl: "/assets/youtube.svg",
    alt: "Youtube do Leandro Chagas"
  },
  {
    url: "https://www.linkedin.com/in/leandro-chagas-/",
    imageUrl: "/assets/linkedin.svg",
    alt: "Linkedin de Leandro Chagas"
  }
]

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Section title="Meus jogos"
          subtitle="Os games que eu mais curto de jogar!"
          className="games-list"
        >
        {
          gamesListData.map(function(item) {
            return(
              <ListItem 
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            )
          })
        }
        </Section>

        <Section title="Canias e Streamers"
          subtitle="Lista de canias e tramiss??es que eu n??o perco!"
          className="channel-list"
        >

          {
            channelListData.map(function(item){
              return (
                <ListItem 
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}/>
              )
            })
          }
        </Section>

        <Section title="minhas redes"
        subtitle="Se conecte comigo agora mesmo!"
        className="socila-list">
          {
            socialListData.map(function(item){
              return (
                <ListItem 
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }
        </Section>  
      </main>

    </div>
  );
}

export default App;
