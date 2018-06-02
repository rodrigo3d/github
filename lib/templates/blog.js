'use strict';

const getBlogTemplate = (answers) => {
  return `
  ---
  layout: post
  title: "${answers.title.replace(/ /gm, "") || 'Unknown'}"
  date: '${answers.date}'
  comments: ${answers.comments}
  image: '${getImagePath(answers)}'
  description: '${answers.description || null}'
  main-class: '${answers.mainClass || null}'
  color: '${answers.color || null}'
  tags:
  - ${getFormatStrings(answers.tags) || '"no-tags"'}
  categories:
  - ${getFormatStrings(answers.categories) || '"uncategorized"'}
  twitter_text: '${answers.twitter_text || null}'
  introduction: '${answers.introduction || null}'
  ---
  `.replace(regexSpaceAtBegin(), '');
};

const getImagePath = (answers) => {
  const hasFullPath = /\//.test(answers.imageName);
  return hasFullPath
  ? answers.imageName
  : `/assets/img/blog/${answers.imageName || 'no-image.jpg'}`;
}

const regexSpaceAtBegin = () => {
  return /^(?:\n|\s{2,4})/gm;
}

const getFormatStrings = (param) => {
  if (param) {
    let txt = "";
    for (let i = 0; i < param.split(',').length; i++) {
      txt += '"' + param.split(',')[i] + '"' + ',';
    }
    return txt.substr(0,(txt.length - 1)).replace(/,/gm, "\n- ");
  }
}

module.exports = getBlogTemplate;
