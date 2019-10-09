export default function (state = {}, action){

    switch (action.type) {
        case 'loading':return {...state,loading:true}
        case 'loadingFinished':return {...state,loading:false}
        default : return state 

    }
}