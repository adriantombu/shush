# Shush! [![Buy me a tree](https://img.shields.io/badge/Buy%20me%20a%20tree-%F0%9F%8C%B3-lightgreen)](https://offset.earth/adrian)

I created this addon to mute a list of expressions on websites like Twitter, Facebook and Linkedin. But if the curiosity is too intense, just hover the mouse over the content to unblur it !

It started as a way to hide most of the covid-19 related news in French and English, but I quickly made it more flexible to allow the users to manage their own list of expressions and even allow them to quickly import a list of expressions !

![The addon in action](/screenshot.jpg)

## Where to install it

- Chrome : [https://chrome.google.com/webstore/detail/shush/gdmhmlcpadohebhkgafcpldlcggdjlml](https://chrome.google.com/webstore/detail/shush/gdmhmlcpadohebhkgafcpldlcggdjlml)
- Firefox : [https://addons.mozilla.org/addon/shush/](https://addons.mozilla.org/addon/shush/)

## Muted expressions list to import in the addon

- [Coronavirus (FR & EN)](https://gist.githubusercontent.com/adriantombu/3bf0fd85e8c95ef56d6995a500735e23/raw/shush-covid19.txt)

You can even create your own list on [Gist](https://gist.github.com/) by creating a text file with the expressions separated by a comma !

## List of websites where you can hide your expressions

- twitter.com
- facebook.com
- linkedin.com
- lemonde.fr
- liberation.fr
- lesechos.fr
- lci.fr
- lopinion.fr
- lefigaro.fr
- 20minutes.fr
- leparisien.fr
- humanite.fr
- latribune.fr
- francesoir.fr
- lequipe.fr
- eurosport.fr
- rugbyrama.fr
- dhnet.be
- lalibre.be
- nytimes.com

## How to build the extension

### Requirements

- **Operating system:** OSX, Linux, Windows
- **Environment requirements:** [Node 12+](https://nodejs.org/en/)

### Steps

- Clone or download the repository from [Github](https://github.com/adriantombu/shush)
- Install the packages with `yarn install` or `npm install`
- Run `yarn build` or `npm build` to compile the files
- The files inside the `src` folder will be builded to the `addon` folder with Weback (you can find the configuration used in the `webpack.config.js` and `tsconfig.json` files)
- The `addon` folder represents the files that are published to the store through the Continuous Deployment tool

## Credits

The icon was made by [Freepik](https://www.flaticon.com/authors/freepik) from [flaticon.com](https://www.flaticon.com)
