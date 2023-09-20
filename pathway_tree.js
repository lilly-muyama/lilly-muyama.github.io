{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
      "data": {
      "url": "No anemia.csv",  // Replace with the path to your CSV file
        "format": { "type": "csv" }
    },
    "mark": { "type": "circle" },  // Use different marks for nodes, e.g., "rect" for rectangles
    "encoding": {
      "x": { "field": "x", "type": "quantitative" },
      "y": { "field": "y", "type": "quantitative" },
      "size": { "value": 100 },  // Adjust the size of the nodes as needed
      "tooltip": { "field": "Child" }  // Specify the field containing the tooltip text
    },
    "transform": [
      { "type": "stratify", "key": "Child", "parentKey": "Parent" }  // Define the hierarchy
    ]
  }
  