export type TodoType = {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
};

export type HashtagType = {
  text: string,
  type: 'regular' | 'highlight' | 'pointed',
};
