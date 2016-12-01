Feature: ToDo

  Scenario: Home page works
    Given I am on the homepage
    Then I should see "My todos"

  Scenario: Create new todo
    Given I am on the homepage
    And there are no ToDo items
    When I fill in "title" with "Buy bread"
    And I press "Add"
    Then I should see "{\"success\":true}"
