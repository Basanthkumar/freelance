/// <reference types="cypress" />
let mifp = require('../framework/repository/manageIndustryFloorplans.repo');

var userDataSet;
var mifpData;

describe('Sprint-1 - GOAP-19 - User group-role listing page', function () {
    before(function(){
        cy.fixture('users').then(function(data) {
            userDataSet = data;
        })
        cy.fixture('manageIndustryFloorplans').then(function(data) {
            mifpData = data.GOAP_19;
        })


    })

    it('[GOAP-19 TC-1, Verify add industry functionality when user clicks on Add New Industry option] ', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mifp.navigateTOManageIndustryFloorPlan();
        mifp.clickOnAddNewIndustryButton();
    });

    it('[GOAP-19 TC-2, Verify details of Add Industry screen] ', function () {
        mifp.verifyAddIndustriesComponent();
    });

    it('[GOAP-19 TC-3, Verify Industry Name field at Add Industry screen]', function () {
        mifp.enterDataInAddIndustryDialog(mifpData.addIndustryData);
        mifp.clickSaveInAddIndustryDialog();
        mifp.verifyToastAs('Information Saved Successfully');
    });
    
    it('[GOAP-19 TC-4, Verify validation message when user is trying save Industry Name with space value] ', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mifp.navigateTOManageIndustryFloorPlan();
        mifp.clickOnAddNewIndustryButton();
        mifp.enterDataInAddIndustryDialog(mifpData.addIndustrySpaceNameData);
        mifp.clickSaveInAddIndustryDialog();
        mifp.verifyNameInIndustryDetailPage(mifpData.addIndustrySpaceNameData);
    });
    
    it('[GOAP-19 TC-5, Verify validation message when user exceeded character limit for Industry Name field] ', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mifp.navigateTOManageIndustryFloorPlan();
        mifp.clickOnAddNewIndustryButton();
        mifp.verifyLimitOfNameFieldInAddIndustry(mifpData.industryNameMorethanLimit);
    });
    
    it('[GOAP-19 TC- 6, Verify validation message when user enters duplicate industry name within same region] ', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mifp.navigateTOManageIndustryFloorPlan();
        mifp.clickOnAddNewIndustryButton();
        mifp.enterDataInAddIndustryDialog(mifpData.addIndustrySpaceNameData);
        mifp.clickSaveInAddIndustryDialog();
        mifp.verifyToastAs('Industry name already exists');
    });
    
    it('[GOAP-19 TC- 7, Verify validation message when user enters deleted industry record name within same region ] ', function () {  
    });
    
    it('[GOAP-19 TC-8, Verify validation message when user enters deleted industry record name from different region ] ', function () {
    });
    
    it('[GOAP-19 TC-9, Verify that Industry Name is mandatory field ] ', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mifp.navigateTOManageIndustryFloorPlan();
        mifp.clickOnAddNewIndustryButton();
        mifp.enterDataInAddIndustryDialog(mifpData.addIndustryData_TC9);
        mifp.verifySaveButtonEnabled(false);
    });
    
    it('[GOAP-19 TC-10, Verify Select Region field at Add Industry screen ] ', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mifp.navigateTOManageIndustryFloorPlan();
        mifp.clickOnAddNewIndustryButton();
        mifp.verifyRegionIsDropdownInAddIndustryDialog()
    });
    
    it('[GOAP-19 TC-11, Verify Select Region field at Add Industry screen when user selects drop down value ] ', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mifp.navigateTOManageIndustryFloorPlan();
        mifp.clickOnAddNewIndustryButton();
        mifp.checkRegionValuesInAddIndustryDialog(mifpData.regionDropdownValues_TC11);
    });
    
    it('[GOAP-19 TC- 12, Verify Select Region field at Add Industry screen when user is trying to select multiple values from drop down field ] ', function () {
    });
    
    it('[GOAP-19 TC- 13, Verify order of Select Region drop down values] ', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mifp.navigateTOManageIndustryFloorPlan();
        mifp.clickOnAddNewIndustryButton();
        mifp.verifyRegionValuesAlphabeticOrderInAddIndustryDialog();
    });
    
    it('[GOAP-19 TC-14, Verify that Select Region is mandatory field ] ', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mifp.navigateTOManageIndustryFloorPlan();
        mifp.clickOnAddNewIndustryButton();
        mifp.enterDataInAddIndustryDialog(mifpData.regionDropdownValues_TC14);
        mifp.verifySaveButtonEnabled(false);

    });
    
    it('[GOAP-19 TC-15, Verify Industry Status field at Add Industry screen ] ', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mifp.navigateTOManageIndustryFloorPlan();
        mifp.clickOnAddNewIndustryButton();
        mifp.verifyStatusIsDropdownInAddIndustryDialog();
    });
    
    it('[GOAP-19 TC-16, Verify Industry Status field at Add Industry screen when user selects drop down value ] ', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mifp.navigateTOManageIndustryFloorPlan();
        mifp.clickOnAddNewIndustryButton();
        mifp.checkStatusValuesInAddIndustryDialog(mifpData.regionDropdownValues_TC16);
    });
    
    it('[GOAP-19 TC-17, Verify Industry Status field at Add Industry screen when user is trying to select multiple values from drop down field ] ', function () {
    });

    it('[GOAP-19 TC-18, Verify order of Industry Status drop down values ] ', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mifp.navigateTOManageIndustryFloorPlan();
        mifp.clickOnAddNewIndustryButton();
        mifp.verifyStatusValuesAlphabeticOrderInAddIndustryDialog();
    });

    it('[GOAP-19 TC-19, Verify that Industry Status is mandatory field ] ', function () {
    });
    it('[GOAP-19 TC-20, ] ', function () {
    });
    it('[GOAP-19 TC-21, ] ', function () {
    });
    it('[GOAP-19 TC-22, ] ', function () {
    });
    it('[GOAP-19 TC-23, ] ', function () {
    });
    it('[GOAP-19 TC-24, ] ', function () {
    });
    it('[GOAP-19 TC-25, ] ', function () {
    });
   
});