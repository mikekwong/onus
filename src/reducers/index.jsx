import { uniqueId } from '../actions'

const mockTasks = [
  {
    id: uniqueId(),
    title: 'Learn Redux',
    description: 'The store, actions, and reducers, oh my!',
    status: 'In Progress',
  },
  {
    id: uniqueId(),
    title: 'Peace on Earth',
    description: 'No big deal.',
    status: 'In Progress',
  },
]

// set mockTasks as default state
export const tasks = (state = { tasks: mockTasks }, action) => {
  switch (action.type) {
    case 'CREATE_TASK':
      return { tasks: [...state.tasks, action.payload] }
  }
  return state
}
