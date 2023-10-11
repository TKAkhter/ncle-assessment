import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

export const zodValidation = (zSchema: ZodTypeAny, requestSection: "body" | "params" | "query") => {
	return async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
		try {
			const data = zSchema.parse(req[requestSection]);
			console.log("🚀 ~ file: zod-validation.ts:8 ~ return ~ data:", data);
			if (data) {
				req[requestSection] = data;
				next();
				return;
			}
		} catch (error) {
			console.log(error);
			return res.status(400).json(error);
		}
	};
}

export const validateSchema = (schema: ZodTypeAny) => {
	return async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
	  const data = req.body; // Assuming the data is in the request body
  
	  try {
		// Validate the data using the Zod schema
		schema.parse(data);
		next(); // Proceed to the next middleware or route handler
	  } catch (error) {
		// Data validation failed
		res.status(400).json(error);
	  }
	};
  }

export default zodValidation;
