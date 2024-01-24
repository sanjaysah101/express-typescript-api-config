import express, { Request, Response } from 'express';
import { AUTH_ROUTES, GENERAL_ERRORS } from '../../constants';
import { handleValidationErrors } from '../../middlewares';
const authRoutes = express.Router();

const { INTERNAL_SERVER_ERROR } = GENERAL_ERRORS;

authRoutes.post(AUTH_ROUTES.SIGN_UP, handleValidationErrors, async (_: Request, res: Response) => {
  try {
    res.status(201).json({ message: '', data: '' });
  } catch (error) {
    res.status(500).json({ message: INTERNAL_SERVER_ERROR, error });
  }
});

export default authRoutes;
