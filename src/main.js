import { Application } from "stimulus";
import { definitionsFromContext } from "stimulus/webpack-helpers";

const application = Application.start();

// Adjust the context path to point to the 'controllers' folder at the same level
const context = require.context("../controllers", true, /\.js$/);

application.load(definitionsFromContext(context));
