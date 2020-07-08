export const deletePost = id => ({
  type: "DELETE_POST",
  id
});

export const addPost = (post) => {
  const { description, poster, rating, time, title, id } = post;
  return {
    type: 'ADD_POST',
    description: description,
    poster: poster,
    rating: rating,
    time: time,
    title: title,
    id: id
  }
}

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

//actions exported