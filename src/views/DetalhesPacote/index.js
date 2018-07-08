import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { default as DetalhesPacote } from './DetalhesPacote'
import { getPacoteById } from '../../store'

const mapStateToProps = (state, ownProps) => {
	const { match: { params: { pacoteId } } } = ownProps

	return {
		pacote: state.pacote
			.filter(item => item.id === parseInt(pacoteId, 10))
			.shift()
	}
}
const mapDispatchToProps = (dispatch, ownProps) => {
	return bindActionCreators({
		getPacoteById
	}, dispatch)
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DetalhesPacote)