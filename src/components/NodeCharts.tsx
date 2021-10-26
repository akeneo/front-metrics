import React from 'react';
import {ReportMetric, ReportRoot} from '../model/Report';
import {NodeChart} from './NodeChart';
import styled from 'styled-components';

const NodeChartsContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

type NodeChartsProps = {
  reportRoots: ReportRoot[];
};

const NodeCharts = ({reportRoots}: NodeChartsProps) => {
  const metrics: {[metricCode: string]: string} = {
    typescriptLOC: 'Typescript line of code',
    javascriptLOC: 'Javascript line of code',
    requireInJavascript: 'Require in javascript',
    requireInTypescript: 'Require in typescript',
    reactClassComponent: 'React classes',
    bemInTypescript: 'BEM in typescript',
    reactController: 'Legacy bridges',
    backboneController: 'Backbone controllers',
  };

  return (
    <NodeChartsContainer>
      {Object.keys(metrics).map(metric => (
        <NodeChart
          metric={metric as keyof ReportMetric}
          label={metrics[metric]}
          reportRoots={reportRoots}
          key={metric}
        />
      ))}
    </NodeChartsContainer>
  );
};

export {NodeCharts};
