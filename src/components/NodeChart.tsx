import React from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import {ReportMetric, ReportRoot} from "../model/Report";
import {SectionTitle} from "akeneo-design-system";
import styled from "styled-components";

const NodeChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

type NodeChartProps = {
  reportRoots: ReportRoot[];
  metric: keyof ReportMetric;
  label: string;
};

const computeData = (reportRoots: ReportRoot[], metric: keyof ReportMetric) => {
  return reportRoots.map((reportRoot) => {
    return {
      value: reportRoot.metrics[metric],
      time: reportRoot.reportName,
    };
  });
}

const NodeChart = ({reportRoots, label, metric}: NodeChartProps) => {
  const computedData = computeData(reportRoots, metric);

  return (
    <NodeChartContainer>
      <SectionTitle>
        <SectionTitle.Title>{label}</SectionTitle.Title>
      </SectionTitle>
      <ResponsiveContainer width='95%' height={200} >
        <LineChart data={computedData}>
          <XAxis
            dataKey='time'
            name='Time'
            tickFormatter={(time) => new Date(time).toLocaleDateString('en-US')}
            type='category'
          />
          <YAxis dataKey='value' name='Value' />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </NodeChartContainer>
  )
};

export {NodeChart};

