// =============================================================================
// Deletes Run Cypress tests, generate reports
// =============================================================================

import cypress from "cypress";
import marge from "mochawesome-report-generator";
import {join} from "path";
import { merge } from "mochawesome-merge";
import { existsSync, rmSync, lstatSync } from "fs";

const MA_RAWREPORTFOLDER = "reports";
const MA_REPORTFOLDER = "mochawesome-report";

function mergeReports() {
  console.log("Merging Reports");
  const options = {
    files: [`${MA_RAWREPORTFOLDER}/*.json`],
  };
  merge(options).then((report) => marge.create(report, options));
}

const CYPRESS_FOLDER = "cypress";
const CYPRESS_REPORT_HELPERS = [
  `${join(CYPRESS_FOLDER, 'screenshots')}`,
  `${join(CYPRESS_FOLDER,'videos')}`,
];
const MA_FOLDERS = [MA_RAWREPORTFOLDER, MA_REPORTFOLDER];

for (const folder of CYPRESS_REPORT_HELPERS.concat(MA_FOLDERS)) {
  if (existsSync(folder) && lstatSync(folder).isDirectory()) {
    rmSync(folder, { recursive: true });
    console.log(`Deleted ${folder}`);
  }
}

cypress
  .run({
    reporter: "mochawesome",
    reporterOptions: `reportDir=${MA_RAWREPORTFOLDER},overwrite=false,html=false,json=true`,
    config: {
      env: {},
    },
  })
  .then((results) => {
    mergeReports();
    console.log("Done");
  })
  .catch((err) => {
    console.error(err);
    console.log("Errors happened");
  });
