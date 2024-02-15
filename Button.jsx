import { useNavigate } from 'react-router'

function Button() {
  const navigate = useNavigate()
  return <button onClick={() => navigate(-1)}>Back</button>
}

export default Button
