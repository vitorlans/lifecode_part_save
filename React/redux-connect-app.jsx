import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import  MainLayout from 'screens/Main/MainLayout';
import * as actionTranslate from 'actions/translate';

function mapStateToProps(state) {
  return {
    translate : state.translate
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionTranslate, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(MainLayout);

export default App;