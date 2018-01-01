const reducer = (state = {"c" : 886 , "start_1" :2}, action) => {
    if(action.type == "jia"){
        return {"c" : state.c + 1 , "start_1" :2}
    }else if(action.type == "jian"){
        return {"c" : state.c - 1 , "start_1" :2}
    }
    return state;
}

export default reducer;