Feature: ToDo

  Scenario: Home page works
    Given I am on the homepage
    Then I should see "My todos"
    And I should see "Buy bread"

  Scenario: Create new todo
    Given I am on the homepage
    And there are no ToDo items
    When I fill in "title" with "Buy wine"
    And I press "Add"
    Then I should see "{\"success\":true}"

  Scenario: Home page updates whe adding an item
    Given I am on the homepage
    And I fill in "title" with "Buy wine"
    And I press "Add"
    And I go to the homepage
    Then I should see "My todos"
    And I should see "Buy wine"

