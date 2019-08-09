function botMsg(val) {
    return {
        type: "BOT_MSG",
        payload: { 'botMsg': [val] }
    }
}

export default botMsg;