export default function (state = null, action) {
    switch (action.type) {
        case 'USER_SELECTED':
            return {
                title: action.payload
            };
            break;
    }
    return {
        title: 'SimpleChat'
    };
}