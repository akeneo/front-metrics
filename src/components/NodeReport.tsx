import {
  Badge,
  Breadcrumb,
  Dropdown,
  FileIcon,
  FolderIcon,
  IconButton,
  SwitcherButton,
  Table,
  useBooleanState,
  ViewIcon,
} from 'akeneo-design-system';
import {Link, useRouteMatch} from 'react-router-dom';
import styled from 'styled-components';
import {getReportFromFolder, Report, ReportRoot} from '../model/Report';
import {NodeSummary} from './NodeSummary';
import {ColoredCell, getLevelForRatio} from './ColorCell';
import {useSortedChildren} from '../hooks/useSortedChildren';
import {NodeCharts} from './NodeCharts';
import {useMemo} from 'react';

const Header = styled.div`
  display: flex;
`;

const SpacedCell = styled(Table.Cell)`
  & > div {
    display: flex;
    justify-content: space-between;
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

type NodeReportProps = {
  report: Report;
  reportName: string | null;
  reports: ReportRoot[];
  onReportChange: (newReport: string) => void;
};

const NodeReport = ({report, reportName, reports, onReportChange}: NodeReportProps) => {
  const {url} = useRouteMatch();
  const path = url.substring(1);
  const folders = !path ? [] : path.split('/');
  const currentNode = getReportFromFolder(report, folders);
  const [sortedChildren, computeDirection, handleDirectionChange] = useSortedChildren(
    'file' === currentNode.type ? [] : Object.values(currentNode.children)
  );
  const [isDropdownOpen, openDropdown, closeDropdown] = useBooleanState();

  const sortedReportList = useMemo(() => {
    const sortedReports = [...reports].sort((first: ReportRoot, second: ReportRoot) =>
      second.reportName.localeCompare(first.reportName)
    );

    return sortedReports;
  }, [reports]);

  if ('file' === currentNode.type) {
    return null;
  }

  return (
    <>
      <Header>
        <Breadcrumb>
          <Breadcrumb.Step href="#/">Root</Breadcrumb.Step>
          {folders.map((name: string) => (
            <Breadcrumb.Step key={name} href={`#${url.substring(0, url.indexOf(name))}${name}`}>
              {name}
            </Breadcrumb.Step>
          ))}
        </Breadcrumb>
        <Spacer />
        <Dropdown>
          <SwitcherButton label="Report" onClick={openDropdown}>
            {reportName}
          </SwitcherButton>
          {isDropdownOpen && (
            <Dropdown.Overlay verticalPosition="down" onClose={closeDropdown}>
              <Dropdown.Header>
                <Dropdown.Title>Reports</Dropdown.Title>
              </Dropdown.Header>
              <Dropdown.ItemCollection>
                {sortedReportList.map(report => (
                  <Dropdown.Item
                    key={report.reportName}
                    onClick={() => {
                      onReportChange(report.reportName);
                      closeDropdown();
                    }}
                  >
                    {report.reportName}
                  </Dropdown.Item>
                ))}
              </Dropdown.ItemCollection>
            </Dropdown.Overlay>
          )}
        </Dropdown>
      </Header>
      <NodeSummary report={currentNode} />
      <Table>
        <Table.Header sticky={0}>
          <Table.HeaderCell
            isSortable={true}
            onDirectionChange={handleDirectionChange('name')}
            sortDirection={computeDirection('name')}
          >
            Name
          </Table.HeaderCell>
          <Table.HeaderCell>Typescript ratio (File)</Table.HeaderCell>
          <Table.HeaderCell>Typescript ratio (LOC)</Table.HeaderCell>
          <Table.HeaderCell
            isSortable={true}
            onDirectionChange={handleDirectionChange('requireInTypescript')}
            sortDirection={computeDirection('requireInTypescript')}
          >
            Require in typescript
          </Table.HeaderCell>
          <Table.HeaderCell
            isSortable={true}
            onDirectionChange={handleDirectionChange('defineInJavascript')}
            sortDirection={computeDirection('defineInJavascript')}
          >
            Number of legacy files
          </Table.HeaderCell>
          <Table.HeaderCell
            isSortable={true}
            onDirectionChange={handleDirectionChange('reactClassComponent')}
            sortDirection={computeDirection('reactClassComponent')}
          >
            React classes
          </Table.HeaderCell>
          <Table.HeaderCell
            isSortable={true}
            onDirectionChange={handleDirectionChange('bemInTypescript')}
            sortDirection={computeDirection('bemInTypescript')}
          >
            BEM in typescript
          </Table.HeaderCell>
          <Table.HeaderCell
            isSortable={true}
            onDirectionChange={handleDirectionChange('reactRender')}
            sortDirection={computeDirection('reactRender')}
          >
            React.render
          </Table.HeaderCell>
          <Table.HeaderCell
            isSortable={true}
            onDirectionChange={handleDirectionChange('reactController')}
            sortDirection={computeDirection('reactController')}
          >
            Legacy bridges
          </Table.HeaderCell>
          <Table.HeaderCell
            isSortable={true}
            onDirectionChange={handleDirectionChange('backboneController')}
            sortDirection={computeDirection('backboneController')}
          >
            Backbone controllers
          </Table.HeaderCell>
        </Table.Header>
        <Table.Body>
          {sortedChildren.map(child => {
            const childUrl = '/' === url ? `/${child.name}` : `${url}/${child.name}`;
            const percentFormatter = new Intl.NumberFormat('en-US', {
              style: 'percent',
              minimumFractionDigits: 2,
            });

            return (
              <Table.Row key={child.name}>
                <SpacedCell>
                  {'file' === child.type ? <FileIcon size={20} /> : <FolderIcon size={20} />}&nbsp;&nbsp;
                  {'file' === child.type ? child.name : <Link to={childUrl}>{child.name}</Link>}
                  <a
                    href={child.path
                      .replace('/enterprise/', 'https://github.com/akeneo/pim-enterprise-dev/blob/master/')
                      .replace('/community/', 'https://github.com/akeneo/pim-community-dev/blob/master/')}
                  >
                    <IconButton
                      size="small"
                      ghost="borderless"
                      level="tertiary"
                      icon={<ViewIcon />}
                      title="Open in github"
                    />
                  </a>
                  <Spacer />
                  {'directory' === child.type && (
                    <Badge>
                      {child.metrics.javascriptLOC + child.metrics.typescriptLOC} |{' '}
                      {child.metrics.javascript + child.metrics.typescript}
                    </Badge>
                  )}
                </SpacedCell>
                <ColoredCell
                  color={getLevelForRatio(
                    child.metrics.typescript / (child.metrics.javascript + child.metrics.typescript)
                  )}
                  title={`${child.metrics.typescript} / ${child.metrics.javascript + child.metrics.typescript}`}
                >
                  {percentFormatter.format(
                    child.metrics.typescript / (child.metrics.javascript + child.metrics.typescript)
                  )}{' '}
                  ({child.metrics.javascript} javascript files)
                </ColoredCell>
                <ColoredCell
                  color={getLevelForRatio(
                    child.metrics.typescriptLOC / (child.metrics.javascriptLOC + child.metrics.typescriptLOC)
                  )}
                  title={`${child.metrics.typescriptLOC} / ${
                    child.metrics.javascriptLOC + child.metrics.typescriptLOC
                  }`}
                >
                  {percentFormatter.format(
                    child.metrics.typescriptLOC / (child.metrics.javascriptLOC + child.metrics.typescriptLOC)
                  )}{' '}
                  ({child.metrics.javascriptLOC} javascript LOC)
                </ColoredCell>
                <ColoredCell color={[0 < child.metrics.requireInTypescript ? 'danger' : 'primary', 40]}>
                  {child.metrics.requireInTypescript}
                </ColoredCell>
                <Table.Cell>{child.metrics.defineInJavascript}</Table.Cell>
                <ColoredCell color={[0 < child.metrics.reactClassComponent ? 'danger' : 'primary', 40]}>
                  {child.metrics.reactClassComponent}
                </ColoredCell>
                <ColoredCell color={[0 < child.metrics.bemInTypescript ? 'danger' : 'primary', 40]}>
                  {child.metrics.bemInTypescript}
                </ColoredCell>
                <ColoredCell color={[0 < (child.metrics.reactRender ?? 0) ? 'danger' : 'primary', 40]}>
                  {child.metrics.reactRender ?? 'N/A'}
                </ColoredCell>
                <Table.Cell>{child.metrics.reactController}</Table.Cell>
                <Table.Cell>{child.metrics.backboneController}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      {folders.length === 0 && <NodeCharts reportRoots={reports} />}
    </>
  );
};

export {NodeReport};
