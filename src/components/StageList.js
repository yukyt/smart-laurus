import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { chooseSection } from '../actions/stage';
import { calc } from '../actions/simulator';

class StageList extends Component {
  render() {
    const sections = new Map([
      ['colosseum', 'コロッセオ'],
      ['guild', 'ギルド'],
      ['event', 'イベント'],
      ['scenario', 'シナリオ'],
    ]);
    return (
      <section>
        <select
          id="section"
          onChange={e => this.props.onChangeSection(e.target.value)}
        >
          {Array.from(sections.keys()).map(key => (
            <option key={key} value={key}>
              {sections.get(key)}
            </option>
          ))}
        </select>
        <select
          id="stage"
          onChange={(e) =>
                    this.props.onChangeStage(this.props.stages, this.props.items, e.target.value)
          }
        >
          {this.props.stages.map(stage => (
            <option key={stage.id} value={stage.id}>
              {stage.name}
            </option>
          ))}
        </select>
      </section>
    );
  }
}

const getVisibleStages = (stages, sectionFilter) => {
  switch (sectionFilter) {
    case 'colosseum':
      return stages.filter(stage => (stage.section === 'colosseum'));
    case 'guild':
      return stages.filter(stage => (stage.section === 'guild'));
    case 'event':
      return stages.filter(stage => (stage.section === 'event'));
    case 'scenario':
      return stages.filter(stage => (stage.section === 'scenario'));
    default:
      return stages.filter(stage => (stage.section === 'colosseum'));
  }
};

StageList.propTypes = {
  stages: PropTypes.arrayOf(Object).isRequired,
  items: PropTypes.arrayOf(Object).isRequired,
  onChangeSection: PropTypes.func,
  onChangeStage: PropTypes.func,
};

const mapStateToProps = state => ({
  stages: getVisibleStages(state.stages, state.sectionFilter),
  sectionFilter: state.sectionFilter,
  items: state.items,
});

const mapDispatchToProps = dispatch => ({
  onChangeSection: (section) => {
    dispatch(chooseSection(section));
  },
  onChangeStage: (stages, items, stageId) => {
    dispatch(calc(stages, items, stageId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StageList);
