
export const getMe = (req, res) => {
    const dummyUser = { fullName: "MR.Dummy", email: "dummy02@gmail.com", userName: "DummyUsername#1" };

    res.status(200).json({
        message: "Fetched user details succefully",
        success: true,
        user: dummyUser
    })
}

export const healthCheck = (req, res) => {
    res.status(200).json({
        message: "Server is live and running.",
        success: true
    })
}