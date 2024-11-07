Ep-2 (Notes)

npm: It manages packages and works as a Node package manager. Standard packages are hosted in npm libraries and utilities.

package.json configuration for NPM: This JSON file is used to configure NPM and contains information about the packages installed in a project.

npm init: This command is used to create a package.json file.

All dependencies will be listed in this JSON file.

Dev and Normal dependencies:

bundler: A tool that bundles packages to be pushed to production. Parcel is a popular bundler.

npm install -D parcel (Dev dependencies -D): This command installs parcel as a dev dependency in the package.json file.

After installing parcel, we will get a package-lock.json file. This file keeps track of all the versions of dependencies used in the project.

Transitive dependencies: These are dependencies that depend on other dependencies. For example, if a project depends on a package that depends on another package, those two packages are also considered transitive dependencies.

Node modules, which are collections of dependencies, can be stored in GitHub. However, to avoid pushing the entire Node module to GitHub, we can use the gitignore file to exclude certain files. Specifically, we should include the package/package-lock file in the gitignore file.

To install Node modules, we can use the npm install command, specifying the dependencies from the package/package-lock.json file.

When starting a new application, we can use Parcel to create a server to host the code. To do this, we can run the command npx parcel index.html, which will use the starter code as the index.html file.

Parcel also provides features such as Hot Module Replacement (HMR), which automatically refreshes the browser when changes are made to the code. Additionally, Parcel caches the build time, which reduces the time required to build the application as changes are made.

Ther are several features of parcel like code splitting, cross browser differential bundling, Parcel also performs image optimization for web applications. The core job of Parcel is to bundle the files, and it also compresses files by removing all white spaces from the web application. Parcel uses a file-watching algorithm to monitor changes to the files and ensure that the application is always up-to-date.

There are several ways to include React in an application. One way is to use CDN links, which are not the preferred method. The preferred method is to install React as a package using npm. For example, we can run the command npm install React or npm i React to install React.

We can also use the type module in the script section when we have import statements in the JavaScript code.
