export const signUpValidet = (inputs) => {
    let error = {};

    // const userNamePattren = /^[A-Za-z]{4,}$/;
    const userNamePattren = /^[A-Z][a-z]{4}$/;
    const userEmailPattren =
    /^[a-zA-Z]{3,9}[0-9]{0,4}@(hotmail|gmail).com$/;
    // const passwordPattren = /^[0-9]{5,}$/;
    const passwordPattren = /^[0-9]{5}$/;

    // Name
    if (inputs.userName === "") {
        error.userName = "Name should not be empty";
    } else if (!userNamePattren.test(inputs.userName)) {
        error.userName = "Name DIdnt match";
    }

    // Email
    if (inputs.email === "") {
        error.email = "Email should not be empty";
    } else if (!userEmailPattren.test(inputs.email)) {
        error.email = "Email DIdnt match";
    }

    // Password
    if (inputs.password === "") {
        error.password = "password should not be empty";
    } else if (!passwordPattren.test(inputs.password)) {
        error.password = "password DIdnt match";
    }

    return error;
};

export const loginValidet = (inputs) => {
    let error = {};

    const userEmailPattren =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordPattren = /^[0-9]{5,}$/;

    // Email
    if (inputs.email === "") {
        error.email = "Email should not be empty";
    } else if (!userEmailPattren.test(inputs.email)) {
        error.email = "Email DIdnt match";
    }

    // Password
    if (inputs.password === "") {
        error.password = "password should not be empty";
    } else if (!passwordPattren.test(inputs.password)) {
        error.password = "password DIdnt match";
    }

    return error;
};
