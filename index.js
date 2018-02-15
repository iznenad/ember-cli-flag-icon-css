/* eslint-env node */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
    name: 'ember-cli-flag-icon-css',
    treeForPublic(publicTree) {

        let moduleFolder = path.dirname(require.resolve('flag-icon-css/index.html'));

        var flagsFunnel = new Funnel(
            moduleFolder, {
                srcDir: 'flags',
                destDir: path.join('assets', 'flags')
            }
        );
        var cssFunnel = new Funnel(
            moduleFolder, {
                srcDir: 'css',
                destDir: path.join('assets', 'flags-css')
            }
        );


        return new MergeTrees([publicTree, flagsFunnel, cssFunnel].filter(Boolean));
    }
};