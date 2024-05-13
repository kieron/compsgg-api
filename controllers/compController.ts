import { Context } from "hono";
import { Comp } from "../models";

/**
 * @api {get} /comps Get All Comps
 * @apiGroup Comps
 * @access Public
 */
export const getComps = async (c: Context) => {
  const limit = parseInt(c.req.query("limit") || "50");
  const page = parseInt(c.req.query("page") || "1");
  const comps = await Comp.find()
    .sort("-_id")
    .skip((page - 1) * limit)
    .limit(limit);

  return c.json({ comps });
};
