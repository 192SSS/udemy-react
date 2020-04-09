export const SET_VALUE = '@post/SET_VALUE';
export const setValue = (key, value) => ({
  type: SET_VALUE,
  key,
  value,
});

export const SET_EDITING_POST = '@post/SET_EDITING_POST';
export const setEditingPost = (post) => ({
  type: SET_EDITING_POST,
  post,
});

export const CLEAR_EDITING_POST = '@post/CLEAR_EDITING_POST';
export const clearEditingPost = () => ({
  type: CLEAR_EDITING_POST,
});
