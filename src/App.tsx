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

const Container = styled.div`
  display: flex;
`

const Hints = styled.div`
  margin-right: 40px;
`

type HintProps = {
  color: Color;
}
const Hint = styled.h2<HintProps>`
  padding: 10px;
  margin-top: 10px;
  background-color: ${props => COLORS[props.color].bg};
  color: ${props => COLORS[props.color].fg};
  border-radius: 10px;
`

function App() {
  return (
  <Container>
    <Hints>
      <Hint color={Color.Coral}>The way you make me feel</Hint>
      <Hint color={Color.Indigo}>The way you make me feel</Hint>
      <Hint color={Color.Peach}>The way you make me feel</Hint>
    </Hints>
    <Board>
      <Square animate={{ opacity: 1 }} color={Color.Indigo}>
        Word
      </Square>
      <Square animate={{ opacity: 1 }} color={Color.Peach}>
        Word
      </Square>
      <Square animate={{ opacity: 1 }} color={Color.Coral}>
        Happy
      </Square>
      <Square animate={{ opacity: 1 }} color={Color.Coral}>
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
      </Square>
      <Square animate={{ opacity: 1 }} color={Color.Indigo}>
        Word
      </Square>
    </Board>
  </Container>
  )
}

export default App
