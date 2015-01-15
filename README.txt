1. Prerequisite

        npm install -g tessel


2. For require('tessel') on computer; only need to be done once

        npm link tessel
    or
        npm install tessel


3. Deploy program to Tessel; do this after changing device/index.js

        tessel push -s device/index.js


4. Run program on computer

        node rpc-from-computer.js

