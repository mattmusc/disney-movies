import type {ECharts, EChartsOption, SetOptionOpts} from 'echarts';
import {getInstanceByDom, init} from 'echarts';
import type {CSSProperties} from 'react';
import React, {useEffect, useRef} from 'react';
import {useNavigate} from "react-router-dom";
import {MovieNode} from "../../types";

export interface ReactEChartsProps {
  option: EChartsOption;
  style?: CSSProperties;
  settings?: SetOptionOpts;
  loading?: boolean;
}

export function ReactECharts({option, style, settings, loading}: ReactEChartsProps): JSX.Element {
  const navigate = useNavigate()

  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize chart
    let chart: ECharts | undefined;
    if (chartRef.current !== null) {
      chart = init(chartRef.current);
    }

    // Add chart resize listener
    // ResizeObserver is leading to a bit janky UX
    function resizeChart() {
      chart?.resize();
    }

    window.addEventListener('resize', resizeChart);

    chart?.on('dblclick', (params) => {
      if (Array.isArray(params.data)) {
        // id is the latest element, as created by MoviesByBoxOfficeAndYear
        const [,,,id] = params.data as any[];
        navigate(`/m/${id}`);
      } else {
        const data = params.data as MovieNode;
        navigate(`/m/${data.id}`);
      }
    });

    // Return cleanup function
    return () => {
      chart?.off('click');
      chart?.dispose();
      window.removeEventListener('resize', resizeChart);
    };
  }, [navigate]);

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      chart?.setOption(option, settings);
    }
  }, [option, settings]);

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      loading === true ? chart?.showLoading() : chart?.hideLoading();
    }
  }, [loading]);

  return <div ref={chartRef} style={{width: '100%', height: '250px', ...style}}/>;
}
