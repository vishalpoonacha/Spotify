export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item:null,

    //REMOVE AFTER FINISHED DEVELOPMENT
    token:'BQAkqWSjlun0KgATgpAsfU4lbffgOSex6GBxw3FR5WrG9z59u4a-l-6kDrvNLvlVDBGavB9_OO6CTXvOVItAsKKNUHz6KYA1abA3tF5mWjz6tKMJRk4KL41va59Dsp9HYEUDEJcmEMj1lrZAuerCJt0QF7tcxx_eHmDAAhDxC1tCzg6EL1wL',
};

const reducer =(state,action)=>{

    console.log(action);

    // action -> type, [payload]

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            };

            case 'SET_TOKEN':
                return{
                    ...state,
                    token:action.token
                }

                case 'SET_PLAYLISTS':
                    return{
                        ...state,
                        playlists:action.playlists,
                    }
        default:
            return state;
    }


}

export default reducer;