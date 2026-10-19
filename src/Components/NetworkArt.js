import React from "react";

// Decorative topologies share the same canvas, line weight, and node styling.
const graphs = {
    mesh: {
        points: [[25,100],[95,40],[165,100],[95,170],[235,40],[305,100],[235,170],[375,40],[375,170],[445,100]],
        edges: [[0,1],[0,3],[1,2],[2,3],[1,4],[2,4],[2,6],[3,6],[4,5],[5,6],[4,7],[5,7],[5,8],[6,8],[7,9],[8,9]],
    },
    research: {
        points: [[40,105],[170,55],[170,155],[300,25],[300,85],[300,135],[300,185],[435,25],[435,185]],
        edges: [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[6,8]],
    },
    publications: {
        points: [[45,105],[120,35],[120,175],[235,105],[350,35],[350,175],[425,105]],
        edges: [[0,1],[0,2],[1,2],[1,3],[2,3],[3,4],[3,5],[4,5],[4,6],[5,6]],
    },
    projects: {
        points: [[30,105],[155,45],[155,165],[310,45],[310,165],[440,105]],
        edges: [[0,1],[0,2],[1,3],[2,4],[1,4],[3,5],[4,5]],
    },
    news: {
        points: [[30,105],[130,105],[235,105],[340,105],[130,35],[235,175],[340,35],[440,105]],
        edges: [[0,1],[1,2],[2,3],[3,7],[1,4],[2,5],[3,6]],
    },
    vitae: {
        points: [[30,175],[125,140],[220,105],[315,70],[125,70],[220,175],[315,140],[440,25]],
        edges: [[0,1],[1,2],[2,3],[3,7],[1,4],[2,5],[3,6]],
    },
    contact: {
        points: [[235,105],[45,105],[110,30],[110,180],[360,30],[360,180],[425,105]],
        edges: [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6]],
    },
};

const compactGraph = {
    points: [[15,40],[65,15],[65,65],[115,40],[165,40]],
    edges: [[0,1],[0,2],[1,2],[1,3],[2,3],[3,4]],
};

export default function NetworkArt({ className = "", compact = false, variant = "mesh" }) {
    const { points, edges } = compact ? compactGraph : (graphs[variant] || graphs.mesh);
    return <svg className={`network-art ${className}`} viewBox={compact ? "0 0 180 80" : "0 0 470 210"} fill="none" aria-hidden="true" focusable="false">
        {edges.map(([a,b],i) => <path key={i} d={`M${points[a].join(",")} L${points[b].join(",")}`} stroke="currentColor" strokeWidth="1" />)}
        {points.map(([x,y],i) => <g key={i} className={`network-node${i === points.length - 1 ? " network-node-accent" : ""}`}><circle cx={x} cy={y} r="11" fill="currentColor" opacity=".12"/><circle cx={x} cy={y} r="3.5" fill="currentColor" /></g>)}
    </svg>;
}
