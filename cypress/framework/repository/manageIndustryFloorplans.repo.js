var manageIndustryFloorPlan = function () {

    this.navigateTOManageIndustryFloorPlan = function () {
        cy.get('div.ui-card.ui-widget.ui-widget-content.ui-corner-all').should('be.visible').eq(2).click();
    }

    this.verifyPageTitle = function (title) {
        cy.title().should('eq', title)
    }

    this.VerifyTabNames = function (args) {
        var index = 0;
        for (const expText of args) {
            cy.get(`#ui-tabpanel-${index}-label`).should('be.visible').invoke('text').then(actualText => {
                expect(actualText.toLowerCase()).to.eq(expText.toLowerCase());
            });
            index++;
        }
    }

    this.VerifyDefaultTabOpened = function (tabName) {
        cy.get('#ui-tabpanel-0-label').should('be.visible').invoke('attr', 'aria-selected').then(actualText => {
            expect(actualText.toLowerCase()).to.eq('true');
        });
        cy.get('#ui-tabpanel-0-label').should('be.visible').invoke('text').then(actualText => {
            expect(actualText.toLowerCase()).to.eq(tabName.toLowerCase());
        });
    }

    this.verifyItsContent = function () {
        cy.get('button').contains('Back').should('be.visible');
        cy.get('button').contains('Delete').should('be.visible');
        cy.get('button').contains('Add New Industry').should('be.visible');
        cy.get('button').contains('Search').should('be.visible');
        cy.get('#ui-tabpanel-0').should('be.visible');
        cy.get('.page-title').contains('Manage Industry Floorplan').should('be.visible');
    }

    this.searchWith = function () {
        cy.get('.ui-dropdown-label-container > .ng-tns-c42-6').should('be.visible').click({ force: true });
        cy.get(':nth-child(2) > .ui-dropdown-item').should('be.visible').click({ force: true });
        cy.get(':nth-child(2) > .form-group > .ui-float-label > .ng-untouched').should('be.visible').type('xxx');
        cy.get(':nth-child(3) > .form-group > .ui-float-label > .ng-untouched').should('be.visible').type('xxxx');
        cy.get(':nth-child(4) > .form-group > .ui-float-label > .ng-pristine').should('be.visible').type('xxx');
        cy.get('.ui-dropdown-label-container > .ng-tns-c42-7').should('be.visible').click({ force: true });
        cy.get(':nth-child(2) > .ui-dropdown-item').should('be.visible').click({ force: true });
        cy.get('#autoComplete').should('be.visible').type('xx');

        cy.get('button').contains('Clear').should('be.visible');
        cy.get('button').contains('Search').should('be.visible').click();
    }

    this.verifySearchResult = function () {
        cy.get('.all-industry-blocks').should('contain.text', 'No Records Found')

    }

    this.verifyRegionDropdownValues = function (optionsArray) {
        cy.get('.ui-dropdown-label-container > .ng-tns-c42-6').should('be.visible').click({ force: true });
        var index = 1;
        for (const options of optionsArray) {
            cy.get(`:nth-child(${index}) > .ui-dropdown-item`).contains(options);
            index++;
        }
    }

    this.clickOnAddNewIndustryButton = function () {
        cy.get('button').contains('Add New Industry').should('be.visible').click();
        cy.get('.ui-dialog-content').should('be.visible');
    }

    this.verifyAddIndustriesComponent = function () {
        cy.get('.ui-dialog-content').should('be.visible').within(function () {
            cy.get('#industryName').should('be.visible');
            cy.get('.ui-dropdown-label-container > .ng-tns-c42-11').should('be.visible');
            cy.get('.ui-dropdown-label-container > .ng-tns-c42-12').should('be.visible');
            cy.get('.ui-multiselect-label-container').should('be.visible');
            cy.get('.ui-fileupload-buttonbar').should('be.visible');
            cy.get('button').contains('Cancel').should('be.visible');
            cy.get('button').contains('Save').should('be.visible');
        });
    }

    var todayDate = new Date();
    var todayHour = todayDate.getHours();
    var todayMin = todayDate.getMinutes();
    var todaySec = todayDate.getSeconds();
    var uniqueString = todayHour.toString() + todayMin.toString() + todaySec.toString();

    this.enterDataInAddIndustryDialog = function (data) {
        cy.get('.ui-dialog-content').within(function () {
            if (data.name !== undefined) {
                cy.get('#industryName').type(data.name).type(uniqueString);
            }
            if (data.region !== undefined) {
                cy.get('.ui-dropdown-label-container > .ng-tns-c42-11').click();
                cy.get('.ui-dropdown > .ng-trigger').should('be.visible').contains(data.region).click();
            }
            if (data.state !== undefined) {
                cy.get('.ui-dropdown-label-container > .ng-tns-c42-12').click();
                cy.get('.ui-dropdown > .ng-trigger').contains(data.state).click();
            }
            if (data.faqDocument !== undefined) {
                cy.get('.ui-multiselect-label-container').click();
                cy.get('.ui-multiselect-filter-container > .ui-inputtext').should('be.visible').type(data.faqDocument);
                cy.get(':nth-child(1) > .ui-multiselect-item > .ng-star-inserted').should('be.visible').click();
            }
            if (data.image !== undefined) {
                // cy.fixture('industry.jpg').then(fileContent => {
                //     cy.get('.ui-fileupload-buttonbar').children().attachFile({
                //         fileContent: fileContent.toString(),
                //         fileName: 'industry.jpg',
                //         mimeType: 'image/jpg'
                //     });
                // });
            }
        });
    }

    this.clickSaveInAddIndustryDialog = function () {
        cy.get('button').contains('Save').click();
    }

    this.verifyToastAs = function (expectedText) {
        cy.get('.ui-toast-message-content').should('be.visible').invoke('text').then(function (actualText) {
            expect(actualText.toLowerCase()).to.eq(expectedText.toLowerCase())
        });
    }

    this.verifyNameInIndustryDetailPage = function (data) {
        cy.wait(5000);
        cy.get('.page-title').scrollIntoView().should('be.visible').invoke('text').then(function (actText) {
            expect(actText).to.contain((data.name + uniqueString).trim())
        });
    }

    this.verifyLimitOfNameFieldInAddIndustry = function (data) {
        cy.get('#industryName').type(data);
        cy.get('#industryName').invoke('val').then(function (expNoOfRecords) {
            expect(expNoOfRecords.length).not.to.be.greaterThan(100);
        });

    }

    this.verifySaveButtonEnabled = function (bolValue) {
        if (bolValue) {
            cy.get('button[type="submit"]').should('be.enabled')
        } else {
            cy.get('button[type="submit"]').should('be.disabled')
        }
    }

    this.verifyRegionIsDropdownInAddIndustryDialog = function () {
        cy.get('.ui-dropdown-label-container > .ng-tns-c42-11').click();
        cy.get('.ui-dropdown > .ng-trigger').should('be.visible').find('li').should('be.visible');
    }

    this.checkRegionValuesInAddIndustryDialog = function (data) {
        cy.get('.ui-dropdown-label-container > .ng-tns-c42-11').click();
        data.forEach(element => {
            cy.get('.ui-dropdown > .ng-trigger').should('be.visible').contains(element);
        });
    }

    this.verifyRegionValuesAlphabeticOrderInAddIndustryDialog = function () {
        cy.get('.ui-dropdown-label-container > .ng-tns-c42-11').click();
        cy.get('.ui-dropdown-item > .ui-multiselect-representative-option > .region_name').then($els => {
            const originalNames = Array.from($els, el => {
                return el.innerText.trim();
            });
            const sortedNames = [...originalNames];
            sortedNames.sort();
            expect(JSON.stringify(originalNames)).to.equal(JSON.stringify(sortedNames));
        });
    }

    this.verifyStatusIsDropdownInAddIndustryDialog = function () {
        cy.get('.ui-dropdown-label-container > .ng-tns-c42-12').click({ force: true });
        cy.get('.ui-dropdown > .ng-trigger').should('be.visible');
    }

    this.checkStatusValuesInAddIndustryDialog = function (data) {
        cy.get('.ui-dropdown-label-container > .ng-tns-c42-12').click({ force: true });
        data.forEach(element => {
            cy.get('.ui-dropdown > .ng-trigger').should('be.visible').contains(element);
        });
    }

    this.verifyStatusValuesAlphabeticOrderInAddIndustryDialog = function () {
        cy.get('.ui-dropdown-label-container > .ng-tns-c42-12').click();
        cy.get('.ui-dropdown-item').then($els => {
            const originalNames = Array.from($els, el => {
                return el.innerText.trim();
            });
            originalNames.shift();
            const sortedNames = [...originalNames];
            sortedNames.sort();
            expect(JSON.stringify(originalNames)).to.equal(JSON.stringify(sortedNames));
        });
    }


    this.selectOptionInSerchRegionAndSearch = function (searchReg) {

        cy.get('.ui-dropdown-label-container > .ng-tns-c42-6').type(searchReg).click()
        cy.get("[class='ui-button-text ui-clickable']").contains('Search').click()
        cy.get("[class='pull-right']").should('contain.text', searchReg)

    }


    this.searchByIndusrty = function (searchData) {

        cy.get("[formcontrolname='industryName']").clear()
            .type(searchData)
        cy.get("[class='ui-button-text ui-clickable']").contains('Search').click()
    }


    this.searchByProcess = function (searchData) {

        cy.get("[formcontrolname='processName']").clear()
            .type(searchData)
        cy.get("[class='ui-button-text ui-clickable']")
        .contains('Search')
        .click()
    }

    this.searchByApplication = function (searchData) {

        cy.get("[formcontrolname='applicationName']").clear()
            .type(searchData)
        cy.get("[class='ui-button-text ui-clickable']").contains('Search').click()
    }

    this.selectOptionInProductCatagoryAndSearch = function () {

        cy.get('.ui-dropdown-label-container > .ng-tns-c42-7').type("Hand Protection").click() 
        cy.get("[class='ui-button-text ui-clickable']").contains('Search').click()

    }

    this.autoSelectProductName = function (searchData) {

        cy.get("#autoComplete").clear()
        .type(searchData)
        cy.get("[class='ui-button-text ui-clickable']")
        .contains('Search')
        .click()

    }



}

module.exports = new manageIndustryFloorPlan()