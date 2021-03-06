type ReportMetric = {
  typescript: number;
  typescriptLOC: number;
  javascript: number;
  javascriptLOC: number;
  requireInJavascript: number;
  requireInTypescript: number;
  defineInJavascript: number;
  reactClassComponent: number;
  bemInTypescript: number;
  reactRender: number;
  reactController: number;
  backboneController: number;
};

type ReportRoot = Report & {
  reportName: string;
};

type Report = {
  directoryPath: string;
  path: string;
  name: string;
  metrics: ReportMetric;
} & (
  | {
      type: 'directory';
      children: {
        [key: string]: Report;
      };
    }
  | {
      type: 'file';
    }
);

const getReportFromFolder = (report: Report, folders: string[]): Report => {
  if (0 === folders.length) {
    return report;
  }

  const [currentFolder, ...otherFolders] = folders;
  if ('file' === report.type || undefined === currentFolder) {
    return report;
  }

  return getReportFromFolder(report.children[currentFolder], otherFolders);
};

export {getReportFromFolder};
export type {Report, ReportMetric, ReportRoot};
