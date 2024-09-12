document.addEventListener("DOMContentLoaded", function () {
    // Fetch the JSON file
    fetch('./data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Access the middle section in the JSON
        const middleSection = data.body.sections.middleSection;
  
        // Populate the HTML with the data from the JSON
        document.getElementById("title").innerText = middleSection.title;
        document.getElementById("content").innerText = middleSection.middleSectionItems.content;
        document.getElementById("value").innerText = `Value: ${middleSection.middleSectionItems.value}`;
        document.getElementById("resultType").innerText = `Result Type: ${middleSection.middleSectionItems.resultType}`;
        document.getElementById("arrowDir").innerText = `Arrow Direction: ${middleSection.middleSectionItems.arrowDir}`;
      })
      .catch(error => {
        console.error("Error fetching the JSON file:", error);
      });
  });