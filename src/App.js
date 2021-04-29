import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Header from './pages/Header';

function App() {
	return (
		<div className='App'>
			<Router>
        <Header />
				<Switch>
					<Route exact path='/'>
						<Login />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
