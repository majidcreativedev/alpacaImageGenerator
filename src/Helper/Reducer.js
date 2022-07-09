const Reducer = (state, action) => {
  switch (action.type) {
    case "backgrounds":
      return {
        ...state,
        backgrounds: action.payload,
      }
    case "accessories":
      return {
        ...state,
        accessories: action.payload,
      }
    case "leg":
      return {
        ...state,
        leg: action.payload,
      }
    case "hair":
      return {
        ...state,
        hair: action.payload,
      }
    case "eyes":
      return {
        ...state,
        eyes: action.payload,
      }
    case "ears":
      return {
        ...state,
        ears: action.payload,
      }
    case "mouth":
      return {
        ...state,
        mouth: action.payload,
      }
    case "neck":
      return {
        ...state,
        neck: action.payload,
      }
    default:
      return state
  }
}

export default Reducer
