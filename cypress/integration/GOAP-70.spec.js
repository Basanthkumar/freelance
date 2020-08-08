/// <reference types="cypress" />
let mp = require('../framework/repository/manageProducts.repo');

var userDataSet;

describe('GOAP-70 - User group-role listing page', function () {
    before(function(){
        cy.fixture('users').then(function(data) {
            userDataSet = data;
        })
    })

    it('[GOAP-70 TC-1, Verify the sorting functionality provided for each column ] ', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mp.navigateTOManageProducts();

        // mp.verifyColumnSroted('Product Name','Ascending');
        // mp.clickOnHeader('Product Name');
        // mp.verifyColumnSroted('Product Name', 'Descending');

        // mp.clickOnHeader('Product Style');
        // mp.verifyColumnSroted('Product Style','Ascending');
        // mp.clickOnHeader('Product Style');
        // mp.verifyColumnSroted('Product Style','Descending');

        mp.clickOnHeader('product brand');
        mp.verifyColumnSroted('product brand','Ascending');
        mp.clickOnHeader('product brand');
        mp.verifyColumnSroted('product brand','Descending');

        mp.clickOnHeader('Product Manufacturer');
        mp.verifyColumnSroted('Product Manufacturer','Ascending');
        mp.clickOnHeader('Product Manufacturer');
        mp.verifyColumnSroted('Product Manufacturer','Descending');

        mp.clickOnHeader('Updated Date');
        mp.verifyColumnSroted('Updated Date','Ascending');
        mp.clickOnHeader('Updated Date');
        mp.verifyColumnSroted('Updated Date','Descending');

    });

    it('[GOAP-70 TC-2, Verify if Non-ansell products can be selected for deletion ] ', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mp.navigateTOManageProducts();
        mp.searchForProductIn('product manufacturer','3m');
        mp.clickAllChckboxesIndividual();
        mp.verifyDeleteButtonEnabled(true);
    });

    it('[GOAP-70 TC-3, Verify if Non-ansell products can be deselected ] ', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mp.navigateTOManageProducts();
        mp.searchForProductIn('product manufacturer','3m');
        mp.clickAllChckboxesIndividual();
        mp.verifyDeleteButtonEnabled(true);
        mp.clickAllChckboxesIndividual();
        mp.verifyDeleteButtonEnabled(false);
    });

    it('[GOAP-70 TC-4, Verify if all Non-ansell products can be selected or deselected] ', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mp.navigateTOManageProducts();
        mp.verifyDeleteButtonEnabled(false);
        mp.clickSelectAllInList();
        mp.verifyDeleteButtonEnabled(true);
        mp.clickSelectAllInList();
        mp.verifyDeleteButtonEnabled(false);
    });

    it('[GOAP-70 TC-5, Verify the Delete button ] ', function () {
    });
   
});