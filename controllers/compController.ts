import { Context } from "hono";
import { Comp } from "../models";

/**
 * @api {get} /comps Get All Comps
 * @apiGroup Comps
 * @access Public
 */
export const getComps = async (c: Context) => {
  const comps = await Comp.find();

  return c.json({ comps });
};
