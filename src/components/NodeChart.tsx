import {useMemo, useState} from "react";
import styled from 'styled-components';
import {Line, LineChart, ReferenceArea, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {Button, SectionTitle} from 'akeneo-design-system';
import {ReportMetric, ReportRoot} from '../model/Report';

const NodeChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

type NodeChartProps = {
  reportRoots: ReportRoot[];
  metric: keyof ReportMetric;
  label: string;
  description: string;
};

type RechartsMouseInfoEvent = {
  activeTooltipIndex: number;
  activeLabel: any;
  activePayload: any[];
  chartX: number;
  chartY: number;
}

const computeData = (reportRoots: ReportRoot[], metric: keyof ReportMetric) => {
  return reportRoots.map(reportRoot => {
    return {
      value: reportRoot.metrics[metric],
      time: new Date(reportRoot.reportName).getTime(),
    };
  });
};

type ZoomState = {
  rangeSelection: {
    start: null | number,
    end: null | number,
  },
  left: string | number,
  right: string | number,
  top: string | number,
}

const NodeChart = ({reportRoots, label, description, metric}: NodeChartProps) => {
  const computedData = useMemo(() => computeData(reportRoots, metric), [reportRoots, metric]);
  const [zoomState, setZoomState] = useState<ZoomState>({
    rangeSelection: {
      start: null,
      end: null
    },
    left: 'dataMin',
    right: 'dataMax',
    top: 'dataMax+1',
  });

  const handleZoomStart = (e: RechartsMouseInfoEvent) => {
    if (null === e) return;

    setZoomState((previousZoomState) => ({...previousZoomState, rangeSelection: {start: e.activeLabel, end: null }}));
  }

  const handleZoomMove = (e: RechartsMouseInfoEvent) => {
    if (null === e || null === zoomState.rangeSelection.start) return;

    setZoomState((previousZoomState) => ({...previousZoomState, rangeSelection: {...previousZoomState.rangeSelection, end: e.activeLabel }}));
  }

  const handleZoom = () => {
    if (
      zoomState.rangeSelection.start === null ||
      zoomState.rangeSelection.end === null ||
      zoomState.rangeSelection.start === zoomState.rangeSelection.end
    ) {
      setZoomState((previousZoomState) => ({...previousZoomState, rangeSelection: {start: null, end: null}}));

      return;
    }

    const left = Math.min(zoomState.rangeSelection.start, zoomState.rangeSelection.end);
    const right = Math.max(zoomState.rangeSelection.start, zoomState.rangeSelection.end);

    const filteredValues = computedData.filter((data) => data.time > left && data.time < right);
    const values = filteredValues.map((data) => data.value);

    setZoomState(() => ({
      rangeSelection: {
        start: null,
        end: null
      },
      left: left,
      right: right,
      top: Math.max(...values) + 1
    }));
  }

  console.log(zoomState.left, zoomState.right);
  const zoomOut = () => {
    setZoomState(() => ({
      rangeSelection: {
        start: null,
        end: null,
      },
      left: 'dataMin',
      right: 'dataMax',
      top: 'dataMax+1',
    }));
  }

  return (
    <NodeChartContainer>
      <SectionTitle>
        <SectionTitle.Title>{label}</SectionTitle.Title>
        <SectionTitle.Spacer />
        <SectionTitle.Information>{description}</SectionTitle.Information>
        <SectionTitle.Separator />
        <Button onClick={zoomOut}>Reset</Button>
      </SectionTitle>
      <ResponsiveContainer width="95%" height={400}>
        <LineChart
          data={computedData}
          onMouseDown={handleZoomStart}
          onMouseMove={handleZoomMove}
          onMouseUp={handleZoom}
        >
          <XAxis
            allowDataOverflow={true}
            domain={[zoomState.left, zoomState.right]}
            dataKey="time"
            name="Time"
            tickFormatter={time => new Date(time).toLocaleDateString('en-US')}
            type='number'
          />
          <YAxis allowDataOverflow={true} dataKey="value" name="Value" domain={[0, zoomState.top]}/>
          <Tooltip isAnimationActive={false} labelFormatter={(time: number) => new Date(time).toLocaleDateString('en-US')}/>
          <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} isAnimationActive={false}/>
          {null !== zoomState.rangeSelection.start && null !== zoomState.rangeSelection.end ? (
            <ReferenceArea
              x1={zoomState.rangeSelection.start}
              x2={zoomState.rangeSelection.end}
              strokeOpacity={1}
            />
          ) : null}
        </LineChart>
      </ResponsiveContainer>
    </NodeChartContainer>
  );
};

export {NodeChart};
