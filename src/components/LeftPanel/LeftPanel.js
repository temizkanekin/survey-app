import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as Actions from '../../actions'
import './LeftPanel.css'
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
import SnackBar from '../SnackBar/SnackBar'

const localizations = defineMessages({
    defaultOption: {
        id: "leftPanel.defaultOption",
    }
});

const LeftPanel = ({ setLanguageTags, setSurveys, setSelectedSurvey, setSelectedOperation, changeLeftPanelDisableStatus, deleteSurvey, surveyState, intl, ...props }) => {
    const [isSurveySelectionDisabled, setIsSurveySelectionDisabled] = React.useState(true)
    const { selectedSurvey, surveys, selectedOperation, operations, selectedLanguage, languageTags, leftPanelDisabled, authorizationToken } = surveyState

    const ref = React.useRef();

    React.useEffect(() => {
        const url = process.env.NODE_ENV !== 'development' ? "https://coresurveymvc.appspot.com" :""
        axios.get(url+'/api/Language')
            .then(res => setLanguageTags(res.data))
            .catch(error =>
                ref.current.fireSnackBar({
                    type: "fail",
                    message: "snackbar.languageTagsFailed"
                })
            )

        axios.get(url+'/api/Survey', {
            headers: {
                'Authorization': authorizationToken
            }
        })
            .then(res => setSurveys(res.data))
            .catch(error =>
                ref.current.fireSnackBar({
                    type: "fail",
                    message: "snackbar.surveysFailed"
                })
            )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSelectOperation = (e) => {
        e.target.value !== "_CREATE" ? setIsSurveySelectionDisabled(false) : setIsSurveySelectionDisabled(true)
        setSelectedOperation(e.target.value)
    }

    const handleProceed = () => {
        //todo can be replaced with switch-case
        const url = process.env.NODE_ENV !== 'development' ? "https://coresurveymvc.appspot.com" :""
        if (selectedOperation === "_REMOVE") {
            axios.delete(url+`/api/Survey/${selectedSurvey}`, {
                headers: {
                    'Authorization': authorizationToken
                }
            })
                .then(res => {
                    deleteSurvey(res.data)
                    ref.current.fireSnackBar({
                        type: "success",
                        message: "snackbar.removeSuccess"
                    })
                    setSelectedSurvey(surveys[0] && surveys[0].ID)
                })
                .catch(error =>
                    ref.current.fireSnackBar({
                        type: "fail",
                        message: "snackbar.removeFailed"
                    })
                )
        }
        else {
            selectedOperation === "_CREATE" ? props.history.push(`/operation/${selectedOperation}`)
                : props.history.push(`/operation/${selectedOperation}/survey/${selectedSurvey}`)
            changeLeftPanelDisableStatus(true)
        }
    }

    return (
        <React.Fragment>
            <SnackBar ref={ref} />
            <div className={`m-auto w-4/5 ${leftPanelDisabled && "leftPanel-disabled"}`}>
                <div className="flex flex-col">
                    <div className="w-full flex justify-between mb-4">
                        <label htmlFor="operations"><FormattedMessage id="leftPanel.operation" /> :</label>
                        <select
                            className="leftPanel-select"
                            defaultValue=""
                            value={selectedOperation}
                            onChange={handleSelectOperation}
                            id="operations"
                        >
                            <option disabled value=""> {intl.formatMessage(localizations.defaultOption)} </option>
                            {
                                operations.map(operation => {
                                    const operationName = languageTags.length > 0 && languageTags.filter(tag => tag.Code === selectedLanguage)[0].TagList[operation.value]
                                    return <option key={operation.value} value={operation.value}>{operationName}</option>
                                }
                                )
                            }
                        </select>
                    </div>
                    <div className="w-full flex justify-between mb-4">
                        <label className={isSurveySelectionDisabled ? "label-disabled" : ""} htmlFor="surveys"><FormattedMessage id="leftPanel.survey" /> :</label>
                        <select
                            disabled={isSurveySelectionDisabled}
                            className="leftPanel-select"
                            defaultValue=""
                            value={selectedSurvey}
                            onChange={(e) => setSelectedSurvey(e.target.value)}
                            id="surveys"
                        >
                            <option disabled value=""> {intl.formatMessage(localizations.defaultOption)} </option>
                            {
                                surveys.map(survey =>
                                    <option key={survey.ID} value={survey.ID}>{survey.Name}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="w-full flex justify-end">
                        <button
                            type="button"
                            disabled={(selectedOperation !== "_CREATE" && !selectedSurvey) || (selectedOperation === "_REMOVE" && surveys.length === 0)}
                            className="text-center"
                            onClick={handleProceed}
                        >
                            <FormattedMessage id="generic.proceed" />
                        </button>
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
        setSurveys: Actions.setSurveys,
        setSelectedSurvey: Actions.setSelectedSurvey,
        setSelectedOperation: Actions.setSelectedOperation,
        changeLeftPanelDisableStatus: Actions.changeLeftPanelDisableStatus,
        deleteSurvey: Actions.deleteSurvey
    }, dispatch)
}

export default withRouter(injectIntl(connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftPanel)));