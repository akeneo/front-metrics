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
  const metrics: {[metricCode: string]: {label: string; description: string}} = {
    typescriptLOC: {
      label: 'TypeScript LOC',
      description: '(should go up)',
    },
    javascriptLOC: {
      label: 'JavaScript LOC',
      description: '(should go down)',
    },
    requireInJavascript: {
      label: 'Require in javascript',
      description: '',
    },
    requireInTypescript: {
      label: 'Require in TypeScript',
      description:
        'Using require in a typescript file, shows that a new feature is coupled with a legacy module (should go down)',
    },
    reactClassComponent: {
      label: 'React classes',
      description:
        'This is the old way of doing React components. This is not high priority but those component should disapear eventualy (should go down)',
    },
    bemInTypescript: {
      label: 'BEM in typescript',
      description:
        'BEM is our legacy design system and should not be used anymore. The DSM should be used instead (should go down)',
    },
    reactRender: {
      label: 'React render',
      description: 'This metric show every time we boot a react app (should go down)',
    },
    reactController: {
      description: `It's a way to integrate a React app in a Backbone app (should go down)`,
      label: 'Legacy bridges',
    },
    backboneController: {
      description: 'Every Backbone Controller represent a page in the PIM using Backbone (should go down)',
      label: 'Backbone controllers',
    },
  };

  return (
    <NodeChartsContainer>
      {Object.keys(metrics).map(metric => (
        <NodeChart
          metric={metric as keyof ReportMetric}
          label={metrics[metric].label}
          description={metrics[metric].description}
          reportRoots={reportRoots}
          key={metric}
        />
      ))}
    </NodeChartsContainer>
  );
};

export {NodeCharts};
