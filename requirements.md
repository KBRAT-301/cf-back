# Software Requirements

## Vision

<!-- Minimum Length: 3-5 sentences -->

### What is the vision of this product?

- Our application will enable a user to input data based on their habits and lifestyle in regard to transportation, household energy use, and food consumption. The input will then calculate the user's carbon footprint and display results in a chart.
- The landing page will present images, information, and statistics on why reducing your carbon footprint is important for a healthy planet and communities.
- Resources will include ways you take action and contribute.

### What pain point does this project solve?

- This application would be helping and educating users to realize the impact they have on the earth every day. Education alone will help spread the word and make for more thought out decisions among the community.

### Why should we care about your product?

- Our product will aim to educate individuals on their daily use and consumption, leading to increase self awareness and implement more mindful habits for the health of the community.

## Scope (In/Out)

- IN - What will your product do
  1. Our product will enable users to see environmental data displayed aesthetically and have the ability to enter their own data to see personal contributions.
  2. Our product will display information, statistics, and images to educate why a user's carbon footprint matters.
  3. Our product will allow users to log in and create a profile so they can access their specific data for future use.
  4. Our product will allow users to see how large of a footprint they have with visual chart results
  5. Our product will provide ways users can reduce their footprint, and ways they can contribute by having the ability to find projects that they can donate to or support.

- OUT - What will your product not do.
  1. Our product will not be developed as an iOS or Android application.
  2. Our product will not compare previous footprint calculations to current calculations or updates.
  3. Our product will not stop or slow climate change on its own.

## Minimum Viable Product vs

### What will your MVP functionality be?

- Our Minimum Viable Product will be to have a working app that can calculate at least an average yearly footprint for a user based on transportation data input.
- Our application will utilize a third party API as well as an Auth0 login.
- Our application will provide external resources to take action or donate.

<!-- What are your stretch goals? -->

## Stretch

### What stretch goals are you going to aim for?

1. Calculate data based on home energy use and food consumption.
2. Carbon footprint calculator will utilize sliding bars for data input.
3. Landing page will have scrolling animations.

## Functional Requirements

List the functionality of your product.

1. An admin can create and delete user accounts
2. A user can view a rendered chart of data based on their input to reduce user error.
3. A user can log in, access, and update their footprint data.

### Data Flow

Describe the flow of data in your application. Write out what happens from the time the user begins using the app to the time the user is done with the app. Think about the “Happy Path” of the application. Describe through visuals and text what requests are made, and what data is processed, in addition to any other details about how the user moves through the site.

1. The landing page will present the user with images, information, and statistics.
2. The user can supply input to the calculator form to render data describing their carbon footprint.
3. Input values will be sent to the server from the form, which send a request  to the API.
4. The API then responds to the server with requested information, then passing the information back to the client.
5. The user can log in using Auth0 to save their data to their profile for future reference and updating.
6. A resources page will provide the user with information on how to take action and where to donate.
7. The user will be able to learn about the team behind the application.

## Non-Functional Requirements (301 & 401 only)

Non-functional requirements are requirements that are not directly related to the functionality of the application but still important to the app.

  1. Security - Auth0 will ensure that data is unique to the user.
  2. Usability - The application and third party API will make for an easy way to calculate carbon footprint.
  3. Data can later be accessed through the use of MongoDB.

<!-- Pick 2 non-functional requirements and describe their functionality in your application.

If you are stuck on what non-functional requirements are, do a quick online search and do some research. Write a minimum of 3-5 sentences to describe how the non-functional requirements fits into your app.

You MUST describe what the non-functional requirement is and how it will be implemented. Simply saying “Our project will be testable for testibility” is NOT acceptable. Tell us how, why, and what. -->
