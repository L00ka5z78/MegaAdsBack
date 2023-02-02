import {NextFunction, Request, Response} from "express";

export class ValidationError extends Error {}

export const handleError = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err);

    res
        .status(err instanceof ValidationError ? 400 : 500)
        .json({
            message: err instanceof ValidationError ? err.message : 'Sorry, try again later',
        })
    //jezeli blad w walidacji to warto wypisac co sie stało a ja nie dac ogolny komunikat
}