const initialState = {
    languageTags: [],
    selectedLanguage: "TR",
    selectedSurvey : undefined,
    surveys: [],
    operations: [
        {
            name:"Create",
            value:"_CREATE"
        },
        {
            name:"Update",
            value:"_UPDATE"
        },
        {
            name:"Remove",
            value:"_REMOVE"
        }
    ],
    selectedOperation: undefined,
    leftPanelDisabled: false,
    authorizationToken: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlbXRlbWl6a2FuQGdtYWlsLmNvbSIsImp0aSI6Ijg5MGQxYzUwLTA0MmYtNGRmZi1hZTU0LWYyMDkyNjZmZjcxMCIsIm5iZiI6MTU5MTgwNTk0NCwiZXhwIjoxNTk0Mzk3OTQ0LCJpc3MiOiJodHRwczovL2NvcmVzdXJ2ZXlhcGkuYXBwc3BvdC5jb20vIiwiYXVkIjoiaHR0cHM6Ly9jb3Jlc3VydmV5YXBpLmFwcHNwb3QuY29tLyJ9.lDOriv26WjMZwkGFuaWERgkghVqC35oRErEXGC-NE5w'
}
const surveyState = (state = initialState, action) => {
    switch(action.type){
        case 'SET_LANGUAGE_TAGS':
            return {
                ...state,
                languageTags: action.payload
            }
        case 'SET_SELECTED_LANGUAGE':
            return {
                ...state,
                selectedLanguage: action.payload
            }
        case 'SET_SURVEYS':
            return {
                ...state,
                surveys: action.payload
            }
        case 'ADD_SURVEY':
            
            return {
                ...state,
                surveys : state.surveys.concat(action.payload)
            }
        case 'UPDATE_SURVEY':
            return {
                ...state,
                surveys: state.surveys.map(survey => survey.ID === action.payload.ID ? action.payload : survey)
            }
        case 'DELETE_SURVEY':
            state.surveys.splice(state.surveys.map(survey => survey.ID).indexOf(action.payload.ID),1)
            return {
                ...state,
            }
        case 'SET_SELECTED_SURVEY':
            return {
                ...state,
                selectedSurvey: action.payload
            }
        case 'SET_SELECTED_OPERATION':
            return {
                ...state,
                selectedOperation: action.payload
            }
        case 'CHANGE_LEFT_PANEL_DISABLE_STATUS':
            return {
                ...state,
                leftPanelDisabled: action.payload
            }
        default:
            return state
    }
}

export default surveyState;
