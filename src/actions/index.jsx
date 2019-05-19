// Utility function to generate numeric ids for tasks

let _id = 1
export const uniqueId = () => {
  return _id++
}

export const createTask = ({ title, description }) => {
  return {
    type: 'CREATE_TASK',
    payload: {
      id: uniqueId(),
      title,
      description,
      status: 'Unstarted',
    },
  }
}
