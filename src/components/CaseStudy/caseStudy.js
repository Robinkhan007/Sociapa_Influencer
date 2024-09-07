import React from 'react';
import './caseStudy.css'; // Ensure you have the CSS file linked

const cardsData = [
  { id: 'card_1', title: 'Card One', img: 'https://i.ytimg.com/vi/PhXml7ZvcUM/maxresdefault.jpg' },
  { id: 'card_2', title: 'Card Four', img: 'https://i.ytimg.com/vi/PhXml7ZvcUM/maxresdefault.jpg' },
  { id: 'card_3', title: 'Card Four', img: 'https://i.ytimg.com/vi/PhXml7ZvcUM/maxresdefault.jpg' },
//   { id: 'card_2', title: 'Card Two', img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/961ed91a-749f-419f-aa88-decfaa272e9e/dey17m7-c2e980a7-fd83-4949-b21a-cde007f36581.jpg/v1/fill/w_1280,h_720,q_75,strp/rainmeter_theme__animated___modern_black_white__by_designedbytoxic_dey17m7-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvOTYxZWQ5MWEtNzQ5Zi00MTlmLWFhODgtZGVjZmFhMjcyZTllXC9kZXkxN203LWMyZTk4MGE3LWZkODMtNDk0OS1iMjFhLWNkZTAwN2YzNjU4MS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.zLQqEXiYKs7MJw1CNG3wjNNc6pFcWUskDh8wecafwi0' },
{ id: 'card_4', title: 'Card Four', img: 'https://i.ytimg.com/vi/PhXml7ZvcUM/maxresdefault.jpg' },
];

const StackingCards = () => {
  return (
    <div style={{marginBottom:"300px"}}>
        <span>Unforgettable numbers</span>
      <main>
        <ul id="cards">
          {cardsData.map((card, index) => (
            <li className="card" id={card.id} key={card.id} style={{ '--index': index + 1 }}>
              <div className="card__content">
                <div>
                  <h2>{card.title}</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <p><a href="#top" className="btn btn--accent">Read more</a></p>
                </div>
                <figure>
                  <img src={card.img} alt={`${card.title} description`} />
                </figure>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default StackingCards;
