const getTags = (form) => {
    const selectedTags = []
    const tags = ["nature", "mountains", "hiking", "beach", "sun"]

    tags.forEach(tag => {
      if (form[tag] === true) {
        selectedTags.push(tag)
      }
    })
    return selectedTags
  }
export { getTags }