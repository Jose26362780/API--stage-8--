module.exports = {
    jwt:{ 
        secret: process.env.AUTH_SECRET || "deafult" ,
        expiresIn: "1d",
    }
}