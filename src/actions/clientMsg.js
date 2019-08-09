function clientMsg(val) {
    return {
        type: "CLIENT_MSG",
        payload: { 'clientMsg': val }
    }
}

export default clientMsg;