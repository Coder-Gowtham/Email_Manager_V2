let sessionData = {};

const setSessionData = (data) => {
    sessionData = { ...sessionData, ...data };
};

const getSessionData = () => {
    console.log(`SESSION DATA : ${JSON.stringify(sessionData)}`)
    return sessionData;
};

module.exports = { setSessionData, getSessionData };
