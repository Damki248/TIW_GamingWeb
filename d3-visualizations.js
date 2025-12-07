// Jednostavni podaci: "broj važnih konzola po desetljeću"
const data = [
    { decade: "1970-e", value: 2 },
    { decade: "1980-e", value: 4 },
    { decade: "1990-e", value: 5 },
    { decade: "2000-e", value: 6 },
    { decade: "2010-e", value: 5 }
];

const svg = d3.select("#gamesChart");
const width = 700;
const height = 360;
const margin = { top: 60, right: 20, bottom: 60, left: 50 };

svg.attr("viewBox", `0 0 ${width} ${height}`);

const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

const g = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

const xScale = d3
    .scaleBand()
    .domain(data.map(d => d.decade))
    .range([0, innerWidth])
    .padding(0.2);

const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .nice()
    .range([innerHeight, 0]);

// X os
g.append("g")
    .attr("transform", `translate(0, ${innerHeight})`)
    .call(d3.axisBottom(xScale))
    .selectAll("text")
    .style("fill", "#e5e7eb");

// Y os
g.append("g")
    .call(d3.axisLeft(yScale).ticks(5))
    .selectAll("text")
    .style("fill", "#e5e7eb");

// Stupci
g.selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", d => xScale(d.decade))
    .attr("y", d => yScale(d.value))
    .attr("width", xScale.bandwidth())
    .attr("height", d => innerHeight - yScale(d.value))
    .attr("fill", "#ff6b3d");

// Tekst iznad stupaca
g.selectAll(".label")
    .data(data)
    .enter()
    .append("text")
    .attr("class", "label")
    .attr("x", d => xScale(d.decade) + xScale.bandwidth() / 2)
    .attr("y", d => yScale(d.value) - 5)
    .attr("text-anchor", "middle")
    .attr("fill", "#f5f5f5")
    .attr("font-size", "12px")
    .text(d => d.value);

// Naslov grafa
svg
    .append("text")
    .attr("x", width / 2)
    .attr("y", 30)
    .attr("text-anchor", "middle")
    .attr("fill", "#f5f5f5")
    .attr("font-size", "16px")
    .text("Broj značajnih konzola po desetljeću (primjer)");
