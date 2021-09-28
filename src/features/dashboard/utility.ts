import {Movie} from 'features/types';

type Node = {
  name: string;
  value: number;
  children: Node[];
};

export const createTree = (nodes: Node[], m: Movie, idx: number, arr: Movie[]) => {
  const boxOffice = m.boxOffice || 0;

  if (nodes.length === 0) {
    return [
      {
        name: '> 100M',
        value: boxOffice,
        children: [{
          name: `${m.title} (${m.releaseDate})`,
          value: boxOffice,
          children: [],
        }],
      },
    ];
  }

  if (boxOffice > 100e6) {

    const children = nodes[nodes.length - 1].children;
    children.push({
      name: `${m.title} (${m.releaseDate})`,
      value: boxOffice,
      children: [],
    });
    return nodes;

  } else if (boxOffice > 35e6 && nodes[nodes.length - 1].value > 100e6) {
    nodes[nodes.length - 1].name = `${nodes[nodes.length - 1].name} (${nodes[nodes.length - 1].children.length})`;

    return [
      ...nodes,
      {
        name: '> 35M',
        value: boxOffice,
        children: [{
          name: `${m.title} (${m.releaseDate})`,
          value: boxOffice,
          children: [],
        }],
      },
    ];

  } else if (boxOffice > 35e6) {

    const children = nodes[nodes.length - 1].children;
    children.push({
      name: `${m.title} (${m.releaseDate})`,
      value: boxOffice,
      children: [],
    });
    return nodes;

  } else if (boxOffice < 35e6 && nodes[nodes.length - 1].value > 35e6) {
    nodes[nodes.length - 1].name = `${nodes[nodes.length - 1].name} (${nodes[nodes.length - 1].children.length})`;

    return [
      ...nodes,
      {
        name: '< 35M',
        value: boxOffice,
        children: [{
          name: `${m.title} (${m.releaseDate})`,
          value: boxOffice,
          children: [],
        }],
      },
    ];

  } else if (boxOffice < 35e6) {
    if (idx === arr.length - 1) {
      nodes[nodes.length - 1].name = `${nodes[nodes.length - 1].name} (${nodes[nodes.length - 1].children.length})`;
    }

    const children = nodes[nodes.length - 1].children;
    children.push({
      name: `${m.title} (${m.releaseDate})`,
      value: boxOffice,
      children: [],
    });
    return nodes;

  }

  return nodes;
};
