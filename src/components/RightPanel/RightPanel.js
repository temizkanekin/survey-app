import React from 'react';
import { withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as Actions from '../../actions'
import axios from "axios";

import './RightPanel.css'
import { FormattedMessage } from 'react-intl';
import SnackBar from '../SnackBar/SnackBar'


const RightPanel = ({ changeLeftPanelDisableStatus, addSurvey, updateSurvey, surveyState, setSelectedSurvey, match, ...props }) => {
    const { selectedLanguage, languageTags, leftPanelDisabled, surveys, authorizationToken } = surveyState
    const { operation, survey } = match.params
    const [selectedSurveyObject, setSelectedSurveyObject] = React.useState({ Name: "" })

    const ref = React.useRef();

    React.useEffect(() => {
        const newSurvey = surveys.filter(s => s.ID === parseInt(survey))[0]
        newSurvey && setSelectedSurveyObject(newSurvey)
    }, [survey, surveys])

    const handleBack = () => {
        changeLeftPanelDisableStatus(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        operation === "_CREATE" ? axios.post('/api/Survey', { "Name": `${selectedSurveyObject.Name}` }, {
            headers: {
                'Authorization': authorizationToken
            }
        }).then(res => {
            addSurvey(res.data)
            setSelectedSurvey(res.data.ID)
            ref.current.fireSnackBar({
                type: "success",
                message: "snackbar.addSuccess"
            })
        })
            .catch(error =>
                ref.current.fireSnackBar({
                    type: "fail",
                    message: "snackbar.addFailed"
                })
            )
            :
            axios.put(`/api/Survey/${selectedSurveyObject.ID}`, selectedSurveyObject, {
                headers: {
                    'Authorization': authorizationToken
                }
            }).then(res => {
                updateSurvey(res.data)
                ref.current.fireSnackBar({
                    type: "success",
                    message: "snackbar.updateSuccess"
                })
            })
                .catch(error =>
                    ref.current.fireSnackBar({
                        type: "fail",
                        message: "snackbar.updateFailed"
                    })
                )
    }

    return (
        <React.Fragment>
            <SnackBar ref={ref} />
            <div className={`m-auto w-4/5 ${!leftPanelDisabled && "rightPanel-disabled"}`}>
                <div className="flex flex-col">
                    <form onSubmit={handleSubmit}>
                        <div className="w-full flex flex-col mb-4">
                            <div className="w-full flex mb-4 justify-between">
                                <label className="" htmlFor="surveyname">{languageTags.length > 0 && languageTags.filter(tag => tag.Code === selectedLanguage)[0].TagList["_SURVEY_NAME"]}</label>
                                <input
                                    className=""
                                    type="text"
                                    id="surveyname"
                                    name="surveyname"
                                    value={selectedSurveyObject.Name || ""}
                                    onChange={(e) => setSelectedSurveyObject({ ...selectedSurveyObject, "Name": e.target.value })}
                                />
                            </div>
                            <div className="w-full flex justify-between">
                                <button
                                    type="button"
                                    className="text-center rightPanel-button"
                                    onClick={handleBack}
                                >
                                    <FormattedMessage id="generic.back" />
                                </button>
                                <button
                                    disabled={!selectedSurveyObject.Name}
                                    type="submit"
                                    className="text-center rightPanel-button"
                                >
                                    <FormattedMessage id="generic.submit" />
                                </button>
                            </div>

                        </div>
                    </form>
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
        changeLeftPanelDisableStatus: Actions.changeLeftPanelDisableStatus,
        addSurvey: Actions.addSurvey,
        updateSurvey: Actions.updateSurvey,
        setSelectedSurvey: Actions.setSelectedSurvey
    }, dispatch)
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(RightPanel));