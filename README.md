# Shush! [![Buy me a tree](https://img.shields.io/badge/Buy%20me%20a%20tree-%F0%9F%8C%B3-lightgreen)](https://offset.earth/adrian)

I created this addon to mute a list of words on Twitter and Facebook. This is currently only covid-19 related in French and English but I intend to make it way more flexible in the future.

https://addons.mozilla.org/en-GB/firefox/addon/shush/

## Where to install it

- Chrome : [https://chrome.google.com/webstore/detail/shush/gdmhmlcpadohebhkgafcpldlcggdjlml](https://chrome.google.com/webstore/detail/shush/gdmhmlcpadohebhkgafcpldlcggdjlml)
- Firefox : [https://addons.mozilla.org/addon/shush/](https://addons.mozilla.org/addon/shush/)

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
