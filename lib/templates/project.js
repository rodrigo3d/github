'use strict';

const getProjectTemplate = (answers) => {
  return `
  ---
  title: "${answers.title.replace(/ /gm, "") || 'sem título'}"
  date: '${answers.date}'
  image: '${getImagePath(answers)}'
  link: '${answers.link || ''}'
  introduction: '${answers.introduction || '"sem nenhuma introdução"'}'
  main-class: '${answers.mainClass || null}'
  color: '${answers.color || null}'
  tags:
  - ${getFormatStrings(answers.tags) || '"nenhuma tag"'}
  ---
  `.replace(regexSpaceAtBegin(), '');
};

const getImagePath = (answers) => {
  const hasFullPath = /\//.test(answers.imageName);
  return hasFullPath
  ? answers.imageName
  : `/assets/img/projects/${answers.imageName || 'no-image.jpg'}`;
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

module.exports = getProjectTemplate;
