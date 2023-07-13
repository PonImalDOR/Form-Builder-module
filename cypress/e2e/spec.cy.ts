
describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Angular Form Builder')
    cy.contains('Want create form easily? Try out this form builder')
    cy.contains('EXPLORE')
  })
  it('click to Explore button, and redirect to login page', () => {
    const button = cy.contains('EXPLORE')
    button.click()
    cy.contains('Login')
  })
  it('render login page, and log in, and check if guard dont redirect to login in next time', () => {
    // login
    const username = 'username'
    const password = 'password'
    cy.get('#username').type(username)
    cy.get('#password').type(password)

    // now we redirect to /create-form
    cy.contains('Submit').click()
    // check if page loaded
    cy.contains('Customize field')
    cy.contains('Select Items')

    // click to header and redirect to /
    cy.contains('Angular Form Builder').click()

    // click explore and redirect to /create-form
    cy.contains('EXPLORE').click()

    // check if page loaded
    cy.contains('Customize field')
  })
  it('drag and drop input field', () => {
    cy.get('#input')
      .trigger("mousedown", {button: 0})
    cy.wait(500);
    cy.get('#form-creator')
      .trigger('mousemove')
      .trigger('mouseleave')
    cy.contains('Select Items').click();
  })
  it('add input to form', () => {
    // enter form value and submit
    cy.get('#label').type('Username')
    cy.get('#placeholder').type('Enter username')
    cy.get('#required').click()
    cy.get('#width').type('300')
    cy.get('#height').type('40')
    cy.get('#fontSize').type('20')
    cy.get('#fontWeight').type('500')
    cy.get('#borderStyle').click().get('mat-option').contains('solid').click()
    cy.get('#color').type('#000')
    cy.contains('SUBMIT').click()
  })
  it('input value to dynamically rendered field', () => {

    // get field by name that we input in label field
    cy.contains('Username').next().click().type('romaniv1437')

    // click to send button
    cy.contains('SEND').click()

    // after send we get alert, so get data from alert and show it in console
    cy.on('window:alert', msg => {
      console.log(msg)
    });
  })
  it('should edit field', () => {
    // find edit button
    cy.contains('edit').click()

    // lets go edit field
    cy.get('#label').type('Password')
    cy.get('#placeholder').type('Enter password')
    cy.get('#required').click()
    cy.get('#width').type('250')
    cy.get('#height').type('50')
    cy.get('#fontSize').type('16')
    cy.get('#fontWeight').type('500')
    cy.get('#borderStyle').click().get('mat-option').contains('dashed').click()
    cy.get('#color').type('#ff0bce')

    // submitting edit form
    cy.contains('SUBMIT').click()
  })
  it('get data from edited field', () => {
// get field by name that we input in label field
    cy.contains('Password').next().click().type('MyPassword')

    // click to send button
    cy.contains('SEND').click()

    // after send we get alert, so get data from alert and show it in console
    cy.on('window:alert', msg => {
      console.log(msg)
    });
  })
  it('should delete field', () => {
    cy.contains('delete').click()
    cy.wait(500)
    cy.contains('Password').should('not.exist')
  })
  // let's create login form
  it('should create Username input', () => {
    // drag and drop input
    cy.get('#input')
      .trigger("mousedown", {button: 0})
    cy.wait(500);
    cy.get('#form-creator')
      .trigger('mousemove')
      .trigger('mouseleave')
    cy.contains('Select Items').click();

    // enter field values to form
    cy.get('#label').type('Username')
    cy.get('#placeholder').type('Enter username')
    cy.get('#required').click()
    cy.get('#width').type('300')
    cy.get('#height').type('40')
    cy.get('#fontSize').type('20')
    cy.get('#fontWeight').type('500')
    cy.get('#borderStyle').click().get('mat-option').contains('solid').click()
    cy.get('#color').type('#ff0fd6')
    cy.contains('SUBMIT').click()
  })
  it('should create Password input', () => {
    // drag and drop input
    cy.get('#input')
      .trigger("mousedown", {button: 0})
    cy.wait(500);
    cy.get('#form-creator')
      .trigger('mousemove')
      .trigger('mouseleave')
    cy.contains('Select Items').click();

    // enter field values to form
    cy.get('#label').type('Password')
    cy.get('#placeholder').type('Enter password')
    cy.get('#required').click()
    cy.get('#width').type('300')
    cy.get('#height').type('40')
    cy.get('#fontSize').type('20')
    cy.get('#fontWeight').type('500')
    cy.get('#borderStyle').click().get('mat-option').contains('solid').click()
    cy.get('#color').type('#3efbcf')
    cy.contains('SUBMIT').click()
  })
  it('should create remember me checkbox', () => {
    // drag and drop input
    cy.get('#checkbox')
      .trigger("mousedown", {button: 0})
    cy.wait(500);
    cy.get('#form-creator')
      .trigger('mousemove')
      .trigger('mouseleave')
    cy.contains('Select Items').click();

    // enter field values to form
    cy.get('#label').type('Remember me')
    cy.get('#text').type('remember me')
    cy.get('#fontSize').type('20')
    cy.get('#fontWeight').type('500')
    cy.get('#color').type('#00ffea')
    cy.contains('SUBMIT').click()
  })
  // now we fill form with some test values
  it('should fill values in login form', () => {
    cy.contains('Username').next().click().type('romaniv1437')
    cy.contains('Password').next().click().type('123456')
    cy.contains('Remember me').next().click()

    // click to send button
    cy.contains('SEND').click()

    // after send we get alert, so get data from alert and show it in console
    cy.on('window:alert', msg => {
      console.log(msg)
    });
  })

  // let's edit login form to registration form, we just edit Username Input
  it('should edit username input correctly', () => {
    cy.get('#cdk-drop-list-3 > div:nth-child(1) > app-form-dynamic > div > div > div > mat-icon:nth-child(2)').click()

    // lets go edit field
    cy.get('#label').type('Email')
    cy.get('#placeholder').type('Enter email')
    cy.get('#width').type('300')
    cy.get('#height').type('30')
    cy.get('#fontSize').type('20')
    cy.get('#fontWeight').type('500')
    cy.get('#borderStyle').click().get('mat-option').contains('solid').click()
    cy.get('#color').type('#00ff05')

    // submitting edit form
    cy.contains('SUBMIT').click()
  })
  it('get last value from form', () => {
    cy.contains('Email').next().click().type('My email')
    // click to send button
    cy.contains('SEND').click()

    // after send we get alert, so get data from alert and show it in console
    cy.on('window:alert', msg => {
      console.log(msg)
    });
  })
  // let's delete all fields and go to home page
  it('should delete all field that exists on form', () => {
    // we have 3 fields, so delete 3 times
    cy.contains('delete').click()
    cy.contains('delete').click()
    cy.contains('delete').click()

    cy.contains('Angular Form Builder').click()
  })
})
