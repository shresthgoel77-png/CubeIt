import { useState } from 'react'
import { executeMove } from './moves'

export default function MoveInput({ cubeGroup, rotationGroup, rotate }) {
  const [input, setInput] = useState('')

  function runMovesSequentially(moves) {
    let index = 0

    function nextMove() {
      if (index >= moves.length) return

      executeMove(moves[index], cubeGroup, rotationGroup, rotate)

      index++

      // wait slightly longer than animation duration (250ms)
      setTimeout(nextMove, 250)
    }

    nextMove()
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const moves = input.trim().split(/[ ,]+/).filter(Boolean)

    runMovesSequentially(moves)

    setInput('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 10
      }}>
      <input type="text" placeholder="" value={input} onChange={(e) => setInput(e.target.value)} />

      <button type="submit">Run</button>
    </form>
  )
}
