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
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Board = styled(motion.div)`
  display: grid;
  width: 300px;
  height: 300px;
  grid-template-columns: repeat(3, 1fr);
`

function App() {
  return (
  <Board>
    <Square animate={{ opacity: 1 }} color={Color.Indigo}>
      Word
    </Square>
    <Square animate={{ opacity: 1 }} color={Color.Peach}>
      Word
    </Square>
    <Square animate={{ opacity: 1 }} color={Color.Coral}>
      Word
    </Square>
    <Square animate={{ opacity: 1 }} color={Color.Coral}>
      Word
    </Square>
    <Square animate={{ opacity: 1 }} color={Color.Indigo}>
      Word
    </Square>
    <Square animate={{ opacity: 1 }} color={Color.Peach}>
      Word
    </Square>
    <Square animate={{ opacity: 1 }} color={Color.Peach}>
      Word
    </Square>
    <Square animate={{ opacity: 1 }} color={Color.Coral}>
      Word
    </Square>
    <Square animate={{ opacity: 1 }} color={Color.Indigo}>
      Word
    </Square>
  </Board>
  )
}

export default App
