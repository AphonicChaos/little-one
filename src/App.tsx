import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

enum Color {
  Coral,
  Indigo,
  Peach,
}

type SquareProps = {
  color: Color;
};

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
  }
}


const Square = styled(motion.div)<SquareProps>`
  width: 100px;
  height: 100px;
  background-color: ${props => COLORS[props.color].bg};
  color: ${props => COLORS[props.color].fg};
  margin: 10px;
  border: 4px solid #D9BB96;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-weight: bold;
`;

const Board = styled(motion.div)`
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
  bg: Color;
}

function App() {
  return (
      <Board>
        <Hint color={Color.Coral}><a href="https://www.youtube.com/watch?v=HzZ_urpj4As">the way you make me feel</a></Hint>
        <Square animate={{ opacity: 1 }} color={Color.Indigo}>
          Poppet
        </Square>
        <Square animate={{ opacity: 1 }} color={Color.Peach}>
          Twitterpated
        </Square>
        <Square animate={{ opacity: 1 }} color={Color.Coral}>
          Happy
        </Square>
        <Hint color={Color.Indigo}><a href="https://www.youtube.com/watch?v=84YK8dFyzc8">what's in a name?</a></Hint>
        <Square animate={{ opacity: 1 }} color={Color.Coral}>
          Proud
        </Square>
        <Square animate={{ opacity: 1 }} color={Color.Indigo}>
          Bunny
        </Square>
        <Square animate={{ opacity: 1 }} color={Color.Peach}>
          Smitten
        </Square>
        <Hint color={Color.Peach}><a href="https://www.youtube.com/watch?v=cen22TBHo9M">moments in love</a></Hint>
        <Square animate={{ opacity: 1 }} color={Color.Peach}>
          Exhilarating
        </Square>
        <Square animate={{ opacity: 1 }} color={Color.Coral}>
          Content 
        </Square>
        <Square animate={{ opacity: 1 }} color={Color.Indigo}>
          Little One
        </Square>
      </Board>
  )
}

export default App
