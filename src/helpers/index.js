import { collatedTasks } from '../constants';

function collatedTasksExist(selectedProject) {
  return collatedTasks.find(task => task.key === selectedProject);
}

export { collatedTasksExist };
