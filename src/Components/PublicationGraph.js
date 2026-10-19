import React from "react";

const topologies = {
    sketch: { points: [[32,97],[48,42],[92,25],[132,58],[119,108],[72,123]], edges: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[1,5],[2,4],[1,3]] },
    learning: { points: [[25,43],[25,105],[78,23],[78,75],[78,127],[135,43],[135,105]], edges: [[0,2],[0,3],[1,3],[1,4],[2,5],[3,5],[3,6],[4,6]] },
    survey: { points: [[80,75],[22,25],[22,75],[22,125],[138,25],[138,75],[138,125]], edges: [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,2],[2,3],[4,5],[5,6]] },
    teams: { points: [[23,50],[23,100],[61,75],[99,75],[137,50],[137,100]], edges: [[0,1],[0,2],[1,2],[2,3],[3,4],[3,5],[4,5]] },
    formation: { points: [[28,27],[80,27],[132,27],[28,123],[80,123],[132,123]], edges: [[0,1],[1,2],[2,5],[5,4],[4,3],[3,0],[0,4],[1,5],[1,4]] },
};

export default function PublicationGraph({ variant }) {
    const { points, edges } = topologies[variant] || topologies.teams;
    return (
        <svg viewBox="0 0 160 150" className="publication-graph" aria-hidden="true" focusable="false">
            {edges.map(([a, b], i) => <path key={i} d={`M${points[a].join(",")}L${points[b].join(",")}`} className={i === 3 ? "paper-graph-flow" : ""} />)}
            {points.map(([x, y], i) => <g key={i} className={i === 3 ? "paper-graph-highlight" : ""}><circle cx={x} cy={y} r="10" className="paper-graph-halo" /><circle cx={x} cy={y} r="4" /></g>)}
        </svg>
    );
}
