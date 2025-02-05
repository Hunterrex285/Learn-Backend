import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    });

    const options = {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 7*24*60*60*1000 // 7 day
    };

    // if(process.env.NODE_ENV === 'production'){
    //     options.secure = true;
    // }

    res.cookie('token', token, options);

    return token;
}

export default generateTokenAndSetCookie;
