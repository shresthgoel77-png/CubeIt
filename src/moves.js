// import { rotate } from './App' // adjust path if needed

export function executeMove(move, cubeGroup, rotationGroup, rotate) {
  if (!cubeGroup.current || !rotationGroup.current) {
    console.warn('Cube not ready yet')
    return
  }
  switch (move) {
    case 'L':
      rotate(cubeGroup.current, rotationGroup.current, 'x', -0.5, 1)
      break

    case "L'":
      rotate(cubeGroup.current, rotationGroup.current, 'x', -0.5, -1)
      break

    case "L2'":
      rotate(cubeGroup.current, rotationGroup.current, 'x', -0.5, -2)
      break

    case 'R':
      rotate(cubeGroup.current, rotationGroup.current, 'x', 0.5, -1)
      break

    case "R'":
      rotate(cubeGroup.current, rotationGroup.current, 'x', 0.5, 1)
      break

    case 'U':
      rotate(cubeGroup.current, rotationGroup.current, 'y', 0.5, -1)
      break

    case "U'":
      rotate(cubeGroup.current, rotationGroup.current, 'y', 0.5, 1)
      break

    case 'D':
      rotate(cubeGroup.current, rotationGroup.current, 'y', -0.5, 1)
      break

    case "D'":
      rotate(cubeGroup.current, rotationGroup.current, 'y', -0.5, -1)
      break

    case 'F':
      rotate(cubeGroup.current, rotationGroup.current, 'z', 0.5, -1)
      break

    case "F'":
      rotate(cubeGroup.current, rotationGroup.current, 'z', 0.5, 1)
      break

    case 'B':
      rotate(cubeGroup.current, rotationGroup.current, 'z', -0.5, 1)
      break

    case "B'":
      rotate(cubeGroup.current, rotationGroup.current, 'z', -0.5, -1)
      break

    default:
      console.warn('Invalid move:', move)
  }
}
