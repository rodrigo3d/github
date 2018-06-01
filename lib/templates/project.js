'use strict';

const getProjectTemplate = (answers) => {
  return `
  ---
  title: "${answers.title.replace(/ /gm, "") || 'Unknown'}"
  image: '${getImagePath(answers)}'
  link: '${answers.link || null}'
  introduction: '${answers.introduction || null}'
  main-class: '${answers.mainClass || null}'
  color: '${answers.color || null}'
  tags:
  - ${answers.tags.replace(/,/gm, "\n- ") || 'uncategorized'}
  date: ${answers.date}
  ---
  `.replace(regexSpaceAtBegin(), '');
};

const getImagePath = (answers) => {
  const hasFullPath = /\//.test(answers.imageName);
  return hasFullPath
  ? answers.imageName
  : `/assets/img/projects/${answers.imageName || 'no-image.png'}`;
}

const regexSpaceAtBegin = () => {
  return /^(?:\n|\s{2,4})/gm;
}

module.exports = getProjectTemplate;
