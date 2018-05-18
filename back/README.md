# README

This is the api of the appplication.

For the sake fo simplicity it relies on an in-memory sqllite database.

Although it was built in RoR it's outside of the scope of this application to leverage advanced
Ruby knowledge.

It might be needed, however, to fix eventual bugs on the api in order to meet the requirements of the exercise.

Refer to [Requirements](../../Requirements.md)


Note that we might also consider, additionally, any eventual api improvments in the following areas:

* Documentation
* Performance (eg: payload reduction)

In case the candidate is familiar with RoR,
any extra refactorings/tests are also welcome.


# Setup

After the cloning the repository, the following steps are required to bootstrap the backend

* Install ruby (tested on 2.3.5+)
* cmd: `gem install bundle`
* cmd: `bundle install`
* cmd: `rake db:setup`
  * 2 files should be generated development.sqlite3 and test.sqllite3
* to start the server run `rails s`

Any editor/ide is welcome, but a few steps in order to use vscode as a debugger:

* Install the following extensions `Ruby`, `SolarGraph`
* gem install solargraph

Optionally byebug can be used to debug at the rails console


# Models

There are 3 straight-forward models describing an ultra simplified version of QueroBolsa's search engine:

* Offer (belongs_to 1 university and 1 course)
* University (has many courses)
* Course (has many universities)

# API

The following endpoints are available:

* `/api/offer` --> list of offers, where several query parameters can be included:
  * university_id the id of the university to filter
  * course_id the id of the course to filter
  * kind either `Presencial`, `EAD`
  * level `Graduação`, `Pos-Graduação`
  * shift either `Manha`, `Tarde`, `Noite`
  * discount_percentage_min the min discount the user is seeking
  * offered_price_max the max price the user is seeking
* `/api/offer/{offer_id}` --> loads a specific offer for details
* `/api/course/`--> list of all available courses. Accepts name as a query parameter
* `/api/university/`--> list of all available universities. Accepts name as a query parameter
* `/api/university/{university_id}`--> details of a given university
* `/api/university/{university_id}/offer`--> offers of a given university
* `/api/university/{university_id}/course`--> courses of a given university
