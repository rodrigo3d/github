'use strict';

module.exports = [
{
  name: 'title',
  type: 'input',
  message: 'Titulo:'
},{
  name: 'imageName',
  type: 'input',
  message: 'Imagem: (dentro de "/assets/img/projects/")'
},{
  name: 'link',
  type: 'input',
  message: 'Link: (exemplo "http://rodrigo3d.com")'
},{
  name: 'introduction',
  type: 'input',
  message: 'Introdução:'
},{
  name: 'mainClass',
  type: 'list',
  message: 'Grupo:',
  choices: ['jekyll', 'css', 'js', 'html', 'svg', 'dev', 'misc']
},{
  name: 'tags',
  type: 'input',
  message: 'Tags: (separados por vírgulas)'
}
];
