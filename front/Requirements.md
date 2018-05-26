1. Provide a List Scene for the offers endpoint
    * This should be the initial Scene once the users opens the app
    * We need to display the pagination data (1 of x results)
    * Upon click of an item the users need to be redirected to corresponding details scene
    * Infinite scrolling of data
    * There should be a way to display the filter Scene (Link,Button, etc)



2) Details Scene
    * Show all the available data coming from the /Offer/{offer_id} endpoint
    * Back button should redirect to List Scene
    * A button/link to acquire the tuition which should open up a modal with a success message.


3) Filter Scene
    * Allow selection of query data for the [backend api](../back/README.md)
    * Some filters need allow multiple selections: `Kind, Level and Shift`
    * Once the button is hit the user should be redirected to the List Scene where the data should be filtered accordingly
    * The Filter Scene inputs should keep its state (i.e it should reopen with whatever data was previously selected)
    * A Clear button to clean up data
    * To simplify, there's no need to provide autocomplete capabilities to either courses or universities


**Bear in mind that some of these requirements might require little backend adjustments**
**Despite of this guideline being written in english, all the labels of the application should be written in portuguease**

## Examples

Follows some example screenshots from our current application (querobolsa @ google play) to serve as a guide.

The final layout, by no means, must follow strictly the screenshots, although it's also acceptable to do it as such.

Please, feel free to disregard any extra functionalities which are not stated as required (such as geolocation search, number of results, bottom menu, etc ).

In other words ==> **you don't have to implement everything which is displayed at the screenshots, only the topics which are mentioned as requirements**


### List Example
![](screenshots/list.png)


### Detail Example
![](screenshots/detail.png)

### Filter Example
![](screenshots/filter.png)
