import { useEffect, useState } from 'react';
import styled from 'styled-components';

enum Color {
  Coral,
  Indigo,
  Peach,
  BlueMagenta,
}

const COLORS = {
  [Color.Coral]: {
    bg: 'coral',
    fg: '#690101'
  },
  [Color.Indigo]: {
    bg: 'indigo',
    fg: '#E88888'
  },
  [Color.Peach]: {
    bg: '#FF9A8A',
    fg: '#353535'
  },
  [Color.BlueMagenta]: {
    bg: '#272640',
    fg: '#D9BB96'
  }
}

type HintData = {
  href: string;
  text: string;
  color: Color;
}

type SquareProps = {
  color: Color;
  selected: boolean;
};

const Square = styled.div<SquareProps>`
  width: 100px;
  height: 100px;
  background-color: ${props => COLORS[props.color].bg};
  color: ${props => COLORS[props.color].fg};
  margin: 10px;
  
  border: 4px solid #${props => props.selected ? 'D93654' : 'D9BB96'};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-weight: bold;
`;

const Header = styled.h2`
  color: #D93654;
  margin: 10px;
`;

const Board = styled.div`
  display: grid;
  width: 300px;
  height: 300px;
  grid-template-columns: repeat(4, 1fr);
`

type HintProps = {
  color: Color;
}
const Hint = styled.h2<HintProps>`
  height: 100px;
  width: 200px;
  margin: 10px;
  margin-right: 40px;
  padding: 10px;
  background-color: ${props => COLORS[props.color].bg};
  border: 4px solid #D9BB96;
  color: ${props => COLORS[props.color].fg};
  border-radius: 10px;
  display: flex;
  align-items: center;
  text-align: center;

  & a {
    text-decoration: none;
    color: ${props => COLORS[props.color].fg};
  }
`

type SquareData = {
  color: Color;
  word: string;
  selected: boolean;
  guessed: boolean;
}

const isHint = (data: SquareData | HintData): data is HintData => 'href' in data;

function App() {
  const [header, setHeader] = useState("Click on groups of three to find related words. Use the hints to the left if you get stuck.");
  const [squares, setSquares] = useState<(SquareData | HintData)[]>([
    {
      href: "https://www.youtube.com/watch?v=HzZ_urpj4As",
      text: "the way you make me feel",
      color: Color.Coral
    },
    {
      color: Color.Indigo,
      word: "Poppet",
      selected: false,
      guessed: false
    },
    {
      color: Color.Peach,
      word: "Twitterpated",
      selected: false,
      guessed: false
    },
    {
      color: Color.Coral,
      word: "Happy",
      selected: false,
      guessed: false
    },
    {
      href: "https://www.youtube.com/watch?v=84YK8dFyzc8",
      text: "what's in a name?",
      color: Color.Indigo
    },
    {
      color: Color.Coral,
      word: "Proud",
      selected: false,
      guessed: false
    },
    {
      color: Color.Indigo,
      word: "Bunny",
      selected: false,
      guessed: false
    },
    {
      color: Color.Peach,
      word: "Smitten",
      selected: false,
      guessed: false
    },
    {
      href: "https://www.youtube.com/watch?v=cen22TBHo9M",
      text: "moments in love",
      color: Color.Peach
    },
    {
      color: Color.Peach,
      word: "Exhilarating",
      selected: false,
      guessed: false
    },
    {
      color: Color.Coral,
      word: "Content",
      selected: false,
      guessed: false
    },
    {
      color: Color.Indigo,
      word: "Little One",
      selected: false,
      guessed: false
    },
  ]);

  useEffect(() => {
    const guessed = squares.filter(square => !isHint(square) && square.guessed);
    if (guessed.length === 9) {
      setHeader("You won! Happy Birthday, Beautiful! I'm so lucky to have met you this year.")
    }

    const selected = squares.filter(square => !isHint(square) && square.selected)
    if (selected.length === 3) {
      const matches = new Set(selected.map(s => s.color));
      const missing = matches.size - 1;
      if (!missing) {
        setSquares(squares.map(s => isHint(s) ? s : ({
          ...s,
          guessed: s.guessed ? s.guessed : s.selected,
          selected: false
        })));
      } else if (missing === 2) {
        setSquares(squares.map(s => ({
          ...s,
          selected: false
        })))
      } else {
        alert(`${missing} away...`)
      }
    }
  }, [squares])
 
  return (
    <>
      <Header>{header}</Header>
      <Board>
        {squares.map((data: SquareData | HintData, index: number) => (
          isHint(data) ? (
            <Hint key={data.text} color={data.color}>
              <a target="_blank" href={data.href}>
                {data.text}
              </a>
              </Hint>
          ) : (
            <Square 
              selected={data.selected} 
              key={data.word} 
              color={data.guessed ? data.color : Color.BlueMagenta}
              onClick={() => {
                const newSquares = squares.map((d: SquareData | HintData, i: number) => {
                  return i === index ? ({
                    ...d,
                    selected: data.guessed ? false : !data.selected
                  }) : (
                    d
                  )
                });

                setSquares(newSquares);
              }}
            >
              {data.word}
            </Square>
          )
        ))}
      </Board>
    </>
  )
}

export default App
