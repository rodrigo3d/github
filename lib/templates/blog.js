'use strict';

const getBlogTemplate = (answers) => {
  return `
  ---
  layout: post
  title: "${answers.title.replace(/ /gm, "") || 'sem título'}"
  date: '${answers.date}'
  comments: ${answers.comments}
  image: '${getImagePath(answers)}'
  description: '${answers.description || 'sem nenhuma descrição'}'
  main-class: '${answers.mainClass || null}'
  color: '${answers.color || null}'
  tags:
  - ${getFormatStrings(answers.tags) || '"nenhuma tag"'}
  categories:
  - ${getFormatStrings(answers.categories) || '"nenhuma categoria"'}
  twitter_text: '${answers.twitter_text || 'sem nenhum texto'}'
  introduction: '${answers.introduction || 'sem nenhuma introdução'}'
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
