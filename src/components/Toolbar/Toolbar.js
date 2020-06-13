import React from 'react'
import './Toolbar.css'
import { withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as Actions from '../../actions'
import { FormattedMessage } from 'react-intl';

const Toolbar = ({ setLanguageTags, setSelectedLanguage, surveyState, ...props }) => {
    const { languageTags, selectedLanguage, selectedSurvey, surveys } = surveyState
    return (
        <React.Fragment>
            <div className="toolbar-root">
                <div className="toolbar-item">
                    <div className="m-auto mr-0">
                        {languageTags.length > 0 && languageTags.filter(tag => tag.Code === selectedLanguage)[0].TagList._SURVEY} {" "}
                        <span className="font-bold">
                            {surveys.map(survey => survey.ID).indexOf(parseInt(selectedSurvey)) + 1}
                        </span>
                    </div>
                </div>
                <div className="toolbar-item">
                    <div className="m-auto mr-8">
                        <label className="pr-1 toolbar-label" htmlFor="languages">
                            <FormattedMessage id="toolbar.language" />
                        </label>
                        <select
                            className="toolbar-select"
                            value={selectedLanguage}
                            onChange={(e) => setSelectedLanguage(e.target.value)}
                            id="languages"
                        >
                            {
                                languageTags.map(language =>
                                    <option key={language.Code} value={language.Code}>{language.Code}</option>
                                )
                            }
                        </select>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        setLanguageTags: Actions.setLanguageTags,
        setSelectedLanguage: Actions.setSelectedLanguage
    }, dispatch)
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Toolbar));