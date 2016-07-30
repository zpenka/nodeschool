# nodeschool

## How to install nodeschool packages non-globally but still have them work as expected

1. `npm install <nodeschool_package_name> --save`
2. `ln -s /path/to/project/node_modules/.bin/<nodeschool_package_name> ~/bin/`
