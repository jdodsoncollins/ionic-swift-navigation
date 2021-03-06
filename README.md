### Demo for navigation between Ionic 4 view and native (Swift + storyboard) view

This simple project is an iOS app with two views.
* The first view (the initial view) is a nearly-empty Swift `UIViewController`
* The second view is a demo Ionic + Angular + Capacitor project, but with a *Take Picture* and *Nav* button added to the top of the first tab.

The purpose of this demo is to demonstrate nativating back and forth between these two views. The more complex of the two is the navigation *from* the ionic view into the Swift-powered UIView since it involves calling native APIs to initiate a view controller (see the `ios/App/App/MyPlugin.swift` file).

#### Build Instructions
From the root dir, run the following in order:
- `npm install`
- `npm install ionic -g`
- `npm run build`
- `ionic capacitor add ios`
- `ionic capacitor copy ios`
- `ionic capacitor open ios`

At this point Xcode should be open with the project, and the iOS simulator should be able to run the app. In the Swift ViewController you will see a "Go To Ionic" button, and in the Ionic view you'll see a "Nav" button at the top of tab 1 which takes you back.

-----

Disclaimer: This is a single-evening project due to my own curiosity that took about two hours, including time spent researching. I am familiar with Swift and Angular (plus TypeScript/JavaScript) but this was my first usage of Ionic. The code contained includes no tests or strict syntax structuring.