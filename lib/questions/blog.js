'use strict';

module.exports = [
{
  name: 'title',
  type: 'input',
  message: 'Titulo:'
},{
  name: 'comments',
  type: 'confirm',
  message: 'Ativar Comentários: (é só apertar enter para SIM)?',
  default: true
},{
  name: 'imageName',
  type: 'input',
  message: 'Imagem: (dentro de "/assets/img/blog/")'
},{
  name: 'description',
  type: 'input',
  message: 'Descrição:'
},{
  name: 'introduction',
  type: 'input',
  message: 'Introdução:'
},{
  name: 'twitter_text',
  type:'input',
  message: 'Texto para o twitter'
},{
  name: 'mainClass',
  type: 'list',
  message: 'Grupo:',
  choices: ['jekyll', 'css', 'js', 'html', 'svg', 'dev', 'misc']
},{
  name: 'tags',
  type: 'input',
  message: 'Tags: (separados por vírgulas)'

},{
  name: 'categories',
  type: 'input',
  message: 'Categorias: (separados por vírgulas)'
}
];
