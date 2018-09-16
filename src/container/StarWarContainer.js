import { connect } from 'react-redux'
import { fetchStarWarsRequest } from '../actions/StarWarActions'
import StarWarComponent from '../components/StarWarComponent';

const mapStateToProps = ({starWars}) => ({starWars})

const mapDispatchToProps = dispatch => (
    {
        fetchStarWarsRequest: () => dispatch(fetchStarWarsRequest()) 
    }
)

const StarWarContainer = connect(mapStateToProps, mapDispatchToProps)(StarWarComponent)

export default StarWarContainer;
