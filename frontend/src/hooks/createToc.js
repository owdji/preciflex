const createToc = (content) => {
    const newTableOfContents = [];
    content.forEach((element) => {
      // Modifications des éléments
      element.id = element.innerText.replace(/\s+/g, '-').replace(/^-/, '').toLowerCase();
  
      // Create an object if the element is a h1
      if (element.tagName === 'H1') {
        newTableOfContents.push({ title: element.innerText.replace(/#+\s+/g, ''), children: [] });
      } 
      // Else if the element is an h2, h3, h4, h5, h6, push it to the last h1 object
      else {
        newTableOfContents[newTableOfContents.length - 1].children.push(element.innerText.replace(/#+\s+/g, ''));
      }
    });
  
    return newTableOfContents;
  };
  
  export default createToc;
  