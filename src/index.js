import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ListaPacotes, DetalhesPacote } from './views'
import moment from 'moment'
import 'moment/locale/pt-br'

moment.locale(navigator.language)

const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/:pacoteId" component={DetalhesPacote} />
					<Route path="/" component={ListaPacotes} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))