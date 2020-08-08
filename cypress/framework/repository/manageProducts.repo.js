
var manageProducts = function() {

    this.navigateTOManageProducts = function() {
        cy.server()
        .route('POST', '/v2/track')
        .as('productList');
        cy.get('div.ui-card.ui-widget.ui-widget-content.ui-corner-all').should('be.visible').eq(4).click();
        cy.wait('@productList').then(function(xhr){
            expect(xhr.status).to.eq(200);
        })
        cy.get('.page-title').should('be.visible').contains('Manage Products');
        cy.wait(2000);
    }
    
    this.clickOnHeader = function(headerName) {
        var requiredLoc;
        // cy.server()
        // .route('POST', '/v2/track')
        // .as('productList');
        switch (headerName.toLowerCase()) {
            case 'product name':
                requiredLoc = 'th.ui-sortable-column.ng-star-inserted:nth-child(3)';
                break;
            case 'product style':
                requiredLoc = 'th.ui-sortable-column.ng-star-inserted:nth-child(4)';
                break;
            case 'product brand':
                requiredLoc = 'th.ui-sortable-column.ng-star-inserted:nth-child(6)';
                break;
            case 'product manufacturer':
                requiredLoc = 'th.ui-sortable-column.ng-star-inserted:nth-child(7)';
                break;
            case 'updated date':
                requiredLoc = 'th.ui-sortable-column.ng-star-inserted:nth-child(10)';
                break;
            default:
                cy.log(`${requiredLoc}is not a valid option`);
        }
        cy.get(requiredLoc).should('be.visible').click();
        // cy.wait('@productList').then(function(xhr){
        //     expect(xhr.status).to.eq(200);
        // })
        cy.get('td.ng-star-inserted:nth-child(3)').should('be.visible');
        cy.wait(2000);
    }

    this.verifyColumnSroted = function(headerName, sortType) {
        var requiredLoc;
        switch (headerName.toLowerCase()) {
            case 'product name':
                requiredLoc = 'td.ng-star-inserted:nth-child(3)';
                break;
            case 'product style':
                requiredLoc = 'td.ng-star-inserted:nth-child(4)';
                break;
            case 'product brand':
                requiredLoc = 'td.ng-star-inserted:nth-child(6)';
                break;
            case 'product manufacturer':
                requiredLoc = 'td.ng-star-inserted:nth-child(7)';
                break;
            case 'updated date':
                requiredLoc = 'td.ng-star-inserted:nth-child(10)';
                break;
            default:
                cy.log(`${requiredLoc}is not a valid option`);
        }
        cy.get(requiredLoc).should('be.visible').then($els => {
            const originalNames = Array.from($els, el => {
                return el.innerText.trim();
            });
            if (originalNames.length > 15 ) {
                originalNames.length = 15;
            }
            const sortedNames = [...originalNames];
            sortedNames.sort();
            if (sortType.toLowerCase()==='descending') {
                sortedNames.reverse();
            }
            expect(JSON.stringify(originalNames)).to.equal(JSON.stringify(sortedNames));
        });
    }

    this.verifyDeleteButtonEnabled = function(bolValue) {
        if (bolValue) {
            cy.get('.button-bar-top').find('button[type="button"]').should('not.be.disabled');
        } else {
            cy.get('.button-bar-top').find('button[type="button"]').should('be.disabled');
        }
    }

    this.clickSelectAllInList = function() {
        cy.get('.ui-chkbox > .ui-chkbox-box')
            .eq(0) 
            .should('be.visible')
            .click({force:true});
    }

    this.searchForProductIn = function(headerName, searchTxt){
        var requiredLoc;
        switch (headerName.toLowerCase()) {
            case 'product name':
                requiredLoc = ':nth-child(3) > .ui-inputtext';
                break;
            case 'product style':
                requiredLoc = ':nth-child(4) > .ui-inputtext';
                break;
            case 'product brand':
                requiredLoc = ':nth-child(6) > .ui-inputtext';
                break;
            case 'product manufacturer':
                requiredLoc = ':nth-child(7) > .ui-inputtext';
                break;
            case 'updated date':
                requiredLoc = ':nth-child(10) > .ui-inputtext';
                break;
            default:
                cy.log(`${requiredLoc}is not a valid option`);
        }
        cy.get(requiredLoc).type(`${searchTxt}{enter}`);
        cy.wait(2000);
    }

    this.clickAllChckboxesIndividual = function(){
        cy.get('.ui-chkbox > .ui-chkbox-box').each(($el, index) => {
            if(index == 0){
                cy.wrap($el).click();
            }
        });
    }

}

module.exports = new manageProducts()