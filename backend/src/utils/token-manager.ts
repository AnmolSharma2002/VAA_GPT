import jwt from 'jsonwebtoken'
import{ Request, Response, NextFunction } from "express"
import { COOKIE_NAME } from './constants.js';
import { resolve } from 'path';
import { rejects } from 'assert';
export const createToken = (id:string , email:string, expiresIn:string)=>{
    const payload = {
        id , email
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET,{
        expiresIn,
    });
    return token;
};

export const verifyToken = async (req:Request, res:Response, next:NextFunction) => {
    const token = req.signedCookies[`${COOKIE_NAME}`];
    if(!token || token.trim()===""){
        return res.status(401).json({message:"Token not received"});
    }
    return new Promise<void>((resolve, reject)=>{
        return jwt.verify(token, process.env.Jwt_SECRET,(err, success)=>{
            if(err){
                reject(err.message);
                return res.status(401).json({message:"Your Token has expired"})
            }
            else{
                resolve();
                res.locals.jwtData = success;
                return next();
            }
        })
    })
    
}