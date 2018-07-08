import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { recuperaTodosOsPacotes } from '../../store'
import ListaPacotes from './ListaPacotes'

const mapStateToProps = (state) => ({
	pacotes: state.pacote
})

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
	recuperaTodosOsPacotes
}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListaPacotes)