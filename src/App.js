import React from "react";
import "./styles.css";
import { useState } from "react";

const animeDB = {
  Adventure: [
    {
      name: "Hunter x Hunter",
      rating: "9.8/10",
      imageUrl:
        "https://www.fanbyte.com/wp-content/uploads/2019/08/hunterhunter1.jpg"
    },
    {
      name: "One Piece",
      rating: "9.7/10",
      imageUrl:
        "https://www.denofgeek.com/wp-content/uploads/2019/10/one_piece_stampede_movie_review_anime.jpg?resize=768%2C432"
    },
    {
      name: "Cowboy Beebop",
      rating: "9.5/10",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoRr_m4zAJu8D9qliJDo7MMVkc3KUlQYYi3g&usqp=CAU"
    }
  ],

  Action: [
    {
      name: "Attack on Titans",
      rating: "9.8/10",
      imageUrl:
        "https://www.denofgeek.com/wp-content/uploads/2020/09/Attack-on-Titan-Season-4-Poster.jpg?resize=725,1024"
    },
    {
      name: "Jujutsu Kaisen",
      rating: "9.8/10",
      imageUrl:
        "https://otakukart.com/wp-content/uploads/2021/01/Jujutsu-Kaisen-scaled.jpg"
    },
    {
      name: "Naruto",
      rating: "9.7/10",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgWqJoXrxrxXW45RdChL2or033YltVVbxXCQ&usqp=CAU"
    }
  ],
  Horror: [
    {
      name: "Kabaneri",
      rating: "9.5/10",
      imageUrl: "https://i.ytimg.com/vi/Eu2zmG4JLQ0/maxresdefault.jpg"
    },
    {
      name: "CastleVania",
      rating: "9.6/10",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/91ockfwHHDL._RI_.jpg"
    },
    {
      name: "Death Note",
      rating: "9.8/10",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BODkzMjhjYTQtYmQyOS00NmZlLTg3Y2UtYjkzN2JkNmRjY2FhXkEyXkFqcGdeQXVyNTM4MDQ5MDc@._V1_.jpg"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Adventure");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <div className="container">
        <h1>Popular Anime </h1>
        <p style={{ fontSize: "smaller", margin: "5px" }}>
          Checkout out some of the popular anime. Select a genre to get started{" "}
        </p>

        <div>
          {Object.keys(animeDB).map((genre) => (
            <button className="genre" onClick={() => genreClickHandler(genre)}>
              {genre}
            </button>
          ))}
        </div>
        <hr />
        <div
          style={{
            textAlign: "left",
            margin: "30px"
            // display: "flex",
            // justifyContent: "center"
          }}
        >
          <ul style={{ paddingInlineStart: "0" }}>
            {animeDB[selectedGenre].map((anime) => (
              <li
                key={anime.name}
                className="anime-list"
                style={{
                  backgroundImage: ` linear-gradient(
                    to bottom,
                    rgba(0, 0, 0, 0.5) 0%,
                    rgba(0, 0, 0, 0.5) 100%
                  ),url(${anime.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}
              >
                <div style={{ fontSize: "larger" }}> {anime.name} </div>
                <div style={{ fontSize: "smaller" }}> {anime.rating} </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
