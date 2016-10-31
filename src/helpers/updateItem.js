let updateItem = (list = [], item) => list.map(c => c.id !== item.id ? c : item)

export default updateItem
