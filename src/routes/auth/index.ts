import express, { Request, Response } from 'express';
import { handleValidationErrors } from '../../middlewares';
import { sendApiResponse } from '../../utils/sendApiResponse';
import { INTERNAL_SERVER_ERROR, SIGN_UP, STATUS_CODES } from '../../constants';
const authRoutes = express.Router();

authRoutes.post(SIGN_UP, handleValidationErrors, async (_: Request, response: Response) => {
  try {
    sendApiResponse({
      response,
      message: '',
      statusCode: STATUS_CODES.CREATED,
      payload: { data: '' },
    });
  } catch (error) {
    sendApiResponse({
      response,
      message: INTERNAL_SERVER_ERROR,
      statusCode: STATUS_CODES.INTERNAL_SERVER_ERROR,

      errors: error as Error,
    });
  }
});

export default authRoutes;
