export const setLanguageTags = ( languageTags ) => {
    return {
        type: 'SET_LANGUAGE_TAGS',
        payload: languageTags
    }
}

export const setSelectedLanguage = ( language ) => {
    return {
        type: 'SET_SELECTED_LANGUAGE',
        payload: language
    }
}

export const setSurveys = ( surveys ) => {
    return {
        type: 'SET_SURVEYS',
        payload: surveys
    }
}

export const addSurvey = ( survey ) => {
    return {
        type: 'ADD_SURVEY',
        payload: survey
    }
}

export const updateSurvey = ( survey ) => {
    return {
        type: 'UPDATE_SURVEY',
        payload: survey
    }
}

export const deleteSurvey = ( survey ) => {
    return {
        type: 'DELETE_SURVEY',
        payload: survey
    }
}

export const setSelectedSurvey = ( survey ) => {
    return {
        type: 'SET_SELECTED_SURVEY',
        payload: survey
    }
}

export const setSelectedOperation = ( operation ) => {
    return {
        type: 'SET_SELECTED_OPERATION',
        payload: operation
    }
}

export const changeLeftPanelDisableStatus = ( isLeftPanelDisabled ) => {
    return {
        type: 'CHANGE_LEFT_PANEL_DISABLE_STATUS',
        payload: isLeftPanelDisabled
    }
}
