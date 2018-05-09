import { update } from 'life'
import ReactDOM from 'react-dom'

const hello = 'hello world!'

ReactDOM.render(
    <div>{hello}</div>,
    document.getElementById('app')
)

export default hello
