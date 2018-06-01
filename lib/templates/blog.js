'use strict';

const getBlogTemplate = (answers) => {
  return `
  ---
  layout: post
  date: '${answers.date}'
  comments: '${answers.comments}'
  title: "${answers.title.replace(/ /gm, "") || 'Unknown'}"
  image: '${getImagePath(answers)}'
  description: '${answers.description || null}'
  main-class: '${answers.mainClass || null}'
  color: '${answers.color || null}'
  tags:
  - ${answers.tags.replace(/,/gm, "\n- ") || 'uncategorized'}
  categories:
  - ${answers.categories.replace(/,/gm, "\n- ") || 'uncategorized'}
  twitter_text: '${answers.twitter_text || null}'
  introduction: '${answers.introduction || null}'
  ---
  `.replace(regexSpaceAtBegin(), '');
};

const getImagePath = (answers) => {
  const hasFullPath = /\//.test(answers.imageName);
  return hasFullPath
  ? answers.imageName
  : `/assets/img/blog/${answers.imageName || 'no-image.png'}`;
}

const regexSpaceAtBegin = () => {
  return /^(?:\n|\s{2,4})/gm;
}

module.exports = getBlogTemplate;
