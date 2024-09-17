from fastapi import FastAPI, Request
from pydantic import BaseModel
from typing import List, Dict, Any
import networkx as nx
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to restrict access to specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Pipeline(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
async def parse_pipeline(pipeline: Pipeline):
    nodes = pipeline.nodes
    edges = pipeline.edges

    # Calculate the number of nodes and edges
    num_nodes = len(nodes)
    num_edges = len(edges)

    # Build the graph
    G = nx.DiGraph()
    for edge in edges:
        source = edge['source']
        target = edge['target']
        G.add_edge(source, target)

    # Check if the graph is a DAG
    is_dag = nx.is_directed_acyclic_graph(G)

    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag}
