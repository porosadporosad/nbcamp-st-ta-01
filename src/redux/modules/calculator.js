const PLUS_NUM = "PLUS_NUM";
const MINUS_NUM = "MINUS_NUM";

export const plusNum = (payload) => {
  return {
    type: PLUS_NUM,
    payload,
  };
};

export const minusNum = (payload) => {
  return {
    type: MINUS_NUM,
    payload,
  };
};

// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서
const calculator = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_NUM:
      return {
        ...state,
        number: state.number + action.payload,
      };
    case MINUS_NUM:
      return {
        ...state,
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default calculator;
