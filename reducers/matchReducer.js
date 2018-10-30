const defaultMatchState = 
{
    matches : [
        {name: 'Richy', position: 1, key: '1'},
        {name: 'Manu', position: 2,key:'2'},
        {name: 'Chris', position: 3, key: '3'},
    ],

}

export default (state = defaultMatchState, action) => {
    switch(action.type) 
    {
        case 'ADD_MATCH' :
         return state.matches.concat(action.match);
         default :
         return state;
    }
}