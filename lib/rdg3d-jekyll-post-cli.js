#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const slug = require('slug');
const moment = require('moment');

const getQuestionsProject = require('./questions/project');
const getProjectTemplate = require('./templates/project');

const getQuestionsBlog = require('./questions/blog');
const getBlogTemplate = require('./templates/blog');

const getSlugifiedTitle = (answers) => {
  const date = moment(answers.date).format('YYYY-MM-DD');
  const hasName = answers.title ? answers.title : 'sem título';
  return slug(`${date} ${hasName}`, '-');
};

const getColor = (param) => {
 const themes = {
  'post-jekyll': '#B31917',
  'post-css': '#2DA0C3',
  'post-js': '#D6BA32',
  'post-html': '#EB7728',
  'post-svg': '#7D669E',
  'post-dev': '#637a91',
  'post-misc': '#7AAB13'
}
return themes[param];
};

const ContentBlog = () => {
  console.log('\n Você escolheu o post de blog.\n Agora responda as perguntas abaixo:\n');
    // console.log(JSON.stringify(answers, null, '  '));
    inquirer.prompt(getQuestionsBlog, answers => {
      // const date = moment(answers.date).format('YYYY-MM-DD');
      // const hasName = answers.title ? answers.title : 'sem título';
      answers.date = moment().format('YYYY-MM-DD HH:mm:ss');
      answers.filename = getSlugifiedTitle(answers);
      // answers.filename = slug(`${date} ${'project'} ${hasName}`, '-');
      answers.color = getColor('post-' + answers.mainClass);
      const filePath = path.resolve('.', '_posts', `${answers.filename}.md`);
      fs.writeFile(filePath, getBlogTemplate(answers), (err) => {
        if(err) throw err;
      });
    });
  }

  const ContentProject = () => {
    console.log('\n Você escolheu o post de projeto.\n Agora responda as perguntas abaixo:\n');
    // console.log(JSON.stringify(answers, null, '  '));
    inquirer.prompt(getQuestionsProject, answers => {
      // const date = moment(answers.date).format('YYYY-MM-DD');
      // const hasName = answers.title ? answers.title : 'sem título';
      answers.date = moment().format('YYYY-MM-DD HH:mm:ss');
      answers.filename = getSlugifiedTitle(answers);
      // answers.filename = slug(`${date} ${'project'} ${hasName}`, '-');
      answers.color = getColor('post-' + answers.mainClass);
      const filePath = path.resolve('.', '_projects', `${answers.filename}.md`);
      fs.writeFile(filePath, getProjectTemplate(answers), (err) => {
        if(err) throw err;
      });
    });
  }

  inquirer.prompt([
  {
    name: 'theme',
    type: 'list',
    message: "Escolha abaixo o tipo de Post?",
    choices: ['Blog', 'Projeto']
  }
  ], answers => {
    switch(answers.theme) {
      case 'Blog':
      ContentBlog();
      break;
      case 'Projeto':
      ContentProject();
      break;
      default:
      exit();
    }
  });
