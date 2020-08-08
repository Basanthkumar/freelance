/// <reference types="cypress" />
let mifp = require('../framework/repository/manageIndustryFloorplans.repo');

var userDataSet;
var mifpData;

describe('Sprint-1 - GOAP-11 - User group-role listing page', function () {
    before(function(){
        cy.fixture('users').then(function(data) {
            userDataSet = data;
        })
        cy.fixture('manageIndustryFloorplans').then(function(data) {
            mifpData = data;
        })

        cy.fixture('manageIndustryFloorplans').then(function(searchReg) {
            mifpData = searchReg.GOAP_17_tC7;
        })

        cy.fixture('manageIndustryFloorplans').then(function(searchData) {
            mifpData = searchData.GOAP_17_tC8and9;
        })

        cy.fixture('manageIndustryFloorplans').then(function(searchData) {
            mifpData = searchData.GOAP_17_tC10and11;
        })

        cy.fixture('manageIndustryFloorplans').then(function(searchData) {
            mifpData = searchData.GOAP_17_tC12and13;
        })

        cy.fixture('manageIndustryFloorplans').then(function(searchData) {
            mifpData = searchData.GOAP_17_tC18and19;
        })



    })

    it('[GOAP-17 TC-1, Verify the Manage Industry Floorplan screen] ', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mifp.navigateTOManageIndustryFloorPlan();
        mifp.verifyPageTitle(mifpData.pageTitle);
        mifp.VerifyTabNames(mifpData.tabNames);
        mifp.VerifyDefaultTabOpened(mifpData.defaultSelectedTab);
    });

    it('[GOAP-17 TC-2, Verify the content of Industry Floorplan tab ] ', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mifp.navigateTOManageIndustryFloorPlan();
        mifp.verifyItsContent();
    });

    it('[GOAP-17 TC-3, Verify the content of Advanced Search section ] ', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mifp.navigateTOManageIndustryFloorPlan();
        mifp.searchWith();
        mifp.verifySearchResult();
    });

    it('[GOAP-17 TC-4, Verify the content of Industry Listing section ] ', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mifp.navigateTOManageIndustryFloorPlan();
        // data required for validation
    });

    it('[GOAP-17 TC-6, Verify the Search by Region drop down in Advanced Search section ] ', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mifp.navigateTOManageIndustryFloorPlan();
        mifp.verifyRegionDropdownValues(mifpData.regionDropdownValues);
    });


    it('GOAP-17 TC-7,Verify if industry can be searched using Search by Region drop down', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mifp.navigateTOManageIndustryFloorPlan();
        mifp.selectOptionInSerchRegionAndSearch(mifpData.searchByRegion.input4);
    }); 


    it('GOAP-17 TC-8 ,Verify if industry can be searched using Search by Industry text field', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mifp.navigateTOManageIndustryFloorPlan();
        mifp.searchByIndusrty(mifpData.SearchIndustyPositive.input1);
        mifp.searchByIndusrty(mifpData.SearchIndustyPositive.input2);
        mifp.searchByIndusrty(mifpData.SearchIndustyPositive.input3);
        mifp.searchByIndusrty(mifpData.SearchIndustyPositive.input4);
    }); 

    it('GOAP-17 TC-9 ,Verify if industry can be searched using Search by Industry text field', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mifp.navigateTOManageIndustryFloorPlan();
        mifp.verifySearchResult()
        mifp.searchByIndusrty(mifpData.SearchIndustyNegative.input1);
        mifp.verifySearchResult()
        mifp.searchByIndusrty(mifpData.SearchIndustyNegative.input2);
        mifp.verifySearchResult()
        mifp.searchByIndusrty(mifpData.SearchIndustyNegative.input3);
        mifp.verifySearchResult()
        mifp.searchByIndusrty(mifpData.SearchIndustyNegative.input4);
        mifp.verifySearchResult()
        mifp.searchByIndusrty(mifpData.SearchIndustyNegative.input5);
        mifp.verifySearchResult()

    }); 

    it('GOAP-17 TC-10 ,Verify if industry can be searched using Search by Process text field', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mifp.navigateTOManageIndustryFloorPlan();
        mifp.searchByProcess(mifpData.SearchProcessPositive.input1)
        mifp.searchByProcess(mifpData.SearchProcessPositive.input2)
        mifp.searchByProcess(mifpData.SearchProcessPositive.input3)
        mifp.searchByProcess(mifpData.SearchProcessPositive.input4)
    }); 

    it('GOAP-17 TC-11 ,Verify if industry can be searched using Search by Process text field', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mifp.navigateTOManageIndustryFloorPlan();
        mifp.searchByProcess(mifpData.SearchProcessNegative.input1)
        mifp.verifySearchResult()
        mifp.searchByProcess(mifpData.SearchProcessNegative.input2)
        mifp.verifySearchResult()
        mifp.searchByProcess(mifpData.SearchProcessNegative.input3)
        mifp.verifySearchResult()
        mifp.searchByProcess(mifpData.SearchProcessNegative.input4)
        mifp.verifySearchResult()
    }); 

    it('GOAP-17 TC-12 ,Verify if industry can be searched using Search by Application text field', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mifp.navigateTOManageIndustryFloorPlan();
        mifp.searchByApplication(mifpData.SearchApplicatinPositive.input1)
        mifp.searchByApplication(mifpData.SearchApplicatinPositive.input2)
        mifp.searchByApplication(mifpData.SearchApplicatinPositive.input3)
        mifp.searchByApplication(mifpData.SearchApplicatinPositive.input4)



        
    }); 

    it('GOAP-17 TC-13 ,Verify if industry can be searched using Search by Application text field', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mifp.navigateTOManageIndustryFloorPlan();
        mifp.searchByApplication(mifpData.SearchApplicationNegative.input1)
        mifp.verifySearchResult()
        mifp.searchByApplication(mifpData.SearchApplicationNegative.input2)
        mifp.verifySearchResult()
        mifp.searchByApplication(mifpData.SearchApplicationNegative.input3)
        mifp.verifySearchResult()
        mifp.searchByApplication(mifpData.SearchApplicationNegative.input4)
        mifp.verifySearchResult()



    }); 

    it('GOAP-17 TC-14 ,Verify the Search by Product Category drop down in Advanced Search section', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mifp.navigateTOManageIndustryFloorPlan();
        mifp.selectOptionInProductCatagoryAndSearch()
        
    }); 

    it('GOAP-17 TC-16 ,Verify the Search by Product Category drop down in Advanced Search section', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mifp.navigateTOManageIndustryFloorPlan();
        mifp.selectOptionInSerchRegionAndSearch(mifpData.searchByRegion.Default);
        mifp.selectOptionInProductCatagoryAndSearch()
        
    }); 

    it('GOAP-17 TC-17 ,Verify the Search by Product Category drop down in Advanced Search section', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        // test data not availble //
        
    }); 

    it('GOAP-17 TC-18 ,Verify if industry can be searched using Search by Product Name auto-complete drop down', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mifp.navigateTOManageIndustryFloorPlan();
        mifp.selectOptionInSerchRegionAndSearch(mifpData.searchByRegion.Default); // select default select region from search by region //
        mifp.autoSelectProductName(mifpData.SearchProductPositive.input1)
        //select default select region from search by region //
        mifp.autoSelectProductName(mifpData.SearchProductPositive.input2)
       // select default select region from search by region //
       mifp.autoSelectProductName(mifpData.SearchProductPositive.input3)
         // select default select region from search by region //
         mifp.autoSelectProductName(mifpData.SearchProductPositive.input4)

    }); 

    it('GOAP-17 TC-19 ,Verify if industry can be searched using Search by Product Name auto-complete drop down', function () {
        cy.login(userDataSet.url,userDataSet.email,userDataSet.password);
        mifp.navigateTOManageIndustryFloorPlan();
        mifp.selectOptionInSerchRegionAndSearch(mifpData.searchByRegion.Default); // select default select region from search by region //
        mifp.autoSelectProductName(mifpData.SearchProductNegative.input1)
        // validation // No records found // 
        // select default select region from search by region //
        mifp.autoSelectProductName(mifpData.SearchProductNegative.input2)
        // validation // No records found // 

     
    }); 














   
});