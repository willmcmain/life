import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom'
import RulesPage from 'components/rules/RulesPage'
import BoardPage from 'components/board/BoardPage'

const App = () => (
    <Router>
        <div>
            <nav>
                <Link to="/">Game</Link>
                | <Link to="/rules">Rules</Link>
            </nav>
            <div>
                <Route exact path="/" component={BoardPage} />
                <Route path="/rules" component={RulesPage} />
            </div>
        </div>
    </Router>
)

export default App
