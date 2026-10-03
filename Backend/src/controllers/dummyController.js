const user = { id: '131', fullName: "Yoshimitsu kanba", email: "yoshi01@gmail.com", role: "admin" };

export const health = (req, res) => {
    res.status(200).json({
        message: "Fetched health report",
        status: "Okay",
        success: true
    })
}

export const getMe = (req, res) => {
    res.status(200).json({
        message: "Fetched user details",
        success: true,
        user: user
    })
}