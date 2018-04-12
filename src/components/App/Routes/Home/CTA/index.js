import React from 'react';
import styles from './styles.scss';
import Toggle from 'material-ui/Toggle';
import TeamForm from './components/teamform';
import IndividualForm from './components/individualform';

// TODO: move this to a css file if possible
// If it's possible to move it to a scss even better, but it seems unlikely
const toggleStyles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
  },
  thumbOff: {
    backgroundColor: '#ffcccc',
  },
  trackOff: {
    backgroundColor: '#ff9d9d',
  },
  thumbSwitched: {
    backgroundColor: 'red',
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d',
  }
};

class CTA extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      showingTeams: true,
    };
  }

  handleToggleChange() {
    this.setState({showingTeams: !this.state.showingTeams});
  }

  _renderForm() {
    if (this.state.showingTeams) {
      return <TeamForm />;
    } else {
      return <IndividualForm />;
    }
  }

  render() {
    return (
      <div className={styles.section} id="analytics">
        <div className={styles.main}>
          <h1>BE THE FIRST TO GET REP ONE</h1>
          <h2>Coming later this year.</h2>

          <div style={toggleStyles.block}>
              <Toggle
                label=""
                toggled={!this.state.showingTeams}
                onToggle={this.handleToggleChange.bind(this)}
                thumbStyle={toggleStyles.thumbOff}
                trackStyle={toggleStyles.trackOff}
                thumbSwitchedStyle={toggleStyles.thumbSwitched}
                trackSwitchedStyle={toggleStyles.trackSwitched}
              />
            {this._renderForm()}
          </div>
        </div>
      </div>
    );
  }

}

export default CTA;
