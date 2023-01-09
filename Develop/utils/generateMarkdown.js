// function to generate markdown for README
function generateMarkdown(data) {
  return `

# ${data.title}

  ${data.description}

  ${data.licenseBadge}

  [A deployed version can be viewed here.](${data.URL})
  
---
## Contents

1. [About](#about)
    1. [User Story](#user%20story)
    2. [Acceptance criteria](#acceptance%20criteria)
    3. [Visuals](#visuals)
2. [Installation](#installation)
3. [License](#license)
4. [Authors and acknowledgment](#authors%20and%20acknowledgment)

---
## About

  ${data.about}

---

## User Story
  

---

## Acceptance Criteria
  
  
---
## Visuals:

  ![]()

---

## Installation:
  ${data.installation}

  To clone the repo:
  
      git clone ${data.clone}
  
---

## License
  License used for this project - ${data.license}
  * For more information on license types, please reference this website
  for additional licensing information - [https: //choosealicense.com/](https://choosealicense.com/).

---

## Authors and Acknowledgments
  ${data.author}

---

## Contact Information:
* GitHub Username: ${data.userName}
* GitHub Email: ${data.userEmail}
  
`;
}

module.exports = generateMarkdown;

