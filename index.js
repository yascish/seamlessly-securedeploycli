function canFinish(numCourses, prerequisites) {
  const graph = new Map();
  const visited = new Array(numCourses).fill(0);
  for (const [course, prerequisite] of prerequisites) {
    if (!graph.has(course)) graph.set(course, []);
    graph.get(course).push(prerequisite);
  }
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }
  return true;
  function dfs(course) {
    if (visited[course] === 1) return false;
    if (visited[course] === -1) return true;
    visited[course] = 1;
    if (graph.has(course)) {
      for (const prerequisite of graph.get(course)) {
        if (!dfs(prerequisite)) return false;
      }
    }
    visited[course] = -1;
    return true;
  }
}
