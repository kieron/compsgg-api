import { Hono } from "hono";
import { comp } from "../controllers";

const comps = new Hono();

// Get All Users
comps.get("/", (c) => comp.getComps(c));

export default comps;
